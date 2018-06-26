import React from 'react'
import Link from 'gatsby-link'

import Contactform from '../components/contact-form'
import DeveloperIcon from '../images/developer-icon.svg'
import DesignerIcon from '../images/designer-icon.svg'
import AvatarLogo from '../images/avatar-me.svg'

const IndexPage = () => (
  <div>
      <div className="index__headline">
        Designer, Developer &amp; Virtual Reality fanatic
      </div>
      <div className="index__headline--sub">
        I design and code with modern tooling, and love what I do.
      </div>
      <div className="index__avatar">
        <img className="avatar-logo" src={AvatarLogo} alt="oc logo" />
      </div>
      <div className="index__keyinfo-container">
        <div className="keyinfo-section">
          <div className="keyinfo-icon">
            <img className="logo" src={DesignerIcon} alt="oc logo" />
          </div>
          <div className="keyinfo-header">
            Designer
          </div>
          <div className="keyinfo-subheader">
          Skills
          </div>
          <div className="keyinfo-body">
            Typography, Print Design, Branding, UI / UX Design and Illustration
          </div>
          <div className="keyinfo-subheader">
          Tools
          </div>
          <div className="keyinfo-body">
            <ul>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>Photoshop</li>
              <li>After Effects</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="keyinfo-section">
          <div className="keyinfo-icon">
            <img className="logo" src={DeveloperIcon} alt="oc logo" />
          </div>
          <div className="keyinfo-header">
            Developer
          </div>
          <div className="keyinfo-subheader">
            Industry Knowledge
          </div>
          <div className="keyinfo-body">
            Responsive Design, SEO, Email Marketing, Web Standards and Optimization best practises
          </div>
          <div className="keyinfo-subsection">
            <div className="keyinfo-subheader">
              Tools &amp; Tech
              <div className="keyinfo-body">
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Wordpress</li>
                  <li>Node.js</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
            <div className="keyinfo-subheader">
              Frameworks
              <div className="keyinfo-body">
              <ul>
                <li>Angular</li>
                <li>React</li>
                <li>Express.js</li>
                <li>Gatsby.js</li>
                <li>Apollo</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="keyinfo-subheader">
            FWIW
          </div>
          <div className="keyinfo-body">
            jQuery, SQL, Git, Gulp
          </div>

        </div>
      </div>
      <div className="index__headline headline_2">
        Recent Work
      </div>
      <div className="work-grid">
        <div className="work-item item_1">
          <Link to="/raleigh-history"><div className="work-content">
            Raleigh History Redesign
              <div className="work-category">
                Illustration
              </div>
          </div></Link>
        </div>
        <div className="work-item item_2">
          <Link to="/design-bike-abstrakt"><div className="work-content">
              Abstrakt - Kids Bike
                <div className="work-category">
                  Product Design
                </div>
            </div></Link>
        </div>
        <div className="work-item item_3">
          <Link to="/dev-html-emails"><div className="work-content">
              Email Marketing
                <div className="work-category">
                  HTML, CSS
                </div>
            </div></Link>
        </div>
        <div className="work-item item_4">
          <Link to="/raleigh-infographic"><div className="work-content">
            Infographic
              <div className="work-category">
                Illustration
              </div>
          </div></Link>
        </div>
      </div>

      <div>
        <Contactform />
      </div>
  </div>
  
)

export default IndexPage
