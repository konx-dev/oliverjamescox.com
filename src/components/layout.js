import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../layouts/index.css'

export default ({ children }) => (
     <StaticQuery
       query={graphql`
         query LayoutQuery {
           site {
             siteMetadata {
               title
             }
           }
         }
       `}
       render={data => (
         <>
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
          <Header />
          {children}
          <Footer />
         </>
       )}
     />
   )
