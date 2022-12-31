export function addMoviesCard(cards = []) {
  return cards
    .map(card => {
      const { id, name, poster_path, title, original_title, release_date } =
        card;
      return `<li class="card__link" id=${id}>
	  </div class"card-content">
			<img class="card__image" src=${poster_path} alt=${name} loading="lazy"/>
			</div>
		
		  <h2 class='card__title'>${title}</h2>
		  <p class='card__text'><span>${original_title} </span> " | " <span>${release_date}</span></p>
		  
		  </li>
			  `;
    })
    .join('');
}
