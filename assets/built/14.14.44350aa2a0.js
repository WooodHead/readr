webpackJsonp([14],{103:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),s=n(2),p=o(s),d=function(e,t,n,o){var r,l=arguments.length,a=3>l?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(3>l?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},y=n(116),m=function(e){function t(e){return r(this,t),l(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.className;"string"==typeof this.props.value&&(n="1"===n||"true"===n);var r=Boolean(n)?"on":"off";return f["default"].createElement("div",{className:o||"",styleName:"switcher-wrap"},this.props.title&&f["default"].createElement("span",null,this.props.title),f["default"].createElement("div",{onClick:function(t){if(e.props.onChange){var n=void 0;if(e.props.options){var o=e.props.options.map(function(e){return e.value}).indexOf(e.props.value);1===o?n=e.props.options[0].value:0===o?n=e.props.options[1].value:(n=e.props.options[0].value,console.error("当前数据有误，将使用默认数据！"))}else"string"==typeof e.props.value?console.error("没有给 options 时必须使用布尔型的 value！"):n=!e.props.value;e.props.onChange(n)}},styleName:"switcher--"+r},f["default"].createElement("div",{styleName:"switcher-button"}),f["default"].createElement("div",{styleName:"switcher-track"})))}}]),t}(c.Component);m=d([(0,p["default"])(y,{allowMultiple:!0})],m),t["default"]=m},104:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(103),l=o(r);t["default"]=l["default"]},116:function(e,t){e.exports={"switcher-wrap":"switcher-wrap_3UMAU",switcher:"switcher_G3n4_","switcher--off":"switcher--off_1EoOU","switcher--on":"switcher--on_2xiwO","switcher-button":"switcher-button_2kHGL","switcher-track":"switcher-track_xvhjg"}},311:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),f=n(6),s=n(8),p=n(4),d=o(p),y=n(313),m=o(y),h=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b=function(e){function t(e){r(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.state={showFav:!0},n}return a(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.fetchProfile()}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return c["default"].createElement(m["default"],h({},this.props.profile))}}]),t}(u.Component);t["default"]=(0,f.connect)(function(e){return{profile:d["default"].get(e.payloads,"profile",{})}},{sendNotification:s.sendNotification,fetchProfile:s.fetchProfile})(b)},312:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),s=n(104),p=o(s),d=n(2),y=o(d),m=function(e,t,n,o){var r,l=arguments.length,a=3>l?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(3>l?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},h=n(373),b=function(e){function t(e){return r(this,t),l(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.username,o=t.email,r=(t.encriptedPassword,t.showFav);return f["default"].createElement("div",{styleName:"settings"},f["default"].createElement("div",{className:"page-content"},f["default"].createElement("div",{className:"page-header"},f["default"].createElement("h1",{style:{marginBottom:0},className:"page-title"},"设置"),f["default"].createElement("span",null,"功能开发中，暂为只读")),f["default"].createElement("ul",{styleName:"options"},f["default"].createElement("li",{styleName:"option"},f["default"].createElement("h2",null,"用户名"),f["default"].createElement("span",{styleName:"option-input"},"readrweb.com/@",f["default"].createElement("strong",null,n)),f["default"].createElement("span",{styleName:"edit"},"编辑")),f["default"].createElement("li",{styleName:"option"},f["default"].createElement("h2",null,"邮箱"),f["default"].createElement("span",{styleName:"option-input"},o),f["default"].createElement("span",{styleName:"edit"},"编辑")),f["default"].createElement("li",{styleName:"option"},f["default"].createElement("h2",null,"密码"),f["default"].createElement("span",{styleName:"option-input"},"******"),f["default"].createElement("span",{styleName:"edit"},"编辑")),f["default"].createElement("li",{styleName:"option"},f["default"].createElement("h2",null,"公开展示我的收藏"),f["default"].createElement("span",{styleName:"option-desc"},"关闭后其他用户将无法查看您的收藏"),f["default"].createElement(p["default"],{styleName:"switcher",value:r,onChange:function(t){e.setState({showFav:t})}})))))}}]),t}(c.Component);b=m([(0,y["default"])(h,{allowMultiple:!0})],b),t["default"]=b},313:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(312),l=o(r);t["default"]=l["default"]},373:function(e,t){e.exports={settings:"settings_239Dg",options:"options_ADPll",option:"option_aC25y","option-input":"option-input_1K3I6","option-desc":"option-desc_3wAfQ","user-avatar":"user-avatar_1g7D4",edit:"edit_kzVtT",switcher:"switcher_sb9M0"}}});