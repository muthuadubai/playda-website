import { Link } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-text">PLAYDA</span>
        </Link>
        
        <nav className="nav">
          <Link to="/support" className="nav-link">Support</Link>
          <a 
            href="https://manager.playda.snkltech.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="owner-portal-btn"
          >
            <FaUserTie /> Owner Portal
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
