webpackJsonp([13],{58:function(e,t,n){var o=n(112);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{sourceMap:!1});o.locals&&(e.exports=o.locals)},77:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=n(1),f=o(u),s=n(2),p=o(s),d=n(10),m=function(e,t,n,o){var r,i=arguments.length,l=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(3>i?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},y=n(58),b=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.description,n=e.name,o=e.id,r=e.bookCovers,i=e.style,l=e.maxWidth;return f["default"].createElement("div",{className:"collection-item",styleName:"dark"===i?"item--dark":"item--light"},f["default"].createElement("div",{style:{maxWidth:l||"100%",margin:"0 auto"}},f["default"].createElement("div",{className:"row"},f["default"].createElement("div",{className:"col-md-6"},f["default"].createElement("h2",{styleName:"name"},f["default"].createElement(d.Link,{styleName:"link",to:"collections/"+o},n)),f["default"].createElement("div",{styleName:"desc"},t)),f["default"].createElement("div",{className:"col-md-6"},f["default"].createElement("ul",{styleName:"covers"},r.map(function(e,t){return f["default"].createElement("li",{key:t},f["default"].createElement("img",{src:e}))}))))))}}]),t}(u.Component);b=m([(0,p["default"])(y)],b),t["default"]=b},78:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=n(1),f=o(u),s=n(2),p=o(s),d=n(77),m=o(d),y=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b=function(e,t,n,o){var r,i=arguments.length,l=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(3>i?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},h=n(58),v=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.style,o=e.maxWidth;return f["default"].createElement("div",{styleName:"list",className:"clearfix"},t.map(function(e,t){return f["default"].createElement(m["default"],y({maxWidth:o,style:n,key:t},e))}))}}]),t}(u.Component);v=b([(0,p["default"])(h)],v),t["default"]=v},103:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=n(1),f=o(u),s=n(2),p=o(s),d=n(10),m=n(80),y=n(78),b=o(y),h=function(e,t,n,o){var r,i=arguments.length,l=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(3>i?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},v=n(58),O=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.title;return f["default"].createElement("div",{styleName:"section"},f["default"].createElement(m.Container,null,f["default"].createElement("h2",{styleName:"title"},n),f["default"].createElement(b["default"],{list:t}),f["default"].createElement(d.Link,{styleName:"view-more",to:"/collections"},"浏览更多书单")))}}]),t}(u.Component);O=h([(0,p["default"])(v)],O),t["default"]=O},104:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CollectionSection=t.CollectionList=t.CollectionItem=void 0;var r=n(103),i=o(r),l=n(77),c=o(l),a=n(78),u=o(a);t.CollectionItem=c["default"],t.CollectionList=u["default"],t.CollectionSection=i["default"],t["default"]=i["default"]},112:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".item_23Tis{width:100%;min-height:200px;position:relative;border-bottom:1px solid #000;padding:0 0 30px}.section_1Bdj3{background:#04082e;overflow:hidden;margin:40px 0}.covers_l92ZZ{overflow:hidden;position:absolute;right:30px;top:30px}.covers_l92ZZ li{float:left;margin:0 10px}.covers_l92ZZ li img{max-width:70px;box-shadow:0 2px 12px rgba(0,0,0,.32);overflow:hidden;border-radius:3px}.name_jeo6l{font-size:19.2px;font-size:1.2rem;color:#fff;margin-bottom:1em}.link_1OO-g{color:#fff}.link_1OO-g:hover{color:#ddd}.desc_MOBvr{color:#b4b4b4;font-size:16px;font-size:1rem}.title_bDgfw{margin:35px 0;font-size:24px;font-size:1.5rem;font-weight:700;color:#333;color:#fff}.list_1p40A{width:100%}.view-more_QQcb3{margin:20px 0;display:inline-block}.item--dark_1cOX3{border-color:#ddd}.item--dark_1cOX3 .link_1OO-g{color:#333}.item--dark_1cOX3 .desc_MOBvr,.item--dark_1cOX3 .link_1OO-g:hover{color:#666}",""]),t.locals={item:"item_23Tis","item--light":"item--light_2o150 item_23Tis",section:"section_1Bdj3",covers:"covers_l92ZZ",name:"name_jeo6l",link:"link_1OO-g",desc:"desc_MOBvr",title:"title_bDgfw",list:"list_1p40A","view-more":"view-more_QQcb3 link_1OO-g","item--dark":"item--dark_1cOX3 item_23Tis"}},280:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),u=o(a),f=n(8),s=n(11),p=n(104),d=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.fetchCollections()}},{key:"render",value:function(){var e=this.props.newestCollections,t=e.map(function(e){return{name:e.name,id:e.id,bookCovers:e.items.map(function(e){return e.cover}),description:e.description}});return u["default"].createElement("div",{className:"page-collections"},u["default"].createElement("div",{style:{maxWidth:800,margin:"0 auto"}},u["default"].createElement("h2",{className:"page-title"},"往期书单")),u["default"].createElement(p.CollectionList,{maxWidth:800,style:"dark",list:t}))}}]),t}(a.Component);t["default"]=(0,f.connect)(function(e){return{newestCollections:e.pagination.bookCollections.newest?e.pagination.bookCollections.newest.ids.map(function(t){return e.entities.bookCollections[t]}):[]}},{fetchCollections:s.fetchCollections})(d)}});