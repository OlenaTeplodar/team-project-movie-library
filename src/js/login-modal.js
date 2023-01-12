// import { refs } from './refs-firebase';

// refs.enterBtn.addEventListener('click', onOpenLoginModal);

// refs.modalWindow.addEventListener('click', closeEnterModal);

// export function onOpenLoginModal() {
//   refs.modalWindow.classList.add('visible');
//   refs.bodyAsFone.classList.add('no-scroll');
//   window.addEventListener('keydown', onEscClick);
// }

// function onEscClick(evt) {
//   if (evt.code === 'Escape') {
//     closeEnterModal();
//     window.removeEventListener('keydown', onEscClick);
//   }
// }

// function closeEnterModal(evt) {
//   if (evt.target === refs.registrForm) {
//     refs.modalWindow.classList.remove('visible');
//     refs.registrForm.classList.remove('hidden');
//     refs.loginForm.classList.remove('visible');
//     onBodyScroll();
//   }

//   if (evt.target === refs.loginForm) {
//     refs.loginForm.classList.remove('active');
//     onBodyScroll();
//   }
// }

// function onBodyScroll() {
//   refs.bodyAsFone.classList.remove('no-scroll');
// }

// const refs = {
//   registrBtn: document.querySelector('.registr-btn'),
//   modalWindow: document.querySelector('.modal-window'),
//   exitBtn: document.querySelector('.exitBtnForm'),
//   bodyAsFone: document.querySelector('body'),
//   loginBtn: document.querySelector('.login-btn'),
//   enterBtn: document.querySelector('.enter-btn'),
// };
