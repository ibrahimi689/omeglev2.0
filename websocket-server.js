// NOTE: This file is used for DEVELOPMENT ONLY with the separate WebSocket workflow.
// For PRODUCTION, server.js includes the Socket.IO functionality.
// This separation allows Vite proxy to work correctly in development.

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const rooms = {
  text: new Set(),
  video: new Set()
};

// Separate queues for normal and college mode
const textQueue = [];
const collegeQueue = [];
const pairings = new Map();
const userProfiles = new Map(); // Store user interests and mode

function calculateCommonInterests(interests1, interests2) {
  if (!interests1 || !interests2 || interests1.length === 0 || interests2.length === 0) {
    return [];
  }
  return interests1.filter(interest => 
    interests2.some(int => int.toLowerCase() === interest.toLowerCase())
  );
}

function findMatch(socket) {
  const userProfile = userProfiles.get(socket.id);
  if (!userProfile) {
    socket.emit('searching');
    return;
  }

  const queue = userProfile.isCollegeMode ? collegeQueue : textQueue;
  
  // Remove socket from queue if already there
  const existingIndex = queue.findIndex(s => s.id === socket.id);
  if (existingIndex !== -1) {
    queue.splice(existingIndex, 1);
  }
  
  let bestMatch = null;
  let maxCommonInterests = 0;
  let bestMatchIndex = -1;

  // Find best match based on common interests
  if (userProfile.interests && userProfile.interests.length > 0) {
    queue.forEach((stranger, index) => {
      if (stranger.id === socket.id) return;
      
      const strangerProfile = userProfiles.get(stranger.id);
      if (!strangerProfile) return;
      
      const commonInterests = calculateCommonInterests(
        userProfile.interests,
        strangerProfile.interests
      );
      
      if (commonInterests.length > maxCommonInterests) {
        maxCommonInterests = commonInterests.length;
        bestMatch = stranger;
        bestMatchIndex = index;
      }
    });
  }
  
  // If no interest match found, match with first available
  if (!bestMatch && queue.length > 0) {
    bestMatch = queue[0];
    bestMatchIndex = 0;
  }

  if (bestMatch && bestMatch.id !== socket.id) {
    queue.splice(bestMatchIndex, 1);
    
    const strangerProfile = userProfiles.get(bestMatch.id);
    const commonInterests = calculateCommonInterests(
      userProfile.interests,
      strangerProfile ? strangerProfile.interests : []
    );
    
    pairings.set(socket.id, bestMatch.id);
    pairings.set(bestMatch.id, socket.id);
    
    socket.emit('matched', { 
      strangerId: bestMatch.id,
      commonInterests: commonInterests
    });
    bestMatch.emit('matched', { 
      strangerId: socket.id,
      commonInterests: commonInterests
    });
    
    console.log(`Matched: ${socket.id} <-> ${bestMatch.id}, Common interests: ${commonInterests.join(', ')}`);
  } else {
    queue.push(socket);
    socket.emit('searching');
    console.log(`User ${socket.id} added to ${userProfile.isCollegeMode ? 'college' : 'normal'} queue. Queue size: ${queue.length}`);
  }
}

function disconnectPair(socketId) {
  const partnerId = pairings.get(socketId);
  
  if (partnerId) {
    pairings.delete(socketId);
    pairings.delete(partnerId);
    
    const partnerSocket = io.sockets.sockets.get(partnerId);
    if (partnerSocket) {
      partnerSocket.emit('stranger-disconnected');
      console.log(`Partner ${partnerId} notified of disconnection, auto-matching...`);
      findMatch(partnerSocket);
    }
  }
  
  // Remove from both queues
  const textIndex = textQueue.findIndex(s => s.id === socketId);
  if (textIndex !== -1) {
    textQueue.splice(textIndex, 1);
  }
  
  const collegeIndex = collegeQueue.findIndex(s => s.id === socketId);
  if (collegeIndex !== -1) {
    collegeQueue.splice(collegeIndex, 1);
  }
  
  userProfiles.delete(socketId);
}

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (data) => {
    const roomType = typeof data === 'string' ? data : data.roomType;
    const interests = data.interests || [];
    const isCollegeMode = data.isCollegeMode || false;
    const collegeEmail = data.collegeEmail || null;
    
    // Store user profile
    userProfiles.set(socket.id, {
      interests: interests,
      isCollegeMode: isCollegeMode,
      collegeEmail: collegeEmail
    });
    
    if (roomType === 'text' || roomType === 'video') {
      rooms[roomType].add(socket.id);
      socket.join(roomType);
      
      io.to(roomType).emit('user-count', rooms[roomType].size);
      console.log(`User ${socket.id} joined ${roomType} room. Interests: ${interests.join(', ')}, College mode: ${isCollegeMode}`);
    }
  });

  socket.on('start-matching', () => {
    console.log(`User ${socket.id} started matching`);
    findMatch(socket);
  });

  socket.on('send-message', (data) => {
    const partnerId = pairings.get(socket.id);
    if (partnerId) {
      const partnerSocket = io.sockets.sockets.get(partnerId);
      if (partnerSocket) {
        partnerSocket.emit('receive-message', { text: data.message, sender: 'stranger' });
        console.log(`Message from ${socket.id} to ${partnerId}: ${data.message}`);
      }
    }
  });

  socket.on('typing', () => {
    const partnerId = pairings.get(socket.id);
    if (partnerId) {
      const partnerSocket = io.sockets.sockets.get(partnerId);
      if (partnerSocket) {
        partnerSocket.emit('stranger-typing');
      }
    }
  });

  socket.on('stop-typing', () => {
    const partnerId = pairings.get(socket.id);
    if (partnerId) {
      const partnerSocket = io.sockets.sockets.get(partnerId);
      if (partnerSocket) {
        partnerSocket.emit('stranger-stop-typing');
      }
    }
  });

  socket.on('skip-stranger', () => {
    console.log(`User ${socket.id} skipped stranger`);
    const partnerId = pairings.get(socket.id);
    
    if (partnerId) {
      const partnerSocket = io.sockets.sockets.get(partnerId);
      pairings.delete(socket.id);
      pairings.delete(partnerId);
      
      if (partnerSocket) {
        partnerSocket.emit('stranger-disconnected');
        console.log(`Partner ${partnerId} notified of disconnection, auto-matching...`);
        findMatch(partnerSocket);
      }
      socket.emit('you-disconnected');
      
      console.log(`User ${socket.id} disconnected from ${partnerId}`);
    }
    
    findMatch(socket);
  });

  socket.on('leave-room', (roomType) => {
    if (roomType === 'text' || roomType === 'video') {
      rooms[roomType].delete(socket.id);
      socket.leave(roomType);
      
      io.to(roomType).emit('user-count', rooms[roomType].size);
      console.log(`User ${socket.id} left ${roomType} room. Count: ${rooms[roomType].size}`);
    }
    
    disconnectPair(socket.id);
  });

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
    disconnectPair(socket.id);
    
    ['text', 'video'].forEach(roomType => {
      if (rooms[roomType].has(socket.id)) {
        rooms[roomType].delete(socket.id);
        io.to(roomType).emit('user-count', rooms[roomType].size);
        console.log(`User ${socket.id} disconnected from ${roomType} room. Count: ${rooms[roomType].size}`);
      }
    });
  });
});

const PORT = process.env.WS_PORT || 3001;
httpServer.listen(PORT, 'localhost', () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
