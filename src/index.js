// import { database } from './js/firebase-module';

import FetchApiMovies from './js/api';
import { addMoviesCard } from './js/Templates/card';

const cardList = document.querySelector('.home-content');

const fetchApiHomeContent = new FetchApiMovies();

console.log(fetchApiHomeContent);

if (cardList !== '') {
  return;
} else {
  fetchApiHomeContent()
    .fetchPopularMovies()
    .then(renderCard({ results }))
    .catch(error => console.log(error));
}

function renderCard(results) {
  cardList.insertAdjacentHTML('beforeend', addMoviesCard(results));
}
