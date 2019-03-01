import React from 'react'

import { Link } from 'gatsby'
import '../01-Project-Card/project-card.css'

import cloudinary from 'cloudinary-core'

class ProjectCard extends React.Component {

    constructor(props) {
        super()
        this.state = {
            title: props.title,
            tech: props.tech,
            description: props.description,
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

        return (
                <div className="project-container">
                    <div className="project-container-sec1">
                        <div className="project-title">
                            {this.state.title}
                        </div>
                        <div className="project-tech">
                            {this.state.tech}
                        </div>
                        <div className="project-desc">
                            {this.state.description}
                        </div>
                        <Link to={this.state.link}><button className="cta-btn">Find out more</button></Link>
                    </div>
                    <div className="project-container-sec2">
                        {/* <img
                            sizes="(max-width: 2800px) 100vw, 2800px"
                            srcSet="
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_200/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 200w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_644/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 644w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_935/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 935w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_1266/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 1266w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_1557/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 1557w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_1844/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 1844w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2105/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2105w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2365/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2365w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2628/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2628w,
                                https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/c_scale,w_2800/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt 2800w"
                            src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt"
                            alt={this.state.alt} */}

                        <img 
                            data-src={this.state.image} 
                            className="cld-responsive"
                            alt={this.state.alt}
                        />

                        
                    </div>
                </div>
        )

    }

}

export default ProjectCard