!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["nice-ticks"]=e():t["nice-ticks"]=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t){return""+t}function r(t){var e=n(t).split(".");return e.length>1?e[1].length:0}function o(t){var e=n(t);return parseInt(e.replace(".",""))}function u(t,e){var n=r(t),o=r(e);if(n+o==0)return t+e;var u=Math.pow(10,Math.max(n,o));return(Math.round(t*u)+Math.round(e*u))/u}function f(t,e){var n=r(t),u=r(e);return n+u==0?t*e:o(t)*o(e)/Math.pow(10,n+u)}function i(t,e){var n=Math.floor(Math.log(t)/Math.log(10)),r=t/Math.pow(10,n);return(e?r<1.5?1:r<3?2:r<7?5:10:r<=1?1:r<=2?2:r<=5?5:10)*Math.pow(10,n)}t.exports=function(t,e,n=4){if(t==e)e=t+1;else if(t>e){var r=t;t=e,e=r}for(var o=i(e-t,!1),a=i(o/(n-1),!0),c=f(Math.floor(t/a),a),l=f(Math.ceil(e/a),a),p=[],d=c;d<=l;)p.push(d),d=u(d,a);return p}}])});
//# sourceMappingURL=nice-ticks.js.map