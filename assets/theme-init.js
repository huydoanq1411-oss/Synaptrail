/* Read before styles render; preserve the page default when storage is unavailable. */
(() => {
  'use strict';
  const root = document.documentElement;
  const fallback = root.dataset.theme === 'light' ? 'light' : 'dark';
  const key = 'synaptrail-theme';
  function restoreTheme() {
    let theme = fallback;
    try {
      const saved = localStorage.getItem(key);
      if (saved === 'light' || saved === 'dark') theme = saved;
    } catch { /* Reading the page must still work with blocked storage. */ }
    root.dataset.theme = theme;
  }
  restoreTheme();
  // Also restore when Back/Forward reuses a page, or another tab changes the choice.
  addEventListener('pageshow', restoreTheme);
  addEventListener('storage', event => {
    if (event.key === key || event.key === null) restoreTheme();
  });
})();
