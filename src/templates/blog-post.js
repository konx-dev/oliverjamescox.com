import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}) {
    const post = data.markdownRemark

    return (

          <div className="blog-page__container">
            <div className="blog-page__title">{post.frontmatter.title}</div>
            <div className="blog-page__description">{post.frontmatter.description}</div>
            <div className="blog-page__path">{post.frontmatter.path}</div>
            <img className="blog-page__featured-image" src={post.frontmatter.thumbnail.childImageSharp.sizes.src} alt={post.frontmatter.title}/>

            <div className="blog-page__html" dangerouslySetInnerHTML={{__html: post.html}} />
            
            <div className="blog-page__author">Posted by {post.frontmatter.author} on {post.frontmatter.date}</div>
            <hr />
            <button className="blog-page__nav-button"><Link to="/blog">&larr; Go Back</Link></button>
          </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
              path
              title
              author
              date
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
`
