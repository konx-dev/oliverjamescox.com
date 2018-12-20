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
  ],
}
