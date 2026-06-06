/* ═══════════════════════════════════════════════
   JUNGLE LODGE RÍO DULCE — main.js
═══════════════════════════════════════════════ */

/* ─── Sticky nav on scroll ─── */
const nav = document.getElementById('nav');

const handleNavScroll = () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ─── Hamburger / Mobile overlay ─── */
const hamburger    = document.getElementById('hamburger');
const navOverlay   = document.getElementById('navOverlay');
const navClose     = document.getElementById('navClose');
const closeTargets = document.querySelectorAll('[data-close]');

const openMenu = () => {
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
};

hamburger.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
closeTargets.forEach(el => el.addEventListener('click', closeMenu));

/* Close on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ─── Scroll-in animations (Intersection Observer) ─── */
const fadeEls = document.querySelectorAll('.fade-in-up');

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      /* Stagger siblings inside the same parent */
      const siblings = entry.target.parentElement.querySelectorAll('.fade-in-up');
      siblings.forEach((sibling, idx) => {
        if (sibling === entry.target) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 80);
        }
      });
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeEls.forEach(el => observer.observe(el));

/* Trigger hero elements immediately (already in view) */
document.querySelectorAll('.hero .fade-in-up').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 200 + i * 150);
});

/* ─── Smooth scroll for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
