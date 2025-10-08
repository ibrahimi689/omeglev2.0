import React from 'react';
import { Link } from 'react-router-dom';
import '../style/SuperiorExperience.css';

const SuperiorExperience = () => {
  return (
    <div className="superior-page">
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
          <h1 className="main-title">🚀 Superior Experience — The Future of Real Connections!</h1>

          <div className="info-card card--purple">
            <p className="card-text">
              Let's be honest — video chat should be simple, fun, and real. Omegle Web isn't just a replacement; it's an upgrade that takes everything good about old platforms like Ome TV, Monkey, and Omegle — and makes it smoother, safer, and way more human. 😎🔥
            </p>
          </div>

          <h2 className="section-title">⚡ Why We're Better</h2>

          <div className="info-card card--blue">
            <h4 className="feature-title">💬 Real-Time Global Chat, Reimagined</h4>
            <p className="card-text">
              Say goodbye to lag, bugs, and awkward freezes! Our platform runs on advanced real-time servers that optimize speed and connection quality, even on low bandwidth. Whether you're chatting from India, Brazil, or Germany — you'll feel like you're talking face-to-face. 🌍⚡
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🎯 Friendlier User Interface</h4>
            <p className="card-text">
              No clutter, no confusion — just clean design and instant connection. Our new UI helps you focus on what matters: meeting people, not fighting with menus. Dark mode, simple controls, and one-click video start make it perfect for everyone. 🖤
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🧠 Smart Matchmaking</h4>
            <p className="card-text">
              Forget random chaos. Our AI-based system pairs you with people who actually share your vibe — interests, language, and preferences included. You decide what kind of experience you want: chill chat, serious talks, or just laughs. 🎲✨
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🔒 Privacy and Respect First</h4>
            <p className="card-text">
              Unlike other platforms that collect user data, we believe in digital freedom. Your conversations stay private and encrypted. We don't store personal data, and every chat session is anonymous by default. 🛡️
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🧍 Community-Driven Moderation</h4>
            <p className="card-text">
              Toxicity ruins fun. That's why we built a smarter, community-led moderation system. Users can report, block, or flag inappropriate behavior in seconds — ensuring everyone feels welcome and safe. 🙌
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">⚙️ Better Technology = Better Vibes</h4>
            <p className="card-text">
              We use WebRTC technology, the same standard trusted by major platforms, but optimized for low-latency video and clear audio. Combined with adaptive streaming, it ensures smooth video quality even with weak internet. 🎧🎥
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🌈 Inclusive and Accessible for Everyone</h4>
            <p className="card-text">
              Built by students, inspired by global users. We designed this experience to work for all — no expensive devices needed. Whether you're on desktop, mobile, or tablet, the performance stays top-tier. 💻📱
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">🧩 Beyond Chat: Experiences That Connect</h4>
            <p className="card-text">
              Soon you'll see mini-games, themed chat rooms, and "interest hubs" — where people from around the world can talk about what they love most. It's more than chatting — it's a digital hangout that feels alive. 🎮💡
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🕹️ Ads, No Distractions</h4>
            <p className="card-text">
              We keep your space clean. No intrusive ads, no pop-ups breaking your flow. Just pure, uninterrupted connection — like it should be. 🧘
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🚀 The Future of Social Discovery</h4>
            <p className="card-text">
              Omegle Web is not about nostalgia — it's about the next evolution of global interaction. A place where you can meet strangers safely, express yourself freely, and have meaningful moments — all through one click. 🌐❤️
            </p>
          </div>

          <div className="info-card card--light">
            <h3 className="card-title">In short:</h3>
            <p className="card-text">
              Omegle Web redefines what online chat should feel like — fast, friendly, private, and futuristic. It's not just "like" Ome TV or Monkey — it's what they should have been.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Join the movement, meet the world, and experience real human connection again — the modern way. ✨💬🔥
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Your Superior Experience Now</Link>
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

export default SuperiorExperience;
