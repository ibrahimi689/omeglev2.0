import React from 'react';
import { Link } from 'react-router-dom';
import '../style/GlobalConnectionPlatform.css';

const GlobalConnectionPlatform = () => {
  return (
    <div className="global-platform-page">
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
          <h1 className="main-title">🌍 The Global Connection Platform</h1>

          <div className="info-card card--purple">
            <h3 className="card-title">Where the World Meets You! 🌐💬</h3>
            <p className="card-text">
              In a time when the internet often feels divided, Omegle Web stands for something simple yet powerful — connection. It brings together strangers from every corner of the planet, creating a shared space where conversation crosses all borders, languages, and cultures. 🌏✨
            </p>
          </div>

          <h2 className="section-title">🌎 Global Connection Features</h2>

          <div className="info-card card--blue">
            <h4 className="feature-title">🌎 One World, One Chat</h4>
            <p className="card-text">
              Imagine talking to someone in Japan, Brazil, or Kenya — all from your phone or laptop. Omegle Web breaks distance and difference with a single click. No passport, no travel costs, just instant communication with real people from across the world. 🌐💬
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🤝 Strangers Today, Friends Tomorrow</h4>
            <p className="card-text">
              Every chat begins as a mystery — you never know who's on the other side. But that's the beauty of it. Some of the best friendships, ideas, and collaborations start from unexpected conversations. Omegle Web makes that possible again. 💚
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🗣️ Real Conversations, Real People</h4>
            <p className="card-text">
              Unlike typical social platforms full of filters and algorithms, Omegle Web is raw and human. No likes, no followers, no status — just two people talking, sharing, learning, and laughing. That simplicity makes every interaction genuine. 🎙️💭
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🌏 A Truly Global Network</h4>
            <p className="card-text">
              People from over 150+ countries use platforms like this every day. From students practicing English to travelers sharing experiences, Omegle Web becomes a microcosm of the real world — full of voices, ideas, and perspectives. 🌈
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">💡 Discover, Don't Scroll</h4>
            <p className="card-text">
              Social media often traps users in repetition. Omegle Web frees you from that. Every click connects you to someone new, someone unpredictable — and that unpredictability keeps it exciting. 🚀
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🛡️ Safe, Modern, and Respectful</h4>
            <p className="card-text">
              The original Omegle opened the door to global chat — but the new version builds it stronger. With AI moderation, community rules, and privacy-first design, Omegle Web ensures your experience is smooth, secure, and positive. 🧠🔒
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">📱 No Barriers, No Apps</h4>
            <p className="card-text">
              You don't need to install anything or sign up. It runs directly in your browser, optimized for both mobile and desktop. Just open, allow camera and mic, and the world is at your fingertips. 💻📱
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">🎯 Perfect for Everyone</h4>
            <p className="card-text">
              Students learning languages, creators finding inspiration, or anyone just looking for a fun talk — Omegle Web fits all. Whether it's a deep conversation or a quick hello, there's always something new to experience. 💬🌍
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">💬 Beyond Small Talk</h4>
            <p className="card-text">
              This isn't just chatting — it's discovering global stories. Learn how others live, think, and dream. Each stranger represents a world you've never seen before. That's the real power of global connection. 🌌
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🔮 The Evolution of Omegle</h4>
            <p className="card-text">
              Omegle started a revolution in online communication. Omegle Web continues it — with smarter tech, safer systems, and stronger values. It's not about nostalgia; it's about building a better, more connected world for the future. ⚙️🌟
            </p>
          </div>

          <div className="info-card card--light">
            <h3 className="card-title">In short:</h3>
            <p className="card-text">
              Omegle Web is not just another chat site — it's the Global Connection Platform for the new generation. Fast, secure, and human at its core, it lets you meet the world in real time.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Start chatting. Start connecting. Start exploring. 🌐💬❤️
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Connecting Now</Link>
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

export default GlobalConnectionPlatform;
