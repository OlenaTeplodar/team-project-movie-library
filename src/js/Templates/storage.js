const save = (key, genres) => {
  try {
    const serializedState = JSON.stringify(genres);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

function load(genres) {
  try {
    const serializedState = localStorage.getItem(genres);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

export default {
  save,
  load,
};
