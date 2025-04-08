import './Navbar.scss'

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>About</li>
                <li>Services</li>
            </ul>
            <div className="logo">
                Ciku Mwangi
            </div>
            <ul>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}
