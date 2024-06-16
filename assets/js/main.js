//main.js


//navbar.js
const navbar = document.querySelector('.navbar');
const navbar = document.querySelector('.navbar');
const offset = navbar.offsetTop + navbar.offsetHeight;
let lastScrollTop = 0;

const mainContainer = document.querySelector('main');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop >= offset) {
    navbar.classList.add('sticky');
    mainContainer.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    navbar.classList.remove('sticky');
    mainContainer.style.paddingTop = 0;
  }
  if (scrollTop < lastScrollTop || scrollTop <= 0) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  lastScrollTop = scrollTop;
});



//---



//searchbar.js

/*const searchInput = document.getElementById('search-input');
const plantEntries = document.querySelectorAll('.plant-entry');
let filteredEntries = [];

searchInput.addEventListener('input', () => {
  const searchString = searchInput.value.toLowerCase();
  filteredEntries = []; // reset the filtered entries array
  plantEntries.forEach((entry) => {
    const entryText = entry.textContent.toLowerCase();
    if (entryText.includes(searchString)) {
      filteredEntries.push(entry); // add the entry to the filtered entries array
    }
  });
  paginateResults(filteredEntries); // paginate the filtered entries
});

function paginateResults(filteredEntries) {
  const paginator = new Paginator(filteredEntries, {
    perPage: 10,
    pages: null
  });
  const currentPage = paginator.currentPage;
  const entriesPerPage = paginator.perPage;
  const totalPages = paginator.totalPages;
  // update the pagination controls and display the current page entries
}*/
