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



//null.js
