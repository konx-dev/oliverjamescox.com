import React from 'react'
import { Link } from 'gatsby'

import cloudinary from 'cloudinary-core'

class BlogCard extends React.Component {

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
                    <Link to={this.state.link}>
                        <img 
                        data-src={this.state.image} 
                        className="cld-responsive"
                        alt={this.state.alt}
                    />
                    </Link>
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
                        <Link to={this.state.link}>Read &rarr;</Link>
                    </p>
                </div>
            </div>
        )
    }
}
export default BlogCard