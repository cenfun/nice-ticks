!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["nice-ticks"]=e():t["nice-ticks"]=e()}(this,(()=>(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function o(t){return`${t}`}function n(t){const e=o(t).split(".");return e.length>1?e[1].length:0}function r(t){const e=o(t);return parseInt(e.replace(".",""))}function c(t,e){const o=n(t),r=n(e);if(o+r===0)return t+e;const c=Math.pow(10,Math.max(o,r));return(Math.round(t*c)+Math.round(e*c))/c}function u(t,e){const o=n(t),c=n(e);return o+c===0?t*e:r(t)*r(e)/Math.pow(10,o+c)}function f(t,e){const o=Math.floor(Math.log(t)/Math.log(10)),n=t/Math.pow(10,o);let r;return r=e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10,r*Math.pow(10,o)}t.d(e,{default:()=>a});const i=function(t){return"number"!=typeof t&&(t=parseFloat(t)),isNaN(t)&&(t=0),t};function a(t,e,o=4){if(t=i(t),e=i(e),o=i(o),t===e)e=t+1;else if(t>e){const o=t;t=e,e=o}const n=f(e-t,!1),r=f(n/(o-1),!0),a=u(Math.floor(t/r),r),s=u(Math.ceil(e/r),r),p=[];let l=a;for(;l<=s;)p.push(l),l=c(l,r);return p}return e.default})()));
//# sourceMappingURL=nice-ticks.js.map