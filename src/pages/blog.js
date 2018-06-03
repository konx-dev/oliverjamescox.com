import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div className="blog__container">
    <h1 className="blog__header">Latest Posts</h1>
      <div className="blog">
        {data.allMarkdownRemark.edges.map(post => (
            <div className="blog__post"  key={ post.node.id }>
                  <img className="blog__image" src={post.node.frontmatter.thumbnail.childImageSharp.responsiveSizes.src} />
                    <div className="blog__details">
                        <div className="blog__title">{post.node.frontmatter.title}</div>
                        <div className="blog__description">{post.node.frontmatter.description}</div>
                        <Link to={post.node.frontmatter.path}><button className="blog__cta">Read More</button></Link>
                        <div className="blog__date">Posted by <strong>{ post.node.frontmatter.author }</strong> on <em>{post.node.frontmatter.date}</em></div>
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
          description
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
