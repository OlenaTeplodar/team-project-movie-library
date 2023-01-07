import { Spinner } from 'spin.js';
import { spinner } from './spinner';
const target = document.getElementById('foo');

const refs = {
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  galleryLibrary: document.querySelector('.container-library'),
};

refs.watchedBtn.addEventListener('click', onWatchedLibrary);

export async function onWatchedLibrary() {
  refs.watchedBtn.classList.add('btn-active');
  refs.queueBtn.classList.remove('btn-active');
  try {
    spinner.spin(target);
    const moviesArray = await loadFromLocalStorage('WATCHED-FILM');
    console.log(moviesArray);

    if (!moviesArray || !Object.keys(moviesArray).length) {
      clear();
      const markupNothing = createMarkupWhenLocalStorageEmpty();
      refs.galleryLibrary.insertAdjacentHTML('beforeend', markupNothing);
    } else {
      clear();
      const markup = createMoviesCard(moviesArray);
      refs.galleryLibrary.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function createMoviesCard(cards = []) {
  return cards
    .map(card => {
      const { id, title, poster_path, genres, release_date, vote_average } =
        card;
      const genresForRender = concatGenres(genres.map(genre => genre.name));
      return `<li class="home-card__link" id=${id}>
		</div class = "home-card__thumb">
		<picture class="home-card__poster">
				  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${poster_path}">
				  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
				  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy">
			  </picture>
		  
		  <h2 class='card__title'>${title}</h2>
		  <p class='card__text' id=${id}>${
        genresForRender ? genresForRender : '---'
      } | ${new Date(release_date).getFullYear()}
        <span class="card__rating">${vote_average.toFixed(1)}</span> </p>
		</div>
		  </li>`;
    })
    .join('');
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

export function createMarkupWhenLocalStorageEmpty() {
  return `
  <li class="container-nothing">
      <div class="container-nothing__content">
        <h2 class="container-nothing__title">Your library is empty!</h2>
        <p class="container-nothing__text">
          <a
            title="Link to main page"
            class="container-nothing__link"
            href="/src/index.html"
            >GO TO</a
          >
          movie selection.
        </p>
      </div>
    </li>
    `;
}

export function loadFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

export function clear() {
  refs.galleryLibrary.innerHTML = '';
}
