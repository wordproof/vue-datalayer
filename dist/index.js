var t=require("@inertiajs/inertia"),e=function(){var e=this;return e.storageData={},e.allowedKeys=[],t.Inertia.on("success",function(t){console.log(t)}),{init:function(t){e.allowedKeys=t},find:function(t){if(void 0===t)return e.storageData;for(var n,a=0,o=Object.entries(e.storageData);a<o.length;a++){var r=o[a][1];"object"!=typeof r&&"function"!=typeof r?-1!==r.indexOf(t)&&(n=r):-1!==r.toString().indexOf(t)&&(n=r)}return n},get:function(t){return e.storageData[t]},set:function(t,n){if(void 0!==n)return 0!==e.storageData.length&&void 0!==e.allowedKeys.find(function(t){return t===n})&&(e.storageData[n]=t,!0);if("object"==typeof t)for(var a=function(){var t=r[o],n=t[0],a=t[1];0!==e.allowedKeys.length&&void 0===e.allowedKeys.find(function(t){return t===n})||(e.storageData[n]=a)},o=0,r=Object.entries(t);o<r.length;o++)a();return!0},del:function(t){void 0!==e.storageData[t]&&e.storageData[t].delete()}}}();exports.dataLayer=e;
//# sourceMappingURL=index.js.map
