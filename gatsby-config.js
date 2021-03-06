require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `Jess Bright`,
    siteUrl: `https://jessbrightdesign.com/`,
    description: `Jess Bright Portfolio.`,
    author: `@samuelgoddard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-JJZNPMX4BX`,
        head: false,
        anonymize: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "G-JJZNPMX4BX",
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "G-JJZNPMX4BX",
    //     anonymize: true,
    //   },
    // },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `${process.env.DATOCMS_KEY}`,
      },
    },
  ],
}
