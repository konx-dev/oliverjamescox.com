import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div className="blog__container">
    <h1 className="blog__header">Latest Posts</h1>
      <div className="blog">
        {data.allMarkdownRemark.edges.map(post => (
          <div className="blog-container" key={ post.node.id }>
            <div className="blog-card">
                <div className="blog-img-container">
                  <Link to={post.node.frontmatter.path}><img className="blog-img" src={post.node.frontmatter.thumbnail.childImageSharp.sizes.src} /></Link>
                </div>
                <div className="blog-info">
                    <div className="blog-info-title">
                      {post.node.frontmatter.title}
                    </div>
                    <div className="blog-info-description">
                      {post.node.frontmatter.description}
                    </div>
                    <div className="blog-info-cta">
                      <Link to={post.node.frontmatter.path}>Read More</Link>
                    </div>
                    <div className="blog-info-post">
                        Posted by <strong>{ post.node.frontmatter.author }</strong> on {post.node.frontmatter.date}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
)

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark(limit: 10, filter: {
    														frontmatter: {published: {eq: true}  
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
          description
          thumbnail {
            childImageSharp {
              sizes {
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
