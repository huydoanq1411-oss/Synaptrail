/* Progressive enhancement: content stays visible without JS or animation support. */
(() => {
  'use strict';
  const page = document.querySelector('.landing-page');
  if (!page || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...page.querySelectorAll('[data-scroll-reveal]')];
  const running = new Map();
  const finish = element => {
    running.get(element)?.cancel();
    running.delete(element);
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target;
      observer.unobserve(element);
      if (reduced.matches || element.matches(':hover, :focus-within')) continue;
      const style = getComputedStyle(page);
      const duration = parseFloat(style.getPropertyValue('--reveal-duration'));
      const step = parseFloat(style.getPropertyValue('--reveal-stagger'));
      const animation = element.animate([
        {opacity: 0, transform: `translateY(${style.getPropertyValue('--reveal-distance').trim()})`},
        {opacity: 1, transform: 'translateY(0)'}
      ], {
        duration, delay: Number(element.dataset.scrollReveal || 0) * step,
        easing: style.getPropertyValue('--fx-ease').trim(), fill: 'backwards'
      });
      running.set(element, animation);
      animation.onfinish = () => finish(element);
    }
  }, {threshold: 0.12});
  targets.forEach(element => {
    observer.observe(element);
    // Let hover/press/tilt and keyboard focus take over immediately.
    element.addEventListener('pointerenter', () => finish(element));
    element.addEventListener('focusin', () => finish(element));
    element.addEventListener('pointerdown', () => finish(element));
  });
  const settle = () => running.forEach((_, element) => finish(element));
  reduced.addEventListener('change', () => { if (reduced.matches) settle(); });
  window.addEventListener('pagehide', settle);
})();
