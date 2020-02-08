module.exports = {
  siteMetadata: {
    title: 'Gatsby as a Service',
    description: 'My coursework learning Gatsby from Jason Lengstory on FEM',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
