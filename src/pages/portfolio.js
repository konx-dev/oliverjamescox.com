import React from 'react'
import Link from 'gatsby-link'

import ocPlaceholder from '../images/oc-placeholder.svg'

import RaleighHistory from '../images/illustration__raleigh-history/raleigh-history__1000px_splash.jpg'
import RaleighInfographic from '../images/illustration__infographic/raleigh-infographic__splash.jpg'
import RaleighAbstrakt from '../images/design__bike-abstrakt/abstrakt-splash.jpg'
import RaleighEmails from '../images/development__html-emails/html_email-splash.jpg'

import ocIdent from '../images/oc-splash.svg'

const portfolioPage = () => (
  <div>
    <div className="portfolioPage_header">
       Design Projects
    </div>
    <div className="portfolioPage-grid">
    <Link to="/raleigh-history">
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={RaleighHistory} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          Raleigh History
          </div>
          <div className="pp_desc">
          Relaunch of the history page for the iconic british brand, Raleigh.
          </div>
          <div className="pp_tools">
          Illustration, Wordpress
          </div>
        </div>
      </div>
      </Link>
      <Link to="/raleigh-infographic">
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={RaleighInfographic} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          650b vs 700c Tyres
          </div>
          <div className="pp_desc">
          Visually engaging illustrated product comparison infographic.
          </div>
          <div className="pp_tools">
          Illustrator
          </div>
        </div>
      </div>
      </Link>
        <Link to="/design-bike-abstrakt">
        <div className="portfolioPage-item">
          <div className="portfolioPage-image">
          <img src={RaleighAbstrakt} />
          </div>
          <div className="portfolioPage-text">
            <div className="pp_header">
            Bike Design: Abstrakt
            </div>
            <div className="pp_desc">
            Created the mark, decals &amp; colourways for a newly launched youth bike.
            </div>
            <div className="pp_tools">
            Tools used here
            </div>
          </div>
        </div>
        </Link>
    </div>
    <div className="portfolioPage_header">
       Development Projects
    </div>
    <div className="portfolioPage-grid">
      <Link to="/dev-html-emails">
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={RaleighEmails} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          Email Marketing 
          </div>
          <div className="pp_desc">
          Creation of HTML Templates for consumer &amp; business channels.
          </div>
          <div className="pp_tools">
          HTML, CSS, Adobe CC, Hubspot
          </div>
        </div>
      </div>
      </Link>
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={ocIdent} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          www.oliverjamescox.com
          </div>
          <div className="pp_desc">
          Relaunched my personal site with Gatsby.JS, hosted with Netlify.
          </div>
          <div className="pp_tools">
          HTML, CSS, React, GraphQL
          </div>
        </div>
      </div>
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={ocPlaceholder} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          www.ryanandchristie.co.uk
          </div>
          <div className="pp_desc">
          Created a clients wedding site, built with Gatsby.JS. Hosted with Netlify.
          </div>
          <div className="pp_tools">
          HTML, CSS, React
          </div>
        </div>
      </div>
    </div>
    <div className="portfolioPage_header">
       Self-intiated Projects
    </div>
    <div className="portfolioPage-grid">
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={ocPlaceholder} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          Project Title
          </div>
          <div className="pp_desc">
          Description of project here
          </div>
          <div className="pp_tools">
          Tools used
          </div>
        </div>
      </div>
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={ocPlaceholder} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          Project Title
          </div>
          <div className="pp_desc">
          Description of project here
          </div>
          <div className="pp_tools">
          Tools used
          </div>
        </div>
      </div>
      <div className="portfolioPage-item">
        <div className="portfolioPage-image">
        <img src={ocPlaceholder} />
        </div>
        <div className="portfolioPage-text">
          <div className="pp_header">
          Project Title
          </div>
          <div className="pp_desc">
          Description of project here
          </div>
          <div className="pp_tools">
          Tools used
          </div>
        </div>
      </div>
      <div className="portfolioPage-item">
        <div className="portfolioPage-text">
          <div className="pp_header">
          Project Title
          </div>
          <div className="pp_desc">
          Description of project here
          </div>
          <div className="pp_tools">
          Tools used
          </div>
        </div>
      </div>
      <div className="portfolioPage-item">
        <div className="portfolioPage-text">
          <div className="pp_header">
          Project Title
          </div>
          <div className="pp_desc">
          Description of project here
          </div>
          <div className="pp_tools">
          Tools used
          </div>
        </div>
      </div>
      <div className="portfolioPage-item">
        <div className="portfolioPage-text">
          <div className="pp_header">
          Project Title
          </div>
          <div className="pp_desc">
          Description of project here
          </div>
          <div className="pp_tools">
          Tools used
          </div>
        </div>
      </div>
    </div>
      
  </div>
)

export default portfolioPage
