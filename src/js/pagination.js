import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// const pagination = new Pagination('pagination');

// const container = document.getElementById('pagination');
// const pagination = new Pagination(container);
const PER_PAGE = 20;

const options = {
  totalItems: 2000,
  itemsPerPage: PER_PAGE,
  visiblePages: 10,
  page: 1,
  centerAlign: false,
  
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

const pagination = new Pagination(refs.pagination, options);

const page = pagination.getCurrentPage();


pagination.on('beforeMove', evt => {
  const { page } = evt;
  const result = ajax.call({page});

  if(result) {
    pagination.movePageTo(page);
  } else {
    return false;
  }
});

pagination.on('afterMove', ({ page }) => console.log(page));

