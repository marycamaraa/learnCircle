import { Link } from 'react-router-dom'
import './index.css'

function ArticlesNavbar() {
  return (
    <nav>
      <ul>
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
