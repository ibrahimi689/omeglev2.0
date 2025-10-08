import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    category: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = formData.category ? `[${formData.category}] Contact Form` : 'Contact Form';
    const body = `${formData.message}\n\n${formData.email ? `Reply to: ${formData.email}` : ''}`;
    window.location.href = `mailto:mmohddaudkahan70@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact-page">
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
          <h1 className="main-title">📞 Contact Us</h1>

          <div className="info-card card--purple">
            <p className="card-text">
              We value your feedback, questions, and suggestions. Whether you need help using Omegle Web, want to report an issue, or have ideas to improve our platform, our team is here to assist you.
            </p>
          </div>

          <h2 className="section-title">📬 How to Reach Us</h2>

          <div className="info-card card--blue">
            <h4 className="feature-title">📧 Email Support</h4>
            <p className="card-text">
              For general inquiries, technical support, or feedback, please email us at:
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600', color: '#2196f3' }}>
              mmohddaudkahan70@gmail.com
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">🌐 Website</h4>
            <p className="card-text">
              Visit our main website:<br/>
              <strong>omegle.com</strong><br/>
              Your modern alternative to random video chat
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">📩 Quick Feedback Form</h4>
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="category">Type of Message:</label>
                <select 
                  id="category" 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Report User">Report User</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email (optional):</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <small>Only if you want a response</small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea 
                  id="message" 
                  rows="6"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">📤 Send Message</button>
            </form>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">⏰ Response Time</h4>
            <p className="card-text">
              We aim to respond to all emails within <strong>24–48 hours</strong> during working days.<br/>
              For urgent technical issues, please include <strong>"URGENT"</strong> in your email subject line.
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">⚠️ Important Notes</h4>
            <p className="card-text">
              • <strong>Privacy Protection:</strong> Please do not share personal details in your messages<br/>
              • <strong>Reporting Users:</strong> Include the time, date, and description of the incident<br/>
              • <strong>No Personal Info:</strong> Never share sensitive information through email or our platform
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">🤝 We're Here to Help!</h4>
            <p className="card-text">
              Our team is committed to making Omegle Web a safe, enjoyable experience for everyone. Your feedback helps us improve and grow.
            </p>
            <p className="card-text" style={{ marginTop: '8px', fontWeight: '600' }}>
              Thank you for being part of the Omegle Web community! 🌟
            </p>
          </div>

          <div className="cta-section">
            <Link to="/" className="start-now-btn">💬 Start Chatting Now</Link>
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

export default Contact;
