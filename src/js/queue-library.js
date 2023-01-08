import axios from 'axios';
import { fetchMovieById } from './watched-library';
import {
  createMoviesCard,
  createMarkupWhenLocalStorageEmpty,
  clear,
} from './watched-library';
import { loadFromLocalStorage, QUEUED_FILM } from './local-storage';

const refs = {
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  galleryLibrary: document.querySelector('.gallery-library'),
};

refs.queueBtn.addEventListener('click', onQueueLibrary);

let movieIdObj = [];
let movieId;

export async function onQueueLibrary() {
  console.log('click');
  refs.watchedBtn.classList.remove('btn-active');
  refs.queueBtn.classList.add('btn-active');
  clear();
  try {
    const moviesIdArray = loadFromLocalStorage(QUEUED_FILM);
    for (let i = 0; i < moviesIdArray.length; i++) {
      movieId = moviesIdArray[i];
      const byMovie = await fetchMovieById(movieId);
      movieIdObj.push(byMovie);
      console.log(movieIdObj);
    }
    if (!moviesIdArray || !Object.keys(moviesIdArray).length) {
      clear();
      const markupNothing = createMarkupWhenLocalStorageEmpty();
      refs.galleryLibrary.insertAdjacentHTML('beforeend', markupNothing);
    } else {
      clear();
      const markup = createMoviesCard(movieIdObj);
      refs.galleryLibrary.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {
    console.log(error.message);
  }
}
