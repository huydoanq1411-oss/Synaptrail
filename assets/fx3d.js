/* Synaptrail 3D foundation. Classic loader also works under file://. */
(() => {
  'use strict';
  const key = 'synaptrail-fx3d';
  const moduleURL = new URL('vendor/three/three.module.min.js', document.currentScript.src).href;
  const controllers = new Set();
  let library;
  let leaving = false;
  let suspended = false;
  function webglAvailable() {
    try {
      const context = document.createElement('canvas').getContext('webgl2')
        || document.createElement('canvas').getContext('webgl');
      if (!context) return false;
      context.getExtension('WEBGL_lose_context')?.loseContext();
      return true;
    } catch { return false; }
  }
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
    controllers.forEach(controller => controller.refresh());
  };
  // setup(THREE, renderer, {quality}) must return {scene, camera, animate?, dispose?}.
  // Custom textures, render targets, controls and listeners belong in setup.dispose().
  async function mount(element, setup) {
    if (!(element instanceof HTMLElement) || !element.hasAttribute('data-fx3d')) {
      throw new TypeError('mount requires a [data-fx3d] element');
    }
    const state = {status: 'tĩnh', reason: '', quality: weak ? 'low' : 'high'};
    const fallback = reason => {
      state.status = 'tĩnh'; state.reason = reason;
      element.dataset.fx3dReady = 'false';
      element.dataset.fx3dStatus = state.status;
      return state;
    };
    if (location.protocol === 'file:') return fallback('file-protocol');
    if (document.documentElement.dataset.fx3d !== 'on') return fallback('disabled');
    if (motion.matches && element.hasAttribute('data-fx3d-static-reduced')) return fallback('reduced-motion');
    if (!webglAvailable()) return fallback('no-webgl');
    let renderer, content, observer, resizeObserver, frame = 0;
    let visible = false, disposed = false, last = 0, start = 0, frames = 0, elapsed = 0;
    let slow = false;
    const canvas = document.createElement('canvas');
    if (element.dataset.canvasLabel) {
      canvas.setAttribute('role', 'img'); canvas.setAttribute('aria-label', element.dataset.canvasLabel);
    } else canvas.setAttribute('aria-hidden', 'true');
    let lastRender = 0;
    const stop = () => { cancelAnimationFrame(frame); frame = 0; last = start = frames = elapsed = 0; };
    const draw = () => renderer.render(content.scene, content.camera);
    const resize = () => {
      const {width, height} = element.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, state.quality === 'low' ? 1 : 2));
      renderer.setSize(width, height, false);
      content.resize?.(width, height);
      if (content.camera.isPerspectiveCamera) {
        content.camera.aspect = width / height;
        content.camera.updateProjectionMatrix();
      }
      if (visible && !document.hidden && !suspended && document.documentElement.dataset.fx3d === 'on') draw();
    };
    const tick = time => {
      frame = 0;
      if (disposed || !visible || document.hidden || suspended) return;
      if (!start) start = time;
      const delta = last ? time - last : 0;
      elapsed += delta; last = time; frames++;
      const renderInterval = state.quality === 'low' ? 1000 / 30 : 0;
      if (!lastRender || time - lastRender >= renderInterval - 1) {
        content.animate?.(Math.min((time - lastRender) / 1000, 0.1), time / 1000);
        draw(); lastRender = time;
      }
      if (time - start >= 2000) {
        const fps = elapsed ? (frames - 1) * 1000 / elapsed : 60;
        start = time; frames = 1; elapsed = 0;
        if (fps < 40) {
          if (state.quality === 'high') {
            state.quality = 'low'; content.setQuality?.('low'); resize();
          } else { slow = true; state.status = 'tĩnh'; element.dataset.fx3dStatus = state.status; element.dataset.fx3dReady = 'false'; return; }
        }
      }
      frame = requestAnimationFrame(tick);
    };
    const controller = {
      refresh() {
        stop();
        if (disposed) return;
        const enabled = document.documentElement.dataset.fx3d === 'on'
          && !(motion.matches && element.hasAttribute('data-fx3d-static-reduced')) && !slow;
        element.dataset.fx3dReady = String(enabled);
        state.status = enabled && !motion.matches && !slow ? '3d' : 'tĩnh';
        element.dataset.fx3dStatus = state.status;
        if (!enabled || !visible || document.hidden || suspended) return;
        draw();
        if (!motion.matches && !slow) frame = requestAnimationFrame(tick);
      },
      dispose() {
        if (disposed) return;
        disposed = true; stop(); observer?.disconnect(); resizeObserver?.disconnect();
        canvas.removeEventListener('webglcontextlost', lost);
        content?.dispose?.();
        const resources = new Set();
        content?.scene?.traverse(object => {
          if (object.geometry) resources.add(object.geometry);
          for (const material of [].concat(object.material || [])) {
            resources.add(material);
            Object.values(material).forEach(value => { if (value?.isTexture) resources.add(value); });
          }
        });
        resources.forEach(resource => resource.dispose());
        renderer?.dispose(); renderer?.forceContextLoss(); canvas.remove();
        controllers.delete(controller); fallback('disposed');
      }
    };
    const lost = event => { event.preventDefault(); controller.dispose(); fallback('context-lost'); };
    try {
      const THREE = await (library ??= import(moduleURL));
      if (leaving || document.documentElement.dataset.fx3d !== 'on') return fallback('disabled');
      renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: !weak, powerPreference: 'low-power'});
      content = await setup(THREE, renderer, {quality: state.quality});
      if (leaving) { controller.dispose(); return state; }
      element.append(canvas);
      canvas.addEventListener('webglcontextlost', lost);
      controllers.add(controller);
      resizeObserver = new ResizeObserver(resize); resizeObserver.observe(element);
      observer = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting; controller.refresh();
      });
      observer.observe(element); resize();
      return Object.assign(state, {dispose: () => controller.dispose()});
    } catch {
      library = undefined; controller.dispose(); return fallback('initialization-failed');
    }
  }
  window.SynaptrailFX3D = Object.freeze({mount, webglAvailable, maxPixelRatio: 2});
  const toggle = event => {
    if (!event.target.closest('[data-fx3d-toggle]')) return;
    choice = document.documentElement.dataset.fx3d !== 'on';
    try { localStorage.setItem(key, choice ? 'on' : 'off'); } catch { /* Session choice still works. */ }
    update();
  };
  const sync = event => { if (event.key === key || event.key === null) { read(); update(); } };
  const dispose = event => {
    suspended = true;
    if (event.persisted) { controllers.forEach(controller => controller.refresh()); return; }
    leaving = true;
    controllers.forEach(controller => controller.dispose());
    document.removeEventListener('click', toggle);
    document.removeEventListener('visibilitychange', update);
    window.removeEventListener('storage', sync);
    window.removeEventListener('pageshow', resume);
    window.removeEventListener('pagehide', dispose);
    motion.removeEventListener('change', update);
    finePointer.removeEventListener('change', update);
  };
  read();
  update();
  const resume = () => { suspended = false; update(); };
  document.addEventListener('click', toggle);
  document.addEventListener('visibilitychange', update);
  window.addEventListener('storage', sync);
  window.addEventListener('pageshow', resume);
  window.addEventListener('pagehide', dispose);
  motion.addEventListener('change', update);
  finePointer.addEventListener('change', update);
})();
