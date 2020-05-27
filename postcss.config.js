const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const discardComments = require('postcss-discard-comments');

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          // NODE_ENV=production
          autoprefixer({ cascade: false }),
          cssnano(),
          discardComments({ removeAll: true }),
        ]
      : [
          // NODE_ENV=development
          autoprefixer({ cascade: false }),
        ],
}
