module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Publisher`,
    description: `Gatsby starter site.`,
    author: `Scott Bolinger`,
    twitter: `scottbolinger`,
    wordPressUrl: `https://scottbolinger.com`
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
