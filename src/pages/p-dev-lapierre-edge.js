import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql } from "gatsby"

const lapierreEdgePage = ({ data }) => (
  <Layout>
    <div className="cs-body--background">
      
      
      <div className="cs--intro-block">
        <div className="intro-block--sec1">
          <div className="ib-sec1--category">
            Case Study
          </div>
          <div className="ib-sec1--title">
            Brand web app
          </div>
          <div className="ib-sec1--subtitle">
          <p>Consumer facing web app tied in with the product launch of a range of Lapierre mountain bikes. The web app will assist consumers in discovering the range and drive them through to the store locator to find their nearest stockist.</p>
          <p>Key features included a store locator, range overviews &amp; technical specifications.</p>
          </div>
          <button className="ib-sec1--cta-btn">
            <a href="https://lapierreedge.com" target="_blank" rel="noopener noreferrer">View project &rarr; </a>
          </button>
        </div>
      </div>


      <div className="cs--skills-block">
        Built with Wordpress and Elementor, hosted on a DigitalOcean VM droplet.
      </div>


      <div className="cs--problem-block">
        <div className="problem-block--sec1">
        The product ranges are brand new, the web app is positioned to raise awareness by exploring the products. Highlighting key features and unique selling points per range and product.
        </div>
      </div>

      <div className="cs--question-block-alt">
        <div className="qb-body">
          <h2>Project Setup</h2>
          <p>The web app is a Wordpress site with a base theme and layouts built using the Elementor page builder, the app is hosted on a small Digitalocean droplet as the expected reach is within the United Kingdom. The site has no e-commerce functionality at this time and the main funnel drives users towards the store locator.</p>
          <p>I worked as the creative lead on the project, working with brand and business development manager for Lapierre at Raleigh UK.</p>
        </div>
      </div>


      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image2.childImageSharp.fluid} />
        </div>
      </div>


      <div className="cs--explore-block">
        <div className="explore-block-sec1">
          <div className="eb-sec1-header">
            Raleigh are the UK distributer for the Lapierre brand, the Edge AM / XM range are a UK only collection. The look and feel of the app had to sit closely to the existing brand identity.
          </div>
          <div className="eb-sec1-subheader">
            The initial brief was to create an online presence for the UK only range. I was tasked with choosing the build stack, finding appropriate hosting and then creating the app from the ground up.
          </div>
          <div className="eb-sec1-image">
          <Img fluid={data.image3.childImageSharp.fluid} />
          </div>
          <div className="eb-sec1-body">
          The deadline was less than a month to run inline with the dealer launch event at Raleigh HQ. I choose a PHP stack using a Wordpress install on a DigitalOcean VM droplet. Wordpress allows me to utilise the GUI page building with plugins such as Elementor. Having a simple and straight forward build stack gave me more time to focus on creating wireframes and prototypes. 
          </div>
        </div>
        <div className="explore-block-sec2">
          <div className="eb-sec2-image">
          <Img fluid={data.image5.childImageSharp.fluid} />
          </div>
        </div>
      </div>


      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Mapping the features &amp; interactions</h2>
          <p>The app serves as a source of aspiration raising awareness of the product range and providing technical information. Working to the project requirements and provided copy I have scoped out the pages as a feature flow chart.</p>
          <p>The interactions are with the store locator with the intention of implementing a google maps javascript api with map markers for the various stores with call-to-action links taking the user to the specific store. The flow chart helps me to organise the flow of the content before I start wire framing the app layouts, I was providing frequent feedback so having implemented this I could easily share it with project managers to make sure all the important information was present.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image1.childImageSharp.fluid} />
        </div>
      </div>  


      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Building the wireframes</h2>
          <p>The initial concepts were sketched with direction from the existing Lapierre consumer site and the brand guidelines. I presented these before moving to digital mock-ups due to time constraints on the project.</p>
          <p>I used Figma to create all of the digital stages of this project, from the initial wireframe routes to the working prototype and implementing the visual designs for sign-off. The ability to share my projects and have someone simply follow a link and be able to see the work has been a great positive on my workflow, negating the need to pull together presentations or exporting files to package and send for approval.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image7.childImageSharp.fluid} />
        </div>
      </div>


      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Visual Design</h2>
          <p>I set up a Trello board (web-based project management app) to provide instant feedback with the design going through several iterations. Trello provided granular feedback and reduced time between client inputs.</p>
          <p>Below are some of the resulting visuals.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image8.childImageSharp.fluid} />
        </div>
      </div>

      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Building the prototype</h2>
          <p>Another advantage of Figma was the ability to easily create a working prototype of the intended app from the wireframe art-boards I am already using. It was a great addition to be able to demonstrate the functionality to role out for internal testing and communicate the design to the project managers.</p>
        </div>
      </div>
      <div className="cs--links-block">
        <button className="links--cta-btn">
          <a href="https://www.figma.com/proto/Ed6jhFk8IfAY2M20pRyTbzjg/Lapierre---Edge?node-id=1%3A2&viewport=86%2C377%2C0.2&scaling=scale-down-width&redirected=1" target="_blank" rel="noopener noreferrer">View prototype &rarr; </a>
        </button>
      </div>


      <div className="cs--question-block-alt">
        <div className="qb-body">
          <h2>Audits</h2>
          <p>After shipping the site my next goal was to boost user experience with audits. Using Lighthouse to identify the low hanging fruit I was able to boost a performance score from 52 to 93 / 100 utilising image compression, https and caching. There is still plenty of room across the board for continued iterations and improvement.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image6.childImageSharp.fluid} />
        </div>
      </div>


      <div className="cs--examples-block">
        <div className="examples-block--image">
        <Img fluid={data.image4.childImageSharp.fluid} />
        </div>
      </div>


      <div className="cs--links-block--top-padding">
        <button className="links--cta-btn">
            <a href="https://lapierreedge.com" target="_blank" rel="noopener noreferrer">View project &rarr; </a>
        </button>
      </div>
      <button id="myBtn">
          <a href="#page-top" title="Go to top">&#8679;</a>
      </button>
    </div>
  </Layout>
  
)

export default lapierreEdgePage

export const query = graphql`
  query cs2Query {
    image2: file(relativePath: { regex: "/le-lifestyle1/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image3: file(relativePath: { regex: "/le-sitesample/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp 
        }
      }
    }
    image5: file(relativePath: { regex: "/le-mockups/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp 
        }
      }
    }
    image6: file(relativePath: { regex: "/le-audits-r1/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp 
        }
      }
    }
    image4: file(relativePath: { regex: "/le-room-mockup/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(relativePath: { regex: "/le-feature-flowchart/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image7: file(relativePath: { regex: "/le-wireframes/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image8: file(relativePath: { regex: "/le-visual-designs/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }    
  }
`