const refs = {
  cardList: document.querySelector('.cards__list'),
};

export function renderMoviesCard(cards) {
  refs.cardList.insertAdjacentHTML('beforeend', createMoviesCard(cards));
}

export function clearMoviesContainer() {
  refs.cardList.innerHTML = '';
}

const GENRE_KEY = 'genreList';
let genreList = {};

export function addGenreList(genre_ids) {
  if (localStorage.key === GENRE_KEY) {
    return (genreList = load(GENRE_KEY));
  }
  let genreNames = genre_ids.map(id => genreList[id]);
  if (genreNames.length > 2) {
    return `${genreNames[0]}, ${genreNames[1]}, Other`;
  }
  return genreNames.join(', ');
}

function createMoviesCard(cards = []) {
  return cards
    .map(card => {
      const { id, title, poster_path, genre_ids, release_date } = card;
      return `<li class="home-card__link" id=${id}>
		  <div class = "home-card__thumb">
		  <picture class="home-card__poster">
					<source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${poster_path}">
					<source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
					<img class="home-card__img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy">
				</picture>
			</div>
			<div class="card__content">
			<h2 class="card__title">${title}</h2>
			<p class="card__text">${addGenreList(genre_ids)} | ${new Date(
        release_date
      ).getFullYear()}</p>
	  </div>
			</li>`;
    })
    .join('');
}
