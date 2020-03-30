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

// Disable stylesheets on contributor page. Stylesheets are included in the
// server-side render and styles in files like news-ellipsis.scss
// still override the site.

if (window.location.pathname.indexOf('/contributors') === 0) {
  // Disable stylesheets
  document.querySelectorAll('.story-summary > .twolines > link').forEach(link => link.disabled = true);
  // Add styles to hide content preview
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css"
  styleSheet.innerText = '.story-summary > .twolines { display: none; }';
  document.head.appendChild(styleSheet);
}

// Slides logic

import $ from 'jquery';

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
  	navigation: {
  	  nextEl: '.swiper-button-next-block',
  	  prevEl: '.swiper-button-prev-block',
    },
    
    pagination: {
      el: '.swiper-pagination',
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