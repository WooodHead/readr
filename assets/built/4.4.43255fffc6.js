webpackJsonp([4],{10:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),u=o(r);t["default"]=u["default"]},11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(28),u=o(r),i=n(10),l=o(i),a=n(12),c=o(a),s=n(13),f=o(s);t.Button=u["default"],t.Input=l["default"],t.SelectizeInput=c["default"],t.Textarea=f["default"]},12:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),u=o(r);t["default"]=u["default"]},13:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),u=o(r);t["default"]=u["default"]},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},y=n(19),b=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);return delete t.className,s["default"].createElement("div",{styleName:"input-wrap",className:this.props.className||""},s["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);b=d([(0,p["default"])(y,{allowMultiple:!0})],b),t["default"]=b},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(25),p=o(f),d=n(22),y=o(d),b=n(2),h=o(b),m=n(18),v=o(m),_=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},O=n(21),w=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputWrapClick=n.handleInputWrapClick.bind(n),n}return i(t,e),l(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.setState({showOptions:!1})}},{key:"handleInputWrapClick",value:function(){this.focusInput(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,u=this.props.value||"",i=this.props.options||[],l=o.length>0?0===u.length?16:16*u.length:"100%",a=o.length>0?"":this.props.placeholder,c=(0,y["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return s["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?s["default"].createElement("label",{className:"form-label"},n):null,s["default"].createElement("div",{styleName:c,onClick:this.handleInputWrapClick,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return s["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,s["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),s["default"].createElement("input",{style:{width:l},ref:function(t){e.input=t},value:u,placeholder:a,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==i.length||r)?s["default"].createElement("ul",{styleName:"query-results"},i.map(function(t,n){return t.disabled?s["default"].createElement("li",{key:n,className:"disabled"},t.name):s["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},s["default"].createElement("span",null,t.name))}),r?s["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",s["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(c.Component);w=_([(0,h["default"])(O,{allowMultiple:!0})],w),t["default"]=w},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},y=n(20),b=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this;return s["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},s["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);b=d([(0,p["default"])(y,{allowMultiple:!0})],b),t["default"]=b},19:function(e,t){e.exports={"input-wrap":"input-wrap_3dHA3",input:"input_2juBO"}},20:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1 input-wrap_3dHA3",textarea:"textarea_1EdoS"}},21:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},43:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(9),p=n(46),d=o(p),y=n(2),b=o(y),h=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},m=n(51),v=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showPopup:!1},n.showPopup=n.showPopup.bind(n),n.hidePopup=n.hidePopup.bind(n),n}return i(t,e),l(t,[{key:"showPopup",value:function(){this.setState({showPopup:!0})}},{key:"hidePopup",value:function(){this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this.props,t=e.showDesc,n=e.description,o=e.cover;return s["default"].createElement("div",{onMouseEnter:this.showPopup,onMouseLeave:this.hidePopup,styleName:"book--card"},s["default"].createElement(f.Link,{to:"/book/"+this.props.id},o&&s["default"].createElement("div",{styleName:"book-cover"},s["default"].createElement("img",{src:this.props.cover})),s["default"].createElement("div",{styleName:"book-meta"},s["default"].createElement("span",{title:this.props.title,styleName:"book-name"},this.props.title||"无标题"),s["default"].createElement("span",{styleName:"book-author"},this.props.authors||"作者不详"),t&&s["default"].createElement("span",{styleName:"book-desc"},n||"空"))),this.state.showPopup&&!this.props.disablePopup&&s["default"].createElement(d["default"],{bookId:this.props.id,title:this.props.title,author:this.props.authors,description:this.props.description}))}}]),t}(c.Component);v=h([(0,b["default"])(m,{allowMultiple:!0})],v),t["default"]=v},44:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),u=o(r);t["default"]=u["default"]},45:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(11),p=n(2),d=o(p),y=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},b=n(52),h=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.author,n=e.title,o=e.description,r=e.bookId;return s["default"].createElement("div",{styleName:"popup"},s["default"].createElement("div",{styleName:"header"},s["default"].createElement("h2",{styleName:"title"},n),s["default"].createElement("p",{styleName:"author"},t),s["default"].createElement(f.Button,{color:"blue",to:"/viewer/book/"+r},"阅读")),s["default"].createElement("div",{styleName:"description"},s["default"].createElement("p",null,o)))}}]),t}(c.Component);h=y([(0,d["default"])(b,{allowMultiple:!0})],h),t["default"]=h},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(45),u=o(r);t["default"]=u["default"]},47:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(44),p=o(f),d=n(2),y=o(d),b=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},h=n(53),m=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return s["default"].createElement("ul",{styleName:"book-list",className:"clearfix"},this.props.bookEntities&&0!==this.props.bookEntities.length?this.props.bookEntities.map(function(e,t){var n=e.title,o=e.authors,r=e.description,u=e.cover;return s["default"].createElement("li",{key:t},s["default"].createElement(p["default"],{id:e.id,title:n||"无标题",authors:o&&o.map(function(e){return e.name}).join(", ")||"未知作者",description:r,cover:u,disablePopup:!0}))}):s["default"].createElement("li",null,"暂无记录"))}}]),t}(c.Component);m=b([(0,y["default"])(h)],m),t["default"]=m},48:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),u=o(r);t["default"]=u["default"]},51:function(e,t){e.exports={"meta-item":"meta-item_2cRyJ",book:"book_3Oqz_","book-meta":"book-meta_3glcZ","book-name":"book-name_2jIuZ meta-item_2cRyJ","book-author":"book-author_1VM7e meta-item_2cRyJ","book-cover":"book-cover_1jrK8","book-desc":"book-desc_xFFKl","book--card":"book--card_3FOky book_3Oqz_"}},52:function(e,t){e.exports={title:"title_BVO7e",popup:"popup_MPCqr",header:"header_1InIf",author:"author_28BiA",description:"description_D9rVN"}},53:function(e,t){e.exports={"book-list":"book-list_2s_Jl"}},71:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(9),p=n(48),d=o(p),y=n(2),b=o(y),h=n(25),m=o(h),v=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},_=n(73),O=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.title,t=this.props.moreLink?this.props.moreLink:null;return s["default"].createElement("div",{styleName:"book-list-section"},this.props.title&&(t?s["default"].createElement("h2",{styleName:"section-title"},s["default"].createElement(f.Link,{to:t},e,s["default"].createElement(m["default"],{name:"arrowRight",size:20}))):s["default"].createElement("h2",{styleName:"section-title"},e)),s["default"].createElement(d["default"],{bookEntities:this.props.bookEntities}))}}]),t}(c.Component);O=v([(0,b["default"])(_,{allowMultiple:!0})],O),t["default"]=O},72:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(71),u=o(r);t["default"]=u["default"]},73:function(e,t){e.exports={"section-title":"section-title_2Kv3D","book-list-section":"book-list-section_2CfDe",more:"more_mgQHg"}},301:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(6),p=n(11),d=n(8),y=n(72),b=o(y),h=n(77),m=n(2),v=o(m),_=function(e,t,n,o){var r,u=arguments.length,i=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(3>u?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},O=n(364),w=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.fetchCollection(this.props.params.id)}},{key:"render",value:function(){var e=this,t=this.props.bookCollection?this.props.bookCollection:{items:[]},n=t.items;return s["default"].createElement("div",{className:"collection"},s["default"].createElement("div",{styleName:"header"},s["default"].createElement(h.Container,null,s["default"].createElement("div",{styleName:"title"},t.name),s["default"].createElement("div",{className:"sub-title"},"10 本书"),s["default"].createElement("div",{className:"book-slider"},s["default"].createElement(b["default"],{bookEntities:n})),s["default"].createElement(p.Button,{onClick:function(){e.props.sendNotification("功能开发中","warning")}},"收藏"))),s["default"].createElement("div",{className:"page-content"},s["default"].createElement(h.Container,null,s["default"].createElement("p",null,t.description))))}}]),t}(c.Component);w=_([(0,v["default"])(O)],w),t["default"]=(0,f.connect)(function(e,t){return{bookCollection:e.entities.bookCollections[t.params.id]}},{fetchCollection:d.fetchCollection,sendNotification:d.sendNotification})(w)},364:function(e,t){e.exports={header:"header_194wb",title:"title_2n8kf"}}});