import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'
import './index.css'

function ArticlesNavbar() {
  return (
    <nav className="articles-navbar-container">
      <Link to="/">
        <img className="logo" src={logo} />{' '}
      </Link>
      <Link to="/">
        <img className="notification-icon" src={notification} />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
          {''}
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/sport">Sport</Link>
        </li>
        <li>
          <Link to="/weather"> Weather</Link>
        </li>
        <li>
          <Link to="/iplayer"> iPlayer</Link>
        </li>
        <li>
          <Link to="/sounds"> Sounds</Link>
        </li>
        <li>
          <Link to="/bitesize"> Bitesize</Link>
        </li>
      </ul>
    </nav>
  )
}

export default ArticlesNavbar
