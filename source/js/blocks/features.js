'use strict';

var $ = require('jquery');
var slick = require('slick-carousel');

var slider = document.querySelector('.features__list');

if (slider !== null) {
  $(slider).slick({
    prevArrow: $('.features__arrow--prev'),
    nextArrow: $('.features__arrow--next'),
    dots: true,
    dotsClass: 'features__dots',
    appendDots: $('.features__inner')
  });
}
