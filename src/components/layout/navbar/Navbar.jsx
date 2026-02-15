import './Navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>Ciku Mwangi</Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="left-links">
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
          </ul>

          <ul className="right-links">
            <li>
              <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar