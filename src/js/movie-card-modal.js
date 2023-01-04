import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { genres } from './Templates/genres';

console.log('Hello');

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

  </div>
`;
};

//  poster_path = (src = '/src/images/poster.jpg'),
