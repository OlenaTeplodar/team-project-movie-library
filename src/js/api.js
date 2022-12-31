const axios = require('axios');

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '9fae0fdf266213c68361ca578a95b948';

export default class FetchApiMovies {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'en-US';
  }
  async fetchPopularMovies() {
    try {
      const response = await axios.get(
        `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=${this.language}&page=${this.page}`
      );
      const results = await response.data.results;
      console.log(results);
      return results;
    } catch (error) {
      error;
    }
    this.incrementPage();
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
}
