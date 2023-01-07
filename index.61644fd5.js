var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var i=n("2shzp");const l="https://api.themoviedb.org/3",s="9fae0fdf266213c68361ca578a95b948";class o{async fetchPopularMovies(){try{const e=await i.default.get(`${l}/trending/all/day?api_key=${s}&language=${this.language}&page=${this.page}`);return await e.data}catch(e){}}async fetchSearchMovies(){try{const e=await i.default.get(`${l}/search/movie?api_key=${s}&language=${this.language}&page=${this.page}&query=${this.searchQuery}&include_adult=false`);return await e.data}catch(e){}}async fetchIdMovies(e){try{const t=await i.default.get(`${l}/movie/${e}?api_key=${s}&language=${this.language}`);return await t.data}catch(e){}}async fetchGenresMovies(){try{const e=await i.default.get(`${l}/genre/movie/list?api_key=${s}&language=${this.language}`);return await e.data}catch(e){}}async fetchMoviesTrailers(e){try{const t=await i.default.get(`${l}/movie/${e}/videos?api_key=${s}&language=${this.language}&page=${this.page}`);return await t.data}catch(e){}}incrementPage(){return this.page+=1}decrementPage(){if(1!==this.page)return this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get pageNum(){return this.page}set pageNum(e){this.page=e}constructor(){this.searchQuery="",this.page=1,this.language="en-US"}}function c(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}function r(e){u.cardList.insertAdjacentHTML("beforeend",function(e=[]){return async function(){if(localStorage.key===p)return;await async function(){try{(await m.fetchGenresMovies()).genres.forEach((e=>f[e.id]=e.name))}catch(e){console.log(e)}}()}(),e.map((e=>{const{id:t,title:a,poster_path:n,genre_ids:i,release_date:l}=e;return`<li class="home-card__link" id=${t}>\n\t\t\t  <div class = "home-card__thumb">\n\t\t\t  <picture class="home-card__poster">\n\t\t\t\t\t\t<source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${n}">\n\t\t\t\t\t\t<source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${n}">\n\t\t\t\t\t\t<img class="home-card__img" src="https://image.tmdb.org/t/p/w300${n}" alt="${a}" loading="lazy">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t\t<div class="card__content">\n\t\t\t\t<h2 class="card__title">${a}</h2>\n\t\t\t\t<p class="card__text">${s=i,localStorage.key===p?f=c(p):s.reduce(((e,t,a,n)=>n.length>2?`${n[0]}, ${n[1]}, Others`:n.join(", ")),"")} | ${new Date(l).getFullYear()}</p>\n\t\t  </div>\n\t\t\t\t</li>`;var s})).join("")}(e))}function d(){u.cardList.innerHTML=""}const u={cardList:document.querySelector(".cards__list")},m=new o,p="genres";let f={};const g=new o;!async function(){try{const e=(await g.fetchPopularMovies()).results;let t=Math.ceil(e.length/10),a=[];for(let e=1;e<=t;e++){let n=document.createElement("li");if(1==e){let e=document.createElement("li");e.innerHTML="<li>&#8592;</li>",h.appendChild(e)}if(t<=5&&(n.innerHTML=e,h.appendChild(n),a.push(n)),t>5){if(n.innerHTML=e,h.appendChild(n),a.push(n),1==e){let e=document.createElement("li");e.innerHTML="...",h.appendChild(e)}if(t-1==e){let e=document.createElement("li");e.innerHTML="...",h.appendChild(e)}}if(e==t){let e=document.createElement("li");e.innerHTML="<li>&#8594;</li>",h.appendChild(e)}}let n=function(){let t;return function(a){t&&t.classList.remove("active"),t=a,a.classList.add("active");let n=10*(+a.innerHTML-1),i=n+10;r(e.slice(n,i))}}();n(a[0]);for(let e of a)e.addEventListener("click",(function(){d(),n(this)}))}catch(e){console.log(e)}}();let h=document.querySelector("#pagination");n("biHlP");i=n("2shzp");var _=n("iQIUW");n("5sxXJ");const v={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),div:document.querySelector(".modal-film "),cardFilm:document.querySelector(".cards__list"),cardFilmLibrary:document.querySelector(".container-library")};function y(){window.removeEventListener("keydown",b),document.removeEventListener("click",w),v.modalFilmBackdrop.classList.add("is-hidden"),v.div.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function w(e){(e.target.classList.contains("close-modal__btn-text")||e.target.classList.contains("close-modal__btn-inner")||e.target.classList.contains("close-modal__btn-text"))&&y()}function b(e){"Escape"===e.code&&y()}async function $(e){try{const t=await i.default.get(`https://api.themoviedb.org/3/movie/${e}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await t.data}catch(e){console.log(e.message)}}function L(e){const t=S(e);!function(e){M.push(e)}(e),function(e){q.push(e)}(e),v.modalFilm.insertAdjacentHTML("beforeend",t);document.querySelector(".modal-window__watched-btn").addEventListener("click",T);document.querySelector(".modal-window__queued-btn").addEventListener("click",F)}v.cardFilm.addEventListener("click",(function(e){v.modalFilmBackdrop.classList.remove("is-hidden"),v.div.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",w),window.addEventListener("keydown",b);const t=e.target.closest(".home-card__link").id;console.log(t),async function(e){try{const t=await $(e);v.modalFilm.innerHTML="",L(t)}catch(e){console.log(e.message),y(),_.Notify.failure("Sorry, movie not found. Please try again.")}}(t),$(t).then((e=>(v.modalFilm.innerHTML="",L(e))));(new o).fetchMoviesTrailers(t).then((e=>{if(console.log(e),0===e.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const t=`\n    <iframe id="trailer" class="player" width="420" height="315" allowfullscreen="allowfullscreen"\n    src="https://www.youtube.com/embed/${e.results[0].key}"\n    frameborder="0"></iframe>\n  `;v.modalFilm.insertAdjacentHTML("afterbegin",t)})).catch((e=>console.log(e)))})),v.modalFilmBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&y()}));const S=({id:e,title:t,original_title:a,overview:n,poster_path:i,vote_average:l,vote_count:s,popularity:o,genres:c})=>`\n  <button\n      type="button"\n      class="modal-film__close-button close-modal__btn"\n    >\n    <div class="close-modal__btn-inner">\n    <span class="close-modal__btn-text">Back\n    </span> </div>\n    </button>\n  <div class="modal-film__card"  id="${e}">\n  <div class="modal-film-card-wrapper">\n  <picture class="modal-film__img>\n  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${i}">\n  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${i}">\n  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${i}"  "alt="${t}" loading="lazy"  >\n</picture>\n</div>\n<div class="movie-info">\n  <h2 class="film-title">${t}</h2>\n  <ul class="film-title__list-film">\n  <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${l}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${s}</span> </p> </li>\n  <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${o}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${a}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${c.map((e=>e.name)).join(", ")}</p></li>\n  </ul>\n  <h3 class="about-title">About ${a}</h3>\n  <p class="text-about-movie">${n}</p>\n  <ul>\n      <li><button class="modal-window__watched-btn" type="button" data-id=${e}>Add</button></li>\n      <li><button class="modal-window__queued-btn" type="button" data-id=${e}>Add to queue</button></li>\n    </ul>\n  </div>\n`,E=localStorage.getItem("WATCHED-FILM"),M=JSON.parse(E)||[],k=localStorage.getItem("QUEUED-FILM"),q=JSON.parse(k)||[];function T(e){const t=e.target.dataset.id;console.log(t);return M.includes(t)?void 0:void localStorage.setItem("WATCHED-FILM",JSON.stringify(M))}function F(e){const t=e.target.dataset.id;console.log(t);return q.includes(t)?void 0:void localStorage.setItem("QUEUED-FILM",JSON.stringify(q))}var x=n("04jNI");const H={cardList:document.querySelector(".gallery__list"),formSearch:document.querySelector(".header__form"),notification:document.querySelector(".header__notification")},I=document.getElementById("foo"),C=new o;function N(){H.notification.textContent="Search result not successful. Enter the correct movie name and try again."}H.formSearch.addEventListener("submit",(function(e){if(e.preventDefault(),H.notification.textContent="",C.query=e.currentTarget.elements.searchQuery.value.trim().toLowerCase(),""===C.query)return N();!async function(){try{x.spinner.spin(I);const e=await C.fetchSearchMovies(),t=e.results;if(console.log(t),r(t),console.log(e),d(),r(t),0===e.total_results)return void N();N()}catch(e){N()}finally{x.spinner.stop()}}()})),n("h53OD").btnUp.addEventListener();
//# sourceMappingURL=index.61644fd5.js.map
