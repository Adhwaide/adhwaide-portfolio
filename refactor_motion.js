const fs = require('fs');
const glob = require('glob');

const files = glob.sync('c:/Users/Adhawaide/Documents/Projects/MyWebsite/src/components/*.jsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Remove imports
  content = content.replace(/import \{ motion.*\} from 'framer-motion';\n/g, '');
  content = content.replace(/import \{ motion \} from 'framer-motion';\n/g, '');
  
  // Replace <motion.xxx with <xxx
  content = content.replace(/<motion\.([a-zA-Z]+)[\s]/g, '<$1 ');
  content = content.replace(/<\/motion\.([a-zA-Z]+)>/g, '</$1>');

  // Strip framer motion props
  content = content.replace(/\s+initial={{.*?}}/gs, '');
  content = content.replace(/\s+whileInView={{.*?}}/gs, '');
  content = content.replace(/\s+animate={{.*?}}/gs, '');
  content = content.replace(/\s+viewport={{.*?}}/gs, '');
  content = content.replace(/\s+transition={{.*?}}/gs, '');
  content = content.replace(/\s+exit={{.*?}}/gs, '');
  
  // Replace AnimatePresence
  content = content.replace(/<AnimatePresence>/g, '');
  content = content.replace(/<\/AnimatePresence>/g, '');

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
