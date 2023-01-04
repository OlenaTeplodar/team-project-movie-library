export function markupMovieTrailer(youtubeKeyId) {
  return `
    <iframe id="trailer" class="player" width="420" height="315" allowfullscreen="allowfullscreen"
      src="https://www.youtube.com/embed/${youtubeKeyId}"
      frameborder="0"></iframe>
  `;
}
