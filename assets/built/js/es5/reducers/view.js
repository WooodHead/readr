'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = view;
function view(state, action) {
  if (typeof state === 'undefined') {
    state = {
      screen: 'hd',
      pageHeight: 900,
      pageWidth: 900
    };
  }

  switch (action.type) {
    case 'SET_VIEW':
      return Object.assign({}, state, action.view);

    default:
      return state;
  }
}