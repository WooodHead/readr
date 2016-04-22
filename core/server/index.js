process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('express')
var path = require('path')
var morgan = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var colors = require('colors/safe')

var routes = require('./routes')
var bootServer = require('./boot')
var config = require('./config')
var startWebpack = require('./webpack')

var app = express()
var isWebpackEnabled = process.argv.indexOf('--webpack') !== -1?true:false
var env = app.get('env')

function init(basePath) {
  app.use(session({
    secret: 'key wtf',
    cookie: {
      maxAge: 7*24*60*60*1000,
      expires: new Date(Date.now() + 7*24*60*60*1000)
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: config.dbUrl+'readr_session' })
  }))

  if(env =="development" && isWebpackEnabled) {
    startWebpack(app)
  }

  app.use(bodyParser.urlencoded({limit: '5mb', extended: false}))
  app.use(bodyParser.json({limit: '5mb'}))
  app.use(cookieParser())

  app.set('views', path.join(basePath, 'views'))
  app.set('view engine', 'jade')
  app.use(express.static(path.join(basePath, 'assets')))

  // handle routing
  app.use(routes.apiBaseUri, routes.api())

  if(env === 'production') {
    app.get("*", routes.frontend(env, true, true))
  }else if(env === 'development') {
    app.get("*", routes.frontend(env, true, true))
  }else{
    console.error('env is neither development nor production!')
  }

  // error log info
  app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

  bootServer(app, env)
}

module.exports = init
