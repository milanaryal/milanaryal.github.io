const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const discardComments = require('postcss-discard-comments')

const purgecssConfig = {
  content: [
    './src/**/*.+(html|js|md)',
    'node_modules/bootstrap/js/dist/collapse.js',
    'node_modules/bootstrap/js/dist/tooltip.js',
    'node_modules/headroom.js/dist/headroom.js',
  ],
  // https://purgecss.com/safelisting.html#patterns
  // https://regexr.com/
  safelist: {
    standard: [
      /^markdown-body$/,
      /^highlight$/,
      /^table$/,
      /^table-responsive$/,
    ],
    deep: [
      /^markdown-body$/,
      /^highlight$/,
      /^table$/,
      /^table-striped$/,
      /tooltip/,
      /bs-tooltip/,
    ],
    greedy: [/^markdown-body$/, /^highlight$/, /tooltip/, /bs-tooltip/],
  },
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
