import React from 'react';
import { Link } from 'react-router-dom';
import '../style/TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-page">
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
          <h1 className="main-title">📜 Terms & Conditions</h1>

          <div className="info-card card--purple">
            <p className="card-text">
              Welcome to Omegle Web. By accessing or using our website, you agree to be bound by these Terms & Conditions. If you do not agree, please stop using our services immediately.
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">1. Acceptance of Terms</h4>
            <p className="card-text">
              By using Omegle Web, you agree to follow these Terms & Conditions, our Privacy Policy, and any other rules posted on the site. We may update these terms at any time, and continued use means you accept any changes.
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">2. Eligibility</h4>
            <p className="card-text">
              • You must be at least 18 years old, or the minimum legal age in your country<br/>
              • Minors may use the site only under parental or guardian supervision
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">3. Our Services</h4>
            <p className="card-text">
              Omegle Web offers:<br/>
              • Random video and text chatting<br/>
              • Interest-based matching<br/>
              • Private chat rooms
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              We aim to provide a safe and friendly environment, but we are not responsible for the actions or content of other users.
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">4. User Responsibilities</h4>
            <p className="card-text">
              When using Omegle Web, you agree to:<br/>
              • Not share personal information (address, phone number, passwords, bank details)<br/>
              • Not engage in illegal activities such as harassment, threats, fraud, or sharing explicit content<br/>
              • Respect other users and avoid abusive, hateful, or discriminatory behavior<br/>
              • Not upload or transmit harmful code such as viruses or malware
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">5. Content and Moderation</h4>
            <p className="card-text">
              • All chats are monitored using AI and human moderators to detect harmful content<br/>
              • We may remove, block, or report users who violate these terms<br/>
              • We are not liable for user-generated content and do not endorse it
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">6. Disclaimer of Warranties</h4>
            <p className="card-text">
              Omegle Web is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service, error-free performance, or that the platform will be free from harmful content.
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">7. Limitation of Liability</h4>
            <p className="card-text">
              To the fullest extent permitted by law, Omegle Web and its team are not responsible for:<br/>
              • Any damages caused by using our services<br/>
              • Any loss of data, privacy breaches, or third-party actions
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">8. Third-Party Links and Ads</h4>
            <p className="card-text">
              • Our website may contain links to third-party sites and display ads from Google AdSense<br/>
              • We are not responsible for the content, privacy practices, or services of third-party websites
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">9. Termination of Access</h4>
            <p className="card-text">
              We reserve the right to:<br/>
              • Suspend or terminate your access without prior notice if you violate these terms<br/>
              • Take legal action if necessary
            </p>
          </div>

          <div className="info-card card--light">
            <h4 className="feature-title">10. Contact Us</h4>
            <p className="card-text">
              For questions about these Terms & Conditions, please contact:
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              <strong>Omegle Web Support Team</strong><br/>
              📧 Email: mmohddaudkahan70@gmail.com<br/>
              🌐 Website: omegleonline.xyz
            </p>
          </div>

          <footer className="footer">
            <p className="footer-text">
              Thank you for using Omegle Web responsibly! 🌟
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

export default TermsConditions;
