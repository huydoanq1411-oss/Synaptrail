const assert=require('node:assert/strict'),{tokenize,highlight}=require('../assets/code-highlighter.js');
const cases=[
 ['javascript','const url = "https://cdn.example.test/a//b"; // actual comment'],
 ['javascript','https://example.test/path'],
 ['html','<!-- comment --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/file.css">'],
 ['python','# comment\nurl = "https://example.test/#hash"\ntext = """# still a string\nsecond line"""'],
 ['bash','# comment\necho "https://example.test/#hash"\necho word#literal'],
 ['css','/* comment */ .link { content: "https://example.test/*text*/"; }'],
 ['java','String url = "https://example.test"; // comment\nint n = 42;'],
 ['cpp','std::string url = "https://example.test"; /* comment */'],
 ['javascript','const value = "<script>& &lt;";\nconst x = 10.5e-2;'],
 ['python','value = "quote \\" # inside" # outside'],
 ['javascript','let text = "unterminated // string'],
 ['javascript','// <span class="tok-com">fake</span>'],
 ['sql',"SELECT 'https://example.test/#hash'; -- note"],
 ['html','<div class="example">1 & 2</div>\r\n']
];
for(const [language,source]of cases){const tokens=tokenize(source,language);assert.equal(tokens.map(t=>t.text).join(''),source);const markup=highlight(source,language);const decoded=markup.replace(/<span class="tok-\w+">/g,'').replace(/<\/span>/g,'').replace(/&#13;/g,'\r').replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/&amp;/g,'&');assert.equal(decoded,source,language);assert(tokens.filter(t=>t.type==='com').every(t=>!t.text.startsWith('//example')),language);}
assert.equal(tokenize('https://example.test/path','javascript').filter(t=>t.type==='com').length,0);
assert.equal(tokenize('url="https://example.test"','html').filter(t=>t.type==='com').length,0);
assert.equal(tokenize('/* note */','css')[0].type,'com');
assert.equal(tokenize('"// not comment"','java')[0].type,'str');
console.log(JSON.stringify({tokenizerCases:cases.length,textPreserved:true,errors:[]},null,2));
