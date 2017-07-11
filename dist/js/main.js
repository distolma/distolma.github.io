"use strict";!function(t){function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function e(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var r={next:function(){var r=t.shift();return{done:void 0===r,value:r}}};return v.iterable&&(r[Symbol.iterator]=function(){return r}),r}function n(t){this.map={},t instanceof n?t.forEach(function(t,r){this.append(r,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(r){this.append(r,t[r])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(r,e){t.onload=function(){r(t.result)},t.onerror=function(){e(t.error)}})}function s(t){var r=new FileReader,e=a(r);return r.readAsArrayBuffer(t),e}function u(t){var r=new FileReader,e=a(r);return r.readAsText(t),e}function h(t){for(var r=new Uint8Array(t),e=new Array(r.length),o=0;o<r.length;o++)e[o]=String.fromCharCode(r[o]);return e.join("")}function c(t){if(t.slice)return t.slice(0);var r=new Uint8Array(t.byteLength);return r.set(new Uint8Array(t)),r.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&T(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(t){var r=t.toUpperCase();return _.indexOf(r)>-1?r:t}function l(t,r){var e=(r=r||{}).body;if(t instanceof l){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,r.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,e||null==t._bodyInit||(e=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=r.credentials||this.credentials||"omit",!r.headers&&this.headers||(this.headers=new n(r.headers)),this.method=p(r.method||this.method||"GET"),this.mode=r.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&e)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(e)}function d(t){var r=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),o=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");r.append(decodeURIComponent(o),decodeURIComponent(n))}}),r}function y(t){var r=new n;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),o=e.shift().trim();if(o){var n=e.join(":").trim();r.append(o,n)}}),r}function b(t,r){r||(r={}),this.type="default",this.status=void 0===r.status?200:r.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in r?r.statusText:"OK",this.headers=new n(r.headers),this.url=r.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var A=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],T=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&A.indexOf(Object.prototype.toString.call(t))>-1};n.prototype.append=function(t,o){t=r(t),o=e(o);var n=this.map[t];this.map[t]=n?n+","+o:o},n.prototype.delete=function(t){delete this.map[r(t)]},n.prototype.get=function(t){return t=r(t),this.has(t)?this.map[t]:null},n.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},n.prototype.set=function(t,o){this.map[r(t)]=e(o)},n.prototype.forEach=function(t,r){for(var e in this.map)this.map.hasOwnProperty(e)&&t.call(r,this.map[e],e,this)},n.prototype.keys=function(){var t=[];return this.forEach(function(r,e){t.push(e)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(r){t.push(r)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(r,e){t.push([e,r])}),o(t)},v.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},f.call(l.prototype),f.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];b.redirect=function(t,r){if(-1===w.indexOf(r))throw new RangeError("Invalid status code");return new b(null,{status:r,headers:{location:t}})},t.Headers=n,t.Request=l,t.Response=b,t.fetch=function(t,r){return new Promise(function(e,o){var n=new l(t,r),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;e(new b(r,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&v.blob&&(i.responseType="blob"),n.headers.forEach(function(t,r){i.setRequestHeader(r,t)}),i.send(void 0===n._bodyInit?null:n._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:void 0),function t(r,e,o){function n(a,s){if(!e[a]){if(!r[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var c=e[a]={exports:{}};r[a][0].call(c.exports,function(t){var e=r[a][1][t];return n(e||t)},c,c.exports,t,r,e,o)}return e[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(t,r,e){if(!o)var o={map:function(t,r){var e={};return r?t.map(function(t,o){return e.index=o,r.call(e,t)}):t.slice()},naturalOrder:function(t,r){return r>t?-1:t>r?1:0},sum:function(t,r){var e={};return t.reduce(r?function(t,o,n){return e.index=n,t+r.call(e,o)}:function(t,r){return t+r},0)},max:function(t,r){return Math.max.apply(null,r?o.map(t,r):t)}};var n=function(){function t(t,r,e){return(t<<2*u)+(r<<u)+e}function r(t){function r(){e.sort(t),o=!0}var e=[],o=!1;return{push:function(t){e.push(t),o=!1},peek:function(t){return o||r(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return o||r(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return o||r(),e}}}function e(t,r,e,o,n,i,a){var s=this;s.r1=t,s.r2=r,s.g1=e,s.g2=o,s.b1=n,s.b2=i,s.histo=a}function n(){this.vboxes=new r(function(t,r){return o.naturalOrder(t.vbox.count()*t.vbox.volume(),r.vbox.count()*r.vbox.volume())})}function i(r){var e,o,n,i,a=1<<3*u,s=new Array(a);return r.forEach(function(r){o=r[0]>>h,n=r[1]>>h,i=r[2]>>h,e=t(o,n,i),s[e]=(s[e]||0)+1}),s}function a(t,r){var o,n,i,a=1e6,s=0,u=1e6,c=0,f=1e6,p=0;return t.forEach(function(t){o=t[0]>>h,n=t[1]>>h,i=t[2]>>h,a>o?a=o:o>s&&(s=o),u>n?u=n:n>c&&(c=n),f>i?f=i:i>p&&(p=i)}),new e(a,s,u,c,f,p,r)}function s(r,e){if(e.count()){var n=e.r2-e.r1+1,i=e.g2-e.g1+1,a=e.b2-e.b1+1,s=o.max([n,i,a]);if(1==e.count())return[e.copy()];var u,h,c,f,p=0,l=[],d=[];if(s==n)for(u=e.r1;u<=e.r2;u++){for(f=0,h=e.g1;h<=e.g2;h++)for(c=e.b1;c<=e.b2;c++)f+=r[t(u,h,c)]||0;p+=f,l[u]=p}else if(s==i)for(u=e.g1;u<=e.g2;u++){for(f=0,h=e.r1;h<=e.r2;h++)for(c=e.b1;c<=e.b2;c++)f+=r[t(h,u,c)]||0;p+=f,l[u]=p}else for(u=e.b1;u<=e.b2;u++){for(f=0,h=e.r1;h<=e.r2;h++)for(c=e.g1;c<=e.g2;c++)f+=r[t(h,c,u)]||0;p+=f,l[u]=p}return l.forEach(function(t,r){d[r]=p-t}),function(t){var r,o,n,i,a,s=t+"1",h=t+"2",c=0;for(u=e[s];u<=e[h];u++)if(l[u]>p/2){for(n=e.copy(),i=e.copy(),r=u-e[s],a=(o=e[h]-u)>=r?Math.min(e[h]-1,~~(u+o/2)):Math.max(e[s],~~(u-1-r/2));!l[a];)a++;for(c=d[a];!c&&l[a-1];)c=d[--a];return n[h]=a,i[s]=n[h]+1,[n,i]}}(s==n?"r":s==i?"g":"b")}}var u=5,h=8-u,c=1e3,f=.75;return e.prototype={volume:function(t){var r=this;return(!r._volume||t)&&(r._volume=(r.r2-r.r1+1)*(r.g2-r.g1+1)*(r.b2-r.b1+1)),r._volume},count:function(r){var e=this,o=e.histo;if(!e._count_set||r){var n,i,a,s=0;for(n=e.r1;n<=e.r2;n++)for(i=e.g1;i<=e.g2;i++)for(a=e.b1;a<=e.b2;a++)s+=o[t(n,i,a)]||0;e._count=s,e._count_set=!0}return e._count},copy:function(){var t=this;return new e(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(r){var e=this,o=e.histo;if(!e._avg||r){var n,i,a,s,h=0,c=1<<8-u,f=0,p=0,l=0;for(i=e.r1;i<=e.r2;i++)for(a=e.g1;a<=e.g2;a++)for(s=e.b1;s<=e.b2;s++)h+=n=o[t(i,a,s)]||0,f+=n*(i+.5)*c,p+=n*(a+.5)*c,l+=n*(s+.5)*c;e._avg=h?[~~(f/h),~~(p/h),~~(l/h)]:[~~(c*(e.r1+e.r2+1)/2),~~(c*(e.g1+e.g2+1)/2),~~(c*(e.b1+e.b2+1)/2)]}return e._avg},contains:function(t){var r=this,e=t[0]>>h;return gval=t[1]>>h,bval=t[2]>>h,e>=r.r1&&e<=r.r2&&gval>=r.g1&&gval<=r.g2&&bval>=r.b1&&bval<=r.b2}},n.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,e=0;e<r.size();e++)if(r.peek(e).vbox.contains(t))return r.peek(e).color;return this.nearest(t)},nearest:function(t){for(var r,e,o,n=this.vboxes,i=0;i<n.size();i++)(r>(e=Math.sqrt(Math.pow(t[0]-n.peek(i).color[0],2)+Math.pow(t[1]-n.peek(i).color[1],2)+Math.pow(t[2]-n.peek(i).color[2],2)))||void 0===r)&&(r=e,o=n.peek(i).color);return o},forcebw:function(){var t=this.vboxes;t.sort(function(t,r){return o.naturalOrder(o.sum(t.color),o.sum(r.color))});var r=t[0].color;r[0]<5&&r[1]<5&&r[2]<5&&(t[0].color=[0,0,0]);var e=t.length-1,n=t[e].color;n[0]>251&&n[1]>251&&n[2]>251&&(t[e].color=[255,255,255])}},{quantize:function(t,e){function u(t,r){for(var e,o=1,n=0;c>n;)if((e=t.pop()).count()){var i=s(h,e),a=i[0],u=i[1];if(!a)return;if(t.push(a),u&&(t.push(u),o++),o>=r)return;if(n++>c)return}else t.push(e),n++}if(!t.length||2>e||e>256)return!1;var h=i(t),p=0;h.forEach(function(){p++});var l=a(t,h),d=new r(function(t,r){return o.naturalOrder(t.count(),r.count())});d.push(l),u(d,f*e);for(var y=new r(function(t,r){return o.naturalOrder(t.count()*t.volume(),r.count()*r.volume())});d.size();)y.push(d.pop());u(y,e-y.size());for(var b=new n;y.size();)b.push(y.pop());return b}}}();r.exports=n.quantize},{}],2:[function(t,r,e){(function(){var r,e,o,n=function(t,r){return function(){return t.apply(r,arguments)}},i=[].slice;window.Swatch=e=function(){function t(t,r){this.rgb=t,this.population=r}return t.prototype.hsl=void 0,t.prototype.rgb=void 0,t.prototype.population=1,t.yiq=0,t.prototype.getHsl=function(){return this.hsl?this.hsl:this.hsl=o.rgbToHsl(this.rgb[0],this.rgb[1],this.rgb[2])},t.prototype.getPopulation=function(){return this.population},t.prototype.getRgb=function(){return this.rgb},t.prototype.getHex=function(){return"#"+((1<<24)+(this.rgb[0]<<16)+(this.rgb[1]<<8)+this.rgb[2]).toString(16).slice(1,7)},t.prototype.getTitleTextColor=function(){return this._ensureTextColors(),this.yiq<200?"#fff":"#000"},t.prototype.getBodyTextColor=function(){return this._ensureTextColors(),this.yiq<150?"#fff":"#000"},t.prototype._ensureTextColors=function(){return this.yiq?void 0:this.yiq=(299*this.rgb[0]+587*this.rgb[1]+114*this.rgb[2])/1e3},t}(),window.Vibrant=o=function(){function o(t,o,i){this.swatches=n(this.swatches,this);var a,s,u,h,c,f,p,l,d,y;void 0===o&&(o=64),void 0===i&&(i=5),f=new r(t);try{for(d=f.getImageData().data,l=f.getPixelCount(),a=[],c=0;l>c;)y=d[(p=4*c)+0],h=d[p+1],s=d[p+2],d[p+3]>=125&&(y>250&&h>250&&s>250||a.push([y,h,s])),c+=i;u=this.quantize(a,o),this._swatches=u.vboxes.map(function(t){return new e(t.color,t.vbox.count())}),this.maxPopulation=this.findMaxPopulation,this.generateVarationColors(),this.generateEmptySwatches()}finally{f.removeCanvas()}}return o.prototype.quantize=t("quantize"),o.prototype._swatches=[],o.prototype.TARGET_DARK_LUMA=.26,o.prototype.MAX_DARK_LUMA=.45,o.prototype.MIN_LIGHT_LUMA=.55,o.prototype.TARGET_LIGHT_LUMA=.74,o.prototype.MIN_NORMAL_LUMA=.3,o.prototype.TARGET_NORMAL_LUMA=.5,o.prototype.MAX_NORMAL_LUMA=.7,o.prototype.TARGET_MUTED_SATURATION=.3,o.prototype.MAX_MUTED_SATURATION=.4,o.prototype.TARGET_VIBRANT_SATURATION=1,o.prototype.MIN_VIBRANT_SATURATION=.35,o.prototype.WEIGHT_SATURATION=3,o.prototype.WEIGHT_LUMA=6,o.prototype.WEIGHT_POPULATION=1,o.prototype.VibrantSwatch=void 0,o.prototype.MutedSwatch=void 0,o.prototype.DarkVibrantSwatch=void 0,o.prototype.DarkMutedSwatch=void 0,o.prototype.LightVibrantSwatch=void 0,o.prototype.LightMutedSwatch=void 0,o.prototype.HighestPopulation=0,o.prototype.generateVarationColors=function(){return this.VibrantSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.LightVibrantSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.DarkVibrantSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.MutedSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.LightMutedSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.DarkMutedSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION)},o.prototype.generateEmptySwatches=function(){var t;return void 0===this.VibrantSwatch&&void 0!==this.DarkVibrantSwatch&&(t=this.DarkVibrantSwatch.getHsl(),t[2]=this.TARGET_NORMAL_LUMA,this.VibrantSwatch=new e(o.hslToRgb(t[0],t[1],t[2]),0)),void 0===this.DarkVibrantSwatch&&void 0!==this.VibrantSwatch?(t=this.VibrantSwatch.getHsl(),t[2]=this.TARGET_DARK_LUMA,this.DarkVibrantSwatch=new e(o.hslToRgb(t[0],t[1],t[2]),0)):void 0},o.prototype.findMaxPopulation=function(){var t,r,e,o,n;for(e=0,t=0,r=(o=this._swatches).length;r>t;t++)n=o[t],e=Math.max(e,n.getPopulation());return e},o.prototype.findColorVariation=function(t,r,e,o,n,i){var a,s,u,h,c,f,p,l,d;for(h=void 0,c=0,a=0,s=(f=this._swatches).length;s>a;a++)p=(l=f[a]).getHsl()[1],u=l.getHsl()[2],p>=n&&i>=p&&u>=r&&e>=u&&!this.isAlreadySelected(l)&&(d=this.createComparisonValue(p,o,u,t,l.getPopulation(),this.HighestPopulation),(void 0===h||d>c)&&(h=l,c=d));return h},o.prototype.createComparisonValue=function(t,r,e,o,n,i){return this.weightedMean(this.invertDiff(t,r),this.WEIGHT_SATURATION,this.invertDiff(e,o),this.WEIGHT_LUMA,n/i,this.WEIGHT_POPULATION)},o.prototype.invertDiff=function(t,r){return 1-Math.abs(t-r)},o.prototype.weightedMean=function(){var t,r,e,o,n;for(o=1<=arguments.length?i.call(arguments,0):[],r=0,e=0,t=0;t<o.length;)r+=o[t]*(n=o[t+1]),e+=n,t+=2;return r/e},o.prototype.swatches=function(){return{Vibrant:this.VibrantSwatch,Muted:this.MutedSwatch,DarkVibrant:this.DarkVibrantSwatch,DarkMuted:this.DarkMutedSwatch,LightVibrant:this.LightVibrantSwatch,LightMuted:this.LightMuted}},o.prototype.isAlreadySelected=function(t){return this.VibrantSwatch===t||this.DarkVibrantSwatch===t||this.LightVibrantSwatch===t||this.MutedSwatch===t||this.DarkMutedSwatch===t||this.LightMutedSwatch===t},o.rgbToHsl=function(t,r,e){var o,n,i,a,s,u;if(t/=255,r/=255,e/=255,a=Math.max(t,r,e),s=Math.min(t,r,e),n=void 0,u=void 0,i=(a+s)/2,a===s)n=u=0;else{switch(o=a-s,u=i>.5?o/(2-a-s):o/(a+s),a){case t:n=(r-e)/o+(e>r?6:0);break;case r:n=(e-t)/o+2;break;case e:n=(t-r)/o+4}n/=6}return[n,u,i]},o.hslToRgb=function(t,r,e){var o,n,i,a,s,u;return u=void 0,n=void 0,o=void 0,i=function(t,r,e){return 0>e&&(e+=1),e>1&&(e-=1),1/6>e?t+6*(r-t)*e:.5>e?r:2/3>e?t+(r-t)*(2/3-e)*6:t},0===r?u=n=o=e:(s=.5>e?e*(1+r):e+r-e*r,a=2*e-s,u=i(a,s,t+1/3),n=i(a,s,t),o=i(a,s,t-1/3)),[255*u,255*n,255*o]},o}(),window.CanvasImage=r=function(){function t(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)}return t.prototype.clear=function(){return this.context.clearRect(0,0,this.width,this.height)},t.prototype.update=function(t){return this.context.putImageData(t,0,0)},t.prototype.getPixelCount=function(){return this.width*this.height},t.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},t.prototype.removeCanvas=function(){return this.canvas.parentNode.removeChild(this.canvas)},t}()}).call(this)},{quantize:1}]},{},[2]);var getMainColor=function(t){var r=new Vibrant(t).swatches();return Object.keys(r).map(function(t){return r[t]}).sort(function(t,r){return r.population-t.population})[0].getHex()},setThemeColor=function(t){document.head.querySelectorAll("meta[theme]").forEach(function(r){return r.setAttribute("content",t)})},parseJSON=function(t){return t.json()},mapToUrl=function(t){return t.urls.regular},setBackground=function(t){var r=t||"/dist/img/bg.jpeg",e=new Image;e.crossOrigin="Anonymous";var o=document.body.style;e.onload=function(){var t=getMainColor(e);o.backgroundColor=t,o.backgroundImage="url("+r+")",setThemeColor(t),deleteLoader()},e.src=r},deleteLoader=function(){var t=document.body,r=document.getElementById("preloader");r.classList.add("end"),r.addEventListener("transitionend",function(){r.remove(),t.classList.remove("loading")})};fetch("https://api.unsplash.com/photos/random?w="+window.innerWidth,{headers:{Authorization:"Client-ID cf2490a94f8eee61bc9fdce89fe09521a0ec14ef593924d780c3c77b79af08df"}}).then(parseJSON).then(mapToUrl).then(setBackground).catch(function(){return setBackground()});