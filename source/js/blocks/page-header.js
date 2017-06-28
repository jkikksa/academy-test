'use strict';

var body = document.querySelector('.page');
var nav = body.querySelector('.page-header__inner');
var openBtn = body.querySelector('.page-header__open');
var closeBtn = nav.querySelector('.page-header__close');

var openNav = function () {
  nav.classList.add('page-header__inner--visible');
  body.classList.add('page--no-scroll');
};

var closeNav = function () {
  nav.classList.remove('page-header__inner--visible');
  body.classList.remove('page--no-scroll');
};

openBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  openNav();
});

closeBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeNav();
});
