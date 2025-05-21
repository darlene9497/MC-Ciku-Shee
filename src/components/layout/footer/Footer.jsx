import './Footer.scss';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">Ciku Mwangi</div>
        <div className="footer-social">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-middle">
        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-credit">
          Website made with <span className="footer-heart">&#10084;</span> by <a href="https://www.linkedin.com/in/darlene-n/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Darlene Nyambura</a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Ciku (Shee) Mwangi. All rights reserved.
        </div>
        <div className="footer-backtotop">
          <a href="#top">
            <span className="circle"><span className="arrow-up">&#8593;</span></span>
            <span className="backtotop-text">Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
