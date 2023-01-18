import './index.scss'
import DinnerWithSmhucks from '../../assets/images/DinnerWithSchmucks.gif'
import SurfDeck from '../../assets/images/Surf-Deck.gif'
import BabbleExchange from '../../assets/images/Babble-Exchange.gif'
import SmashBurger from '../../assets/images/smashburger.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState
  ('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text">
        <h1>  
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o ', 'l', 'i', 'o']}
          idx={15}
        />
        </h1>
        </div>

        <div className='portfolio-box'>
          <div className='portfolio-item'>
              <img src={BabbleExchange} alt="CIGART"  />
            <div className='hover-items'>
              <h2>Cigart</h2>
              <p>Cigart is a MERN Stack e-commerce website that uses redux, stripe for payments, JWT and mongodb to store the users' products. </p>
              <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
              <a href="https://babble-exchange.herokuapp.com/"className='btn btn-primary' >Live Demo</a>
            </div>
          </div>

          <div className='portfolio-item'>
            <img src={BabbleExchange} alt="babble" />
            <div className='hover-items'>
              <h2>Babble-Exchange</h2>
              <p>Babble-Exchange is an instant messaging application that utilizes socket.io, react for the frontend, and mongodb to store its clients' users and messages. </p>
              <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
              <a href="https://babble-exchange.herokuapp.com/"className='btn' >Live Demo</a>
            </div>
          </div>

          <div className='portfolio-item'>
            
            <img src={SurfDeck} alt="surfdeck"  />
            
            <div className='hover-items'>
              <h2>Surf-Deck</h2>
              <p>
                Surf-Deck is a full-stack surfboard rental website that stores the our inventory into a database using MySQL and Sequilize. Bootstrap was used to style the website.
              </p>
              <a href="https://github.com/DesertCow/Surf-Deck" className='btn' >Github</a>
              <a href="https://surf-deck.herokuapp.com/" className='btn btn-primary' >Live Demo</a>
            </div>
          </div>

          <div className='portfolio-item'>
           
              <img src={DinnerWithSmhucks} className="project-image" alt="smhucks" />
         
            <div className='hover-items'>
              <h2>Dinner With Smhucks</h2>
              <p>Dinner With Smhucks is a simple webpage using multiple APIs to create a fun dining experience.</p>
              <a href="https://github.com/DesertCow/DinnerWithSchmucks" className='btn' >Github</a>
              <a href="https://desertcow.github.io/DinnerWithSchmucks/"className='btn btn-primary' >Live Demo</a>
            </div>
          </div>

          <div className='portfolio-item'>
            
              <img src={SmashBurger} alt="babble"  />
         
            <div className='hover-items'>
            <h2>Smash Burger Website</h2>
            <p>This is a brochure website for a Smash Burger Joint. An early project to practice CSS</p>
            <a href="https://github.com/ericn17/smash-burger-wp" className='btn' >Github</a>
            <a href="https://ericn17.github.io/smash-burger-wp/index.html" className='btn btn-primary' >Live Demo</a>
            </div>
          </div>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}


export default Portfolio