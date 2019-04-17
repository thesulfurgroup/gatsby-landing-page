module.exports = {
  siteMetadata: {
    title: `The Sulfur Group - Static Generated Site`,
    description: `We are Social Media Nerds focused on expanding brand reach by skillfully integrating brand strategy into relevant digital & social landscapes. We craft meaningful connections between brands and audiences through curated, high engagement, organic influencer marketing. And we code and design for fun.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `500`, `700`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
  ],
}
