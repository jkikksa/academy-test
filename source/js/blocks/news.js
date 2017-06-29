'use strict';

var $ = require('jquery');
var slick = require('slick-carousel'); // eslint-disable-line
var load = require('../utils/load');

var newsList = document.querySelector('.news__list');

if (newsList !== null) {
  $(newsList).slick({
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

  $(window).resize(function () {
    $(newsList).slick('slickSetOption', 'speed', 300, true);
  });

  var allNewsBtn = document.querySelector('.news__all-news');
  var newsTemplate = document.querySelector('.news-template').content;

  var generateNews = function (data) {
    var newsElement = newsTemplate.cloneNode(true);
    newsElement.querySelector('.news-item__title').innerHTML = data.title;
    newsElement.querySelector('.news-item__content').innerHTML = data.content;
    newsElement.querySelector('.news-item__date').innerHTML = data.date;
    return newsElement;
  };

  var onLoad = function (news) {
    news.forEach(function (it) {
      newsList.appendChild(generateNews(it));
    });
  };

  allNewsBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    load('https://jkikksa.github.io/data.json', onLoad);
  });
}
