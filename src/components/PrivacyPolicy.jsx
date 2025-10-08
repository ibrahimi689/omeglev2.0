import React from 'react';
import { Link } from 'react-router-dom';
import '../style/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
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
          <h1 className="main-title">🔒 Privacy Policy</h1>

          <div className="info-card card--purple">
            <p className="card-text">
              <strong>Effective Date: January 2025</strong>
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              At Omegle Web, your privacy is extremely important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">1. Information We Collect</h4>
            <p className="card-text">
              <strong>Personal Information (Optional):</strong><br/>
              • If you voluntarily provide it during sign-up or contact (such as name, email address)<br/>
              • We do not require personal details for using the random chat feature
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              <strong>Non-Personal Information:</strong><br/>
              • Your browser type, device type, IP address, and operating system<br/>
              • Pages visited, time spent on our site, and referral links
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">2. Cookies and Tracking</h4>
            <p className="card-text">
              • We use cookies to improve user experience, personalize content, and show relevant ads<br/>
              • Third-party vendors, including Google, use cookies to serve ads based on your previous visits
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">3. How We Use Your Information</h4>
            <p className="card-text">
              • Providing and improving our services<br/>
              • Moderating chat rooms and ensuring user safety<br/>
              • Displaying personalized ads via Google AdSense<br/>
              • Analyzing website traffic and performance<br/>
              • Preventing fraud and protecting users
            </p>
          </div>

          <div className="info-card card--yellow">
            <h4 className="feature-title">4. Google AdSense</h4>
            <p className="card-text">
              • Omegle Web uses Google AdSense to display relevant advertisements<br/>
              • Google AdSense uses cookies and web beacons to collect information<br/>
              • We do not have access to or control over the cookies used by Google AdSense<br/>
              • You can opt out of personalized advertising by visiting Google Ad Settings
            </p>
          </div>

          <div className="info-card card--red">
            <h4 className="feature-title">5. Data Sharing</h4>
            <p className="card-text">
              We do not sell, rent, or trade your personal information to third parties. However, we may share information in the following cases:
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              • <strong>Legal Requirements</strong> – If required by law or court order<br/>
              • <strong>Service Providers</strong> – With trusted partners who help us operate the website
            </p>
          </div>

          <div className="info-card card--blue">
            <h4 className="feature-title">6. Data Security</h4>
            <p className="card-text">
              We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of online transmission is 100% secure.
            </p>
          </div>

          <div className="info-card card--purple">
            <h4 className="feature-title">7. Children's Privacy</h4>
            <p className="card-text">
              Our website is not directed toward children under the age of 13. We do not knowingly collect personal information from minors. If we discover that a child has provided us with personal data, we will delete it immediately.
            </p>
          </div>

          <div className="info-card card--green">
            <h4 className="feature-title">8. User Safety in Chat</h4>
            <p className="card-text">
              • Do not share personal information in chat<br/>
              • We use AI-powered and human moderation to detect inappropriate behavior<br/>
              • Any user violating our Community Guidelines may be banned
            </p>
          </div>

          <div className="info-card card--orange">
            <h4 className="feature-title">9. Your Privacy Rights</h4>
            <p className="card-text">
              Depending on your location, you may have the right to:<br/>
              • Access the personal data we have about you<br/>
              • Request correction or deletion of your data<br/>
              • Opt out of certain data processing activities
            </p>
          </div>

          <div className="info-card card--light">
            <h4 className="feature-title">10. Contact Us</h4>
            <p className="card-text">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="card-text" style={{ marginTop: '8px' }}>
              <strong>Omegle Web Support Team</strong><br/>
              📧 Email: mmohddaudkahan70@gmail.com<br/>
              🌐 Website: omegleonline.xyz
            </p>
          </div>

          <footer className="footer">
            <p className="footer-text">
              🔒 Your privacy is our priority 🔒
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

export default PrivacyPolicy;
