import {
  createMoviesCard,
  createMarkupWhenLocalStorageEmpty,
  loadFromLocalStorage,
  clear,
} from './watched-library';

const refs = {
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  galleryLibrary: document.querySelector('.container-library'),
};

refs.queueBtn.addEventListener('click', onQueueLibrary);

export async function onQueueLibrary() {
  refs.watchedBtn.classList.remove('btn-active');
  refs.queueBtn.classList.add('btn-active');
  try {
    const moviesArray = await loadFromLocalStorage('QUEUED-FILM');
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
