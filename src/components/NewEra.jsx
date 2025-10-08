import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NewEra.css';

const NewEra = () => {
  return (
    <div className="newera-page">
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
          <h1 className="main-title">🌐 Welcome to the New Era! 🚀</h1>

          <div className="info-card card--purple">
            <h3 className="card-title">Remember the Magic of Omegle</h3>
            <p className="card-text">
              Remember the good old days of Omegle — when you could instantly connect with strangers from anywhere in the world? 🌍 When one random "Hello" could turn into a deep late-night conversation, a friendship, or even a life story? Then suddenly, it was gone. 💔
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              But guess what? That era isn't over. It's evolving. ⚡
            </p>
          </div>

          <h2 className="section-title">🌈 Why We're Bringing It Back — Better Than Ever</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              When Omegle went offline, it wasn't just another website disappearing — it was the end of an era of spontaneous connection. We missed that excitement, that mystery, and the thrill of not knowing who you'd meet next. So, instead of just remembering it, we decided to rebuild it — smarter, safer, and more fun. 💡
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🤝 AI-Powered Matching</h4>
            <p className="card-text">
              No more random, awkward silence. Our AI learns your vibe, interests, and energy to match you with people who actually click with you.
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🎥 Video + Voice + Vibe</h4>
            <p className="card-text">
              It's not just chat — it's full connection. HD video calls, real-time translation, and smart filters make every interaction feel effortless and safe.
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🛡️ Built-In Safety Controls</h4>
            <p className="card-text">
              We believe in freedom, but also safety. Our platform uses AI moderation and smart privacy tools to keep trolls, bots, and unwanted behavior out — without killing the fun.
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🌍 Community First</h4>
            <p className="card-text">
              Unlike traditional apps chasing clicks, we're building a community. Spaces where creators, learners, and wanderers can express freely, share stories, and build memories — not just followers.
            </p>
          </div>

          <h2 className="section-title">🔥 New Viral Features You'll Love</h2>

          <div className="info-card card--yellow">
            <p className="card-text">
              🎭 <strong>Anonymous Mode:</strong> Talk freely without sharing identity<br/>
              🌐 <strong>Global Rooms:</strong> Join topic-based live spaces<br/>
              🧠 <strong>AI Chat Partner:</strong> Practice languages or explore ideas<br/>
              💡 <strong>Monetization Tools:</strong> Earn through streams and engagement<br/>
              🛍️ <strong>Shop Integration:</strong> Connect creators with buyers
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">❤️ Built for the 15–30 Generation</h4>
            <p className="card-text">
              We built this for the digital generation that grew up between Snapchat streaks and TikTok trends. You're expressive, curious, and global. You don't just want to consume — you want to connect, create, and be part of something bigger.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              This platform is your stage. 🎤
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🧭 Our Vision</h4>
            <p className="card-text">
              We believe the internet's next big shift isn't just AI or VR — it's real connection powered by technology.<br/><br/>
              Social media made us visible. Now it's time to make us feel connected again.<br/><br/>
              We're building a place where:<br/>
              • Strangers can become friends 🤗<br/>
              • Ideas can cross borders 🌏<br/>
              • Conversations can create communities 💬
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🌟 The New Era Begins</h4>
            <p className="card-text">
              The loss of Omegle showed us something powerful: people still crave authentic human moments. Not filtered, not curated — just real.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Our mission is to keep that flame alive, brighter than ever. 🔥
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              So whether you're here to talk, laugh, vent, learn, or just see who's out there — welcome home. 🏠
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">🌐 Start Your Journey</Link>
          </div>

          <footer className="footer">
            <p className="footer-text">
              💬 Because the world feels smaller when we start talking. 🌍
            </p>
            <p className="footer-links">
              <Link to="/" className="footer-link">← Back to Home</Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default NewEra;
