import React from 'react'
import { Link } from 'gatsby'

import githubIcon from '../images/social-icons/github.svg'
import cpenIcon from '../images/social-icons/codepen.svg'
import instaIcon from '../images/social-icons/instagram.svg'
import twitIcon from '../images/social-icons/twitter.svg'
import emailIcon from '../images/social-icons/email.svg'
import linkedIcon from '../images/social-icons/linkedin.svg'
import dribbbleIcon from '../images/social-icons/dribbble.svg'

const Footer = () => (

  <div className="footer--wrapper">
    <nav className="footer--nav">
          <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
      </nav>
    <div className="footer--container">
      <ul>
        <li><a href="https://github.com/olivercoxdesign" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={githubIcon} alt="github logo" /></a></li>
        <li><a href="https://codepen.io/olivercoxdesign/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={cpenIcon} alt="codepen logo" /></a></li>
        <li><a href="https://dribbble.com/oliverjamescox" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={dribbbleIcon} alt="dribbble logo" /></a></li>
        <li><a href="https://www.instagram.com/oliverjamescox/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={instaIcon} alt="instagram logo" /></a></li>
        <li><a href="https://twitter.com/oliverjamescox" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={twitIcon} alt="twitter logo" /></a></li>
        <li><a href="mailto:olivercoxdesign@gmail.com"><img className="social-icon" src={emailIcon} alt="email logo" /></a></li>
        <li><a href="https://www.linkedin.com/in/oliverjamescox/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={linkedIcon} alt="linkedin logo" /></a></li>
      </ul>
      <p>
        Copyright &copy; Oliver Cox 2018
      </p>
    </div>
  </div>

)

export default Footer
