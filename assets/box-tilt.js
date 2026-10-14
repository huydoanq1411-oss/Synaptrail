/* CSS-only rendering; pointer coordinates are batched into one animation frame. */
(() => {
  'use strict';
  const cards = [...document.querySelectorAll('#allCourses .resource-card')];
  if (!cards.length) return;
  const abort = new AbortController();
  let active = null, frame = 0, point = null, bounds = null;
  const allowed = event => event.pointerType === 'mouse'
    && document.documentElement.dataset.fx3dMotion === 'on';
  const reset = () => {
    cancelAnimationFrame(frame); frame = 0;
    if (active) {
      active.classList.remove('fx3d-tracking');
      for (const name of ['--rx', '--ry', '--mx', '--my']) active.style.removeProperty(name);
    }
    active = point = bounds = null;
  };
  const paint = () => {
    frame = 0;
    if (!active || !point || document.hidden) { reset(); return; }
    const x = Math.max(0, Math.min(1, (point.x - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (point.y - bounds.top) / bounds.height));
    active.style.setProperty('--rx', `${((0.5 - y) * 16).toFixed(2)}deg`);
    active.style.setProperty('--ry', `${((x - 0.5) * 16).toFixed(2)}deg`);
    active.style.setProperty('--mx', `${(x * 100).toFixed(2)}%`);
    active.style.setProperty('--my', `${(y * 100).toFixed(2)}%`);
    active.classList.add('fx3d-tracking');
  };
  const move = event => {
    if (!allowed(event)) { reset(); return; }
    if (active !== event.currentTarget) {
      reset(); active = event.currentTarget;
      // Measure before applying transforms; never read the tilted bounds per frame.
      bounds = active.getBoundingClientRect();
    }
    point = {x: event.clientX, y: event.clientY};
    if (!frame) frame = requestAnimationFrame(paint);
  };
  for (const card of cards) {
    card.addEventListener('pointermove', move, {signal: abort.signal, passive: true});
    card.addEventListener('pointerleave', reset, {signal: abort.signal});
    card.addEventListener('pointercancel', reset, {signal: abort.signal});
  }
  const observer = new MutationObserver(() => {
    if (document.documentElement.dataset.fx3dMotion !== 'on') reset();
  });
  observer.observe(document.documentElement, {attributes: true, attributeFilter: ['data-fx3d-motion']});
  window.addEventListener('scroll', reset, {signal: abort.signal, passive: true, capture: true});
  window.addEventListener('resize', reset, {signal: abort.signal, passive: true});
  document.addEventListener('visibilitychange', reset, {signal: abort.signal});
  window.addEventListener('pagehide', event => {
    reset();
    if (!event.persisted) { abort.abort(); observer.disconnect(); }
  }, {signal: abort.signal});
})();
