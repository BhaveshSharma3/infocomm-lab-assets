// script.js — minimal interactions

document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });
  }

  // Simple JS: collapse mobile nav on link click
  Array.from(document.querySelectorAll('.nav-links a')).forEach((a) => {
    a.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

// people.html — bio toggle behaviour
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const toggles = Array.from(document.querySelectorAll('.bio-toggle'));
    toggles.forEach((btn, idx) => {
      btn.addEventListener('click', function (e) {
        const personInfo = btn.closest('.person-info');
        if (!personInfo) return;
        const bio = personInfo.querySelector('.person-bio');
        if (!bio) return;

        const expanded = bio.classList.toggle('expanded');
        btn.textContent = expanded ? 'Show less' : 'Show more';
        btn.setAttribute('aria-expanded', String(expanded));
      });
    });
  });
})();

/* ===== Hero Image Slider ===== */

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000); // 4 seconds
