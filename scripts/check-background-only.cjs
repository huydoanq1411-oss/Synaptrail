const fs = require('node:fs'), path = require('node:path');
const root = path.resolve(__dirname, '..');
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.name.startsWith('.') || ['node_modules','artifacts','reports'].includes(e.name) ? [] : e.isDirectory() ? walk(path.join(dir,e.name)) : e.name.endsWith('.html') ? [path.join(dir,e.name)] : []);
}
const pages = walk(root);
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const links = [...html.matchAll(/<link\b[^>]*href="([^"]*assets\/ui\.css)"/g)];
  if (!links.some(m => fs.existsSync(path.resolve(path.dirname(file),m[1])))) throw Error('Missing shared background entry: '+file);
}
const css = fs.readFileSync(path.join(root,'assets/background.css'),'utf8').replace(/\/\*[\s\S]*?\*\//g,'');
for (const declaration of css.matchAll(/([a-z-]+)\s*:\s*[^;{}]+;/g)) {
  if (!/^background-(image|size|position|repeat|attachment)$/.test(declaration[1])) throw Error('Non-background property: '+declaration[1]);
}
for (const theme of ['light','dark']) if (!fs.existsSync(path.join(root,'assets/img/site-background-'+theme+'.svg'))) throw Error('Missing background asset');
if (!fs.readFileSync(path.join(root,'assets/ui.css'),'utf8').startsWith("@import url('background.css');")) throw Error('Missing import');
console.log(`PASS: ${pages.length} site pages share background-only CSS.`);
