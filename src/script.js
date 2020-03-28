import enterView from 'enter-view';
import textBalancer from 'text-balancer';
import Swiper from 'swiper';

import { USE_COVER_HED } from '../config.json';

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');
enterView({
  selector: USE_COVER_HED ? '.headline' : '.step-deck',
  offset: USE_COVER_HED ? 1 : 0.957,
  enter: () => {
    navbar.classList.remove('only-logo');
  },
  exit: () => {    
    navbar.classList.remove('show-nav-links');
    navbar.classList.add('only-logo');
  },
});

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// Text balance headline and deck

textBalancer.balanceText('.headline, .deck, .image-overlay .image-caption-text');

var $ = require("../node_modules/jquery");

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
  	navigation: {
  	  nextEl: '.swiper-button-next-block',
  	  prevEl: '.swiper-button-prev-block',
  	},

    keyboard: {
        enabled: true
    },

    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // freeMode: true,
    freeModeMomentum: false,
    // freeModeSticky: true,
    // cssMode: true,
    slidesPerView: 'auto'
  })
});