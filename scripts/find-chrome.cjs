const fs=require('node:fs'),path=require('node:path'),os=require('node:os');
function findChrome({platform=process.platform,env=process.env,home=os.homedir(),accessible}={}){
 const works=accessible||((file)=>{try{fs.accessSync(file,platform==='win32'?fs.constants.F_OK:fs.constants.X_OK);return fs.statSync(file).isFile()}catch{return false}});
 if(env.CHROME_PATH){const file=path.resolve(env.CHROME_PATH);if(!works(file))throw Error('CHROME_PATH is not an executable file: '+file);return file;}
 const names=platform==='win32'?['chrome.exe','chromium.exe']:['google-chrome','google-chrome-stable','chromium','chromium-browser','chrome'];
 const candidates=[];
 if(platform==='win32')for(const folder of [env.PROGRAMFILES,env['ProgramFiles(x86)'],env.LOCALAPPDATA,env.ProgramW6432,'C:/Program Files','C:/Program Files (x86)'].filter(Boolean))for(const binary of ['Google/Chrome/Application/chrome.exe','Chromium/Application/chrome.exe'])candidates.push(path.join(folder,binary));
 if(platform==='darwin')for(const folder of ['/Applications',path.join(home,'Applications')])for(const app of ['Google Chrome','Chromium','Google Chrome Canary'])candidates.push(path.join(folder,app+'.app','Contents','MacOS',app));
 if(platform==='linux')for(const folder of ['/usr/bin','/usr/local/bin','/snap/bin','/opt/google/chrome'])for(const name of names)candidates.push(path.join(folder,name));
 for(const folder of (env.PATH||env.Path||'').split(platform==='win32'?';':':').filter(Boolean))for(const name of names)candidates.push(path.join(folder.replace(/^"|"$/g,''),name));
 const found=candidates.find(works);if(!found)throw Error('Chrome/Chromium not found. Install it or set CHROME_PATH to its executable.');return found;
}
module.exports={findChrome};
