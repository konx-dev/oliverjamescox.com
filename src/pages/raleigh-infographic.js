import React from 'react'
import Link from 'gatsby-link'
import FeaturedImage from '../images/illustration__infographic/650B_infog_900px_fullpage.jpg'

const RaleighInfographic = () => (
 <div>
     <div className="workPage-title index__headline">
        Raleigh Infographic
     </div>
     <div className="workPage-description index__headline--sub">
        Project Overview and description goes here
     </div>
     <div className="workPage-img-container">
        <img className="workPage-img" src={FeaturedImage} alt="oc logo" />
     </div>
     <button className="blog-page__nav-button"><Link to="/work">&larr; Work</Link></button>
     
</div>
)

export default RaleighInfographic
