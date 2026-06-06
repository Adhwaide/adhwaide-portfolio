const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components';

fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(f => {
  let p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');

  // Replace className="observe-fade-up ..." with data-animate="true" className="..."
  c = c.replace(/className=\"observe-fade-up ([^"]*)\"/g, 'data-animate="true" className="$1"');

  // Also catch any instances where it was added differently
  c = c.replace(/className=\"observe-fade-up\"/g, 'data-animate="true"');

  // As requested: Add data-animate attribute to every section wrapper
  // Ensure we don't accidentally add it twice if run multiple times
  if (!c.includes('<section data-animate="true"')) {
    c = c.replace(/<section\s+id=/g, '<section data-animate="true" id=');
  }

  // We should also replace standard `<section className="` if id isn't first 
  if (!c.includes('<section data-animate="true"')) {
    c = c.replace(/<section\s+className=/g, '<section data-animate="true" className=');
  }

  fs.writeFileSync(p, c);
  console.log('Processed', f);
});
