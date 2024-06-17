//main.js


//navbar.js
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
  if (scrollTop > lastScrollTop && scrollTop > 0) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  lastScrollTop = scrollTop;
});




//load.js
const pageWrapper = document.querySelector('.page-wrapper');

document.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') {
		e.preventDefault();
		const nextPage = e.target.getAttribute('href');
		pageWrapper.classList.add('fade-out');
		setTimeout(() => {
			window.location.href = nextPage;
		}, 500); // adjust the timeout according to your transition duration
	}
});
