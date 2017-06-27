'use strict';

var $ = require('jquery');
var slick = require('slick-carousel');

var slider = document.querySelector('.news__list');

if (slider !== null) {
  $(slider).slick({
    accessibility: false,
    arrows: false,
    dots: true,
    dotsClass: 'news__dots',
    appendDots: $('.news'),
    mobileFirst: true,
    responsive: [{
      breakpoint: 1296,
      settings: 'unslick'
    }]
  });
}

$(window).resize(function () {
  $(slider).slick('slickSetOption', 'speed', 300, true);
});
