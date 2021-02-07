module.exports = {
  siteMetadata: {
    title: "luke-codewalker.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
