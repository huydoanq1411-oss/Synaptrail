const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),jdk=process.env.SYNAPTRAIL_TEST_JDK||process.env.JAVA_HOME;
const executable=name=>jdk?path.join(jdk,'bin',name+(process.platform==='win32'?'.exe':'')):name;
const results=[];
const expected={WelcomeJava:'Welcome to Java\nOrder received',HelloWorld:'Hello, World!',GreetingLines:'Hello, Synaptrail!\nReady to learn'};
for(const number of [1,2,3]){
 const chapter='chapter'+String(number).padStart(2,'0');const html=fs.readFileSync(path.join(root,'java',chapter+'.html'),'utf8');
 const section=html.match(new RegExp('<section class="chapter" id="s'+number+'">[\\s\\S]*?</section>'))[0];
 const words=section.replace(/<pre>[\s\S]*?<\/pre>/g,' ').replace(/<[^>]+>/g,' ').trim().split(/\s+/).length;
 assert(words>=900&&words<=1200,chapter+' word count '+words);
 assert.equal((section.match(/class="quiz-q"/g)||[]).length,5);assert(section.includes('data-quiz="q'+number+'"'));assert(section.includes('id="result-q'+number+'"'));
 const output=path.join(root,'artifacts/java-batch1',chapter);fs.mkdirSync(output,{recursive:true});
 const examples=[...section.matchAll(/<span class="code-label">([^<]+\.java)<\/span>[\s\S]*?<pre><code>([\s\S]*?)<\/code><\/pre>/g)];assert(examples.length>0);
 for(const [,file,source]of examples)fs.writeFileSync(path.join(output,file),source.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&'));
 function run(name,args){const result=spawnSync(executable(name),args,{cwd:output,encoding:'utf8'});if(result.error)throw result.error;if(result.status!==0)throw Error(result.stderr);return result.stdout.replace(/\r\n/g,'\n').trim()}
 run('javac',['--release','8','-encoding','UTF-8','-d','.',...examples.map(e=>e[1])]);
 for(const [,file]of examples){const name=file.replace(/\.java$/,'');const stdout=run('java',['-cp','.',name]);if(name==='EnvironmentCheck'){const lines=stdout.split('\n');assert.equal(lines[0],'Compiler and runtime are ready');assert(/^[\d][\d.+_-]*$/.test(lines[1]),'Runtime version output');assert.equal(lines.length,2);}else assert.equal(stdout,expected[name]);}
 results.push({chapter,wordsExcludingCode:words,quiz:5,compiledAndRun:examples.map(e=>e[1])});
}
console.log(JSON.stringify({target:'Java 8',results,errors:[]},null,2));
