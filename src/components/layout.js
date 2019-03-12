import React from 'react'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import '../layouts/index.css'


export default ({ children }) => (
         <>
          <Helmet 
            titleTemplate={`Oliver Cox - Designer | Nottingham`} 
            defaultTitle={`Oliver Cox - Designer | Nottingham`} 
            meta={[
              { name: 'description', content: 'Designer based in Nottingham Oliver Cox' },
              { name: 'keywords', content: 'webdev, design, gatsbyjs, reactjs, frontend, graphql, portfolio'}
            ]}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: './files/oc_logo.svg' }
            ]}
          >
            <html lang="en" />
          
          </Helmet>
          
          <Header />
          
          {children}

          <Footer />
         </>
   )
