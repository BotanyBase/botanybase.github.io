//main.js


//
// Get the navbar and offset
const navbar = document.querySelector('.navbar');
const offset = navbar.offsetTop + navbar.offsetHeight;

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY >= offset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
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
