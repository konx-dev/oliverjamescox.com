import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ScrollToTop from '../components/scrollToTop'

export default ({ data }) => {
  const post = data.markdownRemark

  return (


    <Layout>
        <ScrollToTop />
        <div className="body--background">
        <div className="blog--post-heroblock">
          <img className="blog--post-hero" src={post.frontmatter.thumbnail} alt={post.frontmatter.alt}/>
        </div>
            <div className="blog--post-copyblock">
              <div className="blog--post-date">{post.frontmatter.date}</div>
              <div className="blog--post-topic">{post.frontmatter.topic}</div>  
              <h1 className="blog--post-title">{post.frontmatter.title}</h1>
              <div className="blog--post-desc">{post.frontmatter.description}</div>
              <div className="blog--post-innerHTML" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
        {/* <BlogPost 
                title={post.frontmatter.title}
                tech={post.frontmatter.topic}
                date={post.frontmatter.date}
                descript1={post.frontmatter.description}
                descript2=""
                link=""
                text={post.html}
                image={post.frontmatter.thumbnail}
                alt={post.frontmatter.alt}
              /> */}
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
