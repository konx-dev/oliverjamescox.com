import React from 'react'
import Link from 'gatsby-link'

import myCV from '../files/OliverCox_CV_Jun18.pdf'
import myPortfolio from '../files/OliverCox_portfolio_Jun18.pdf'

const AboutPage = () => (
  <div>
    <div className="about__headline">
      Hi, I'm Oliver Cox.
    </div>
    <div className="about__body">
        Currently a Designer / Developer for Raleigh Bikes based in Nottingham. I specialize in traditional print and digital design, alongside front end development. I also do freelance design and development projects. I have a keen interest in Photography, VR tech and always looking for sources of inspiration from subjects I enjoy to continue learning.
    </div>
    <div className="CV_container">
      <div className="CV_header">CURRICULUM VITAE</div>
        <div className="CV_subheader">Qualifications</div>
          <div className="CV_body">
            <ul>
              <li>Received a Bachelors degree in Graphic Design at Nottingham Trent University.</li>
              <li>Excellent organisation, self-motivation and problem-solving skills.</li>
              <li>Creative, strong communication skills and consistently meets deadlines.</li>
              <li>Passionate about web development and new technologies.</li>
            </ul>
          </div>
        <div className="CV_subheader">Experience</div>
          <div className="CV_exp">
            <ul>
              <li className="CV_title">Designer &amp; Front-end Developer
                <div className="CV_duration">Raleigh UK, Oct '17 - Present</div>
                <div className="CV_description">I create, maintain and develop all of the production code for the outbound emails. Making sure the code is tested and with sufficient fall backs. The emails have a 250% increase year on year for engagement. I work on projects across all social channels as the sole creative resource on the team. That includes content such as digital artwork, illustrations, wire-framing and Wordpress pages.</div>
              </li>
              <li className="CV_title">Graphic Designer
                <div className="CV_duration">Raleigh UK, Oct '16 - Oct '17</div>
                <div className="CV_description">Major projects included collaborating on the Raleigh 2017 Catalogue, featuring over 10,000 products. The design and artworking of accessory packaging ranges and the styling of a range of bikes. The continuous distribution of our product range through printed and digital collateral.</div>
              </li>
              <li className="CV_title">Graphic Designer
                <div className="CV_duration">Creative Design &amp; Print, Nov '14 - Mar '16</div>
                <div className="CV_description">I worked with clients often from the inception to completion giving me a great insight into the client relations aspect of agency work and a full understanding of the design process at all stages. I became confident dealing directly with clients and liaising with external suppliers. As a digital printers with on our competitive quick turnaround time required me to be efficient and organised with many projects running at one time.</div>
              </li>
            </ul>
          </div>
          <div className="CV_subheader">Education</div>
            <div className="CV_body">
              <ul>
                <li>BA (Hons) Graphic Design</li>
                <li>BTEC: National Diploma - Graphic Design</li>
                <li>A Levels in Graphic Design, Computing &amp; Law</li>
                <li>GCSES - 9 A-C's</li>
              </ul>
            </div>
            <div className="CV_downloads">
              Downloads
              <div className="CV_btns">
                <a href={myCV} download="OliverCox_CV_Jun18">Curriculum Vitae</a>
                <a href={myPortfolio} download="OliverCox_portfolio_Jun18">Portfolio Samples</a>
              </div>
              <span>Last Updated: June 2018</span>
            </div>
          </div>
    </div>
)

export default AboutPage
