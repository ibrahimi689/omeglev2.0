import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/VideoRoom.css';

function VideoChat() {
  const [message, setMessage] = useState('');
  const [isSearching, setIsSearching] = useState(true);
  const navigate = useNavigate();
  const userVideoRef = useRef(null);
  const userPreviewRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: false 
        });
        
        if (userVideoRef.current) {
          userVideoRef.current.srcObject = stream;
        }
        if (userPreviewRef.current) {
          userPreviewRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    return () => {
      if (userVideoRef.current?.srcObject) {
        userVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleExit = () => navigate('/chat');
  
  const handleSendMessage = () => {
    if (message.trim()) {
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

  const handleNew = () => {
    setMessage('');
    setIsSearching(true);
  };

  return (
    <div className="video-chat-room">
      <header className="video-header">
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

      <div className="video-section">
        <div className="stranger-video">
          <div className="video-placeholder">
            {isSearching && <div className="loading-spinner"></div>}
          </div>
          <div className="video-label">Stranger</div>
        </div>
        
        <div className="user-video">
          <video 
            ref={userVideoRef}
            autoPlay 
            muted 
            playsInline
            className="user-video-element"
          />
          <div className="video-label">You</div>
        </div>

        <div className="user-preview">
          <video 
            ref={userPreviewRef}
            autoPlay 
            muted 
            playsInline
            className="preview-video-element"
          />
        </div>
      </div>

      <div className="video-chat-bottom">
        {isSearching && (
          <div className="searching-messages">
            <div className="searching-message">Looking for people online</div>
            <div className="searching-message">Looking for people online</div>
          </div>
        )}
        
        <div className="video-input-section">
          <input
            type="text"
            className="video-message-input"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="video-send-btn" onClick={handleSendMessage}>
            ➤
          </button>
          <button className="video-new-btn" onClick={handleNew}>
            ● New
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoChat;
