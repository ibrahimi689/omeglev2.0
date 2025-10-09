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

const textQueue = [];
const pairings = new Map();

function findMatch(socket) {
  const existingIndex = textQueue.findIndex(s => s.id === socket.id);
  if (existingIndex !== -1) {
    textQueue.splice(existingIndex, 1);
  }
  
  if (textQueue.length > 0) {
    const stranger = textQueue.shift();
    
    if (stranger.id === socket.id) {
      textQueue.push(socket);
      socket.emit('searching');
      console.log(`User ${socket.id} prevented self-match, added to queue. Queue size: ${textQueue.length}`);
      return;
    }
    
    pairings.set(socket.id, stranger.id);
    pairings.set(stranger.id, socket.id);
    
    socket.emit('matched', { strangerId: stranger.id });
    stranger.emit('matched', { strangerId: socket.id });
    
    console.log(`Matched: ${socket.id} <-> ${stranger.id}`);
  } else {
    textQueue.push(socket);
    socket.emit('searching');
    console.log(`User ${socket.id} added to queue. Queue size: ${textQueue.length}`);
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
  
  const queueIndex = textQueue.findIndex(s => s.id === socketId);
  if (queueIndex !== -1) {
    textQueue.splice(queueIndex, 1);
  }
}

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (roomType) => {
    if (roomType === 'text' || roomType === 'video') {
      rooms[roomType].add(socket.id);
      socket.join(roomType);
      
      io.to(roomType).emit('user-count', rooms[roomType].size);
      console.log(`User ${socket.id} joined ${roomType} room. Count: ${rooms[roomType].size}`);
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

  socket.on('skip-stranger', () => {
    console.log(`User ${socket.id} skipped stranger`);
    disconnectPair(socket.id);
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
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
