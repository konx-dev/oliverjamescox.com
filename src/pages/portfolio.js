import React from 'react'
import Layout from '../components/layout'

import { Link } from 'gatsby'

const portfolioPage = () => (
  <Layout>
    <div className="body--background">
      <div className="hero--container">
        <div className="hero--title">
          Development
        </div>
        <div className="hero--image">
          <img className="banner-container" src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300829/oliverjamescox.com/project%20media/4k-wallpaper-developer.jpg" />
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
              <p>*Still a work in progress, case study will follow*</p>
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
              Personal Portfolio 
            </div>
            <div className="index__project-tech">
              GatsbyJS, UI/UX Design
            </div>
            <div className="index__project-desc">
             <p>My personal site built with a JavaScript framework to showcase my projects and to host my blog.</p> 
             <p>Exploring the build stack and my pursuit for a blazingly fast progressive web app that can be used as a substitute for a printed portfolio.</p>
            </div>
          </div>
          <div className="index__project-container-sec2">
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300829/oliverjamescox.com/project%20media/p-dev-personalPortfolio-portfolio-cover.jpg" />
          </div>
        </div>
      <div className="hero--container-divider">
        <div className="hero--title">
          Design
        </div>
        <div className="hero--image">
          <img className="banner-container" src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300831/oliverjamescox.com/project%20media/4k-wallpaper-designer.jpg" />

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
              <p>*Case Study in progress*</p>
            </div>
              <a href="https://www.raleigh.co.uk/centros/" target="_blank" rel="noopener noreferrer"><button className="cta-btn">Find out more</button></a>
          </div>
          <div className="index__project-container-sec2">
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300821/oliverjamescox.com/project%20media/p-des-centros-portfolio-cover.jpg" />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Raleigh History refresh
            </div>
            <div className="index__project-tech">
              Illustrator, Wordpress
            </div>
            <div className="index__project-desc">
              Looking back over the 130 years of Raleigh's rich history and illustrating iconic moments in the bike industry as the UK's most recognised bicycle brand.
            </div>
            <a href="https://www.raleigh.co.uk/raleigh-history" target="_blank" rel="noopener noreferrer"><button className="cta-btn">Find out more</button></a>
          </div>
          <div className="index__project-container-sec2">
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300829/oliverjamescox.com/project%20media/p-des-historyRedesign-portfolio-cover.jpg" />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Raleigh Product Finder
            </div>
            <div className="index__project-tech">
              UX, UI
            </div>
            <div className="index__project-desc">
              <p>An interactive product finder that helps the users select the right bicycle for them. Converting website visitors into buyers</p>
            </div>
            <a href="https://www.raleigh.co.uk/bike-finder" target="_blank" rel="noopener noreferrer"><button className="cta-btn">Find out more</button></a>
          </div>
          <div className="index__project-container-sec2">
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300828/oliverjamescox.com/project%20media/p-des-bikeFinder-portfolio-cover.jpg" />
          </div>
        </div>
        <div className="index__project-container">
          <div className="index__project-container-sec1">
            <div className="index__project-title">
              Illustrated Infographic
            </div>
            <div className="index__project-tech">
              Illustrator, Wordpress
            </div>
            <div className="index__project-desc">
              <p>Created an infographic demonstrating the comparisons between two variations of tyres in an engaging informative way.</p> 
              <p>The infographic is the most visited page currently on the blog.</p>
            </div>
              <a href="https://www.raleigh.co.uk/2017/11/650b-wheels-vs-700c-wheels/" target="_blank" rel="noopener noreferrer"><button className="cta-btn">Find out more</button></a>
          </div>
          <div className="index__project-container-sec2">
            <img src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300822/oliverjamescox.com/project%20media/p-des-650binfo-portfolio-cover.jpg" />
          </div>
        </div>
    </div>
    <a href="#page-top" title="Go to top"><button id="myBtn">&#8679;</button></a>
  </Layout>
)

export default portfolioPage