//main.js


//circle-bg.js

const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
  const x = Math.random() * 100 + '%';
  const y = Math.random() * 100 + '%';
  circle.style.top = y;
  circle.style.left = x;
});



//---



//searchbar.js

const searchInput = document.getElementById('search-input');
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
}
