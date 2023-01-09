import axios from 'axios';
import { Spinner } from 'spin.js';
import { spinner } from './spinner';

import { WATCHED_FILM, loadFromLocalStorage } from './local-storage';

const refs = {
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  galleryLibrary: document.querySelector('.gallery-library'),
};

export const target = document.getElementById('foo');

refs.watchedBtn.addEventListener('click', onWatchedLibrary);

let movieIdObj = [];
let movieId;

export async function onWatchedLibrary() {
  movieIdObj = [];
  console.log('click');
  refs.watchedBtn.classList.add('btn-active');
  refs.queueBtn.classList.remove('btn-active');
  clear();
  try {
    spinner.spin(target);
    const moviesIdArray = loadFromLocalStorage(WATCHED_FILM);
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
  } finally {
    spinner.stop();
  }
}

export async function fetchMovieById(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`
    );
    // console.log(response.data);

    return await response.data;
  } catch (error) {
    console.log(error.message);
  }
}
export function createMarkupWhenLocalStorageEmpty() {
  return `
  <li class="container-nothing">
      <div class="container-nothing__content">
        <h2 class="container-nothing__title">Your library is empty!</h2>
        <p class="container-nothing__text">
          <a
            title="Link to main page"
            class="container-nothing__link"
            href="./index.html"
            >GO TO</a
          >
          movie selection.
        </p>
      </div>
    </li>
    `;
}

export function clear() {
  refs.galleryLibrary.innerHTML = '';
}

function concatGenres(arrOfGenresName) {
  return arrOfGenresName.reduce((acc, genre, index, arr) => {
    if (arr.length > 2) {
      acc = `${arr[0]}, ${arr[1]}, Others`;
    } else {
      acc = arr.join(', ');
    }

    return acc;
  }, '');
}

export function createMoviesCard(cards = []) {
  return cards
    .map(card => {
      const { id, title, poster_path, genres, release_date } = card;
      const genresForRender = concatGenres(genres.map(genre => genre.name));
      return `<li class="home-card__link" id=${id}>
		</div class = "home-card__thumb">
		<picture class="home-card__poster">
				  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${poster_path}">
				  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
				  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy">
			  </picture>
			  </div>
			  <div class="card__content">
			  <h2 class="card__title">${title ? title : original_name}</h2>
			  <p class='card__text' id=${id}>${
        genresForRender ? genresForRender : '---'
      } | ${new Date(release_date).getFullYear()} </p>
		</div>
		  </li>`;
    })
    .join('');
}
