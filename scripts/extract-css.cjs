/* Extract only verified common CSS. Usage:
 * node scripts/extract-css.cjs --audit
 * node scripts/extract-css.cjs ai-engineer/chapter01.html python/chapter001.html react/chapter01.html
 * node scripts/extract-css.cjs                 # all chapters; safe to repeat
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const asset = path.join(root, 'assets/lesson.css');
const COMMON_HASH = '0f9d28bf0acd15521933327582618b165e53a16bf9487f823eca0f16692ddbfa';
const hash = css => crypto.createHash('sha256').update(css, 'utf8').digest('hex');
const relative = file => path.relative(root, file).split(path.sep).join('/');
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    if (entry.name.startsWith('.')) return [];
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : /^chapter.*\.html$/i.test(entry.name) ? [file] : [];
  });
}
function main() {
  const args = process.argv.slice(2);
  const auditOnly = args.includes('--audit');
  if (args.some(arg => arg.startsWith('--') && arg !== '--audit')) throw Error('Unknown option');
  const chapters = walk(root).sort();
  const selected = args.filter(arg => arg !== '--audit').map(arg => path.resolve(root, arg));
  for (const file of selected) if (!chapters.includes(file)) throw Error('Not a chapter in this project: ' + file);
  const targetFiles = selected.length ? [...new Set(selected)] : chapters;
  const records = chapters.map(file => {
    const html = fs.readFileSync(file, 'utf8');
    const styles = [...html.matchAll(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi)];
    return {file, html, styles};
  });
  const groups = new Map();
  for (const record of records) for (const match of record.styles) {
    const digest = hash(match[2]);
    if (!groups.has(digest)) groups.set(digest, {sha256:digest, cssBytes:Buffer.byteLength(match[2]), files:[]});
    groups.get(digest).files.push(relative(record.file));
  }
  const audit = {chapters:chapters.length, commonHash:COMMON_HASH, groups:[...groups.values()], differingFiles:records.filter(r => r.styles.some(m => hash(m[2]) !== COMMON_HASH)).map(r => relative(r.file))};
  if (auditOnly) {console.log(JSON.stringify(audit, null, 2)); return;}
  const source = records.flatMap(r => r.styles).find(m => hash(m[2]) === COMMON_HASH && !m[1].trim());
  const existing = fs.existsSync(asset) ? fs.readFileSync(asset,'utf8') : null;
  if (existing !== null && hash(existing) !== COMMON_HASH) throw Error('lesson.css differs from verified CSS; refusing to overwrite');
  if (!source && existing === null) throw Error('No verified common CSS available');
  const commonCSS = existing ?? source[2];
  const assetBefore = existing === null ? 0 : Buffer.byteLength(existing);
  const changes = [], skipped = [];
  let before = 0, after = 0;
  for (const record of records.filter(r => targetFiles.includes(r.file))) {
    before += Buffer.byteLength(record.html);
    const href = path.relative(path.dirname(record.file), asset).split(path.sep).join('/');
    const linked = [...record.html.matchAll(/<link\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)].some(m => path.resolve(path.dirname(record.file),m[1]) === asset);
    const commonBlocks = record.styles.filter(m => hash(m[2]) === COMMON_HASH && !m[1].trim());
    if (linked || commonBlocks.length !== 1) {
      skipped.push({file:relative(record.file),reason:linked?'Already extracted':'No single verified common style block (custom CSS left untouched)'});
      after += Buffer.byteLength(record.html);
      continue;
    }
    const match = commonBlocks[0];
    const next = record.html.slice(0,match.index) + `<link rel="stylesheet" href="${href}">` + record.html.slice(match.index + match[0].length);
    changes.push({file:record.file,next,savedBytes:Buffer.byteLength(record.html)-Buffer.byteLength(next),privateStyleBlocks:record.styles.length-1});
    after += Buffer.byteLength(next);
  }
  // Finish validation before writing. Other style blocks and all non-CSS bytes are preserved.
  if (changes.length && existing === null) fs.writeFileSync(asset,commonCSS,'utf8');
  for (const change of changes) fs.writeFileSync(change.file,change.next,'utf8');
  const assetAfter = fs.existsSync(asset) ? fs.statSync(asset).size : 0;
  console.log(JSON.stringify({commonHash:COMMON_HASH,selectedFiles:targetFiles.length,changedFiles:changes.map(c=>({file:relative(c.file),savedBytes:c.savedBytes,privateStyleBlocks:c.privateStyleBlocks})),skipped,chapterBytesBefore:before,chapterBytesAfter:after,assetBytesBefore:assetBefore,assetBytesAfter:assetAfter,totalBytesBefore:before+assetBefore,totalBytesAfter:after+assetAfter,netSavedBytes:before+assetBefore-after-assetAfter},null,2));
}
try {main();} catch (error) {console.error(error.message); process.exitCode=1;}
