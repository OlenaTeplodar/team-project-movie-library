!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,i.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i);const a={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".container-library")};async function l(){a.watchedBtn.classList.add("btn-active"),a.queueBtn.classList.remove("btn-active");try{const t=await c("WATCHED-FILM");if(console.log(t),t&&Object.keys(t).length){r();const e=s(t);a.galleryLibrary.insertAdjacentHTML("beforeend",e)}else{r();const t=o();a.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}}function s(t=[]){return t.map((t=>{const{id:e,title:n,poster_path:i,genres:a,release_date:l,vote_average:s}=t,o=a.map((t=>t.name)).reduce(((t,e,n,i)=>i.length>2?`${i[0]}, ${i[1]}, Others`:i.join(", ")),"");return`<li class="home-card__link" id=${e}>\n\t\t</div class = "home-card__thumb">\n\t\t<picture class="home-card__poster">\n\t\t\t\t  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${i}">\n\t\t\t\t  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${i}">\n\t\t\t\t  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${i}" alt="${n}" loading="lazy">\n\t\t\t  </picture>\n\t\t  \n\t\t  <h2 class='card__title'>${n}</h2>\n\t\t  <p class='card__text' id=${e}>${o||"---"} | ${new Date(l).getFullYear()}\n        <span class="card__rating">${s.toFixed(1)}</span> </p>\n\t\t</div>\n\t\t  </li>`})).join("")}function o(){return'\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="/src/index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    '}function c(t){try{const e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}function r(){a.galleryLibrary.innerHTML=""}a.watchedBtn.addEventListener("click",l);var d=i("dIxxU"),m=i("h6c0i");i("vUagc"),i("b62ED");var u=i("j1lrD");const p=document.getElementById("foo"),_={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),cardFilmLibrary:document.querySelector(".container-library")};function f(t){_.modalFilmBackdrop.classList.remove("is-hidden"),_.modalFilm.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",h),window.addEventListener("keydown",b);!async function(t){try{u.spinner.spin(p);const e=await async function(t){try{const e=await d.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}}(t);_.modalFilm.innerHTML="",function(t){const e=y(t);_.modalFilm.insertAdjacentHTML("beforeend",e)}(e)}catch(t){console.log(t.message),g(),m.Notify.failure("Sorry, movie not found. Please try again.")}finally{u.spinner.stop()}}(t.target.closest(".home-card__link").id)}function g(){window.removeEventListener("keydown",b),document.removeEventListener("click",h),_.modalFilmBackdrop.classList.add("is-hidden"),_.modalFilm.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function h(t){(t.target.classList.contains("close-modal__btn-text")||t.target.classList.contains("close-modal__btn-inner")||t.target.classList.contains("close-modal__btn-text"))&&g()}function b(t){"Escape"===t.code&&g()}_.cardFilmLibrary.addEventListener("click",f),_.cardFilmLibrary.addEventListener("click",f),_.modalFilmBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&g()}));const y=({id:t,title:e,original_title:n,overview:i,poster_path:a,vote_average:l,vote_count:s,popularity:o,genres:c})=>`\n    <button\n        type="button"\n        class="modal-film__close-button close-modal__btn"\n      >\n      <div class="close-modal__btn-inner">\n      <span class="close-modal__btn-text">Back\n      </span> </div>\n      </button>\n    <div class="modal-film__card"  id="${t}">\n    <div class="modal-film-card-wrapper">\n    <picture class="modal-film__img>\n    <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${a}">\n    <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${a}">\n    <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${a}"  "alt="${e}" loading="lazy"  >\n  </picture>\n  </div>\n  <div class="movie-info">\n    <h2 class="film-title">${e}</h2>\n    <ul class="film-title__list-film">\n    <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${l}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${s}</span> </p> </li>\n    <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${o}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${n}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${c.map((t=>t.name)).join(", ")}</p></li>\n    </ul>\n    <h3 class="about-title">About ${n}</h3>\n    <p class="text-about-movie">${i}</p>\n    \n    <ul>\n    <li><button class="modal-window__watched-btn" type="button" data-id=${t}>Add</button></li>\n    <li><button class="modal-window__queued-btn" type="button" data-id=${t}>Add to queue</button></li>\n  </ul>\n    </div>\n  `,v={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".container-library")};v.queueBtn.addEventListener("click",(async function(){v.watchedBtn.classList.remove("btn-active"),v.queueBtn.classList.add("btn-active");try{const t=await c("QUEUED-FILM");if(console.log(t),t&&Object.keys(t).length){r();const e=s(t);v.galleryLibrary.insertAdjacentHTML("beforeend",e)}else{r();const t='\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="/src/index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    ';v.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}})),i("6pumv"),i("ghI91").btnUp.addEventListener(),l()}();
//# sourceMappingURL=my-library.b3bfe26e.js.map
