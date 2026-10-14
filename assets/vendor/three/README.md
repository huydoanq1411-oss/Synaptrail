# three.js 0.160.0 (r160)

Pinned offline ES module: `three.module.min.js` (670,681 bytes).
No runtime CDN request, npm installation, transpilation or build step.

Original upstream sources:
- https://raw.githubusercontent.com/mrdoob/three.js/r160/build/three.module.min.js
- https://raw.githubusercontent.com/mrdoob/three.js/r160/LICENSE

SHA-256: `3E690AC7D180B0AADF0891BEA39EEC643E29E2D3E75C99B18689518665F69BA6`.
MIT license is preserved in `LICENSE` and the module header.

The shared loader imports this file only when `SynaptrailFX3D.mount()` is called
for an element with `data-fx3d`, on HTTP(S), with effects enabled and WebGL available.
Direct `file://` viewing keeps the static fallback and never imports the module.
