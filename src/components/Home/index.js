import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/E-logo1.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import ProfilePic from '../../assets/images/profile-pic.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['E', 'r', 'i', 'c', ' ', ' ', 'N', 'g', 'u', 'y', 'e', 'n',',']
  const jobArray = [
    'w',
    'e', 
    'b', 
    ' ',
    ' ', 
    'd',
    'e', 
    'v', 
    'e', 
    'l', 
    'o', 
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br/>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={15} />
            <br />
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={jobArray}
              idx={22} />
          </h1>
          <h2> Full-stack Developer</h2>
          <Link to="/contact" className='flat-button'>
            CONTACT ME
          </Link>
        </div>
        <img className="profile-pic" src={ProfilePic} alt="profile" />
        {/* <Logo/> */}
      </div>
      
      <Loader type="pacman" />
    </>
  )
}

export default Home