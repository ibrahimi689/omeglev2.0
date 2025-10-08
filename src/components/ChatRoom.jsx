import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ChatRoom.css';

function TextChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'you' }]);
      setMessage('');
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleExit = () => navigate('/chat');

  const handleNew = () => {
    setMessages([]);
    setMessage('');
    setIsSearching(true);
  };

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
          <span className="eye-icon">👁</span> 1 online
        </div>
      </header>

      <div className="messages-container">
        {isSearching ? (
          <div className="searching-message">Looking for people online</div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))
        )}
      </div>

      <div className="chat-input-section">
        <button className="add-btn-chat">+</button>
        <input
          type="text"
          className="message-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="send-btn" onClick={handleSendMessage}>
          ➤
        </button>
        <button className="new-btn" onClick={handleNew}>
          ● New
        </button>
      </div>
    </div>
  );
}

export default TextChat;
