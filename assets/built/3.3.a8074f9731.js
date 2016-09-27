webpackJsonp([3],{485:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.common=t.usersSelector=t.booksSelector=t.booksSearchAsOptions=t.authorsAsOptions=t.doubanBooksAsOptions=t.searchBooksSelector=t.queryAuthorsSelector=t.queryDoubanBooksSelector=void 0;var r=n(486);Object.keys(r).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var u=n(487),i=o(r),a=t.queryDoubanBooksSelector=function(e){return(0,u.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"doubanBooks",paginationName:"doubanBooks",paginationQuery:e}),function(e){return e})},l=t.queryAuthorsSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"authors",paginationName:"authors",paginationQuery:e})},c=t.searchBooksSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationQuery:e})};t.doubanBooksAsOptions=function(e){return(0,u.createSelector)(a(e),function(e){return e.map(function(e){return{name:e.title,value:e.id,additional:{description:e.summary,cover:e.images.large,author:e.author.join(", ")}}})})},t.authorsAsOptions=function(e){return(0,u.createSelector)(l(e),function(e){return e.map(function(e){return{name:e.name,value:e.id}})})},t.booksSearchAsOptions=function(e){return(0,u.createSelector)(c(e),function(e){return e.map(function(e){return{name:e.title,value:e.id}})})},t.booksSelector=(0,u.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationKey:"default"}),function(e){return e}),t.usersSelector=(0,r.selectPaginatedEntities)({entitiesName:"users",paginationName:"users",paginationKey:"default"});t.common=i},486:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectPaginatedEntities=t.paginationLinkSelector=void 0;var r=n(487),u=n(321),i=o(u),a=function(e){return function(t){return t.entities[e]||{}}},l=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return i["default"].get(n.pagination,e+"."+t+".ids",[])}},c=(t.paginationLinkSelector=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return i["default"].pick(i["default"].get(n.pagination,e+"."+t,{}),["next","last"])}},function(e,t){return function(n){return i["default"].get(n.pagination,[e,"query",t,"ids"],[])}});t.selectPaginatedEntities=function(e){var t=e.entitiesName,n=e.paginationName,o=e.paginationKey,u=e.paginationQuery,i=void 0;return i=u?c(n,u):l(n,o),(0,r.createSelector)(a(t),i,function(e,t){return t.map(function(t){return e[t]})})}},487:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return e===t}function r(e){var t=arguments.length<=1||void 0===arguments[1]?o:arguments[1],n=null,r=null;return function(){for(var o=arguments.length,u=Array(o),i=0;o>i;i++)u[i]=arguments[i];return null!==n&&n.length===u.length&&u.every(function(e,o){return t(e,n[o])})?r:(r=e.apply(void 0,u),n=u,r)}}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+n+"]"))}return t}function i(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;t>r;r++)o[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),i=0;t>i;i++)r[i]=arguments[i];var a=0,l=r.pop(),c=u(r),s=e.apply(void 0,[function(){return a++,l.apply(void 0,arguments)}].concat(o)),f=function(e,t){for(var o=arguments.length,r=Array(o>2?o-2:0),u=2;o>u;u++)r[u-2]=arguments[u];var i=c.map(function(n){return n.apply(void 0,[e,t].concat(r))});return s.apply(void 0,n(i))};return f.resultFunc=l,f.recomputations=function(){return a},f.resetRecomputations=function(){return a=0},f}}function a(){return i(r).apply(void 0,arguments)}function l(e){var t=arguments.length<=1||void 0===arguments[1]?a:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),o=0;e>o;o++)t[o]=arguments[o];return t.reduce(function(e,t,o){return e[n[o]]=t,e},{})})}t.__esModule=!0,t.defaultMemoize=r,t.createSelectorCreator=i,t.createSelector=a,t.createStructuredSelector=l},488:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(489),u=o(r);t["default"]=u["default"]},489:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(158),s=o(c),f=n(160),p=n(490),d=o(p),y=n(384),h=o(y),b=n(380),m=o(b),v=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},g=n(509),O=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.title,t=this.props.moreLink?this.props.moreLink:null;return s["default"].createElement("div",{styleName:"book-list-section"},this.props.title&&(t?s["default"].createElement("h2",{styleName:"section-title"},s["default"].createElement(f.Link,{to:t},e,s["default"].createElement(m["default"],{name:"arrowRight",size:20}))):s["default"].createElement("h2",{styleName:"section-title"},e)),s["default"].createElement(d["default"],{bookEntities:this.props.bookEntities}))}}]),t}(c.Component);O=v([(0,h["default"])(g,{allowMultiple:!0})],O),t["default"]=O},490:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(491),u=o(r);t["default"]=u["default"]},491:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(158),s=o(c),f=n(492),p=o(f),d=n(384),y=o(d),h=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},b=n(508),m=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var n=e.title,o=e.authors,r=e.description,u=e.cover;return s["default"].createElement("li",{key:t},s["default"].createElement(p["default"],{id:e.id,title:n||"无标题",authors:o&&o.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:u,disablePopup:!0}))}):s["default"].createElement("li",null,"暂无记录"))}}]),t}(c.Component);m=h([(0,y["default"])(b)],m),t["default"]=m},492:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(493),u=o(r);t["default"]=u["default"]},493:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(158),s=o(c),f=n(160),p=n(494),d=o(p),y=n(384),h=o(y),b=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},m=n(507),v=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showPopup:!1},n.showPopup=n.showPopup.bind(n),n.hidePopup=n.hidePopup.bind(n),n}return i(t,e),a(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,n=e.description,o=e.cover;return s["default"].createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},s["default"].createElement(f.Link,{to:"/book/"+this.props.id},o&&s["default"].createElement("div",{styleName:"book-cover"},s["default"].createElement("img",{src:this.props.cover})),s["default"].createElement("div",{styleName:"book-meta"},s["default"].createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),s["default"].createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&s["default"].createElement("span",{styleName:"book-desc"},n||"空"))),this.state.showPopup&&!this.props.disablePopup&&s["default"].createElement(d["default"],{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(c.Component);v=b([(0,h["default"])(m,{allowMultiple:!0})],v),t["default"]=v},494:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(495),u=o(r);t["default"]=u["default"]},495:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(158),s=o(c),f=n(496),p=n(384),d=o(p),y=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},h=n(506),b=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.author,n=e.title,o=e.description,r=e.bookId;return s["default"].createElement("div",{styleName:"popup"},s["default"].createElement("div",{styleName:"header"},s["default"].createElement("h2",{styleName:"title"},n),s["default"].createElement("p",{styleName:"author"},t),s["default"].createElement(f.Button,{color:"blue",to:"/viewer/book/"+r},"阅读")),s["default"].createElement("div",{styleName:"description"},s["default"].createElement("p",null,o)))}}]),t}(c.Component);b=y([(0,d["default"])(h,{allowMultiple:!0})],b),t["default"]=b},496:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(418),u=o(r),i=n(497),a=o(i),l=n(500),c=o(l),s=n(503),f=o(s);t.Button=u["default"],t.Input=a["default"],t.SelectizeInput=c["default"],t.Textarea=f["default"]},497:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(498),u=o(r);t["default"]=u["default"]},498:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(158),s=o(c),f=n(384),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},y=n(499),h=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);return delete t.className,s["default"].createElement("div",{styleName:"input-wrap",className:this.props.className||""},s["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},499:function(e,t){e.exports={"input-wrap":"input-wrap_3dHA3",input:"input_2juBO"}},500:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(501),u=o(r);t["default"]=u["default"]},501:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(158),s=o(c),f=n(380),p=o(f),d=n(382),y=o(d),h=n(384),b=o(h),m=n(430),v=o(m),g=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},O=n(502),_=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputWrapClick=n.handleInputWrapClick.bind(n),n}return i(t,e),a(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.setState({showOptions:!1})}},{key:"handleInputWrapClick",value:function(){this.focusInput(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,u=this.props.value||"",i=this.props.options||[],a=o.length>0?0===u.length?16:16*u.length:"100%",l=o.length>0?"":this.props.placeholder,c=(0,y["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return s["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?s["default"].createElement("label",{className:"form-label"},n):null,s["default"].createElement("div",{styleName:c,onClick:this.handleInputWrapClick,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return s["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,s["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),s["default"].createElement("input",{style:{width:a},ref:function(t){e.input=t},value:u,placeholder:l,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==i.length||r)?s["default"].createElement("ul",{styleName:"query-results"},i.map(function(t,n){return t.disabled?s["default"].createElement("li",{key:n,className:"disabled"},t.name):s["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},s["default"].createElement("span",null,t.name))}),r?s["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",s["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(c.Component);_=g([(0,b["default"])(O,{allowMultiple:!0})],_),t["default"]=_},502:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},503:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(504),u=o(r);t["default"]=u["default"]},504:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(158),s=o(c),f=n(384),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},y=n(505),h=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){var e=this;return s["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},s["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},505:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1 input-wrap_3dHA3",textarea:"textarea_1EdoS"}},506:function(e,t){e.exports={title:"title_BVO7e",popup:"popup_MPCqr",header:"header_1InIf",author:"author_28BiA",description:"description_D9rVN"}},507:function(e,t){e.exports={"meta-item":"meta-item_2cRyJ",book:"book_3Oqz_","book-meta":"book-meta_3glcZ","book-name":"book-name_2jIuZ meta-item_2cRyJ","book-author":"book-author_1VM7e meta-item_2cRyJ","book-cover":"book-cover_1jrK8","book-desc":"book-desc_xFFKl","book--card":"book--card_3FOky book_3Oqz_"}},508:function(e,t){e.exports={"book-list":"book-list_2s_Jl"}},509:function(e,t){e.exports={"section-title":"section-title_2Kv3D","book-list-section":"book-list-section_2CfDe",more:"more_mgQHg"}},512:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return{newestBooks:j.booksSelector(e),nextPage:k["default"].get(j.common.paginationLinkSelector("books")(e),"next.page",0)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(158),p=r(f),d=n(219),y=n(418),h=r(y),b=n(488),m=r(b),v=n(240),g=n(427),O=r(g),_=n(321),k=r(_),w=n(485),j=o(w),P=n(384),E=r(P),S=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},M=n(513),N=function(e){function t(e){return u(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),c(t,[{key:"loadMore",value:function(e){this.props.fetchBooks({merge:!0,page:e})}},{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this,t=this.props.nextPage;return p["default"].createElement(O["default"],{className:"archive"},p["default"].createElement("div",{className:"page-header"},p["default"].createElement(m["default"],{title:"所有书籍",bookEntities:this.props.newestBooks}),0!==t&&p["default"].createElement(h["default"],{onClick:function(){e.loadMore(t)},styleName:"btn-load-more",width:200,color:"white"},"加载更多")))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,v.fetchBooks)())}}]),t}(f.Component);N=S([(0,E["default"])(M)],N),t["default"]=(0,d.connect)(l,{fetchBooks:v.fetchBooks,fetchCollections:v.fetchCollections})(N)},513:function(e,t){e.exports={"btn-load-more":"btn-load-more_26sdQ"}}});