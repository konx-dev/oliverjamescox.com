import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <div className="blog--post-container">
            <div className="blog--post-heroblock">
              <Img className="blog--post-hero" fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
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
        thumbnail {
          childImageSharp {
            fluid(quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
