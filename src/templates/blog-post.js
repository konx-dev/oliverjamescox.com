import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import cloudinary from 'cloudinary-core'

export default ({ data }) => {
  const post = data.markdownRemark

  var cl = cloudinary.Cloudinary.new({cloud_name: "olivercoxdesign"}); 
  cl.responsive();

  return (
    <Layout>
        <div className="body--background">
            <div className="blog--post-heroblock">
              <img className="blog--post-hero" src={post.frontmatter.thumbnail} />
            </div>
            <div className="blog--post-copyblock">
              <div className="blog--post-date">{post.frontmatter.date}</div>
              <div className="blog--post-topic">{post.frontmatter.topic}</div>  
              <h1 className="blog--post-title">{post.frontmatter.title}</h1>
              <div className="blog--post-desc">{post.frontmatter.description}</div>
              <div className="blog--post-innerHTML" dangerouslySetInnerHTML={{ __html: post.html }} />
              <div className="blog--card-cta"><Link to="/blog">&larr; back</Link></div>
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        topic
        author
        description
        date(formatString: "MMMM Do, YYYY")
        thumbnail
      } 
    }
  }
`
