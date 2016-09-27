webpackJsonp([11],{23:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){return e===t}function o(e){var t=arguments.length<=1||void 0===arguments[1]?r:arguments[1],n=null,o=null;return function(){for(var r=arguments.length,u=Array(r),a=0;r>a;a++)u[a]=arguments[a];return null!==n&&n.length===u.length&&u.every(function(e,r){return t(e,n[r])})?o:(o=e.apply(void 0,u),n=u,o)}}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+n+"]"))}return t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;t>o;o++)r[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),a=0;t>a;a++)o[a]=arguments[a];var i=0,c=o.pop(),l=u(o),f=e.apply(void 0,[function(){return i++,c.apply(void 0,arguments)}].concat(r)),s=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),u=2;r>u;u++)o[u-2]=arguments[u];var a=l.map(function(n){return n.apply(void 0,[e,t].concat(o))});return f.apply(void 0,n(a))};return s.resultFunc=c,s.recomputations=function(){return i},s.resetRecomputations=function(){return i=0},s}}function i(){return a(o).apply(void 0,arguments)}function c(e){var t=arguments.length<=1||void 0===arguments[1]?i:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return t.reduce(function(e,t,r){return e[n[r]]=t,e},{})})}t.__esModule=!0,t.defaultMemoize=o,t.createSelectorCreator=a,t.createSelector=i,t.createStructuredSelector=c},27:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.common=t.usersSelector=t.booksSelector=t.booksSearchAsOptions=t.authorsAsOptions=t.doubanBooksAsOptions=t.searchBooksSelector=t.queryAuthorsSelector=t.queryDoubanBooksSelector=void 0;var o=n(31);Object.keys(o).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var u=n(23),a=r(o),i=t.queryDoubanBooksSelector=function(e){return(0,u.createSelector)((0,o.selectPaginatedEntities)({entitiesName:"doubanBooks",paginationName:"doubanBooks",paginationQuery:e}),function(e){return e})},c=t.queryAuthorsSelector=function(e){return(0,o.selectPaginatedEntities)({entitiesName:"authors",paginationName:"authors",paginationQuery:e})},l=t.searchBooksSelector=function(e){return(0,o.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationQuery:e})};t.doubanBooksAsOptions=function(e){return(0,u.createSelector)(i(e),function(e){return e.map(function(e){return{name:e.title,value:e.id,additional:{description:e.summary,cover:e.images.large,author:e.author.join(", ")}}})})},t.authorsAsOptions=function(e){return(0,u.createSelector)(c(e),function(e){return e.map(function(e){return{name:e.name,value:e.id}})})},t.booksSearchAsOptions=function(e){return(0,u.createSelector)(l(e),function(e){return e.map(function(e){return{name:e.title,value:e.id}})})},t.booksSelector=(0,u.createSelector)((0,o.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationKey:"default"}),function(e){return e}),t.usersSelector=(0,o.selectPaginatedEntities)({entitiesName:"users",paginationName:"users",paginationKey:"default"});t.common=a},31:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectPaginatedEntities=t.paginationLinkSelector=void 0;var o=n(23),u=n(5),a=r(u),i=function(e){return function(t){return t.entities[e]||{}}},c=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return a["default"].get(n.pagination,e+"."+t+".ids",[])}},l=(t.paginationLinkSelector=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return a["default"].pick(a["default"].get(n.pagination,e+"."+t,{}),["next","last"])}},function(e,t){return function(n){return a["default"].get(n.pagination,[e,"query",t,"ids"],[])}});t.selectPaginatedEntities=function(e){var t=e.entitiesName,n=e.paginationName,r=e.paginationKey,u=e.paginationQuery,a=void 0;return a=u?l(n,u):c(n,r),(0,o.createSelector)(i(t),a,function(e,t){return t.map(function(t){return e[t]})})}},96:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=o(l),s=n(102),p=o(s),d=n(7),y=n(27),b=r(y),m=function(e){function t(e){return u(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.routing,r=e.paginationLinks,o=r.next,u=r.last,a=u&&u.page||1,i=o?o.page-1:a;return f["default"].createElement("div",null,t,f["default"].createElement(p["default"],{all:a,current:i,url:{pathname:n.pathname,query:n.query||{}}}))}}]),t}(l.Component),g=function(e,t){var n=t.pagination,r=n.name,o=n.key;return{routing:e.routing.locationBeforeTransitions||{},paginationLinks:b.paginationLinkSelector(r,o)(e)}};t["default"]=(0,d.connect)(g,{})(m)},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(96),u=r(o);t["default"]=u["default"]},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},l=n(1),f=r(l),s=n(5),p=r(s),d=n(22),y=r(d),b=n(2),m=r(b),g=function(e,t,n,r){var o,u=arguments.length,a=3>u?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(3>u?o(a):u>3?o(t,n,a):o(t,n))||a);return u>3&&a&&Object.defineProperty(t,n,a),a},h=n(112),v=function(e){function t(e){return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.data,r=(e.enableTooltip,e.style),o=e.actions,u=e.operationLabel;o=o||[],t||(t=0!==n.length&&p["default"].keys(n[0]).map(function(e){return{key:e,name:e}})||[]);var a=(0,y["default"])({"info-table":!0,"info-table--no-header":!t});return f["default"].createElement("table",{styleName:a,style:r||{}},f["default"].createElement("tbody",null,t?f["default"].createElement("tr",null,t.map(function(e,t){return f["default"].createElement("th",{key:t},e.name)}),0!==o.length&&f["default"].createElement("th",null,u||"操作")):f["default"].createElement("tr",null),n.map(function(e,r){return f["default"].createElement("tr",{key:r},p["default"].map(t,function(t,n){return f["default"].createElement("td",{key:n},e[t.key]&&e[t.key].toString())}),0!==o.length&&f["default"].createElement("td",{styleName:"actions"},0!==o.length&&o.map(function(e,t){return f["default"].createElement("div",{styleName:"action",key:t,onClick:function(t){e.fn(n[r])}},e.name)})))})))}}]),t}(l.Component);v=g([(0,m["default"])(h)],v),t["default"]=v},99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(98),u=r(o);t["default"]=u["default"]},101:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},l=n(1),f=r(l),s=n(10),p=n(5),d=r(p),y=n(51),b=r(y),m=n(2),g=r(m),h=function(e,t,n,r){var o,u=arguments.length,a=3>u?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(3>u?o(a):u>3?o(t,n,a):o(t,n))||a);return u>3&&a&&Object.defineProperty(t,n,a),a},v=n(115),_=function(e){function t(e){return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),i(t,[{key:"parseUrl",value:function(e,t,n){var r=this.props.urlStyle?this.props.urlStyle:"query";if("query"===r){var o=b["default"].parseFormData(d["default"].omit(t,["page"]));return""+e+(o?"?"+o+"&":"?")+"page="+n}var u=b["default"].parseFormData(t);return e+"/page/"+n+"?"+u}},{key:"render",value:function(){var e=this,t=this.props.range?this.props.range:3,n=this.props.all-1,r=parseInt(this.props.current)-1,o=r-t,u=r+t,a=!1,i=!1,l=[],p=this.props.url;if("number"!=typeof this.props.all)throw new Error("all 必须为 number 类型！");"number"!=typeof r&&console.error("页码必须为数字，却得到 "+("undefined"==typeof r?"undefined":c(r))),(r>u||0>r)&&console.error("页码不能大于所有页面数目或小于 1！"),2*t+1>=n?(u=n,o=0):(u>=n?(u=n,o=n-(2*t+1)):i=!0,0>=o?(o=0,u=2*t+1):a=!0);for(var d=o;u>=d;d++)l=l.concat([{pageNum:d+1,isCurrent:d===r}]);if(a){var y=[{pageNum:1},{isSpread:!0}];l=y.concat(l)}if(i){var b=[{isSpread:!0},{pageNum:n+1}];l=l.concat(b)}return 1!==this.props.all&&f["default"].createElement("div",{styleName:"paginator"},f["default"].createElement("ul",null,l.map(function(t,n){return t.isCurrent?f["default"].createElement("li",{key:n,styleName:"page-num--current"},t.pageNum):t.isSpread?f["default"].createElement("li",{key:n,styleName:"page-spread"},"..."):f["default"].createElement("li",{key:n,styleName:"page-num"},f["default"].createElement(s.Link,{to:e.parseUrl(p.pathname,p.query,t.pageNum)},t.pageNum))})))}}]),t}(l.Component);_=h([(0,g["default"])(v)],_),t["default"]=_},102:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(101),u=r(o);t["default"]=u["default"]},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(109);Object.keys(r).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},109:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.onRoutingChange=void 0;var o=n(5),u=r(o);t.onRoutingChange=function(e){return function(t,n){if(!n.routing)return console.error("routing 需要现在组件 props 里面声明！"),!1;var r=!u["default"].isEqual(t.routing,n.routing);r&&e(t.routing)}}},112:function(e,t){e.exports={"info-table--no-header":"info-table--no-header_2v3xx","info-table":"info-table_B7JYU",actions:"actions_pR_Nz",action:"action_3DLKy"}},115:function(e,t){e.exports={"page-spread":"page-spread_2INHU","page-num":"page-num_2oPQU","page-num--current":"page-num--current_1Y2mE",paginator:"paginator_1RHAm"}},309:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){return{users:g.usersSelector(e),routing:e.routing.locationBeforeTransitions}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=o(f),p=n(7),d=n(9),y=n(99),b=o(y),m=n(27),g=r(m),h=n(34),v=o(h),_=n(97),O=o(_),j=n(108),k=r(j),E=function(e){function t(e){return u(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"loadUsers",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this.props:arguments[0];this.props.fetchUsers({api:{page:e.routing.query.page||"1"}})}},{key:"componentWillReceiveProps",value:function(e,t){var n=this;k.onRoutingChange(function(t){document.body.scrollTop=0,n.loadUsers(e)})(e,this.props)}},{key:"componentDidMount",value:function(){this.loadUsers()}},{key:"render",value:function(){var e=this.props.users;return s["default"].createElement(v["default"],{title:"用户管理"},s["default"].createElement(O["default"],{pagination:{name:"users"}},s["default"].createElement(b["default"],{data:e})))}}]),t}(f.Component);t["default"]=(0,p.connect)(c,{fetchUsers:d.fetchUsers})(E)}});