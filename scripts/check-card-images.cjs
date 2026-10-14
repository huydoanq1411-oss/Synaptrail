const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');const html=fs.readFileSync(path.join(root,'courses.html'),'utf8');
const files=new Map(),contents=new Map(),keys=new Set();let count=0;
for(const match of html.matchAll(/<(button|article)\b[^>]*class="[^"]*learning-card[^"]*"[^>]*>[\s\S]*?<\/\1>/g)){
 const card=match[0],key=card.match(/data-card-key="([^"]+)"/)?.[1]||'role-'+card.match(/data-role="([^"]+)"/)?.[1];
 if(!key||keys.has(key))throw Error('Missing or duplicate key '+key);keys.add(key);
 const file=card.match(/<img[^>]*src="([^"]+)"/)?.[1];if(!file)throw Error('Missing image '+key);
 if(files.has(file))throw Error(`Duplicate image: ${files.get(file)} and ${key} -> ${file}`);
 const data=fs.readFileSync(path.join(root,file));const hash=crypto.createHash('sha256').update(data).digest('hex');
 if(contents.has(hash))throw Error(`Duplicate artwork content: ${contents.get(hash)} and ${key}`);
 files.set(file,key);contents.set(hash,key);
 if(!card.includes('class="card-arrow"')||!card.includes('class="card-desc"')||!card.includes('card-chips'))throw Error('Incomplete card '+key);
 for(const link of card.matchAll(/href="([^"]+)"/g)){const [route,anchor]=link[1].split('#');if(route&&!fs.existsSync(path.join(root,route)))throw Error('Broken route '+link[1]);if(!route&&anchor&&!html.includes(`id="${anchor}"`))throw Error('Broken anchor '+anchor);}
 count++;
}
if(count!==38)throw Error('Expected 38 catalogue cards, found '+count);
console.log(`PASS: ${count} cards have unique keys, files, artwork content and valid destinations.`);
