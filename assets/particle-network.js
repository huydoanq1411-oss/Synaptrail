/* Homepage decoration: bounded work, no input interception, no storage. */
(() => {
  'use strict';
  const canvas = document.querySelector('[data-particle-network]');
  const button = document.querySelector('[data-particle-toggle]');
  if (!canvas || !button) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let enabled = true, frame = 0, previous = 0, width = 0, height = 0, color;
  let points = [], pointer = null;
  const listeners = new AbortController();
  button.hidden = false;
  function draw(delta = 0) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = ctx.strokeStyle = color;
    for (const p of points) {
      p.x = (p.x + p.vx * delta + width) % width;
      p.y = (p.y + p.vy * delta + height) % height;
    }
    const line = (a, b, opacity) => {
      ctx.globalAlpha = opacity;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    };
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      for (let j = i + 1; j < points.length; j++) {
        const distance = Math.hypot(p.x - points[j].x, p.y - points[j].y);
        if (distance < 150) line(p, points[j], (1 - distance / 150) * .14);
      }
      if (pointer && !reduced.matches) {
        const distance = Math.hypot(p.x - pointer.x, p.y - pointer.y);
        if (distance < 180) line(p, pointer, (1 - distance / 180) * .35);
      }
      ctx.globalAlpha = .35;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function tick(time) {
    frame = 0;
    if (!enabled || document.hidden || reduced.matches) { sync(); return; }
    // Cap catch-up after throttling and paint at most 30 times per second.
    if (time - previous >= 1000 / 30) {
      draw(previous ? Math.min((time - previous) / 1000, .08) : 0);
      previous = time;
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame); frame = 0; previous = 0;
    canvas.hidden = !enabled;
    canvas.dataset.motion = enabled && !reduced.matches && !document.hidden ? 'running' : 'stopped';
    if (!enabled || document.hidden) return;
    draw();
    if (!reduced.matches) frame = requestAnimationFrame(tick);
  }
  function resize() {
    width = innerWidth; height = innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({length: Math.min(64, Math.max(18, Math.floor(width * height / 20000)))}, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - .5) * 12, vy: (Math.random() - .5) * 12
    }));
    canvas.dataset.particles = String(points.length);
    color = getComputedStyle(canvas).color;
    sync();
  }
  button.addEventListener('click', () => {
    enabled = !enabled;
    button.setAttribute('aria-pressed', String(enabled));
    sync();
  }, {signal: listeners.signal});
  window.addEventListener('pointermove', e => {
    if (enabled && !document.hidden && !reduced.matches && fine.matches && e.pointerType !== 'touch') pointer = {x: e.clientX, y: e.clientY};
  }, {passive: true, signal: listeners.signal});
  document.addEventListener('pointerleave', () => { pointer = null; }, {signal: listeners.signal});
  window.addEventListener('blur', () => { pointer = null; }, {signal: listeners.signal});
  fine.addEventListener('change', () => { pointer = null; }, {signal: listeners.signal});
  window.addEventListener('resize', resize, {passive: true, signal: listeners.signal});
  document.addEventListener('visibilitychange', sync, {signal: listeners.signal});
  reduced.addEventListener('change', sync, {signal: listeners.signal});
  const observer = new MutationObserver(() => {color = getComputedStyle(canvas).color; sync();});
  observer.observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
  window.addEventListener('pagehide', e => {
    cancelAnimationFrame(frame);
    if (!e.persisted) { listeners.abort(); observer.disconnect(); }
  }, {signal: listeners.signal});
  window.addEventListener('pageshow', sync, {signal: listeners.signal});
  resize();
})();
