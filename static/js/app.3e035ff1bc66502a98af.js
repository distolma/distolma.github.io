webpackJsonp([1],{"/j56":function(t,n){},"5mkQ":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"background"},[i("progressive-background",{attrs:{src:t.images.custom,placeholder:t.images.thumb},on:{onLoad:t.onLoadImage}},[i("div",{class:[t.isStriped?"":"background__striped--hide","background__striped"]},[i("div",{staticClass:"background__container"},[t._t("default")],2)])])],1)},a=[],o={render:e,staticRenderFns:a};n.a=o},AwNJ:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["profile",t.isVisible?"":"profile--hide"]},[e("div",{staticClass:"profile__img-wrapper"},[e("img",{staticClass:"profile__img",attrs:{src:i("lS+k"),alt:t.name}})]),t._v(" "),e("h1",{staticClass:"profile__name"},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),e("h3",{staticClass:"profile__position"},[t._v("\n    "+t._s(t.position)+"\n  ")]),t._v(" "),e("ul",{staticClass:"profile__social"},t._l(t.socials,function(t){return e("li",{key:t.type,staticClass:"profile__social-item"},[e("a",{staticClass:"profile__social-link",attrs:{href:t.url,target:"_black",rel:"nofollow",title:t.title}},[e("icon",{attrs:{name:t.type,label:t.title}})],1)])}))])},a=[],o={render:e,staticRenderFns:a};n.a=o},D4uH:function(t,n,i){"use strict";function e(t){i("a37n")}var a=i("dXrS"),o=i("o86A"),r=i("VU/8"),s=e,c=r(a.a,o.a,s,null,null);n.a=c.exports},"Du/2":function(t,n,i){"use strict";i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a}),i.d(n,"c",function(){return o});var e="FETCH_RANDOM_PHOTO",a="RECEIVE_RANDOM_PHOTO",o="TOGGLE_PROFILE_VISIBILITY"},HJWT:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"top-panel"},[i("div",{staticClass:"top-panel__box"},[i("a",{staticClass:"top-panel__button",on:{click:function(n){n.preventDefault(),t.toggleVisible(n)}}},[i("icon",{attrs:{name:t.isVisible?"eye-slash":"eye"}})],1),t._v(" "),i("a",{staticClass:"top-panel__button",on:{click:function(n){n.preventDefault(),t.fetchPhoto(n)}}},[i("icon",{attrs:{name:"refresh",spin:t.isLoading}})],1)])])},a=[],o={render:e,staticRenderFns:a};n.a=o},IcnI:function(t,n,i){"use strict";var e=i("7+uW"),a=i("NYxO"),o=i("mUbh"),r=i("UjVw"),s=i("ukYY");e.a.use(a.a);var c={unsplash:{urls:{custom:"",full:"",raw:"",regular:"",small:"",thumb:""},user:{},color:"#fff"},isProfileVisible:!0,isImageLoading:!1};n.a=new a.a.Store({state:c,actions:o,getters:r,mutations:s.a,strict:!1})},M93x:function(t,n,i){"use strict";function e(t){i("v8S6")}var a=i("xJD8"),o=i("Yqky"),r=i("VU/8"),s=e,c=r(a.a,o.a,s,null,null);n.a=c.exports},N93g:function(t,n,i){"use strict";function e(t){return document.body.style.setProperty("--main-color",t||"#fff")}n.a=e},NHnr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("7+uW"),a=i("D4uH"),o=i("vlaz"),r=i.n(o),s=i("M93x"),c=i("IcnI"),l=i("xnyV");i.n(l);e.a.use(r.a,{delay:0}),e.a.component("icon",a.a),e.a.config.productionTip=!1,new e.a({store:c.a,el:"#app",template:"<App/>",components:{App:s.a}})},SAI9:function(t,n,i){"use strict";function e(t){i("wPPV")}var a=i("vdG/"),o=i("5mkQ"),r=i("VU/8"),s=e,c=r(a.a,o.a,s,"data-v-f7f39416",null);n.a=c.exports},UjVw:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),i.d(n,"mainColor",function(){return e}),i.d(n,"profileVisibility",function(){return a}),i.d(n,"imageLoading",function(){return o}),i.d(n,"imageURLs",function(){return r}),i.d(n,"imageAuthor",function(){return s});var e=function(t){return t.unsplash.color},a=function(t){return t.isProfileVisible},o=function(t){return t.isImageLoading},r=function(t){return t.unsplash.urls},s=function(t){return t.unsplash.user}},YXpA:function(t,n){},Yqky:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("background",{attrs:{isStriped:t.isVisible}},[i("top-panel"),t._v(" "),i("profile"),t._v(" "),i("bottom-panel")],1)},a=[],o={render:e,staticRenderFns:a};n.a=o},a37n:function(t,n){},cd3F:function(t,n,i){"use strict";var e=i("NYxO");i("I/df");n.a={name:"bottom-panel",computed:Object(e.b)({author:"imageAuthor"})}},dX57:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{class:["bottom-panel",t.author.name?"":"bottom-panel--hide"]},[i("div",{staticClass:"bottom-panel__box"},[i("icon",{attrs:{name:"angle-left"}}),t._v(" "),i("a",{staticClass:"bottom-panel__link",attrs:{href:""}},[t._v("\n      "+t._s(t.author.name)+"\n    ")]),t._v("\n     / \n    "),i("a",{staticClass:"bottom-panel__link",attrs:{href:"https://unsplash.com/",rel:"nofollow",target:"_black"}},[t._v("\n      Unsplash\n    ")]),t._v(" "),i("icon",{attrs:{name:"angle-left",flip:"horizontal"}})],1)])},a=[],o={render:e,staticRenderFns:a};n.a=o},dXrS:function(t,n,i){"use strict";var e=i("7+uW"),a={};n.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(e.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(e.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,i=t.height;return Math.max(n,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=t.normalizedScale});var n=0,i=0;this.$children.forEach(function(t){n=Math.max(n,t.width),i=Math.max(i,t.height)}),this.childrenWidth=n,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var n in t){var i=t[n];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),a[n]=i}},icons:a}},f9XH:function(t,n,i){"use strict";var e=i("NYxO");i("3kiE"),i("5O9v"),i("JQCr");n.a={name:"top-panel",data:function(){return{}},computed:Object(e.b)({isVisible:"profileVisibility",isLoading:"imageLoading"}),methods:{toggleVisible:function(){this.$store.dispatch("toggleProfileVisibility")},fetchPhoto:function(){this.isLoading||this.$store.dispatch("fetchRandomPhoto")}}}},gyMJ:function(t,n,i){"use strict";function e(){var t=window.innerHeight<window.innerWidth?"landscape":"portrait";return r.photos.getRandomPhoto({orientation:t,width:2*window.innerWidth}).then(a.toJson)}n.a=e;var a=i("M7BS"),o=i.n(a),r=new o.a({applicationId:"cf2490a94f8eee61bc9fdce89fe09521a0ec14ef593924d780c3c77b79af08df"})},"lS+k":function(t,n,i){t.exports=i.p+"static/img/avatar.787feea.jpg"},"m/H+":function(t,n,i){"use strict";function e(t){i("pCLD")}var a=i("cd3F"),o=i("dX57"),r=i("VU/8"),s=e,c=r(a.a,o.a,s,"data-v-47a71162",null);n.a=c.exports},mUbh:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),i.d(n,"fetchRandomPhoto",function(){return f}),i.d(n,"toggleProfileVisibility",function(){return h});var e=i("Xxa5"),a=i.n(e),o=i("exGp"),r=i.n(o),s=i("gyMJ"),c=i("N93g"),l=i("Du/2"),u=this,f=function(){var t=r()(a.a.mark(function t(n){var i,e=n.commit;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(l.a),t.prev=1,t.next=4,Object(s.a)();case 4:i=t.sent,console.log(i),Object(c.a)(i.color),e(l.b,{data:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),Object(c.a)();case 13:case"end":return t.stop()}},t,u,[[1,10]])}));return function(n){return t.apply(this,arguments)}}(),h=function(t){(0,t.commit)(l.c)}},o13Q:function(t,n,i){"use strict";function e(t){i("/j56")}var a=i("f9XH"),o=i("HJWT"),r=i("VU/8"),s=e,c=r(a.a,o.a,s,"data-v-08b91db6",null);n.a=c.exports},o86A:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n){return i("path",t._b({},"path",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n){return i("polygon",t._b({},"polygon",n,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},a=[],o={render:e,staticRenderFns:a};n.a=o},o9cx:function(t,n,i){"use strict";function e(t){i("YXpA")}var a=i("yoF/"),o=i("AwNJ"),r=i("VU/8"),s=e,c=r(a.a,o.a,s,"data-v-3c0170f2",null);n.a=c.exports},pCLD:function(t,n){},ukYY:function(t,n,i){"use strict";var e,a=i("bOdI"),o=i.n(a),r=i("Du/2");n.a=(e={},o()(e,r.c,function(t){t.isProfileVisible=!t.isProfileVisible}),o()(e,r.a,function(t){t.isImageLoading=!0}),o()(e,r.b,function(t,n){var i=n.data;t.unsplash=i,t.isImageLoading=!1}),e)},v8S6:function(t,n){},"vdG/":function(t,n,i){"use strict";var e=i("NYxO");n.a={name:"background",props:{isStriped:Boolean},computed:Object(e.b)({images:"imageURLs"}),methods:{onLoadImage:function(){}}}},wPPV:function(t,n){},xJD8:function(t,n,i){"use strict";var e=i("NYxO"),a=i("SAI9"),o=i("o9cx"),r=i("o13Q"),s=i("m/H+");n.a={name:"app",created:function(){this.$store.dispatch("fetchRandomPhoto")},components:{Background:a.a,Profile:o.a,TopPanel:r.a,BottomPanel:s.a},computed:Object(e.b)({isVisible:"profileVisibility"})}},xnyV:function(t,n){},"yoF/":function(t,n,i){"use strict";var e=i("Dd8w"),a=i.n(e),o=i("NYxO");i("hd27"),i("Epmo"),i("pqE5");n.a={name:"profile",data:function(){return{name:"Dmitry Mostovoy",position:"JavaScript Developer",socials:[{type:"envelope-o",url:"mailto:djmakaron2009@gmail.com",title:"E-mail"},{type:"github",url:"https://github.com/distolma",title:"Github"},{type:"linkedin-square",url:"https://www.linkedin.com/in/dmytromostovyi/",title:"Linkedin"}]}},computed:a()({},Object(o.b)({isVisible:"profileVisibility"}))}}},["NHnr"]);
//# sourceMappingURL=app.3e035ff1bc66502a98af.js.map