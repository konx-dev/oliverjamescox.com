import React from 'react'
import Layout from '../components/layout'

import Contactform from '../components/contact-form'
import Img from 'gatsby-image'
import { graphql } from "gatsby"

const ContactPage = ({ data }) => (
  <Layout>
    <div className="contact__body">
      <div className="contact__hero">
        <div className="contact__hero--title">
          Contact
        </div>
        <div className="contact__hero--image">
          <Img  fluid={data.image1.childImageSharp.fluid}
                style={{
                  position: "relative",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "30vh"
                }} 
          />
        </div>
      </div>
      <Contactform />
    </div>
  </Layout>
  
)

export default ContactPage

export const query = graphql`
  query ContactQuery {
    image1: file(relativePath: { regex: "/4k-wallpaper-hello.jpg/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
