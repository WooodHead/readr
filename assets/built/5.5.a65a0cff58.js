webpackJsonp([5],{519:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(158),a=o(u),f=n(222),s=n(243),p=n(520),y=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.fetchCollections()}},{key:"render",value:function(){var e=this.props.newestCollections,t=e.map(function(e){return{name:e.name,id:e.id,bookCovers:e.items.map(function(e){return e.cover}),description:e.description}});return a["default"].createElement("div",{className:"page-collections"},a["default"].createElement("div",{style:{maxWidth:800,margin:"0 auto"}},a["default"].createElement("h2",{className:"page-title"},"往期书单")),a["default"].createElement(p.CollectionList,{maxWidth:800,style:"dark",list:t}))}}]),t}(u.Component);t["default"]=(0,f.connect)(function(e){return{newestCollections:e.pagination.bookCollections.newest?e.pagination.bookCollections.newest.ids.map(function(t){return e.entities.bookCollections[t]}):[]}},{fetchCollections:s.fetchCollections})(y)},520:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CollectionSection=t.CollectionList=t.CollectionItem=void 0;var r=n(521),i=o(r),l=n(523),c=o(l),u=n(522),a=o(u);t.CollectionItem=c["default"],t.CollectionList=a["default"],t.CollectionSection=i["default"],t["default"]=i["default"]},521:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=n(158),f=o(a),s=n(387),p=o(s),y=n(163),d=n(425),m=n(522),b=o(m),h=function(e,t,n,o){var r,i=arguments.length,l=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(3>i?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},v=n(524),O=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.title;return f["default"].createElement("div",{styleName:"section"},f["default"].createElement(d.Container,null,f["default"].createElement("h2",{styleName:"title"},n),f["default"].createElement(b["default"],{list:t}),f["default"].createElement(y.Link,{styleName:"view-more",to:"/collections"},"浏览更多书单")))}}]),t}(a.Component);O=h([(0,p["default"])(v)],O),t["default"]=O},522:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=n(158),f=o(a),s=n(387),p=o(s),y=n(523),d=o(y),m=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b=function(e,t,n,o){var r,i=arguments.length,l=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(3>i?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},h=n(524),v=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.style,o=e.maxWidth;return f["default"].createElement("div",{styleName:"list",className:"clearfix"},t.map(function(e,t){return f["default"].createElement(d["default"],m({maxWidth:o,style:n,key:t},e))}))}}]),t}(a.Component);v=b([(0,p["default"])(h)],v),t["default"]=v},523:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=n(158),f=o(a),s=n(387),p=o(s),y=n(163),d=function(e,t,n,o){var r,i=arguments.length,l=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(3>i?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},m=n(524),b=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.description,n=e.name,o=e.id,r=e.bookCovers,i=e.style,l=e.maxWidth;return f["default"].createElement("div",{className:"collection-item",styleName:"dark"===i?"item--dark":"item--light"},f["default"].createElement("div",{style:{maxWidth:l||"100%",margin:"0 auto"}},f["default"].createElement("div",{className:"row"},f["default"].createElement("div",{className:"col-md-6"},f["default"].createElement("h2",{styleName:"name"},f["default"].createElement(y.Link,{styleName:"link",to:"collections/"+o},n)),f["default"].createElement("div",{styleName:"desc"},t)),f["default"].createElement("div",{className:"col-md-6"},f["default"].createElement("ul",{styleName:"covers"},r.map(function(e,t){return f["default"].createElement("li",{key:t},f["default"].createElement("img",{src:e}))}))))))}}]),t}(a.Component);b=d([(0,p["default"])(m)],b),t["default"]=b},524:function(e,t){e.exports={item:"item_23Tis","item--light":"item--light_2o150 item_23Tis",section:"section_1Bdj3",covers:"covers_l92ZZ",name:"name_jeo6l",link:"link_1OO-g",desc:"desc_MOBvr",title:"title_bDgfw",list:"list_1p40A","view-more":"view-more_QQcb3 link_1OO-g","item--dark":"item--dark_1cOX3 item_23Tis"}}});