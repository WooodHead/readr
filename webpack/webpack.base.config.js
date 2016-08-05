// # WEBPACK ROCKS!!
// webpack 配置合集，各种情况各取所需
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const _ = require('lodash')
const fs = require('fs')

/**
 * ## 定义常用变量
 */

const pathPrefix = process.cwd()
const paths = {
  root: pathPrefix,
  static: path.join(pathPrefix, 'src/static'),
  src: path.join(pathPrefix, 'src'),
  entry: path.join(pathPrefix, 'src/entry'),
  isomorphic: path.join(pathPrefix, 'src/isomorphic'),
  server: path.join(pathPrefix, 'src/server'),
  built: path.join(pathPrefix, 'assets/built')
}
const cssLocalIdentName = '[local]_[hash:base64:5]'
const imageName = './img/[name].[hash:10].[ext]'

// 暴露到全局变量的名称
const vendorLibName = '_[name]_dll'

// HMR entry 里面的一个标记，具体不懂。。
const hot = 'webpack-hot-middleware/client'

// webpack 会使用文件名作为变量，所以不能使用带有 - 的名字
// 这边的配置会同时影响生成和引用，所以只需在这边修改就行了
const dllNames = {
  reactKit: 'react_kit',
  utils: 'utils'
}

// names: { name: string }[]
const dllReference = (names) => {
  try {
    return _.map(names, name => {
      return new webpack.DllReferencePlugin({
        context: '.',
        manifest: JSON.parse(fs.readFileSync(`${paths.built}/${name}.dll.manifest.json`, 'utf8'))
      })
    })
  } catch (error) {
    console.warn('WARNING: ', error.message)
    return []
  }
}

// code splitting
const reactKit = [
  'react',
  'react-dom',
  'react-addons-css-transition-group',
  'redux',
  'react-redux',
  'react-router',
  'redux-thunk',
  'react-css-modules',
  'react-side-effect',
  'react-router-redux',
]
const reactDevKit = [
  'redux-devtools-log-monitor',
  'redux-devtools-dock-monitor',
]

const utils = [
  'lodash',
  'jquery',
  'normalizr',
  'humps',
  'isomorphic-fetch',
]

module.exports = {
  vars: {
    pathPrefix,
    paths,
    cssLocalIdentName,
    imageName,
    vendorLibName,
    hot,

    dllNames,
    reactKit,
    reactDevKit,
    utils
  },

  plugins: {
    envProd: new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    envDev: new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    nodeSourceMapSupport: new webpack.BannerPlugin(`require('source-map-support').install()`, {
      raw: true,
      entryOnly: true
    }),
    occurenceOrder: new webpack.optimize.OccurenceOrderPlugin(),
    dllReference: () => dllReference(dllNames),
    dllDefinition: new webpack.DllPlugin({
      path: `${paths.built}/[name].dll.manifest.json`,
      name: vendorLibName
    }),
    uglify: new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  },

  loaders: {
    imageWebpack: {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        `file?name=${imageName}`,
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    imageWebpackNoEmit: {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        `file?emitFile=false&name=${imageName}`,
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    babel: {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    postCss2: {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
        'resolve-url',
        'postcss?sourceMap'
      ]
    },
    postCss({ global, sourceMap, extract }) {
      const localIdentName = global ? '[local]' : cssLocalIdentName

      if (extract) {
        return {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
            'style?sourceMap',
            `css?sourceMap&modules&importLoaders=1&localIdentName=${localIdentName}!resolve-url!postcss?sourceMap`
          )
        }
      }

      return {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          `css?sourceMap&modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
          'resolve-url',
          'postcss?sourceMap'
        ]
      }
    },
    css: {
      test: /\.css$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[local]',
        'resolve-url',
      ]
    },
    sass: {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}&sourceMap`,
        'resolve-url',
        'sass?sourceMap'
      ]
    },
    sassBuild: {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style?sourceMap',
        `css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]!resolve-url-loader!sass-loader?sourceMap`
      )
    },
    sassBuildWithoutSourceMap: {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        `css-loader?modules&importLoaders=1&localIdentName=[local]!resolve-url-loader!sass-loader`
      )
    },
    sassIsomorphic: {
      test: /\.scss$/,
      loaders: [
        'isomorphic-style?sourceMap',
        `css?modules&importLoaders=1&localIdentName=${cssLocalIdentName}`,
        'resolve-url',
        'sass?sourceMap'
      ]
    },
    sassWithExtractText: {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style?sourceMap',
        `css-loader?modules&importLoaders=1&localIdentName=${cssLocalIdentName}!resolve-url-loader!sass-loader?sourceMap`
      )
    },
    ts: {
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
    },
    awesomeTs: {
      test: /\.tsx?$/,
      loaders: ['babel', 'awesome-typescript'],
    },
    tsHot: {
      test: /\.tsx?$/,
      loaders: ['react-hot', 'babel', 'awesome-typescript'],
    }
  },

  loaderConfig: {
    postcss: () => {
      return [
        require('postcss-import')({
          path: [
            paths.isomorphic
          ]
        }),
        require('postcss-cssnext')
      ]
    },
    sassLoader: {
      // 用于 scss 文件里 import 其它文件
      includePaths: [
        paths.isomorphic,
        paths.static
      ]
    },
  },

  resolve: {
    // 这边定义的 root 暂时没用，因为 vs code 里面目前配置的是只使用相对路径
    root: paths.src,
    alias: {
      // 方便在组建里面引用通用的 scss 文件（可能不会太常用）
      // composes 使用的是 webpack resolve 里面的规则
      styles: `${paths.isomorphic}/styles`,
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
