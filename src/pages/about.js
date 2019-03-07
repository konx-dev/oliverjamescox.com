import React from 'react'
import Layout from '../components/layout'
import cloudinary from 'cloudinary-core'
import ScrollToTop from '../components/scrollToTop'


class aboutPage extends React.Component {

  



  componentDidMount() {
    var cl = cloudinary.Cloudinary.new({cloud_name: "olivercoxdesign"}); 
    cl.responsive();
  }

  render() {


    return(

  <Layout>
    <ScrollToTop />
    <div className="about__header">
      <div className="about__header-image">
        <img 
            data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/avatar-in-o.svg"
            className="cld-responsive"
            alt="my face, nothing too exciting to see here.."
        />
      </div>
    </div>
    <div className="about__body">
      <div className="about__body-container">
        <div className="cv-body-main">
          Work satisfaction for me is being able to provide value to a company that offers challenging experiences and allows me to continue to learn. Striving to create memorable user experiences through performant and accessible products.<br /><br />I started out studying Graphic Design, with a focus on typography and layout design. Most recently self-teaching web development, with a focus on front-end technologies and user experience. Currently utilising a mixture of old and new for Raleigh UK Ltd.
        </div>
        <div className="cv-header">
          Qualifications
        </div>
        <div className="cv-body">
          <ul>
            <li>Passionate about marrying my graphic design education with web development to create memorable user experiences.</li>
            <li>Ensure I am learning new technologies by continually self-studying and connecting with other professionals.</li>
            <li>Highly motivated and organised with experience working in fast-paced environments.</li>
            <li>Personable and professional; able to engage with and forge lasting relationships with a range of clients.</li>
          </ul>
        </div>
        <div className="cv-header">
          Experience
        </div>
        <div className="cv-body">
          <ul>
            <li className="cv-title">Digital Designer, Raleigh UK
              <div className="cv-duration">October '17 - Present</div>
              <div className="cv-description">Supporting the development of the digital marketing plan, through creative input to alleviate challenges and to deliver strategic business objectives. Some of my key responsibilities are the design and development of the business and consumer email channels. I work as part of a lean team across a portfolio of brands having to wear many hats.<br /><br />Most noteably on digital projects such as the Bike finder tool, helping consumers find the right product. This feature has resulted in an increased conversion rate across all bike ranges.<br /><br />Working closely with other departments on larger consumer-centric projects, such as creating the Lapierre Edge consumer website in line with the product launch. Establishing the build stack, hosting, then wireframing and protoyping. Before producing or sourcing the required assets and lastly developing, testing and the shipping of the finished site all to a time critical deadline.</div>
            </li>
            <li className="cv-title">Graphic Designer, Raleigh UK
              <div className="cv-duration">October '16 - October '17</div>
              <div className="cv-description">My role focussed on supporting marketing objectives for a range of brands within Raleigh UK. This included major projects, such as the Raleigh catalogue featuring over 10,000 products. Requiring collaboration with a team of designers and product managers.<br /><br />I also worked on the design and artworking of packaging ranges, bike designs and in-store point of sale. My route was chosen for the flagship e-bike design, launched in 2018.</div>
            </li>
            <li className="cv-title">Graphic Designer, Creative Design &amp; Print
              <div className="cv-duration">November '14 - March '16</div>
              <div className="cv-description">In this truly client-centric role, I demonstrated excellent client relations with a range of customers directly from inception to completion on a variety of briefs. I liaised with numerous suppliers and managed concurrent projects to strict deadlines whilst maintaining the highest quality.<br /><br />As a first job outside of education I really got thrown in at the deep end, but this has provided me with invaluable experience and confidence in visual communication.</div>
            </li>
          </ul>
        </div>
        <div className="cv-header">
          Tools &amp; Tech
        </div>
        <div className="cv-tools-title">
            Design
        </div>
        <div className="cv-tldr">
          TL;DR - Illustrator | InDesign | Photoshop | Figma
        </div>
        <div className="cv-body">
          Work extensively across the Adobe CC product range on a daily basis. Illustrator is my goto for vector-based design, also for any illustration work I do. Photoshop for anything pixel based. InDesign I use alot at work currently, creating print collateral and digital assets. After Effects is something I use on occasions for motion graphics and am looking to incorporate it more in future projects with the improving viability and digital industries interest in animation.<br /><br />For prototyping / wireframing I use either Adobe XD or Figma. With the latter I have the ability to share my designs and recieve live feedback through a web browser, along with it being accessible across mac and windows has really streamlined my design process.  
        </div>
        <div className="cv-tools-title">
            Development
        </div>
        <div className="cv-tldr">
          TL;DR - HTML | CSS / SCSS | JavaScript | React | Gatsby | jQuery | Wordpress
        </div>
        <div className="cv-body">
          Strong understanding of the fundamentals in HTML, CSS &amp; JavaScript. Working with modern practices such as CSS Grid and current ECMAScript<br /><br />
          JavaScript frameworks I use when suitable are React with Create-React-App and GatsbyJS as part of the JAM stack with queried markdown generated from GraphQL. As JavaScript can be utilised on both the front and backend I am working on side projects to have a working knowledge of the full stack.<br /><br />
          I utilise version control and manage my projects with git. Also with experience of jQuery and industry experience with Wordpress theming and page builders.
        </div>
        <div className="cv-header">
          Education
        </div>
        <div className="cv-body">
        <ul>
          <li>BA(Hons): Graphic Design, Nottingham Trent University</li>
          <li>BTEC: National Diploma - Graphic Design</li>
          <li>GCSES - 9 A-C's</li>
          </ul>
        </div>
      </div>
    </div>
    
  </Layout>
    )
  }
}

export default aboutPage