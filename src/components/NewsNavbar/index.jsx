import { Link } from 'react-router-dom'
import './index.css'

function NewsNavbar() {
  return (
    <>
      <div className="news-title-container">
        <h1 className="news-title">News</h1>
      </div>
      <nav className="news-navbar">
        <ul className="nav-items">
          <li>
            <Link to="/home">Home |</Link>
          </li>
          <li>
            <Link to="/world">World |</Link>
          </li>
          <li>
            <Link to="/business">Business |</Link>
          </li>
          <li>
            <Link to="/culture">Culture |</Link>
          </li>
          <li>
            <Link to="/politics">Politics |</Link>
          </li>
          <li>
            <Link to="/Health">Health |</Link>
          </li>
          <li>
            <Link to="/tech">Tech |</Link>
          </li>
          <li>
            <Link to="/inDepth">inDepth |</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NewsNavbar
