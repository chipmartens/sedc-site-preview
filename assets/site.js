// Mobile menu, scroll reveal, and the wheat highlighter wipe. No dependencies.
//
// Deliberately NO number count-up. Mid-animation a counter renders a number that
// is not the real one (29% reads as 26% on the way up), and every figure on this
// site is a sourced claim. The reference site does not count either.
(function () {
  'use strict';

  var burger = document.querySelector('.burger');
  var menu = document.getElementById('m');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.textContent = open ? 'Close' : 'Menu';
    });
  }


  // Mega menu: hover and focus are CSS. This adds click/keyboard toggling and
  // Escape to close, so the panels work on touch and for keyboard users.
  var megas = [].slice.call(document.querySelectorAll('.mega'));
  function closeAll(except) {
    megas.forEach(function (m) {
      if (m !== except) m.querySelector('.mega-btn').setAttribute('aria-expanded', 'false');
    });
  }
  megas.forEach(function (m) {
    var btn = m.querySelector('.mega-btn');
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      var open = btn.getAttribute('aria-expanded') === 'true';
      closeAll(m);
      btn.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') closeAll(null);
  });
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.mega')) closeAll(null);
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rises = document.querySelectorAll('[data-rise]');

  if (reduce || !('IntersectionObserver' in window)) {
    rises.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  rises.forEach(function (el) { io.observe(el); });

  // Safety net: anything still hidden after 2.5s reveals itself. Covers a tab
  // that loaded in the background, where the observer may never fire.
  setTimeout(function () {
    document.querySelectorAll('[data-rise]:not(.in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 1.5) el.classList.add('in');
    });
  }, 2500);
})();
