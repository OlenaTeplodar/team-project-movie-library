const axios = require('axios');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9fae0fdf266213c68361ca578a95b948';
export default class FetchApiMovies {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'en-US';
  }
  // Реалізація підвантаження популярних фільмів на головну (першу) сторінку
  async fetchPopularMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${this.language}&page=${this.page}`
      );
      const results = await response.results;
      return results;
    } catch (error) {
      error;
    }
  }
  // Реалізація пошук та відображення фільмів
  async fetchSearchMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${this.language}=${this.page}&query=${this.searchQuery}`
      );
      const results = await response.data.results;
      return results;
    } catch (error) {
      error;
    }
  }

  async fetchGenresMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/genre/movie/list?api_key=${KEY}`
      );
      const data = await response.data.genres;
      return data.genres;
    } catch (error) {
      error;
    }
  }

  incrementPage() {
    this.page += 1;
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
