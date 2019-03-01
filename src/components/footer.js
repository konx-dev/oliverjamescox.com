import React from 'react'
import { Link } from 'gatsby'

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
        <li>
          <a href="https://github.com/olivercoxdesign" target="_blank" rel="noopener noreferrer">
            <img  className="social-icon" 
                  src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300228/oliverjamescox.com/logos%20%2B%20icons/github.svg" 
                  alt="github logo" 
            />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/olivercoxdesign/" target="_blank" rel="noopener noreferrer">
            <img  className="social-icon" 
                  src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300230/oliverjamescox.com/logos%20%2B%20icons/codepen.svg" 
                  alt="codepen logo" 
            />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/oliverjamescox" target="_blank" rel="noopener noreferrer">
            <img  className="social-icon" 
                  src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300231/oliverjamescox.com/logos%20%2B%20icons/dribbble.svg" 
                  alt="dribbble logo" 
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/oliverjamescox/" target="_blank" rel="noopener noreferrer">
            <img  className="social-icon" 
                  src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300228/oliverjamescox.com/logos%20%2B%20icons/instagram.svg" 
                  alt="instagram logo" 
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/oliverjamescox" target="_blank" rel="noopener noreferrer">
            <img  className="social-icon" 
                  src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300231/oliverjamescox.com/logos%20%2B%20icons/twitter.svg" 
                  alt="twitter logo" 
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/oliverjamescox/" target="_blank" rel="noopener noreferrer">
            <img  className="social-icon" 
                  src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300231/oliverjamescox.com/logos%20%2B%20icons/linkedin.svg" 
                  alt="linkedin logo" 
            />
          </a>
        </li>
      </ul>
      <p>
        Copyright &copy; Oliver Cox 2018 - 2028
      </p>
    </div>
  </div>

)

export default Footer
