//Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Scroll auto horizontal untuk card card
document.addEventListener("DOMContentLoaded", function () {
  function initAutoScroll(selector, mobileOnly = false) {
    document.querySelectorAll(selector).forEach((container) => {
      let interval;

      function start() {
        let direction = 1;
        interval = setInterval(() => {
          container.scrollLeft += direction;

          if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth
          ) {
            direction = -1;
          }

          if (container.scrollLeft <= 0) {
            direction = 1;
          }
        }, 20);
      }

      function handle() {
        if (mobileOnly) {
          if (window.innerWidth < 1024) {
            if (!interval) start();
          } else {
            clearInterval(interval);
            interval = null;
          }
        } else {
          if (!interval) start();
        }
      }

      handle();
      window.addEventListener("resize", handle);
    });
  }

  initAutoScroll(".auto-scroll"); // semua device
  initAutoScroll(".auto-scroll-mobile", true); // mobile & tablet saja
});
