(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{15:function(e,n,t){"use strict";t.r(n);t(9),t(2),t(10);var r=t(0),a=t.n(r),s=t(3),i={insert:"head",singleton:!1};a()(s.a,i),s.a.locals,t(11),t(12);var o={parseActiveUrlWithCombiner(){const e=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(e);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner(){const e=window.location.hash.slice(1);return this._urlSplitter(e)},_urlSplitter(e){const n=e.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:e=>(e.resource?"/"+e.resource:"/")+(e.id?"/:id":"")+(e.verb?"/"+e.verb:"")};var c={init({button:e,section:n}){e.forEach(e=>{e.addEventListener("click",e=>{this._scrollInto(e,n)})}),n.addEventListener("click",e=>{this._buyWa(e)})},_scrollInto(e,n){e.stopPropagation(),n.scrollIntoView({behavior:"smooth"})},_buyWa(e){if(e.stopPropagation(),e.target.classList.contains("buy-wa")){const n="Assalamu'alaikum admin Bening%0ASaya tertarik untuk membeli produk berikut :%0A",t=o.parseActiveUrlWithoutCombiner().id,r="bening-production.netlify.app",a=e.target.dataset.title,s=e.target.dataset.price;e.target.href=`https://wa.me/6281267800300?text=${n}Produk : ${a}%0AHarga : ${s}%0AApakah produknya ada ?%0Ahttps:%2F%2F${r}%2F%23%2Fdetail%2F${t}`}}};var l={BASE_URL:"/api/airtable",DETAIL:e=>"/api/product?id="+e};var d=class{static async getProducts(){return(await fetch(l.BASE_URL)).json()}static async getDetailProduct(e){return(await fetch(l.DETAIL(e))).json()}};const p=e=>`\n  <h2 class="display-5 text-center mb-5">\n    <span class="border-bottom pb-2">${e}</span>\n  </h2>\n  <div class="container-md err">\n    <div class="row row-cols-1 row-cols-md-3 g-4 prod">${(e=>{let n="";for(let t=0;t<e;t+=1)n+='\n      <div class="col">\n        <div class="card h-100 shadow-sm">\n          <img\n            class="card-img-top grad skeleton"\n            width="350px"\n            height="280px"\n          />\n          <div class="card-body">\n            <p class="card-title"><span class="lead skeleton grad">Lorem ipsum</span></p>\n            <p class="card-text skeleton grad">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur \n            </p>\n          </div>\n        </div>\n      </div>\n  ';return n})(6)}</div>\n  </div>\n`,u=e=>`\n          <a href="#/detail/${e.id}"\n            <div class="col">\n              <div class="card h-100 shadow-sm">\n                <img\n                  src="/images/placeholder.png"\n                  class="card-img-top lazyload"\n                  data-src="${e.url}"\n                  alt="${e.name}"\n                  width="350px"\n                  height="280px"\n                />\n                <div class="card-body">\n                  <p class="card-title h5">${e.name}</p>\n                  <p class="card-text">\n                    ${e.desc.substring(0,100)} . . .\n                  </p>\n                </div>\n              </div>\n            </div>\n          </a>\n`,h={render:async()=>p("All Products"),async afterRender(){const e=document.querySelector(".prod"),n=document.querySelector(".err");try{const n=await d.getProducts();e.innerHTML="",n.forEach(n=>{const t=u(n);e.insertAdjacentHTML("afterbegin",t)})}catch(e){n.innerHTML='<div class="row justify-content-center"><div class="col"><p class="h5 text-center">Maaf server error..silahkan coba beberapa saat lagi, atau cek koneksi internet anda</p></div></div>'}}};var g={"/":h,"/all-product":h,"/popular":{render:async()=>p("Popular"),async afterRender(){const e=document.querySelector(".prod"),n=document.querySelector(".err");try{const n=await d.getProducts();e.innerHTML="",n.forEach(n=>{if("pop"!==n.tag)return;const t=u(n);e.insertAdjacentHTML("afterbegin",t)})}catch(e){n.innerHTML='<div class="row justify-content-center"><div class="col"><p class="h5 text-center">Maaf server error..silahkan coba beberapa saat lagi, atau cek koneksi internet anda</p></div></div>'}}},"/best-seller":{render:async()=>p("Best Seller"),async afterRender(){const e=document.querySelector(".prod"),n=document.querySelector(".err");try{const n=await d.getProducts();e.innerHTML="",n.forEach(n=>{if("best"!==n.tag)return;const t=u(n);e.insertAdjacentHTML("afterbegin",t)})}catch(e){n.innerHTML='<div class="row justify-content-center"><div class="col"><p class="h5 text-center">Maaf server error..silahkan coba beberapa saat lagi, atau cek koneksi internet anda</p></div></div>'}}},"/detail/:id":{render:async()=>'\n  <div class="container-md detail">\n    <div class="row g-4 justify-content-center align-items-center">\n      <div class="col-md-7">\n        <img\n          src="/images/placeholder-detail.webp"\n          class="img-fluid mt-3 bg-blur"\n          alt="skeleton"\n        />\n      </div>\n      <div class="col-lg-5 text-center text-lg-start">\n        <h1>\n          <div class="display-6"><span class="grad skeleton">Lorem Ipsum</span></div>\n          <div class="mt-2"><span class="grad lead skeleton">Rp. Lorem</span></div>\n        </h1>\n        <p class="my-4 text-start grad skeleton">I\'m baby skateboard man braid pug artisan plaid portland heirloom dreamcatcher glossier fingerstache blog. Deep v af letterpress ethical brooklyn adaptogen. Kale chips swag 90\'s tattooed raw denim vaporware. Ugh craft beer hammock, gluten-free lyft meh iPhone . Skateboard keytar kogi health goth, woke portland polaroid church-key try-hard XOXO flexitarian taiyaki vinyl. Actually bespoke aesthetic whatever squid, blog master cleanse wayfarers. 8-bit direct trade yr chicharrones chartreuse neutra vape prism quinoa waistcoat pug artisan ugh plaid deep v.\n        </p>\n        <button class="btn btn-lg rounded-pill grad skeleton">\n         <span class="skeleton">Buy Now</span>\n        </button>\n      </div>\n      \n    </div>\n  </div>\n      ',async afterRender(){const e=document.querySelector(".detail");try{const n=o.parseActiveUrlWithoutCombiner(),t=await d.getDetailProduct(n.id);if(t.error)return void(e.innerHTML=`<p class="display-5 text-center">${t.error}</p>`);e.innerHTML=(e=>`\n    <div class="row g-4 justify-content-center align-items-center">\n      <div class="col-md-7">\n        <img\n          src=${e.url}\n          class="img-fluid mt-3"\n          alt=${e.name}\n        />\n      </div>\n      <div class="col-lg-5 text-center text-lg-start">\n        <h1>\n          <div class="display-6">${e.name}</div>\n          <div class="lead text-muted mt-2">Rp. ${new Intl.NumberFormat("id-ID").format(e.price)}</div>\n        </h1>\n        <p class="my-4 text-muted text-start">\n          ${e.desc}\n        </p>\n        <a href="#" target="_blank" rel="noopener" data-title="${e.name}" data-price="Rp. ${new Intl.NumberFormat("id-ID").format(e.price)}" class="btn btn-secondary btn-lg rounded-pill buy-wa text-white">\n          Buy Now\n        </a>\n      </div>\n      \n    </div>\n`)(t)}catch(n){e.innerHTML='<p class="display-5 text-center">Server Error...Coba beberapa saat lagi atau cek koneksi internet anda.</p>'}}}};var m=class{constructor({button:e,sectionProd:n}){this._button=e,this._section=n,this._initialAppShell()}_initialAppShell(){c.init({button:this._button,section:this._section})}async renderPage(){const e=o.parseActiveUrlWithCombiner(),n=g[e];this._section.innerHTML=await n.render(),await n.afterRender()}},b=t(8);var v=()=>{if("serviceWorker"in navigator){new b.a("sw.js").register()}};const y=new m({button:document.querySelectorAll(".buy-now"),sectionProd:document.querySelector("#products")}),f=document.querySelector("#hero"),w=document.querySelector("#app-bar"),k=document.querySelector(".navbar-brand span");new IntersectionObserver((e,n)=>{const[t]=e;t.isIntersecting?(w.classList.remove("bg-white","sticky-top"),w.classList.add("grad"),k.classList.remove("text-secondary"),k.classList.add("text-white")):(w.classList.add("sticky-top","bg-white"),w.classList.remove("grad"),k.classList.remove("text-white"),k.classList.add("text-secondary"),n.unobserve(t.target))},{root:null,threshold:.975}).observe(f),window.addEventListener("hashchange",()=>{y.renderPage()}),window.addEventListener("load",()=>{y.renderPage(),v()})},3:function(e,n,t){"use strict";var r=t(1),a=t.n(r)()((function(e){return e[1]}));a.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),a.push([e.i,"body {\r\n  font-family: 'Poppins', sans-serif !important;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.grad {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #6fb8b3,\r\n    #cc6e59,\r\n    #548ca8,\r\n    #f15b3a\r\n  );\r\n  background-size: 300%;\r\n  animation: bg-animation 6s infinite alternate;\r\n}\r\n\r\nmain {\r\n  flex: 1;\r\n}\r\n\r\n#hero {\r\n  padding: 60px 0 0 0;\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  #hero {\r\n    height: calc(100vh - 57px);\r\n  }\r\n}\r\n\r\nsection {\r\n  padding: 60px 0;\r\n}\r\n\r\n#product-list a,\r\n.prod a {\r\n  text-decoration: none;\r\n  color: #3e6281;\r\n}\r\n\r\n.prod img {\r\n  object-fit: cover;\r\n}\r\n\r\n.card:hover {\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n\r\n.warna-hijau {\r\n  color: #c21e09;\r\n}\r\n\r\n.niang {\r\n  color: #fcd600;\r\n}\r\n\r\n.skeleton {\r\n  user-select: none;\r\n  color: transparent;\r\n  background-size: 400%;\r\n  animation: bg-animation 2s infinite alternate;\r\n}\r\n\r\n@keyframes bg-animation {\r\n  0% {\r\n    background-position: left;\r\n  }\r\n\r\n  100% {\r\n    background-position: right;\r\n  }\r\n}\r\n\r\n/* Add the blur effect */\r\n.bg-blur {\r\n  filter: blur(30px);\r\n  -webkit-filter: blur(30px);\r\n}\r\n",""]),n.a=a}},[[15,4,1,2,0]]]);