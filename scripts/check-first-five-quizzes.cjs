const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
// Keep the historical authoring generator's four-choice data intact. Current
// algorithm lessons use the separately reviewed three-choice regression fixture.
const root=path.resolve(__dirname,'..'),data={...require('./quiz-first-five-data.cjs'),'thuat-toan':require('./quiz-first-five-algorithm.cjs')};
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
const clean=s=>decode(s).replace(/\s+/g,' ').trim();
const load=(file,key)=>{const context={};vm.runInNewContext(read(file),context,{timeout:1000});return context[key];};
new vm.Script(read('assets/quiz-feedback.js'));
const algorithm=load('assets/roadmaps/thuat-toan.js','SynaptrailRoadmapData');
let chapters=0,questions=0,options=0,explanations=0,basisChecks=0,exampleChecks=0;
for(const [course,expectedChapters]of Object.entries(data))for(const {n,questions:expected}of expectedChapters){
 const id='chapter'+String(n).padStart(2,'0'),label=course+'/'+id;
 const html=read(course+'/'+id+'.html');
 const actual=load('assets/roadmaps/'+course+'-quiz.js','SynaptrailAlgorithmQuizzes').chapters[id]?.questions;
 assert(actual,label+': missing separate quiz');assert.equal(actual.length,expected.length,label+': question count');
 assert.equal(expected.length,5,label+': five reviewed questions');
 assert.equal((html.match(/class="quiz-q"/g)||[]).length,0,label+': quiz must stay separate');
 assert(!html.includes('thuat-toan-quiz.js'));assert(html.includes('quiz.html?chapter='+id));
 for(const [i,q]of expected.entries()){
  const current=actual[i],prefix=label+' question '+(i+1),choices=q.options.map(o=>Array.isArray(o)?o[0]:o);
  assert.equal(clean(current.question.replace(/^\d+\.\s*/,'')),clean(q.stem),prefix+': question changed');
  assert.deepEqual(Array.from(current.options,clean),choices.map(clean),prefix+': choices changed');
  assert.equal(current.answer,q.answer,prefix+': answer changed');
  assert.equal(clean(current.code||''),clean(q.code||''),prefix+': code changed');
  assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<choices.length,prefix+': invalid fixture answer');
  assert.equal(new Set(choices).size,choices.length,prefix+': duplicate choices');assert(q.basis&&!q.outsideChapter);
  assert(current.explanation?.trim(),prefix+': missing explanation');
  if(course==='thuat-toan'){
   assert.equal(clean(current.explanation),clean(q.explanation),prefix+': explanation changed');
   const node=algorithm.nodes.find(node=>node.id===id);
   assert(node?.source?.content,prefix+': missing lesson source');
   assert(clean(node.source.content.replace(/<[^>]*>/g,' ')).includes(clean(q.basis)),prefix+': basis missing from lesson');
   assert(html.includes(node.source.content),prefix+': lesson source/output mismatch');basisChecks++;
  }else{
   // Check every rationale, including distractors, not just a nonempty explanation.
   for(const [,why]of q.options){const rationale=why.replace(/^(?:Đúng|Sai):\s*/,'');assert(clean(current.explanation).includes(clean(rationale)),prefix+': rationale changed');}
  }
  questions++;options+=choices.length;explanations++;
 }
 chapters++;
}
// Execute the current examples independently of the quiz answer data.
const examples={};
for(let n=1;n<=5;n++){
 const node=algorithm.nodes.find(node=>node.id==='chapter'+String(n).padStart(2,'0'));
 const context={console:{log(){}}};new vm.Script(decode(node.source.code)).runInNewContext(context,{timeout:1000});examples[n]=context;
}
const records=[{ma:12},{ma:34}];assert.equal(examples[1].timSinhVien(records,34),records[1]);assert.equal(examples[1].timSinhVien(records,99),null);exampleChecks+=2;
for(const n of [0,1,2,5,16,50]){
 const values=Array.from({length:n},(_,i)=>i+1);
 assert.equal(examples[2].demSoSanh(values,-1),n);assert.equal(examples[3].demCap(n),n<2?0:n*(n-1)/2);exampleChecks+=2;
 const original=values.slice();assert.equal(examples[4].daoTaiCho(values),values);assert.deepEqual(values,original.reverse());exampleChecks+=2;
}
assert.equal(examples[3].demChiaDoi(16),4);exampleChecks++;
for(const name of ['interchangeSort','selectionSort','bubbleSort'])for(const input of [[],[1],[3,1,2],[2,2,1],[-1,0,-5,3]]){
 const value=input.slice();assert.equal(examples[5][name](value),value);assert.deepEqual(value,input.slice().sort((a,b)=>a-b));exampleChecks+=2;
}
console.log(JSON.stringify({chapters,questions,options,explanations,basisChecks,exampleChecks,errors:[]},null,2));
