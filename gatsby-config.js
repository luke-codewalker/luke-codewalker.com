require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "luke-codewalker.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CF_ACCESS_TOKEN,
        spaceId: process.env.CF_SPACE_ID,
      },
    },
    `gatsby-plugin-sass`
  ],
};
