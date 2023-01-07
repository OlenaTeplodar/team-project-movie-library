// export function renderMoviesCard(cards) {
//   refs.cardList.insertAdjacentHTML('beforeend', createMoviesCard(cards));
// }

// export function clearMoviesContainer() {
//   refs.cardList.innerHTML = '';
// }

// import { save, load } from './storage';
// import { genres } from './genres';
// const refs = {
//   cardList: document.querySelector('.cards__list'),
// };

// GENRE_KEY = 'genres';
// let genreList = {};

// function loadGenres(ids) {
//   if (localStorage.key === GENRE_KEY) {
//     return (genreList = load(GENRE_KEY));
//   }
//   let genreNames = ids.map(id => genreList[id]);
//   if (genreNames.length > 2) {
//     return `${genreNames[0]}, ${genreNames[1]}, Other`;
//   }
//   return genreNames.join(', ');

//   async function saveToLocalStorage() {
//     if (localStorage.key === GENRE_KEY) {
//       return;
//     }
//     // spinerPlay();
//     save(GENRE_KEY, genreList);
//     // spinerStop();
//   }
// }
// // function concatGenres(genres) {
// //   return genres.reduce((acc, genre, index, arr) => {
// //     if (genres.length > 2) {
// //       genre = `${arr[0]}, ${arr[1]}, Others`;
// //     } else {
// //       genre = arr.join(', ');
// //     }

// //     return genre;
// //   }, '');
// // }
// // console.log(concatGenres);

// function createMoviesCard(cards = []) {
//   return cards
//     .map(card => {
//       const { id, title, poster_path, genre_ids, release_date } = card;
//       //   const genresList = genres.map(genre => genre.name).join(', ');
//       //   const genresRender = loadGenres(genres.map(genre => genre.name));
//       return `<li class="home-card__link" id=${id}>
// 			<div class = "home-card__thumb">
// 			<picture class="home-card__poster">
// 					  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${poster_path}">
// 					  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${poster_path}">
// 					  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" loading="lazy">
// 				  </picture>
// 			  </div>
// 			  <div class="card__content">
// 			  <h2 class="card__title">${title}</h2>
// 			  <p class="card__text">${
//           loadGenres(genre_ids)
//           // genresRender ? genresRender : '---'
//         } | ${new Date(release_date).getFullYear()}</p>
// 		</div>
// 			  </li>`;
//     })
//     .join('');
// }
