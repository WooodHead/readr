const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  // Here are the features that have been enabled
  babel: {
    react: true,
  },
  // sass: {
  //   extract: true
  // },
  // media: {
  //   dataUrl: true,
  // },
  production: true,
  env: {
    
  }
}, {
  entry: {
    main: resolveProject('src/index.tsx'),
  },
  output: {
    path: resolveProject('build'),
    filename: '[name].js',
    publicPath: '/static/'
  }
})