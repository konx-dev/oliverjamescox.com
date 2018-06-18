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
          <Link to="/raleigh-history"><div className="work-content">
            Raleigh History Redesign
              <div className="work-category">
                Illustration
              </div>
          </div></Link>
        </div>
        <div className="work-item item_2">
          <Link to="/design-bike-abstrakt"><div className="work-content">
              Abstrakt - Kids Bike
                <div className="work-category">
                  Product Design
                </div>
            </div></Link>
        </div>
        <div className="work-item item_3">
          <Link to="/dev-html-emails"><div className="work-content">
              Email Marketing
                <div className="work-category">
                  HTML, CSS
                </div>
            </div></Link>
        </div>
        <div className="work-item item_4">
          <Link to="/raleigh-infographic"><div className="work-content">
            Infographic
              <div className="work-category">
                Illustration
              </div>
          </div></Link>
        </div>
      </div>

      <div>
        <Contactform />
      </div>
  </div>
  
)

export default IndexPage
