module.exports = {
  siteMetadata: {
    title: `Cognitive Achievement`,
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
        token: process.env.SANITY_TOKEN,
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
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
  ],
};
