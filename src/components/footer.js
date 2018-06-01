import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/oc_logo.svg'

const Footer = () => (

  <div className="footer--wrapper">
    <div className="footer--container">
      <ul>
        <li><Link to="/"></Link></li>
        <li><Link to="/about">Codepen</Link></li>
        <li><Link to="/work">Email</Link></li>
        <li><Link to="/work">LinkedIn</Link></li>
        <li><Link to="/work">Instagram</Link></li>
        <li><Link to="/work">Twitter</Link></li>
      </ul>
    </div>
  </div>




/*  <div className="footer--wrapper">
    <div className="footer--container">
      <ul>
        <li><Link to="/">Github</Link></li>
        <li><Link to="/about">Codepen</Link></li>
        <li><Link to="/work">Email</Link></li>
        <li><Link to="/work">LinkedIn</Link></li>
        <li><Link to="/work">Instagram</Link></li>
        <li><Link to="/work">Twitter</Link></li>
      </ul>
    </div>
  </div> */

)

export default Footer
