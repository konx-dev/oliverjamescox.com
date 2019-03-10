import React from 'react'
import { Link } from 'gatsby'

const Header = () => (

<div className="menu-container" id="page-top">
  <div className="menu">
    <div className="menu-logo">
        <Link to="/"><img className="logo" src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto/w_auto,c_scale/dpr_auto/v1545300207/oliverjamescox.com/logos%20%2B%20icons/oc_logo.svg" alt="oc logo" /></Link>
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
