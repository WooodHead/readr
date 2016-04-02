var express = require('express'),
    api = require('../api'),
    session = require('express-session'),

    apiRoutes;

apiRoutes = function apiRoutes() {
  var router = express.Router();

  function getUserInfo(req,res,next){

    console.log('in routes api.js');
    console.log(req.session);

    req.user = {
      id: req.session.userinfo.username
    }
    next();
  }

  router.get('/books', api.http(api.books.getAllBooks));
  router.get('/books/:_id/', api.http(api.books.getBookInfo));
  router.get('/books/:_id/content', api.http(api.books.getBookContent));

  router.post('/books/:_id/progress',getUserInfo, api.http(api.books.updateReadingProgress));
  router.get('/books/:_id/progress',getUserInfo, api.http(api.books.getReadingProgress));

  router.post('/users', api.http(api.users.addUser));
  router.post('/auth', api.http(api.auth.basic));


  return router;
};

module.exports = apiRoutes;
