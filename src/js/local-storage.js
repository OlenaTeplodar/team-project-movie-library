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

// function checkLocalStorageMovies(btn, filmId, key) {
//   const filmsArray = loadFromLocalStorage(key);
//   const currentFilm = filmsArray.includes(filmId);

//   if (filmsArray.length > 0) {
//     if (currentFilm) {
//       btn.textContent = 'ADD TO WATCHED';
//       btn.classList.add('modal-active');
//       const newArrayFilm = filmsArray.filter(film => film !== filmId);
//       localStorage.removeItem(key);
//       localStorage.setItem(key, JSON.stringify(newArrayFilm));
//     } else {
//       btn.textContent = 'REMOVE FROM WATCHED';
//       saveToLocalStorage(key, filmId);
//       btn.classList.remove('modal-active');
//     }
//   } else {
//     btn.textContent = 'REMOVE FROM WATCHED';
//     saveToLocalStorage(key, filmId);
//     btn.classList.remove('modal-active');
//   }
// }

function checkWatchedLocalStorageMovies(btn, filmId, key) {
  const filmsArray = loadFromLocalStorage(key);
  const currentFilm = filmsArray.includes(filmId);

  if (filmsArray.length > 0) {
    if (currentFilm) {
      btn.textContent = 'ADD TO WATCHED';
      btn.classList.add('modal-active');
      const newArrayFilm = filmsArray.filter(film => film !== filmId);
      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(newArrayFilm));
    } else {
      btn.textContent = 'REMOVE FROM WATCHED';
      saveToLocalStorage(key, filmId);
      btn.classList.remove('modal-active');
    }
  } else {
    btn.textContent = 'REMOVE FROM WATCHED';
    saveToLocalStorage(key, filmId);
    btn.classList.remove('modal-active');
  }
}

function checkQueuedLocalStorageMovies(btn, filmId, key) {
  const filmsArray = loadFromLocalStorage(key);
  const currentFilm = filmsArray.includes(filmId);

  if (filmsArray.length > 0) {
    if (currentFilm) {
      btn.textContent = 'ADD TO QUEUE';
      btn.classList.add('modal-active');
      const newArrayFilm = filmsArray.filter(film => film !== filmId);
      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(newArrayFilm));
    } else {
      btn.textContent = 'REMOVE FROM QUEUE';
      saveToLocalStorage(key, filmId);
      btn.classList.remove('modal-active');
    }
  } else {
    btn.textContent = 'REMOVE FROM QUEUE';
    saveToLocalStorage(key, filmId);
    btn.classList.remove('modal-active');
  }
}

export {
  WATCHED_FILM,
  QUEUED_FILM,
  loadFromLocalStorage,
  saveToLocalStorage,
  checkLocalStorageMovies,
  checkWatchedLocalStorageMovies,
  checkQueuedLocalStorageMovies,
};
