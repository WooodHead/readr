webpackJsonp([16],{295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){var n="all",r=e.pagination.userList,l=e.entities.users,u=r[n],a=u?u.ids.map(function(e){return l[e]}):[];return{userListAll:a}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),f=r(i),s=n(5),d=n(6),p=function(e){function t(e){return l(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.fetchUserList()}},{key:"render",value:function(){var e=this.props.userListAll?this.props.userListAll:[];return f["default"].createElement("div",null,f["default"].createElement("table",{className:"info-table"},f["default"].createElement("tbody",null,f["default"].createElement("tr",null,f["default"].createElement("th",null,"ID"),f["default"].createElement("th",null,"Name"),f["default"].createElement("th",null,"Date created"),f["default"].createElement("th",null,"Actions")),e.map(function(e,t){return f["default"].createElement("tr",{key:t},f["default"].createElement("td",null,e.id),f["default"].createElement("td",null,e.username),f["default"].createElement("td",null,e.dateCreated),f["default"].createElement("td",null,f["default"].createElement("a",{href:"#"},"Delete")))}))))}}]),t}(i.Component);t["default"]=(0,s.connect)(o,{fetchUserList:d.fetchUserList})(p)}});