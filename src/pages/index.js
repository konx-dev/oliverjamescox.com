import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql, Link } from "gatsby"

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
            Wedding bespoke app
            </div>
            <div className="index__project-tech">
              GatsbyJS, UI/UX Design
            </div>
            <div className="index__project-desc">
              The cost of small bespoke sites can vary in price, depending on user requirements. I helped address the clients pain points and created a statically generated app as an alternative to the subscription model prevelant in WYSIWYG builders.
            </div>
              <Link to="/p-dev-ryanandchristie"><button className="cta-btn">Find out more</button></Link>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image2.childImageSharp.fluid} />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Lapierre Edge app
            </div>
            <div className="index__project-tech">
              Wordpress, UI/UX Design
            </div>
            <div className="index__project-desc">
              <p>Consumer facing web app tied in with the product launch of a range of Lapierre mountain bikes.</p>
              <p>Assisting consumers in discovering the range and driving them through to the store locator to find their nearest stockist.</p>
            </div>
              <Link to="/p-dev-lapierre-edge"><button className="cta-btn">Find out more</button></Link>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image3.childImageSharp.fluid} />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Bike Design: Centros
            </div>
            <div className="index__project-tech">
              Product Design, Artworking
            </div>
            <div className="index__project-desc">
              <p>A product design brief to create the new flagship Raleigh urban e-bike.</p>
              <p>**CASE STUDY COMING**</p>
            </div>
              <a href="https://www.raleigh.co.uk/centros/" target="_blank" rel="noopener noreferrer"><button className="cta-btn">Find out more</button></a>
          </div>
          <div className="index__project-container-sec2">
            <Img fluid={data.image4.childImageSharp.fluid} />
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
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { regex: "/rc-portfolio-cover-alt/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/le-portfolio-cover/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image4: file(relativePath: { regex: "/p-des-centros-portfolio-cover/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`