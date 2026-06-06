const fs=require('fs');
const path=require('path');
const dir='c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components';
fs.readdirSync(dir).filter(f=>f.endsWith('.jsx')).forEach(f=>{
  let p=path.join(dir,f);
  let c=fs.readFileSync(p,'utf8');
  let modified=false;
  if(c.includes('className="card ')) {
    c=c.replace(/className=\"card /g, 'className=\"observe-fade-up ');
    modified=true;
  }
  if(c.includes('className="section-title ')) {
    c=c.replace(/className=\"section-title /g, 'className=\"observe-fade-up ');
    modified=true;
  }
  if(modified) {
    fs.writeFileSync(p, c);
    console.log('Updated classes in', f);
  }
});
