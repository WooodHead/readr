'use strict'
const express = require('express')
const apiHttp = require('../api-v2/http')
// const middleware = require('../middleware')
const router = new express.Router()
const endpoints = require('../api-v2/endpoints')
// const ApiMethods = require('../api-v2/api-methods')
const _ = require('lodash')


function apiRoute() {
  const ep = endpoints[0]
  console.log(ep)
  
  router.get(ep.url, apiHttp(ep.fn))

  // _.forEach(endpoints, (config) => {
  //   const apiMethods = new ApiMethods(config)
  //   const endpointBase = config.isMulti ? config.base : `${config.base}/:id`

  //   router.get(endpointBase, apiHttp(apiMethods.find.bind(apiMethods)))
  //   router.post(endpointBase, apiHttp(apiMethods.edit.bind(apiMethods)))
  //   router.delete(endpointBase, apiHttp(apiMethods.delete.bind(apiMethods)))


  //   // router.post(endpoint.url, api.http(makeApiMethods(endpoint.methods)('browse'))

  //   if (!config.isMulti) {
  //     router.get(config.base, apiHttp(apiMethods.browse.bind(apiMethods)))
  //     router.post(config.base, apiHttp(apiMethods.add.bind(apiMethods)))
  //   }
  // })

  // auth
  // router.post('/auth', middleware.auth2.basic)
  // router.get('/auth', middleware.auth2.check)

  return router
}

module.exports = apiRoute
