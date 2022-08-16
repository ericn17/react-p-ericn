import './index.scss'
import DinnerWithSmhucks from '../../assets/images/DinnerWithSchmucks.gif'
import SurfDeck from '../../assets/images/Surf-Deck.gif'
import BabbleExchange from '../../assets/images/Babble-Exchange.gif'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

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
          <div className='portfolio-item'>
            <div className="portfolio-item-image">
              <img src={DinnerWithSmhucks} className="project-image" alt="smhucks" width= "600" height="400" />
            </div>
            <h2>Dinner With Smhucks</h2>
            <a href="https://github.com/DesertCow/DinnerWithSchmucks" className='btn' >Github</a>
            <a href="https://desertcow.github.io/DinnerWithSchmucks/"className='btn btn-primary' >Live Demo</a>
          </div>

          <div className='portfolio-item'>
            <div className="portfolio-item-image">
            <img src={SurfDeck} alt="surfdeck" width="600" height="400" />
            </div>
            <h2>Surf-Deck</h2>
            <a href="https://github.com/DesertCow/Surf-Deck" className='btn' >Github</a>
            <a href="https://surf-deck.herokuapp.com/" className='btn btn-primary' >Live Demo</a>
          </div>

          <div className='portfolio-item'>
            <div className="portfolio-item-image">
            <img src={BabbleExchange} alt="babble" width="600" height="400" />
            </div>
            <h2>Babble-Exchange</h2>
            <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
            <a href="https://babble-exchange.herokuapp.com/"className='btn btn-primary' >Live Demo</a>
          </div>

        <div className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={BabbleExchange} alt="babble" width="600" height="400" />
          </div>
          <h2>Babble-Exchange</h2>
          <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
          <a href="https://babble-exchange.herokuapp.com/" className='btn btn-primary' >Live Demo</a>
        </div>

        <div className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={BabbleExchange} alt="babble" width="600" height="400" />
          </div>
          <h2>Babble-Exchange</h2>
          <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
          <a href="https://babble-exchange.herokuapp.com/" className='btn btn-primary' >Live Demo</a>
        </div>

        <div className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={BabbleExchange} alt="babble" width="600" height="400" />
          </div>
          <h2>Babble-Exchange</h2>
          <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
          <a href="https://babble-exchange.herokuapp.com/" className='btn btn-primary' >Live Demo</a>
        </div>

        <div className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={BabbleExchange} alt="babble" width="600" height="400" />
          </div>
          <h2>Babble-Exchange</h2>
          <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
          <a href="https://babble-exchange.herokuapp.com/" className='btn btn-primary' >Live Demo</a>
        </div>

        <div className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={BabbleExchange} alt="babble" width="600" height="400" />
          </div>
          <h2>Babble-Exchange</h2>
          <a href="https://github.com/DesertCow/Babble-Exchange" className='btn' >Github</a>
          <a href="https://babble-exchange.herokuapp.com/" className='btn btn-primary' >Live Demo</a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}


export default Portfolio