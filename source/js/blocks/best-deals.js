'use strict';

var initTabs = require('../common/init-tabs');

var tabs = document.querySelector('.best-deals__inner');

if (tabs !== null) {
  var links = tabs.querySelectorAll('.best-deals__link');
  var contentItems = tabs.querySelectorAll('.best-deals__descriptions-item');
  var LINK_ACTIVE_CLASS = 'best-deals__link--active';
  var CONTENT_ITEM_ACTIVE_CLASS = 'best-deals__descriptions-item--active';

  initTabs(tabs, links, contentItems, LINK_ACTIVE_CLASS, CONTENT_ITEM_ACTIVE_CLASS);
}
