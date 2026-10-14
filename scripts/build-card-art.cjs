/* Build layered SVG illustrations from the catalogue's art manifest. */
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');const cards=JSON.parse(fs.readFileSync(path.join(root,'assets/card-art.json'),'utf8'));
const colors={cyan:'#22d3ee',green:'#4ade80',purple:'#c084fc',amber:'#fbbf24',blue:'#60a5fa',coral:'#fb923c',sky:'#38bdf8',teal:'#2dd4bf',rose:'#fb7185'};
const rect=(x,y,w,h,fill='#102337',radius=14)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="ACC" stroke-width="3"/>`;
const line=(d,color='ACC',width=5)=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const circle=(x,y,r=23)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#102337" stroke="ACC" stroke-width="4"/>`;
const text=(x,y,value,size=22,color='#edf8ff')=>`<text x="${x}" y="${y}" fill="${color}" font-family="ui-monospace,Consolas,monospace" font-size="${size}" font-weight="600">${value}</text>`;
const pane=(label='')=>rect(95,82,450,252)+line('M95 124H545','ACC',2)+[120,140,160].map(x=>circle(x,104,4)).join('')+(label?text(205,111,label,15):'');
const code=(x=132,y=166)=>line(`M${x+22} ${y}l-24 22 24 22m118-44 24 22-24 22m-60-51-16 66`,'#edf8ff',6);
const rows=(x,y,w=190)=>line(`M${x} ${y}h${w}m-${w} 28h${w*.7}m-${w*.7} 28h${w*.9}`,'ACC',7);
const db=(x,y,w=190,h=150)=>`<path d="M${x} ${y}v${h}c0 48 ${w} 48 ${w} 0V${y}" fill="#102337" stroke="ACC" stroke-width="4"/><ellipse cx="${x+w/2}" cy="${y}" rx="${w/2}" ry="32" fill="ACC"/>`+line(`M${x} ${y+h*.5}c0 48 ${w} 48 ${w} 0`,'ACC',3);
const scenes={
flow:()=>line('M320 100v72m0 0-150 85m150-85 150 85')+rect(235,72,170,65)+rect(252,164,136,58)+rect(85,258,190,66)+rect(368,258,190,66)+text(277,115,'START',22)+text(284,201,'?',28)+text(132,301,'YES',26)+text(416,301,'NO',26),
chat:()=>rect(95,85,310,150)+line('M135 232v45l55-45')+rows(130,130,225)+rect(272,220,280,115)+line('M502 331v28l-40-28')+rows(305,259,175),
memory:()=>pane('C++ / MEMORY')+code(140,170)+rect(330,150,175,155)+[0,1,2,3].map(i=>rect(350,168+i*31,135,22,'ACC',4)).join('')+text(132,284,'0x → ptr',22),
classes:()=>line('M320 150v45M180 195h280M180 195v50m280-50v50')+rect(225,72,190,100)+text(257,114,'Class',24)+line('M244 133h150','ACC',3)+rect(80,243,215,95)+text(110,299,'Service',24)+rect(345,243,215,95)+text(378,299,'Object',24),
notebook:()=>pane('PYTHON / DATA')+rect(121,148,230,160)+text(140,185,'def learn():',21)+text(140,222,'  data →',21)+text(140,260,'  return ✓',21)+[0,1,2].map(i=>rect(380,168+i*43,130,28,i===1?'ACC':'#102337',5)).join(''),
lightning:()=>pane('JAVASCRIPT')+rows(126,178,180)+text(130,298,'{ events }',21)+'<path d="m411 142-74 103h56l-23 80 111-128h-65l32-55Z" fill="ACC" stroke="#fff" stroke-width="3"/>',
types:()=>pane('TYPESCRIPT')+rect(125,151,160,145)+text(155,200,'type',26)+text(155,246,'User',26)+line('M287 223h50')+rect(343,155,168,64)+text(364,196,'id: int',19)+rect(343,240,168,60)+text(364,277,'name: str',18),
browser:()=>pane('HTML / CSS')+rect(124,150,138,150,'ACC')+rect(282,150,234,67)+rows(283,246,210)+line('M150 175h82m-82 28h60m-60 28h70','#102337',6),
grid:()=>pane('RESPONSIVE GRID')+[0,1,2].flatMap(y=>[0,1,2].map(x=>rect(122+x*135,149+y*51,120,39,(x+y)%3===0?'ACC':'#102337',7))).join(''),
palette:()=>'<g transform="rotate(-8 320 210)">'+rect(125,109,345,220)+'<g transform="rotate(15 320 210)">'+rect(153,112,345,220)+'</g></g>'+rect(192,122,335,208)+[0,1,2,3].map(i=>`<rect x="${216+i*70}" y="150" width="56" height="94" rx="8" fill="${['ACC','#edf8ff','#637391','#102337'][i]}"/>`).join('')+text(226,285,'$style: mixin;',22),
orbit:()=>'<g fill="none" stroke="ACC" stroke-width="5">'+[0,60,120].map(a=>`<ellipse cx="320" cy="225" rx="168" ry="65" transform="rotate(${a} 320 225)"/>`).join('')+'</g>'+circle(320,225,28)+rect(85,95,115,56)+text(104,130,'UI',24)+rect(440,291,115,56)+text(455,327,'state',20),
mapping:()=>rect(80,120,215,190)+text(103,163,'User',24)+rows(105,204,155)+line('M295 203h80m-40-16 40 16-40 16')+db(388,132,170,155),
graph:()=>line('M320 214 140 105m180 109 180-109m-180 109-180 100m180-100 180 100m-180-100v-130')+[[140,105],[500,105],[320,85],[140,314],[500,314],[320,214]].map(([x,y],i)=>circle(x,y,i===5?55:28)).join('')+text(299,224,'GQL',19),
socket:()=>rect(65,135,190,180)+rect(385,135,190,180)+text(88,185,'CLIENT',22)+text(402,185,'SERVER',22)+line('M255 215h130m-30-18 30 18-30 18m-100 45H255m30-18-30 18 30 18')+rows(92,239,130)+rows(412,239,130),
modules:()=>line('M320 194 130 125m190 69 190-69m-190 69-190 120m190-120 190 120')+rect(245,148,150,95,'ACC')+text(275,203,'API',30,'#102337')+[[65,83],[455,83],[65,274],[455,274]].map(([x,y],i)=>rect(x,y,120,76)+text(x+17,y+45,['Auth','Data','Jobs','Logs'][i],20)).join(''),
servers:()=>line('M320 132v78M160 210h320M160 210v55m320-55v55')+rect(228,70,184,104)+text(252,116,'BALANCER',19)+[85,365].map(x=>rect(x,263,190,84)+rows(x+25,287,140)).join('')+circle(320,210,16),
scatter:()=>pane('MODEL / TRAINING')+line('M140 151v152h360','#edf8ff',3)+line('M162 280c80-10 140-75 322-112','ACC',6)+[[185,252],[226,255],[274,226],[298,200],[365,207],[409,174],[465,161]].map(([x,y])=>circle(x,y,8)).join(''),
agent:()=>line('M320 195 120 140m200 55 200-55m-200 55-190 140m190-140 190 140')+circle(320,195,70)+rect(277,172,86,50,'ACC',10)+circle(298,195,7)+circle(342,195,7)+[[62,102],[455,102],[68,300],[455,300]].map(([x,y],i)=>rect(x,y,122,66)+text(x+13,y+40,['Data','Model','Tools','Eval'][i],19)).join(''),
pipeline:()=>line('M145 210h360')+[[72,'COMMIT'],[254,'REVIEW'],[436,'MERGE']].map(([x,t],i)=>rect(x,157,140,111,i===2?'ACC':'#102337')+text(x+12,215,t,18,i===2?'#102337':'#edf8ff')).join('')+line('M145 157v-44h180v44','ACC',4)+circle(145,210,8),
shield:()=>'<path d="M320 75 466 126v106c0 63-72 111-146 133-74-22-146-70-146-133V126Z" fill="#102337" stroke="ACC" stroke-width="5"/>'+line('m256 220 44 44 86-91','#edf8ff',10)+line('M90 140h55m-55 85h55m350-85h55m-55 85h55'),
topology:()=>line('M140 112h360m-360 0 180 190m180-190-180 190')+[[140,112],[500,112],[320,302]].map(([x,y],i)=>rect(x-74,y-42,148,84)+text(x-47,y+8,['EDGE','CORE','DATA'][i],22)).join('')+circle(320,206,31)+text(296,213,'NET',20),
deploy:()=>rect(75,143,195,168)+rows(100,183,145)+line('M280 222h85m-30-20 30 20-30 20')+rect(384,78,178,268)+[0,1,2].map(i=>rect(407,107+i*77,130,55,i===2?'ACC':'#102337',8)).join('')+text(91,119,'LOCAL',20)+text(423,62,'CLOUD',20),
monitor:()=>pane('AI / OBSERVABILITY')+rect(122,148,250,153)+line('M140 252h35l23-47 27 61 24-40h26l25-48 27 63h28','ACC',5)+rect(394,148,120,64)+text(416,190,'99%',26)+rect(394,236,120,66)+text(409,278,'READY',19),
document:()=>'<g transform="rotate(-7 320 210)">'+rect(183,78,296,271)+'</g>'+rect(156,83,296,269)+rect(183,112,240,47,'ACC',7)+text(198,143,'QUICK REFERENCE',17,'#102337')+rows(187,192,204)+line('M187 286h90m-90 27h204','ACC',7),
dashboard:()=>pane('FULL STACK / PROJECT')+rect(122,146,92,159,'ACC',7)+[0,1,2].map(i=>rect(232+i*94,148,80,48)).join('')+rect(232,212,269,92)+line('M250 286l40-22 37 8 47-37 44 13 62-29','ACC',5),
quiz:()=>rect(124,78,390,270)+text(151,124,'QUESTION 01',22)+line('M152 151h325','ACC',3)+[0,1,2].map(i=>rect(152,173+i*49,325,37,i===1?'ACC':'#102337',8)+text(169,198+i*49,['A · Option','B · Correct','C · Option'][i],19,i===1?'#102337':'#edf8ff')).join(''),
exercise:()=>pane('CODE / TEST')+code(130,177)+text(135,292,'solve(input)',21)+[0,1,2].map(i=>rect(352,155+i*51,160,40)+line(`m369 ${174+i*51} 9 9 17-20`,'ACC',4)+text(408,182+i*51,'PASS',18)).join(''),
api:()=>rect(73,115,190,210)+text(101,161,'REQUEST',21)+text(99,219,'GET /data',20)+line('M272 184h91m-23-16 23 16-23 16m0 70h-91m23-16-23 16 23 16')+rect(377,115,190,210)+text(402,162,'RESPONSE',20)+text(401,211,'{',33)+text(421,246,'data: []',18)+text(401,286,'}',33),
toolbox:()=>line('M320 197 127 127m193 70 193-70m-193 70-193 122m193-122 193 122')+rect(247,148,146,110,'ACC')+text(268,211,'AGENT',26,'#102337')+[[68,85],[455,85],[68,281],[455,281]].map(([x,y],i)=>rect(x,y,120,78)+text(x+12,y+46,['PROMPT','TOOLS','MEMORY','ACTION'][i],17)).join('')
};
fs.mkdirSync(path.join(root,'assets/img/cards'),{recursive:true});
for(const card of cards){
 const old=path.join(root,'assets/img/previews',card.key+'.svg');
 if(['skill-git','skill-docker','skill-mysql','skill-security'].includes(card.key)){fs.copyFileSync(old,path.join(root,'assets/img/cards',card.key+'.svg'));continue;}
 const accent=colors[card.color];const scene=scenes[card.scene];if(!scene)throw Error('Missing scene '+card.scene);
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="${accent}" stop-opacity=".65"/><stop offset="1" stop-color="#102337"/></linearGradient><pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0v32" fill="none" stroke="#fff" opacity=".08"/></pattern></defs><rect width="640" height="400" fill="#132139"/><rect width="640" height="400" fill="url(#bg)"/><rect width="640" height="400" fill="url(#grid)"/><circle cx="590" cy="30" r="180" fill="${accent}" opacity=".12"/><circle cx="35" cy="390" r="130" fill="${accent}" opacity=".14"/>${scene().replaceAll('ACC',accent)}<path d="M30 64h38m-19-19v38M562 345h38" stroke="#fff" opacity=".6" stroke-width="3"/></svg>`;
 fs.writeFileSync(path.join(root,'assets/img/cards',card.key+'.svg'),svg);
}
console.log('Built '+cards.length+' unique catalogue illustrations.');
