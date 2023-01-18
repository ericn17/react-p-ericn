import BigLogo from '../../../assets/images/EN-biglogo.png'
import { useEffect, useRef } from 'react'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()


  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={BigLogo}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo