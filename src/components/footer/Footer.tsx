import React from 'react';
import '../footer/footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="footer-content">
          {/* Logo */}
          <div className="footer-logo">
            <img src="/stayopia_logo.jpg" alt="Company Logo" />
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              Email: <a href="mailto:info@company.com">info@company.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Stayopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
