// Exercise apply/rerun entirely in memory; no page or URL output is written to disk.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const script=path.join(__dirname,'add-seo.cjs'),source=fs.readFileSync(script,'utf8');
const writes=new Map();
const memoryFs={...fs,readFileSync(file,...args){const key=path.resolve(file);if(writes.has(key)){const value=writes.get(key);return args[0]?String(value):Buffer.from(value)}return fs.readFileSync(file,...args)},existsSync(file){return writes.has(path.resolve(file))||fs.existsSync(file)},writeFileSync(file,content){writes.set(path.resolve(file),String(content))}};
function run(){let result;vm.runInNewContext(source,{require:name=>name==='node:fs'?memoryFs:require(name),__dirname,console:{log:s=>{result=JSON.parse(s)},error:message=>{throw Error(message)}},process:{argv:['node',script,'--base-url','https://example.test/Synaptrail/'],exit:()=>{throw Error('Unexpected exit')}}},{filename:script});return result;}
const first=run();assert.equal(first.pages,384);assert.equal(first.warnings.length,0);
const html=[...writes.entries()].filter(([file])=>file.endsWith('.html'));
for(const [file,text]of html){
 const head=text.match(/<head>([\s\S]*?)<\/head>/i)[1];
 for(const token of ['name="description"','property="og:title"','property="og:description"','property="og:type"','rel="canonical"','rel="icon"'])assert.equal(head.split(token).length-1,1,file+' '+token);
 const body=text.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'');assert.equal((body.match(/<h1\b/gi)||[]).length,1,file);
}
const sitemap=writes.get(path.resolve(__dirname,'../sitemap.xml'));assert.equal((sitemap.match(/<loc>/g)||[]).length,384);assert(sitemap.includes('https://example.test/Synaptrail/'));
const snapshot=new Map(writes),second=run();for(const [file,value]of writes){if(value!==snapshot.get(file)){const previous=snapshot.get(file);let i=0;while(previous[i]===value[i])i++;console.log({file,index:i,before:previous.slice(i-80,i+160),after:value.slice(i-80,i+160)})}}assert.equal(second.plannedChanged,0);for(const [file,value]of writes)assert.equal(value,snapshot.get(file),'Non-idempotent '+file);
console.log(JSON.stringify({pagesChecked:html.length,sitemapUrls:384,rerunChanged:second.plannedChanged,diskWrites:0,errors:[]},null,2));
