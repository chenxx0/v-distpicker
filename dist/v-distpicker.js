!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VDistpicker=t():e.VDistpicker=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),n=r.n(i);t.default=n.a},function(e,t,r){r(2);var i=r(7)(r(8),r(10),null,null);e.exports=i.exports},function(e,t,r){var i=r(3);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(5)("6b2d9f88",i,!0)},function(e,t,r){t=e.exports=r(4)(),t.push([e.i,"\n.distpicker-address-wrapper {\n  color: #9caebf;\n}\n.distpicker-address-wrapper select {\n    padding: .5rem .75rem;\n    height: 40px;\n    font-size: 1rem;\n    line-height: 1.25;\n    color: #464a4c;\n    background-color: #fff;\n    background-image: none;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    border-radius: .25rem;\n    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n}\n.distpicker-address-wrapper select option {\n      font-weight: normal;\n      display: block;\n      white-space: pre;\n      min-height: 1.2em;\n      padding: 0px 2px 1px;\n}\n.distpicker-address-wrapper ul {\n    margin: 0;\n    padding: 0;\n}\n.distpicker-address-wrapper ul li {\n      list-style: none;\n}\n.distpicker-address-wrapper .address-header {\n    background-color: #fff;\n}\n.distpicker-address-wrapper .address-header ul {\n      display: flex;\n      justify-content: space-around;\n      align-items: stretch;\n}\n.distpicker-address-wrapper .address-header ul li {\n        display: inline-block;\n        padding: 10px 10px 7px;\n}\n.distpicker-address-wrapper .address-header ul li.active {\n          border-bottom: #52697f solid 3px;\n          color: #52697f;\n}\n.distpicker-address-wrapper .address-container {\n    background-color: #fff;\n}\n.distpicker-address-wrapper .address-container ul {\n      height: 100%;\n      overflow: auto;\n}\n.distpicker-address-wrapper .address-container ul li {\n        padding: 8px 10px;\n        border-top: 1px solid #f6f6f6;\n}\n.distpicker-address-wrapper .address-container ul li.active {\n          color: #52697f;\n}\n",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(i[s]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&i[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function i(e){for(var t=0;t<e.length;t++){var r=e[t],i=l[r.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](r.parts[n]);for(;n<r.parts.length;n++)i.parts.push(s(r.parts[n]));i.parts.length>r.parts.length&&(i.parts.length=r.parts.length)}else{for(var a=[],n=0;n<r.parts.length;n++)a.push(s(r.parts[n]));l[r.id]={id:r.id,refs:1,parts:a}}}}function n(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function s(e){var t,r,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(f)return v;i.parentNode.removeChild(i)}if(y){var s=p++;i=h||(h=n()),t=a.bind(null,i,s,!1),r=a.bind(null,i,s,!0)}else i=n(),t=o.bind(null,i),r=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else r()}}function a(e,t,r,i){var n=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,n);else{var s=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function o(e,t){var r=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=r(6),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),h=null,p=0,f=!1,v=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){f=r;var n=d(e,t);return i(n),function(t){for(var r=[],s=0;s<n.length;s++){var a=n[s],o=l[a.id];o.refs--,r.push(o)}t?(n=d(e,t),i(n)):n=[];for(var s=0;s<r.length;s++){var o=r[s];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete l[o.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],i={},n=0;n<t.length;n++){var s=t[n],a=s[0],o=s[1],c=s[2],d=s[3],l={id:e+":"+n,css:o,media:c,sourceMap:d};i[a]?i[a].parts.push(l):r.push(i[a]={id:a,parts:[l]})}return r}},function(e,t){e.exports=function(e,t,r,i){var n,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(n=e,s=e.default);var o="function"==typeof s?s.options:s;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),r&&(o._scopeId=r),i){var c=o.computed||(o.computed={});Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}})}return{esModule:n,exports:s,options:o}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(9),n=r.n(i);t.default={name:"v-distpicker",props:{province:{type:[String,Number],default:""},city:{type:[String,Number],default:""},area:{type:[String,Number],default:""},type:{type:String,default:""},hideArea:{type:Boolean,default:!1},onlyProvince:{type:Boolean,default:!1},staticPlaceholder:{type:Boolean,default:!1},placeholders:{type:Object,default:function(){return{province:"省",city:"市",area:"区"}}},disabled:{type:Boolean,default:!1},addressHeader:{type:String,default:"address-header"},addressContainer:{type:String,default:"address-container"}},data:function(){return{tab:1,showCityTab:!1,showAreaTab:!1,provinces:[],cities:[],areas:[],currentProvince:this.determineType(this.province)||this.placeholders.province,currentCity:this.determineType(this.city)||this.placeholders.city,currentArea:this.determineType(this.area)||this.placeholders.area}},created:function(){"mobile"!=this.type?(this.provinces=this.getDistricts(),this.cities=this.province?this.getDistricts(this.getAreaCode(this.determineType(this.province))):[],this.areas=this.city?this.getDistricts(this.getAreaCode(this.determineType(this.city),this.area)):[]):!this.area||this.hideArea||this.onlyProvince?this.city&&this.hideArea&&!this.onlyProvince?(this.tab=2,this.showCityTab=!0,this.cities=this.getDistricts(this.getAreaCode(this.determineType(this.province)))):this.provinces=this.getDistricts():(this.tab=3,this.showCityTab=!0,this.showAreaTab=!0,this.areas=this.getDistricts(this.getAreaCode(this.determineType(this.city),this.area)))},watch:{currentProvince:function(e){this.$emit("province",this.setData(e)),this.onlyProvince&&this.emit("selected")},currentCity:function(e){this.$emit("city",this.setData(e,this.currentProvince)),e!=this.placeholders.city&&this.hideArea&&this.emit("selected")},currentArea:function(e){this.$emit("area",this.setData(e,this.currentProvince)),e!=this.placeholders.area&&this.emit("selected")},province:function(e){this.currentProvince=this.province||this.placeholders.province,this.cities=this.determineValue(this.currentProvince,this.placeholders.province)},city:function(e){this.currentCity=this.city||this.placeholders.city,this.areas=this.determineValue(this.currentCity,this.placeholders.city,this.currentProvince)},area:function(e){this.currentArea=this.area||this.placeholders.area}},methods:{setData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{code:this.getAreaCode(e,t),value:e}},emit:function(e){var t={province:this.setData(this.currentProvince)};this.onlyProvince||this.$set(t,"city",this.setData(this.currentCity)),this.onlyProvince&&!this.hideArea||this.$set(t,"area",this.setData(this.currentArea)),this.$emit(e,t)},getCities:function(){this.currentCity=this.placeholders.city,this.currentArea=this.placeholders.area,this.cities=this.determineValue(this.currentProvince,this.placeholders.province),this.cleanList("areas"),0===this.cities.length&&(this.emit("selected"),this.tab=1,this.showCityTab=!1)},getAreas:function(){this.currentArea=this.placeholders.area,this.areas=this.determineValue(this.currentCity,this.placeholders.city,this.currentProvince),0===this.areas.length&&(this.emit("selected"),this.tab=2,this.showAreaTab=!1)},resetProvince:function(){this.tab=1,this.provinces=this.getDistricts(),this.showCityTab=!1,this.showAreaTab=!1},resetCity:function(){this.tab=2,this.showCityTab=!0,this.showAreaTab=!1,this.getCities()},chooseProvince:function(e){this.currentProvince=e,this.onlyProvince||(this.tab=2,this.showCityTab=!0,this.showAreaTab=!1,this.getCities())},chooseCity:function(e){this.currentCity=e,this.hideArea||(this.tab=3,this.showCityTab=!0,this.showAreaTab=!0,this.getAreas())},chooseArea:function(e){this.currentArea=e},getAreaCodeByPreCode:function(e,t){var r=[];for(var i in n.a)for(var s in n.a[i])e===n.a[i][s]&&r.push(s);if(r.length>1){var a=void 0;return r.forEach(function(e,r){e.slice(0,2)==t&&(a=r)}),r[a]}return r[0]},getAreaCode:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(var r in n.a)for(var i in n.a[r])if(e===n.a[r][i]){if(t.length>0){if(i.slice(0,2)!==this.getAreaCodeByPreCode(t,i.slice(0,2)).slice(0,2))continue;return i}return i}},getCodeValue:function(e){for(var t in n.a)for(var r in n.a[t])if(e===parseInt(r))return n.a[t][r]},getDistricts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e5;return n.a[e]||[]},determineValue:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e===t?[]:this.getDistricts(this.getAreaCode(e,r))},determineType:function(e){return"number"==typeof e?this.getCodeValue(e):e},cleanList:function(e){this[e]=[]}}}},function(e,t){},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"distpicker-address-wrapper"},["mobile"!=e.type?[r("select",{directives:[{name:"model",rawName:"v-model",value:e.currentProvince,expression:"currentProvince"}],attrs:{disabled:e.disabled},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentProvince=t.target.multiple?r:r[0]},e.getCities]}},[r("option",{domProps:{value:e.placeholders.province}},[e._v(e._s(e.placeholders.province))]),e._v(" "),e._l(e.provinces,function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v("\n        "+e._s(t)+"\n      ")])})],2),e._v(" "),e.onlyProvince?e._e():[r("select",{directives:[{name:"model",rawName:"v-model",value:e.currentCity,expression:"currentCity"}],attrs:{disabled:e.disabled},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentCity=t.target.multiple?r:r[0]},e.getAreas]}},[r("option",{domProps:{value:e.placeholders.city}},[e._v(e._s(e.placeholders.city))]),e._v(" "),e._l(e.cities,function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])})],2),e._v(" "),e.hideArea?e._e():r("select",{directives:[{name:"model",rawName:"v-model",value:e.currentArea,expression:"currentArea"}],attrs:{disabled:e.disabled},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentArea=t.target.multiple?r:r[0]}}},[r("option",{domProps:{value:e.placeholders.area}},[e._v(e._s(e.placeholders.area))]),e._v(" "),e._l(e.areas,function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])})],2)]]:[r("div",{class:e.addressHeader},[r("ul",[r("li",{class:{active:1===e.tab},on:{click:e.resetProvince}},[e._v(e._s(e.currentProvince&&!e.staticPlaceholder?e.currentProvince:e.placeholders.province))]),e._v(" "),e.onlyProvince?e._e():[e.showCityTab?r("li",{class:{active:2===e.tab},on:{click:e.resetCity}},[e._v(e._s(e.currentCity&&!e.staticPlaceholder?e.currentCity:e.placeholders.city))]):e._e(),e._v(" "),e.showAreaTab&&!e.hideArea?r("li",{class:{active:3===e.tab}},[e._v(e._s(e.currentArea&&!e.staticPlaceholder?e.currentArea:e.placeholders.area))]):e._e()]],2)]),e._v(" "),r("div",{class:e.addressContainer},[1===e.tab?r("ul",e._l(e.provinces,function(t,i){return r("li",{key:i,class:{active:t===e.currentProvince},on:{click:function(r){e.chooseProvince(t)}}},[e._v("\n          "+e._s(t)+"\n        ")])})):e._e(),e._v(" "),e.onlyProvince?e._e():[2===e.tab?r("ul",e._l(e.cities,function(t,i){return r("li",{key:i,class:{active:t===e.currentCity},on:{click:function(r){e.chooseCity(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])})):e._e(),e._v(" "),3!==e.tab||e.hideArea?e._e():r("ul",e._l(e.areas,function(t,i){return r("li",{key:i,class:{active:t===e.currentArea},on:{click:function(r){e.chooseArea(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])}))]],2)]],2)},staticRenderFns:[]}}]).default});