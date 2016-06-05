'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _index = require('reducers/index');

var _index2 = _interopRequireDefault(_index);

var _api = require('middleware/api');

var _api2 = _interopRequireDefault(_api);

var _modifyResponse = require('middleware/modifyResponse');

var _modifyResponse2 = _interopRequireDefault(_modifyResponse);

var _handleInitialState = require('utils/handleInitialState');

var _handleInitialState2 = _interopRequireDefault(_handleInitialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
    // if(module.hot) {
    //   module.hot.accept('../reducers', () => {
    //     const nextRootReducer = require('../reducers').default
    //     store.replaceReducer(nextRootReducer)
    //   })
    // }
    if (typeof window === 'undefined') {
        return (0, _redux.createStore)(_index2.default, {}, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default, _modifyResponse2.default)));
    }
    return (0, _redux.createStore)(_index2.default, (0, _handleInitialState2.default)(), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default, _modifyResponse2.default, (0, _reduxLogger2.default)({ collapsed: true }))));
}