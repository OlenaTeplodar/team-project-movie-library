const axios = require('axios').default;

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '9fae0fdf266213c68361ca578a95b948';

export default class FetchApiMovies {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'en-US';
  }
  async fetchPopularMovies() {
    console.log(this);
    const response = await axios.get(
      `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=${this.language}&page=${this.page}`
    );
    const results = await response.json();
    console.log(results);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return results;
  }

  //   incrementPage() {
  //     this.page += 1;
  //   }

  //   resetPage() {
  //     this.page = 1;
  //   }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
