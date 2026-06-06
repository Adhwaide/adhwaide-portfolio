const fs=require('fs');
const files = [
  'c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components/About.jsx',
  'c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components/Skills.jsx',
  'c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components/Projects.jsx',
  'c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components/FeaturedProject.jsx',
  'c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components/Blog.jsx',
  'c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components/Contact.jsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  
  // About.jsx
  c = c.replace('className="glass-card rounded-[2rem] p-10', 'className="observe-fade-up glass-card rounded-[2rem] p-10');
  
  // Skills.jsx
  c = c.replace('className="flex items-center gap-3 mb-10"', 'className="observe-fade-up flex items-center gap-3 mb-10"');
  c = c.replace(/className="flex items-center gap-3 px-6 py-3 bg-gradient/g, 'className="observe-fade-up flex items-center gap-3 px-6 py-3 bg-gradient'); // matches 2
  c = c.replace(/className="glass-card p-10 rounded-\[2rem\]/g, 'className="observe-fade-up glass-card p-10 rounded-[2rem]');
  
  // Projects.jsx
  c = c.replace('className="flex items-center gap-3 mb-12"', 'className="observe-fade-up flex items-center gap-3 mb-12"');
  
  // FeaturedProject.jsx
  c = c.replace('className="flex items-center gap-3 mb-12"', 'className="observe-fade-up flex items-center gap-3 mb-12"');
  c = c.replace(/className="glass-card rounded-\[2rem\] overflow-hidden/g, 'className="observe-fade-up glass-card rounded-[2rem] overflow-hidden');
  
  // Blog.jsx
  c = c.replace('className="flex justify-between items-end mb-12', 'className="observe-fade-up flex justify-between items-end mb-12');
  c = c.replace(/className="block glass-card p-8/g, 'className="observe-fade-up block glass-card p-8');
  c = c.replace('className="glass-card rounded-3xl p-8', 'className="observe-fade-up glass-card rounded-3xl p-8');
  
  // Contact.jsx
  c = c.replace('className="max-w-4xl mx-auto text-center', 'className="observe-fade-up max-w-4xl mx-auto text-center');

  // Fix if replaced multiple times accidentally:
  c = c.replace(/observe-fade-up observe-fade-up/g, 'observe-fade-up');

  fs.writeFileSync(f, c);
  console.log("Updated", f);
});
