import FetchApiMovies from './api';
import { clearMoviesContainer } from './renderCards';
import { renderMoviesCard } from './renderCards';
import { spinner } from './spinner';

const refs = {
  cardList: document.querySelector('.gallery__list'),
  formSearch: document.querySelector('.header__form'),
  notification: document.querySelector('.header__notification'),
};
const target = document.getElementById('foo'); //spinner

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
  getSearchMovies();
}

function notification() {
  refs.notification.textContent =
    'Search result not successful. Enter the correct movie name and try again.';
}

async function getSearchMovies() {
  try {
    spinner.spin(target); //spinner
    const data = await fetchSearchApi.fetchSearchMovies();
    const cards = data.results;
    console.log(cards);
    renderMoviesCard(cards);
    console.log(data);
    clearMoviesContainer();
    renderMoviesCard(cards);
    if (data.total_results === 0) {
      notification();
      return;
    } else {
      notification();
    }
  } catch (error) {
    notification();
  } finally {
    //spinner
    spinner.stop();
  }
}
