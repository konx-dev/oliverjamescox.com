import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/oc_logo.svg'

const Header = () => (
    <div className="headerStyle">
      <Link to="/"><img className="logo" src={logo} alt="oc logo" /></Link>
      <ul className="nav--items">
        <li className="nav--item"><Link to="/about">About</Link></li>
        <li className="nav--item"><Link to="/work">Work</Link></li>
        <li className="nav--item"><Link to="/contact-alt">Contact</Link></li>
        <li className="nav--item"><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
)

export default Header
