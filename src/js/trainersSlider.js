import Swiper from 'swiper';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';

const TrainersSlider = new Swiper('.trainers .swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

TrainersSlider.init();
