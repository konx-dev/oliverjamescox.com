import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="body--background">
        <div className="hero--container">
          <div className="hero--title">
            Latest Posts
          </div>
          <div className="hero--image">
            <img className="banner-container" src="https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300828/oliverjamescox.com/project%20media/4k-wallpaper-blog.jpg" />
          </div>
        </div>
        <div className="blog--container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="blog--card"  key={node.id}>
              <div className="blog--card-sec1">
                <div className="blog--image">
                <Link to={node.frontmatter.path}><img src={node.frontmatter.thumbnail} alt={node.frontmatter.title}/></Link>
                </div>
              </div>
              <div className="blog--card-sec2">
                <h2 className="blog--card-topic">
                  {node.frontmatter.topic}
                </h2>
                <h2 className="blog--card-title">
                  {node.frontmatter.title}
                </h2>
                <p className="blog--card-desc">
                  {node.frontmatter.description}
                </p>
                <p className="blog--card-cta">
                  <Link to={node.fields.slug}>Read More &rarr;</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(
    limit: 100
    filter: { frontmatter: { published: { eq: true } } }
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