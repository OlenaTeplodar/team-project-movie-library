import FetchApiMovies from './api';
import { renderMoviesCard } from './Templates/card';
// import { genres } from './Templates/genres';
// import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import { pagination } from './pagination';

const fetchApiHomeContent = new FetchApiMovies();
showPopularMovies();

async function showPopularMovies() {
  // spinerPlay();
  try {
    const data = await fetchApiHomeContent.fetchPopularMovies();
    const cards = data.results;
    console.log(cards);
    renderMoviesCard(cards);
  } catch (error) {
    console.log(error);
    // Notify.failure(error.message);
    // refs.pagination.classList.add('is-hidden');
  }
  //   spinerStop();
}

// spinerPlay();
