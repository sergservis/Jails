!function(){function n(n,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(n,t.bubbles,t.cancelable,t.detail),e}return"function"==typeof window.CustomEvent?!1:(n.prototype=window.Event.prototype,window.CustomEvent=n,Array.prototype.forEach||(Array.prototype.forEach=function(n,t){var e,r;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),i=o.length>>>0;if("[object Function]"!=={}.toString.call(n))throw new TypeError(n+" is not a function");for(t&&(e=t),r=0;i>r;){var u;Object.prototype.hasOwnProperty.call(o,r)&&(u=o[r],n.call(e,u,r,o)),r++}}),void(Object.keys||(Object.keys=function(n){if(n!==Object(n))throw new TypeError("Object.keys called on a non-object");var t,e=[];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.push(t);return e})))}(),function(){Array.from||(Array.from=function(){var n=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===n.call(t)},e=function(n){var t=+n;return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,o=function(n){var t=e(n);return Math.min(Math.max(t,0),r)};return function(n){var e=this,r=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,u=arguments.length>1?arguments[1]:void 0;if(void 0!==u){if(!t(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var a,c=o(r.length),s=t(e)?Object(new e(c)):Array(c),l=0;c>l;)a=r[l],s[l]=u?void 0===i?u(a,l):u.call(i,a,l):a,l+=1;return s.length=c,s}}()),Object.assign||(Object.assign=function(n){n=Object(n);for(var t=1,e=arguments.length;e>t;t++){var r=arguments[t];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(n){for(var t=(this.document||this.ownerDocument).querySelectorAll(n),e=t.length;--e>=0&&t.item(e)!==this;);return e>-1})}(),function(n){function t(n,e,r){return t.components[n]=e,t.components[n].options=r||{},t}function e(n){var t,e={};return t=n.previousSibling,t=t&&8==t.nodeType?t:t?t.previousSibling:null,t&&8==t.nodeType&&t.data.replace(/@([a-zA-z0-9-\/]*)(?:\((.*)\))?/g,function(n,t,r){e[t]=Function("return "+r)()}),e}function r(n){var t=n.getAttribute(p).split(/\s/);c(t,o(n))}function o(n){return function(e){var r,o;n.j=n.j||{},e in t.components&&!n.j[e]&&(o=t.components[e],n.j[e]={methods:{}},r=t.component(e,n,o.options),o(r,n,r.props),r.__initialize(r))}}function i(n){var t={data:{}};return c(n.attributes,u(t)),t}function u(n){return function(t){var e,r=t.name.split(/data\-/);try{e=t.value in window?t.value:Function("return "+t.value)()}catch(o){e=t.value}return r[1]?n.data[r.pop().replace(/-([a-z])/g,a)]=e:n[t.name]=e,n}}function a(n,t){return t.toUpperCase()}function c(n,t,e){n=e?Array.from(n).reverse():n;for(var r=0,o=n.length;o>r;r++)t(n[r],r,n)}function s(){function n(n,t){var e=document.createEvent(n);return t=t||{},e.initEvent(n,t.bubbles||!1,t.cancelable||!1,t.detail||null),e}function t(n,t){return function(e){var r=this,o=e.detail||{};n.__events[t].forEach(function(n){n.handler.apply(r,[e].concat(o.args))})}}function e(n,t){n.__events[t]&&n.__events[t].listener&&(n.removeEventListener(t,n.__events[t].listener,!1),delete n.__events[t])}function r(n,t,e){return function(r){for(var o=this,i=r.target,u=r.detail||{};i&&i!==n;)i.matches(t)&&(r.delegateTarget=i,e.apply(o,[r].concat(u.args))),i=i.parentNode}}return{on:function(n,e,o){if(n.__events=n.__events||{},n.__events[e]=n.__events[e]||[],!n.__events[e].length){var i=t(n,e);n.addEventListener(e,i,"focus"==e||"blur"==e),n.__events[e].listener=i}o.call?n.__events[e].push({handler:o,callback:o}):Object.keys(o).forEach(function(t){n.__events[e].push({handler:r(n,t,o[t]),callback:o[t]})})},off:function(n,t,r){if(r&&n.__events[t]&&n.__events[t].length){var o=n.__events[t];n.__events[t]=n.__events[t].filter(function(n){return n.callback!=r}),n.__events[t].listener=o.listener,n.__events[t].length||e(n,t)}else e(n,t)},trigger:function(t,e,r){t.dispatchEvent(/\:/.test(e)?new CustomEvent(e,{bubbles:!0,detail:r}):new n(e,{bubbles:!0,detail:r}))}}}function l(n,t){return n={},t={},{publish:function(e,r){e in n?c(n[e],function(n){n(r)}):t[e]=r},subscribe:function(e,r){return n[e]=n[e]||[],n[e].push(r),e in t&&c(n[e],function(n){n(t[e])}),function(){n[e]=n[e].filter(function(n){return n==r})}}}}var f=l(),p="data-component",v="["+p+"]";t.events=s(),t.components={},t.publish=f.publish,t.subscribe=f.subscribe,t.start=function(n){return n=n||document.documentElement,c(n.querySelectorAll(v),r,!0),t},t.destroy=function(n,e){return n=n||document.documentElement,e=e||v,c(n.querySelectorAll(e),function(n){n.__events&&(n.__events=null,n.j=null),t.events.trigger(n,":destroy")},!0),t},t.use=function(n){return n(t),t},t.component=function(n,r,o){var u,a={},s=t.events;return u={elm:r,subscribe:f.subscribe,publish:f.publish,injection:o.injection,__initialize:function(){},expose:function(t){r.j[n].methods=t},on:function(n,t){s.on(r,n,t)},off:function(n,t){s.off(r,n,t)},init:function(n){n&&n.call&&(u.__initialize=function(t){var e=n(t);if(e&&e.forEach){var r={};e.forEach(function(n){r=(n&&n.call?n(t,r):null)||r})}})},props:function(n){return a.props=a.props||i(r),n?a.props[n]:a.props},annotations:function(t){return a.annotations=a.annotations||e(r)[n]||{},t?a.annotations[t]:a.annotations},get:function(n,t){return function(){var e=Array.from(arguments),o=e.shift(),i="[data-component*="+n+"]";t=t?i+t:i,c(r.querySelectorAll(t),function(t){t.j&&t.j[n]&&o in t.j[n].methods&&t.j[n].methods[o].apply(null,e)}),r.matches(t)&&r.j&&r.j[n]&&o in r.j[n].methods&&r.j[n].methods[o].apply(null,e)}},emit:function(){var n=Array.from(arguments);s.trigger(r,n.shift(),{args:n})}}},"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:n.jails=t}(window),function(n,t){"function"==typeof define&&define.amd?define(["jquery","jails"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery"),require("jails")):t(n.jQuery,n.jails)}(this,function(n,t){t.events={on:function(t,e,r){function o(n){return function(t,e){return t.detail=e?e.detail:t.detail,t.detail=t.detail||{},n.apply(this,[t].concat(t.detail.args))}}r.call?n(t).on(e,o(r)):Object.keys(r).forEach(function(i){n(t).on(e,i,o(r[i]))})},off:function(t,e,r){n(t).off(e,r)},trigger:function(t,e,r){n(t).trigger(e,{detail:r})}}});
