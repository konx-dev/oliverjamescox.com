import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

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
            <Img  fluid={data.bannerImage.childImageSharp.fluid}
                  style={{
                    position: "relative",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "30vh"
                  }} 
            />
          </div>
        </div>
        <div className="blog--container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="blog--card"  key={node.id}>
              <div className="blog--card-sec1">
                <div className="blog--image">
                <Link to={node.frontmatter.path}><Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} alt={node.frontmatter.title}/></Link>
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
          thumbnail {
            childImageSharp {
              fluid(quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        fields {
          slug
      }
    }
  }
}
  bannerImage: file(relativePath: { regex: "/4k-wallpaper-blog.jpg/" }) {
    childImageSharp {
      fluid (quality: 85) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`