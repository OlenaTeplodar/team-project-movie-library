var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,i.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i);var a=i("2shzp");i("dCvm9");var l=i("04jNI"),s=i("b5rV1");const o={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".gallery-library")},c=document.getElementById("foo");o.watchedBtn.addEventListener("click",m);let r,d=[];async function m(){d=[],console.log("click"),o.watchedBtn.classList.add("btn-active"),o.queueBtn.classList.remove("btn-active"),_();try{l.spinner.spin(c);const t=(0,s.loadFromLocalStorage)(s.WATCHED_FILM);for(let e=0;e<t.length;e++){r=t[e];const n=await u(r);d.push(n),console.log(d)}if(t&&Object.keys(t).length){_();const t=g(d);o.galleryLibrary.insertAdjacentHTML("beforeend",t)}else{_();const t=p();o.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}finally{l.spinner.stop()}}async function u(t){try{const e=await a.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}}function p(){return'\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="./index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    '}function _(){o.galleryLibrary.innerHTML=""}function g(t=[]){return t.map((t=>{const{id:e,title:n,poster_path:i,genres:a,release_date:l}=t,s=a.map((t=>t.name)).reduce(((t,e,n,i)=>i.length>2?`${i[0]}, ${i[1]}, Others`:i.join(", ")),"");return`<li class="home-card__link" id=${e}>\n\t\t</div class = "home-card__thumb">\n\t\t<picture class="home-card__poster">\n\t\t\t\t  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${i}">\n\t\t\t\t  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${i}">\n\t\t\t\t  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${i}" alt="${n}" loading="lazy">\n\t\t\t  </picture>\n\t\t\t  </div>\n\t\t\t  <div class="card__content">\n\t\t\t  <h2 class="card__title">${n||original_name}</h2>\n\t\t\t  <p class='card__text' id=${e}>${s||"---"} | ${new Date(l).getFullYear()} </p>\n\t\t</div>\n\t\t  </li>`})).join("")}i("dCvm9");l=i("04jNI"),s=i("b5rV1");const f={watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn"),galleryLibrary:document.querySelector(".gallery-library")};f.queueBtn.addEventListener("click",(async function(){b=[],console.log("click"),f.watchedBtn.classList.remove("btn-active"),f.queueBtn.classList.add("btn-active"),_();try{l.spinner.spin(c);const t=(0,s.loadFromLocalStorage)(s.QUEUED_FILM);for(let e=0;e<t.length;e++){h=t[e];const n=await u(h);b.push(n),console.log(b)}if(t&&Object.keys(t).length){_();const t=g(b);f.galleryLibrary.insertAdjacentHTML("beforeend",t)}else{_();const t='\n  <li class="container-nothing">\n      <div class="container-nothing__content">\n        <h2 class="container-nothing__title">Your library is empty!</h2>\n        <p class="container-nothing__text">\n          <a\n            title="Link to main page"\n            class="container-nothing__link"\n            href="./index.html"\n            >GO TO</a\n          >\n          movie selection.\n        </p>\n      </div>\n    </li>\n    ';f.galleryLibrary.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t.message)}finally{l.spinner.stop()}}));let h,b=[];a=i("2shzp");var v=i("iQIUW");i("5sxXJ"),i("dCvm9");l=i("04jNI");var y=i("7rYDH"),L=i("4WdgQ");s=i("b5rV1");const w=document.getElementById("foo"),E={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),cardFilmLibrary:document.querySelector(".container-library")};function k(t){E.modalFilmBackdrop.classList.remove("is-hidden"),E.modalFilm.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",M),window.addEventListener("keydown",T);const e=t.target.closest(".home-card__link");!async function(t){try{l.spinner.spin(w);const e=await async function(t){try{const e=await a.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}}(t);E.modalFilm.innerHTML="",function(t){const e=q(t);E.modalFilm.insertAdjacentHTML("beforeend",e)}(e)}catch(t){console.log(t.message),F(),v.Notify.failure("Sorry, movie not found. Please try again.")}finally{l.spinner.stop()}}(e.id),E.modalFilmBackdrop.classList.contains("is-hidden")||E.modalFilm.addEventListener("click",$);(new(0,y.default)).fetchMoviesTrailers(e.id).then((t=>{if(console.log(t),0===t.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const e=(0,L.markupMovieTrailer)(t.results[0].key);E.modalFilm.insertAdjacentHTML("afterbegin",e)})).catch((t=>console.log(t)))}function $(t){const e=t.target,n=Number(t.target.dataset.id);t.target.classList.contains("js-add-watched")?(0,s.checkLocalStorageMovies)(e,n,s.WATCHED_FILM):t.target.classList.contains("js-add-queue")&&(0,s.checkLocalStorageMovies)(e,n,s.QUEUED_FILM)}function F(){window.removeEventListener("keydown",T),document.removeEventListener("click",M),E.modalFilmBackdrop.classList.add("is-hidden"),E.modalFilm.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function M(t){(t.target.classList.contains("close-modal__btn-text")||t.target.classList.contains("close-modal__btn-inner")||t.target.classList.contains("close-modal__btn-text"))&&F()}function T(t){"Escape"===t.code&&F()}E.cardFilmLibrary.addEventListener("click",k),E.cardFilmLibrary.addEventListener("click",k),E.modalFilmBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&F()}));const q=({id:t,title:e,original_title:n,overview:i,poster_path:a,vote_average:l,vote_count:o,popularity:c,genres:r})=>{const d=r.map((t=>t.name)).join(", "),m=(0,s.loadFromLocalStorage)(s.WATCHED_FILM),u=(0,s.loadFromLocalStorage)(s.QUEUED_FILM);let p="ADD TO WATCHED",_="ADD TO QUEUE",g="modal-active",f="modal-active";return m.includes(t)&&(p="REMOVE FROM WATCHED",g=""),u.includes(t)&&(_="REMOVE FROM QUEUE",f=""),`\n    <button\n        type="button"\n        class="modal-film__close-button close-modal__btn"\n      >\n      <div class="close-modal__btn-inner">\n      <span class="close-modal__btn-text">Back\n      </span> </div>\n      </button>\n    <div class="modal-film__card"  id="${t}">\n    <div class="modal-film-card-wrapper">\n    <picture class="modal-film__img>\n    <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${a}">\n    <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${a}">\n    <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${a}"  "alt="${e}" loading="lazy"  >\n  </picture>\n  </div>\n  <div class="movie-info">\n    <h2 class="film-title">${e}</h2>\n    <ul class="film-title__list-film">\n    <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${l}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${o}</span> </p> </li>\n    <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${c}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${n}</p></li>\n    <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${d}</p></li>\n    </ul>\n    <h3 class="about-title">About ${n}</h3>\n    <p class="text-about-movie">${i}</p>\n    \n     <ul class="modal-window_list-btn">\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from watched" class="${g} modal-window__watched-btn js-add-watched" type="button" data-id=${t}>${p}</button></li>\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from queue" class="${f} modal-window__queued-btn js-add-queue" type="button" data-id=${t}>${_}</button></li>\n    </ul>\n    </div>\n  `};i("biHlP"),i("gyeM6"),i("dCvm9");l=i("04jNI");i("h53OD").btnUp.addEventListener(),m(),l.spinner.spin(c),window.addEventListener("load",(function(t){l.spinner.stop()}));
//# sourceMappingURL=my-library.0393de17.js.map
