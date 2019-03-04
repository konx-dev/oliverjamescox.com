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
      </div>
      <Contactform />
    </div>
  </Layout>
  
)

export default ContactPage