import React from 'react'
import Layout from '../components/layout'

import { Link } from "gatsby"

const IndexPage = () => (
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
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt.jpg" />
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
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300820/oliverjamescox.com/project%20media/le-portfolio-cover.jpg" />
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
            </div>
              <a href="https://www.raleigh.co.uk/centros/" target="_blank" rel="noopener noreferrer"><button className="cta-btn">Find out more</button></a>
          </div>
          <div className="index__project-container-sec2">
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300821/oliverjamescox.com/project%20media/p-des-centros-portfolio-cover.jpg" />
          </div>
        </div>
      </div>
  </Layout>
  
)

export default IndexPage