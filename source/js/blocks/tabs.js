'use strict';

var initTabs = require('../common/init-tabs');

var tabs = document.querySelector('.tabs__inner');

if (tabs !== null) {
  var links = tabs.querySelectorAll('.tabs__link');
  var contentItems = tabs.querySelectorAll('.tabs__content');
  var LINK_ACTIVE_CLASS = 'tabs__link--active';
  var CONTENT_ITEM_ACTIVE_CLASS = 'tabs__content--active';

  initTabs(tabs, links, contentItems, LINK_ACTIVE_CLASS, CONTENT_ITEM_ACTIVE_CLASS);
}
