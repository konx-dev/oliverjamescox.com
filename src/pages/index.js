import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"

import ProjectCard from '../feature/01-Project-Card/project-card'
import BlogCard from '../feature/03-Blog-Card/blogCard'

export default ({ data }) => {
  return (
    <Layout>
      <div className="index__wrapper">
      
        <div className="index__container">
          <div className="index__headline">
            Hello, I'm Oliver.
          </div>
          {/* <div className="index__headline--sub"> 
          Building delightful user experiences with CraftCMS. 
          </div> */}
          <div className="index__headline--job">
            Junior Developer at <a href="https://www.nzime.com/" target="_blank" rel="noopener noreferrer">Nzime</a>
          </div>
        </div>
      </div>
      <div className="index__body">
        <ProjectCard 
                  title="Lapierre Edge site"
                  tech="WordPress"
                  descript1="Consumer facing web site created to coincide with the product launch of a range of Lapierre mountain bikes."
                  descript2="Raising awareness of the brand, assisting consumers in discovering the range and driving them through to the store locator to find nearest stockists."
                  link="/p-dev-lapierre-edge"
                  image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/le-portfolio-cover"
                  alt="White Lapierre bicycles logo on a black background"
          />
          <ProjectCard 
                  title="Bespoke Wedding site"
                  tech="GatsbyJS, UI/UX Design"
                  descript1="A project to create wedding website. I helped address the clients pain points and created a statically generated site as an alternative to the subscription model prevalant in WYSIWYG builders."
                  descript2="Key requirements were zero overheads and a RSVP form and after the event a photo gallery and guest book."
                  link="/p-dev-ryanandchristie"
                  image="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto,f_auto/w_auto,c_scale/dpr_auto/v1545300830/oliverjamescox.com/project%20media/rc-portfolio-cover-alt"
                  alt="The words Ryan &amp; Christie surrounded by hearts and flowers and a bauble with the date 23rd december 2018, the date of their wedding"
          />
      </div>
      <div className="subheader-container">
        <div className="subheader-text">
          Featured Blogs
        </div>
      </div>
      <div className="blog--container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogCard
                key={node.id} 
                title={node.frontmatter.title}
                tech={node.frontmatter.topic}
                descript1={node.frontmatter.description}
                descript2=""
                link={node.fields.slug}
                image={node.frontmatter.thumbnail}
                alt=""
              />
          ))}
        </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(
    limit: 3
    filter: { frontmatter: { featured: { eq: true } } }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          description
          topic
          path
          thumbnail
        }
        fields {
          slug
      }
    }
  }
}
}
`

