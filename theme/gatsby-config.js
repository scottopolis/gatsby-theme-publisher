module.exports = options => {
  const pCssPlugins =
    options && options.postCssPlugins && Array.isArray(options.postCssPlugins)
      ? options.postCssPlugins
      : []
  const cLoaderOptions =
    options && options.cssLoaderOptions ? options.cssLoaderOptions : {}
  const emotionOptions =
    options && options.emotionOptions ? options.emotionOptions : {}
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [require("tailwindcss"), ...pCssPlugins],
          cssLoaderOptions: cLoaderOptions,
        },
      },
      {
        resolve: `gatsby-plugin-emotion`,
        options: emotionOptions,
      },
      {
        resolve: `gatsby-source-graphql`,
        options: {
          // This type will contain remote schema Query type
          typeName: `WPGraphQL`,
          // This is field under which it's accessible
          fieldName: `wpgraphql`,
          // Url to query from
          url: `https://scottbolinger.com/graphql`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Merriweather', 'Lato']
          }
        }
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: '', // add your MC list endpoint here; see instructions below
        }
      }
    ],
  }
}
