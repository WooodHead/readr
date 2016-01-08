var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var session = require('express-session');

models.init();

router.post('/new', function(req, res) {
  var data = {},
      match = {};

  data.username = req.body.username;
  data.password = req.body.password;
  data.email = req.body.email;

  match = {
    username: data.username
  }
  
  var result = models.getData('users', match);

  result.then(function(result){
    if(result.status == "OK"){
      result = models.putData('users', data);

      result.then(function(val){
        if(val){
          res.redirect('/');
        }else{
          console.log('users.js: error creating user!');
          res.send(result.error.msg);
        }
      });
    }else{
      res.send("User exsits!")
    }
  });

});


router.post('/auth', function(req, res) {
  var data = {},
      match = {};

  data.username = req.body.username;
  data.password = req.body.password;

  match = {
    username: data.username,
    password: data.password
  }
  
  var result = models.getData('users', match);

  result.then(function(result){
    if(result.status == "OK"){
      var username = data.username;
      req.session.userId = username;
      res.redirect("/");
    }else{
      res.redirect("/signin?error="+result.error.code);
      res.send("Not authed!");
    }
  });

});

module.exports = router;