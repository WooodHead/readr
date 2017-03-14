import * as ACTION_TYPES from './actionTypes'
import * as VIEWER_DEFS from './viewerDefs'

// global vars
export const ENABLE_SERVER_ROUTING = '__ENABLE_SERVER_ROUTING__'
export const INITIAL_STATE = '__INITIAL_STATE__'

export const DOUBAN_API_ROOT = 'https://api.douban.com/v2'
export const GITHUB_API_ROOT = 'https://api.github.com'

export const ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  VISITOR: 'visitor'
}

export const API_PREFIX = 'api'


export { ACTION_TYPES, VIEWER_DEFS }