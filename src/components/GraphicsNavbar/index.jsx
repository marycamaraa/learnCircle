import { Link } from 'react-router-dom'
import './index.css'

function GraphicsNavbar() {
  return (
    <>
      <nav className="graphics-navbar">
        <ul className="graphics-nav-items">
          <li>
            <Link to="/">Cherry Pick</Link>
          </li>
          <li>
            <Link to="/">Check Off</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default GraphicsNavbar
