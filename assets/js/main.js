//main.js


//loadpagesmoothly.js
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


//install-sw.js
const registerServiceWorker = async () => {
  console.log("noError1")
  if ("serviceWorker" in navigator) {
    console.log("noError2")
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      console.log("noError3")
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};


// Check if a service worker is installed
navigator.serviceWorker.getRegistrations().then(registrations => {
  if (registrations.length > 0) {
    // Show the modal notification
    showOfflineNotification();
     console.log("noError4")
  }
});

registerServiceWorker();



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
window.addEventListener('load', () => {
  document.documentElement.classList.add('loaded');
});


//audio.js
const soundButton = document.getElementById('soundButton');
const soundtrack = document.getElementById('soundtrack');

soundButton.addEventListener('click', () => {
    if (soundtrack.paused) {
        soundtrack.play();
        soundButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        soundtrack.pause();
        //soundtrack.currentTime = 0;
        soundButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

