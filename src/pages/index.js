import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
      <div className="index__wrapper">
        <div className="index__container">
          <div className="index__headline">
            Hello, I'm Oliver.
          </div>
          <div className="index__headline--sub">
            I design and code with modern <br></br>tooling, and love what I do.
          </div>
          <div className="index__headline--job">
            Designer at <a href="https://www.raleigh.co.uk/" target="_blank" rel="noopener noreferrer">@Raleigh</a>
          </div>
        </div>
      </div>
      <div className="index__body">
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Project Title
            </div>
            <div className="index__project-tech">
              GatsbyJS, GraphQL
            </div>
            <div className="index__project-desc">
              The Description goes here. A couple of sentences to hook and drive clickthrough.
            </div>
            <div className="index__project-cta">
              Find out more
            </div>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Project Title
            </div>
            <div className="index__project-tech">
              GatsbyJS, GraphQL
            </div>
            <div className="index__project-desc">
              The Description goes here. A couple of sentences to hook and drive clickthrough.
            </div>
            <div className="index__project-cta">
              Find out more
            </div>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Project Title
            </div>
            <div className="index__project-tech">
              GatsbyJS, GraphQL
            </div>
            <div className="index__project-desc">
              The Description goes here. A couple of sentences to hook and drive clickthrough.
            </div>
            <div className="index__project-cta">
              Find out more
            </div>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
      </div>
  </Layout>
  
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    image1: file(relativePath: { regex: "/placeholder-4Kres-1.jpg/" }) {
      childImageSharp {
        fluid( quality: 85, maxWidth: 3840 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`