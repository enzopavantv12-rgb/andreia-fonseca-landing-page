const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.split('\\\\n').join('\\n');

fs.writeFileSync('index.html', html);
