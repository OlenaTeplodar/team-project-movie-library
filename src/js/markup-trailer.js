export function markupMovieTrailer({
  youtubeKeyId,
  title,
  vote_average,
  popularity,
  original_title,
  original_title,
  overview,
}) {
  return `
    <iframe id="trailer" class="player" width="420" height="315" allowfullscreen="allowfullscreen"
      src="https://www.youtube.com/embed/${youtubeKeyId}"
      frameborder="0"></iframe>
    <div class="movie-info">
  <h2 class="film-title">${title}</h2>
  <ul class="film-title__list-film">
    <li class="film-title__film-title__item-film">Vote / Votes <span>${vote_average}/ ${vote_count}</span></li>
    <li class="film-title__item-film">Popularity<span>${popularity}</span></li>
    <li class="film-title__item-film">Original Title <span>${original_title}</span></li>
  </ul>
  <h3 class="about-title">About ${original_title}</h3>
  <p class="text-about-movie">${overview}</p>
  </div>
  `;
}
