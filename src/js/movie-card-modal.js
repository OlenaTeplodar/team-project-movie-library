import axios from 'axios';
// для трейлера до фільму у модалці
import FetchApiMovies from './api';
import { markupMovieTrailer } from './markup-trailer';

const refs = {
  modalFilmBackdrop: document.querySelector('[data-modal-film]'),
  modalFilm: document.querySelector('.modal-film'),
  cardFilm: document.querySelector('.cards__list'),
};

refs.cardFilm.addEventListener('click', onOpenModalFilm);

refs.modalFilmBackdrop.addEventListener('click', onBackdropClick);

// --------open/close-modal

function onOpenModalFilm(e) {
  refs.modalFilmBackdrop.classList.remove('is-hidden');

  document.addEventListener('click', onCloseModalFilmByBtn);
  window.addEventListener('keydown', onCloseEscBtn);

  const idCard = e.target.closest('.card__link').id;
  createMovieCard(idCard);
  console.log(idCard);
  fetchMovieById(idCard).then(response => {
    refs.modalFilm.innerHTML = '';
    return render(response);
  });
  // ------ trailer movie-------
  const boxFetchApiMovies = new FetchApiMovies();
  boxFetchApiMovies
    .fetchMoviesTrailers(idCard)
    .then(
      // прописується розмітка і закидається в ДОМ
      data => {
        console.log(data);
        // прописати перевірку якщо пустий масив
        // показувати картинку
        if (data.results.length === 0) {
          return;
        }
        // прибрати картинку і поставити трейлер
        const markupTrailer = markupMovieTrailer(data.results[0].key);
        refs.modalFilm.insertAdjacentHTML('beforeend', markupTrailer);
      }
    )
    .catch(error => console.log(error));
  // ------------ end treiler movie -------------
}
function closeModalFilm() {
  window.removeEventListener('keydown', onCloseEscBtn);
  document.removeEventListener('click', onCloseModalFilmByBtn);
  refs.modalFilmBackdrop.classList.add('is-hidden');
}

function onCloseModalFilmByBtn(e) {
  console.log('click');
  if (
    e.target.classList.contains('modal-film__close-button') ||
    e.target.classList.contains('modal-film__modal-icon')
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
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`
    );
    // console.log(response.data);

    return await response.data;
  } catch (error) {
    console.log(error.message);
  }
}

// -------Create-interface----

async function createMovieCard(id) {
  try {
    const response = await fetchMovieById(id);
    refs.modalFilm.innerHTML = '';
    render(response);
  } catch (error) {
    console.log(error.message);
    closeModalFilm();
    Notify.failure('Sorry, movie not found. Please try again.');
  }
}

// ---Render--
function render(response) {
  const detailsCard = getModalMovieCardMarkup(response);
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

  return `
  <button
      type="button"
      class="modal-film__close-button"
      data-modal-film-close
    >
      <svg class="modal-film__modal-icon" width="30" height="30">
        <use href="/src/images/sprite.svg#icon-close"></use>
      </svg>
    </button>
   
  <div class="modal-film__card"  id="${id}">
  <picture class="modal-film__img>
  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${poster_path}" width="375"
  height="478">
  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${poster_path}"  "alt="${title}" loading="lazy"  >
</picture>
<div class="movie-info">
  <h2 class="film-title">${title}</h2>
  <ul class="film-title__list-film">
    <li class="film-title__film-title__item-film">Vote / Votes <span>${vote_average}/ ${vote_count}</span></li>
    <li class="film-title__item-film">Popularity<span>${popularity}</span></li>
    <li class="film-title__item-film">Original Title <span>${original_title}</span></li>
    <li class="film-title__item-film">Genre <span>${genresList}</span></li>
  

  </ul>
  <h3 class="about-title">About ${original_title}</h3>
  <p class="text-about-movie">${overview}</p>

  <ul>
      <li><button class="modal-window__watched-btn" type="button" data-id=${id}>Add to watched</button></li>
      <li><button class="modal-window__queued-btn" type="button" data-id=${id}>Add to queue</button></li>
    </ul>

  </div>
`;
};
//  poster_path = (src = '/src/images/poster.jpg'),

//////////////////////////////////////// Работа с localStorage ///////////////////////////////////

const watchedFilm = localStorage.getItem('WATCHED-FILM');
const watchedFilmsArray = JSON.parse(watchedFilm) || [];
const queuedFilm = localStorage.getItem('QUEUED-FILM');
const queuedFilmsArray = JSON.parse(queuedFilm) || [];

function onClickBtnWatchedFilm(e) {
  const watchedBtn = e.target;
  const idWatchedFilm = watchedBtn.dataset.id;
  console.log(idWatchedFilm);

  const hasWatchedFilm = watchedFilmsArray.includes(idWatchedFilm);
  if (hasWatchedFilm) {
    return;
  } else {
    watchedFilmsArray.push(idWatchedFilm);
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
    queuedFilmsArray.push(idQueuedFilm);
    localStorage.setItem('QUEUED-FILM', JSON.stringify(queuedFilmsArray));
    return;
  }
}
