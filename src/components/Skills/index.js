import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ]}
              idx={15}
            />
          </h1>
        </div>

        <div className="skills-container">
          <div className="skills-frontend" >
            <h3>Frontend Development</h3>
            <div className="skills-content">
              <article className="skills-details">
                <BsPatchCheckFill />
                <h4>HTML</h4>
                <BsPatchCheckFill />
                <h4>CSS</h4>
                <BsPatchCheckFill />
                <h4>Javascript</h4>
                <BsPatchCheckFill />
                <h4>Bootstrap</h4>
                <BsPatchCheckFill />
                <h4>React</h4>
              </article>
            </div>
          </div>

          <div className="skills-backend" >
            <h3>Backend Development</h3>
            <div className="skills-content">
              <article className="skills-details">
                <BsPatchCheckFill />
                <h4>Node JS</h4>
                <BsPatchCheckFill />
                <h4>MongoDB</h4>
                <BsPatchCheckFill />
                <h4>MySQL</h4>
                <BsPatchCheckFill />
                <h4>Express</h4>
              </article>
            </div>
          </div>

        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills