// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

// // const container = document.getElementById('pagination');
// // const pagination = new Pagination(container);
// // const container = document.getElementById('pagination');
// refs = {
//   pagination: document.querySelector('.tui-pagination')
// }
// const PER_PAGE = 20;

// const options = {
//   totalItems: 2000,
//   itemsPerPage: PER_PAGE,
//   visiblePages: 10,
//   page: 1,
//   centerAlign: false,
  
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//       '</a>'
//   }
// };

// const pagination = new Pagination(refs.pagination, options);

  var pagination = new tui.Pagination('pagination', {
        totalItems: 500
    });

    pagination.on('beforeMove', function(eventData) {
        return confirm('Go to page ' + eventData.page + '?');
    });

    pagination.on('afterMove', function(eventData) {
        alert('The current page is ' + eventData.page);
    });

    // после перемещения
    paganation.on('afterMove', (event) => {
     const currentPage = event.page;
     console.log(currentPage);
    });
// перед перемещением
paganation.on('beforeMove', (event) => {
    const currentPage = event.page;

    if (currentPage === 10) {
        return false;
        // return true;
    }
});




import Pagination from 'tui-pagination';
// CommonJS
const Pagination = require('tui-pagination');

// Browser
const Pagination = tui.Pagination;

const container = document.getElementById('pagination');
const options = { // below default value of options
     totalItems: 10,
     itemsPerPage: 10,
     visiblePages: 10,
     page: 1,
     centerAlign: false,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};
const pagination = new Pagination(container, options);