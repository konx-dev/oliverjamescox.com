import React from 'react'
import Link from 'gatsby-link'
import FeaturedImage from '../images/illustration__infographic/650B_infog_900px_fullpage.jpg'

const RaleighInfographic = () => (
 <div>
     <div className="workPage-title blog-page__title">
        Raleigh Infographic
     </div>
     <div className="workPage-description">
        The purpose was to create a more rewarding learning experience for the user in the form of a illustrated infographic. Additionally the page was optimized for search engines and currently sits on page 1 for relevant search terms. Now the most visited resource on the Raleigh blog and a direct reason for the relaunch of the <Link to="/raleigh-history">Raleigh History Page</Link>.
     </div>
     <div className="workPage-img-container">
        <img className="workPage-img" src={FeaturedImage} alt="oc logo" />
     </div>
     <button className="blog-page__nav-button"><Link to="/work">&larr; Work</Link></button>
     
</div>
)

export default RaleighInfographic
