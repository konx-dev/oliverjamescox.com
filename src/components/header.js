import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/oc_logo.svg'

const Header = () => (

/*  <div className="header--wrapper">
    <nav className="header--nav">
      <ul>
        <li><img className="logo" src={logo} alt="oc logo" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </div>
  
  <div className="menu-logo">
     <Link to="/"><img className="logo" src={logo} alt="oc logo" /></Link>
    </div>
  
  */
<div className="menu-container">
  <div className="menu">
    <div className="menu-logo">
        <Link to="/"><img className="logo" src={logo} alt="oc logo" /></Link>
    </div>
    <nav className="menu-items">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
    </nav>
  </div>
</div>
)

export default Header
