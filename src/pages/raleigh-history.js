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
       Raleigh History
    </div>
    <div className="workPage-tech">
        Illustrator, Wordpress
    </div>
    <div className="workPage-description">
        Illustrated a series of iconic Raleigh bikes; including the original Chopper and the bmx ridden to victory at the 1985 BMX World Championships. The illustrations were used for the relaunch of the Raleigh History page on the consumer site.
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
    <div className="workPage-description">
        A similar project I worked on was a illustrated product infographic found here: <Link to="/raleigh-infographic">Raleigh Guide: 650b Wheels vs 700c</Link>.
    </div>
    <div className="workPage__bottom-nav">
        <div className="workPage__nav-button workPage__nav-button_1"><Link to="/">&larr; Home</Link></div>
        <div className="workPage__nav-button workPage__nav-button_2"><Link to="/work">Work &rarr;</Link></div>
    </div>
</div>
)

export default RaleighHistory
