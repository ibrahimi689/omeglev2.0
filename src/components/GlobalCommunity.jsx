import React from 'react';
import { Link } from 'react-router-dom';
import '../style/GlobalCommunity.css';

const GlobalCommunity = () => {
  return (
    <div className="global-community-page">
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
          <h1 className="main-title">🌍 Global Community 💬📹</h1>
          <p className="subtitle">Connecting the World, One Chat at a Time</p>

          <div className="info-card card--purple">
            <p className="card-text">
              The internet was built to connect people. But somewhere along the way, likes replaced conversations and followers replaced friends. The simple joy of meeting someone new started fading. That's why we created Global Community — a place where the world talks again. 🌎✨
            </p>
          </div>

          <h2 className="section-title">💡 What Is Global Community?</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              Global Community is a new-age social platform designed to bring humans back to the heart of the internet. It's not another feed to scroll — it's a living space where real people meet, talk, and share moments through video and text chat. 💬📹
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontStyle: 'italic', fontWeight: '600' }}>
              "Build a worldwide space where strangers become friends, ideas travel freely, and conversations matter again."
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Whether you want to meet someone from another country, practice a new language, or just talk after a long day — Global Community is open 24/7 for everyone. 🌐
            </p>
          </div>

          <h2 className="section-title">🚀 Why We Built It</h2>

          <div className="info-card card--green">
            <p className="card-text">
              We looked at today's internet and saw a gap. Platforms were either too curated, too fake, or too focused on numbers. We missed real talk — unfiltered, spontaneous, human.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              That's when the idea of Global Community began: A safe, smart, and friendly network where people connect instantly, anywhere.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Our inspiration came from old-school chat culture like Omegle, paired with today's security, AI moderation, and creative tools. The result is a place that feels natural — like meeting someone at a café, but online. ☕💻
            </p>
          </div>

          <h2 className="section-title">🔒 Built on Safety and Trust</h2>

          <div className="info-card card--orange">
            <p className="card-text">
              The problem with many random chat apps was always the same — safety. We solved that first.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              ✅ <strong>AI-Powered Moderation</strong> — Every video and text session is monitored by smart filters that detect harmful behavior or content instantly.<br/>
              ✅ <strong>One-Click Report & Block</strong> — You control who you interact with.<br/>
              ✅ <strong>Private by Design</strong> — No data selling, no tracking, no forced profiles.<br/>
              ✅ <strong>Age-Aware System</strong> — Teen and adult spaces are separated for protection.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Global Community is where connection meets care. ❤️
            </p>
          </div>

          <h2 className="section-title">💬 How It Works</h2>

          <div className="info-card card--purple">
            <p className="card-text">
              1. <strong>Choose Your Mode</strong> — Video or Text chat<br/>
              2. <strong>Select Interests</strong> — Pick topics you love: music, travel, gaming, art, or study<br/>
              3. <strong>Start Talking</strong> — Meet someone new every time. It's that simple.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              The platform automatically matches you with people who share your vibe. Each chat is unique — spontaneous, fun, and global. 🌏
            </p>
          </div>

          <h2 className="section-title">🌈 What Makes Global Community Different</h2>

          <div className="info-card card--blue">
            <h4 className="feature-title">Real People, Real Conversations</h4>
            <p className="card-text">
              Every interaction is about discovery, not performance. No filters, no pressure.
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🌐 Language Translation</h4>
            <p className="card-text">
              Break barriers instantly. Talk in your language — the system translates in real time.
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🌍 Cultural Exchange</h4>
            <p className="card-text">
              Share your stories, learn traditions, and see the world through real voices, not posts.
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">🎙️ Creator & Event Spaces</h4>
            <p className="card-text">
              Host discussions, live Q&As, or workshops — directly inside the chat platform.
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">🤖 AI Partner Mode</h4>
            <p className="card-text">
              If you just want to practice talking, our built-in AI companion helps you stay confident and improve communication skills.
            </p>
          </div>

          <h2 className="section-title">👩‍💻 Built by Visionaries, for Everyone</h2>

          <div className="info-card card--purple">
            <p className="card-text">
              Global Community isn't backed by corporations. It's created by young developers, designers, and students who believe the world needs human connection more than ever. 🌍💪
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              We saw loneliness rising, even in the most "connected" age. So we built something better — a digital home for conversations that matter.
            </p>
          </div>

          <h2 className="section-title">🧠 Smart Tech, Human Touch</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              Every chat uses advanced algorithms to ensure safety and relevance — but without killing spontaneity.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • Adaptive AI learns your mood and matches accordingly<br/>
              • Smart lighting filters enhance clarity for video chats<br/>
              • End-to-end encryption keeps everything private
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              We built the tech, but the warmth comes from you — the people who join. 💫
            </p>
          </div>

          <h2 className="section-title">🌐 A Worldwide Family</h2>

          <div className="info-card card--green">
            <p className="card-text">
              Global Community is more than an app — it's a movement of open-minded humans from every continent. 🌎
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              <strong>Imagine:</strong><br/>
              • Talking to a musician from Brazil 🎸<br/>
              • Learning a recipe from Japan 🍣<br/>
              • Discussing tech with someone in Germany 💻<br/>
              • Or simply laughing with a stranger who becomes your best friend. 😂
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              That's the magic we're restoring — global togetherness, one chat at a time.
            </p>
          </div>

          <h2 className="section-title">🔥 Features That Make It Viral</h2>

          <div className="info-card card--orange">
            <p className="card-text">
              💬 <strong>Instant One-Click Chat</strong><br/>
              📹 <strong>HD Video & Clear Audio</strong><br/>
              🌐 <strong>AI-Based Language Bridge</strong><br/>
              🧠 <strong>Smart Topic Matching</strong><br/>
              🚫 <strong>Anti-Harassment Shield</strong><br/>
              💰 <strong>Creator Monetization Tools</strong> (coming soon)
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              These features combine entertainment, safety, and discovery — the perfect formula for virality.
            </p>
          </div>

          <h2 className="section-title">🧭 Our Vision for the Future</h2>

          <div className="info-card card--purple">
            <p className="card-text">
              Our dream is to make Global Community the world's most trusted space for meeting new people online.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              <strong>We see a future where:</strong><br/>
              • Students can exchange ideas internationally<br/>
              • Travelers can make friends before landing<br/>
              • Creators can share art and culture without borders<br/>
              • AI helps maintain safety while preserving freedom
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              It's not just a platform — it's the digital version of global friendship. 🤝
            </p>
          </div>

          <h2 className="section-title">💡 The Message Behind Global Community</h2>

          <div className="info-card card--blue">
            <p className="card-text">
              In a world divided by algorithms and distance, conversation is still the most powerful bridge. We believe that when people talk, understanding grows — and that's how the world changes. 🌱
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Global Community exists to remind us that technology isn't only about screens — it's about people behind them. 💻❤️
            </p>
          </div>

          <h2 className="section-title">🌟 Join the Conversation</h2>

          <div className="info-card card--yellow">
            <p className="card-text">
              It takes one message to make the world feel smaller and kinder. One "Hello" can start a story that lasts forever. 💬
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Welcome to Global Community — where the world meets, talks, and connects again. 🌍💫
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Because no matter where you are, someone out there is ready to talk to you.
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Join Global Community</Link>
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

export default GlobalCommunity;
