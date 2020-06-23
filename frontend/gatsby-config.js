/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Mediesuset",
    description: "Mediesuset 4-5-6-7.JULI 2020",
    author: "@kriztiank",
    siteUrl: "https://mediesuset-online.netlify.app/",
    // siteUrl: "https://yoursite.netlify.app",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-source-create-artist-page`,
    `gatsby-source-create-camp-page`,
    {
      resolve: `gatsby-source-fetch`,
      options: {
        apiKey: "API_KEY_HERE",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`news`, `stages`, `artists`, `events`, `camps`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
  ],
}
