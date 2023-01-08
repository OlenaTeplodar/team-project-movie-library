const refs = {
  body: document.querySelector('body'),
  toggle: document.querySelector('#theme-switch-toggle'),
};

checkTheme();

refs.toggle.addEventListener('change', event => {
  if (refs.body.classList.contains('dark')) {
    refs.body.classList.remove('dark');
    localStorage.removeItem('darkTheme');
  } else {
    refs.body.classList.add('dark');
    localStorage.setItem('darkTheme', 'true');
  }
});

let theme = localStorage.getItem('darkTheme');
function checkTheme(theme) {
  if (localStorage.getItem('darkTheme')) {
    refs.body.classList.add('dark');
    refs.toggle.checked = true;
  }
  return;
}

// refs.toggle.addEventListener('change', event => {
//   if (refs.body.classList.contains('dark')) {
//     refs.body.classList.remove('dark');
//     localStorage.removeItem('darkTheme');
//   } else {
//     refs.body.classList.add('dark');
//     localStorage.setItem('darkTheme', 'true');
//   }
// });

// let theme = localStorage.getItem('darkTheme');
// function checkTheme(theme) {
//   if (localStorage.getItem('darkTheme')) {
//     refs.body.classList.add('dark');
//     refs.toggle.checked = true;
//   }
//   return;
// }
// checkTheme();

// document.addEventListener('DOMContentLoaded', () => {
//   init();
// });
// function init() {
//   if (localStorage.getItem('theme')) {
//     document.documentElement.setAttribute('theme', 'dark');
//   } else {
//     document.documentElement.removeAttribute('theme');
//   }
// }
// const toggleBtn = document.querySelector('#toggle-theme');
// toggleBtn.addEventListener('click', function () {
//   if (document.documentElement.hasAttribute('theme')) {
//     document.documentElement.removeAttribute('theme');
//     localStorage.removeItem('theme');
//   } else {
//     document.documentElement.setAttribute('theme', 'dark');
//     localStorage.setItem('theme', 1);
//   }
// });
