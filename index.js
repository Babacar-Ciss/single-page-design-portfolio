
const swiper  = new Swiper(".swiper", {
  slidesPerView: "auto",
  loop : "true",
  centeredSlides: true,
  direction: 'horizontal',
  spaceBetween: 30,
  navigation: {
    nextEl: '.my-work__navigation--arrow-right',
    prevEl: '.my-work__navigation--arrow-left',
  },
  breakpoints: {
    375: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    768: {
       slidesPerView: "auto",
       navigation: {
        nextEl: '.my-work__navigation--arrow-right',
        prevEl: '.my-work__navigation--arrow-left',
      },
    },
    1440: {
      slidesPerView: "auto",
      spaceBetween: 50,
    },
  },
});
;
