import React from 'react';
import { Link } from 'react-router-dom';
import '../style/PrivacyFocusedDesign.css';

const PrivacyFocusedDesign = () => {
  return (
    <div className="privacy-design-page">
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
          <h1 className="main-title">🛡️ Privacy-Focused Design</h1>
          <p className="subtitle">Your data stays yours — always. 🔒</p>

          <div className="info-card card--purple">
            <p className="card-text">
              In an age where every click is tracked and every app wants your information, Omegle Web's Privacy-Focused Design stands for something different: respect, transparency, and control.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              We built our system with one promise — your privacy is not a feature, it's the foundation.
            </p>
          </div>

          <h2 className="section-title">🔍 Why Privacy Matters Now</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              Most social platforms collect massive user data — location, voice, chats, even camera metadata. Over time, users lost ownership of their own digital identity. We decided to reverse that.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontStyle: 'italic', fontWeight: '600' }}>
              "If it's yours, it stays yours."
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              That's why Omegle Web and Global Community are coded with a privacy-first mindset — designed to protect before we even connect.
            </p>
          </div>

          <h2 className="section-title">🔒 Zero Data Exploitation</h2>

          <div className="info-card card--green">
            <p className="card-text">
              No selling, no profiling, no tracking cookies hiding behind long terms. Your messages and video sessions vanish automatically once the chat ends. 🕒
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              No permanent logs. No advertising IDs.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              This is true digital privacy, not marketing language.
            </p>
          </div>

          <h2 className="section-title">🧠 Smart, Not Intrusive</h2>

          <div className="info-card card--orange">
            <p className="card-text">
              Our AI moderation scans live interactions without storing them. The system detects harmful content in real time and then instantly forgets. 🧹
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Your face, your voice, your data — never saved, never shared.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              We use intelligence for protection, not surveillance.
            </p>
          </div>

          <h2 className="section-title">📜 Strict Community Guidelines</h2>

          <div className="info-card card--red">
            <p className="card-text">
              Freedom works best with responsibility. To keep everyone safe, our community rules are clear and firm:
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              1. Respect all users<br/>
              2. No harassment, hate, or explicit content<br/>
              3. No recording or screenshotting without consent<br/>
              4. Report violations instantly
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Our team and automated systems enforce these rules 24/7. ⚖️ Because privacy without boundaries becomes chaos.
            </p>
          </div>

          <h2 className="section-title">🧩 User-Controlled Privacy Settings</h2>

          <div className="info-card card--purple">
            <p className="card-text">
              <strong>You choose what to share:</strong>
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • Toggle camera or mic anytime 🎥🎙️<br/>
              • Hide location by default<br/>
              • Use nickname or stay anonymous<br/>
              • Delete chat instantly with one click
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Every control is visible, simple, and reversible. No hidden menus, no confusion.
            </p>
          </div>

          <h2 className="section-title">🧱 End-to-End Protection</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              All communication channels are protected by end-to-end encryption. That means your data travels directly between you and the other person — not through any central database.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Even we can't read it. 🔐
            </p>
          </div>

          <h2 className="section-title">💬 Ephemeral Chat System</h2>

          <div className="info-card card--green">
            <p className="card-text">
              Every message is temporary. Once the window closes, the conversation disappears completely. This prevents misuse, leaks, or unwanted sharing.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Your words belong to you — not to the internet.
            </p>
          </div>

          <h2 className="section-title">⚙️ Minimal Data Policy</h2>

          <div className="info-card card--orange">
            <p className="card-text">
              <strong>We collect only what's required for functionality:</strong>
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • Browser type (for optimization)<br/>
              • Session duration (for safety monitoring)
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              No names, no emails, no phone numbers. You can use our platform without revealing identity.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              We believe less data means more freedom. 🌐
            </p>
          </div>

          <h2 className="section-title">🧑‍💻 Transparency in Technology</h2>

          <div className="info-card card--purple">
            <p className="card-text">
              We publish clear privacy terms and update them publicly. Users know what happens to their data — no fine print, no dark patterns.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Our system undergoes routine independent security audits to verify that protection isn't just promised — it's proven. 🧾
            </p>
          </div>

          <h2 className="section-title">🧱 AI + Human Moderation, Balanced</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              Automation keeps things efficient, but humans ensure fairness. Our hybrid moderation model uses both:
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • AI for instant flagging<br/>
              • Human review for context and accuracy
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              This prevents over-censorship while keeping privacy intact.
            </p>
          </div>

          <h2 className="section-title">🕵️ Anonymous Yet Accountable</h2>

          <div className="info-card card--yellow">
            <p className="card-text">
              Anonymity should not mean irresponsibility. We use non-identifying digital fingerprints to stop repeat violators without storing personal details.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              This system allows a healthy community while respecting user rights.
            </p>
          </div>

          <h2 className="section-title">🌍 Global Privacy Standards</h2>

          <div className="info-card card--green">
            <p className="card-text">
              Our infrastructure complies with GDPR, CCPA, and emerging international privacy frameworks. Whether you're in Europe, Asia, or the Americas — your rights remain equal.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              We built compliance into the code, not just the paperwork.
            </p>
          </div>

          <h2 className="section-title">🔔 Ads, No Trackers</h2>

          <div className="info-card card--orange">
            <p className="card-text">
              Your attention is not a product. We don't run intrusive ads or third-party analytics.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Focus stays on real connections, not on data monetization. 📵
            </p>
          </div>

          <h2 className="section-title">🧭 Our Privacy Philosophy</h2>

          <div className="info-card card--purple">
            <p className="card-text">
              1. Users own their data<br/>
              2. Transparency beats secrecy<br/>
              3. Security must be simple
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              We reject the idea that people must trade privacy for convenience. Our design proves both can coexist.
            </p>
          </div>

          <h2 className="section-title">💡 Innovation Through Ethics</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              Privacy isn't a barrier to innovation — it's a framework for trust. By keeping systems clean and accountable, we open doors to better AI, safer communities, and stronger global collaboration. 🤝
            </p>
          </div>

          <h2 className="section-title">🌱 Empowering the Next Generation</h2>

          <div className="info-card card--green">
            <p className="card-text">
              Digital natives deserve platforms that respect them. We're teaching users — especially students and young creators — how to navigate online spaces safely.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Every chat becomes a micro-lesson in digital responsibility. 📚
            </p>
          </div>

          <h2 className="section-title">🔮 Looking Ahead</h2>

          <div className="info-card card--yellow">
            <p className="card-text">
              <strong>Future updates will include:</strong>
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • Encrypted group chats 🔐<br/>
              • Secure voice rooms 🎧<br/>
              • Privacy-preserving AI recommendations 🧠
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Our goal: total control for the user, zero control for data miners.
            </p>
          </div>

          <h2 className="section-title">🌟 Final Message</h2>

          <div className="info-card card--purple">
            <p className="card-text">
              Privacy isn't a luxury — it's a right. Omegle Web's Privacy-Focused Design makes that right real again.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Your voice, your face, your words — they belong to you, and only you. No tracking, no selling, no compromise.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Welcome to a digital world built on trust, respect, and security. 🛡️💬
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Your data stays yours — forever.
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Experience Privacy First</Link>
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

export default PrivacyFocusedDesign;
