const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),data=require('./quiz-first-five-data.cjs');
new vm.Script(fs.readFileSync(path.join(root,'assets/quiz-feedback.js'),'utf8'));
let count=0;
for(const [course,chapters]of Object.entries(data))for(const {n,questions}of chapters){
 const file=path.join(root,course,'chapter'+String(n).padStart(2,'0')+'.html');const html=fs.readFileSync(file,'utf8');
 assert.equal((html.match(/class="quiz-q"/g)||[]).length,5,file);assert.equal((html.match(/class="quiz-opt"/g)||[]).length,20,file);assert.equal((html.match(/class="quiz-explanation" hidden/g)||[]).length,5,file);
 assert(html.includes('data-quiz="q'+n+'"'));assert(html.includes('id="result-q'+n+'"'));assert(html.includes('id="s'+n+'"'));assert.equal((html.match(/src="\.\.\/assets\/quiz-feedback.js"/g)||[]).length,1);
 for(const [i,q]of questions.entries()){assert.equal(q.options.length,4);assert(new Set(q.options.map(o=>o[0])).size===4);assert(q.basis.length>0);assert(q.options.every(o=>o[1].length>0));assert(!q.outsideChapter);assert(html.includes('id="q'+n+'-question-'+(i+1)+'"'));}
 const types=questions.map(q=>q.type);assert.deepEqual(types,['concept','concept','application','application','error']);count++;
}
console.log(JSON.stringify({chapters:count,questions:75,options:300,hiddenExplanations:75,errors:[]},null,2));
