module.exports = {
  siteMetadata: {
    title: `Cognitive`,
    description: `Description Cognitive`,
    author: `Cognitive`,
    siteUrl: "https://www.yourdomain.tld",
    social: {
      twitter: `Cognitive`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "4kw3lxki",
        dataset: "production",
        token: process.env.SANITY_GATSBY,
        watchMode: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/assets/images/icon.svg',
        appName: 'Cognitive Acchievement',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    },
  ],
};
