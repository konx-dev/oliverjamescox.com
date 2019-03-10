import React from 'react'
import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'

import cloudinary from 'cloudinary-core'

export default class LapierreEdge extends React.Component {

  componentDidMount() {
    var cl = cloudinary.Cloudinary.new({cloud_name: "olivercoxdesign"}); 
    cl.responsive();
  }

  render() {
    return(

  <Layout>
    <ScrollToTop />
    <div className="cs-body--background">
      
      
      <div className="cs--intro-block">
        <div className="intro-block--sec1">
          <div className="ib-sec1--category">
            Case Study
          </div>
          <div className="ib-sec1--title">
            Lapierre Edge website
          </div>
          <div className="ib-sec1--subtitle">
          <p>Consumer facing website tied in with the product launch of a range of Lapierre mountain bikes. The website will assist consumers in discovering the range and drive them through to the store locator to find the nearest stockist.</p>
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
        The product ranges are brand new, the website is positioned to raise awareness by exploring the products. Highlighting key features and unique selling points.
        </div>
      </div>

      <div className="cs--question-block-alt">
        <div className="qb-body">
          <h2>Project Setup</h2>
          <p>The website is a WordPress site with a base theme and layouts built using the Elementor page builder, hosted on a DigitalOcean droplet as the expected reach is within the United Kingdom. The site has no e-commerce functionality at this time and the main funnel drives users towards the store locator.</p>
          <p>I worked as the creative lead on the project, working with the brand and business development manager for Lapierre at Raleigh UK.</p>
        </div>
      </div>


      <div className="cs--examples-block">
        <div className="examples-block--image">
          <img 
              data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300819/oliverjamescox.com/project%20media/le-lifestyle1" 
              className="cld-responsive"
              alt="Helmet Point-of-view biking downhill on Lapierre mountain bikes"
          />
        </div>
      </div>


      <div className="cs--explore-block">
        <div className="explore-block-sec1">
          <div className="eb-sec1-header">
            Raleigh are the UK distributer for the Lapierre brand, the Edge AM / XM range are a UK only collection. The look and feel of the site had to sit closely to the existing brand identity.
          </div>
          <div className="eb-sec1-subheader">
            The initial brief was to create an online presence for the UK only range. I was tasked with choosing the build stack, finding appropriate hosting and then creating the site from the ground up.
          </div>
          <div className="eb-sec1-image">
          <img 
              data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300826/oliverjamescox.com/project%20media/le-sitesample" 
              className="cld-responsive"
              alt="Screenshot of the Lapierre customer website, shows a spray painted wall and a overvolt bike infront of it"
          />
          </div>
          <div className="eb-sec1-body">
          The deadline was less than a month to run in line with the dealer launch event at Raleigh HQ. I choose a PHP stack using a WordPress install on a DigitalOcean VM droplet. WordPress allows me to utilise the GUI page building with plugins such as Elementor. Having a simple and straight forward build stack gave me more time to focus on creating wireframes and prototypes. 
          </div>
        </div>
        <div className="explore-block-sec2">
          <div className="eb-sec2-image">
          <img 
              data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/le-mockups" 
              className="cld-responsive"
              alt="Visual site mockups of the index and a product page"
          />
          </div>
        </div>
      </div>


      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Mapping the features &amp; interactions</h2>
          <p>The website serves as a source of aspiration, raising awareness of the product range and providing key selling points of the products along with technical information. I worked to a brief outlining the project requirements, I firstly scoped out the pages as a feature flow chart.</p>
          <p>The interactions are with the store locator with the implementation of Googlemaps, with map markers for the stores with call-to-actions. The flow chart helps me to organise the flow of the content before I start wire framing the app layouts, I was providing frequent feedback so having implemented this I could easily share it with project managers to make sure all the important information was present.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
          <img 
                data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300826/oliverjamescox.com/project%20media/le-feature-flowchart" 
                className="cld-responsive"
                alt="Feature flowchart for the site"
            />
        </div>
      </div>  


      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Building the wireframes</h2>
          <p>The initial concepts were sketched with direction from the existing Lapierre consumer site and the brand guidelines. I presented these before moving to digital mock-ups due to time constraints on the project.</p>
          <p>I used Figma to create all the digital stages of this project, from the initial wireframe routes to the working prototype and implementing the visual designs for sign-off. The ability to share my projects and have someone simply follow a link and be able to see the work has been a great positive on my workflow, negating the need to pull together presentations or exporting files to package and send for approval.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
            <img 
                data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300824/oliverjamescox.com/project%20media/le-wireframes" 
                className="cld-responsive"
                alt="Wireframes for the site"
            />
        </div>
      </div>


      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Visual Design</h2>
          <p>I set up a Kanban board to provide instant feedback with the design going through several iterations. The board provided granular feedback and reduced time between client inputs.</p>
          <p>Below are some of the resulting visuals.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
            <img 
                data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300825/oliverjamescox.com/project%20media/le-visual-designs" 
                className="cld-responsive"
                alt="High Fidelity Visuals for the site"
            />
        </div>
      </div>

      <div className="cs--question-block">
        <div className="qb-body">
          <h2>Building the prototype</h2>
          <p>Another advantage of Figma was the ability to easily create a working prototype of the intended app from the wireframe art-boards I am already using. It was a great addition to be able to demonstrate the functionality to roll out for internal testing and communicate the design to the project managers.</p>
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
          <p>After shipping the site my next goal was to boost user experience with audits. Time to first paint is crucial to user engagement, if a site is slow or unresponsive the user may give up and go directly to a competitor. Having performant sites is of paramount importance.<br /><br />Using Google Lighthouse to identify areas of improvement, I was able to boost a performance score from 52/100 to 93/100 utilising image optimisations, HTTPS and caching. The site was also checked against the mobile-friendly test, as can be seen there is still plenty of room across the board for continued iterations and improvement.</p>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
            <img 
                data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300817/oliverjamescox.com/project%20media/le-audits-r1" 
                className="cld-responsive"
                alt="Performance audits and mobile friendly test results for the site"
            />
        </div>
      </div>


      <div className="cs--examples-block">
        <div className="examples-block--image">
            <img 
                data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300818/oliverjamescox.com/project%20media/le-room-mockup" 
                className="cld-responsive"
                alt="An office with a desk and computer, the screen of the computer displaying the lapierre edge website"
            />
        </div>
      </div>


      <div className="cs--links-block--top-padding">
        <button className="links--cta-btn">
            <a href="https://lapierreedge.com" target="_blank" rel="noopener noreferrer">View project &rarr; </a>
        </button>
      </div>
    </div>
  </Layout>
  
  )
}
}
