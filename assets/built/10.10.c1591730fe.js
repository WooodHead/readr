webpackJsonp([10],{10:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),u=o(r);t["default"]=u["default"]},11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(28),u=o(r),l=n(10),a=o(l),i=n(12),c=o(i),s=n(13),f=o(s);t.Button=u["default"],t.Input=a["default"],t.SelectizeInput=c["default"],t.Textarea=f["default"]},12:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),u=o(r);t["default"]=u["default"]},13:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),u=o(r);t["default"]=u["default"]},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,l=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(3>u?r(l):u>3?r(t,n,l):r(t,n))||l);return u>3&&l&&Object.defineProperty(t,n,l),l},y=n(18),h=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),a(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);return delete t.className,s["default"].createElement("div",{styleName:"input-wrap",className:this.props.className||""},s["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(24),p=o(f),d=n(21),y=o(d),h=n(2),b=o(h),m=n(32),v=o(m),_=function(e,t,n,o){var r,u=arguments.length,l=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(3>u?r(l):u>3?r(t,n,l):r(t,n))||l);return u>3&&l&&Object.defineProperty(t,n,l),l},O=n(20),g=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputWrapClick=n.handleInputWrapClick.bind(n),n}return l(t,e),a(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.setState({showOptions:!1})}},{key:"handleInputWrapClick",value:function(){this.focusInput(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,u=this.props.value||"",l=this.props.options||[],a=o.length>0?0===u.length?16:16*u.length:"100%",i=o.length>0?"":this.props.placeholder,c=(0,y["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return s["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?s["default"].createElement("label",{className:"form-label"},n):null,s["default"].createElement("div",{styleName:c,onClick:this.handleInputWrapClick,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return s["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,s["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),s["default"].createElement("input",{style:{width:a},ref:function(t){e.input=t},value:u,placeholder:i,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==l.length||r)?s["default"].createElement("ul",{styleName:"query-results"},l.map(function(t,n){return t.disabled?s["default"].createElement("li",{key:n,className:"disabled"},t.name):s["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},s["default"].createElement("span",null,t.name))}),r?s["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",s["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(c.Component);g=_([(0,b["default"])(O,{allowMultiple:!0})],g),t["default"]=g},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(2),p=o(f),d=function(e,t,n,o){var r,u=arguments.length,l=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(3>u?r(l):u>3?r(t,n,l):r(t,n))||l);return u>3&&l&&Object.defineProperty(t,n,l),l},y=n(19),h=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),a(t,[{key:"render",value:function(){var e=this;return s["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},s["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(c.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},18:function(e,t){e.exports={"input-wrap":"input-wrap_3dHA3",input:"input_2juBO"}},19:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1 input-wrap_3dHA3",textarea:"textarea_1EdoS"}},20:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},282:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),s=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"loading-wrap"},c["default"].createElement("span",{className:"icon icon-loading"}))}}]),t}(i.Component);t["default"]=s},283:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(282),u=o(r);t["default"]=u["default"]},297:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),s=o(c),f=n(6),p=n(8),d=n(283),y=o(d),h=n(11),b=n(4),m=o(b),v=n(34),_=o(v),O=n(2),g=o(O),w=function(e,t,n,o){var r,u=arguments.length,l=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(3>u?r(l):u>3?r(t,n,l):r(t,n))||l);return u>3&&l&&Object.defineProperty(t,n,l),l},k=n(371),j=function(e){function t(e){r(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.bookId=e.params.id,n}return l(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.fetchBook(this.bookId)}},{key:"render",value:function(){var e=this.props.bookInfo?this.props.bookInfo:{};return s["default"].createElement(_["default"],{bodyClass:"book-info",title:e.title},s["default"].createElement("article",{styleName:"book-info-container",className:"container"},m["default"].isEmpty(e)&&s["default"].createElement(y["default"],null),s["default"].createElement("div",{styleName:"book-detail"},s["default"].createElement("header",{styleName:"header"},s["default"].createElement("div",{styleName:"left-col"},e.cover&&s["default"].createElement("div",{styleName:"book-cover"},s["default"].createElement("img",{styleName:"img",src:e.cover}))),s["default"].createElement("div",{styleName:"right-col"},s["default"].createElement("h1",{styleName:"book-name"},e.title||"无标题"),s["default"].createElement("div",{styleName:"book-author"},s["default"].createElement("strong",null,"作者：",e.authors&&e.authors.map(function(e){return e.name}).join(", ")||"未知")),s["default"].createElement("div",null,s["default"].createElement(h.Button,{styleName:"btn-read",to:"/viewer/book/"+e.id,color:"blue"},"阅读")))),e.description&&s["default"].createElement("div",{styleName:"content"},s["default"].createElement("h2",{styleName:"desc"},"内容简介"),s["default"].createElement("p",null,e.description)))))}}],[{key:"fetchData",value:function(e){var t=e.store,n=e.params;return t.dispatch((0,p.fetchBook)(n.id))}}]),t}(c.Component);j=w([(0,g["default"])(k,{allowMultiple:!0})],j),t["default"]=(0,f.connect)(function(e,t){return{bookInfo:e.entities.books[t.params.id]}},{fetchBook:p.fetchBook})(j)},371:function(e,t){e.exports={"book-detail":"book-detail_2izVJ","book-info-container":"book-info-container_2FwVR",header:"header_1vo0K","btn-read":"btn-read_3Euwb","left-col":"left-col_2GWeo","right-col":"right-col_2_r1p","book-name":"book-name_jLvuB","book-author":"book-author_-eVvW","book-cover":"book-cover_1QJYy",img:"img_2XZDg",content:"content_1uo-e",desc:"desc_3yZtT"}}});