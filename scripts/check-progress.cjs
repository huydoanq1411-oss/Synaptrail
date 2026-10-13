const assert=require('node:assert/strict');
const {createStore,KEY}=require('../assets/progress.js');
const memory=new Map(),storage={getItem:key=>memory.get(key)||null,setItem:(key,value)=>memory.set(key,value),removeItem:key=>memory.delete(key)};
const store=createStore(storage);
assert.deepEqual(store.read(),{});
store.update('java','chapter01',{done:true});store.update('java','chapter01',{quizScore:80});store.update('java','chapter01',{quizScore:20});assert.equal(store.read().java.chapter01.quizScore,80);assert.equal(store.read().java.chapter01.done,true);
store.update('java','chapter01',{done:false});assert.equal(store.read().java.chapter01.quizScore,80);
const old=JSON.stringify({java:{chapter01:{done:true,quizScore:10,updatedAt:'2000-01-01T00:00:00Z'}}});store.importData(old);assert.equal(store.read().java.chapter01.done,false);
const newer={java:{chapter02:{done:true,quizScore:75,updatedAt:'2026-10-13T00:00:00Z'}}};store.importData(JSON.stringify(newer));assert.equal(store.read().java.chapter02.done,true);
const snapshot=memory.get(KEY);for(const value of ['{','[]','{"__proto__":{}}',JSON.stringify({java:{chapter01:{done:true,quizScore:101,updatedAt:'bad'}}})]){assert.throws(()=>store.importData(value));assert.equal(memory.get(KEY),snapshot)}
assert.equal(createStore(storage).read().java.chapter01.quizScore,80);
store.reset();assert.equal(memory.has(KEY),false);
const blocked=createStore({getItem(){throw Error()},setItem(){throw Error()},removeItem(){throw Error()}});assert.throws(()=>blocked.read());assert.throws(()=>blocked.update('java','chapter01',{done:true}));assert.throws(()=>blocked.reset());
const quota=createStore({getItem:()=>null,setItem(){throw Error('quota')},removeItem(){}});assert.throws(()=>quota.update('java','chapter01',{done:true}));
console.log('Passed: persistence, highest quiz score, import merge, invalid JSON/prototype protection, reset, blocked/quota storage.');
