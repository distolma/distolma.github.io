"use strict";!function(t){function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function h(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&m(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!A(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(t){var e=t.toUpperCase();return T.indexOf(e)>-1?e:t}function l(t,e){var r=(e=e||{}).body;if(t instanceof l){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new n(e.headers)),this.method=p(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function y(t){var e=new n;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=function(t){return t&&DataView.prototype.isPrototypeOf(t)},A=ArrayBuffer.isView||function(t){return t&&g.indexOf(Object.prototype.toString.call(t))>-1};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];this.map[t]=n?n+","+o:o},n.prototype.delete=function(t){delete this.map[e(t)]},n.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=r(o)},n.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},v.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},f.call(l.prototype),f.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];b.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=l,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,o){var n=new l(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&v.blob&&(i.responseType="blob"),n.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===n._bodyInit?null:n._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:void 0),function t(e,r,o){function n(a,s){if(!r[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){var r=e[a][1][t];return n(r||t)},c,c.exports,t,e,r,o)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(t,e,r){if(!o)var o={map:function(t,e){var r={};return e?t.map(function(t,o){return r.index=o,e.call(r,t)}):t.slice()},naturalOrder:function(t,e){return e>t?-1:t>e?1:0},sum:function(t,e){var r={};return t.reduce(e?function(t,o,n){return r.index=n,t+e.call(r,o)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?o.map(t,e):t)}};var n=function(){function t(t,e,r){return(t<<2*u)+(e<<u)+r}function e(t){function e(){r.sort(t),o=!0}var r=[],o=!1;return{push:function(t){r.push(t),o=!1},peek:function(t){return o||e(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return o||e(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return o||e(),r}}}function r(t,e,r,o,n,i,a){var s=this;s.r1=t,s.r2=e,s.g1=r,s.g2=o,s.b1=n,s.b2=i,s.histo=a}function n(){this.vboxes=new e(function(t,e){return o.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function i(e){var r,o,n,i,a=1<<3*u,s=new Array(a);return e.forEach(function(e){o=e[0]>>h,n=e[1]>>h,i=e[2]>>h,r=t(o,n,i),s[r]=(s[r]||0)+1}),s}function a(t,e){var o,n,i,a=1e6,s=0,u=1e6,c=0,f=1e6,p=0;return t.forEach(function(t){o=t[0]>>h,n=t[1]>>h,i=t[2]>>h,a>o?a=o:o>s&&(s=o),u>n?u=n:n>c&&(c=n),f>i?f=i:i>p&&(p=i)}),new r(a,s,u,c,f,p,e)}function s(e,r){if(r.count()){var n=r.r2-r.r1+1,i=r.g2-r.g1+1,a=r.b2-r.b1+1,s=o.max([n,i,a]);if(1==r.count())return[r.copy()];var u,h,c,f,p=0,l=[],d=[];if(s==n)for(u=r.r1;u<=r.r2;u++){for(f=0,h=r.g1;h<=r.g2;h++)for(c=r.b1;c<=r.b2;c++)f+=e[t(u,h,c)]||0;p+=f,l[u]=p}else if(s==i)for(u=r.g1;u<=r.g2;u++){for(f=0,h=r.r1;h<=r.r2;h++)for(c=r.b1;c<=r.b2;c++)f+=e[t(h,u,c)]||0;p+=f,l[u]=p}else for(u=r.b1;u<=r.b2;u++){for(f=0,h=r.r1;h<=r.r2;h++)for(c=r.g1;c<=r.g2;c++)f+=e[t(h,c,u)]||0;p+=f,l[u]=p}return l.forEach(function(t,e){d[e]=p-t}),function(t){var e,o,n,i,a,s=t+"1",h=t+"2",c=0;for(u=r[s];u<=r[h];u++)if(l[u]>p/2){for(n=r.copy(),i=r.copy(),e=u-r[s],a=(o=r[h]-u)>=e?Math.min(r[h]-1,~~(u+o/2)):Math.max(r[s],~~(u-1-e/2));!l[a];)a++;for(c=d[a];!c&&l[a-1];)c=d[--a];return n[h]=a,i[s]=n[h]+1,[n,i]}}(s==n?"r":s==i?"g":"b")}}var u=5,h=8-u,c=1e3,f=.75;return r.prototype={volume:function(t){var e=this;return(!e._volume||t)&&(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var r=this,o=r.histo;if(!r._count_set||e){var n,i,a,s=0;for(n=r.r1;n<=r.r2;n++)for(i=r.g1;i<=r.g2;i++)for(a=r.b1;a<=r.b2;a++)s+=o[t(n,i,a)]||0;r._count=s,r._count_set=!0}return r._count},copy:function(){var t=this;return new r(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var r=this,o=r.histo;if(!r._avg||e){var n,i,a,s,h=0,c=1<<8-u,f=0,p=0,l=0;for(i=r.r1;i<=r.r2;i++)for(a=r.g1;a<=r.g2;a++)for(s=r.b1;s<=r.b2;s++)h+=n=o[t(i,a,s)]||0,f+=n*(i+.5)*c,p+=n*(a+.5)*c,l+=n*(s+.5)*c;r._avg=h?[~~(f/h),~~(p/h),~~(l/h)]:[~~(c*(r.r1+r.r2+1)/2),~~(c*(r.g1+r.g2+1)/2),~~(c*(r.b1+r.b2+1)/2)]}return r._avg},contains:function(t){var e=this,r=t[0]>>h;return gval=t[1]>>h,bval=t[2]>>h,r>=e.r1&&r<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},n.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,r=0;r<e.size();r++)if(e.peek(r).vbox.contains(t))return e.peek(r).color;return this.nearest(t)},nearest:function(t){for(var e,r,o,n=this.vboxes,i=0;i<n.size();i++)(e>(r=Math.sqrt(Math.pow(t[0]-n.peek(i).color[0],2)+Math.pow(t[1]-n.peek(i).color[1],2)+Math.pow(t[2]-n.peek(i).color[2],2)))||void 0===e)&&(e=r,o=n.peek(i).color);return o},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return o.naturalOrder(o.sum(t.color),o.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,n=t[r].color;n[0]>251&&n[1]>251&&n[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(t,r){function u(t,e){for(var r,o=1,n=0;c>n;)if((r=t.pop()).count()){var i=s(h,r),a=i[0],u=i[1];if(!a)return;if(t.push(a),u&&(t.push(u),o++),o>=e)return;if(n++>c)return}else t.push(r),n++}if(!t.length||2>r||r>256)return!1;var h=i(t),p=0;h.forEach(function(){p++});var l=a(t,h),d=new e(function(t,e){return o.naturalOrder(t.count(),e.count())});d.push(l),u(d,f*r);for(var y=new e(function(t,e){return o.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});d.size();)y.push(d.pop());u(y,r-y.size());for(var b=new n;y.size();)b.push(y.pop());return b}}}();e.exports=n.quantize},{}],2:[function(t,e,r){(function(){var e,r,o,n=function(t,e){return function(){return t.apply(e,arguments)}},i=[].slice;window.Swatch=r=function(){function t(t,e){this.rgb=t,this.population=e}return t.prototype.hsl=void 0,t.prototype.rgb=void 0,t.prototype.population=1,t.yiq=0,t.prototype.getHsl=function(){return this.hsl?this.hsl:this.hsl=o.rgbToHsl(this.rgb[0],this.rgb[1],this.rgb[2])},t.prototype.getPopulation=function(){return this.population},t.prototype.getRgb=function(){return this.rgb},t.prototype.getHex=function(){return"#"+((1<<24)+(this.rgb[0]<<16)+(this.rgb[1]<<8)+this.rgb[2]).toString(16).slice(1,7)},t.prototype.getTitleTextColor=function(){return this._ensureTextColors(),this.yiq<200?"#fff":"#000"},t.prototype.getBodyTextColor=function(){return this._ensureTextColors(),this.yiq<150?"#fff":"#000"},t.prototype._ensureTextColors=function(){return this.yiq?void 0:this.yiq=(299*this.rgb[0]+587*this.rgb[1]+114*this.rgb[2])/1e3},t}(),window.Vibrant=o=function(){function o(t,o,i){this.swatches=n(this.swatches,this);var a,s,u,h,c,f,p,l,d,y;void 0===o&&(o=64),void 0===i&&(i=5),f=new e(t);try{for(d=f.getImageData().data,l=f.getPixelCount(),a=[],c=0;l>c;)y=d[(p=4*c)+0],h=d[p+1],s=d[p+2],d[p+3]>=125&&(y>250&&h>250&&s>250||a.push([y,h,s])),c+=i;u=this.quantize(a,o),this._swatches=u.vboxes.map(function(t){return new r(t.color,t.vbox.count())}),this.maxPopulation=this.findMaxPopulation,this.generateVarationColors(),this.generateEmptySwatches()}finally{f.removeCanvas()}}return o.prototype.quantize=t("quantize"),o.prototype._swatches=[],o.prototype.TARGET_DARK_LUMA=.26,o.prototype.MAX_DARK_LUMA=.45,o.prototype.MIN_LIGHT_LUMA=.55,o.prototype.TARGET_LIGHT_LUMA=.74,o.prototype.MIN_NORMAL_LUMA=.3,o.prototype.TARGET_NORMAL_LUMA=.5,o.prototype.MAX_NORMAL_LUMA=.7,o.prototype.TARGET_MUTED_SATURATION=.3,o.prototype.MAX_MUTED_SATURATION=.4,o.prototype.TARGET_VIBRANT_SATURATION=1,o.prototype.MIN_VIBRANT_SATURATION=.35,o.prototype.WEIGHT_SATURATION=3,o.prototype.WEIGHT_LUMA=6,o.prototype.WEIGHT_POPULATION=1,o.prototype.VibrantSwatch=void 0,o.prototype.MutedSwatch=void 0,o.prototype.DarkVibrantSwatch=void 0,o.prototype.DarkMutedSwatch=void 0,o.prototype.LightVibrantSwatch=void 0,o.prototype.LightMutedSwatch=void 0,o.prototype.HighestPopulation=0,o.prototype.generateVarationColors=function(){return this.VibrantSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.LightVibrantSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.DarkVibrantSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1),this.MutedSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.LightMutedSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION),this.DarkMutedSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION)},o.prototype.generateEmptySwatches=function(){var t;return void 0===this.VibrantSwatch&&void 0!==this.DarkVibrantSwatch&&(t=this.DarkVibrantSwatch.getHsl(),t[2]=this.TARGET_NORMAL_LUMA,this.VibrantSwatch=new r(o.hslToRgb(t[0],t[1],t[2]),0)),void 0===this.DarkVibrantSwatch&&void 0!==this.VibrantSwatch?(t=this.VibrantSwatch.getHsl(),t[2]=this.TARGET_DARK_LUMA,this.DarkVibrantSwatch=new r(o.hslToRgb(t[0],t[1],t[2]),0)):void 0},o.prototype.findMaxPopulation=function(){var t,e,r,o,n;for(r=0,t=0,e=(o=this._swatches).length;e>t;t++)n=o[t],r=Math.max(r,n.getPopulation());return r},o.prototype.findColorVariation=function(t,e,r,o,n,i){var a,s,u,h,c,f,p,l,d;for(h=void 0,c=0,a=0,s=(f=this._swatches).length;s>a;a++)p=(l=f[a]).getHsl()[1],u=l.getHsl()[2],p>=n&&i>=p&&u>=e&&r>=u&&!this.isAlreadySelected(l)&&(d=this.createComparisonValue(p,o,u,t,l.getPopulation(),this.HighestPopulation),(void 0===h||d>c)&&(h=l,c=d));return h},o.prototype.createComparisonValue=function(t,e,r,o,n,i){return this.weightedMean(this.invertDiff(t,e),this.WEIGHT_SATURATION,this.invertDiff(r,o),this.WEIGHT_LUMA,n/i,this.WEIGHT_POPULATION)},o.prototype.invertDiff=function(t,e){return 1-Math.abs(t-e)},o.prototype.weightedMean=function(){var t,e,r,o,n;for(o=1<=arguments.length?i.call(arguments,0):[],e=0,r=0,t=0;t<o.length;)e+=o[t]*(n=o[t+1]),r+=n,t+=2;return e/r},o.prototype.swatches=function(){return{Vibrant:this.VibrantSwatch,Muted:this.MutedSwatch,DarkVibrant:this.DarkVibrantSwatch,DarkMuted:this.DarkMutedSwatch,LightVibrant:this.LightVibrantSwatch,LightMuted:this.LightMuted}},o.prototype.isAlreadySelected=function(t){return this.VibrantSwatch===t||this.DarkVibrantSwatch===t||this.LightVibrantSwatch===t||this.MutedSwatch===t||this.DarkMutedSwatch===t||this.LightMutedSwatch===t},o.rgbToHsl=function(t,e,r){var o,n,i,a,s,u;if(t/=255,e/=255,r/=255,a=Math.max(t,e,r),s=Math.min(t,e,r),n=void 0,u=void 0,i=(a+s)/2,a===s)n=u=0;else{switch(o=a-s,u=i>.5?o/(2-a-s):o/(a+s),a){case t:n=(e-r)/o+(r>e?6:0);break;case e:n=(r-t)/o+2;break;case r:n=(t-e)/o+4}n/=6}return[n,u,i]},o.hslToRgb=function(t,e,r){var o,n,i,a,s,u;return u=void 0,n=void 0,o=void 0,i=function(t,e,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?t+6*(e-t)*r:.5>r?e:2/3>r?t+(e-t)*(2/3-r)*6:t},0===e?u=n=o=r:(s=.5>r?r*(1+e):r+e-r*e,a=2*r-s,u=i(a,s,t+1/3),n=i(a,s,t),o=i(a,s,t-1/3)),[255*u,255*n,255*o]},o}(),window.CanvasImage=e=function(){function t(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)}return t.prototype.clear=function(){return this.context.clearRect(0,0,this.width,this.height)},t.prototype.update=function(t){return this.context.putImageData(t,0,0)},t.prototype.getPixelCount=function(){return this.width*this.height},t.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},t.prototype.removeCanvas=function(){return this.canvas.parentNode.removeChild(this.canvas)},t}()}).call(this)},{quantize:1}]},{},[2]);var KEY="cf2490a94f8eee61bc9fdce89fe09521a0ec14ef593924d780c3c77b79af08df",getColors=function(t){return new Vibrant(t).swatches()},getVibrantColor=function(t){return t.Vibrant?t.Vibrant.getHex():t.LightVibrant?t.LightVibrant.getHex():"rgba(256, 256, 256, 0.7)"},isLandscape=window.innerHeight<window.innerWidth,getMainColor=function(t){return Object.keys(t).map(function(e){return t[e]}).sort(function(t,e){return e.population-t.population})[0].getHex()},setSeletion=function(t){var e="\n    color: #fff;\n    background-color: "+t+";\n  ";insertCss("\n    ::-moz-selection {"+e+"}\n    ::selection {"+e+"}\n  ")},setBackground=function(t,e){var r=document.body.style;r.backgroundColor=t,r.backgroundImage="url("+e+")"},setThemeColor=function(t){var e=document.head.querySelectorAll("meta[theme]");Array.prototype.forEach.call(e,function(e){e.setAttribute("content",t)})},getUserInfo=function(t){if(t){var e=t.user;return{name:e.name,link:[e.links.html,"?utm_source=distolma","&utm_medium=referral","&utm_campaign=api-credit"].join("")}}},usetInfoTemplate=function(t){return'\n  <p class="user-info">\n    <span class="breckets">\n      <span><a target="_blank" rel="nofollow" href="'+t.link+'">'+t.name+'</a></span>\n      <span><a target="_blank" rel="nofollow" href="https://unsplash.com/">Unsplash</a></span>\n    </span>\n  </p>\n'},displayUserInfo=function(t){var e=getUserInfo(t);return document.querySelector("#userInfo").innerHTML=usetInfoTemplate(e),t},setAccentColor=function(t){insertCss("\n    a:hover i{color:"+t+"};\n    a:focus i{color:"+t+"};\n  ")},insertCss=function(t){var e=document.createElement("style");e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),document.getElementsByTagName("head")[0].appendChild(e)},parseJSON=function(t){return t.json()},mapResponseToUrl=function(t){return t.urls.regular},onLoadHandler=function(t,e){var r=getColors(t),o=getMainColor(r),n=getVibrantColor(r);setBackground(o,e),setThemeColor(o),setSeletion(n),setAccentColor(n)},loadImage=function(t){var e=t||"/dist/img/bg.jpeg",r=new Image;r.crossOrigin="Anonymous",r.onload=function(){onLoadHandler(r,e),deleteLoader(),stopReloadAnim()},r.src=e},deleteLoader=function(){var t=document.body,e=document.getElementById("preloader");e&&(e.classList.add("end"),e.addEventListener("transitionend",function(){e.remove(),t.classList.remove("loading")}))},orientation=isLandscape?"landscape":"portrait",fetchImage=function(){return fetch(["https://api.unsplash.com/photos/random","?w="+window.innerWidth,"&orientation="+orientation].join(""),{headers:{Authorization:"Client-ID "+KEY}}).then(parseJSON).then(displayUserInfo).then(mapResponseToUrl).then(loadImage).catch(function(){return loadImage()})},stopReloadAnim=function(){document.getElementById("reloadImage").classList.remove("active")};document.getElementById("reloadImage").addEventListener("click",function(t){t.preventDefault(),this.classList.add("active"),fetchImage()});var toggle=!1;document.getElementById("hideProfile").addEventListener("click",function(t){t.preventDefault(),document.body.classList.toggle("hide-profile");var e=this.querySelector("i").classList;(toggle=!toggle)?(e.remove("icon-eye-off"),e.add("icon-eye")):(e.add("icon-eye-off"),e.remove("icon-eye"))}),window.onload=fetchImage;