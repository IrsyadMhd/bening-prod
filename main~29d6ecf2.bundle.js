(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{16:function(n,e,r){"use strict";r.r(e);r(12),r(6),r(13);var t=r(3),a=r.n(t),i=r(7),o={insert:"head",singleton:!1},c=(a()(i.a,o),i.a.locals,r(14),r(15),{init:function(n){var e=this,r=n.button,t=n.section;r.forEach((function(n){n.addEventListener("click",(function(n){e._scrollInto(n,t)}))}))},_scrollInto:function(n,e){n.stopPropagation(),e.scrollIntoView({behavior:"smooth"})}}),s={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1);return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},u={BASE_URL:"/api/airtable",DETAIL:function(n){return"/api/product?id=".concat(n)}};function l(n,e,r,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,a)}function d(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){l(i,t,a,o,c,"next",n)}function c(n){l(i,t,a,o,c,"throw",n)}o(void 0)}))}}function p(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var f=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,r,t,a,i;return e=n,r=null,t=[{key:"getProducts",value:(i=d(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(u.BASE_URL);case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)}))),function(){return i.apply(this,arguments)})},{key:"getDetailProduct",value:(a=d(regeneratorRuntime.mark((function n(e){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(u.DETAIL(e));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)}))),function(n){return a.apply(this,arguments)})}],r&&p(e.prototype,r),t&&p(e,t),n}(),v=function(n){return'\n  <h2 class="display-5 text-center mb-5">\n    <span class="border-bottom pb-2">'.concat(n,'</span>\n  </h2>\n  <div class="container-md err">\n    <div class="row row-cols-1 row-cols-md-3 g-4 prod">').concat(function(n){for(var e="",r=0;r<n;r+=1)e+='\n      <div class="col">\n        <div class="card h-100 shadow-sm">\n          <img\n            class="card-img-top grad skeleton"\n            width="350px"\n            height="280px"\n          />\n          <div class="card-body">\n            <p class="card-title"><span class="lead skeleton grad">Lorem ipsum</span></p>\n            <p class="card-text skeleton grad">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur \n            </p>\n          </div>\n        </div>\n      </div>\n  ';return e}(6),"</div>\n  </div>\n")},h=function(n){return'\n          <a href="#/detail/'.concat(n.id,'"\n            <div class="col">\n              <div class="card h-100 shadow-sm">\n                <img\n                  src="/images/placeholder.png"\n                  class="card-img-top lazyload"\n                  data-src="').concat(n.url,'"\n                  alt="').concat(n.name,'"\n                  width="350px"\n                  height="280px"\n                />\n                <div class="card-body">\n                  <p class="card-title h5">').concat(n.name,'</p>\n                  <p class="card-text">\n                    ').concat(n.desc.substring(0,100)," . . .\n                  </p>\n                </div>\n              </div>\n            </div>\n          </a>\n")},m=function(n){return'\n    <div class="row g-4 justify-content-center align-items-center">\n      <div class="col-md-7">\n        <img\n          src='.concat(n.url,'\n          class="img-fluid mt-3"\n          alt=').concat(n.name,'\n        />\n      </div>\n      <div class="col-lg-5 text-center text-lg-start">\n        <h1>\n          <div class="display-6">').concat(n.name,'</div>\n          <div class="lead text-muted mt-2">Rp. ').concat(new Intl.NumberFormat("id-ID").format(n.price),'</div>\n        </h1>\n        <p class="my-4 text-muted text-start">\n          ').concat(n.desc,'\n        </p>\n        <button class="btn btn-secondary btn-lg rounded-pill">\n          Buy Now\n        </button>\n      </div>\n      \n    </div>\n')};function g(n,e,r,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,a)}function b(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){g(i,t,a,o,c,"next",n)}function c(n){g(i,t,a,o,c,"throw",n)}o(void 0)}))}}var y={render:function(){return b(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",v("All Products"));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return b(regeneratorRuntime.mark((function n(){var e,r,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector(".prod"),r=document.querySelector(".err"),n.prev=2,n.next=5,f.getProducts();case 5:t=n.sent,e.innerHTML="",t.forEach((function(n){var r=h(n);e.insertAdjacentHTML("afterbegin",r)})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r.innerHTML='<div class="row justify-content-center"><div class="col"><p class="h5 text-center">Maaf server error..silahkan coba beberapa saat lagi, atau cek koneksi internet anda</p></div></div>';case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()}};function w(n,e,r,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,a)}function k(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){w(i,t,a,o,c,"next",n)}function c(n){w(i,t,a,o,c,"throw",n)}o(void 0)}))}}function x(n,e,r,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,a)}function L(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){x(i,t,a,o,c,"next",n)}function c(n){x(i,t,a,o,c,"throw",n)}o(void 0)}))}}function P(n,e,r,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,a)}function R(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){P(i,t,a,o,c,"next",n)}function c(n){P(i,t,a,o,c,"throw",n)}o(void 0)}))}}var S={"/":y,"/all-product":y,"/popular":{render:function(){return k(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",v("Popular"));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return k(regeneratorRuntime.mark((function n(){var e,r,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector(".prod"),r=document.querySelector(".err"),n.prev=2,n.next=5,f.getProducts();case 5:t=n.sent,e.innerHTML="",t.forEach((function(n){if("pop"===n.tag){var r=h(n);e.insertAdjacentHTML("afterbegin",r)}})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r.innerHTML='<div class="row justify-content-center"><div class="col"><p class="h5 text-center">Maaf server error..silahkan coba beberapa saat lagi, atau cek koneksi internet anda</p></div></div>';case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()}},"/best-seller":{render:function(){return L(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",v("Best Seller"));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return L(regeneratorRuntime.mark((function n(){var e,r,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector(".prod"),r=document.querySelector(".err"),n.prev=2,n.next=5,f.getProducts();case 5:t=n.sent,e.innerHTML="",t.forEach((function(n){if("best"===n.tag){var r=h(n);e.insertAdjacentHTML("afterbegin",r)}})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r.innerHTML='<div class="row justify-content-center"><div class="col"><p class="h5 text-center">Maaf server error..silahkan coba beberapa saat lagi, atau cek koneksi internet anda</p></div></div>';case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()}},"/detail/:id":{render:function(){return R(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n  <div class="container-md detail">\n    <div class="row g-4 justify-content-center align-items-center">\n      <div class="col-md-7">\n        <img\n          src="/image/placeholder-detail.webp"\n          class="img-fluid mt-3 bg-blur"\n          alt="skeleton"\n        />\n      </div>\n      <div class="col-lg-5 text-center text-lg-start">\n        <h1>\n          <div class="display-6"><span class="grad skeleton">Lorem Ipsum</span></div>\n          <div class="mt-2"><span class="grad lead skeleton">Rp. Lorem</span></div>\n        </h1>\n        <p class="my-4 text-start grad skeleton">I\'m baby skateboard man braid pug artisan plaid portland heirloom dreamcatcher glossier fingerstache blog. Deep v af letterpress ethical brooklyn adaptogen. Kale chips swag 90\'s tattooed raw denim vaporware. Ugh craft beer hammock, gluten-free lyft meh iPhone . Skateboard keytar kogi health goth, woke portland polaroid church-key try-hard XOXO flexitarian taiyaki vinyl. Actually bespoke aesthetic whatever squid, blog master cleanse wayfarers. 8-bit direct trade yr chicharrones chartreuse neutra vape prism quinoa waistcoat pug artisan ugh plaid deep v.\n        </p>\n        <button class="btn btn-lg rounded-pill grad skeleton">\n         <span class="skeleton">Buy Now</span>\n        </button>\n      </div>\n      \n    </div>\n  </div>\n      ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return R(regeneratorRuntime.mark((function n(){var e,r,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector(".detail"),n.prev=1,r=s.parseActiveUrlWithoutCombiner(),n.next=5,f.getDetailProduct(r.id);case 5:if(!(t=n.sent).error){n.next=9;break}return e.innerHTML='<p class="display-5 text-center">'.concat(t.error,"</p>"),n.abrupt("return");case 9:e.innerHTML=m(t),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),e.innerHTML='<p class="display-5 text-center">Server Error...Coba beberapa saat lagi atau cek koneksi internet anda.</p>';case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()}}};function A(n,e,r,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,a)}function T(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var j=function(){function n(e){var r=e.button,t=e.sectionProd;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=r,this._section=t,this._initialAppShell()}var e,r,t,a,i;return e=n,(r=[{key:"_initialAppShell",value:function(){c.init({button:this._button,section:this._section})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.parseActiveUrlWithCombiner(),r=S[e],n.next=4,r.render();case 4:return this._section.innerHTML=n.sent,n.next=7,r.afterRender();case 7:case"end":return n.stop()}}),n,this)})),i=function(){var n=this,e=arguments;return new Promise((function(r,t){var i=a.apply(n,e);function o(n){A(i,r,t,o,c,"next",n)}function c(n){A(i,r,t,o,c,"throw",n)}o(void 0)}))},function(){return i.apply(this,arguments)})}])&&T(e.prototype,r),t&&T(e,t),n}(),M=r(11),_=r.n(M);function q(n,e,r,t,a,i,o){try{var c=n[i](o),s=c.value}catch(n){return void r(n)}c.done?e(s):Promise.resolve(s).then(t,a)}var E=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=3;break}return n.next=3,_.a.register("/sw.js");case 3:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function o(n){q(i,t,a,o,c,"next",n)}function c(n){q(i,t,a,o,c,"throw",n)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();function I(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,a,i=[],o=!0,c=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){c=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return H(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var C=new j({button:document.querySelectorAll(".buy-now"),sectionProd:document.querySelector("#products")}),U=document.querySelector("#hero"),O=document.querySelector("#app-bar"),D=document.querySelector(".navbar-brand span");new IntersectionObserver((function(n,e){var r=I(n,1)[0];r.isIntersecting?(O.classList.remove("bg-white","sticky-top"),O.classList.add("grad"),D.classList.remove("text-secondary"),D.classList.add("text-white")):(O.classList.add("sticky-top","bg-white"),O.classList.remove("grad"),D.classList.remove("text-white"),D.classList.add("text-secondary"),e.unobserve(r.target))}),{root:null,threshold:.975}).observe(U),window.addEventListener("hashchange",(function(){C.renderPage()})),window.addEventListener("load",(function(){C.renderPage(),E()}))},7:function(n,e,r){"use strict";var t=r(4),a=r.n(t)()((function(n){return n[1]}));a.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),a.push([n.i,"body {\r\n  font-family: 'Poppins', sans-serif !important;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.grad {\r\n  /* background-image: linear-gradient(to right, #548ca8, #eeeeee); */\r\n  background-image: linear-gradient(to right, #f15b3a, #548ca8, #80f0e8);\r\n  background-size: 300%;\r\n  animation: bg-animation 5s infinite alternate;\r\n}\r\n\r\nmain {\r\n  flex: 1;\r\n}\r\n\r\n#hero {\r\n  padding: 60px 0 0 0;\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  #hero {\r\n    height: calc(100vh - 57px);\r\n  }\r\n}\r\n\r\nsection {\r\n  padding: 60px 0;\r\n}\r\n\r\n#product-list a,\r\n.prod a {\r\n  text-decoration: none;\r\n  color: #3e6281;\r\n}\r\n\r\n.prod img {\r\n  object-fit: cover;\r\n}\r\n\r\n.card:hover {\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n\r\n.skeleton {\r\n  user-select: none;\r\n  color: transparent;\r\n  background-size: 400%;\r\n  animation: bg-animation 2s infinite alternate;\r\n}\r\n\r\n@keyframes bg-animation {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n\r\n/* Add the blur effect */\r\n.bg-blur {\r\n  filter: blur(30px);\r\n  -webkit-filter: blur(30px);\r\n}\r\n",""]),e.a=a}},[[16,4,1,0,2]]]);