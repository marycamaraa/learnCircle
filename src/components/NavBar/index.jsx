import { Link } from 'react-router-dom'
import './index.css'

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Learn Circle{' '}
      </Link>
      {''}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {' '}
          <Link to="/articles">Articles</Link>{' '}
        </li>
        <li>
          {' '}
          <Link to="/graphicsAutomation">Graphics & Automation</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
