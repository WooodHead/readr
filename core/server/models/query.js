'use strict'

var db = require("./db")
var dbName = 'readr'
var colors = require('colors/safe')

var query = {
  getData(tableName, match) {
    return new Promise(function(resolve, reject) {
      db.connect(dbName).then(function(db){
        db.collection(tableName).find(match).toArray(function (error, result) {
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

  putData(tableName, data) {
    data.id = Math.random().toFixed(8).substr(2)
    data.date_created = new Date().valueOf()

    return new Promise(function(resolve, reject){
      db.connect(dbName).then(function(db){
        db.collection(tableName).insert([data], function (error, result) {
          if (error) {
            resolve(error)
          } else {
            resolve({ id: data.id })
          }
          db.close();
        })
      })
    })
  },

  updateData(tableName, match, data) {
    return new Promise(function(resolve,reject){
      db.connect(dbName).then(function(db){
        db.collection(tableName).update(match, data, {
            upsert: true
          }, function(error, result){
            if (error) {
              resolve(error)
            } else {
              resolve({})
            }
            db.close()
          }
        )
      })
    })
  },

  deleteData(tableName, match) {
    return new Promise(function(resolve,reject){
      db.connect(dbName).then(function(db){
        db.collection(tableName).remove(match, function(error, result){
            if (error) {
              resolve(error)
            } else {
              resolve({})
            }
            db.close()
          }
        )
      })
    })
  }
}

module.exports = query
