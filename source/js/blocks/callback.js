'use strict';

var initPopup = require('../common/init-popup');

var modal = document.querySelector('.callback');
var openBtn = document.querySelector('.user-block__link--acount');

if (modal !== null && openBtn !== null) {
  var closeBtn = modal.querySelector('.callback__close');
  initPopup(modal, openBtn, closeBtn);
}
