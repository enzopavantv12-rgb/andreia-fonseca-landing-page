const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// replace literal '\n'
html = html.replace(/\\n/g, '\\n');

fs.writeFileSync('index.html', html);
