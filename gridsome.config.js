// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Above meeh stories',
  siteDescription: 'Just stories for now',

  templates: {
    GhostPost: '/:title',
    GhostTag: '/tag/:slug'
  },

  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'https://maxvamp.ghost.io',
        contentKey: '27286dcdf66d890d866eb98823',
        routes: {
          post: '/:slug',
          page: '/:slug'
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
