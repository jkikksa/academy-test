'use strict';

var isEscPressed = require('../utils/is-esc-pressed');

module.exports = function (modalElement, openBtn, closeBtn) {
  var BODY_CLASSNAME = '.page';
  var BODY_NOSCROLL_CLASSNAME = 'page--no-scroll-modal';

  var body = document.querySelector(BODY_CLASSNAME);

  var modalVisibleClass = modalElement.className + '--visible';

  var onEscPress = function (evt) {
    if (isEscPressed(evt)) {
      closeModal();
    }
  };

  var openModal = function () {
    body.classList.add(BODY_NOSCROLL_CLASSNAME);
    modalElement.classList.add(modalVisibleClass);

    document.addEventListener('keydown', onEscPress);
  };

  var closeModal = function () {
    modalElement.classList.remove(modalVisibleClass);
    body.classList.remove(BODY_NOSCROLL_CLASSNAME);

    document.removeEventListener('keydown', onEscPress);
  };

  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });

  openBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
  });
};
