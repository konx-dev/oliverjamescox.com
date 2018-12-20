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
              { rel: 'shortcut icon', type: 'image/png', href: `https://res.cloudinary.com/olivercoxdesign/image/upload/v1545300207/oliverjamescox.com/logos%20%2B%20icons/oc-favicon.png` }
            ]}
          >
            <html lang="en" />
          
          </Helmet>
          
          <Header />
          
          {children}
          
          <Footer />
         </>
   )
