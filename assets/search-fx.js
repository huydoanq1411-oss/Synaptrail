(() => {
  'use strict';
  const input = document.getElementById('searchInput');
  const box = input?.closest('.search-box');
  if (!box) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const indicator = document.createElement('span');
  indicator.className = 'typing-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < 3; i++) indicator.append(document.createElement('span'));
  box.append(indicator);
  let timer, animations = [], composing = false;
  const stop = () => {
    clearTimeout(timer);
    box.classList.remove('is-typing');
    animations.forEach(animation => animation.cancel());
    animations = [];
  };
  const feedback = () => {
    if (composing || document.hidden || !input.value) { stop(); return; }
    const starting = !box.classList.contains('is-typing');
    clearTimeout(timer);
    box.classList.add('is-typing');
    // One short glitch per typing burst, on the decorative icon only.
    if (starting && !reduced.matches) {
      animations.forEach(animation => animation.cancel());
      animations = [];
      const icon = box.querySelector('svg');
      if (icon) animations.push(icon.animate([
        {transform: 'translateX(0)', opacity: 1},
        {transform: 'translateX(-2px)', opacity: .55},
        {transform: 'translateX(2px)', opacity: 1},
        {transform: 'translateX(0)', opacity: 1}
      ], {duration: 180, easing: 'steps(1, end)'}));
      for (const [i, dot] of [...indicator.children].entries()) {
        animations.push(dot.animate([
          {transform: 'translateY(0)'}, {transform: 'translateY(-3px)'}, {transform: 'translateY(0)'}
        ], {duration: 240, delay: i * 40, easing: 'cubic-bezier(.23, 1, .32, 1)'}));
      }
    }
    timer = setTimeout(stop, 650);
  };
  input.addEventListener('input', feedback);
  input.addEventListener('compositionstart', () => { composing = true; stop(); });
  input.addEventListener('compositionend', () => { composing = false; feedback(); });
  input.addEventListener('blur', stop);
  reduced.addEventListener('change', stop);
  document.addEventListener('visibilitychange', stop);
  window.addEventListener('pagehide', stop);
})();
