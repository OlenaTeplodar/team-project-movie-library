import './js/watched-library';
import './js/movie-modal-library';
import './js/queue-library';
import './js/about-team-modal';
import { Spinner } from 'spin.js';
import { spinner } from './js/spinner';
import { btnUp } from './js/button-up';
import { onWatchedLibrary } from './js/watched-library';
/// button-up
btnUp.addEventListener();
////render watched gallery
onWatchedLibrary();
///spinner
const target = document.getElementById('foo');
spinner.spin(target);
window.addEventListener('load', function (e) {
  spinner.stop();
});
