import { Link } from 'react-router-dom';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PLAYDA</h3>
            <p>Book padel courts instantly in the UAE</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/support">Support</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          
          <div className="footer-section">
            <h4>For Venue Owners</h4>
            <a href="https://manager.playda.snkltech.com" target="_blank" rel="noopener noreferrer">
              Owner Portal
            </a>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="mailto:playda.support@snkltech.com">
              <FaEnvelope /> playda.support@snkltech.com
            </a>
            <a href="https://snkltech.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> SNKL Enterprises
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Playda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
