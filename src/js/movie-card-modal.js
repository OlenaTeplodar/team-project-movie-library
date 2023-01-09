import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { spinner } from './spinner';

import {
  WATCHED_FILM,
  QUEUED_FILM,
  loadFromLocalStorage,
  saveToLocalStorage,
  checkLocalStorageMovies,
  checkWatchedLocalStorageMovies,
  checkQueuedLocalStorageMovies,
} from './local-storage';

// для трейлера до фільму у модалці
import FetchApiMovies from './api';
import { markupMovieTrailer } from './markup-trailer';
const target = document.getElementById('foo');

const refs = {
  modalFilmBackdrop: document.querySelector('[data-modal-film]'),
  modalFilm: document.querySelector('.modal-film'),
  cardFilm: document.querySelector('.cards__list'),
  cardFilmLibrary: document.querySelector('.container-library'),
};

refs.cardFilm.addEventListener('click', onOpenModalFilm);
refs.modalFilmBackdrop.addEventListener('click', onBackdropClick);

// --------open/close-modal

function onOpenModalFilm(e) {
  refs.modalFilmBackdrop.classList.remove('is-hidden');
  refs.modalFilm.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  document.addEventListener('click', onCloseModalFilmByBtn);
  window.addEventListener('keydown', onCloseEscBtn);

  const idCard = e.target.closest('.home-card__link').id;

  fetchMovieById(idCard).then(response => {
    refs.modalFilm.innerHTML = '';
    return render(response);
  });

  if (!refs.modalFilmBackdrop.classList.contains('is-hidden')) {
    refs.modalFilm.addEventListener('click', onModalLibraryBtnsClick);
  }

  // // ------ trailer movie-------
  const boxFetchApiMovies = new FetchApiMovies();
  boxFetchApiMovies
    .fetchMoviesTrailers(idCard)
    .then(data => {
      console.log(data);
      // перевірка якщо пустий масив
      // показувати картинку
      if (data.results.length === 0) {
        return;
      }
      const picture = document.querySelector('.modal-film-card-wrapper');
      picture.remove();
      const markupTrailer = markupMovieTrailer(data.results[0].key);
      refs.modalFilm.insertAdjacentHTML('afterbegin', markupTrailer);
    })
    .catch(error => console.log(error));
  // // ------------ end treiler movie -------------
}

function onModalLibraryBtnsClick(e) {
  const btn = e.target;
  const filmId = Number(e.target.dataset.id);

  if (e.target.classList.contains('js-add-watched')) {
    checkWatchedLocalStorageMovies(btn, filmId, WATCHED_FILM);
  } else if (e.target.classList.contains('js-add-queue')) {
    checkQueuedLocalStorageMovies(btn, filmId, QUEUED_FILM);
  }
}

function closeModalFilm() {
  window.removeEventListener('keydown', onCloseEscBtn);
  document.removeEventListener('click', onCloseModalFilmByBtn);
  refs.modalFilmBackdrop.classList.add('is-hidden');
  refs.modalFilm.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

function onCloseModalFilmByBtn(e) {
  if (
    e.target.classList.contains('close-modal__btn-text') ||
    e.target.classList.contains('close-modal__btn-inner') ||
    e.target.classList.contains('close-modal__btn-text')
  ) {
    closeModalFilm();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModalFilm();
  }
}

function onCloseEscBtn(e) {
  // console.log(e.code);
  if (e.code === 'Escape') {
    closeModalFilm();
  }
}

// -----Fetch-by-id---

async function fetchMovieById(idMovie) {
  try {
    spinner.spin(target);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`
    );
    return await response.data;
  } catch (error) {
    console.log(error.message);
  } finally {
    spinner.stop();
  }
}

// -------Create-interface----

async function createMovieCard(id) {
  try {
    const response = await fetchMovieById(id);
    refs.modalFilm.innerHTML = '';
    render(response);
  } catch (error) {
    closeModalFilm();
    Notify.failure('Sorry, movie not found. Please try again.');
  }
}

// ---Render--
function render(response) {
  const detailsCard = getModalMovieCardMarkup(response);
  refs.modalFilm.insertAdjacentHTML('beforeend', detailsCard);

  return response;
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
  genres,
}) => {
  const genresList = genres.map(genre => genre.name).join(', ');

  const watchedFilmsArray = loadFromLocalStorage(WATCHED_FILM);
  const queuedFilmsArray = loadFromLocalStorage(QUEUED_FILM);
  const currentWatchedFilm = watchedFilmsArray.includes(id);
  const currentQueuedFilm = queuedFilmsArray.includes(id);

  let textBtnWatched = 'ADD TO WATCHED';
  let textBtnQueue = 'ADD TO QUEUE';
  let modal_active_w = 'modal-active';
  let modal_active_q = 'modal-active';

  if (currentWatchedFilm) {
    textBtnWatched = 'REMOVE FROM WATCHED';
    modal_active_w = '';
  }

  if (currentQueuedFilm) {
    textBtnQueue = 'REMOVE FROM QUEUE';
    modal_active_q = '';
  }

  return `
  <button
      type="button"
      class="modal-film__close-button close-modal__btn"
    >
    <div class="close-modal__btn-inner">
    <span class="close-modal__btn-text">Back
    </span> </div>
    </button>
  <div class="modal-film__card"  id="${id}">
  <div class="modal-film-card-wrapper">
  <picture class="modal-film__img>
  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${poster_path}">
  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${poster_path}"  "alt="${title}" loading="lazy"  >
</picture>
</div>
<div class="movie-info">
  <h2 class="film-title">${title}</h2>
  <ul class="film-title__list-film">
  <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${vote_average}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${vote_count}</span> </p> </li>
  <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${popularity}</p></li>
  <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${original_title}</p></li>
  <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${genresList}</p></li>
 
  </ul>
  <h3 class="about-title">About</h3>
  <p class="text-about-movie">${overview}</p>

  <ul class="modal-window_list-btn">
      <li class="modal-window_list-item-btn "><button aria-label="add or remove from watched" class="${modal_active_w} modal-window__watched-btn js-add-watched" type="button" data-id=${id}>${textBtnWatched}</button></li>
      <li class="modal-window_list-item-btn "><button aria-label="add or remove from queue" class="${modal_active_q} modal-window__queued-btn js-add-queue" type="button" data-id=${id}>${textBtnQueue}</button></li>
    </ul>
  </div>
`;
};
