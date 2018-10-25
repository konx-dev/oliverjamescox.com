module.exports = {
  siteMetadata: {
    title: 'Oliver Cox - Designer | Nottingham',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Oliver Cox - Designer | Nottingham',
        short_name: 'Oliver Cox - Designer',
        start_url: '/',
        background_color: '#24b5ba',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/oc_logo.svg',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              quality: 80,
              withWebp: true,
            }
          }
        ]
      }
    }
  ],
}
