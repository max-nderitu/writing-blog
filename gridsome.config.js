// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Blog with Stories',
  siteDescription: 'Thoughts, stories and ideas. I know original',

  templates: {
    GhostPost: '/:title',
    GhostTag: '/tag/:id'
  },

  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'https://simple-idea.ghost.io',
        contentKey: 'bfea7d2ded2a625180005b0b93',
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
