// import { database } from './js/firebase-module';

import FetchApiMovies from './js/api';
import { addMoviesCard } from './js/Templates/card';

const cardList = document.querySelector('.home-card__list');

const fetchApiMovies = new FetchApiMovies();

console.log(fetchApiMovies);

fetchApiMovies()
  .fetchPopularMovies()
  .then(renderCard)
  .catch(error => console.log(error));

function renderCard(films) {
  cardList.insertAdjacentHTML('beforeend', addMoviesCard(films));
}
