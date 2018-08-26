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
          Currently a Designer for Raleigh, based in Nottingham. I specialize in traditional print and digital design, alongside freelancing development projects. With a interest in usability and experience design, I'm always looking for sources of inspiration to continue learning.
        </div>
        <div className="cv-header">
          Qualifications
        </div>
        <div className="cv-body">
          <ul>
            <li>Received a Bachelors degree in Graphic Design at Nottingham Trent University.</li>
            <li>Excellent organisation, self-motivation and problem-solving skills.</li>
            <li>Creative, strong communication skills and working consistently within established timelines</li>
            <li>Passionate about design, web development and bleeding edge tech.</li>
          </ul>
        </div>
        <div className="cv-header">
          Experience
        </div>
        <div className="cv-body">
          <ul>
            <li className="cv-title">Digital Designer, Raleigh UK
              <div className="cv-duration">October '17 - Present</div>
              <div className="cv-description">In the last year, I have taken on new responsibility and I now create, maintain and develop all of the production code for the outbound emails. Making sure the code is tested and with sufficient fall backs. The emails have a 250% increase year on year for engagement. I work on projects across all social channels as the sole creative resource on the team. That includes content such as digital artwork, illustrations, wire-framing and Wordpress pages.</div>
            </li>
            <li className="cv-title">Graphic Designer, Raleigh UK
              <div className="cv-duration">October '16 - October '17</div>
              <div className="cv-description">Major projects included collaborating on the Raleigh 2017 Catalogue, featuring over 10,000 products. The design and artworking of accessory packaging ranges and the styling of a range of bikes. The continuous distribution of our product range through printed and digital collateral.</div>
            </li>
            <li className="cv-title">Graphic Designer, Creative Design &amp; Print
              <div className="cv-duration">November '14 - March '16</div>
              <div className="cv-description">I worked with clients often from the inception to completion giving me a great insight into the client relations aspect of agency work and a full understanding of the design process at all stages. I became confident dealing directly with clients and liaising with external suppliers. As a digital printers with on our competitive quick turnaround time required me to be efficient and organised with many projects running at one time.</div>
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
          Work extensively across the Adobe CC product range on a daily basis. <strong>Illustrator</strong> is my goto for anything vector based; such as svg icons, also for any illustration work I do. <strong>Photoshop</strong> for anything pixel based. <strong>InDesign</strong> I use alot at work creating print collateral and digital assets. <strong>After Effects</strong> is something I use on occasions for motion graphics and looking to incorporate it more in future projects with the viability and industries interest in animation.<br></br><br></br>My goto for prototyping / wireframing is <strong>Figma</strong>, I have experimented with alternatives but found this to tick the most boxes. The ability to share my designs and recieve instant feedback along with it being accessible across mac and windows has really streamlined my design process.  
        </div>
        <div className="cv-tools-title">
            Development
        </div>
        <div className="cv-body">
          Strong understanding of the fundamentals in <strong>HTML</strong>, <strong>CSS</strong> &amp; <strong>JavaScript</strong>. Specifically for creating layouts utilizing CSS Grid and flexbox. Recently for React projects I have started to use CSS-in-JS with <strong>Styled Components</strong>.<br></br><br></br>
          Frameworks I reach for are <strong>ReactJS</strong>, <strong>NodeJS</strong> and <strong>ExpressJS</strong> in a MERN stack and smaller projects with <strong>GatsbyJS</strong> as part of the JAM stack with queried markdown generated from <strong>GraphQL</strong>. I organise my projects with git and have experience of <strong>jQuery</strong> and <strong>Wordpress</strong> theming and page builders.
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
