/* Compare lesson meaning-bearing markup, not formatting or presentation classes.
   This tokenizer targets authored lesson fragments, not arbitrary browser HTML.
   Keep code whitespace, routes, anchors, image alt text and tag structure. */
const fs=require('node:fs'),path=require('node:path');
function decode(text){
 const named={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '};
 return text.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi,(all,key)=>key[0]==='#'?String.fromCodePoint(key[1].toLowerCase()==='x'?parseInt(key.slice(2),16):Number(key.slice(1))):named[key.toLowerCase()]);
}
function normalizeLesson(html){
 const result=[];let pre=0;
 for(const token of html.replace(/<!--[\s\S]*?-->/g,'').match(/<\/?[a-z][^>]*>|[^<]+|</gi)||[]){
  const tag=token.match(/^<(\/)?([a-z][\w:-]*)\b([^>]*)>/i);
  if(tag){
   const closing=!!tag[1],name=tag[2].toLowerCase();
   if(name==='pre')pre+=closing?-1:1;
   const attrs=[];
   if(!closing)for(const a of tag[3].matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)){
    const key=a[1].toLowerCase();if(['class','style'].includes(key))continue;
    attrs.push([key,decode(a[2]??a[3]??a[4]).normalize('NFC')]);
   }
   attrs.sort(([a],[b])=>a.localeCompare(b));result.push([closing?'end':'tag',name,attrs]);
  }else{
   const text=decode(token).replace(/\r\n?/g,'\n').normalize('NFC');
   if(pre)result.push(['code',text]);else if(text.trim())result.push(['text',text.replace(/\s+/g,' ').trim()]);
  }
 }
 return result;
}
function extractLesson(html){
 const match=html.match(/<article\b[^>]*class=["'][^"']*\brm-lesson-content\b[^"']*["'][^>]*>([\s\S]*?)<\/article\s*>/i);
 if(!match)throw Error('Missing rm-lesson-content article');return match[1];
}
function assertLessonMatches(source,html,label){
 const expected=normalizeLesson(source),actual=normalizeLesson(extractLesson(html));
 const index=expected.findIndex((token,i)=>JSON.stringify(token)!==JSON.stringify(actual[i]));
 if(index!==-1||expected.length!==actual.length)throw Error(label+': source/output differ after normalization (token '+(index===-1?Math.min(expected.length,actual.length):index)+'). Keep the expanded HTML and review both versions before generating.');
 return {tokens:expected.length};
}
function checkLesson({root=path.resolve(__dirname,'..'),course='docker',chapter='chapter01'}={}){
 if(!/^[a-z0-9-]+$/.test(course)||!/^chapter\d+$/.test(chapter))throw Error('Invalid course/chapter');
 const source=JSON.parse(fs.readFileSync(path.join(root,'assets','roadmaps',course+'-source.json'),'utf8'));
 const lesson=source.lessons.find(l=>l.id===chapter);if(!lesson?.content)throw Error('Missing source lesson '+course+'/'+chapter);
 const html=fs.readFileSync(path.join(root,course,lesson.file),'utf8');
 return {course,chapter,...assertLessonMatches(lesson.content,html,course+'/'+chapter)};
}
module.exports={normalizeLesson,extractLesson,assertLessonMatches,checkLesson};
if(require.main===module){try{console.log(JSON.stringify({passed:true,...checkLesson()},null,2));}catch(error){console.error(error.message);process.exitCode=1;}}
