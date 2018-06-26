import React from 'react'
import Link from 'gatsby-link'
import EmailImage_1 from '../images/development__html-emails/email-motus__fullpage.jpg'

const devHtmlEmails = () => (
 <div>
     <div className="workPage-title blog-page__title">
        Email Marketing
     </div>
     <div className="workPage-tech">
        HTML, CSS, MJML
    </div>
     <div className="workPage-description">
        Creating Bespoke email templates for all channels. Creating a variety of table based templates that can be easily used by others with just a basic understanding of HTML. The email below has interactive elements in the form of a image slider.
     </div>
     <div className="workPage-img-container">
        <img className="workPage-img workPage-img_1" src={EmailImage_1} alt="oc logo" />
     </div>
     <div className="workPage__bottom-nav">
        <div className="workPage__nav-button workPage__nav-button_1"><Link to="/">&larr; Home</Link></div>
        <div className="workPage__nav-button workPage__nav-button_2"><Link to="/work">Work &rarr;</Link></div>
    </div>
     
</div>
)

export default devHtmlEmails
