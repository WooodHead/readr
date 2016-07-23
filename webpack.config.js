/**
 * 构建开发环境脚本
 */

const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack/webpack.base.config')
const paths = base.paths

module.exports = {
  entry: {
    app: [`${paths.src}/entry/app`],
    console: [`${paths.src}/entry/console`],
  },
  output: {
    path: paths.built,
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new ManifestPlugin(),
    new ExtractTextPlugin('[name].css'),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.imageWebpack,
      base.loaders.babel,
      base.loaders.sassWithExtractText,
      base.loaders.ts,
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
}
