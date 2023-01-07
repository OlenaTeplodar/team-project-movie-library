import FetchApiMovies from './api';

import { renderMoviesCard } from './renderCards';
import { genres } from './Templates/genres';


import { clearMoviesContainer } from './Templates/cards';
//import { pagePagination } from './pagination';

const fetchApiHomeContent = new FetchApiMovies();
showPopularMovies()

let pagination = document.querySelector('#pagination')
  
let notesOnePage = 10




async function showPopularMovies() {
  try {
    const data = await fetchApiHomeContent.fetchPopularMovies();
    const cards = data.results;
    let countOfItems = Math.ceil(cards.length / notesOnePage)
  
    let items = []
    
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li')

        if (i == 1) {
          let li_0 = document.createElement('li')
          li_0.innerHTML = '<li>&#8592;</li>'
          pagination.appendChild(li_0)
        }

        if (countOfItems <= 5) {
          li.innerHTML = i
          pagination.appendChild(li)
          items.push(li)
        }

        if (countOfItems > 5) {
          li.innerHTML = i
          
          pagination.appendChild(li)
          
          items.push(li)
          
          if (i == 1) {
            let li_2 = document.createElement('li')
            li_2.innerHTML = "..."
            pagination.appendChild(li_2)
          }
          if ((countOfItems - 1) == i) {
            let li_1 = document.createElement('li')
            li_1.innerHTML = "..."
            pagination.appendChild(li_1)
          }
        }

        if (i == countOfItems) {
          let li_max = document.createElement('li')
          li_max.innerHTML = '<li>&#8594;</li>'
          pagination.appendChild(li_max)
        }
    }

    let showPage = (function() {
      let active;
    
      return function(item) {
          if (active) {
              active.classList.remove('active')
          }
          active = item
    
          item.classList.add("active")
    
          let pageNum = +item.innerHTML
          let start = (pageNum - 1) * notesOnePage
          let end = start + notesOnePage
          renderMoviesCard(cards.slice(start, end))
    
      }
      }());
    
    showPage(items[0])
    
    for (let item of items) {
      item.addEventListener('click', function () {
          clearMoviesContainer()
          showPage(this)
      });
    }

  }
  catch (e) {
    console.log(e);
  } 
}