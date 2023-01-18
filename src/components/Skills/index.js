import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import { BsPatchCheckFill } from 'react-icons/bs'
import ReactJs from '../../assets/images/react-js.png'
import SqlAndNosql from '../../assets/images/sql-and-nosql-databases.png'
import HtmlCss from '../../assets/images/html-css.png'
import NodeAndExpress from '../../assets/images/node-and-express.png'
import JavascriptAndJquery from '../../assets/images/javascript-and-jquery.png'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ]}
              idx={15}
            />
          </h1>
          <p>
           I have proficiency in both frontend and backend development. Some frontend skills include: React, HTML, CSS, Javascript, Bootstrap, and JQuery. Some backend skills include: MongoDB, Node.js, Express, SQL, and NoSQL. I have experience navigating, using, and managing a github repository and also Heroku.  
          </p>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={JavascriptAndJquery}
                alt="javascript-jquery" />
            </div>
            <div className="face2">
             <img src={ReactJs} alt="react" />
            </div>
            <div className="face3">
              <img src={HtmlCss}  alt="html-css" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face5">
              <img src={NodeAndExpress}  alt="node-express" />
            </div>
            <div className="face6">
              <img src={SqlAndNosql}  alt="slq-nosql" />
            </div>
          </div>
        </div>

       

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills