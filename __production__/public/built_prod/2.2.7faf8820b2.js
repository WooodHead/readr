webpackJsonp([2],{55:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(4),p=n(s),d=o(22),y=n(d),b=o(62),m=n(b),h=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l},_=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={dynamicText:""},o}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval(function(){3===e.state.dynamicText.length?e.setState({dynamicText:""}):e.setState({dynamicText:e.state.dynamicText+"."})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.text,o=e.center,n=this.state.dynamicText,r=(0,y["default"])({"loading-wrap--center":o,"loading-wrap":!o});return f["default"].createElement("div",{styleName:r},f["default"].createElement("span",{styleName:"text-loading"},t+n))}}]),t}(c.Component);_=h([(0,p["default"])(m["default"])],_),_.defaultProps={text:"加载中"},t["default"]=_},56:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(55),i=n(r);t["default"]=i["default"]},62:function(e,t){e.exports={"text-loading":"text-loading_3efqh","loading-wrap":"loading-wrap_htyYz","loading-wrap--center":"loading-wrap--center_3PEIh"}},79:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(17),p=o(82),d=n(p),y=o(4),b=n(y),m=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l},h=o(101),_=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={showPopup:!1},o.showPopup=o.showPopup.bind(o),o.hidePopup=o.hidePopup.bind(o),o}return l(t,e),u(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,o=e.description,n=e.cover;return f["default"].createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},f["default"].createElement(s.Link,{to:"/book/"+this.props.id},n&&f["default"].createElement("div",{styleName:"book-cover"},f["default"].createElement("img",{src:this.props.cover})),f["default"].createElement("div",{styleName:"book-meta"},f["default"].createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),f["default"].createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&f["default"].createElement("span",{styleName:"book-desc"},o||"空"))),this.state.showPopup&&!this.props.disablePopup&&f["default"].createElement(d["default"],{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(c.Component);_=m([(0,b["default"])(h,{allowMultiple:!0})],_),t["default"]=_},80:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(79),i=n(r);t["default"]=i["default"]},81:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(29),p=o(4),d=n(p),y=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l},b=o(102),m=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.author,o=e.title,n=e.description,r=e.bookId;return f["default"].createElement("div",{styleName:"popup"},f["default"].createElement("div",{styleName:"header"},f["default"].createElement("h2",{styleName:"title"},o),f["default"].createElement("p",{styleName:"author"},t),f["default"].createElement(s.Button,{color:"blue",to:"/viewer/book/"+r},"阅读")),f["default"].createElement("div",{styleName:"description"},f["default"].createElement("p",null,n)))}}]),t}(c.Component);m=y([(0,d["default"])(b,{allowMultiple:!0})],m),t["default"]=m},82:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(81),i=n(r);t["default"]=i["default"]},83:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(80),p=n(s),d=o(4),y=n(d),b=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l},m=o(103),h=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var o=e.title,n=e.authors,r=e.description,i=e.cover;return f["default"].createElement("li",{key:t},f["default"].createElement(p["default"],{id:e.id,title:o||"无标题",authors:n&&n.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:i,disablePopup:!0}))}):f["default"].createElement("li",null,"暂无记录"))}}]),t}(c.Component);h=b([(0,y["default"])(m)],h),t["default"]=h},84:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(83),i=n(r);t["default"]=i["default"]},101:function(e,t){e.exports={"meta-item":"meta-item_2cRyJ",book:"book_3Oqz_","book-meta":"book-meta_3glcZ","book-name":"book-name_2jIuZ meta-item_2cRyJ","book-author":"book-author_1VM7e meta-item_2cRyJ","book-cover":"book-cover_1jrK8","book-desc":"book-desc_xFFKl","book--card":"book--card_3FOky book_3Oqz_"}},102:function(e,t){e.exports={title:"title_BVO7e",popup:"popup_MPCqr",header:"header_1InIf",author:"author_28BiA",description:"description_D9rVN"}},103:function(e,t){e.exports={"book-list":"book-list_2s_Jl"}},127:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(17),p=o(84),d=n(p),y=o(56),b=n(y),m=o(4),h=n(m),_=o(86),v=n(_),O=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l},w=o(137),j=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.isFetching,o=e.title,n=e.moreLink,r=e.bookEntities;return f["default"].createElement("div",{styleName:"book-list-section"},this.props.title&&(n?f["default"].createElement("h2",{styleName:"section-title"},f["default"].createElement(s.Link,{to:n},o,f["default"].createElement(v["default"],{name:"arrowRight",size:20}))):f["default"].createElement("h2",{styleName:"section-title"},o)),t&&0===r.length?f["default"].createElement(b["default"],null):f["default"].createElement(d["default"],{bookEntities:r}))}}]),t}(c.Component);j=O([(0,h["default"])(w,{allowMultiple:!0})],j),t["default"]=j},128:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(127),i=n(r);t["default"]=i["default"]},137:function(e,t){e.exports={"section-title":"section-title_2Kv3D","book-list-section":"book-list-section_2CfDe",more:"more_mgQHg"}},655:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(1),f=n(c),s=o(8),p=o(29),d=o(10),y=o(128),b=n(y),m=o(107),h=o(4),_=n(h),v=function(e,t,o,n){var r,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l},O=o(984),w=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.fetchCollection(this.props.params.id)}},{key:"render",value:function(){var e=this,t=this.props.bookCollection?this.props.bookCollection:{items:[]},o=t.items;return f["default"].createElement("div",{className:"collection"},f["default"].createElement("div",{styleName:"header"},f["default"].createElement(m.Container,null,f["default"].createElement("div",{styleName:"title"},t.name),f["default"].createElement("div",{className:"sub-title"},"10 本书"),f["default"].createElement("div",{className:"book-slider"},f["default"].createElement(b["default"],{bookEntities:o})),f["default"].createElement(p.Button,{onClick:function(){e.props.sendNotification("功能开发中","warning")}},"收藏"))),f["default"].createElement("div",{className:"page-content"},f["default"].createElement(m.Container,null,f["default"].createElement("p",null,t.description))))}}]),t}(c.Component);w=v([(0,_["default"])(O)],w),t["default"]=(0,s.connect)(function(e,t){return{bookCollection:e.entities.bookCollections[t.params.id]}},{fetchCollection:d.fetchCollection,sendNotification:d.sendNotification})(w)},984:function(e,t){e.exports={header:"header_194wb",title:"title_2n8kf"}}});