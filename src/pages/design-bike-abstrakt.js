import React from 'react'
import Link from 'gatsby-link'

import bikeMark_1 from '../images/design__bike-abstrakt/abstrakt-type.svg'
import bikeMark_2 from '../images/design__bike-abstrakt/abstrakt-pocs-01.svg'
import bikeMark_3 from '../images/design__bike-abstrakt/abstrakt-pocs-02.svg'
import bikeMark_4 from '../images/design__bike-abstrakt/abstrakt-pocs-03.svg'
import bikeMark_5 from '../images/design__bike-abstrakt/abstrakt-pocs-04.svg'
import bikeMark_6 from '../images/design__bike-abstrakt/abstrakt-pocs-05.svg'
import bikeMark_7 from '../images/design__bike-abstrakt/abstrakt-pocs-06.svg'
import bikeMark_8 from '../images/design__bike-abstrakt/abstrakt-pocs-07.svg'

import bikeImage_1 from '../images/design__bike-abstrakt/abstrakt-img-01-alt.jpg'
import bikeImage_2 from '../images/design__bike-abstrakt/abstrakt-img-05.jpg'
import bikeImage_3 from '../images/design__bike-abstrakt/abstrakt-img-07.jpg'




const BikeAbstrakt = () => (
  <div>
     <div className="bikePage-img-container">
        <img className="bikePage-img workPage-img_1" src={bikeMark_1} alt="oc logo" />
        <img className="bikePage-img workPage-img_2" src={bikeImage_1} alt="oc logo" />
        <img className="bikePage-img workPage-img_3" src={bikeMark_2} alt="oc logo" />
        <img className="bikePage-img workPage-img_4" src={bikeMark_3} alt="oc logo" />
        <img className="bikePage-img workPage-img_5" src={bikeMark_4} alt="oc logo" />
        <img className="bikePage-img workPage-img_6" src={bikeMark_5} alt="oc logo" />
        <img className="bikePage-img workPage-img_7" src={bikeMark_6} alt="oc logo" />
        <img className="bikePage-img workPage-img_8" src={bikeMark_7} alt="oc logo" />
        <img className="bikePage-img workPage-img_9" src={bikeMark_8} alt="oc logo" />
        <img className="bikePage-img workPage-img_10" src={bikeImage_2} alt="oc logo" />
        <img className="bikePage-img workPage-img_11" src={bikeImage_3} alt="oc logo" />
     </div>
     
     <button className="blog-page__nav-button"><Link to="/work">&larr; Work</Link></button>
     
</div>
)

export default BikeAbstrakt
