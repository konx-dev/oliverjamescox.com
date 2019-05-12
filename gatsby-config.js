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
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-140024933-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'oliverjamescox.com - personal portfolio',
        short_name: 'oliverjamescox.com',
        start_url: '/',
        background_color: '#cbcdce',
        theme_color: '#24b5ba',
        display: 'standalone',
        icon: 'oc_logo512.png',
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
