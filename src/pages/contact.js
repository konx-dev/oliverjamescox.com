import React from 'react'
import Layout from '../components/layout'

import Contactform from '../components/contact-form'

const ContactPage = ({ data }) => (
  <Layout>
    <div className="body--background">
      <div className="hero--container">
        <div className="hero--title">
          Contact
        </div>
        <div className="hero--image">
          <img className="banner-container" src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300821/oliverjamescox.com/project%20media/4k-wallpaper-hello.jpg" />
        </div>
      </div>
      <Contactform />
    </div>
  </Layout>
  
)

export default ContactPage