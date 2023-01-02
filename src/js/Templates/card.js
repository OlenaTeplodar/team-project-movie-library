export function createMoviesCard(cards = []) {
  return cards
    .map(card => {
      const { id, name, poster_path, title, original_title, release_date } =
        card;
      return `<li class="card__link" id=${id}>
      </div class = "film__thumb">
      <picture class="film__img">
                <source media="(min-width:1024px)"  srcset="https://image.tmdb.org/t/p/w500${poster_path}">
                <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
                <img class="film__img-poster" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy">
            </picture>
          </div>
        
        <h2 class='card__title'>${title}</h2>
        <p class='card__text'><span>${original_title} </span> " | " <span>${release_date}</span></p>
        
        </li>`;
    })
    .join('');
}
