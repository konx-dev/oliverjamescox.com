import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
    <div style={{


    }}>

    <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        fontFamily: 'sans-serif',
        fontWeight: '400'



    }}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>

    </ul>
        
    </div>

)

export default Menu