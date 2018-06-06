import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <div>
    <div className="about__headline">
      Hi, I'm Oliver Cox.
    </div>
    <div className="about__body">
      Currently a Designer &amp; Front-end Developer for Raleigh Bikes based in Nottingham. I also do freelance design and development projects.
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
                <div className="CV_description">Description</div>
              </li>
              <li className="CV_title">Graphic Designer
                <div className="CV_duration">Raleigh UK, Oct '16 - Oct '17</div>
                <div className="CV_description">Description</div>
              </li>
              <li className="CV_title">Graphic Designer
                <div className="CV_duration">Creative Design &amp; Print, Nov '15 - Mar '17</div>
                <div className="CV_description">Description</div>
              </li>
            </ul>
          </div>
          <div className="CV_subheader">Education</div>
            <div className="CV_body">
              <ul>
                <li>Degree</li>
                <li>A Levels</li>
              </ul>
            </div>
          </div>
    </div>
)

export default AboutPage
