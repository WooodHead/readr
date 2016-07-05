'use strict'
const config = require('../config')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const _ = require('lodash')
const DataTypes = require('./data-types')
const parseTextToHtml = require('../utils/data').parseTextToHtml
const embedRef = require('./embedref')
// const errors = require('../errors')
// const i18n = require('../utils/i18n')


function dataConvention(schema, data) {
  const arrayTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
    && schema.fields[key].type.isArray())

  const textTypedFieldKeys = Object.keys(schema.fields).filter(key => schema.fields[key].type
    && schema.fields[key].type.equals(DataTypes.Text))

  // 处理特殊格式
  return _.mapValues(data, (val, key) => {
    if (arrayTypedFieldKeys.indexOf(key) !== -1 && !Array.isArray(val)) {
      return val.split(',')
    }

    // convert Text type to raw and html
    if (textTypedFieldKeys.indexOf(key) !== -1) {
      return {
        html: parseTextToHtml(val),
        raw: val
      }
    }

    return val
  })
}

class Model {
  constructor(schema) {
    // validate schema
    if (!schema.baseTable) {
      throw new Error('schema 格式错误！')
    }

    this.schema = schema
    this.tableName = schema.baseTable
    this.db = MongoClient.connect(config.db.host + config.db.name)
    this.collection = this.db.then(db => {
      return Promise.resolve(db.collection(this.schema.baseTable))
    })
    this.match = {}
  }

  _getAndResetMatch() {
    const match = Object.assign({}, this.match)
    this.match = {}
    return match
  }

  findById(_id) {
    this.match = Object.assign({}, { _id })
    return this
  }

  find(match) {
    this.match = Object.assign({}, match)
    return this
  }

  listRaw() {
    const match = this._getAndResetMatch()

    return this.collection.then(collection => {
      return collection.find(match).toArray()
    })
  }

  list() {
    return this.listRaw().then(results => {
      return embedRef(results, this.schema)
    })
  }

  // todo: validation 
  insert(data) {
    let data2 = Object.assign({}, data, {
      _id: Math.random().toFixed(8).substr(2),
      date_created: new Date().toString()
    })

    data2 = dataConvention(this.schema, data2)

    return this.collection.then(collection => {
      return collection.insert([data2])
    })
  }

  // @multi: boolean
  update(data, updateConfig) {
    const multi = updateConfig.multi
    const upsert = updateConfig.upsert
    // todo: 添加特殊格式处理
    const data2 = Object.assign({}, data, {
      date_updated: new Date().toString()
    })
    const match = this._getAndResetMatch()
    let enableMulti = false

    if (Object.keys(match).length === 0) {
      enableMulti = true
    }
    if (typeof multi !== 'undefined') {
      enableMulti = multi
    }

    return this.collection.then(collection => {
      return collection.update(match, { $set: data2 }, {
        upsert: typeof upsert !== undefined ? upsert : false,
        multi: enableMulti
      })
    })
  }

  delete() {
    const match = this._getAndResetMatch()

    return this.collection.then(collection => {
      return collection.remove(match)
    })
  }
}

module.exports = Model
