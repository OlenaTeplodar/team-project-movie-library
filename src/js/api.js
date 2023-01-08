import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9fae0fdf266213c68361ca578a95b948';
export default class FetchApiMovies {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'en-US';
  }
  // Реалізація для запиту на список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці:
  async fetchPopularMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=${this.language}&page=${this.page}`
      );
      return await response.data;
    } catch (error) {
      error;
    }
  }

  // Реалізація для запиту фільму за ключовим словом на головній сторінці:
  async fetchSearchMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${this.language}&page=${this.page}&query=${this.searchQuery}&include_adult=false`
      );
      return await response.data;
    } catch (error) {
      error;
    }
  }
  // Реалізація для запиту повної інформації про кінофільм для сторінки кінофільму:
  // Реалізація для запиту повної інформації про можливий трейлер на YouTube:
  async fetchIdMovies(movieID) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=${this.language}`
      );
      return await response.data;
    } catch (error) {
      error;
    }
  }

  // Реалізація для запиту за жанрами:
  async fetchGenresMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${this.language}`
      );
      return await response.data;
    } catch (error) {
      error;
    }
  }
  // Fetch підвантаження трейлера до фільму для модального вікна
  async fetchMoviesTrailers(id) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${this.language}&page=${this.page}`
      );
      return await response.data;
    } catch (error) {
      error;
    }
  }

  incrementPage() {
    return (this.page += 1);
  }

  decrementPage() {
    if (this.page === 1) {
      return;
    }
    return (this.page -= 1);
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get pageNum() {
    return this.page;
  }

  set pageNum(newPage) {
    this.page = newPage;
  }
}
