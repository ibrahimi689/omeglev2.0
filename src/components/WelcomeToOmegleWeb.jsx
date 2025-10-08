import React from 'react';
import { Link } from 'react-router-dom';
import '../style/WelcomeToOmegleWeb.css';

const WelcomeToOmegleWeb = () => {
  return (
    <div className="welcome-page">
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
          <h1 className="main-title">🌐 Welcome to Omegle Web! 🚀</h1>

          <div className="info-card card--purple">
            <h3 className="card-title">The New Face of Real Conversations</h3>
            <p className="card-text">
              When the original Omegle went offline, millions felt a void. That random chat button wasn't just code — it was connection. It gave everyone, from quiet dreamers to social explorers, a place to meet someone new. 💬
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              That's why we created Omegle Web — a modern, safer, and friendlier alternative to the original Omegle. 😊 Built by students who grew up in the Omegle era, for people everywhere who still believe that great conversations can start with a simple "Hi." 👋
            </p>
          </div>

          <h2 className="section-title">💡 Why We Built Omegle Web</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              Omegle Web began with a simple idea: <strong>Bring back the magic of real-time human connection — without the chaos, risk, or toxicity.</strong>
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              The old internet was wild. It was exciting, but also unsafe for many users. Our generation decided it's time for something new — something that keeps the fun of random chats but adds the security and respect we all deserve. 🔒
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontStyle: 'italic' }}>
              "What if we could rebuild Omegle — but make it smarter, cleaner, and truly global?"
            </p>
          </div>

          <h2 className="section-title">⚙️ The Core of Omegle Web</h2>

          <div className="info-card card--green">
            <h4 className="feature-title">🧠 AI-Powered Moderation</h4>
            <p className="card-text">
              Smart filters protect users from spam, explicit content, and harassment. You can chat freely without worrying about what's on the other side.
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">💬 Friendly Interface</h4>
            <p className="card-text">
              Minimal design. Fast load times. One button to start chatting. No clutter, no confusion — just conversations that flow naturally.
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🌎 Connect Globally, Safely</h4>
            <p className="card-text">
              Whether you're in India, the U.S., or Brazil — you can meet people worldwide. Our language detection and translation features make borders disappear.
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🔒 Privacy First</h4>
            <p className="card-text">
              No data selling. No tracking. You stay anonymous unless you choose to share.
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🎥 Video + Text Options</h4>
            <p className="card-text">
              Choose your vibe. Chat face-to-face or keep it text-only — the control stays with you.
            </p>
          </div>

          <h2 className="section-title">👩‍🎓 Built by Students, For Everyone</h2>

          <div className="info-card card--yellow">
            <p className="card-text">
              Omegle Web is powered by a new wave of creators — students, coders, and designers who wanted to build something better than the old platforms. 💻
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              We understand the frustrations of unsafe spaces and toxic communities. That's why our system is coded with empathy, intelligence, and respect at its core.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontStyle: 'italic', fontWeight: '600' }}>
              "Make online talking fun again — not stressful."
            </p>
          </div>

          <h2 className="section-title">🚀 Features That Make Us Stand Out</h2>

          <div className="info-card card--green">
            <p className="card-text">
              1. <strong>Smart Matching 🤝</strong> — Meet people who share your mood and interests<br/>
              2. <strong>AI Safety Filters 🧩</strong> — Automatic detection of harmful content<br/>
              3. <strong>Global Chat Rooms 🌍</strong> — Join themed spaces like "Study," "Music," or "Gaming"<br/>
              4. <strong>No Sign-Up Needed ⚡</strong> — Jump in instantly. Privacy stays intact<br/>
              5. <strong>Report & Block Tools 🚫</strong> — You control who can interact with you<br/>
              6. <strong>Smooth Experience 📱💻</strong> — Optimized for every screen
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🌈 A Friendlier Internet</h4>
            <p className="card-text">
              We're tired of negativity online. The web should connect, not divide. Omegle Web's mission is to make kindness go viral again. 🌟
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Whether you're a student looking to practice English, a gamer finding new teammates, or just someone who wants to meet new people — Omegle Web welcomes you. ❤️
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">💬 Real Talk, Real People</h4>
            <p className="card-text">
              In a world filled with filters and fakeness, authenticity matters. Omegle Web gives you the power to talk without pressure.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              No likes. No followers. No status games. Just real-time human connection.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontStyle: 'italic', fontWeight: '600' }}>
              "Every conversation is a chance to learn something new." 🌍
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🔥 Why the World Needs Omegle Web</h4>
            <p className="card-text">
              • Because people are tired of endless scrolling<br/>
              • Because loneliness is rising in the digital age<br/>
              • Because connection still matters more than content
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              We believe the next generation of social platforms won't be about vanity metrics — it'll be about human presence, one chat at a time.
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🧭 Our Vision</h4>
            <p className="card-text">
              We see Omegle Web as more than a chat site — it's a movement to rebuild trust in online interaction.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              By combining AI, privacy, and community-driven moderation, we're proving that "talking to strangers" can be safe, inspiring, and good for the soul. 🌱
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              <strong>Our long-term goal:</strong><br/>
              • Create verified interest-based rooms<br/>
              • Integrate education, networking, and cultural exchange<br/>
              • Give creators tools to host open discussions and live sessions
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🌟 The Future of Connection Starts Here</h4>
            <p className="card-text">
              From casual chats to cultural exchanges, from learning languages to finding friends — Omegle Web brings the world back together, one conversation at a time. 🌍
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Built by students. Guided by empathy. Driven by innovation.
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">💡 Final Thought</h4>
            <p className="card-text">
              The internet doesn't need another social network. It needs a human network.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Welcome to Omegle Web — where you're never truly alone online. 💫
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Join, connect, and rediscover what made the internet magical in the first place. ✨
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Chatting Now</Link>
          </div>

          <footer className="footer">
            <p className="footer-links">
              <Link to="/" className="footer-link">← Back to Home</Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default WelcomeToOmegleWeb;
