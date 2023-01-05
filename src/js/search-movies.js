// const API_KEY = '9fae0fdf266213c68361ca578a95b948';
// const BASE_URL = 'https://image.tmdb.org/t/p/w500';

// ======================================================//
import axios from 'axios';
import genresList from './Templates/genres';
import FetchApiMovies from './api';
import { createMoviesCard } from './Templates/card';
import { renderMoviesCard } from './Templates/card';

const refs = {
  cardList: document.querySelector('.gallery__list'),
  formSearch: document.querySelector('.header__form'),
  notification: document.querySelector('.header__notification'),
};

const fetchSearchApi = new FetchApiMovies();
refs.formSearch.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  refs.notification.textContent = '';
  fetchSearchApi.query = e.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  if (fetchSearchApi.query === '') {
    return notification();
  }
  // fetchSearchApi.resetPage();
  //   clearMoviesContainer();
  getSearchMovies();
}

function notification() {
  refs.notification.textContent =
    'Search result not successful. Enter the correct movie name and try again.';
}

async function getSearchMovies() {
  try {
    const data = await fetchSearchApi.fetchSearchMovies();
    const cards = data.results;
    console.log(cards);
    renderMoviesCard(cards);
    console.log(data);
    renderMoviesCard(cards);
    if (data.total_results === 0) {
      notification();
      return;
    } else {
      notification();
    }
  } catch (error) {
    notification();
  }
}

// function clearMoviesContainer() {
//   refs.cardList.innerHTML = '';
// }
