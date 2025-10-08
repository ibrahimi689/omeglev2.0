import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ChatInterface.css';

function ChatInterface() {
  const [interests, setInterests] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [chatType, setChatType] = useState('');
  const navigate = useNavigate();

  const handleStartChat = () => {
    setChatType('text');
    setShowModal(true);
  };

  const handleVideoChat = () => {
    setChatType('video');
    setShowModal(true);
  };

  const handleAgree = () => {
    setShowModal(false);
    if (chatType === 'video') {
      navigate('/video');
    } else {
      navigate('/chatroom');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="chat-interface">
      <header className="header">
        <div className="logo-section">
          <img src="/assets/logo.png" alt="Omegle Logo" className="logo-icon" />
          <div className="logo-text">
            <h1 className="site-title">
              <span className="omegle-text">omegle</span>
              <span className="com-text">.com</span>
            </h1>
            <p className="tagline">Talk to strangers!</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="info-card card--red">
          <p className="card-text">⚠️ By using Omegle, you accept the terms at the bottom. You must be 18+ or 13+ with parental permission.</p>
        </div>

        <div className="info-card card--blue">
          <p className="card-text">📱 Mobile video chat is an experimental new feature.</p>
          <p className="card-text">📹 Video is monitored, so keep it clean!</p>
          <p className="card-text">Go to <span className="link-text">an adult site</span> instead if that's what you want.</p>
        </div>

        <div className="info-card card--purple">
          <div className="chat-buttons">
            <button className="chat-btn start-chat-btn" onClick={handleStartChat}>
              START A CHAT
            </button>
            <button className="chat-btn video-btn" onClick={handleVideoChat}>
              VIDEO
            </button>
          </div>
        </div>

        <div className="info-card card--green">
          <h3 className="interests-heading">🎯 Meet strangers with your interests!</h3>
          
          <div className="interests-input">
            <button className="add-btn">+</button>
            <input 
              type="text" 
              placeholder="Add your interests (optional)" 
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>
        </div>

        <div className="info-card">
          <p className="footer-text">
            ✨ Omegle is a great way to meet new friends, even while practicing social distancing. 🌍
          </p>
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">📋 Terms & Conditions</h2>
            <div className="modal-body">
              <p className="modal-text">
                This site is for educational purposes and content creators only. You are responsible for anything you upload or share. Illegal or inappropriate actions are your liability. The site owner is not responsible for user actions. Use at your own risk.
              </p>
            </div>
            <div className="modal-footer">
              <button className="agree-btn" onClick={handleAgree}>
                ✓ Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatInterface;
