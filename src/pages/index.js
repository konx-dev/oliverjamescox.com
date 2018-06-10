import React from 'react'
import Link from 'gatsby-link'

import Contactform from '../components/contact-form'

const IndexPage = () => (
  <div>
      <div className="index__headline">
        Designer, Developer &amp; Virtual Reality fanatic
      </div>
      <div className="index__headline--sub">
        I design and code with modern tooling, and love what I do.
      </div>
      <div className="work-grid">
        <div className="work-item item_1">
          <div className="work-content"><Link to="/work">Explore &rarr;</Link></div>
        </div>
        <div className="work-item item_2">
            <div className="work-content">Explore &rarr;</div>
        </div>
        <div className="work-item item_3">
            <div className="work-content">Explore &rarr;</div>
        </div>
        <div className="work-item item_4">
            <div className="work-content">Explore &rarr;</div>
        </div>
        <div className="work-item item_5">
            <div className="work-content">Explore &rarr;</div>
        </div>
      </div>

      <div>
        <Contactform />
      </div>
  </div>
  
)

export default IndexPage
