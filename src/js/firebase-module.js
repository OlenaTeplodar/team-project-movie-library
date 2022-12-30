// Import the functions you need from the SDKs you need


import { initializeApp } from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDY2DPVPIcpXqwPvgNGWDlFPf7tdgdnQBg',
  authDomain: 'team-project-js-2.firebaseapp.com',
  projectId: 'team-project-js-2',
  storageBucket: 'team-project-js-2.appspot.com',
  messagingSenderId: '85270049715',
  appId: '1:85270049715:web:18b08d0b0f680fb47311c6',
  // databaseURL:
  //   'https://team-project-js-2-default-rtdb.europe-west1.firebasedatabase.app/',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
let database = firebase.database();
console.log(database);