import { componentType, triggerType, apiTypes } from '../actions/utils'

const makeActionTypeCreator = namespace => type => [namespace, type].join('/')

const viewerType = makeActionTypeCreator('viewer')

/**
 * components
 */

// general
export const NOTIFICATION = {
  SHOW: componentType('notification', 'SHOW'),
  HIDE: componentType('notification', 'HIDE'),
}
export const OPEN_CONFIRM_MODAL = componentType('confirm-modal', 'OPEN')
export const CLOSE_CONFIRM_MODAL = componentType('confirm-modal', 'CLOSE')
export const MODAL = {
  OPEN: componentType('modal', 'SHOW'),
  CLOSE: componentType('modal', 'HIDE'),
}

// viewer
export const VIEWER = {
  INITIALIZE: triggerType(viewerType('INITIALIZE')),
  CONFIG: viewerType('CONFIG'),

  CALC_START: triggerType(viewerType('CALC_START')),
  CALC_SUCCESS: viewerType('CALC_SUCCESS'),
  CALC_FAILURE: viewerType('CALC_FAILURE'),




  // INITIALIZE_CONFIG: createSagaTriggerActionType(viewerType('INITIALIZE_CONFIG')),


  PROGRESS_UPDATE: triggerType(viewerType('UPDATE_PROGRESS')),

  JUMP: triggerType(viewerType('JUMP')),
  FONT_CHANGE: viewerType('CHANGE_FONT_SIZE'),
  PANEL_TOGGLE: viewerType('TOGGLE_PANEL'),
  PREFERENCE_TOGGLE: viewerType('TOGGLE_PREFERENCE'),
  NAVIGATION_TOGGLE: viewerType('TOGGLE_NAVIGATION'),
  THEME_CHANGE: viewerType('CHANGE_THEME'),
  SCROLL_MODE_TOGGLE: viewerType('TOGGLE_SCROLL_MODE'),
  PROGRESS_INFO_TOGGLE: viewerType('TOGGLE_PROGRESS_INFO'),

  // TODO: 这个好像没用
  PROGRESS_INITIALIZE: viewerType('INITIALIZE_PROGRESS'),

  // TODO: 这个好像也没用
  PROGRESS_DESTROY: viewerType('DESTROY_PROGRESS'),
}

// modifiy
export const REMOVE_ENTITY = 'REMOVE_ENTITY'

/**
 * api
 */
export const BOOKS = apiTypes('books')
export const BOOK_INFO = apiTypes('book-info')
export const BOOK_CONTENT = apiTypes('book-content')
export const SESSION = apiTypes('session')
export const PROFILE = apiTypes('profile')
export const SHELF = apiTypes('shelf')
export const USERS = apiTypes('users')
export const AUTHORS = apiTypes('authors')
export const COLLECTIONS = apiTypes('collections')
export const COLLECTION = apiTypes('collection')
export const BOOK_PROGRESS = apiTypes('book-progress')
export const USER_LOGOUT = apiTypes('user-logout')

export const DOUBAN_BOOKS = apiTypes('douban-books')
