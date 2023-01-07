export function renderMoviesCard(cards) {
  refs.cardList.insertAdjacentHTML('beforeend', createMoviesCard(cards));
}

export function clearMoviesContainer() {
  refs.cardList.innerHTML = '';
}

import FetchApiMovies from './api';
import { load } from './Templates/storage';
// import { genres } from './Templates/genres';
const refs = {
  cardList: document.querySelector('.cards__list'),
};

const fetchApiGenres = new FetchApiMovies();
const GENRE_KEY = 'genres';
let genreList = {};

async function addGenresMovies() {
  // spinerPlay();
  try {
    const data = await fetchApiGenres.fetchGenresMovies();
    data.genres.forEach(genre => (genreList[genre['id']] = genre['name']));
  } catch (error) {
    console.log(error);
    // Notify.failure(error.message);
    // refs.pagination.classList.add('is-hidden');
  }
  //   spinerStop();
}

function loadGenres(genres) {
  if (localStorage.key === GENRE_KEY) {
    return (genreList = load(GENRE_KEY));
  }
  return genres.reduce((acc, genre, index, arr) => {
    if (arr.length > 2) {
      acc = `${arr[0]}, ${arr[1]}, Others`;
    } else {
      acc = arr.join(', ');
    }

    return acc;
  }, '');
}

async function saveToLocalStorage() {
  if (localStorage.key === GENRE_KEY) {
    return;
  }
  // spinerPlay();
  await addGenresMovies();
  // spinerStop();
}

function createMoviesCard(cards = []) {
  //   spinerPlay();
  saveToLocalStorage();
  //   spinerStop();
  return cards
    .map(card => {
      const { id, title, poster_path, genre_ids, release_date } = card;
      //   const genresList = genres.map(genre => genre.name).join(', ');
      //   const genresRender = loadGenres(genres.map(genre => genre.name));
      return `<li class="home-card__link" id=${id}>
			  <div class = "home-card__thumb">
			  <picture class="home-card__poster">
						<source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${poster_path}">
						<source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
						<img class="home-card__img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy">
					</picture>
				</div>
				<div class="card__content">
				<h2 class="card__title">${title}</h2>
				<p class="card__text">${
          loadGenres(genre_ids)
          //   genresRender ? genresRender : '---'
        } | ${new Date(release_date).getFullYear()}</p>
		  </div>
				</li>`;
    })
    .join('');
}
