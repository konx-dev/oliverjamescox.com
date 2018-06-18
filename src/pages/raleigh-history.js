import React from 'react'
import Link from 'gatsby-link'

import HistoryImage_1 from '../images/illustration__raleigh-history/raleigh-history__1000px_burner2.jpg'
import HistoryImage_2 from '../images/illustration__raleigh-history/raleigh-history__1000px_chopper1.jpg'
import HistoryImage_3 from '../images/illustration__raleigh-history/raleigh-history__1000px_bike.jpg'
import HistoryImage_4 from '../images/illustration__raleigh-history/raleigh-history__1000px_burner.jpg'
import HistoryImage_5 from '../images/illustration__raleigh-history/raleigh-history__1000px_chopper2.jpg'
import HistoryImage_6 from '../images/illustration__raleigh-history/raleigh-history__fullpage.jpg'


const RaleighHistory = () => (
    <div>
    <div className="workPage-title blog-page__title">
       Raleigh History Page
    </div>
    <div className="workPage-description">
        Illustrated and created the wordpress page for the relaunch of the Raleigh History / About Us section of the consumer website.
    </div>
    <div className="workPage-img-container-grid">
       <img className="workPage-grid-img grid-img_1" src={HistoryImage_1} alt="oc logo" />
       <img className="workPage-grid-img grid-img_2" src={HistoryImage_2} alt="oc logo" />
       <img className="workPage-grid-img grid-img_3" src={HistoryImage_3} alt="oc logo" />
       <img className="workPage-grid-img grid-img_4" src={HistoryImage_4} alt="oc logo" />
       <img className="workPage-grid-img grid-img_5" src={HistoryImage_5} alt="oc logo" />
    </div>
    <div className="workPage-img-container">
        <img className="workPage-img workPage-grid-img_1" src={HistoryImage_6} alt="oc logo" />
    </div>
    <button className="blog-page__nav-button"><Link to="/work">&larr; Work</Link></button>
</div>
)

export default RaleighHistory
