(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('capture') === '1') {
    document.body.classList.add('capture');
  }

  var screens = Array.prototype.slice.call(document.querySelectorAll('.screen'));
  var protoLinks = Array.prototype.slice.call(document.querySelectorAll('.proto-nav a'));

  function currentScreen() {
    var id = (window.location.hash || '#home').replace('#', '');
    return screens.some(function (screen) { return screen.id === id; }) ? id : 'home';
  }

  function render() {
    var id = currentScreen();
    screens.forEach(function (screen) {
      screen.classList.toggle('active', screen.id === id);
    });
    protoLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-screen') === id);
    });
    document.title = 'Kintsugi Studio — ' + id;
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', render);
  render();

  // Service category filters (Hick's law: one category at a time).
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (item) { item.classList.remove('active'); });
      chip.classList.add('active');
      var filter = chip.getAttribute('data-filter');
      document.querySelectorAll('#services-grid .service-card').forEach(function (card) {
        var visible = filter === 'all' || card.getAttribute('data-cat') === filter;
        card.style.display = visible ? '' : 'none';
      });
    });
  });

  // Time slot selection.
  document.querySelectorAll('.slot').forEach(function (slot) {
    if (slot.disabled) return;
    slot.addEventListener('click', function () {
      document.querySelectorAll('.slot').forEach(function (item) { item.classList.remove('selected'); });
      slot.classList.add('selected');
    });
  });

  // Calendar day selection.
  document.querySelectorAll('.day.available').forEach(function (day) {
    day.addEventListener('click', function () {
      document.querySelectorAll('.day').forEach(function (item) { item.classList.remove('selected'); });
      day.classList.add('selected');
    });
  });
})();
