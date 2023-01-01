export function createMoviesCard(cards = []) {
  return cards
    .map(card => {
      const { id, name, poster_path, title, original_title, release_date } =
        card;
      return `<a class="card__link" href="" title=${name}>
			  <img class="card__image" id=${id} src=${poster_path} alt=${title} loading="lazy"/>
			</a>
		  </div class"card-content">
			<h2 class='card__name'>${original_title}</h2>
			<p class='card__date'>${release_date}</p>
				`;
    })
    .join('');
}
