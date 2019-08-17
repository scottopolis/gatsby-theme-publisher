module.exports = options => {
  const pCssPlugins =
    options && options.postCssPlugins && Array.isArray(options.postCssPlugins)
      ? options.postCssPlugins
      : []
  const cLoaderOptions =
    options && options.cssLoaderOptions ? options.cssLoaderOptions : {}
  const emotionOptions =
    options && options.emotionOptions ? options.emotionOptions : {}
  const path = require(`path`)
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
        resolve: `gatsby-source-graphql`,
        options: {
          // This type will contain remote schema Query type
          typeName: `WPGraphQL`,
          // This is field under which it's accessible
          fieldName: `wpgraphql`,
          // Url to query from
          url: `https://designbyscott.wpengine.com/graphql`,
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        // options: {
          // add your GA tracking id below
        //   trackingId: `UA-12345456-2`,
        // },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `src`, `images`),
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-sitemap`,
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
