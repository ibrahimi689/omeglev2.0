import React from 'react';
import { Link } from 'react-router-dom';
import '../style/SafetyFirst.css';

const SafetyFirst = () => {
  return (
    <div className="safety-page">
      <header className="header">
        <div className="logo-section">
          <div className="logo-icon">🌐</div>
          <div className="logo-text">
            <h1 className="logo">omegle.com</h1>
            <p className="tagline">Talk to strangers!</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <h1 className="main-title">🛡️ Safety First — Because Your Privacy Matters Most! 🔐</h1>

          <div className="info-card card--purple">
            <p className="card-text">
              In the digital world, safety isn't optional — it's essential. Omegle Web is built with a strong privacy-first foundation to make sure every user feels secure while connecting with the world. Whether you're chatting for fun, learning, or friendship, your safety always comes first. 💬🌍
            </p>
          </div>

          <h2 className="section-title">🔐 Essential Safety Features</h2>

          <div className="info-card card--blue">
            <h4 className="feature-title">⚠️ Stay Anonymous, Stay Protected</h4>
            <p className="card-text">
              Your identity belongs to you — and only you. Omegle Web never asks for personal details like phone numbers, addresses, or real names. Every chat starts anonymously, so you can enjoy open conversation without revealing who you are. 🕵️‍♂️
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🔒 No Signups, No Tracking</h4>
            <p className="card-text">
              Unlike many social platforms that collect user data, Omegle Web keeps things private. There are no mandatory logins, no data selling, and no hidden analytics watching your every move. Your chats vanish when your session ends — leaving no trace. 🧭💻
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🚫 Never Share Personal Information</h4>
            <p className="card-text">
              It's simple: don't share private details. Avoid giving your phone number, email, address, school, or workplace. Even small clues can reveal more than you think. The safest chat is the one where your personal life stays offline. 📵
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🧠 Smart Moderation System</h4>
            <p className="card-text">
              To maintain a respectful environment, Omegle Web uses AI-powered filters and human moderation to detect harmful or inappropriate behavior. Suspicious users are automatically flagged or banned to keep everyone safe. ⚙️🚨
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🧍 Community Guidelines That Protect You</h4>
            <p className="card-text">
              Every user agrees to basic respect rules: no bullying, no threats, no hate speech, and no explicit content. Violating these leads to instant removal. These clear boundaries create a safer, friendlier chat space for all. 🤝🌈
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">📸 Control Your Camera and Microphone</h4>
            <p className="card-text">
              You decide when to turn on your camera or microphone. With one click, you can disconnect instantly — no pressure, no intrusion. Your device permissions always stay in your hands. 🎥🎧
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🧩 Privacy by Design</h4>
            <p className="card-text">
              From the ground up, Omegle Web was built with security in mind. Data encryption, anonymous sessions, and no permanent logs ensure your conversations stay private. Every technical layer prioritizes user safety over convenience. 🔐🧱
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">💡 Protect Yourself, Protect Others</h4>
            <p className="card-text">
              If someone behaves badly, use the report or block buttons. Every report helps improve community quality and protect future users. Responsible users make a safer world for everyone. 🛑🌍
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🕵️ Remember: Not Everyone Is Who They Say</h4>
            <p className="card-text">
              Online conversations are fun, but stay alert. Never trust anyone who pressures you for personal info, asks for money, or sends suspicious links. Trust your instincts and disconnect immediately if something feels off. ⚠️
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">🧘 Safer Internet, Better Experience</h4>
            <p className="card-text">
              Omegle Web's mission is to bring back the joy of random chats — minus the risks. By staying anonymous, respectful, and aware, you help create a space where everyone can feel comfortable meeting the world. 🌐💬
            </p>
          </div>

          <div className="info-card card--light">
            <h3 className="card-title">In short:</h3>
            <p className="card-text">
              Safety comes before everything. Stay anonymous, stay respectful, and never share private details. Omegle Web gives you the tools — you provide the awareness. Together, we keep the spirit of global connection secure and strong. 💚🛡️
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600', fontSize: '16px' }}>
              Be smart. Be kind. Be safe. 🌍🔒
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Chatting Safely</Link>
          </div>

          <footer className="footer">
            <p className="footer-text">
              © 2025 Omegle v2.0. All rights reserved. |
            </p>
            <p className="footer-links">
              Built January 2025 | <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> | <Link to="/terms-conditions" className="footer-link">Terms & Conditions</Link> | <Link to="/about" className="footer-link">About</Link> | <Link to="/contact" className="footer-link">Contact</Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default SafetyFirst;
