webpackJsonp([1],{11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),i=o(r);t["default"]=i["default"]},12:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(28),i=o(r),u=n(11),l=o(u),a=n(13),c=o(a),s=n(14),f=o(s);t.Button=i["default"],t.Input=l["default"],t.SelectizeInput=c["default"],t.Textarea=f["default"]},13:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),i=o(r);t["default"]=i["default"]},14:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),i=o(r);t["default"]=i["default"]},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},y=n(19),h=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),l(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);return delete t.className,s["default"].createElement("div",{styleName:"input-wrap",className:this.props.className||""},s["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(24),p=o(f),d=n(22),y=o(d),h=n(2),b=o(h),m=n(29),v=o(m),g=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},w=n(21),_=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputWrapClick=n.handleInputWrapClick.bind(n),n}return u(t,e),l(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.setState({showOptions:!1})}},{key:"handleInputWrapClick",value:function(){this.focusInput(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,i=this.props.value||"",u=this.props.options||[],l=o.length>0?0===i.length?16:16*i.length:"100%",a=o.length>0?"":this.props.placeholder,c=(0,y["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return s["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?s["default"].createElement("label",{className:"form-label"},n):null,s["default"].createElement("div",{styleName:c,onClick:this.handleInputWrapClick,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return s["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,s["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),s["default"].createElement("input",{style:{width:l},ref:function(t){e.input=t},value:i,placeholder:a,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==u.length||r)?s["default"].createElement("ul",{styleName:"query-results"},u.map(function(t,n){return t.disabled?s["default"].createElement("li",{key:n,className:"disabled"},t.name):s["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},s["default"].createElement("span",null,t.name))}),r?s["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",s["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(c.Component);_=g([(0,b["default"])(w,{allowMultiple:!0})],_),t["default"]=_},18:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},y=n(20),h=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),l(t,[{key:"render",value:function(){var e=this;return s["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},s["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},19:function(e,t){e.exports={"input-wrap":"input-wrap_3dHA3",input:"input_2juBO"}},20:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1 input-wrap_3dHA3",textarea:"textarea_1EdoS"}},21:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},23:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return e===t}function r(e){var t=arguments.length<=1||void 0===arguments[1]?o:arguments[1],n=null,r=null;return function(){for(var o=arguments.length,i=Array(o),u=0;o>u;u++)i[u]=arguments[u];return null!==n&&n.length===i.length&&i.every(function(e,o){return t(e,n[o])})?r:(r=e.apply(void 0,i),n=i,r)}}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+n+"]"))}return t}function u(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;t>r;r++)o[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),u=0;t>u;u++)r[u]=arguments[u];var l=0,a=r.pop(),c=i(r),s=e.apply(void 0,[function(){return l++,a.apply(void 0,arguments)}].concat(o)),f=function(e,t){for(var o=arguments.length,r=Array(o>2?o-2:0),i=2;o>i;i++)r[i-2]=arguments[i];var u=c.map(function(n){return n.apply(void 0,[e,t].concat(r))});return s.apply(void 0,n(u))};return f.resultFunc=a,f.recomputations=function(){return l},f.resetRecomputations=function(){return l=0},f}}function l(){return u(r).apply(void 0,arguments)}function a(e){var t=arguments.length<=1||void 0===arguments[1]?l:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),o=0;e>o;o++)t[o]=arguments[o];return t.reduce(function(e,t,o){return e[n[o]]=t,e},{})})}t.__esModule=!0,t.defaultMemoize=r,t.createSelectorCreator=u,t.createSelector=l,t.createStructuredSelector=a},27:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.common=t.usersSelector=t.booksSelector=t.booksSearchAsOptions=t.authorsAsOptions=t.doubanBooksAsOptions=t.searchBooksSelector=t.queryAuthorsSelector=t.queryDoubanBooksSelector=void 0;var r=n(32);Object.keys(r).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var i=n(23),u=o(r),l=t.queryDoubanBooksSelector=function(e){return(0,i.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"doubanBooks",paginationName:"doubanBooks",paginationQuery:e}),function(e){return e})},a=t.queryAuthorsSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"authors",paginationName:"authors",paginationQuery:e})},c=t.searchBooksSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationQuery:e})};t.doubanBooksAsOptions=function(e){return(0,i.createSelector)(l(e),function(e){return e.map(function(e){return{name:e.title,value:e.id,additional:{description:e.summary,cover:e.images.large,author:e.author.join(", ")}}})})},t.authorsAsOptions=function(e){return(0,i.createSelector)(a(e),function(e){return e.map(function(e){return{name:e.name,value:e.id}})})},t.booksSearchAsOptions=function(e){return(0,i.createSelector)(c(e),function(e){return e.map(function(e){return{name:e.title,value:e.id}})})},t.booksSelector=(0,i.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationKey:"default"}),function(e){return e}),t.usersSelector=(0,r.selectPaginatedEntities)({entitiesName:"users",paginationName:"users",paginationKey:"default"});t.common=u},32:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectPaginatedEntities=t.paginationLinkSelector=void 0;var r=n(23),i=n(5),u=o(i),l=function(e){return function(t){return t.entities[e]||{}}},a=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return u["default"].get(n.pagination,e+"."+t+".ids",[])}},c=(t.paginationLinkSelector=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return u["default"].pick(u["default"].get(n.pagination,e+"."+t,{}),["next","last"])}},function(e,t){return function(n){return u["default"].get(n.pagination,[e,"query",t,"ids"],[])}});t.selectPaginatedEntities=function(e){var t=e.entitiesName,n=e.paginationName,o=e.paginationKey,i=e.paginationQuery,u=void 0;return u=i?c(n,i):a(n,o),(0,r.createSelector)(l(t),u,function(e,t){return t.map(function(t){return e[t]})})}},44:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(10),p=n(47),d=o(p),y=n(2),h=o(y),b=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},m=n(52),v=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={showPopup:!1},n.showPopup=n.showPopup.bind(n),n.hidePopup=n.hidePopup.bind(n),n}return u(t,e),l(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,n=e.description,o=e.cover;return s["default"].createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},s["default"].createElement(f.Link,{to:"/book/"+this.props.id},o&&s["default"].createElement("div",{styleName:"book-cover"},s["default"].createElement("img",{src:this.props.cover})),s["default"].createElement("div",{styleName:"book-meta"},s["default"].createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),s["default"].createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&s["default"].createElement("span",{styleName:"book-desc"},n||"空"))),this.state.showPopup&&!this.props.disablePopup&&s["default"].createElement(d["default"],{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(c.Component);v=b([(0,h["default"])(m,{allowMultiple:!0})],v),t["default"]=v},45:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(44),i=o(r);t["default"]=i["default"]},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(12),p=n(2),d=o(p),y=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},h=n(53),b=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.author,n=e.title,o=e.description,r=e.bookId;return s["default"].createElement("div",{styleName:"popup"},s["default"].createElement("div",{styleName:"header"},s["default"].createElement("h2",{styleName:"title"},n),s["default"].createElement("p",{styleName:"author"},t),s["default"].createElement(f.Button,{color:"blue",to:"/viewer/book/"+r},"阅读")),s["default"].createElement("div",{styleName:"description"},s["default"].createElement("p",null,o)))}}]),t}(c.Component);b=y([(0,d["default"])(h,{allowMultiple:!0})],b),t["default"]=b},47:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(46),i=o(r);t["default"]=i["default"]},48:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(45),p=o(f),d=n(2),y=o(d),h=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},b=n(54),m=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return s["default"].createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var n=e.title,o=e.authors,r=e.description,i=e.cover;return s["default"].createElement("li",{key:t},s["default"].createElement(p["default"],{id:e.id,title:n||"无标题",authors:o&&o.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:i,disablePopup:!0}))}):s["default"].createElement("li",null,"暂无记录"))}}]),t}(c.Component);m=h([(0,y["default"])(b)],m),t["default"]=m},49:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(48),i=o(r);t["default"]=i["default"]},52:function(e,t){e.exports={"meta-item":"meta-item_2cRyJ",book:"book_3Oqz_","book-meta":"book-meta_3glcZ","book-name":"book-name_2jIuZ meta-item_2cRyJ","book-author":"book-author_1VM7e meta-item_2cRyJ","book-cover":"book-cover_1jrK8","book-desc":"book-desc_xFFKl","book--card":"book--card_3FOky book_3Oqz_"}},53:function(e,t){e.exports={title:"title_BVO7e",popup:"popup_MPCqr",header:"header_1InIf",author:"author_28BiA",description:"description_D9rVN"}},54:function(e,t){e.exports={"book-list":"book-list_2s_Jl"}},73:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(10),p=n(49),d=o(p),y=n(2),h=o(y),b=n(24),m=o(b),v=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},g=n(75),w=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props.title,t=this.props.moreLink?this.props.moreLink:null;return s["default"].createElement("div",{styleName:"book-list-section"},this.props.title&&(t?s["default"].createElement("h2",{styleName:"section-title"},s["default"].createElement(f.Link,{to:t},e,s["default"].createElement(m["default"],{name:"arrowRight",size:20}))):s["default"].createElement("h2",{styleName:"section-title"},e)),s["default"].createElement(d["default"],{bookEntities:this.props.bookEntities}))}}]),t}(c.Component);w=v([(0,h["default"])(g,{allowMultiple:!0})],w),t["default"]=w},74:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(73),i=o(r);t["default"]=i["default"]},75:function(e,t){e.exports={"section-title":"section-title_2Kv3D","book-list-section":"book-list-section_2CfDe",more:"more_mgQHg"}},281:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=n(29),y=o(d),h=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},b=n(370),m=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={showMenu:!1},n.toggleDropdown=n.toggleDropdown.bind(n),n.hideExpended=n.hideExpended.bind(n),n}return u(t,e),l(t,[{key:"toggleDropdown",value:function(e){console.log(e.target),this.setState({showMenu:!this.state.showMenu})}},{key:"hideExpended",value:function(e){console.log("Hehe: global click"),console.log(e.target),(0,y["default"])(this.dropdown,e.target)?this.setState({showMenu:!this.state.showMenu}):this.setState({showMenu:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.hideExpended)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.hideExpended)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.style;return s["default"].createElement("div",{ref:function(t){e.dropdown=t},styleName:"dropdown",className:n||""},s["default"].createElement("span",{styleName:"dropdown-toggle"},s["default"].createElement("span",null,this.props.title),s["default"].createElement("span",{styleName:"dropdown-caret"})),this.state.showMenu&&s["default"].createElement("div",{styleName:"dark"===o?"dropdown-menu--dark":"dropdown-menu"},s["default"].createElement("ul",null,this.props.children)))}}]),t}(c.Component);m=h([(0,p["default"])(b,{allowMultiple:!0})],m),t["default"]=m},297:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{userBooks:[],newestBooks:b.booksSelector(e),session:e.session,bookCollections:k["default"].get(e.pagination,"bookCollections.default",null)?e.pagination.bookCollections["default"].ids.map(function(t){return e.entities.bookCollections[t]}):[],bookShelf:k["default"].get(e.payloads,"bookShelf.data",[])}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(1),p=r(f),d=n(7),y=n(9),h=n(27),b=o(h),m=n(74),v=r(m),g=n(34),w=r(g),_=n(12),O=n(5),k=r(O),E=n(2),j=r(E),P=n(81),S=n(281),C=r(S),M=function(e,t,n,o){var r,i=arguments.length,u=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(u=(3>i?r(u):i>3?r(t,n,u):r(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u},N=n(373),R=function(e){function t(e){i(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showRecentReading:!1},n}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks(),this.props.fetchCollections();
}},{key:"componentWillReceiveProps",value:function(e){this.props.session.isFetching&&!e.session.isFetching&&"visitor"!==e.session.user.role&&this.setState({showRecentReading:!0})}},{key:"render",value:function(){var e=this.props,t=e.newestBooks,n=e.bookCollections;return n=n.map(function(e){return{name:e.name,id:e.id,bookCovers:e.items.map(function(e){return e.cover}),description:e.description}}),p["default"].createElement(w["default"],{bodyClass:"home"},"visitor"===this.props.session.user.role&&this.props.session.isFetching===!1?p["default"].createElement("div",{styleName:"hero-image"},p["default"].createElement(P.Container,null,p["default"].createElement("div",{styleName:"logo"},"Readr"),p["default"].createElement("h1",{styleName:"page-title"},"新的阅读体验"),p["default"].createElement(_.Button,{to:"/signup"},"现在加入"))):null,p["default"].createElement(C["default"],{title:p["default"].createElement("span",null,"wtf: ",p["default"].createElement("span",null,"hehhehehe"))},"heheheheheeh"),p["default"].createElement(C["default"],{title:p["default"].createElement("span",null,"wtf: ",p["default"].createElement("span",null,"hehhehehe"))},"heheheheheeh222"),p["default"].createElement(P.Container,null,p["default"].createElement(v["default"],{bookEntities:t.slice(0,6),title:"新书速递",moreLink:"/browse"})))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,y.fetchBooks)())}}]),t}(f.Component);R=M([(0,j["default"])(N)],R),t["default"]=(0,d.connect)(a,{fetchBooks:y.fetchBooks,fetchCollections:y.fetchCollections,sendNotification:y.sendNotification})(R)},370:function(e,t){e.exports={"dropdown-item":"dropdown-item_18QFA light-link_5hzvC","light-link":"light-link_5hzvC",dropdown:"dropdown_3EEwe","dropdown-toggle":"dropdown-toggle_3nQk9","dropdown-menu":"dropdown-menu_2yHgh","dropdown-caret":"dropdown-caret_t8dGY",sep:"sep_3xNmb","dropdown-menu--dark":"dropdown-menu--dark_2uZxh dropdown-menu_2yHgh"}},373:function(e,t){e.exports={"page-title":"page-title_Z366V","hero-image":"hero-image_14ZUX",logo:"logo_siT7A",btn:"btn_1dcmq"}}});