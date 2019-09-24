module.exports = {
  siteMetadata: {
    siteTitle: 'Personal web site',
    siteTitleAlt: 'Personal web site - Workshop Gatsby',
    siteHeadline: 'Personal web site - Workshop Gatsby',
    siteUrl: 'https://workshop-gatsby.netlify.com',
    siteDescription: 'Playful and Colorful One-Page portfolio featuring Parallax effects and animations',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: '@khriztianmoreno',
    basePath: '/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sections',
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
  ],
};
