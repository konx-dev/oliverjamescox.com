import React from 'react'
import Layout from '../components/layout'

import PortfolioCard from '../feature/02-Portfolio-Card/PortfolioCard'
import PortfolioCardExt from '../feature/02-Portfolio-Card/PortfolioCard-ext'
import ProjectCard from '../feature/01-Project-Card/project-card'

const portfolioPage = () => (
  <Layout>
    <div className="body--background">
      <div className="hero--container">
        <div className="hero--title">
          Portfolio
        </div>
      </div>
      <div className="blog--container">
        <PortfolioCard 
            title="Lapierre Edge site"
            tech="Wordpress"
            descript1="Consumer facing web site created to coincide with the product launch of a range of Lapierre mountain bikes."
            descript2="Raising awareness of the brand and assisting consumers in discovering the range and driving them through to the store locator to find their nearest stockist."
            link="/p-dev-lapierre-edge"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/le-portfolio-cover"
            alt="White Lapierre bicycles logo on a black background"
        />
        <PortfolioCardExt 
            title="Illustrated Infographic"
            tech="Illustrator, Wordpress"
            descript1="Created an infographic demonstrating the comparisons between two variations of tyres in an engaging informative way."
            descript2="The infographic is the most visited page currently on the blog."
            link="https://www.raleigh.co.uk/2017/11/650b-wheels-vs-700c-wheels/"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-650binfo-portfolio-cover"
            alt="a graphic with the text of 650B vs 700c Wheels, A practical guide by Raleigh"
        />
        <PortfolioCardExt 
            title="Raleigh Product Finder"
            tech="UX, UI"
            descript1="An interactive product finder that helps the users select the right bicycle for them. Converting website visitors into buyers"
            descript2=""
            link="https://www.raleigh.co.uk/bike-finder"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-bikeFinder-portfolio-coverNEW"
            alt="a room with a computer at a desk, showing the landing area of the bike finder tool"
        />
      </div>
      <div className="index__body">
          <ProjectCard 
            title="Bespoke Wedding site"
            tech="GatsbyJS, UI/UX Design"
            descript1="A freelance project to create wedding website. I helped address the clients pain points and created a statically generated site as an alternative to the subscription model prevelant in WYSIWYG builders."
            descript2="Key requirements were zero overheads and a RSVP form and after the event a photo gallery and guest book."
            link="/p-dev-ryanandchristie"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt"
            alt="The words Ryan &amp; Christie surrounded by hearts and flowers and a bauble with the date 23rd december 2018, the date of their wedding"
          />
      </div>
      <div className="blog--container">
        <PortfolioCard 
            title="Lapierre Edge site"
            tech="Wordpress"
            descript1="Consumer facing web site created to coincide with the product launch of a range of Lapierre mountain bikes."
            descript2="Raising awareness of the brand and assisting consumers in discovering the range and driving them through to the store locator to find their nearest stockist."
            link="/p-dev-lapierre-edge"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/le-portfolio-cover"
            alt="White Lapierre bicycles logo on a black background"
        />
        <PortfolioCardExt 
            title="Illustrated Infographic"
            tech="Illustrator, Wordpress"
            descript1="Created an infographic demonstrating the comparisons between two variations of tyres in an engaging informative way."
            descript2="The infographic is the most visited page currently on the blog."
            link="https://www.raleigh.co.uk/2017/11/650b-wheels-vs-700c-wheels/"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-650binfo-portfolio-cover"
            alt="a graphic with the text of 650B vs 700c Wheels, A practical guide by Raleigh"
        />
        <PortfolioCardExt 
            title="Raleigh Product Finder"
            tech="UX, UI"
            descript1="An interactive product finder that helps the users select the right bicycle for them. Converting website visitors into buyers"
            descript2=""
            link="https://www.raleigh.co.uk/bike-finder"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-bikeFinder-portfolio-coverNEW"
            alt="a room with a computer at a desk, showing the landing area of the bike finder tool"
        />
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
    </div>
    <a href="#page-top" title="Go to top"><button id="myBtn">&#8679;</button></a>
  </Layout>
)

export default portfolioPage