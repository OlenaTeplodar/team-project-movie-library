import FetchApiMovies from './api';
import { Spinner } from 'spin.js';
import { spinner } from './spinner';
// import { fetchMovieById } from './watched-library';
import {
  target,
  createMoviesCard,
  createMarkupWhenLocalStorageEmpty,
  clearMoviesCard,
} from './watched-library';
import { loadFromLocalStorage, QUEUED_FILM } from './local-storage';

export const refs = {
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  galleryLibrary: document.querySelector('.gallery-library'),
  containerNothing: document.querySelector('.container-library-nothing'),
};

const fetchMovieById = new FetchApiMovies();

refs.queueBtn.addEventListener('click', onQueueLibrary);

let movieIdObj = [];
let movieId;

export async function onQueueLibrary() {
  movieIdObj = [];
  // console.log('click');
  refs.watchedBtn.classList.remove('btn-active');
  refs.queueBtn.classList.add('btn-active');

  try {
    spinner.spin(target);

    const moviesIdArray = loadFromLocalStorage(QUEUED_FILM);

    for (let i = 0; i < moviesIdArray.length; i++) {
      movieId = moviesIdArray[i];
      const byMovie = await fetchMovieById.fetchIdMovies(movieId);

      movieIdObj.push(byMovie);
      // console.log(movieIdObj);
    }
    if (!moviesIdArray || !Object.keys(moviesIdArray).length) {
      refs.containerNothing.innerHTML = '';
      clearMoviesCard();
      const markupNothing = createMarkupWhenLocalStorageEmpty();
      refs.containerNothing.insertAdjacentHTML('beforeend', markupNothing);
    } else {
      clearMoviesCard();
      const markup = createMoviesCard(movieIdObj);
      refs.galleryLibrary.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    spinner.stop();
  }
}
