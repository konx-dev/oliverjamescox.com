import React from 'react'

import cloudinary from 'cloudinary-core'

// A card component with the links that go outside of the site

class PortfolioCardExt extends React.Component {

    constructor(props) {
        super()
        this.state = {
            title: props.title,
            tech: props.tech,
            descript1: props.descript1,
            descript2: props.descript2,
            link: props.link,
            image: props.image,
            alt: props.alt
        }
    }

    componentDidMount() {
        var cl = cloudinary.Cloudinary.new({cloud_name: "olivercoxdesign"}); 
        cl.responsive();
    }


    render() {
        return(
            <div className="blog--card">
              <div className="blog--card-sec1">
                <div className="blog--image">
                    <a href={this.state.link} target="_blank" rel="noopener noreferrer">    
                        <img 
                        data-src={this.state.image} 
                        className="cld-responsive"
                        alt={this.state.alt}
                        />
                    </a>
                </div>
              </div>
                <div className="blog--card-sec2">
                    <h2 className="blog--card-topic">
                        {this.state.tech}
                    </h2>
                    <h2 className="blog--card-title">
                        {this.state.title}
                    </h2>
                    <p className="blog--card-desc">
                        {this.state.descript1}<br /><br />
                        {this.state.descript2}
                    </p>
                </div>
                <div className="blog--card-sec3">
                    <p className="blog--card-cta">
                        <a href={this.state.link} target="_blank" rel="noopener noreferrer">Read &rarr;</a>
                    </p>
                </div>
            </div>
        )
    }

}

export default PortfolioCardExt