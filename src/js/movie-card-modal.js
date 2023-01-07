import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { genres } from './Templates/genres';
import { spinner } from './spinner';

// для трейлера до фільму у модалці
import FetchApiMovies from './api';
import { markupMovieTrailer } from './markup-trailer';
const target = document.getElementById('foo');

const refs = {
  modalFilmBackdrop: document.querySelector('[data-modal-film]'),
  modalFilm: document.querySelector('.modal-film'),
  div: document.querySelector('.modal-film '),
  cardFilm: document.querySelector('.cards__list'),
  cardFilmLibrary: document.querySelector('.container-library'),
};

refs.cardFilm.addEventListener('click', onOpenModalFilm);
refs.modalFilmBackdrop.addEventListener('click', onBackdropClick);

// --------open/close-modal

function onOpenModalFilm(e) {
  refs.modalFilmBackdrop.classList.remove('is-hidden');
  refs.div.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  document.addEventListener('click', onCloseModalFilmByBtn);
  window.addEventListener('keydown', onCloseEscBtn);

  const idCard = e.target.closest('.home-card__link').id;
  console.log(idCard);

  createMovieCard(idCard);

  fetchMovieById(idCard).then(response => {
    refs.modalFilm.innerHTML = '';
    return render(response);
  });
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

function closeModalFilm() {
  window.removeEventListener('keydown', onCloseEscBtn);
  document.removeEventListener('click', onCloseModalFilmByBtn);
  refs.modalFilmBackdrop.classList.add('is-hidden');
  refs.div.classList.add('is-hidden');
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
    // console.log(response.data);

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

    // console.log(id);
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
  getWatchedToLocalStr(response);
  getQueuedToLocalStr(response);

  refs.modalFilm.insertAdjacentHTML('beforeend', detailsCard);

  const btnWatchedFilmModalWindowEl = document.querySelector(
    '.modal-window__watched-btn'
  );
  btnWatchedFilmModalWindowEl.addEventListener('click', onClickBtnWatchedFilm);
  const btnQueuedFilmModalWindowEl = document.querySelector(
    '.modal-window__queued-btn'
  );
  btnQueuedFilmModalWindowEl.addEventListener('click', onClickBtnQueuedFilm);
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

  // const watchedFilm = localStorage.getItem('WATCHED-FILM');
  // const watchedFilmsArray = JSON.parse(watchedFilm) || [];
  // const queuedFilm = localStorage.getItem('QUEUED-FILM');
  // const queuedFilmsArray = JSON.parse(queuedFilm) || [];

  // const a = String(id);

  // const hasWatchedFilm = watchedFilmsArray.some(value => value === String(id));
  // console.log(hasWatchedFilm);
  // console.log(id);

  // console.log(watchedFilmsArray);

  // const hasWatchedFilm = watchedFilmsArray.includes(id);
  // console.log(hasWatchedFilm);
  // console.log(id);

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
  <h3 class="about-title">About ${original_title}</h3>
  <p class="text-about-movie">${overview}</p>
  <ul class="modal-window_list-btn">
      <li class="modal-window_list-item-btn"><button class="modal-window__watched-btn" type="button" data-id=${id}>add to Watched</button></li>
      <li class="modal-window_list-item-btn"><button class="modal-window__queued-btn" type="button" data-id=${id}>Add to queue</button></li>
    </ul>
  </div>
`;
};

//////////////////////////////////////// Работа с localStorage ///////////////////////////////////

const watchedFilm = localStorage.getItem('WATCHED-FILM');
const watchedFilmsArray = JSON.parse(watchedFilm) || [];
const queuedFilm = localStorage.getItem('QUEUED-FILM');
const queuedFilmsArray = JSON.parse(queuedFilm) || [];

// function arrayFilms() {
//   const watchedFilmsArray = JSON.parse(watchedFilm) || [];
//   return watchedFilmsArray

// }

//  const hasWatchedFilm = watchedFilmsArray.includes(id);
// const aboutFilm = {};
// console.log(aboutFilm);

// console.log(watchedFilm);

function onClickBtnWatchedFilm(e) {
  const watchedBtn = e.target;
  const idWatchedFilm = watchedBtn.dataset.id;
  console.log(idWatchedFilm);

  const hasWatchedFilm = watchedFilmsArray.includes(idWatchedFilm);
  if (hasWatchedFilm) {
    return;
  } else {
    // watchedFilmsArray.push(idWatchedFilm);
    // getToLocalStr(response);
    localStorage.setItem('WATCHED-FILM', JSON.stringify(watchedFilmsArray));
    return;
  }
}

function onClickBtnQueuedFilm(e) {
  const queuedBtn = e.target;
  const idQueuedFilm = queuedBtn.dataset.id;
  console.log(idQueuedFilm);

  const hasQueuedFilm = queuedFilmsArray.includes(idQueuedFilm);
  if (hasQueuedFilm) {
    return;
  } else {
    // queuedFilmsArray.push(idQueuedFilm);
    localStorage.setItem('QUEUED-FILM', JSON.stringify(queuedFilmsArray));
    return;
  }
}

function getWatchedToLocalStr(response) {
  watchedFilmsArray.push(response);
  // queuedFilmsArray.push(response);
}

function getQueuedToLocalStr(response) {
  // watchedFilmsArray.push(response);
  queuedFilmsArray.push(response);
}

// function checkFilmInLocStr(idCard) {
//   const hasWatchedFilm = watchedFilmsArray.includes(idCard);
//   // if (hasWatchedFilm) {
//   //   return console.log('true');
//   // } else {
//   //   return console.log('false');
//   // }
//   return hasWatchedFilm;
// }

// const btnWatchedFilmModalWindowEl = document.querySelector(
//   '.modal-window__watched-btn'
// );

// const btnQueuedFilmModalWindowEl = document.querySelector(
//   '.modal-window__queued-btn'
// );
