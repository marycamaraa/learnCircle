import { Link } from 'react-router-dom'
import graphicsIcon from '../../assets/graphicsIcon.png'
import './index.css'

function GraphicsNavbar() {
  return (
    <>
      <div className="top-backgroud"> Cherry</div>
      <nav className="graphics-navbar">
        <ul className="graphics-nav-items">
          <li>
            <Link to="/">
              <img className="graphics-logo" src={graphicsIcon} />
            </Link>
          </li>
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
