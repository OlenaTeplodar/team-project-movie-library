import FetchApiMovies from './api';
import { spinner } from './spinner';
import Pagination from 'tui-pagination';
import { renderMoviesCard } from './renderCards';
import { clearMoviesContainer } from './renderCards';
import { options } from './Templates/paginationSettings';

const target = document.querySelector('#tui-pagination-container');
const fetchApiHomeContent = new FetchApiMovies();

const refs = {
  pagination: document.querySelector('.tui-pagination'),
  cardList: document.querySelector('.cards__list'),
};
import 'tui-pagination/dist/tui-pagination.css';

const pagination = new Pagination(refs.pagination, options);
options.pagination = pagination;
console.log(options);

async function showPopularMovies() {
  try {
    spinner.spin(target);
    const data = await fetchApiHomeContent.fetchPopularMovies();
    console.log(data);
    const cards = data.results;
    renderMoviesCard(cards);
  } catch (error) {
    console.log(error);
  }
  spinner.stop();
  pagination.on('afterMove', updatePagination);
}

async function updatePagination(e) {
  try {
    fetchApiHomeContent.setPage(e.page);
    currentPage = e.page;
    spinner.spin(target);
    clearMoviesContainer();
    const data = await fetchApiHomeContent.fetchPopularMovies();
    const cards = data.results;
    renderMoviesCard(cards);
  } catch (error) {
    console.log(error);
  }
  spinner.stop();
}

showPopularMovies();
