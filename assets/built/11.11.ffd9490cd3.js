webpackJsonp([11],{9:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),a=o(r);t["default"]=a["default"]},11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(26),a=o(r),u=n(9),i=o(u),l=n(12),s=o(l),c=n(13),p=o(c);t.Button=a["default"],t.Input=i["default"],t.SelectizeInput=s["default"],t.Textarea=p["default"]},12:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),a=o(r);t["default"]=a["default"]},13:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),a=o(r);t["default"]=a["default"]},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),p=n(2),f=o(p),d=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},h=n(18),y=function(e){function t(e){return r(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);return delete t.className,c["default"].createElement("div",{styleName:"input-wrap",className:this.props.className||""},c["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(s.Component);y=d([(0,f["default"])(h,{allowMultiple:!0})],y),t["default"]=y},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),p=n(23),f=o(p),d=n(21),h=o(d),y=n(2),m=o(y),b=n(30),v=o(b),O=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},g=n(20),w=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputWrapClick=n.handleInputWrapClick.bind(n),n}return u(t,e),i(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.setState({showOptions:!1})}},{key:"handleInputWrapClick",value:function(){this.focusInput(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,a=this.props.value||"",u=this.props.options||[],i=o.length>0?0===a.length?16:16*a.length:"100%",l=o.length>0?"":this.props.placeholder,s=(0,h["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return c["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?c["default"].createElement("label",{className:"form-label"},n):null,c["default"].createElement("div",{styleName:s,onClick:this.handleInputWrapClick,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return c["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,c["default"].createElement(f["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),c["default"].createElement("input",{style:{width:i},ref:function(t){e.input=t},value:a,placeholder:l,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==u.length||r)?c["default"].createElement("ul",{styleName:"query-results"},u.map(function(t,n){return t.disabled?c["default"].createElement("li",{key:n,className:"disabled"},t.name):c["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},c["default"].createElement("span",null,t.name))}),r?c["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",c["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(s.Component);w=O([(0,m["default"])(g,{allowMultiple:!0})],w),t["default"]=w},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),p=n(2),f=o(p),d=function(e,t,n,o){var r,a=arguments.length,u=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>a?r(u):a>3?r(t,n,u):r(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},h=n(19),y=function(e){function t(e){return r(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),i(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},c["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(s.Component);y=d([(0,f["default"])(h,{allowMultiple:!0})],y),t["default"]=y},18:function(e,t){e.exports={"input-wrap":"input-wrap_3dHA3",input:"input_2juBO"}},19:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1 input-wrap_3dHA3",textarea:"textarea_1EdoS"}},20:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},318:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),c=o(s),p=n(5),f=n(10),d=n(58),h=n(78),y=o(h),m=n(8),b=n(11),v=n(32),O=o(v),g=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={username:"",email:"",password:""},n}return i(t,e),l(t,[{key:"handleSignup",value:function(e){var t=this;e.preventDefault();var n={username:this.state.username,email:this.state.email,password:this.state.password};(0,y["default"])(d.ApiRoots.LOCAL+"users",{method:"POST",data:n}).then(function(e){t.props.sendNotification("注册成功！"),setTimeout(function(){f.browserHistory.push("/")},600)},function(e){t.props.sendNotification(e.message,"error")})}},{key:"handleInput",value:function(e){this.setState(r({},e.target.name,e.target.value))}},{key:"render",value:function(){return c["default"].createElement(O["default"],{title:"注册"},c["default"].createElement("form",{className:"content-container",method:"post",action:"/signup"},c["default"].createElement("h1",{className:"page-title"},"加入 Readr"),c["default"].createElement(b.Input,{onChange:this.handleInput.bind(this),value:this.state.username,name:"username",placeholder:"用户名"}),c["default"].createElement(b.Input,{onChange:this.handleInput.bind(this),value:this.state.email,name:"email",placeholder:"邮箱"}),c["default"].createElement(b.Input,{onChange:this.handleInput.bind(this),value:this.state.password,name:"password",placeholder:"密码 ",type:"password"}),c["default"].createElement(b.Button,{className:"z1",color:"blue",onClick:this.handleSignup.bind(this)},"注册"),c["default"].createElement("p",{className:"hint"},"已有账号？",c["default"].createElement(f.Link,{to:"/signin"},"登录"))))}}]),t}(s.Component);t["default"]=(0,p.connect)(function(e){return{notification:e.components.notification,user:e.user}},{sendNotification:m.sendNotification})(g)}});