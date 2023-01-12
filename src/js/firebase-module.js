// import Notiflix from 'notiflix';

// import { initializeApp } from 'firebase/app';
// // import {
// //   getAuth,
// //   createUserWithEmailAndPassword,
// //   singInWithEmailAndPassword,
// //   signOut,
// //   onAuthStateChanged,
// // } from 'firebase/auth';

// import { getDatabase, ref, set, update } from 'firebase/database';


// import { refs } from './refs-firebase';

// //import closeModal from './'; ///   Закриття Модалки!!
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDY2DPVPIcpXqwPvgNGWDlFPf7tdgdnQBg',
//   authDomain: 'team-project-js-2.firebaseapp.com',
//   projectId: 'team-project-js-2',
//   storageBucket: 'team-project-js-2.appspot.com',
//   messagingSenderId: '85270049715',
//   appId: '1:85270049715:web:18b08d0b0f680fb47311c6',
//   databaseURL:
//     'https://team-project-js-2-default-rtdb.europe-west1.firebasedatabase.app/',
// };




// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getDatabase(app);

// const storageWatch = JSON.parse(localStorage.getItem('watchedMovies'));
// const storageQueue = JSON.parse(localStorage.getItem('queueMovies'));

// refs.openModalBtn.addEventListener('click', (e) => {
//   refs.modal.classList.toggle('visible');
//   console.log('open modal');
// })

// refs.loginBtn.addEventListener('click', noShowModal);

// function noShowModal() {
// refs.modal.classList.toggle('visible');
// };
  


// refs.registrBtn.addEventListener('click', evt => {
//   const emailRegistr = document.querySelector('.emailRegistr').value;
//   const passwordRegistr = document.querySelector('.passwordRegistr').value;
 
//   createUserWithEmailAndPassword(auth, emailRegistr, passwordRegistr)
//     .then(userCredential => {
//       const user = userCredential.user;
//       set(ref(db, 'users/' + user.uid), {
//         emailRegistr: emailRegistr,
//         passwordRegistr: passwordRegistr,
//       });
//       Notiflix.Notify.success('User created');
//       document.querySelector('.emailRegistr').value = '';
//       document.querySelector('.passwordRegistr').value = '';
//       refs.attrErrorRegistr.setAttribute('data-content-registr', 'Registered');
//     })
//     .catch(function (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       Notiflix.Notify.failure(errorMessage);
//       document.querySelector('.emailRegistr').value = '';
//       document.querySelector('.passwordRegistr').value = '';
//       refs.attrErrorRegistr.setAttribute(
//         'data-content-registr',
//         "Hi there, it's ERROR"
//       );
//     });
// });

// refs.loginBtn.addEventListener('click', evt => {
//   const emailLogin = document.querySelector('.emailLogin').value;
//   const passwordLogin = document.querySelector('.passwordLogin').value;

//   singInWithEmailAndPassword(auth, emailLogin, passwordLogin)
//     .then(userCredential => {
//       const dt = new Date();
//       const user = userCredential.user;
//       update(ref(db, 'users/' + user.uid), {
//         last_login: dt,
//       });
//       Notiflix.Notify.success('User loged in!');
//       refs.attrErrorLogin.setAttribute('data-content-login', 'User loged in!');
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       Notiflix.Notify.failure(errorMessage);
//       document.querySelector('.emailLogin').value = '';
//       document.querySelector('.passwordLogin').value = '';
//       refs.attrErrorLogin.setAttribute(
//         'data-content-login',
//         "Hi there, it's ERROR"
//       );
//     });
// });

// const event = new CustomEvent('localdatachanged');
// document.dispatchEvent(event);

// document.addEventListener('localdatachanged', () => {
//   //handler - слідкуємо за діями залогіненого користувача
// });

// onAuthStateChanged(auth, user => {
//   if (user) {
//     const uid = user.uid;
//     update(ref(db, 'users/' + uid), {
//       watch: storageWatch,
//       queue: storageQueue,
//     });
//     refs.enterBtn.classList.add('locked');
//     refs.modal.classList.remove('visible');
//   }
// });

//вихід з системи

// refs.exitBtn.addEventListener('click', () => {
//   const auth = getAuth();
//   signOut(auth)
//     .then(() => {
//       refs.enterBtn.classList.remove('locked');
//       refs.modal.classList.remove('visible');
//       refs.bodyAsFone.classList.remove('no-scroll');
//     })
//     .catch(error => {
//       Notiflix.Notify.failure('User is signed out!');
//     });
// });
