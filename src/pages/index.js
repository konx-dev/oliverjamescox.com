import React from 'react'
import Link from 'gatsby-link'

import Contactform from '../components/contact-form'

const IndexPage = () => (
  <div>
      <div className="index__headline">
        Designer, Developer &amp; VR fanatic
      </div>
      <div className="index__headline--sub">
        I design and code with modern tooling, and love what I do.
      </div>
      <div className="work__container">
        <div className="work__item item_1">Project 1</div>
        <div className="work__item item_2">Project 2</div>
        <div className="work__item item_3">Project 3</div>
        <div className="work__item item_4">Project 4</div>
      </div>
      <div>
        <Contactform />
      </div>
  </div>
  
)

export default IndexPage
