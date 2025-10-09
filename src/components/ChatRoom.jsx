import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import '../style/ChatRoom.css';

function TextChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);
  const [strangerTyping, setStrangerTyping] = useState(false);
  const [showConnectedMsg, setShowConnectedMsg] = useState(false);
  const navigate = useNavigate();
  const socketRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim() && isConnected && socketRef.current) {
      setMessages(prev => [...prev, { text: message, sender: 'you' }]);
      socketRef.current.emit('send-message', { message });
      socketRef.current.emit('stop-typing');
      setMessage('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    
    if (isConnected && socketRef.current && e.target.value.length > 0) {
      socketRef.current.emit('typing');
      
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      
      typingTimeoutRef.current = setTimeout(() => {
        socketRef.current.emit('stop-typing');
      }, 1000);
    } else if (socketRef.current) {
      socketRef.current.emit('stop-typing');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleExit = () => navigate('/chat');

  const handleNewOrSkip = () => {
    if (isConnected && socketRef.current) {
      socketRef.current.emit('skip-stranger');
      setMessages([]);
      setIsSearching(true);
      setIsConnected(false);
      setStrangerTyping(false);
    } else {
      setMessages([]);
      setIsSearching(true);
      setIsConnected(false);
      setStrangerTyping(false);
      if (socketRef.current) {
        socketRef.current.emit('start-matching');
      }
    }
  };

  useEffect(() => {
    const socket = io({
      transports: ['websocket', 'polling']
    });
    socketRef.current = socket;

    socket.emit('join-room', 'text');

    socket.on('user-count', (count) => {
      setOnlineCount(count);
    });

    socket.on('searching', () => {
      setIsSearching(true);
      setIsConnected(false);
    });

    socket.on('matched', () => {
      setIsSearching(false);
      setIsConnected(true);
      setShowConnectedMsg(true);
      
      setTimeout(() => {
        setShowConnectedMsg(false);
      }, 6000);
    });

    socket.on('receive-message', (data) => {
      setMessages(prev => [...prev, { text: data.text, sender: 'stranger' }]);
      setStrangerTyping(false);
    });

    socket.on('stranger-typing', () => {
      setStrangerTyping(true);
    });

    socket.on('stranger-stop-typing', () => {
      setStrangerTyping(false);
    });

    socket.on('stranger-disconnected', () => {
      setMessages(prev => [...prev, { text: 'Stranger has disconnected.', sender: 'system' }]);
      setIsConnected(false);
      setIsSearching(false);
      setStrangerTyping(false);
    });

    socket.on('you-disconnected', () => {
      setMessages(prev => [...prev, { text: 'You have disconnected.', sender: 'system' }]);
      setIsConnected(false);
      setIsSearching(false);
      setStrangerTyping(false);
    });

    socket.emit('start-matching');

    return () => {
      socket.emit('leave-room', 'text');
      socket.disconnect();
    };
  }, []);

  return (
    <div className="chat-room">
      <header className="chat-header">
        <button className="exit-btn" onClick={handleExit}>
          ← Exit
        </button>
        <div className="header-center">
          <img src="/assets/logo.png" alt="Logo" className="header-logo" />
          <div className="header-info">
            <h1 className="header-title">omegle.com</h1>
            <p className="header-tagline">Talk to strangers!</p>
          </div>
        </div>
        <div className="online-status">
          <span className="eye-icon">👁</span> {onlineCount} online
        </div>
      </header>

      <div className="messages-container">
        {showConnectedMsg && (
          <div className="connected-message">Connected! You can now start chatting.</div>
        )}
        {isSearching ? (
          <div className="searching-message">Looking for someone you can chat with...</div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.sender === 'stranger' && <strong>Stranger: </strong>}
                {msg.sender === 'you' && <strong>You: </strong>}
                {msg.text}
              </div>
            ))}
            {strangerTyping && (
              <div className="typing-indicator">
                <strong>Stranger is typing</strong>
                <span className="typing-dots">
                  <span>.</span><span>.</span><span>.</span>
                </span>
              </div>
            )}
          </>
        )}
      </div>

      <div className="chat-input-section">
        <button className="add-btn-chat">+</button>
        <input
          type="text"
          className="message-input"
          placeholder={isConnected ? "Type your message..." : "Waiting for connection..."}
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          disabled={!isConnected}
        />
        <button className="send-btn" onClick={handleSendMessage} disabled={!isConnected}>
          ➤
        </button>
        <button className={`new-btn ${isConnected ? 'skip-btn' : ''}`} onClick={handleNewOrSkip}>
          {isConnected ? '⏭ Skip' : '● New'}
        </button>
      </div>
    </div>
  );
}

export default TextChat;
