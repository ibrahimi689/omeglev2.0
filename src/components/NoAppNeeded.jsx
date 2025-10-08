import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NoAppNeeded.css';

const NoAppNeeded = () => {
  return (
    <div className="no-app-page">
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
          <h1 className="main-title">🌐 No App Needed</h1>

          <div className="info-card card--purple">
            <h3 className="card-title">No downloads. No sign-ups. No waiting.</h3>
            <p className="card-text">
              Just open your browser and start connecting instantly. 💻📱
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              This is how online communication should be — fast, simple, and friction-free.
            </p>
          </div>

          <h2 className="section-title">⚡ Instant Access, Zero Barriers</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              Technology should bring people closer, not make them wait behind loading screens and app stores.
              That's why Omegle Web and Global Community are built to run directly in your browser.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              One click. One connection. No setup.<br />
              It's pure interaction, stripped of unnecessary steps.
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">💡 Why "No App" Is the Future</h4>
            <p className="card-text">
              Traditional social platforms trap users in downloads, updates, and storage limits.
              We chose a different path — a web-first experience that lives anywhere the internet does.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              You don't need to install. You don't need to update.<br />
              You just connect. 🌍
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🧠 Powered by Progressive Web Technology</h4>
            <p className="card-text">
              Our platform uses modern PWA (Progressive Web App) architecture. That means:
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • Fast loading even on slow networks ⚙️<br/>
              • Smooth video and text chat right inside the browser<br/>
              • Optional offline caching for consistent performance
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              It feels like an app but behaves like the open web.
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">💬 Works on Every Device</h4>
            <p className="card-text">
              Whether you're on a phone, tablet, or desktop — the experience stays seamless.
              No compatibility issues, no device restrictions. 📱💻🖥️
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              ✅ Android<br/>
              ✅ iPhone<br/>
              ✅ Windows<br/>
              ✅ macOS
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              If it has a browser, it has access.
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🧩 No Installation = More Freedom</h4>
            <p className="card-text">
              Every download creates friction.<br />
              Every installation demands permissions.<br />
              We removed both.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Omegle Web runs inside a secure browser sandbox — no background processes, no hidden files.
              You can leave anytime, and everything disappears with the tab.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              That's digital freedom at its simplest. 🔓
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🧱 Lightweight and Fast</h4>
            <p className="card-text">
              Apps consume storage and battery. Browsers don't.<br/>
              Our system is built for speed:
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • Loads in seconds<br/>
              • Optimized scripts<br/>
              • Compressed media for low data use
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Even low-end devices perform smoothly. ⚡
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🔐 Security Built Into the Browser</h4>
            <p className="card-text">
              By operating in-browser, we inherit native protections like HTTPS encryption, sandbox isolation, and permission control.
              This makes sessions safer by default — no extra installations that could carry risk.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              You stay in control of what your browser allows: camera, mic, and notifications. 🛡️
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🧠 Auto Updates, Always Fresh</h4>
            <p className="card-text">
              No app means no manual updates.
              Every time you open the site, you get the latest version — instantly.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              New features, bug fixes, and security patches deploy silently in the background. 🔄
              You never have to click "update" again.
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🪶 Low Bandwidth Mode</h4>
            <p className="card-text">
              Even users with weak internet connections deserve smooth conversations.
              Our browser-based design includes a low-bandwidth optimization layer that adjusts video quality automatically.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              You stay connected — even on 3G or public Wi-Fi. 🌐
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🧍‍♂️ Accessibility for Everyone</h4>
            <p className="card-text">
              Installing apps often excludes users with limited devices or restricted permissions.
              The browser breaks that wall.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Anyone, anywhere, can join a chat without special hardware or admin rights.
              That makes Omegle Web truly universal. 🌏
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🎯 No Hidden Costs</h4>
            <p className="card-text">
              App stores often come with commissions, tracking SDKs, and region-based restrictions.
              Browser access eliminates all of that.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              You're not the product — you're the participant. 💬
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">💬 Easy Sharing</h4>
            <p className="card-text">
              Want to invite a friend? Just send a link. 🔗
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              No need to explain download steps or app versions.
              One click opens the room instantly on any device.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              The simplicity fuels organic growth and viral reach.
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">⚙️ Optimized for Privacy</h4>
            <p className="card-text">
              Every browser tab is an isolated space.
              When you close it, the session is gone — no residual data, no traces left behind.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              That's cleaner and safer than most installed apps, which continue to run background services.
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🧠 Browser Technology = Future Flexibility</h4>
            <p className="card-text">
              Building on the open web means adaptability.
              We can integrate AI, AR filters, or live-translation engines instantly without forcing users to reinstall.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              It's a living ecosystem — always evolving, never static. 🌱
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🌎 Global Reach Without App Stores</h4>
            <p className="card-text">
              App stores are region-locked, regulated, and often limited by policies.
              The web isn't.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              By going browser-only, we ensure worldwide accessibility from the start.
              One platform, every country. 🌍
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🔋 Energy Efficient by Design</h4>
            <p className="card-text">
              Our lightweight architecture consumes less power compared to heavy app processes.
              That means longer battery life and smoother multitasking — especially on mobile. 🔋
            </p>
          </div>

          <div className="info-card card--yellow">
            <h3 className="card-title">🧭 Our Philosophy: Simplicity Wins</h3>
            <p className="card-text">
              We believe the best technology disappears into the background.
              The user shouldn't have to think about installations, permissions, or updates — only about the conversation happening right now.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              "No app needed" isn't just a tagline.<br />
              It's a statement of intent:
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600', fontSize: '16px' }}>
              The web itself is enough.
            </p>
          </div>

          <div className="info-card card--light">
            <h4 className="feature-title">🌟 Experience the Freedom</h4>
            <p className="card-text">
              Open your browser.<br />
              Tap "Start Chat."<br />
              You're in — no clutter, no complexity, no commitment. 💬
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              That's the power of browser-based connection.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              The world doesn't need another app.<br />
              It needs a faster way to talk.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Welcome to the No-App Era — where communication is instant, private, and universal. 🌐💻📱
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Chatting Now</Link>
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

export default NoAppNeeded;
