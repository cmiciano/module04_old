/*! For license information please see employees.bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={2767:(e,t,r)=>{var n=r(6540),o=r(5338),a=r(4976),i=r(9716),l=r(4448),c=r(7767),u=r(763),s=r(6052),f=r(2431),m=r(5615),p=r(8032);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function h(){var e,t,r=(0,c.Zp)(),o=(e=(0,a.ok)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return n.createElement(u.A,null,n.createElement(u.A.Header,{as:"h5"},"Filter"),n.createElement(u.A.Body,null,n.createElement(u.A.Text,null,"Currently Employed:"," ",n.createElement("select",{value:o.get("employed")||"",onChange:function(e){return r(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},n.createElement("option",{value:""},"All"),n.createElement("option",{value:"true"},"Employed"),n.createElement("option",{value:"false"},"Not Employed")))))}var d=r(3048),v=r(4479),E=r(1105);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function w(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}function A(e,t,r){return t=O(t),function(e,t){if(t&&("object"==b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,x()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}var S=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,t)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(e),e.handleShowModal=e.handleShowModal.bind(e),e.handleHideModal=e.handleHideModal.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(t,e),r=t,(o=[{key:"handleShowModal",value:function(){this.setState({modalVisible:!0})}},{key:"handleHideModal",value:function(){this.setState({modalVisible:!1})}},{key:"handleSubmit",value:function(e){var t=document.forms.employeeAdd,r={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(r),t.name.value="",t.ext.value="",t.email.value="",t.title.value="",this.setState({modalVisible:!1})}},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"addEmployee"},n.createElement(m.A,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),n.createElement(p.A,{show:this.state.modalVisible,onHide:this.handleHideModal,centered:!0},n.createElement(p.A.Header,{closeButton:!0},n.createElement(p.A.Title,null,"Add New Employee")),n.createElement(p.A.Body,null,n.createElement(d.A,{fluid:!0},n.createElement("form",{name:"employeeAdd"},n.createElement(v.A,null,n.createElement(E.A,{md:3},"Name:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"name"}))),n.createElement(v.A,null,n.createElement(E.A,{md:3},"Extension:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"ext",maxLength:4}))),n.createElement(v.A,null,n.createElement(E.A,{md:3},"Email:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"email"}))),n.createElement(v.A,null,n.createElement(E.A,{md:3},"Title:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"title"})))))),n.createElement(p.A.Footer,null,n.createElement(m.A,{type:"submit",variant:"success",size:"sm",className:"mt-4",onClick:this.handleSubmit},"Add Employee"))))}}])&&g(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(n.Component);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function _(){_=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),l=new N(n||[]);return o(i,"_invoke",{value:S(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",p="suspendedYield",y="executing",h="completed",d={};function v(){}function E(){}function b(){}var g={};u(g,i,(function(){return this}));var w=Object.getPrototypeOf,A=w&&w(w(C([])));A&&A!==r&&n.call(A,i)&&(g=A);var x=b.prototype=v.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(o,a,i,l){var c=f(e[o],e,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==L(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function S(t,r,n){var o=m;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=k(l,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?h:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=h,n.method="throw",n.arg=u.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(L(t)+" is not iterable")}return E.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:E,configurable:!0}),E.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},O(j.prototype),u(j.prototype,l,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function k(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function P(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){k(a,n,o,i,l,"next",e)}function l(e){k(a,n,o,i,l,"throw",e)}i(void 0)}))}}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,H(n.key),n)}}function C(e,t,r){return t&&N(e.prototype,t),r&&N(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(e){var t=function(e,t){if("object"!=L(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==L(t)?t:t+""}function M(e,t,r){return t=D(t),function(e,t){if(t&&("object"==L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,F()?Reflect.construct(t,r||[],D(e).constructor):t.apply(e,r))}function F(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(F=function(){return!!e})()}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function V(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function B(e){var t=(0,c.zy)().search,r=new URLSearchParams(t).get("employed"),o=e.employees.filter((function(e){return!r||String(e.currentlyEmployed)===r})).map((function(t){return n.createElement(I,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return n.createElement(u.A,null,n.createElement(u.A.Header,{as:"h5"},"All Employees ",n.createElement(s.A,{bg:"secondary"},o.length)),n.createElement(u.A.Body,null,n.createElement(u.A.Text,null,n.createElement(f.A,{striped:!0,size:"sm"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Extension"),n.createElement("th",null,"Email"),n.createElement("th",null,"Title"),n.createElement("th",null,"Date Hired"),n.createElement("th",null,"Currently Employed?"),n.createElement("th",null))),n.createElement("tbody",null,o)))))}var I=function(e){function t(){var e;return T(this,t),(e=M(this,t)).state={modalVisible:!1},e.toggleModal=e.toggleModal.bind(e),e.handleDelete=e.handleDelete.bind(e),e}return V(t,e),C(t,[{key:"handleDelete",value:function(){this.props.deleteEmployee(this.props.employee._id),this.setState({modalVisible:!1})}},{key:"toggleModal",value:function(){this.setState({modalVisible:!this.state.modalVisible})}},{key:"render",value:function(){return n.createElement("tr",null,n.createElement("td",null,n.createElement(a.N_,{to:"/edit/".concat(this.props.employee._id)},this.props.employee.name)),n.createElement("td",null,this.props.employee.extension),n.createElement("td",null,this.props.employee.email),n.createElement("td",null,this.props.employee.title),n.createElement("td",null,this.props.employee.dateHired.toDateString()),n.createElement("td",null,this.props.employee.currentlyEmployed?"Yes":"No"),n.createElement("td",null,n.createElement(m.A,{variant:"danger",size:"sm",onClick:this.toggleModal},"X"),n.createElement(p.A,{show:this.state.modalVisible,onHide:this.toggleModal,centered:!0},n.createElement(p.A.Header,{closeButton:!0},n.createElement(p.A.Title,null,"Delete Employee?")),n.createElement(p.A.Body,null,"Are you sure you want to delete this employee?"),n.createElement(p.A.Footer,null,n.createElement(m.A,{type:"submit",variant:"danger",className:"mt-4",onClick:this.toggleModal},"Cancel"),n.createElement(m.A,{type:"submit",variant:"success",className:"mt-4",onClick:this.handleDelete},"Yes")))))}}])}(n.Component),R=function(e){function t(){var e;return T(this,t),(e=M(this,t)).state={employees:[]},e.createEmployee=e.createEmployee.bind(e),e.deleteEmployee=e.deleteEmployee.bind(e),e}return V(t,e),C(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:(a=P(_().mark((function e(){var t,r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees");case 2:return t=e.sent,e.next=5,t.json();case 5:(r=e.sent).employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),this.setState({employees:r.employees});case 8:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"createEmployee",value:(o=P(_().mark((function e(t){var r,n,o;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:(n=e.sent).employee.dateHired=new Date(n.employee.dateHired),o=this.state.employees.concat(n.employee),this.setState({employees:o});case 9:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"deleteEmployee",value:(r=P(_().mark((function e(t){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees/".concat(t),{method:"DELETE"});case 2:e.sent.ok?this.loadData():console.log("Failed to delete employee.");case 4:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(S,{createEmployee:this.createEmployee}),n.createElement(h,null),n.createElement(B,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}]);var r,o,a}(n.Component);function U(){return n.createElement(u.A,null,n.createElement(u.A.Header,{as:"h5"},"Filter"),n.createElement(u.A.Body,null,n.createElement(u.A.Text,null,"This is a placeholder for employee reports.")))}var z=r(2735);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function q(){q=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),l=new P(n||[]);return o(i,"_invoke",{value:S(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",p="suspendedYield",y="executing",h="completed",d={};function v(){}function E(){}function b(){}var g={};u(g,i,(function(){return this}));var w=Object.getPrototypeOf,A=w&&w(w(T([])));A&&A!==r&&n.call(A,i)&&(g=A);var x=b.prototype=v.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(o,a,i,l){var c=f(e[o],e,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==Y(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function S(t,r,n){var o=m;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=L(l,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?h:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=h,n.method="throw",n.arg=u.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(Y(t)+" is not iterable")}return E.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:E,configurable:!0}),E.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},O(j.prototype),u(j.prototype,l,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function J(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function $(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){J(a,n,o,i,l,"next",e)}function l(e){J(a,n,o,i,l,"throw",e)}i(void 0)}))}}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Z(){var e=K((0,n.useState)(""),2),t=e[0],r=e[1],o=K((0,n.useState)({visibility:!1,msg:""}),2),a=o[0],i=o[1],l=(0,c.g)().id;function s(){return(s=$(q().mark((function e(){var t,n;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employees/".concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.employee);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return f=$(q().mark((function e(t){var n,o,a,l;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.forms.employeeUpdate,o=n.id.value,e.next=5,fetch("/api/employees/".concat(o),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:n.name.value,extension:n.extension.value,email:n.email.value,title:n.title.value,currentlyEmployed:n.currentlyEmployed.checked})});case 5:return a=e.sent,e.next=8,a.json();case 8:l=e.sent,r(l.employee),i({visibility:!0,msg:l.msg});case 11:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}return(0,n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),n.createElement(u.A,null,n.createElement(u.A.Header,{as:"h5"},"Edit ",t.name),n.createElement(u.A.Body,null,n.createElement(u.A.Text,null,n.createElement(d.A,{fluid:!0},n.createElement("form",{name:"employeeUpdate",onSubmit:function(e){return f.apply(this,arguments)}},n.createElement(v.A,null,n.createElement(E.A,{md:2},"ID:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:t._id}))),n.createElement(v.A,null,n.createElement(E.A,{md:2},"Name:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"name",defaultValue:t.name}))),n.createElement(v.A,null,n.createElement(E.A,{md:2},"Extension:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"extension",defaultValue:t.extension}))),n.createElement(v.A,null,n.createElement(E.A,{md:2},"Email:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"email",defaultValue:t.email}))),n.createElement(v.A,null,n.createElement(E.A,{md:2},"Title:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"title",defaultValue:t.title}))),n.createElement(v.A,null,n.createElement(E.A,{md:2},"Date Hired:"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:t.dateHired}))),n.createElement(v.A,null,n.createElement(E.A,{md:2},"Currently Employed?"),n.createElement(E.A,{md:"auto"},n.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:t.currentlyEmployed}))),n.createElement(m.A,{type:"submit",variant:"primary",size:"sm",className:"my-3"},"Update Employee"),n.createElement(z.A,{variant:"success",show:a.visibility,onClose:function(e){return i({visibility:!1})},dismissible:!0},a.msg))))))}function Q(){var e=function(){return n.createElement("h1",null,"Page Not Found")};return n.createElement(c.BV,null,n.createElement(c.qh,{path:"/employees",element:n.createElement(R,null)}),n.createElement(c.qh,{path:"/edit/:id",element:n.createElement(Z,null)}),n.createElement(c.qh,{path:"/report",element:n.createElement(U,null)}),n.createElement(c.qh,{path:"/",element:n.createElement(c.C5,{replace:!0,to:"/employees"})}),n.createElement(c.qh,{path:"*",element:n.createElement(e,null)}))}function W(){return n.createElement(i.A,{bg:"dark",variant:"dark"},n.createElement(i.A.Brand,{href:"/"},"Employee Management Application"),n.createElement(l.A,null,n.createElement(l.A.Link,{href:"/employees"},"All Employees"),n.createElement(l.A.Link,{href:"/report"},"Reports")))}function ee(){return n.createElement("div",null,n.createElement(W,null),n.createElement(Q,null))}(0,o.H)(document.getElementById("content")).render(n.createElement(a.Kd,null,n.createElement(n.StrictMode,null,n.createElement(ee,null))))}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={834:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,l,c]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var s=c(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunkmodule01=self.webpackChunkmodule01||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=a.O(void 0,[121],(()=>a(2767)));i=a.O(i)})();
//# sourceMappingURL=employees.bundle.js.map