const WATCHED_FILM = 'watchedMovies';
const QUEUED_FILM = 'queueMovies';

function loadFromLocalStorage(key) {
  try {
    const dataJson = localStorage.getItem(key);
    if (!dataJson) return [];
    return JSON.parse(dataJson);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function saveToLocalStorage(key, data) {
  try {
    const arrayFilms = loadFromLocalStorage(key);
    arrayFilms.push(data);
    localStorage.setItem(key, JSON.stringify(arrayFilms));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

// const watchedFilmsArray = loadFromLocalStorage(WATCHED_FILM);
// const queuedFilmsArray = loadFromLocalStorage(QUEUED_FILM);
// const currentWatchedFilm = watchedFilmsArray.includes(id);
// const currentQueuedFilm = queuedFilmsArray.includes(id);

// function checkLocalStorageWatchedMovies(btn, filmId) {
//   const watchedFilmsArray = loadFromLocalStorage(WATCHED_FILM);
//   const currentWatchedFilm = watchedFilmsArray.includes(filmId);

//   if (watchedFilmsArray.length > 0) {
//     if (currentWatchedFilm) {
//       btn.textContent = 'ADD TO WATCHED';
//       const a = watchedFilmsArray.filter(film => film !== filmId);
//        localStorage.removeItem(WATCHED_FILM);
//       localStorage.setItem(WATCHED_FILM, JSON.stringify(a));
//        } else {
//       btn.textContent = 'REMOVE FROM WATCHED';
//       saveToLocalStorage(WATCHED_FILM, filmId);
//     }
//   } else {
//     btn.textContent = 'REMOVE FROM WATCHED';
//     saveToLocalStorage(WATCHED_FILM, filmId);
//   }
//   }

function checkLocalStorageMovies(btn, filmId, key) {
  const filmsArray = loadFromLocalStorage(key);
  const currentFilm = filmsArray.includes(filmId);

  if (filmsArray.length > 0) {
    if (currentFilm) {
      btn.textContent = 'ADD TO WATCHED';
      btn.classList.add('modal-active');
      // btn.classList.remove('no-modal-active');
      // btn.classList.remove('modal-active');
      const a = filmsArray.filter(film => film !== filmId);
      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(a));
    } else {
      btn.textContent = 'REMOVE FROM WATCHED';
      saveToLocalStorage(key, filmId);
      btn.classList.remove('modal-active');
      // btn.classList.add('modal-active');
    }
  } else {
    btn.textContent = 'REMOVE FROM WATCHED';
    saveToLocalStorage(key, filmId);
    btn.classList.remove('modal-active');
    // btn.classList.add('modal-active');
  }
}

export {
  WATCHED_FILM,
  QUEUED_FILM,
  loadFromLocalStorage,
  saveToLocalStorage,
  checkLocalStorageMovies,
};
