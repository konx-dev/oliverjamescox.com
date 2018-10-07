import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/oc_logo.svg'

const Header = () => (

<div className="menu-container" id="page-top">
  <div className="menu">
    <div className="menu-logo">
        <Link to="/"><img className="logo" src={logo} alt="oc logo" /></Link>
    </div>
    <nav className="menu-items">
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  </div>
</div>
)

export default Header
