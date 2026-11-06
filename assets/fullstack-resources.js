/* Static links are authoritative; JavaScript only switches theme and draws connectors. */
(() => {
  'use strict';
  document.body.classList.add('fs-ready');
  const theme = document.getElementById('fs-theme');
  function label() {
    theme.textContent = document.documentElement.dataset.theme === 'light' ? 'Chế độ tối' : 'Chế độ sáng';
  }
  theme.addEventListener('click', () => {
    const value = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = value;
    try { localStorage.setItem('synaptrail-theme', value); } catch { /* Theme still works without storage. */ }
    label();
  });
  label();
  const map = document.getElementById('rm-map');
  if (!map) return;
  const svg = document.getElementById('rm-connections');
  let frame;
  function draw() {
    svg.replaceChildren();
    if (matchMedia('(max-width: 900px)').matches) return;
    const bounds = map.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
    const rect = element => {
      const r = element.getBoundingClientRect();
      return {x: r.left - bounds.left, y: r.top - bounds.top, w: r.width, h: r.height};
    };
    const line = (a, b, cls) => {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', `M ${a.x} ${a.y} L ${b.x} ${b.y}`);
      p.setAttribute('class', cls); svg.append(p);
    };
    const parents = [...map.querySelectorAll('.rm-node[data-type="bat-buoc"]')];
    parents.forEach((parent, index) => {
      const a = rect(parent);
      map.querySelectorAll(`[data-parent="${parent.id}"]`).forEach(child => {
        const b = rect(child), left = b.x < a.x;
        line({x: left ? a.x : a.x + a.w, y: a.y + a.h / 2},
          {x: left ? b.x + b.w : b.x, y: b.y + b.h / 2}, 'rm-branch-line');
      });
      if (parents[index + 1]) {
        const b = rect(parents[index + 1]);
        line({x: a.x + a.w / 2, y: a.y + a.h}, {x: b.x + b.w / 2, y: b.y}, 'rm-spine-line');
      }
    });
  }
  function schedule() { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw); }
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;
  observer?.observe(map);
  window.addEventListener('resize', schedule);
  window.addEventListener('pageshow', schedule);
  document.fonts?.ready.then(schedule);
  schedule();
})();
