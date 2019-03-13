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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/files/oc_logo512.png',
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
