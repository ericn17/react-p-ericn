import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoE from '../../assets/images/E-logo1.png'
import LogoEN from '../../assets/images/EN-sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faChessKnight } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo'to='/'>
      <img src={LogoE} alt ="logo" />
      <img  className="sub-logo" src={LogoEN} alt="Eric" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
        <FontAwesomeIcon icon={faChessKnight} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://www.linkedin.com/in/eric-nguyen-079364185/"
        >
          <FontAwesomeIcon icon={faLinkedin} color ="#4d4d4e"  />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ericn17"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar