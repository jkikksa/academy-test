'use strict';

var mainNav = document.querySelector('.main-nav');
var TOGGLE_CLASS = 'main-nav__link--collapsed';

if (mainNav !== null) {
  var links = mainNav.querySelectorAll('.main-nav__link');

  Array.prototype.forEach.call(links, function (it) {
    it.addEventListener('click', function (evt) {
      evt.preventDefault();
      it.classList.toggle(TOGGLE_CLASS);
    });
  });
}
