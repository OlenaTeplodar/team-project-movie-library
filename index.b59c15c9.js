var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in a){var n=a[t];delete a[t];var i={id:t,exports:{}};return e[t]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){a[t]=e},t.parcelRequired7c6=n);var i=n("2shzp");const l="https://api.themoviedb.org/3",s="9fae0fdf266213c68361ca578a95b948";class o{async fetchPopularMovies(){try{const t=await i.default.get(`${l}/trending/all/day?api_key=${s}&language=${this.language}&page=${this.page}`);return await t.data}catch(t){}}async fetchSearchMovies(){try{const t=await i.default.get(`${l}/search/movie?api_key=${s}&language=${this.language}&page=${this.page}&query=${this.searchQuery}&include_adult=false`);return await t.data}catch(t){}}async fetchIdMovies(t){try{const e=await i.default.get(`${l}/movie/${t}?api_key=${s}&language=${this.language}`);return await e.data}catch(t){}}async fetchGenresMovies(){try{const t=await i.default.get(`${l}/genre/movie/list?api_key=${s}&language=${this.language}`);return await t.data}catch(t){}}async fetchMoviesTrailers(t){try{const e=await i.default.get(`${l}/movie/${t}/videos?api_key=${s}&language=${this.language}&page=${this.page}`);return await e.data}catch(t){}}incrementPage(){return this.page+=1}decrementPage(){if(1!==this.page)return this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}get pageNum(){return this.page}set pageNum(t){this.page=t}constructor(){this.searchQuery="",this.page=1,this.language="en-US"}}var c=n("04jNI"),r=n("5sxXJ");function d(t){u.cardList.insertAdjacentHTML("beforeend",function(t=[]){return async function(){if(localStorage.key===p);}(),t.map((t=>{const{id:e,title:a,poster_path:n,genre_ids:i,release_date:l}=t;return`<li class="home-card__link" id=${e}>\n\t\t\t  <div class = "home-card__thumb">\n\t\t\t  <picture class="home-card__poster">\n\t\t\t\t\t\t<source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${n}">\n\t\t\t\t\t\t<source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${n}">\n\t\t\t\t\t\t<img class="home-card__img" src="https://image.tmdb.org/t/p/w300${n}" alt="${a}" loading="lazy">\n\t\t\t\t\t</picture>\n\t\t\t\t</div>\n\t\t\t\t<div class="card__content">\n\t\t\t\t<h2 class="card__title">${a}</h2>\n\t\t\t\t<p class="card__text">${function(t){const e=f.filter((e=>t.includes(e.id))).map((t=>t.name));return console.log("list :>> ",e),e.length>2?`${e[0]}, ${e[1]}, Others`:e.join(", ")}(i)} | ${new Date(l).getFullYear()}</p>\n\t\t  </div>\n\t\t\t\t</li>`})).join("")}(t))}function m(){u.cardList.innerHTML=""}const u={cardList:document.querySelector(".cards__list")},p="genres";let f=r.genres;const g=document.getElementById("foo"),h=new o;!async function(){try{c.spinner.spin(g);const t=(await h.fetchPopularMovies()).results;let e=Math.ceil(t.length/10),a=[];for(let t=1;t<=e;t++){let n=document.createElement("li");if(1==t){let t=document.createElement("li");t.innerHTML="<li>&#8592;</li>",_.appendChild(t)}if(e<=5&&(n.innerHTML=t,_.appendChild(n),a.push(n)),e>5){if(n.innerHTML=t,_.appendChild(n),a.push(n),1==t){let t=document.createElement("li");t.innerHTML="...",_.appendChild(t)}if(e-1==t){let t=document.createElement("li");t.innerHTML="...",_.appendChild(t)}}if(t==e){let t=document.createElement("li");t.innerHTML="<li>&#8594;</li>",_.appendChild(t)}}let n=function(){let e;return function(a){e&&e.classList.remove("active"),e=a,a.classList.add("active");let n=10*(+a.innerHTML-1),i=n+10;d(t.slice(n,i))}}();n(a[0]);for(let t of a)t.addEventListener("click",(function(){m(),n(this)}))}catch(t){console.log(t)}finally{c.spinner.stop()}}();let _=document.querySelector("#pagination");n("biHlP");i=n("2shzp");var y=n("iQIUW");n("5sxXJ");c=n("04jNI");var v=n("b5rV1");const w=document.getElementById("foo"),b={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),div:document.querySelector(".modal-film "),cardFilm:document.querySelector(".cards__list"),cardFilmLibrary:document.querySelector(".container-library")};let L;function $(t,e){const a=Number(t.target.dataset.id);console.log(a),t.target.classList.contains("js-add-watched")?(0,v.saveToLocalStorage)(v.WATCHED_FILM,a):t.target.classList.contains("js-add-queue")&&(0,v.saveToLocalStorage)(v.QUEUED_FILM,a)}function E(){window.removeEventListener("keydown",k),document.removeEventListener("click",M),b.modalFilmBackdrop.classList.add("is-hidden"),b.div.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function M(t){(t.target.classList.contains("close-modal__btn-text")||t.target.classList.contains("close-modal__btn-inner")||t.target.classList.contains("close-modal__btn-text"))&&E()}function k(t){"Escape"===t.code&&E()}async function T(t){try{c.spinner.spin(w);const e=await i.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}finally{c.spinner.stop()}}function q(t){const e=S(t);return b.modalFilm.insertAdjacentHTML("beforeend",e),t}b.cardFilm.addEventListener("click",(function(t){b.modalFilmBackdrop.classList.remove("is-hidden"),b.div.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",M),window.addEventListener("keydown",k);const e=t.target.closest(".home-card__link").id;console.log(e),L=Number(e),console.log(L),async function(t){try{const e=await T(t);b.modalFilm.innerHTML="",q(e)}catch(t){E(),y.Notify.failure("Sorry, movie not found. Please try again.")}}(e),T(e).then((t=>(b.modalFilm.innerHTML="",q(t)))),b.modalFilmBackdrop.classList.contains("is-hidden")||b.modalFilm.addEventListener("click",$);(new o).fetchMoviesTrailers(e).then((t=>{if(console.log(t),0===t.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const e=`\n    <iframe id="trailer" class="player" width="420" height="315" allowfullscreen="allowfullscreen"\n    src="https://www.youtube.com/embed/${t.results[0].key}"\n    frameborder="0"></iframe>\n  `;b.modalFilm.insertAdjacentHTML("afterbegin",e)})).catch((t=>console.log(t)))})),b.modalFilmBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&E()}));const S=({id:t,title:e,original_title:a,overview:n,poster_path:i,vote_average:l,vote_count:s,popularity:o,genres:c})=>`\n  <button\n      type="button"\n      class="modal-film__close-button close-modal__btn"\n    >\n    <div class="close-modal__btn-inner">\n    <span class="close-modal__btn-text">Back\n    </span> </div>\n    </button>\n  <div class="modal-film__card"  id="${t}">\n  <div class="modal-film-card-wrapper">\n  <picture class="modal-film__img>\n  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${i}">\n  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${i}">\n  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${i}"  "alt="${e}" loading="lazy"  >\n</picture>\n</div>\n<div class="movie-info">\n  <h2 class="film-title">${e}</h2>\n  <ul class="film-title__list-film">\n  <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${l}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${s}</span> </p> </li>\n  <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${o}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${a}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${c.map((t=>t.name)).join(", ")}</p></li>\n  </ul>\n  <h3 class="about-title">About ${a}</h3>\n  <p class="text-about-movie">${n}</p>\n\n  <ul class="modal-window_list-btn">\n      <li class="modal-window_list-item-btn"><button class="modal-window__watched-btn js-add-watched" type="button" data-id=${t}>add to Watched</button></li>\n      <li class="modal-window_list-item-btn"><button class="modal-window__queued-btn js-add-queue" type="button" data-id=${t}>Add to queue</button></li>\n    </ul>\n  </div>\n`;c=n("04jNI");const x={cardList:document.querySelector(".gallery__list"),formSearch:document.querySelector(".header__form"),notification:document.querySelector(".header__notification")},F=document.getElementById("foo"),H=new o;function j(){x.notification.textContent="Search result not successful. Enter the correct movie name and try again."}x.formSearch.addEventListener("submit",(function(t){if(t.preventDefault(),x.notification.textContent="",H.query=t.currentTarget.elements.searchQuery.value.trim().toLowerCase(),""===H.query)return j();!async function(){try{c.spinner.spin(F);const t=await H.fetchSearchMovies(),e=t.results;if(console.log(e),d(e),console.log(t),m(),d(e),0===t.total_results)return void j();j()}catch(t){j()}finally{c.spinner.stop()}}()})),n("h53OD").btnUp.addEventListener();
//# sourceMappingURL=index.b59c15c9.js.map
