import textBalancer from 'text-balancer';
import Swiper from "swiper";
import "swiper/css/swiper.css";

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');

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

var nineResponses = document.getElementsByClassName("g-pstyle2-1");
[].slice.call( nineResponses ).forEach(function ( div ) {
  div.innerHTML = "Here are nine students’ responses."
});

document.getElementById("g-ai0-6").innerHTML = "<p class=\"g-pstyle6\">Illustrated by<span class=\"g-cstyle0\"> Liz Nichols</span></p><p class=\"g-pstyle6\"><span class=\"g-cstyle1\">Produced by</span> Hong Sen Du and Raeedah Wahid</p><p class=\"g-pstyle6\"><span class=\"g-cstyle1\">Edited by</span> Hsinyen Huang and Tamarah Wallace</p>"
document.getElementById("g-ai1-6").innerHTML = "<p class=\"g-pstyle6\">Illustrated by<span class=\"g-cstyle0\"> Liz Nichols</span></p><p class=\"g-pstyle6\"><span class=\"g-cstyle1\">Produced by</span> Hong Sen Du and Raeedah Wahid</p><p class=\"g-pstyle6\"><span class=\"g-cstyle1\">Edited by</span> Hsinyen Huang and Tamarah Wallace</p>"
document.getElementById("g-ai2-6-1").innerHTML = "<p class=\"g-pstyle6\">Illustrated by<span class=\"g-cstyle0\"> Liz Nichols</span></p><p class=\"g-pstyle6\"><span class=\"g-cstyle1\">Produced by</span> Hong Sen Du and Raeedah Wahid</p><p class=\"g-pstyle6\"><span class=\"g-cstyle1\">Edited by</span> Hsinyen Huang and Tamarah Wallace</p>"

document.querySelectorAll("#g-ai0-5")[3].innerHTML = "<p>&mdash;Adele Chi, BC &rsquo;22</p>"
document.querySelectorAll("#g-ai1-5")[3].innerHTML = "<p>&mdash;Adele Chi, BC &rsquo;22</p>"
document.querySelectorAll("#g-ai2-5-4")[0].innerHTML = "<p>&mdash;Adele Chi, BC &rsquo;22</p>"

document.querySelectorAll("#g-ai0-4")[6].innerHTML = "<p>&mdash;Mary Zaradich, SEAS &rsquo;22</p>"
document.querySelectorAll("#g-ai2-5")[3].innerHTML = "<p class=\"g-pstyle1\">&mdash;Mary Zaradich, </p><p class=\"g-pstyle1\">SEAS &rsquo;22</p>"
document.querySelectorAll("#g-ai2-4-8")[0].innerHTML = "<p class=\"g-pstyle1\">&mdash;Mary Zaradich, </p><p class=\"g-pstyle1\">SEAS &rsquo;22</p>"

document.querySelectorAll("#g-ai0-5")[5].innerHTML = "<p class=\"g-pstyle1\">&mdash;Kristoff Smith, CC &rsquo;22</p>"
document.querySelectorAll("#g-ai1-5")[5].innerHTML = "<p class=\"g-pstyle1\">&mdash;Kristoff Smith, CC &rsquo;22</p>"
document.querySelectorAll("#g-ai2-5")[4].innerHTML = "<p>&mdash;Kristoff Smith, CC &rsquo;22</p>"

document.getElementById("g-ai2-6-1").style.right = "5%";
document.getElementById("g-ai2-6-1").style.width = "100%";
document.getElementById("g-ai0-6").style.width = "100%";
document.getElementById("g-ai0-6").style.top = "91%";

if (window.matchMedia("(max-width: 800px)").matches && window.matchMedia("(min-width: 600px)").matches && window.matchMedia("(min-height: 800px)").matches) { 
  document.getElementById("g-ai2-6-1").style.top = "120%";
} 