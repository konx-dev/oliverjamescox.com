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
              <li>InVision</li>
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
                  <li>Node.js</li>
                  <li>Webpack</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
            <div className="keyinfo-subheader">
              Frameworks
              <div className="keyinfo-body">
              <ul>
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
            Wordpress, jQuery &amp; Git
          </div>

        </div>
      </div>
      <div>
        <Contactform />
      </div>
  </div>
  
)

export default IndexPage
