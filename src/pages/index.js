import React from 'react'
import Layout from '../components/layout'

import ProjectCard from '../feature/01-Project-Card/project-card'

const IndexPage = () => (

  <Layout>
      <div className="index__wrapper">
      
        <div className="index__container">
          <div className="index__headline">
            Hello, I'm Oliver.
          </div>
          <div className="index__headline--sub">
            I design and code with modern tooling, <br />striving for performance and accessibility.
          </div>
          <div className="index__headline--job">
            Designer at <a href="https://www.raleigh.co.uk/" target="_blank" rel="noopener noreferrer">@Raleigh</a>
          </div>
        </div>
      </div>
      <div className="index__body">
        <ProjectCard 
                  title="Lapierre Edge site"
                  tech="Wordpress, UI/UX Design"
                  descript1="Consumer facing web app tied in with the product launch of a range of Lapierre mountain bikes."
                  descript2="Assisting consumers in discovering the range and driving them through to the store locator to find their nearest stockist."
                  link="/p-dev-lapierre-edge"
                  image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/le-portfolio-cover"
                  alt="White Lapierre bicycles logo on a black background"
          />
          <ProjectCard 
                  title="Bespoke Wedding site"
                  tech="GatsbyJS, UI/UX Design"
                  descript1="The cost of small bespoke websites can vary in price, depending on user requirements."
                  descript2="I helped address the clients pain points and created a statically generated site as an alternative to the subscription model prevelant in WYSIWYG builders."
                  link="/p-dev-ryanandchristie"
                  image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt"
                  alt="The words Ryan &amp; Christie surrounded by hearts and flowers and a bauble with the date 23rd december 2018, the date of their wedding"
          />
      </div>
  </Layout>
  
)

export default IndexPage