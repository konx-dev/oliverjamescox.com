import React from 'react'
import { Link } from 'gatsby'

import cloudinary from 'cloudinary-core'

class BlogPost extends React.Component {

    constructor(props) {
        super()
        this.state = {
            title: props.title,
            tech: props.tech,
            date: props.date,
            descript1: props.descript1,
            descript2: props.descript2,
            link: props.link,
            text: props.text,
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
            <div className="body--background">
                <div className="blog--post-heroblock">
                    <img className="blog--post-hero" src={this.state.image} alt={this.state.alt}/>
                </div>
                <div className="blog--post-copyblock">
                    <div className="blog--post-date">{this.state.date}</div>
                    <div className="blog--post-topic">{this.state.tech}</div>  
                    <h1 className="blog--post-title">{this.state.title}</h1>
                    <div className="blog--post-desc">{this.state.descript1}</div>
                    <div className="blog--post-innerHTML" dangerouslySetInnerHTML={{ __html: this.state.text }} />
                    <div className="blog--card-cta"><Link to="/blog">&larr; back</Link></div>
                </div>
            </div>
        )
    }
}
export default BlogPost