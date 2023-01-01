// import { database } from './js/firebase-module';
import './js/about-team-modal';
import FetchApiMovies from './js/api.js';
import { addMoviesCard } from './js/Templates/card';

const cardList = document.querySelector('.home-card');

const fetchApiHomeContent = new FetchApiMovies();

console.log(fetchApiHomeContent);

fetchApiHomeContent()
  .fetchPopularMovies()
  .then(renderCard)
  .catch(error => console.log(error));

function renderCard(results) {
  cardList.insertAdjacentHTML('beforeend', addMoviesCard(results));
}
