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
      {/* ------------- 1st row starts here ------------- */}
      <div className="blog--container">
        <PortfolioCard 
            title="Lapierre Edge site"
            tech="WordPress"
            descript1="Consumer facing web site created to coincide with the product launch of a range of Lapierre mountain bikes."
            descript2="Raising awareness of the brand, assisting consumers in discovering the range and driving them through to the store locator to find nearest stockists."
            link="/p-dev-lapierre-edge"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/le-portfolio-cover"
            alt="White Lapierre bicycles logo on a black background"
        />
        <PortfolioCardExt 
            title="Illustrated Infographic"
            tech="Illustrator, WordPress"
            descript1="Created an infographic demonstrating the comparisons between two variations of tyres in an engaging informative way."
            descript2="The infographic is currently the most popular and visited page on the blog."
            link="https://www.raleigh.co.uk/2017/11/650b-wheels-vs-700c-wheels/"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-650binfo-portfolio-cover"
            alt="a graphic with the text of 650B vs 700c Wheels, A practical guide by Raleigh"
        />
        <PortfolioCardExt 
            title="Raleigh Product Finder"
            tech="UX, UI"
            descript1="An interactive product finder that helps the users select the right bicycle for them. Converting website visitors into buyers"
            descript2="Conducted user research, mapped question flows and aimed to address consumer pain points when purchasing a bike."
            link="https://www.raleigh.co.uk/bike-finder"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-bikeFinder-portfolio-coverNEW"
            alt="a room with a computer at a desk, showing the landing area of the bike finder tool"
        />
      </div>
      {/* ------------- 1st featured project card ------------- */}
      <div className="index__body">
          <ProjectCard 
            title="Bespoke Wedding site"
            tech="GatsbyJS, UI/UX Design"
            descript1="A project to create wedding website. I helped address the clients pain points and created a statically generated site as an alternative to the subscription model prevalant in WYSIWYG builders."
            descript2="Key requirements were zero overheads and a RSVP form and after the event a photo gallery and guest book."
            link="/p-dev-ryanandchristie"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt"
            alt="The words Ryan &amp; Christie surrounded by hearts and flowers and a bauble with the date 23rd december 2018, the date of their wedding"
          />
      </div>
      {/* ------------- 2nd row starts here ------------- */}
      <div className="blog--container">
        <PortfolioCardExt 
            title="Raleigh History refresh"
            tech="Illustrator, WordPress"
            descript1="Looking back over the 130 years of Raleigh's rich history and illustrating iconic moments in the bike industry as the UK's most recognised bicycle brand."
            descript2=""
            link="https://www.raleigh.co.uk/raleigh-history"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-historyRedesign-portfolio-cover"
            alt="Illustrated Purple Raleigh Chopper"
        />
        <PortfolioCardExt 
            title="Bike Design: Centros"
            tech="Design, Artworking"
            descript1="The brief to create the new flagship Raleigh urban e-bike."
            descript2="I explored competitors, the target audience and industry trends before creating a concept which was taken forward to production."
            link="https://www.raleigh.co.uk/centros/"
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/p-des-centros-portfolio-cover"
            alt="Raleigh Centros Crossbar bicycle side on shot in an urban environment"
        />
        <PortfolioCard 
            title="Personal Portfolio"
            tech="GatsbyJS, UI/UX Design"
            descript1="My personal site built with a JavaScript framework to showcase my work and to host my personal blog."
            descript2="The blog will feature learning material, case studies and small side project updates."
            link=""
            image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/oc-self-ident"
            alt="the letters O and C of my personal branding, the O has an illustration of me wearing a virtual reality headset"
        />
      </div>
    </div>
  </Layout>
)

export default portfolioPage