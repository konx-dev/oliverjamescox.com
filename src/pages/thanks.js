import React from 'react'
import Layout from '../components/layout'
import cloudinary from 'cloudinary-core'
import { Link } from 'gatsby'

export default class ThanksPage extends React.Component {

  componentDidMount() {
    var cl = cloudinary.Cloudinary.new({cloud_name: "olivercoxdesign"}); 
    cl.responsive();
  }

  render() {
    return(
      <Layout>
        <div className="body--background-alt">
          <div className="form-body-container">
            <div className="form-body-sec1">
              <div class="thanks-text">
                <p>Thank you for getting in touch!</p>
                <p className="thanks-subtext">I'm thrilled to hear from you, I will reply by email as soon as possible.</p>
              </div>
            </div>
            <div className="form-body-sec2">
              <img 
                  data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto/w_auto,c_scale/dpr_auto/v1552241027/oliverjamescox.com/project%20media/contact-thanks.svg"
                  className="cld-responsive"
                  alt="simple letter illustration in the brand colours for the contact form"
              />
            </div>
            <div className="myButton">
              <Link to="/">Return to Home</Link>
            </div>
        </div>
        </div>
      </Layout>
    )
  }
}

