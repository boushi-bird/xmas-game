(function(t){function n(n){for(var a,c,o=n[0],s=n[1],u=n[2],l=0,d=[];l<o.length;l++)c=o[l],i[c]&&d.push(i[c][0]),i[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,o=1;o<e.length;o++){var s=e[o];0!==i[s]&&(a=!1)}a&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var a={},i={app:0},r=[];function c(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=a,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)c.d(e,a,function(n){return t[n]}.bind(null,a));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var f=s;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("64a9"),i=e.n(a);i.a},"10c1":function(t,n,e){t.exports=e.p+"img/normal.e1a52ec4.png"},"11b2":function(t,n,e){t.exports=e.p+"img/normal.5a8a2031.png"},"193a":function(t,n,e){t.exports=e.p+"img/laugh.3b17dd8d.png"},"1a6d":function(t,n,e){t.exports=e.p+"img/normal.6b7a87ab.png"},2058:function(t,n,e){t.exports=e.p+"img/angry.7593b0b1.png"},"2fa0":function(t,n,e){"use strict";var a=e("b9c7"),i=e.n(a);i.a},3804:function(t,n,e){},"3dfd":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Santa"),e("Children")],1)},i=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"santa"},[e("div",{staticClass:"main"},[e("img",{attrs:{src:t.mainImage}})]),e("div",{staticClass:"message"},[t._v(t._s(t.message)),t.failure?e("button",{on:{click:t.reload}},[t._v("やり直し")]):t._e()]),e("GiftBag")],1)},c=[],o=e("be94"),s=e("2f62"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"gift-bag"},t._l(t.gifts,function(n){return e("div",{key:n.id,attrs:{draggable:"true"},on:{dragstart:function(e){t.giftDragStart(e,n)}}},[e("Gift",{attrs:{gift:n}})],1)}))},f=[],l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"gift"},[e("img",{attrs:{src:t.gift.image}}),e("div",{staticClass:"protect-image"})])},d=[],g={name:"Gift",props:{gift:{type:Object,required:!0}}},p=g,m=(e("6bc0"),e("2877")),h=Object(m["a"])(p,l,d,!1,null,"a44b008c",null);h.options.__file="Gift.vue";var v=h.exports,b={name:"GiftBag",components:{Gift:v},computed:Object(s["c"])(["gifts"]),methods:{giftDragStart:function(t,n){var e=t.dataTransfer;e.effectAllowed="link",e.setData("text",n.id)}}},_=b,y=(e("8963"),Object(m["a"])(_,u,f,!1,null,"97c68fd6",null));y.options.__file="GiftBag.vue";var x=y.exports,O=e("94da"),w=O["c"].normalImage,j=O["c"].successImage,C={name:"Santa",components:{GiftBag:x},computed:Object(o["a"])({},Object(s["b"])(["gameStatus"]),{mainImage:function(){return"success"===this.gameStatus?j:w},failure:function(){return"failure"===this.gameStatus},message:function(){switch(this.gameStatus){case"success":return"Merry Christmas!";default:return"くつしたに こどもたちが ほしがっている プレゼントを いれよう！"}}}),methods:{reload:function(){location.reload()}}},S=C,k=(e("ddbf"),Object(m["a"])(S,r,c,!1,null,"ca419e10",null));k.options.__file="Santa.vue";var I=k.exports,D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"children"},t._l(t.children,function(t){return e("Child",{key:t.id,attrs:{child:t}})}))},E=[],G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"child"},[e("div",{staticClass:"sock",on:{dragover:t.giftDragover,drop:t.giftDrop}},[t.child.sock?e("Gift",{attrs:{gift:t.child.sock}}):t._e()],1),e("img",{staticClass:"face",attrs:{src:t.faceImage}}),t.showWish?e("div",{staticClass:"wish"},[e("img",{attrs:{src:t.child.wish.image}})]):t._e()])},T=[],M={name:"Child",components:{Gift:v},props:{child:{type:Object,required:!0}},computed:{faceImage:function(){return this.child.faceAssets[this.child.emotion]},showWish:function(){return this.child.wish&&"laugh"!==this.child.emotion}},methods:{giftDragover:function(t){if(this.child.wish&&!this.child.sock){t.preventDefault();var n=t.dataTransfer;n.dropEffect="link"}},giftDrop:function(t){var n=t.dataTransfer,e=n.getData("text");this.$store.commit({type:"present",giftId:e,childId:this.child.id})}}},$=M,P=(e("2fa0"),Object(m["a"])($,G,T,!1,null,"2de5a09e",null));P.options.__file="Child.vue";var A=P.exports,B={name:"Children",components:{Child:A},computed:Object(s["c"])(["children"])},L=B,q=(e("5186"),Object(m["a"])(L,D,E,!1,null,"5cf603aa",null));q.options.__file="Children.vue";var J=q.exports,W={name:"app",components:{Santa:I,Children:J}},z=W,F=(e("034f"),Object(m["a"])(z,a,i,!1,null,null,null));F.options.__file="App.vue";n["a"]=F.exports},4360:function(t,n,e){"use strict";e("7514"),e("cadf"),e("551c"),e("097d");var a=e("2b0e"),i=e("2f62"),r=(e("ac6a"),e("94da"));function c(t){return Math.floor(Math.random()*Math.floor(t+1))}function o(t){for(var n=t.length,e=n-1;e>0;e--){var a=c(e),i=[t[e],t[a]],r=i[0],o=i[1],s=[o,r];t[e]=s[0],t[a]=s[1]}return t}var s=o([].concat(r["b"])),u=[];r["a"].forEach(function(t,n){var e;s.length>n&&(e=s[n]),u.push({id:"".concat(n),emotion:"normal",faceAssets:t,wish:e,sock:null})});var f={success:!1,gifts:r["b"],children:u};a["a"].use(i["a"]);n["a"]=new i["a"].Store({state:f,mutations:{present:function(t,n){var e=n.childId,i=n.giftId,r=t.children,c=t.gifts,o=r.find(function(t){return t.id===e}),s=c.find(function(t){return t.id===i});if(o&&s&&!o.sock){t.gifts=c.filter(function(t){return t.id!==s.id});var u=o.wish&&o.wish.id===s.id;a["a"].set(o,"sock",s),a["a"].set(o,"emotion",u?"laugh":"angry")}}},getters:{gameStatus:function(t){return t.children.every(function(t){return"laugh"===t.emotion})?"success":t.children.some(function(t){return"angry"===t.emotion})?"failure":"normal"}}})},"44af":function(t,n,e){},"4a96":function(t,n,e){t.exports=e.p+"img/angry.167bef4e.png"},"4c93":function(t,n,e){t.exports=e.p+"img/2.07b00255.png"},"50c5":function(t,n,e){t.exports=e.p+"img/laugh.feb96b8c.png"},5186:function(t,n,e){"use strict";var a=e("5ca6"),i=e.n(a);i.a},"52df":function(t,n,e){t.exports=e.p+"img/4.c53b1555.png"},5337:function(t,n,e){t.exports=e.p+"img/normal.2dc8a5f6.png"},"56d7":function(t,n,e){"use strict";e.r(n),function(t){e("cadf"),e("551c"),e("097d");var n=e("2b0e"),a=e("3dfd"),i=e("4360");e("db43"),e("b17a");n["a"].config.productionTip=!1,new n["a"]({store:i["a"],render:function(t){return t(a["a"])}}).$mount("#app"),t.document.addEventListener("dragstart",function(t){var n=t.target,e=n.getAttribute("draggable");e&&"auto"!==e||t.preventDefault()})}.call(this,e("c8ba"))},"5ca6":function(t,n,e){},"64a9":function(t,n,e){},"64c3":function(t,n,e){t.exports=e.p+"img/1.7fd62fde.png"},"6bc0":function(t,n,e){"use strict";var a=e("e087"),i=e.n(a);i.a},8963:function(t,n,e){"use strict";var a=e("44af"),i=e.n(a);i.a},9028:function(t,n,e){t.exports=e.p+"img/laugh.8eb7bb0c.png"},"94da":function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r});var a=[{normal:e("5337"),angry:e("987e"),laugh:e("193a")},{normal:e("10c1"),angry:e("2058"),laugh:e("50c5")},{normal:e("b1e4"),angry:e("e47f"),laugh:e("9028")},{normal:e("11b2"),angry:e("4a96"),laugh:e("fd2b")}],i=[{id:"1",image:e("64c3")},{id:"2",image:e("4c93")},{id:"3",image:e("b181")},{id:"4",image:e("52df")}],r={normalImage:e("1a6d"),successImage:e("ea78")}},"987e":function(t,n,e){t.exports=e.p+"img/angry.2970e2a2.png"},b17a:function(t,n,e){"use strict";(function(t){var n=e("0268"),a=e("964f"),i=(e("41af"),Object(n["polyfill"])({dragImageTranslateOverride:a["scrollBehaviourDragImageTranslateOverride"]}));if(i){t.document.addEventListener("dragenter",function(t){t.preventDefault()}),t.addEventListener("touchmove",function(){},{passive:!1});var r=function(t){t.isTrusted&&t.stopPropagation()};t.document.addEventListener("dragstart",r,!0)}}).call(this,e("c8ba"))},b181:function(t,n,e){t.exports=e.p+"img/3.506f980b.png"},b1e4:function(t,n,e){t.exports=e.p+"img/normal.9192c766.png"},b9c7:function(t,n,e){},db43:function(t,n,e){},ddbf:function(t,n,e){"use strict";var a=e("3804"),i=e.n(a);i.a},e087:function(t,n,e){},e47f:function(t,n,e){t.exports=e.p+"img/angry.0a79782d.png"},ea78:function(t,n,e){t.exports=e.p+"img/success.0afd3cdb.png"},fd2b:function(t,n,e){t.exports=e.p+"img/laugh.1c829656.png"}});
//# sourceMappingURL=app.08a1152e.js.map