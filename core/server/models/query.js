'use strict'

var db = require("./db")
var dbName = 'readr'
var colors = require('colors/safe')

var query = {
  getData(tableName, match) {
    return new Promise(function(resolve, reject) {
      db.connect(dbName).then(function(db){
        const collection = db.collection(tableName)

        collection.find(match).toArray(function (error, result) {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
          db.close()
        })
      })
    })
  },

  putData: function(table_name, data) {
    data.id = Math.random().toFixed(8).substr(2)
    data.date_created = new Date().valueOf()

    return new Promise(function(resolve,reject){
      db.connect(dbName).then(function(db){
        db.collection(table_name).insert([data], function (err, result) {
          if (err) {
            console.log(colors.red(err));
            resolve({
              error: {
                message: err
              },
              statusCode: 404
            })
          } else {
            resolve({
              data: {
                id: data.id
              }
            })
          }
          db.close();
        })
      })
    })
  },

  updateData: function(table_name, match, data){
    return new Promise(function(resolve,reject){
      db.connect(dbName).then(function(db){
        var collection = db.collection(table_name);

        collection.update(match, data, {
            upsert: true
          }, function(err, result){
            if (err) {
              resolve({
                error: {
                  message: err
                },
                statusCode: 404
              })
            } else {
              resolve({data: {}})
            }
            db.close()
          }
        )
      })
    })
  }
}

module.exports = query
