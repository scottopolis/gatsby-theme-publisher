# gatsby-theme-publisher

This is a theme for a headless WordPress site using Gatsby as a static front end.

Demo: [scottbolinger.com](https://scottbolinger.com)

Note: This is still very experimental, don't use on a production site unless you're willing to deal with some bugs!

### Features:

- Fetch WordPress content via GraphQL
- Comments
- MailChimp Opt-in form
- Design with Tailwind CSS
- SEO tags
- Sitemap
- Google analytics
- Images via Gatsby Image

You can use my WP Netlify Deploy plugin to automatically rebuild on Netlify when you create or update a post.

## Requirements

- A WordPress site with the WPGraphQL plugin installed and active
- A free Netlify account to host your Gatsby site
- A github repository for the Gatsby files

## How to use this theme

1.  Clone the repo
2.  Install dependencies


    ```sh
    yarn
    ```

    or

    ```sh
    npm install
    ```

3. Edit the config.js file with your site information

4. Run the development server

   ```sh
   gatsby develop
   ```

5. Push to your own git repository, and publish on Netlify
