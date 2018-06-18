import React from 'react'
import Link from 'gatsby-link'
import EmailImage_1 from '../images/development__html-emails/email-motus__fullpage.jpg'

const devHtmlEmails = () => (
 <div>
     <div className="workPage-title blog-page__title">
        Email Marketing
     </div>
     <div className="workPage-description">
        Creating Bespoke emails for the various channels I have been able to constantly evolve and test. For example the B2B channel has a high volume of users on enterprise OS's and old versions of outlook which creates the need for extensive backwards compatibility. The majority of current content is created using tables to accomodate this. Specialised emails for events and product launches, I have reached for div based layouts and tools such as MJML.
     </div>
     <div className="workPage-img-container">
        <img className="workPage-img workPage-img_1" src={EmailImage_1} alt="oc logo" />
     </div>
     
     <button className="blog-page__nav-button"><Link to="/work">&larr; Work</Link></button>
     
</div>
)

export default devHtmlEmails
