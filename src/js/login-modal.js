// import { refsFirebase } from './Properties/refs-firebase';

// refsFirebase.enterBtn.addEventListener('click', onOpenLoginModal);

// refsFirebase.modalWindow.addEventListener('click', closeEnterModal);

// export function onOpenLoginModal() {
//   refsFirebase.modalWindow.classList.add('visible');
//   refsFirebase.bodyAsFone.classList.add('no-scroll');
//   window.addEventListener('keydown', onEscClick);
// }

// // function onEscClick(evt) {
// //   if (evt.code === 'Escape') {
// //     closeEnterModal();
// //     window.removeEventListener('keydown', onEscClick);
// //   }
// // }

// function closeEnterModal(evt) {
//   if (evt.target === refs.registrForm) {
//     refsFirebase.modalWindow.classList.remove('visible');
//     refsFirebase.registrForm.classList.remove('hidden');
//     refsFirebase.loginForm.classList.remove('visible');
//     onBodyScroll();
//   }

//   if (evt.target === refs.loginForm) {
//     refsFirebase.loginForm.classList.remove('active');
//     onBodyScroll();
//   }
// }

// function onBodyScroll() {
//   refsFirebase.bodyAsFone.classList.remove('no-scroll');
// }
