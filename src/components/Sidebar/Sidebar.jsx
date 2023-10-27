import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import LogoDalaes from '../../assets/images/Logo-d.png'
import LogoDalaesSubtitle from '../../assets/images/logo-ssioux-sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faChess,
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  // shows or not hamburguer menu
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoDalaes} alt="logo" />
        <img className="sub-logo" src={LogoDalaesSubtitle} alt="Ssioux" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="chess-link"
          to="/chess"
        >
          <FontAwesomeIcon icon={faChess} color="#4d4d4e" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/david-lázaro/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/ssioux">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburguer-icon"
      />
    </div>
  )
}

export default Sidebar
