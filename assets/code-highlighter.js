(function(global){
  'use strict';
  const keywordLists={
    javascript:'const let var function return if else for while do switch case break continue try catch finally throw class extends new this super import export default async await typeof null undefined true false of in interface type implements from as',
    java:'public private protected class static void int double float char boolean long String new return if else for while do switch case break continue try catch finally throw throws extends implements interface this super import package final abstract true false null',
    cpp:'auto bool break case catch char class const constexpr continue default delete do double else enum explicit extern false float for friend if inline int long namespace new noexcept nullptr operator private protected public register return short signed sizeof static struct switch template this throw true try typedef typename union unsigned using virtual void volatile while',
    python:'def return if elif else for while in import from as class try except finally raise with pass break continue lambda True False None and or not is global nonlocal yield async await',
    bash:'if then else elif fi for while do done case esac in function export local echo cd exit',
    docker:'FROM RUN COPY ADD CMD ENTRYPOINT WORKDIR ENV ARG EXPOSE USER VOLUME LABEL HEALTHCHECK',
    sql:'SELECT FROM WHERE ORDER BY GROUP HAVING LIMIT INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE DATABASE USE PRIMARY KEY NOT NULL DEFAULT JOIN LEFT RIGHT INNER ON AS AND OR IN COMMIT ROLLBACK BEGIN TRANSACTION',
    html:'html head body title meta link script style div span p a main section article input button pre code ul ol li table tr td th',
    css:'important inherit initial unset auto none block flex grid',
    yaml:'true false null'
  };
  const keywords=Object.fromEntries(Object.entries(keywordLists).map(([language,words])=>[language,new Set(words.split(' '))]));
  const aliases={js:'javascript',ts:'javascript',typescript:'javascript',c:'cpp','c++':'cpp',sh:'bash',shell:'bash',xml:'html',yml:'yaml'};
  const escape=text=>text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\r/g,'&#13;');
  function tokenize(source,language='javascript'){
    language=aliases[language]||language;
    const tokens=[];let i=0;
    const emit=(end,type)=>{tokens.push({text:source.slice(i,end),type});i=end;};
    const lineEnd=()=>{const end=source.indexOf('\n',i);return end<0?source.length:end;};
    while(i<source.length){
      const char=source[i];
      // Comments are recognized only while outside quoted strings.
      if(language==='html'&&source.startsWith('<!--',i)){const end=source.indexOf('-->',i+4);emit(end<0?source.length:end+3,'com');continue;}
      if(['javascript','java','cpp'].includes(language)&&source.startsWith('//',i)&&source[i-1]!==':'){emit(lineEnd(),'com');continue;}
      if(['javascript','java','cpp','css'].includes(language)&&source.startsWith('/*',i)){const end=source.indexOf('*/',i+2);emit(end<0?source.length:end+2,'com');continue;}
      if(['python','bash','docker','yaml'].includes(language)&&char==='#'&&(language!=='bash'||i===0||/\s/.test(source[i-1]))){emit(lineEnd(),'com');continue;}
      if(language==='sql'&&(source.startsWith('--',i)&&(/\s/.test(source[i+2]||' ') )||char==='#')){emit(lineEnd(),'com');continue;}
      if(char==='"'||char==="'"||char==='`'&&['javascript','bash'].includes(language)){
        const quote=language==='python'&&source.startsWith(char.repeat(3),i)?char.repeat(3):char;
        let end=i+quote.length;
        while(end<source.length){if(source[end]==='\\'){end=Math.min(end+2,source.length);continue;}if(source.startsWith(quote,end)){end+=quote.length;break;}end++;}
        emit(end,'str');continue;
      }
      if(/\d/.test(char)||char==='.'&&/\d/.test(source[i+1]||'')){
        const number=source.slice(i).match(/^(?:0[xX][\da-fA-F]+|0[bB][01]+|(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)(?:[fFdDlL])?/);
        if(number){emit(i+number[0].length,'num');continue;}
      }
      if(/[a-zA-Z_$]/.test(char)){
        let end=i+1;while(end<source.length&&/[\w$]/.test(source[end]))end++;
        const word=source.slice(i,end),key=language==='sql'?word.toUpperCase():word;
        let next=end;while(/\s/.test(source[next]||'')&&next<source.length)next++;
        emit(end,keywords[language]?.has(key)?'kw':source[next]==='('?'fn':null);continue;
      }
      emit(i+1,null);
    }
    return tokens;
  }
  function highlight(source,language){return tokenize(source,language).map(({text,type})=>type?'<span class="tok-'+type+'">'+escape(text)+'</span>':escape(text)).join('');}
  function detectLanguage(element){
    const explicit=element.dataset.language||element.className.match(/\blanguage-([\w+-]+)/)?.[1];if(explicit)return aliases[explicit]||explicit;
    const label=(element.closest('.code-wrap')?.querySelector('.code-label')?.textContent||'').trim().toLowerCase();
    if(label.startsWith('terminal')||label==='bash'||label==='shell')return 'bash';
    if(label==='dockerfile')return 'docker';
    const ext=label.match(/\.(html?|jsx?|tsx?|java|cpp|cc|c|py|css|scss|sh|sql|ya?ml)\b/)?.[1];
    if(ext)return {html:'html',htm:'html',js:'javascript',jsx:'javascript',ts:'javascript',tsx:'javascript',java:'java',cpp:'cpp',cc:'cpp',c:'cpp',py:'python',css:'css',scss:'css',sh:'bash',sql:'sql',yaml:'yaml',yml:'yaml'}[ext];
    const route=global.location?.pathname||'';
    if(route.includes('/python/')||route.includes('/thuat-toan/')||route.includes('/ai-engineer/'))return 'python';
    if(route.includes('/java/'))return 'java';if(route.includes('/cpp/'))return 'cpp';
    if(route.includes('/html-css-nnlt/')||route.includes('/html-css/'))return 'html';
    return 'javascript';
  }
  const originals=new WeakMap();
  function highlightAll(root=global.document){
    root.querySelectorAll('pre').forEach(pre=>{
      const block=pre.querySelector('code')||pre;
      if(!originals.has(block))originals.set(block,block.textContent);
      block.innerHTML=highlight(originals.get(block),detectLanguage(block));
    });
  }
  const api={tokenize,highlight,highlightAll,detectLanguage};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  global.SynaptrailHighlighter=api;
  if(global.document)highlightAll();
})(typeof window==='undefined'?globalThis:window);
