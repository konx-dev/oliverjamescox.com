import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql } from "gatsby"

const AboutPage = ({ data }) => (
  <Layout>
    <div className="about__header">
      <div className="about__header-image">
        <Img fluid={data.image1.childImageSharp.fluid} />
      </div>
    </div>
    <div className="about__body">
      <div className="about__body-container">
        <div className="cv-body-main">
          As a designer, I’m always looking for new sources of inspiration and projects to grow and learn within this ever-changing and fast-paced industry. My interests lie in usability and performance within design and development. I specialise in traditional print and digital design and am currently utilising these skills as the creative lead for Raleigh UK Ltd. digital marketing team.
        </div>
        <div className="cv-header">
          Qualifications
        </div>
        <div className="cv-body">
          <ul>
            <li>Passionate about marrying graphic design with web development to enrich user experience.</li>
            <li>Proven excellence in using psychology with design to convey company ideology and evoke emotions in consumers.</li>
            <li>Ensure I am learning new technologies by continually self-studying and connecting with other professionals.</li>
            <li>Highly motivated by fast-paced and multiple projects and supporting others to resolve problems.</li>
            <li>Personable and professional; able to engage with and forge lasting relationships with a range of customers.</li>
          </ul>
        </div>
        <div className="cv-header">
          Experience
        </div>
        <div className="cv-body">
          <ul>
            <li className="cv-title">Digital Designer, Raleigh UK
              <div className="cv-duration">October '17 - Present</div>
              <div className="cv-description">As digital designer, I design, maintain and develop all code for numerous email channels. Within Raleigh, I work as a creative lead across a portfolio of brands on digital projects such as the Bike finder tool, helping consumers find the right product. This feature has resulted in an increased conversion rate across all bike ranges. I collaborate with departments on larger consumer-centric projects such as the Lapierre Edge product launch, creating the consumer website accomodating the new ranges.</div>
            </li>
            <li className="cv-title">Graphic Designer, Raleigh UK
              <div className="cv-duration">October '16 - October '17</div>
              <div className="cv-description">My role focussed on printed and digital products for a range of branding within Raleigh UK. This included major projects, such as the parts catalogue featuring over 10,000 products and the design and artworking of accessory packaging ranges along with the product design of the flagship e-bike Centros bicycle.</div>
            </li>
            <li className="cv-title">Graphic Designer, Creative Design &amp; Print
              <div className="cv-duration">November '14 - March '16</div>
              <div className="cv-description">In this truly client-centric role, I demonstrated excellent client relations with a range of customers directly from inception to completion on a variety of products. I liaised with numerous suppliers and managed concurrent projects to strict deadlines whilst maintaining the highest quality.</div>
            </li>
          </ul>
        </div>
        <div className="cv-header">
          Tools &amp; Tech
        </div>
        <div className="cv-tools-title">
            Design
        </div>
        <div className="cv-body">
          Work extensively across the Adobe CC product range on a daily basis. Illustrator is my goto for anything vector based; such as svg icons, also for any illustration work I do. Photoshop for anything pixel based. InDesign I use alot at work creating print collateral and digital assets. After Effects is something I use on occasions for motion graphics and looking to incorporate it more in future projects with the viability and industries interest in animation.<br></br><br></br>My goto for prototyping / wireframing is Figma, I have experimented with alternatives but found this to tick the most boxes. The ability to share my designs and recieve instant feedback along with it being accessible across mac and windows has really streamlined my design process.  
        </div>
        <div className="cv-tools-title">
            Development
        </div>
        <div className="cv-body">
          Strong understanding of the fundamentals in HTML, CSS &amp; JavaScript. Specifically for creating layouts utilizing CSS Grid and flexbox. Recently for React projects I have started to use CSS-in-JS with Styled Components.<br></br><br></br>
          Frameworks I reach for are ReactJS, NodeJS and ExpressJS in a MERN stack and smaller projects with GatsbyJS as part of the JAM stack with queried markdown generated from GraphQL. I organise my projects with git and have experience of jQuery and Wordpress theming and page builders.
        </div>
        <div className="cv-header">
          Education
        </div>
        <div className="cv-body">
        <ul>
          <li>BA (Hons) Graphic Design</li>
          <li>BTEC: National Diploma - Graphic Design</li>
          <li>A Levels in Graphic Design, Computing &amp; Law</li>
          <li>GCSES - 9 A-C's</li>
          </ul>
        </div>
      </div>
    </div>
    <button id="myBtn">
          <a href="#page-top" title="Go to top">&#8679;</a>
    </button>
    
  </Layout>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
    image1: file(relativePath: { regex: "/oc-profilepic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
