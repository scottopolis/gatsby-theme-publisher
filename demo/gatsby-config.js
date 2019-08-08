module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `Scott Bolinger`,
    twitter: `scottbolinger`,
    wordPressUrl: `https://scottbolinger.com`
  },
  plugins: [
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
  ],
}
