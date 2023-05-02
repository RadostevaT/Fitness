import Swiper from './../vendor/swiper';

const initSwiperCoaches = () => {
  const swiper = new Swiper('[data-swiper-coaches]', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    spaceBetween: 40,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        initialSlide: 2,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 0,
      },

      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },
  });
};

export {initSwiperCoaches};
