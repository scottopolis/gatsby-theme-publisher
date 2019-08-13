module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Publisher`,
    description: `Gatsby starter site.`,
    author: `Scott Bolinger`,
    twitter: `scottbolinger`,
    wordPressUrl: `https://designbyscott.wpengine.com`
  },
  plugins: [
    {
      resolve: `gatsby-theme-publisher`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
  ],
}
