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


      <div>
        <Contactform />
      </div>
  </div>
  
)

export default IndexPage
