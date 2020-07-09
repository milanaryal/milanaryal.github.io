const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const discardComments = require('postcss-discard-comments')

const purgecssConfig = {
  content: ['!(_site|node_modules)/**/*.+(html|js|md)', '*.html'],
  whitelist: ['highlight', 'tooltip'],
  whitelistPatterns: [/tooltip/, /bs-tooltip/],
  whitelistPatternsChildren: [
    /markdown-body/,
    /highlight/,
    /tooltip/,
    /bs-tooltip/,
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
}

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          // NODE_ENV=production
          purgecss(purgecssConfig),
          autoprefixer({ cascade: false }),
          cssnano({ preset: 'default' }),
          discardComments({ removeAll: true }),
        ]
      : [
          // NODE_ENV=development
          purgecss(purgecssConfig),
          autoprefixer({ cascade: false }),
        ],
}
