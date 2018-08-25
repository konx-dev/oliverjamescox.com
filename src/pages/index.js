import React from 'react'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
      <div className="index__wrapper">
        <div className="index__container">
          <div className="index__headline">
            Hello, I'm Oliver.
          </div>
          <div className="index__headline--sub">
            I design and code with modern <br></br>tooling, and love what I do.
          </div>
          <div className="index__headline--job">
            Designer at <a href="https://www.raleigh.co.uk/" target="_blank" rel="noopener noreferrer">@Raleigh</a>
          </div>
        </div>
      </div>
      <div className="index__body">
          
      </div>
  </Layout>
  
)

export default IndexPage
