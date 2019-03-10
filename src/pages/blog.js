import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import BlogCard from '../feature/03-Blog-Card/blogCard'

export default ({ data }) => {
  return (
    <Layout>
      <div className="body--background">
        <div className="hero--container">
          <div className="hero--title">
            Blog
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
                alt={node.frontmatter.alt}
              />
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