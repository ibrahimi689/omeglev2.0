import React from 'react';
import { Link } from 'react-router-dom';
import '../style/OmegleWeb.css';

const OmegleWeb = () => {
  return (
    <div className="omegle-web">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <div className="logo-icon">🌐</div>
          <div className="logo-text">
            <h1 className="logo">omegle.com</h1>
            <p className="tagline">Talk to strangers!</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Main Title */}
          <h1 className="main-title">Talk to strangers!</h1>

          {/* Welcome Cards */}
          <Link to="/new-era" className="info-card-link">
            <div className="info-card card--orange clickable">
              <h3 className="card-title">👋 Welcome to the New Era! 🚀</h3>
              <p className="card-text">
                Missing Omegle? Same here! When the original Omegle went offline, we felt that loss too. So we decided to build something better!
              </p>
            </div>
          </Link>

          <Link to="/welcome" className="info-card-link">
            <div className="info-card card--green clickable">
              <h3 className="card-title">✨ Welcome to Omegle Web</h3>
              <p className="card-text">
                A modern, safer, and friendlier alternative to the original Omegle! 😊 Built by students, for everyone.
              </p>
            </div>
          </Link>

          {/* What's the Deal Section */}
          <h2 className="section-title">🌍 What's the Deal? 🤔</h2>

          <Link to="/global-community" className="info-card-link">
            <div className="info-card card--green clickable">
              <div className="card-content-with-image">
                <div>
                  <h4 className="feature-title">🌐 Global Community</h4>
                  <p className="card-text">
                    A worldwide community for meeting new people through video and text chat 💬📹.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/privacy-design" className="info-card-link">
            <div className="info-card card--red clickable">
              <h4 className="feature-title">🔒 Privacy-Focused Design</h4>
              <p className="card-text">
                Your data stays yours! 🛡️ We enforce strict community guidelines and maintain a privacy-first approach.
              </p>
            </div>
          </Link>

          <Link to="/no-app-needed" className="info-card-link">
            <div className="info-card card--purple clickable">
              <h4 className="feature-title">🌐 No App Needed</h4>
              <p className="card-text">
                Works right in your browser! 💻📱 No downloads, no installations, no hassle. Just open your web browser.
              </p>
            </div>
          </Link>

          <Link to="/superior-experience" className="info-card-link">
            <div className="info-card card--yellow clickable">
              <h4 className="feature-title">⚡ Superior Experience</h4>
              <p className="card-text">
                Honestly? Way smoother and friendlier than Ome TV or Monkey (yeah, we said it!) 😎🔥
              </p>
            </div>
          </Link>

          {/* How to Use Section */}
          <div className="how-to-card">
            <h3 className="how-to-title">How to use Omegle?</h3>
            <ol className="how-to-list">
              <li>Go to the website 🌐</li>
              <li>Choose Text chat 💬 or Video chat 📹</li>
              <li>(Optional) Add your interests 🎵📚</li>
              <li>Click Start to match with a stranger 😊</li>
            </ol>
          </div>

          {/* Start Now Button */}
          <div className="cta-section">
            <Link to="/chat">
              <button className="start-now-btn">START NOW</button>
            </Link>
          </div>

          {/* Talk to Strangers Banner */}
          <div className="banner-card">
            <div className="banner-content">
              <h2 className="banner-title">TALK TO STRANGERS</h2>
              <div className="banner-globe">🌍</div>
            </div>
          </div>

          {/* Ready to Join Section */}
          <Link to="/ready-to-join" className="info-card-link">
            <div className="info-card card--light clickable">
              <h4 className="feature-title">⚡ Ready to Join?</h4>
              <p className="card-text">
                Let's keep the spirit of spontaneous, respectful conversation alive! Make new friends, share stories, or just explore!
              </p>
              <p className="card-text" style={{ marginTop: '8px' }}>
                It's free, instant, and who knows who you'll meet next? 💚❤️
              </p>
            </div>
          </Link>

          {/* What is Omegle Section */}
          <h2 className="section-title">✏️ What is Omegle? 🖼️🌍</h2>

          <Link to="/global-connection-platform" className="info-card-link">
            <div className="info-card card--blue clickable">
              <h4 className="feature-title">🌐 The Global Connection Platform</h4>
              <p className="card-text">
                Omegle is a unique online chat platform that connects strangers from all over the world.
              </p>
            </div>
          </Link>

          <div className="info-card card--blue">
            <h4 className="feature-title">💝 Why People Love Omegle</h4>
            <div className="feature-tags">
              <span className="tag">🎭 Make new friends</span>
              <span className="tag">🗣️ Practice languages</span>
            </div>
          </div>

          <Link to="/safety-first" className="info-card-link">
            <div className="info-card card--red clickable">
              <h4 className="feature-title">💡 Safety First</h4>
              <p className="card-text">
                Safety is important! Omegle advises users to stay anonymous and not share personal details like phone numbers or addresses.
              </p>
            </div>
          </Link>

          <Link to="/your-next-adventure" className="info-card-link">
            <div className="info-card card--green clickable">
              <h4 className="feature-title">🚀 Your Next Adventure Awaits</h4>
              <p className="card-text">
                Discover amazing conversations and connect with people from around the world!
              </p>
            </div>
          </Link>

          {/* Footer */}
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

export default OmegleWeb
