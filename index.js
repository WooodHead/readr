require('app-module-path').addPath('./assets/built/js/es5')

var path = require('path')
var init = require('./core/server')

init(path.join(__dirname))