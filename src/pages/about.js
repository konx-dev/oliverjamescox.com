import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <div>
    <div className="about__headline">
      Hi, I'm Oliver Cox.
    </div>
    <div className="about__body">
      Currently a Designer &amp; Front-end Developer for Raleigh Bikes based in Nottingham. I also do freelance design and development projects. With a background in traditional Graphic Design, I apply those skills to my work with impactful typography, colour and layout design. I have a keen interest in Photography, VR tech and always looking to learn and further my knowledge through emerging technologies and best practices within the industry as a source of inspiration.
    </div>
    <div className="CV_container">
      <div className="CV_header">Vita</div>
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
                <div className="CV_description">I create, maintain and develop all of the production code for our outbound emails. Making sure the code is tested and with sufficient fallbacks. The emails have a 250% increase year on year for engagement. A key project I have worked on has been the Product Finder tool. Since launch it has resulted in a continued increase in daily uses and an increase of conversions with a top 10 page value across the entire ecommerce platform.</div>
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
          </div>
    </div>
)

export default AboutPage
