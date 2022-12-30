export function addMoviesCard({ films }) {
	return films
	  .map(film => {
		const { id, poster_path, title, original_title, release_date } = film;
		return `<li class="card__item">
		<div class="card__link">
		  <img class="card__image" id=${id} src=${poster_path} alt=${title} loading="lazy"/>
		</div>
	  </div class"card-text">
		<h2 class='card__name'>${original_title}</h2>
		<h2 class='card__date'>${release_date}</h2>
	  </li>
			`;
	  })
	  .join('');
  }
  