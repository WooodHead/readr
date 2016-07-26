const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    [`${paths.src}/entry/app`]: `${paths.built}/app.js`,
    [`${paths.src}/entry/console`]: `${paths.built}/console.js`,
    // 'react-kit': base.vars.reactKit: `${paths.built}/console.js`,
    // utils: base.vars.utils: `${paths.built}/console.js`,
  },
  output: {
    path: './',
    filename: '[name].[chunkhash:10].js',
  },
  plugins: [
    base.plugins.occurenceOrder,
    base.plugins.envProd,
    new ManifestPlugin({
      fileName: 'chunks.manifest.json',
    }),
    new ExtractTextPlugin('[name].[chunkhash:10].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   // 顺序会产生影响
    //   // 目前这种顺序，react-kit 里面会包含 webpack 用来解析模块的逻辑
    //   // 所以如果在页面上两者顺序颠倒会出错
    //   names: ['utils', 'react-kit'],
    //   minChunks: Infinity
    // }),
  ],
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