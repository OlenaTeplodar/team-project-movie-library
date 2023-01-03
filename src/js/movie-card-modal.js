// const { listenerCount } = require('process');

import axios from 'axios';

const refs = {
  // openModalFilmBtn: document.querySelector('[data-modal-film-open]'),
  closeModalFilmBtn: document.querySelector('[data-modal-film-close]'),
  modalFilmBackdrop: document.querySelector('[data-modal-film]'),
  modalFilm: document.querySelector('.modal-film'),
  cardFilm: document.querySelector('.cards__list'),
};

refs.cardFilm.addEventListener('click', onOpenModalFilm);
refs.closeModalFilmBtn.addEventListener('click', onCloseModalFilm);
refs.modalFilmBackdrop.addEventListener('click', onBackdropClick);

let response = [];
function onOpenModalFilm(e) {
  refs.modalFilmBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onCloseEscBtn);

  const idCard = e.target.closest('.card__link').id;
  console.log(idCard);

  response = fetchFilm(idCard);
  console.log(response);

  // render(response);
}

async function fetchFilm(idMovie) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`
    );
    console.log(response.data);
    return await response.data;
  } catch (error) {
    error;
  }
}

function onCloseModalFilm() {
  refs.modalFilmBackdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onCloseEscBtn);
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalFilm();
  }
}

function onCloseEscBtn(e) {
  if (e.code === 'Escape') {
    onCloseModalFilm();
  }
}

// ------Markup----

const getModalMovieCardMarkup = ({
  id,
  title,
  original_title,
  overview,
  poster_path,
  vote_average,
  vote_count,
  popularity,
  // genre_ids,
}) => {
  return `
   
  <div class="modal-film__card"  id="${id}">
  <picture class="img-film">
  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${poster_path}" width="375"
  height="478">
  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy"  >
</picture>
<div class="movie-info">
  <h2 class="film-title">${title}</h2>
  <ul class="film-title__list-film">
    <li class="film-title__film-title__item-film">Vote / Votes <span>${vote_average}/ ${vote_count}</span></li>
    <li class="film-title__item-film">Popularity<span>${popularity}</span></li>
    <li class="film-title__item-film">Original Title <span>${original_title}</span></li>
  

  </ul>
  <h3 class="about-title">About ${original_title}</h3>
  <p class="text-about-movie">${overview}</p>

  </div>
`;
};

// ---Render--

// function render() {
//   const detailsCard = getModalMovieCardMarkup(response.data);
//   console.log(detailsCard);

//   refs.modalFilm.insertAdjacentHTML('beforeend', detailsCard);
// }
