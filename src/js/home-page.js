import FetchApiMovies from './api';
import { createMoviesCard } from './Templates/card';
// import { pagination } from './pagination';

const refs = {
  cardList: document.querySelector('.cards__list'),
};

const fetchApiHomeContent = new FetchApiMovies();
showPopularMovies();

async function showPopularMovies() {
  try {
    const data = await fetchApiHomeContent.fetchPopularMovies();
    const cards = data.results;
    console.log(cards);
    renderMoviesCard(cards);
  } catch (error) {
    error;
  }
}

function renderMoviesCard(cards) {
  refs.cardList.insertAdjacentHTML('beforeend', createMoviesCard(cards));
}
