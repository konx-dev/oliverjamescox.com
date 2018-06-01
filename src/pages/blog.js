import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
            <img src={post.node.frontmatter.thumbnail.childImageSharp.responsiveSizes.src} />
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by { post.node.frontmatter.author } on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
        </div>
    ))}
  </div>
)

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark(limit: 10, filter: {
    														frontmatter: {published: {eq: true} 
                                blogpost: {eq: true} 
                                featured: {eq: true}
  }})
  {
    edges {
      node {
        id
        frontmatter {
          title
          path
          date
          author
          published
          featured
          blogpost
          thumbnail {
            childImageSharp {
              responsiveSizes(maxWidth: 200) {
                src
              }
            }
          }
        }
      }
    }
  }
}
`


export default BlogPage
