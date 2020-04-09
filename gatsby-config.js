module.exports = {
  siteMetadata: {
    title: `iGEM BITS Goa 2020`,
    description: `Wiki for the iGEM 2020 team of BITS Goa`,
    author: `@ballaneypranav`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `igembitsgoa`,
        short_name: `igem`,
        start_url: `/`, 
        background_color: `#31bf55`,
        theme_color: `#31bf55`,
        display: `minimal-ui`,
        // icon: ``, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`500`, `700`, `900`]
          },
          {
            family: `Raleway`,
            variants: [`500`]
          }
        ],
      },
    }
  ],
}
