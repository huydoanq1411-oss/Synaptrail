const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'java/chapter17.html'),'utf8');
const section=html.match(/<section class="chapter" id="s17">[\s\S]*?<\/section>/)[0];
const text=section.replace(/<pre>[\s\S]*?<\/pre>/g,' ').replace(/<[^>]+>/g,' ');
const words=text.trim().split(/\s+/).length;assert(words>=900&&words<=1200,'Narrative word count '+words);
assert.equal((section.match(/class="quiz-q"/g)||[]).length,5);assert(section.includes('data-quiz="q17"'));assert(section.includes('id="result-q17"'));
const output=path.join(root,'artifacts/java-chapter17');fs.mkdirSync(output,{recursive:true});
const examples=[...section.matchAll(/<span class="code-label">([^<]+\.java)<\/span>[\s\S]*?<pre><code>([\s\S]*?)<\/code><\/pre>/g)];assert.equal(examples.length,2);
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
for(const [,file,code]of examples)fs.writeFileSync(path.join(output,file),decode(code));
const jdk=process.env.SYNAPTRAIL_TEST_JDK||process.env.JAVA_HOME;
const executable=name=>jdk?path.join(jdk,'bin',name+(process.platform==='win32'?'.exe':'')):name;
function run(name,args){const result=spawnSync(executable(name),args,{encoding:'utf8',cwd:output});if(result.error)throw Error('Cannot run '+name+': set JAVA_HOME or SYNAPTRAIL_TEST_JDK to a JDK. '+result.error.message);if(result.status!==0)throw Error(result.stderr);return result.stdout.replace(/\r\n/g,'\n').trim()}
run('javac',['--release','8','-encoding','UTF-8','-d','.',...examples.map(e=>e[1])]);
assert.equal(run('java',['-cp','.','HashMapDemo']),'2\n0\n3');
assert.equal(run('java',['-cp','.','HashSetDemo']),'true\nfalse\n2\ntrue\nfalse');
console.log(JSON.stringify({wordsExcludingCode:words,quizQuestions:5,compiled:examples.map(e=>e[1]),target:'Java 8',outputAssertions:'passed'},null,2));
