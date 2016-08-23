import _ from 'lodash'
import utils from '../api/utils'

function getParserByMethodName(methodName) {
  switch (methodName) {
    case 'find':
      return request => {
        return [
          utils.getIdMatch(request.params)
        ]
      }

    case 'list':
      return request => {
        // console.log(request.query)
        return [
          {},
          _.assign({}, request.query)
        ]
      }

    case 'update':
      return request => {
        return [
          utils.getIdMatch(request.params),
          request.data
        ]
      }

    case 'remove':
      return request => {
        return [
          utils.getIdMatch(request.params)
        ]
      }

    case 'add':
      return request => {
        return [
          request.body
        ]
      }

    default:
      throw new Error(`Method name (${methodName}) not defined!`)
  }
}

function generateBasicEndpoints(basicApi) {
  let endpoints = []

  _.forEach(basicApi, apiContainer => {
    const endpoint = apiContainer._publicMethods.map(method => {
      const apiMethod = apiContainer[method.name]
      const parser = getParserByMethodName(method.name)

      return {
        url: method.url,
        handler: req => {
          return apiMethod.apply(null, parser(req))
        },
        httpMethod: method.httpMethod
      }
    })

    endpoints = endpoints.concat(endpoint)
  })

  return endpoints
}

export default generateBasicEndpoints