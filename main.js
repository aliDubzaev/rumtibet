document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox]", {
      Toolbar: {
          display: ["close", "prev", "next"]
      }
  });
});

Fancybox.bind("[data-fancybox]", {});

document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('open');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});