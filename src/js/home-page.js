import FetchApiMovies from './api';
import { createMoviesCard } from './Templates/card';
// console.log(createMoviesCard);

const refs = {
  body: document.querySelector('body'),
  cardList: document.querySelector('.home-card'),
};

const fetchApiHomeContent = new FetchApiMovies();
// console.log(fetchApiHomeContent);
showPopularMovies();

async function showPopularMovies() {
  const results = await fetchApiHomeContent.fetchPopularMovies();
  renderMoviesCard(results);
}

function renderMoviesCard(cards) {
  refs.cardList.insertAdjacentHTML(
    'beforeend',
    createMoviesCard(results.cards)
  );
}
