import FetchApiMovies from './api';
import { createMoviesCard } from './Templates/card';
// import { pagination } from './pagination';

const refs = {
  cardList: document.querySelector('.home-card'),
};

const fetchApiHomeContent = new FetchApiMovies();
let totalPages;
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
  refs.cardList.innerHTML = '';
  refs.cardList.insertAdjacentHTML('afterbegin', createMoviesCard(cards));
}
