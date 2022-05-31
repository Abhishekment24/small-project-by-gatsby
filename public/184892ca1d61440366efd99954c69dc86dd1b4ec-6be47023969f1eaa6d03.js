(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[795],{6633:function(e,t,n){e.exports=n(2465)},3344:function(e,t,n){"use strict";var r=n(1599),o=n(7202),a=n(116),i=n(8710),s=n(3656),c=n(2306),l=n(778),u=n(5037),f=n(7944),d=n(3920),p=n(7564);e.exports=function(e){return new Promise((function(t,n){var m,h=e.data,E=e.headers,v=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(m),e.signal&&e.signal.removeEventListener("abort",m)}r.isFormData(h)&&r.isStandardBrowserEnv()&&delete E["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";E.Authorization="Basic "+btoa(b+":"+w)}var x=s(e.baseURL,e.url);function N(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,a={data:v&&"text"!==v&&"json"!==v?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};o((function(e){t(e),g()}),(function(e){n(e),g()}),a),y=null}}if(y.open(e.method.toUpperCase(),i(x,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=N:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(N)},y.onabort=function(){y&&(n(new f("Request aborted",f.ECONNABORTED,e,y)),y=null)},y.onerror=function(){n(new f("Network Error",f.ERR_NETWORK,e,y,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||u;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new f(t,r.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,y)),y=null},r.isStandardBrowserEnv()){var O=(e.withCredentials||l(x))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;O&&(E[e.xsrfHeaderName]=O)}"setRequestHeader"in y&&r.forEach(E,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete E[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),v&&"json"!==v&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(m=function(e){y&&(n(!e||e&&e.type?new d:e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(m),e.signal&&(e.signal.aborted?m():e.signal.addEventListener("abort",m))),h||(h=null);var R=p(x);R&&-1===["http","https","file"].indexOf(R)?n(new f("Unsupported protocol "+R+":",f.ERR_BAD_REQUEST,e)):y.send(h)}))}},2465:function(e,t,n){"use strict";var r=n(1599),o=n(6013),a=n(2234),i=n(5469);var s=function e(t){var n=new a(t),s=o(a.prototype.request,n);return r.extend(s,a.prototype,n),r.extend(s,n),s.create=function(n){return e(i(t,n))},s}(n(5610));s.Axios=a,s.CanceledError=n(3920),s.CancelToken=n(4396),s.isCancel=n(7458),s.VERSION=n(1191).version,s.toFormData=n(9937),s.AxiosError=n(7944),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=n(2744),s.isAxiosError=n(6683),e.exports=s,e.exports.default=s},4396:function(e,t,n){"use strict";var r=n(3920);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},3920:function(e,t,n){"use strict";var r=n(7944);function o(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}n(1599).inherits(o,r,{__CANCEL__:!0}),e.exports=o},7458:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},2234:function(e,t,n){"use strict";var r=n(1599),o=n(8710),a=n(5950),i=n(4126),s=n(5469),c=n(3656),l=n(8260),u=l.validators;function f(e){this.defaults=e,this.interceptors={request:new a,response:new a}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var a,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!o){var f=[i,void 0];for(Array.prototype.unshift.apply(f,r),f=f.concat(c),a=Promise.resolve(t);f.length;)a=a.then(f.shift(),f.shift());return a}for(var d=t;r.length;){var p=r.shift(),m=r.shift();try{d=p(d)}catch(h){m(h);break}}try{a=i(d)}catch(h){return Promise.reject(h)}for(;c.length;)a=a.then(c.shift(),c.shift());return a},f.prototype.getUri=function(e){e=s(this.defaults,e);var t=c(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(s(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f},7944:function(e,t,n){"use strict";var r=n(1599);function o(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}r.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var a=o.prototype,i={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){i[e]={value:e}})),Object.defineProperties(o,i),Object.defineProperty(a,"isAxiosError",{value:!0}),o.from=function(e,t,n,i,s,c){var l=Object.create(a);return r.toFlatObject(e,l,(function(e){return e!==Error.prototype})),o.call(l,e.message,t,n,i,s),l.name=e.name,c&&Object.assign(l,c),l},e.exports=o},5950:function(e,t,n){"use strict";var r=n(1599);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},3656:function(e,t,n){"use strict";var r=n(789),o=n(7020);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},4126:function(e,t,n){"use strict";var r=n(1599),o=n(7989),a=n(7458),i=n(5610),s=n(3920);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5469:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function i(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||a,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},7202:function(e,t,n){"use strict";var r=n(7944);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},7989:function(e,t,n){"use strict";var r=n(1599),o=n(5610);e.exports=function(e,t,n){var a=this||o;return r.forEach(n,(function(n){e=n.call(a,e,t)})),e}},5610:function(e,t,n){"use strict";var r=n(1599),o=n(4188),a=n(7944),i=n(5037),s=n(9937),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,f={transitional:i,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(3344)),u),transformRequest:[function(e,t){if(o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,a=r.isObject(e),i=t&&t["Content-Type"];if((n=r.isFileList(e))||a&&"multipart/form-data"===i){var c=this.env&&this.env.FormData;return s(n?{"files[]":e}:e,c&&new c)}return a||"application/json"===i?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(i){if("SyntaxError"===s.name)throw a.from(s,a.ERR_BAD_RESPONSE,this,null,this.response);throw s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(2753)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(c)})),e.exports=f},5037:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},1191:function(e){e.exports={version:"0.27.2"}},6013:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8710:function(e,t,n){"use strict";var r=n(1599);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},7020:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},116:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},789:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6683:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},778:function(e,t,n){"use strict";var r=n(1599);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},4188:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},2753:function(e){e.exports=null},2306:function(e,t,n){"use strict";var r=n(1599),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},7564:function(e){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},2744:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},9937:function(e,t,n){"use strict";var r=n(1599);e.exports=function(e,t){t=t||new FormData;var n=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(a,i){if(r.isPlainObject(a)||r.isArray(a)){if(-1!==n.indexOf(a))throw Error("Circular reference detected in "+i);n.push(a),r.forEach(a,(function(n,a){if(!r.isUndefined(n)){var s,c=i?i+"."+a:a;if(n&&!i&&"object"==typeof n)if(r.endsWith(a,"{}"))n=JSON.stringify(n);else if(r.endsWith(a,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(c,o(e))}));e(n,c)}})),n.pop()}else t.append(i,o(a))}(e),t}},8260:function(e,t,n){"use strict";var r=n(1191).version,o=n(7944),a={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){a[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};a.transitional=function(e,t,n){function a(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new o(a(r," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!i[r]&&(i[r]=!0,console.warn(a(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),a=r.length;a-- >0;){var i=r[a],s=t[i];if(s){var c=e[i],l=void 0===c||s(c,i,e);if(!0!==l)throw new o("option "+i+" must be "+l,o.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o("Unknown option "+i,o.ERR_BAD_OPTION)}},validators:a}},1599:function(e,t,n){"use strict";var r,o=n(6013),a=Object.prototype.toString,i=(r=Object.create(null),function(e){var t=a.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return i(t)===e}}function c(e){return Array.isArray(e)}function l(e){return void 0===e}var u=s("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function d(e){if("object"!==i(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=s("Date"),m=s("File"),h=s("Blob"),E=s("FileList");function v(e){return"[object Function]"===a.call(e)}var g=s("URLSearchParams");function y(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:c,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||v(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:d,isUndefined:l,isDate:p,isFile:m,isBlob:h,isFunction:v,isStream:function(e){return f(e)&&v(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:y,merge:function e(){var t={};function n(n,r){d(t[r])&&d(n)?t[r]=e(t[r],n):d(n)?t[r]=e({},n):c(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)y(arguments[r],n);return t},extend:function(e,t,n){return y(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,a,i={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)i[a=r[o]]||(t[a]=e[a],i[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(l(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:E}},1534:function(e,t,n){"use strict";var r=n(7294);t.Z=function(){return r.createElement("section",{className:"footer bg-dark pt-5"},r.createElement("div",{className:"footer-first-section"},r.createElement("div",{className:"container wide-block"},r.createElement("div",{className:"row py-4 text-white footer-links"},r.createElement("div",{className:"col-lg-3 social-links-footer mb-4"},r.createElement("h3",null,"Find us on"),r.createElement("ul",null,r.createElement("li",null,"Facebook"),r.createElement("li",null,"Facebook"),r.createElement("li",null,"Facebook"),r.createElement("li",null,"Facebook"),r.createElement("li",null,"Facebook"))),r.createElement("div",{className:"col-lg-3 mb-4"},r.createElement("h3",null,"Core Products"),r.createElement("ul",null,r.createElement("li",null,"Cryptocurrency Exchange Turnkey"),r.createElement("li",null,"Cryptocurrency Exchange Turnkey"),r.createElement("li",null,"Cryptocurrency Exchange Turnkey"),r.createElement("li",null,"Cryptocurrency Exchange Turnkey"))),r.createElement("div",{className:"col-lg-3 mb-4"},r.createElement("h3",null,"Add-on Modules"),r.createElement("ul",null,r.createElement("li",null,"ICO/IEO/STO"),r.createElement("li",null," Referral & Affiliate System"))),r.createElement("div",{className:"col-lg-3 mb-4"},r.createElement("h3",null,"Solutions"),r.createElement("ul",null,r.createElement("li",null,"Crypto Liquidity Solution"),r.createElement("li",null,"Crypto Banking Solution")))))),r.createElement("div",{className:"footer-second-section text-white"},r.createElement("div",{className:"container wide-block"},r.createElement("div",{className:"row justify-content-between"},r.createElement("div",{className:"col-lg-3"},r.createElement("h3",null,"Ment Tech UK"),r.createElement("p",null,"One Avenue, 23 Finsbury Circus, London, England, EC2M 7EA")),r.createElement("div",{className:"col-lg-3"},r.createElement("h3",null,"Ment Tech Ireland"),r.createElement("p",null,"101, Monkstown Rd, Monkstown, Blackrock Co. Dublin, Ireland")),r.createElement("div",{className:"col-lg-3"},r.createElement("h3",null,"Ment Tech India"),r.createElement("p",null,"MENT TECH, 47/1 , First floor, Bhawanipur Colony, Indore, 452001")),r.createElement("div",{className:"col-lg-3"},r.createElement("h3",null,"Email Contact"),r.createElement("p",null,r.createElement("a",{href:"#"},"info@ment.tech")," ",r.createElement("br",null),"Mon - Fri, 9:00AM to 18:00PM"))))),r.createElement("div",{className:"footer-third-section text-white"},r.createElement("div",{className:"container wide-block"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-12"},r.createElement("p",{className:"footr"},"Ment Tech is a software technology provider, and do not own, hold, transact any crypto related businesses and funds. This website serves as a common showcase for products, solutions, services & marketing services of different software technology that work in the frames of their local legislations and have respective licenses and permissions for provided services. If you are interested in particular product, solution or services please contact sales team for more information about servicing company."),r.createElement("p",{className:"footr"},'“Ment Tech" is a trademark, that is registered in different Asian countries according to company registration protocol.'),r.createElement("p",{className:"footr"},'The ownership for word and logo trademarks “Ment Tech" (international registration numbers are xxxxxxx and xxxxxxx) belongs to Ment Tech, a company registered in the India with company number xxxxxxx. Ment Tech Pvt. Ltd. does not provide any financial or other services advertised on this website.'),r.createElement("p",{className:"footr"},"Please carefully study documents posted at this website: Legal information and Disclaimers, Privacy Policy and Cookie Policy. These documents are available only in English. You acknowledge that you know the English language at a sufficient level to understand the text of these documents, and you fully understand the legal consequences of these documents. In case you do not understand or understand the English language poorly, you acknowledge that you have used the services of a professional interpreter. If you don’t agree with this statement or information provided within documents, please leave this website immediately."))))))}},6057:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),o=n(6432),a=n(1534),i=n(6633),s=n.n(i),c=function(){var e=(0,r.useState)([]),t=e[0],n=e[1],o=(0,r.useState)(""),a=o[0],i=o[1];return(0,r.useEffect)((function(){s().get("https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR").then((function(e){n(e.data.coins)}))}),[]),r.createElement("div",null,r.createElement("section",{className:"cryptotable"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-lg-12 text-center "},r.createElement("h1",{className:"mt-5 mb-5"},"All Cryptocurrencies"),r.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){i(e.target.value)}}),r.createElement("table",{class:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{scope:"col"},"No."),r.createElement("th",{scope:"col"},"Pair"),r.createElement("th",{scope:"col"},"Price"),r.createElement("th",{scope:"col"},"24H Change "),r.createElement("th",{scope:"col"},"Price in BTC "),r.createElement("th",{scope:"col"},"MarketCap"),r.createElement("th",{scope:"col"},"24H Volume"))),r.createElement("tbody",null,t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e,t){return r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("th",{scope:"row"},t),r.createElement("td",{className:"logo d-flex justify-content-center"},r.createElement("a",{href:e.websiteUrl},r.createElement("img",{className:"mx-2",src:e.icon,alt:"logo",width:"30px"})),r.createElement("p",null,e.name)),r.createElement("td",null,"₹",e.price.toFixed(2)),r.createElement("td",null,e.priceChange1d,"%"),r.createElement("td",null,e.priceBtc),r.createElement("td",null,"₹",e.marketCap),r.createElement("td",null,e.volume),r.createElement("td",null,r.createElement("a",{className:"btn-white border-radius",href:"#"},"Trade"))))})))))))))},l=n(4818),u=function(){return r.createElement(r.Fragment,null,r.createElement(o.Z,null),r.createElement("section",{className:"bg-dark pb-5 pt-5"},r.createElement("div",{className:"container wide-block"},r.createElement("div",{className:"row align-items-center pt-5"},r.createElement("div",{className:"col-lg-8 text-white"},r.createElement("p",{className:"mt-4"},"Ment Tech"),r.createElement("h1",null,"CASE STUDY"),r.createElement("span",null,"From startups to enterprises, Ment Tech has helped companies rapidly scale their engineering teams with high-performing developers since 2006.")),r.createElement("div",{className:"col-lg-4"},r.createElement("img",{src:l.Z,alt:""}))))),r.createElement(c,null),r.createElement("section",{className:"case-listing pt-5 pb-5 "},r.createElement("div",{className:"container"},r.createElement("div",{className:"row align-items-center mb-5 pb-5"},r.createElement("div",{className:"col-lg-6 mb-4"},r.createElement("img",{src:l.Z,alt:""})),r.createElement("div",{className:"col-lg-6 mt-4"},r.createElement("h2",null,"EcoSwap"),r.createElement("p",null,"THE MOST EFFICIENT DEFI PLATFORM Access the most liquidity, lowest slippage and best exchange rates across Ethereum, Binance SmartChain and Polygon."),r.createElement("a",{href:"#",className:"btn btn-primary"},"View Case Study"))),r.createElement("div",{className:"row align-items-center"},r.createElement("div",{className:"col-lg-6 mb-4"},r.createElement("h2",null,"EcoSwap"),r.createElement("p",null,"Ecoswap is a leading international provider of education and career services with over 31,000 employees. X-Team helped Kaplan open opportunities for institutional testing that were previously impossible."),r.createElement("a",{href:"#",className:"btn btn-primary"},"View Case Study")),r.createElement("div",{className:"col-lg-6"},r.createElement("img",{src:l.Z,alt:""}))))),r.createElement(a.Z,null))}},4818:function(e,t,n){"use strict";t.Z=n.p+"static/sites-32fb2f3933e949b783df3db658c722b3.jpeg"}}]);
//# sourceMappingURL=184892ca1d61440366efd99954c69dc86dd1b4ec-6be47023969f1eaa6d03.js.map