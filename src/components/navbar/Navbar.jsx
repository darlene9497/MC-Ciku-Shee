import './Navbar.scss'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="logo">Ciku Mwangi</div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-container ${isOpen ? 'open' : ''}`}>
        <ul className="left-links">
          <li>About</li>
          <li>Services</li>
        </ul>

        <ul className="right-links">
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
