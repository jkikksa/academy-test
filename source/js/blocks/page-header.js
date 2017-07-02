'use strict';

var body = document.querySelector('.page');
var header = body.querySelector('.page-header');
var nav = header.querySelector('.page-header__inner');
var openBtn = header.querySelector('.page-header__open');
var closeBtn = nav.querySelector('.page-header__close');

header.classList.remove('page-header--no-js');

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
