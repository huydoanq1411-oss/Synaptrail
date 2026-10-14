/* Synaptrail 3D foundation — phase 1: CSS tilt preview, no dependencies. */
(() => {
  'use strict';
  const key = 'synaptrail-fx3d';
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const weak = (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4)
    || (navigator.deviceMemory > 0 && navigator.deviceMemory <= 4);
  let choice = null;
  const read = () => {
    try {
      const value = localStorage.getItem(key);
      choice = value === 'on' ? true : value === 'off' ? false : null;
    } catch { choice = null; }
  };
  const update = () => {
    const enabled = choice ?? (!weak && !motion.matches);
    document.documentElement.dataset.fx3d = enabled ? 'on' : 'off';
    document.documentElement.dataset.fx3dMotion = enabled && !motion.matches
      && finePointer.matches && !document.hidden ? 'on' : 'off';
    document.querySelectorAll('[data-fx3d-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(enabled));
      button.title = motion.matches ? 'Hiệu ứng 3D: chuyển động tắt theo cài đặt hệ thống'
        : `Hiệu ứng 3D: ${enabled ? 'bật' : 'tắt'}`;
    });
  };
  const toggle = event => {
    if (!event.target.closest('[data-fx3d-toggle]')) return;
    choice = document.documentElement.dataset.fx3d !== 'on';
    try { localStorage.setItem(key, choice ? 'on' : 'off'); } catch { /* Session choice still works. */ }
    update();
  };
  const sync = event => { if (event.key === key || event.key === null) { read(); update(); } };
  const dispose = event => {
    if (event.persisted) return; // Keep listeners for back/forward cache restoration.
    document.removeEventListener('click', toggle);
    document.removeEventListener('visibilitychange', update);
    window.removeEventListener('storage', sync);
    window.removeEventListener('pageshow', update);
    window.removeEventListener('pagehide', dispose);
    motion.removeEventListener('change', update);
    finePointer.removeEventListener('change', update);
  };
  read();
  update();
  document.addEventListener('click', toggle);
  document.addEventListener('visibilitychange', update);
  window.addEventListener('storage', sync);
  window.addEventListener('pageshow', update);
  window.addEventListener('pagehide', dispose);
  motion.addEventListener('change', update);
  finePointer.addEventListener('change', update);
})();
