'use strict';

module.exports = function (tabs, links, panels, linkActiveClass, panelActiveClass) {
  var activeLink = tabs.querySelector('.' + linkActiveClass);
  var activePanel = tabs.querySelector('.' + panelActiveClass);

  var map = Array.prototype.reduce.call(panels, function (accum, it, index) {
    accum[it.getAttribute('id')] = index;
    return accum;
  }, {});

  var showTab = function (link, tab) {
    activeLink.classList.remove(linkActiveClass);
    activePanel.classList.remove(panelActiveClass);
    link.classList.add(linkActiveClass);
    tab.classList.add(panelActiveClass);
    activeLink = link;
    activePanel = tab;
  };

  Array.prototype.forEach.call(links, function (it) {
    it.addEventListener('click', function (evt) {
      evt.preventDefault();
      var targetTab = panels[map[it.getAttribute('href').slice(1)]];
      showTab(it, targetTab);
    });
  });
};
