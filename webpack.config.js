const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const minimizeTrue = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
      extractComments: false,
    }),
  ],
}
const minimizeFalse = {
  minimize: false,
}
const optimizationOptions = isProd ? minimizeTrue : minimizeFalse

module.exports = {
  mode: 'production',
  entry: './src/_assets/js/index.js',
  output: {
    path: path.resolve(__dirname, './src/assets/js/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: optimizationOptions,
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      jquery: 'jquery/dist/jquery.slim.js',
    },
  },
}
