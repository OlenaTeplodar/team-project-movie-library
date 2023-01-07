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

export { WATCHED_FILM, QUEUED_FILM, loadFromLocalStorage, saveToLocalStorage };
