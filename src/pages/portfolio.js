import React from 'react'
import Link from 'gatsby-link'

const portfolioPage = () => (
  <div>
    <div className="portfolioPage_header">
       Design Projects
    </div>
    <div className="portfolioPage-grid">
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
    <div className="portfolioPage_header">
       Development Projects
    </div>
    <div className="portfolioPage-grid">
      <div className="portfolioPage-item">
        <div className="portfolioPage-text">
          <div className="pp_header">
          www.oliverjamescox.com
          </div>
          <div className="pp_desc">
          Relaunched my personal site with Gatsby.JS, hosted with Netlify.
          </div>
          <div className="pp_tools">
          React, GraphQL
          </div>
        </div>
      </div>
      <div className="portfolioPage-item">
        <div className="portfolioPage-text">
          <div className="pp_header">
          www.ryanandchristie.co.uk
          </div>
          <div className="pp_desc">
          Created a clients wedding site, built with Gatsby.JS. Hosted with Netlify.
          </div>
          <div className="pp_tools">
          React
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
