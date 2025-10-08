import React from 'react';
import { Link } from 'react-router-dom';
import '../style/YourNextAdventure.css';

const YourNextAdventure = () => {
  return (
    <div className="adventure-page">
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
          <h1 className="main-title">🌍 Your Next Adventure Awaits</h1>

          <div className="info-card card--purple">
            <h3 className="card-title">Discover the World Through Conversation! ✨💬</h3>
            <p className="card-text">
              Every great story begins with a single hello. 🌟 Omegle Web turns ordinary moments into global adventures — one chat at a time.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              You never know who you'll meet, what you'll learn, or how one random conversation might inspire your next big idea. The world is waiting, and your next adventure starts right here. 🚀
            </p>
          </div>

          <h2 className="section-title">🌟 Adventure Features</h2>

          <div className="info-card card--blue">
            <h4 className="feature-title">🌈 Explore the World Without Leaving Home</h4>
            <p className="card-text">
              Why wait for travel when the world can come to you? 🌍 With Omegle Web, you can meet people from every continent — learn about cultures, music, food, and lifestyles straight from locals. Every chat is like opening a window to a new world. 💫
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">🗣️ Meaningful Conversations, Endless Possibilities</h4>
            <p className="card-text">
              Some chats will make you laugh. Some will make you think. Some might even change how you see the world. From deep talks about dreams to light-hearted fun, Omegle Web connects you to every kind of story imaginable. 💭💬
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🌐 Instant Global Connection</h4>
            <p className="card-text">
              No signups. No waiting. Just click "Start Chat," and you're connected with someone somewhere new — instantly. Whether it's morning in Tokyo or midnight in Paris, someone out there is ready to talk. ⚡
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🧠 Learn, Share, and Grow</h4>
            <p className="card-text">
              Your next chat could be a free lesson in culture, language, or perspective. Many users practice English, share hobbies, or exchange creative ideas. Every connection adds to your knowledge and confidence. 📘🌏
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">❤️ Humans, Not Algorithms</h4>
            <p className="card-text">
              Tired of social media feeds and fake profiles? Omegle Web keeps it real — no likes, no follows, no filters. Just pure human interaction, free from online noise. You talk, listen, and connect — naturally. 🤝
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🔮 Every Chat = A New Journey</h4>
            <p className="card-text">
              No two conversations are ever the same. You might meet a traveler, a student, a musician, or a coder. Some will make you laugh; others will teach you something new. That unpredictability is what makes Omegle Web an adventure. 🎲🌟
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">💬 From Curiosity to Connection</h4>
            <p className="card-text">
              Sometimes, all it takes is curiosity — a single click to step outside your bubble. Each stranger represents a chance to learn, to inspire, or to be inspired. 🪄💫
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">🛡️ Safe Exploration</h4>
            <p className="card-text">
              Adventure doesn't mean risk. Omegle Web's privacy-first system keeps you safe and anonymous while you explore the world of conversations. Your data stays private, and you stay in control. 🔒🌍
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">🚀 Break Routine, Meet New Energy</h4>
            <p className="card-text">
              Feeling bored or stuck in routine? Omegle Web breaks the monotony. Talking to someone new brings fresh ideas, laughter, and perspective — reminding you how big and vibrant the world really is. 🔥🌈
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🌏 The Adventure Never Ends</h4>
            <p className="card-text">
              Omegle Web isn't just an app — it's a journey that keeps evolving. Every time you connect, you unlock a new world, a new culture, or maybe even a new friend. And the best part? You can do it all for free, anytime, anywhere. 💻📱
            </p>
          </div>

          <div className="info-card card--light">
            <h3 className="card-title">In short:</h3>
            <p className="card-text">
              The world is full of stories waiting to be told — and you're just one click away from hearing them. 🌍✨
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600', fontSize: '16px' }}>
              Your next adventure begins now.
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              Meet the world. Share your story. Discover what happens when strangers connect — and magic happens. 💬❤️🌐
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">Start Your Adventure</Link>
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

export default YourNextAdventure;
