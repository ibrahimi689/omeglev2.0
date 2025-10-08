import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ReadyToJoin.css';

const ReadyToJoin = () => {
  return (
    <div className="ready-page">
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
          <h1 className="main-title">⚡ Ready to Join?</h1>

          <div className="info-card card--purple">
            <p className="card-text">
              The world has changed, but our desire to connect hasn't. We still crave real conversations, real laughter, and real people — not endless scrolling or fake filters. That's why Omegle Web exists: to revive the spirit of spontaneous, meaningful, and respectful conversation. 🌐💬
            </p>
          </div>

          <h2 className="section-title">🌟 Why Join Omegle Web?</h2>

          <div className="info-card card--blue">
            <h4 className="feature-title">💫 Keep the Spirit Alive</h4>
            <p className="card-text">
              When the original Omegle went offline, millions felt a void — a place where random strangers could meet and talk freely was gone. But now, we're keeping that spark alive — in a modern, safe, and friendly way. Omegle Web is more than a platform; it's a global community built on respect, curiosity, and connection. 🌎
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🤝 Meet People, Not Profiles</h4>
            <p className="card-text">
              Unlike social apps filled with algorithms and filters, we bring you people, not polished images. No likes, no followers — just raw, authentic conversations with humans across the planet. You might meet someone from another country, culture, or time zone — and still find something in common. That's the magic. 🌍💬
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">📖 Share Stories That Matter</h4>
            <p className="card-text">
              Every chat is a new story waiting to be written. Talk about your dreams, music, goals, or random life thoughts — or just listen. A stranger today might be a friend tomorrow. Many people have met lifelong friends, mentors, and even love stories through platforms like this. Who knows what yours will be? 💭✨
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">⚡ Instant, Free, and Global</h4>
            <p className="card-text">
              No app. No signup. No limits. Just one click and you're connected to someone new. Whether you're at home, in a café, or bored after class — open your browser, tap "Start," and jump into a conversation that could change your mood or even your perspective. 💻📱
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🛡️ Respect at the Core</h4>
            <p className="card-text">
              We've learned from the past — and we're building a cleaner, safer experience. Omegle Web has strict community rules to protect every user from harassment and misuse. Respect isn't optional here — it's the foundation that keeps conversations healthy and fun. 🧠🤝
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🧠 For Everyone, Everywhere</h4>
            <p className="card-text">
              From students looking to practice a language to professionals taking a short break, everyone's welcome. It's open, inclusive, and designed for the world — no matter where you're from. 🌏
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🌈 Why Join Now?</h4>
            <p className="card-text">
              Because the world needs connection again. Because talking to strangers still teaches us empathy, perspective, and humor. And because sometimes, one short chat can remind you that kindness and curiosity still exist. ❤️
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🎯 Simplicity That Works</h4>
            <p className="card-text">
              No complicated setup, no accounts to manage. Just open, allow camera and mic, and you're ready to meet the world. The focus stays on real-time, real people, and real fun. ⚙️✨
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">🕊️ Freedom to Explore</h4>
            <p className="card-text">
              Chat for five minutes or five hours — it's up to you. There are no restrictions or algorithms pushing you in one direction. Just you, your curiosity, and the freedom to explore. 🧭
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🔮 A New Era of Connection</h4>
            <p className="card-text">
              This isn't just another chat site. It's a new era of digital communication — simple, free, and powered by humans, not social media machines. The goal is to reconnect the disconnected, revive the lost magic of random conversations, and remind the internet that it can still feel human. 🌟
            </p>
          </div>

          <div className="info-card card--light">
            <h3 className="card-title">So… are you ready?</h3>
            <p className="card-text">
              To laugh with a stranger, share your story, or just see who's out there?
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Click Start Chat, and step into a global space built for you — safe, spontaneous, and full of possibilities. 🌐💬
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600', fontSize: '16px' }}>
              Omegle Web — meet the world again. 🌎💚❤️
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Chat Now</Link>
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

export default ReadyToJoin;
