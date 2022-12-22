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
        baseUrl: 'http://maxvamp.com',
        contentKey: '0c65d6d1a23b547a0150da6462',
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
