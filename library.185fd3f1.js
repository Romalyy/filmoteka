!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},t={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in l)return l[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return l[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=a),a("k917N");var r=a("8nrFW");a("WMajR"),a("jRtQr");var i=a("5HWQb"),o=a("9s6o9"),s=a("4LMMA"),c=a("1VFfL"),d=a("l5bVx"),u=e(a("WMajR")).template({1:function(n,l,t,a,r){var i,o,s=null!=l?l:n.nullContext||{},c=n.hooks.helperMissing,u="function",v=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li id="+v((void 0===(o=null!=(o=m(t,"id")||(null!=l?m(l,"id"):l))?o:c)?"undefined":e(d)(o))===u?o.call(s,{name:"id",hash:{},data:r,loc:{start:{line:2,column:9},end:{line:2,column:15}}}):o)+" class='gallery-library__card'>\n    <img\n      class='gallery-library__img'\n"+(null!=(i=m(t,"if").call(s,null!=l?m(l,"poster_path"):l,{name:"if",hash:{},fn:n.program(2,r,0),inverse:n.program(4,r,0),data:r,loc:{start:{line:5,column:6},end:{line:9,column:13}}}))?i:"")+"      alt="+v((void 0===(o=null!=(o=m(t,"title")||(null!=l?m(l,"title"):l))?o:c)?"undefined":e(d)(o))===u?o.call(s,{name:"title",hash:{},data:r,loc:{start:{line:10,column:10},end:{line:10,column:19}}}):o)+"\n    />\n    <div class='gallery-library__info-wrap'>\n      <p class='gallery-library__name'>"+v((void 0===(o=null!=(o=m(t,"title")||(null!=l?m(l,"title"):l))?o:c)?"undefined":e(d)(o))===u?o.call(s,{name:"title",hash:{},data:r,loc:{start:{line:13,column:39},end:{line:13,column:48}}}):o)+"</p>\n      <div class='gallery-library__info'>\n"+(null!=(i=m(t,"if").call(s,null!=l?m(l,"genre_ids"):l,{name:"if",hash:{},fn:n.program(6,r,0),inverse:n.program(8,r,0),data:r,loc:{start:{line:15,column:8},end:{line:19,column:15}}}))?i:"")+"            |\n            "+v((m(t,"getYear")||l&&m(l,"getYear")||c).call(s,null!=l?m(l,"release_date"):l,{name:"getYear",hash:{},data:r,loc:{start:{line:21,column:12},end:{line:21,column:36}}}))+"</span>\n        <span class='gallery-library__rating'>"+v((void 0===(o=null!=(o=m(t,"vote_average")||(null!=l?m(l,"vote_average"):l))?o:c)?"undefined":e(d)(o))===u?o.call(s,{name:"vote_average",hash:{},data:r,loc:{start:{line:22,column:46},end:{line:22,column:62}}}):o)+"</span>\n      </div>\n    </div>\n  </li>\n"},2:function(e,n,l,t,a){var r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"      src='"+e.escapeExpression((r(l,"getPosterUrl")||n&&r(n,"getPosterUrl")||e.hooks.helperMissing).call(null!=n?n:e.nullContext||{},null!=n?r(n,"poster_path"):n,{name:"getPosterUrl",hash:{},data:a,loc:{start:{line:6,column:11},end:{line:6,column:39}}}))+"'\n"},4:function(e,n,l,t,a){return"      src='https://papik.pro/uploads/posts/2021-12/thumbs/1639228118_1-papik-pro-p-kino-klipart-1.jpg'\n"},6:function(e,n,l,t,a){var r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"        <span class='gallery-library__genre'>"+e.escapeExpression((r(l,"getShortGenres")||n&&r(n,"getShortGenres")||e.hooks.helperMissing).call(null!=n?n:e.nullContext||{},null!=n?r(n,"genre_ids"):n,{name:"getShortGenres",hash:{},data:a,loc:{start:{line:16,column:45},end:{line:16,column:73}}}))+"\n"},8:function(e,n,l,t,a){return"        <span class='gallery-library__genre'>Жанр невідомий\n"},compiler:[8,">= 4.3.0"],main:function(e,n,l,t,a){var r;return null!=(r=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(l,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?r:""},useData:!0}),v=(s=a("4LMMA"),o=a("9s6o9"),document.querySelector(".gallery-library__list")),m=document.querySelector(".js-btn-watched"),p=document.querySelector(".js-btn-queue"),f=document.querySelector("#pagination"),g=document.querySelector(".lib__empty"),_=20,h="queue";function y(e){v.innerHTML="",v.insertAdjacentHTML("beforeend",u(e))}m.addEventListener("click",P);var L=1,E=0,b=20;function P(){m.classList.add("btn--active"),m.classList.remove("btn--bright"),p.classList.add("btn--bright"),p.classList.remove("btn--active"),h="watched",f.classList.add("visually-hidden"),g.classList.add("visually-hidden");var n=(0,s.load)(o.WATCHED_PAGE_FILMS);if(void 0===n||!n.length)return v.innerHTML="",void g.classList.remove("visually-hidden");if(y(n.slice(E,b)),n&&n.length>20){f.classList.remove("visually-hidden");var l=new(e(c))("pagination",{totalItems:n.length,itemsPerPage:_,visiblePages:5,centerAlign:!0});l.movePageTo(L),l.on("afterMove",(function(e){var n=(0,s.load)(o.WATCHED_PAGE_FILMS);L=e.page,b=(E=(L-1)*_)+_,y(n.slice(E,b))}))}else y(n),E=0,L=1,b=20}p.addEventListener("click",A);var M=1,S=0,k=20;function A(){p.classList.add("btn--active"),p.classList.remove("btn--bright"),m.classList.add("btn--bright"),m.classList.remove("btn--active"),h="queue",f.classList.add("visually-hidden"),g.classList.add("visually-hidden");var n=(0,s.load)(o.QUEUE_PAGE_FILMS);if(void 0===n||!n.length)return v.innerHTML="",void g.classList.remove("visually-hidden");if(y(n.slice(S,k)),n&&n.length>20){f.classList.remove("visually-hidden");var l=new(e(c))("pagination",{totalItems:n.length,itemsPerPage:_,visiblePages:5,centerAlign:!0});l.movePageTo(M),l.on("afterMove",(function(e){var n=(0,s.load)(o.QUEUE_PAGE_FILMS);M=e.page,k=(S=(M-1)*_)+_,y(n.slice(S,k))}))}else y(n),S=0,M=1,k=20}var I=document.querySelector(".gallery-library__list"),q=document.querySelector(".backdrop"),w=document.querySelector(".modal__info-film"),U=document.querySelector(".modal__button-close-modal");I.addEventListener("click",(function(n){var l=(0,s.load)(o.WATCHED_PAGE_FILMS),t=(0,s.load)(o.QUEUE_PAGE_FILMS);if("UL"===n.target.nodeName)return;var a=Number(n.target.closest(".gallery-library__card").id),c=l&&t?e(r)(l).concat(e(r)(t)):e(r)(l||t),d=c.findIndex((function(e){return e.id===a})),u=c[d],v=(0,i.default)(u);w.innerHTML=v,q.classList.remove("visually-hidden"),q.addEventListener("click",_);var m=document.querySelector(".modal__button-watched"),p=document.querySelector(".modal__button-queue");function f(){var e=(0,s.load)(o.QUEUE_PAGE_FILMS),n=e.findIndex((function(e){return e.id===u.id}));e.splice(n,1),localStorage.setItem(o.QUEUE_PAGE_FILMS,JSON.stringify(e)),(0,s.save)(o.WATCHED_PAGE_FILMS,u)}function g(){var e=(0,s.load)(o.WATCHED_PAGE_FILMS),n=e.findIndex((function(e){return e.id===u.id}));e.splice(n,1),localStorage.setItem(o.WATCHED_PAGE_FILMS,JSON.stringify(e)),(0,s.save)(o.QUEUE_PAGE_FILMS,u)}function _(e){e.target.classList.contains("backdrop")&&L()}function y(e){"Escape"===e.code&&L()}function L(){"queue"===h?A():P(),q.classList.add("visually-hidden"),U.removeEventListener("click",L),m.removeEventListener("click",f),p.removeEventListener("click",g),document.removeEventListener("keydown",y),q.removeEventListener("click",_)}m.addEventListener("click",f),p.addEventListener("click",g),U.addEventListener("click",L),document.addEventListener("keydown",y)})),A(),a("ghnK3")}();
//# sourceMappingURL=library.185fd3f1.js.map
