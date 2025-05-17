import './Footer.scss'
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Ciku Mwangi</div>
      <div className="footer-row">
        <div className="footer-social">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <span>|</span>
          <Link to="/services">Services</Link>
          <span>|</span>
          <Link to="/portfolio">Portfolio</Link>
          <span>|</span>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer-backtotop">
          <a href="#top">
            <span className="circle"><span className="arrow-up">&#8593;</span></span>
            <span className="backtotop-text">Back to Top</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} Ciku (Shee) Mwangi
        </div>
        <div className="footer-credit">
          Website made with <span className="footer-heart">&#10084;</span> by Darlene Nyambura
        </div>
      </div>
    </footer>
  )
}

export default Footer