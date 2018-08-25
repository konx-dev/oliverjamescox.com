import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import Header from './header'
import Footer from './footer'
import Favicon from '../images/oc-favicon.png'
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
          <Helmet 
            titleTemplate={`%s | ${data.site.siteMetadata.title}`} 
            defaultTitle={data.site.siteMetadata.title} 
            meta={[
              { name: 'description', content: 'Designer based in Nottingham Oliver Cox' },
              { name: 'keywords', content: 'webdev, design, gatsbyjs, reactjs, frontend, graphql, portfolio'}
            ]}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` }
            ]}


            
          />
          
          <Header />
          
          {children}
          
          <Footer />
         </>
       )}
     />
   )
