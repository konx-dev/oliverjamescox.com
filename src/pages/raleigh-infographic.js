import React from 'react'
import Link from 'gatsby-link'
import FeaturedImage from '../images/illustration__infographic/650B_infog_900px_fullpage.jpg'

const RaleighInfographic = () => (
 <div>
     <div className="workPage-title blog-page__title">
        Raleigh Infographic
     </div>
     <div className="workPage-tech">
          Illustrator
      </div>
     <div className="workPage-description">
        Creating an engaging visual learning experience for the user through illustrations and infographic elements. Additionally the page was optimized for search engines and currently sits on the first page for relevant search terms. At this time, the most visited resource on the Raleigh blog.
     </div>
     <div className="workPage-img-container">
        <img className="workPage-img" src={FeaturedImage} alt="oc logo" />
     </div>
     <div className="workPage-description">
        Similar project I worked on was for the illustrated relaunch of the <Link to="/raleigh-history">Raleigh History Page</Link>.
     </div>
     <div className="workPage__bottom-nav">
        <div className="workPage__nav-button workPage__nav-button_1"><Link to="/">&larr; Home</Link></div>
        <div className="workPage__nav-button workPage__nav-button_2"><Link to="/work">Work &rarr;</Link></div>
    </div>
     
</div>
)

export default RaleighInfographic
