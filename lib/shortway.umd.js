!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(this,function(){"use strict";function e(e,r){var o=e.split("+"),f=o.filter(function(e){return t(Object.keys(n),e)}),u=n[f[0]],i=o.some(function(e){return"ctrl"===e}),c=o.some(function(e){return"shift"===e}),s=o.some(function(e){return"alt"===e});return function(e){if(e.ctrlKey===i&&e.shiftKey===c&&e.altKey===s&&e.keyCode===u)return r(e),!1}}var t=function(e,t){return e.indexOf(t)>-1},n=require("./keycodes");exports.default=e,module.exports=exports.default});