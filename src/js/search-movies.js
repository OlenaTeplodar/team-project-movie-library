import FetchApiMovies from './api';
import { clearMoviesContainer } from './renderCards';
import { renderMoviesCard } from './renderCards';
import { spinner } from './spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './Properties/refs';

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
    Notify.info(
      'Search result not successful. Enter the correct movie name and try again.'
    );
    return;
  }
  getSearchMovies();
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
      Notify.info(
        'Search result not successful. Enter the correct movie name and try again.'
      );
      return;
    }
  } catch (error) {
    Notify.info(
      'Search result not successful. Enter the correct movie name and try again.'
    );
  } finally {
    //spinner
    spinner.stop();
  }
}
