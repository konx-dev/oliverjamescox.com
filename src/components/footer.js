import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/oc_logo.svg'
import githubIcon from '../images/social-icons/github.svg'
import cpenIcon from '../images/social-icons/codepen.svg'
import instaIcon from '../images/social-icons/instagram.svg'
import twitIcon from '../images/social-icons/twitter.svg'
import emailIcon from '../images/social-icons/email.svg'
import linkedIcon from '../images/social-icons/linkedin.svg'

const Footer = () => (

  <div className="footer--wrapper">
    <div className="footer--container">
      <ul>
        <li><a href="https://github.com/olivercoxdesign" target="_blank"><img className="social-icon" src={githubIcon} alt="github logo" /></a></li>
        <li><a href="https://codepen.io/olivercoxdesign/" target="_blank"><img className="social-icon" src={cpenIcon} alt="codepen logo" /></a></li>
        <li><a href="https://www.instagram.com/ollycox86/?hl=en" target="_blank"><img className="social-icon" src={instaIcon} alt="instagram logo" /></a></li>
        <li><a href="https://twitter.com/oliverjamescox" target="_blank"><img className="social-icon" src={twitIcon} alt="twitter logo" /></a></li>
        <li><a href="mailto:olivercoxdesign@gmail.com"><img className="social-icon" src={emailIcon} alt="email logo" /></a></li>
        <li><a href="https://www.linkedin.com/in/oliverjamescox/" target="_blank"><img className="social-icon" src={linkedIcon} alt="linkedin logo" /></a></li>
      </ul>
      <p>
        Copyright &copy; 2018 Oliver Cox • Nottingham based Designer &amp; Developer
      </p>
    </div>
  </div>

)

export default Footer
