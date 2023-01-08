export function renderMoviesCard(cards) {
  refs.cardList.insertAdjacentHTML('beforeend', createMoviesCard(cards));
}

export function clearMoviesContainer() {
  refs.cardList.innerHTML = '';
}

import { genres } from './Templates/genres';
const refs = {
  cardList: document.querySelector('.cards__list'),
};

const GENRE_KEY = 'genres';
let genreList = genres;

function loadGenres(genres) {
  const list = genreList
    .filter(obj => genres.includes(obj.id))
    .map(g => g.name);
  console.log('list :>> ', list);
  return list.length > 2 ? `${list[0]}, ${list[1]}, Others` : list.join(', ');
}

async function saveToLocalStorage() {
  if (localStorage.key === GENRE_KEY) {
    return;
  }
}

function createMoviesCard(cards = []) {
  saveToLocalStorage();
  return cards
    .map(card => {
      const {
        id,
        title,
        original_name,
        poster_path,
        genre_ids,
        release_date,
        first_air_date,
      } = card;
      return `<li class="home-card__link" id=${id}>
				<div class = "home-card__thumb">
				<picture class="home-card__poster">
						  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${poster_path}">
						  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
						  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy">
					  </picture>
				  </div>
				  <div class="card__content">
				  <h2 class="card__title">${title ? title : original_name}</h2>
				  <p class="card__text">${loadGenres(genre_ids)} | ${
        release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4)
      }</p>
			</div>
				  </li>`;
    })
    .join('');
}
