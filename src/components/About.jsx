import React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

const About = () => {
  return (
    <div className="about-page">
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
          <h1 className="main-title">About Omegle Web</h1>

          <div className="info-card card--purple">
            <h3 className="card-title">Welcome to Omegle Web</h3>
            <p className="card-text">
              A modern, safer, and friendlier alternative to the original Omegle. We believe the internet should connect people, not put them at risk.
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">👥 Who We Are</h4>
            <p className="card-text">
              Omegle Web is created and maintained by a team of passionate students and tech enthusiasts who understand the challenges of online chatting. We wanted to bring back the excitement of random connections — but with stronger safety measures, better design, and smarter features.
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🎯 Our Mission</h4>
            <p className="card-text">
              • Connect people globally in real-time through text and video chat<br/>
              • Promote a respectful community where everyone feels welcome<br/>
              • Protect privacy while delivering a smooth, modern chatting experience
            </p>
          </div>

          <h2 className="section-title">🚀 What We Offer</h2>

          <div className="info-card card--orange">
            <h4 className="feature-title">📹 Random Video Chat</h4>
            <p className="card-text">
              Talk face-to-face with strangers instantly.
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">💬 Random Text Chat</h4>
            <p className="card-text">
              Keep it anonymous and focus on conversation.
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🎯 Interest-Based Matching</h4>
            <p className="card-text">
              Meet people who share your hobbies.
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🔒 Private Chat Rooms</h4>
            <p className="card-text">
              Invite friends or create safe spaces. All of this comes with AI-powered moderation and end-to-end privacy protection.
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🤝 Our Promise</h4>
            <p className="card-text">
              We are committed to:<br/>
              • Keeping Omegle Web a safe space for users of all ages<br/>
              • Responding to feedback quickly and improving our features<br/>
              • Following strict community guidelines to prevent harmful behavior
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">⭐ Why Choose Omegle Web?</h4>
            <p className="card-text">
              • Modern, mobile-friendly design that works on all devices<br/>
              • Faster connections and better matching than outdated chat sites<br/>
              • Strong moderation to keep conversations respectful and secure
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Whether you're here to make friends, learn about other cultures, practice a new language, or just have a fun chat, Omegle Web is your safe place on the internet.
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Chatting Now</Link>
          </div>

          <div className="info-card card--light">
            <h4 className="feature-title">📞 Contact Us</h4>
            <p className="card-text">
              📧 Email: mmohddaudkahan70@gmail.com<br/>
              🌐 Website: Omegleonline.xyz
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              We'd love to hear your feedback and suggestions!
            </p>
          </div>

          <footer className="footer">
            <p className="footer-text">
              🌟 Thank you for choosing Omegle Web! 🌟
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

export default About;
