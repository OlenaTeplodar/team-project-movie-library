import FetchApiMovies from './api';
import { createMoviesCard } from './Templates/card';
// console.log(createMoviesCard);

const refs = {
  body: document.querySelector('body'),
  cardList: document.querySelector('.home-card'),
};

const fetchApiHomeContent = new FetchApiMovies();

showPopularMovies();

async function showPopularMovies() {
  try {
    const data = await fetchApiHomeContent.fetchPopularMovies();
    const cards = data.results;
    renderMoviesCard(cards);
  } catch (error) {
    error;
  }
}

function renderMoviesCard(cards) {
  refs.cardList.insertAdjacentHTML(
    'beforeend',
    createMoviesCard(results.cards)
  );
}
