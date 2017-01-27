!function(){Array.from||(Array.from=function(){var n=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===n.call(t)},e=function(n){var t=+n;return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,o=function(n){var t=e(n);return Math.min(Math.max(t,0),r)};return function(n){var e=this,r=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,u=arguments.length>1?arguments[1]:void 0;if(void 0!==u){if(!t(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var a,c=o(r.length),s=t(e)?Object(new e(c)):Array(c),f=0;c>f;)a=r[f],s[f]=u?void 0===i?u(a,f):u.call(i,a,f):a,f+=1;return s.length=c,s}}()),Object.assign||(Object.assign=function(n){n=Object(n);for(var t=1,e=arguments.length;e>t;t++){var r=arguments[t];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(n){for(var t=(this.document||this.ownerDocument).querySelectorAll(n),e=t.length;--e>=0&&t.item(e)!==this;);return e>-1})}(),function(n){function t(n,e){t.components[n]=e}function e(n){var t=n.getAttribute(g);t=t.split(/\s/),m(t,r(n))}function r(n){return function(e){var r="jails#component#"+e;if(!n[r]){var o=t.component(e,n);Object.assign(o,t.components[e](o,n,u(e,n))||o),o.init(),n[r]=!0}}}function o(n,t,e){return function(n){t.__kill(),t=null,i(e),n.stopPropagation()}}function i(n){for(var e in n._events)t.events.off(n,e,n._events[e].eventHandler);n._events=null,n["jails#component#"+name]=null}function u(n,t){var e;return function(r){if(e)return r?e[r]:e;var o=s(t)[n]||{},i={data:{}};return m(Array.from(t.attributes),a(i)),e=Object.assign({},o,i),r?e[r]:e}}function a(n){return function(t){var e,r=t.name.split(/data\-/);try{e=Function("return "+t.value)()}catch(o){e=t.value}return r[1]?n.data[r.pop().replace(/-([a-z])/g,c)]=e:n[t.name]=e,n}}function c(n,t){return t.toUpperCase()}function s(n){var t,e,r={};return t=n.previousSibling,t=t&&8==t.nodeType?t:t?t.previousSibling:null,t&&8==t.nodeType&&(e=t.data.replace(/@([a-zA-z0-9-\/]*)(?:\((.*)\))?/g,function(n,t,e){r[t]=Function("return "+e)()})),r}function f(){var n={},t={};return{subscribe:function(){var e=Array.from(arguments),r=e[0],o=e[1],i=this;return r in t&&n[r]?(n[r].push(o),i.publish.apply(null,[r].concat(t[r]))):(n[r]=n[r]||[],n[r].push(o)),function(){var e=[],i=[];m(n[r],function(n){n!=o&&e.push(n)}),n[r]=e,m(t[r],function(n){n!=o&&i.push(n)}),t[r]=i}},publish:function(){var e=Array.from(arguments),r=e.shift();n[r]=n[r]||[],n[r].length?m(n[r],function(n){n&&n.apply(this,e)}):t[r]=e}}}function l(n,t,e){return function(r){for(var o=r.target;o&&o!==n;)o.matches(t)&&e.call(r.target,r),o=o.parentNode}}function v(n,t,e){return function(r){if(e==r.target){var o=r.detail.method.split(/\:/),i=o.length>1?o[1]:o[0];(i in t&&!o[1]||o[1]&&n==o[0])&&t[i].apply(t,r.detail.args),r.stopPropagation()}}}function p(n,e){return function(r){t.events.trigger(r,"execute",{args:e,method:n})}}function m(n,t,e){n=e?Array.from(n).reverse():n;for(var r=0,o=n.length;o>r;r++)t(n[r],r)}function d(){function n(n,t){var e=document.createEvent(n);return t=t||{},e.initEvent(n,t.bubbles||!1,t.cancelable||!1,t.detail||null),e}return{on:function(n,e,r,o){function i(t){var r=t.detail||{};n._events[e].map(function(e){r.instance&&u[0]&&r.instance.name!=u[0]||e.apply(n,[t].concat(r.args))})}var u,a,c;return n._events=n._events||{},u=e.split(/\:/),e=u[1]?":"+u[1]:u[0],a=e in n._events,c=o?l(n,r,i):i,n._events[e]=n._events[e]||[],n._events[e].push(o||r),a||(n.addEventListener(e,c,"focus"==e||"blur"==e),n._events[e].eventHandler=c),function(){t.events.off(n,e,o||r)}},off:function(n,t,e){n.removeEventListener(t,e,!1),n._events[t]=(n._events[t]||[]).filter(function(n){return n!=e})},trigger:function(t,e,r){try{t.dispatchEvent(new n(e,{bubbles:!0,detail:r}))}catch(o){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:r}))}}}}var h=f(),g="data-component",b="["+g+"]";t.components={},t.events=d(),t.publish=h.publish,t.subscribe=h.subscribe,t.start=function(n){n=n||document.documentElement,m(n.querySelectorAll(b),e,!0)},t.destroy=function(n){t.events.trigger(n,"destroy")},t.render=function(n,e){for(var r;r=n.firstChild;)r.getAttribute&&r.getAttribute(g)&&t.destroy(r),n.removeChild(r);n.innerHTML=e,t.start(n)},t.component=function(n,e){var r={name:n,publish:h.publish,subscribe:h.subscribe,on:t.events.on,init:function(){},destroy:function(){},on:function(n,r,o){return t.events.on(e,n,r,o)},off:function(n,r){t.events.off(e,n,r)},get:function(n){return function(t,r){var r=Array.from(arguments),o=[].concat(e.matches(n)?e:[]);o=o.concat(Array.from(e.querySelectorAll(n))),m(o,p(r.shift(),r))}},emit:function(){var n=Array.from(arguments);t.events.trigger(e,":"+n.shift(),{args:n,instance:r})},__kill:function(){r.destroy();for(var n in this)delete this[n];r=null}};return t.events.on(e,"execute",v(n,r,e)),t.events.on(e,"destroy",o(n,r,e)),r},"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:n.jails=t}(window),function(n,t){"function"==typeof define&&define.amd?define(["jquery","jails"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery"),require("jails")):t(n.jQuery,n.jails)}(this,function(n,t){t.events={on:function(n,t,e,r){function o(n,t){return n.detail=t?t.detail:n.detail,n.detail=n.detail||{},i.apply(this,[n].concat(n.detail.args))}var i=r||e;r?$(n).on(t,e,o):$(n).on(t,o)},off:function(n,t,e){$(n).off(t,e)},trigger:function(n,t,e){$(n).trigger(t,{detail:e})}}});
