/* Scroll reveal — Intersection Observer */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('[data-reveal]').forEach((el) =>
  revealObserver.observe(el)
);

/* Parallax suave en el hero */
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (y < hero.offsetHeight * 1.5) {
        hero.style.backgroundPositionY = `calc(top + ${y * 0.35}px)`;
      }
    },
    { passive: true }
  );
}
