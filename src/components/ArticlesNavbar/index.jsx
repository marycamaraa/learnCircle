import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'
import profileImg from '../../assets/profileImg.png'

import './index.css'

function ArticlesNavbar() {
  return (
    <nav className="articles-navbar-container">
      <ul className="articles-nav-links">
        <Link to="/">
          <img className="articles-logo" src={logo} />{' '}
        </Link>
        <Link to="/profile">
          <img className="profile-icon" src={profileImg} />
        </Link>
        <Link to="/">
          <img className="notification-icon" src={notification} />
        </Link>
        <li>
          <Link to="/home">Home</Link>
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
