import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';

const ReviewsSlider = new Swiper('.reviews .swiper', {
  slidesPerView: 1,
  //   breakpoints: {
  //     480: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //     },
  //     1024: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //   },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

ReviewsSlider.init();
