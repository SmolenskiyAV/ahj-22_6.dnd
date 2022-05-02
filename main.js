(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),i=r(6330),c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),i=n.String,c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),i=r(8361),c=r(7908),a=r(6244),s=r(5417),u=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,f=6==t,p=7==t,v=5==t||f;return function(d,m,g,y){for(var b,h,x=c(d),S=i(x),L=n(m,g),w=a(S),j=0,O=y||s,E=e?O(d,w):r||p?O(d,0):void 0;w>j;j++)if((v||j in S)&&(h=L(b=S[j],j,x),t))if(e)E[j]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:u(E,b)}else switch(t){case 4:return!1;case 7:u(E,b)}return f?-1:o||l?l:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},7475:(t,e,r)=>{var n=r(7854),o=r(3157),i=r(4411),c=r(111),a=r(5112)("species"),s=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===s||o(e.prototype))||c(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?s:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),i=r(614),c=r(4326),a=r(5112)("toStringTag"),s=n.Object,u="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=s(t),a))?r:u?c(e):"Object"==(n=c(e))&&i(e.callee)?"Arguments":n}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),c=r(8113),a=i.process,s=i.Deno,u=a&&a.versions||s&&s.version,l=u&&u.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(1702),o=r(9662),i=r(4374),c=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?c(t,e):function(){return t.apply(e,arguments)}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,c=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),s=a&&"something"===function(){}.name,u=a&&(!n||n&&c(i,"name").configurable);t.exports={EXISTS:a,PROPER:s,CONFIGURABLE:u}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.bind,c=o.call,a=n&&i.bind(c,c);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return c.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),i=r(7293),c=r(4326),a=n.Object,s=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?s(t,""):a(t)}:a},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),c=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,c=r(8536),a=r(7854),s=r(1702),u=r(111),l=r(8880),f=r(2597),p=r(5465),v=r(6200),d=r(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap;if(c||p.state){var b=p.state||(p.state=new y),h=s(b.get),x=s(b.has),S=s(b.set);n=function(t,e){if(x(b,t))throw new g(m);return e.facade=t,S(b,t,e),e},o=function(t){return h(b,t)||{}},i=function(t){return x(b,t)}}else{var L=v("state");d[L]=!0,n=function(t,e){if(f(t,L))throw new g(m);return e.facade=t,l(t,L,e),e},o=function(t){return f(t,L)?t[L]:{}},i=function(t){return f(t,L)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),c=r(648),a=r(5005),s=r(2788),u=function(){},l=[],f=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),d=!p.exec(u),m=function(t){if(!i(t))return!1;try{return f(u,l,t),!0}catch(t){return!1}},g=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,s(t))}catch(t){return!0}};g.sham=!0,t.exports=!f||o((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?g:m},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),i=r(614),c=r(7976),a=r(3307),s=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&c(e.prototype,s(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),c=n.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},3070:(t,e,r)=>{var n=r(7854),o=r(9781),i=r(4664),c=r(3353),a=r(9670),s=r(4948),u=n.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=o?c?function(t,e,r){if(a(t),e=s(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(a(t),e=s(e),a(r),i)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(614),c=r(111),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!c(n=o(r,t)))return n;if(i(r=t.valueOf)&&!c(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!c(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},1320:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2597),c=r(8880),a=r(3505),s=r(2788),u=r(9909),l=r(6530).CONFIGURABLE,f=u.get,p=u.enforce,v=String(String).split("String");(t.exports=function(t,e,r,s){var u,f=!!s&&!!s.unsafe,d=!!s&&!!s.enumerable,m=!!s&&!!s.noTargetGet,g=s&&void 0!==s.name?s.name:e;o(r)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||l&&r.name!==g)&&c(r,"name",g),(u=p(r)).source||(u.source=v.join("string"==typeof g?g:""))),t!==n?(f?!m&&t[e]&&(d=!0):delete t[e],d?t[e]=r:c(t,e,r)):d?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||s(this)}))},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.3",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.3/LICENSE",source:"https://github.com/zloirock/core-js"})},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(111),c=r(2190),a=r(8173),s=r(2140),u=r(5112),l=n.TypeError,f=u("toPrimitive");t.exports=function(t,e){if(!i(t)||c(t))return t;var r,n=a(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||c(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),c=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),c=r(9711),a=r(133),s=r(3307),u=o("wks"),l=n.Symbol,f=l&&l.for,p=s?l:l&&l.withoutSetter||c;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=s&&f?f(e):p(e)}return u[t]}},1539:(t,e,r)=>{var n=r(1694),o=r(1320),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),c=r(8533),a=r(8880),s=function(t){if(t&&t.forEach!==c)try{a(t,"forEach",c)}catch(e){t.forEach=c}};for(var u in o)o[u]&&s(n[u]&&n[u].prototype);s(i)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,e,r){var n=t.parentNode,o=t.getBoundingClientRect().top+t.offsetHeight/2;t&&(n.classList.contains("list")&&(Math.abs(r)<=Math.abs(o)?t.before(e):t.after(e)),t.classList.contains("list")&&""===t.innerHTML&&t.prepend(e))}r(1539),r(4747);var e,n,o=null,i=null,c=null,a=null,s=0,u=0,l=0,f=0,p=0,v=0,d=!1;localStorage.setItem("movingMarker",d);var m=0;document.addEventListener("DOMContentLoaded",(function(){if(localStorage.getItem("newContent")){var t=document.querySelector(".content");t.innerHTML="",t.insertAdjacentHTML("afterbegin","".concat(localStorage.getItem("newContent")))}}));var g=document.querySelector(".content");new MutationObserver((function(t){t.forEach((function(){if("true"!==localStorage.getItem("movingMarker")){var t=document.querySelector(".content").innerHTML;localStorage.setItem("newContent",t)}}))})).observe(g,{characterData:!0,childList:!0,subtree:!0,characterDataOldValue:!0}),document.addEventListener("mousedown",(function(t){var e=t.target.closest(".list__item");if(e&&!t.target.classList.contains("del_cross")){d=!0,localStorage.setItem("movingMarker",d),(i=e).classList.add("list__item_selected"),(o=e.cloneNode(!0)).classList.remove("list__item_selected"),o.classList.add("list__item_dragged");var r=i.clientWidth;m=i.clientHeight,n=i.getBoundingClientRect(),p=n.left+0,v=n.top+0,s=t.clientX,u=t.clientY,o.style.width="".concat(r,"px"),o.style.height="".concat(m,"px"),o.style.top="".concat(v,"px"),o.style.left="".concat(p,"px"),document.body.appendChild(o),(a=document.createElement("div")).style.width="".concat(r,"px"),a.style.height="".concat(m,"px"),a.classList.add("fantom")}})),document.addEventListener("mousemove",(function(r){try{if(!i)return;if(n=i.getBoundingClientRect(),p=n.left+0+r.clientX-s,v=n.top+0+r.clientY-u,o.style.top="".concat(v,"px"),o.style.left="".concat(p,"px"),l=r.clientX,f=r.clientY,o.hidden=!0,e=document.elementFromPoint(l,f),o.hidden=!1,(!e||!e.classList.contains("list__item"))&&c.classList.contains("fantom"))return;c!==e&&(c&&(c.style.background="",a.remove()),(c=e)&&!c.classList.contains("fantom")&&c.classList.contains("list__item")&&(c.style.background="pink",t(c,a,f))),c.closest(".column")===i.closest(".column")&&f<v&&(v=n.top-m+r.clientY-u,o.style.top="".concat(v,"px"),console.log("пересчёт координат drag-элемента"))}catch(t){console.log(t.message),d=!1,localStorage.setItem("movingMarker",d)}})),document.addEventListener("mouseup",(function(){if(i){o.style.display="none";var e=c;a.remove(),t(e,i,f),i.classList.remove("list__item_selected"),i=null,o.remove(),o=null,c.style.background="",console.clear(),d=!1,localStorage.setItem("movingMarker",d)}})),document.body.addEventListener("mouseleave",(function(){i&&(document.body.removeChild(o),i.classList.remove("list__item_selected"),i=null,o=null,c.style.background="",a.remove(),d=!1,localStorage.setItem("movingMarker",d))})),document.addEventListener("click",(function(t){var e;t.target.classList.contains("add_card")?(e=t.target)&&e.classList.contains("add_card")&&e.previousSibling.insertAdjacentHTML("afterbegin",'<div class="list__item">\n      NewItem.\n    <div class="del_cross">&#x2716</div>\n    </div>'):function(t){var e=t.target;e.classList.contains("del_cross")&&e.parentNode.remove()}(t)}))})()})();