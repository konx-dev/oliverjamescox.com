import React from 'react'
import Layout from '../components/layout'

import { Link } from "gatsby"
import ProjectCard from '../feature/01-Project-Card/project-card'

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
            <img src="#" />
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
            <img src="#" />
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
            {/* <img
              sizes="(max-width: 2800px) 100vw, 2800px"
              srcSet="
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_200/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 200w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_644/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 644w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_935/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 935w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_1266/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 1266w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_1557/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 1557w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_1844/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 1844w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2105/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2105w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2365/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2365w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2628/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2628w,
                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2800/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2800w"
              src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt"
              alt="Ryan &amp; Christie's Wedding Project Cover" 
            /> */}
          </div>
        </div>
        <ProjectCard 
                title="Bespoke Wedding site"
                tech="GatsbyJS, UI/UX Design"
                description="The cost of small bespoke websites can vary in price, depending on user requirements. I helped address the clients pain points and created a statically generated site as an alternative to the subscription model prevelant in WYSIWYG builders."
                link="/p-dev-ryanandchristie"
                image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt"
                alt="The words Ryan &amp; Christie surrounded by hearts and flowers and a bauble with the date 23rd december 2018, the date of their wedding"
        />
      </div>
  </Layout>
  
)

export default IndexPage