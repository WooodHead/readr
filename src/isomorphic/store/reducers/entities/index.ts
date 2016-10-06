import errorMessage from './errorMessage'
import _ from 'lodash'
import * as actions from '../../actions'

export { errorMessage }

export function entities(state = {}, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }

  if (action.type === actions.REMOVE_ENTITY) {
    const {name, id} = action
    return _.assign({}, state, {
      [name]: _.omit(state[name], [id])
    })
  }

  return state
}

export function session(state = { user: { role: 'visitor' } }, action) {
  switch (action.type) {
    case actions.AUTH.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })

    case actions.AUTH.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      })

    case actions.AUTH.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      })

    default:
      return state
  }
}
