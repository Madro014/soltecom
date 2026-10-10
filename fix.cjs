const fs = require('fs');
let c = fs.readFileSync('src/components/animations/Lanyard.tsx', 'utf8');
c = c.replace(/\\`/g, '`').replace(/\\\$/g, '$').replace(/\\\\n/g, '\\n');
fs.writeFileSync('src/components/animations/Lanyard.tsx', c);
