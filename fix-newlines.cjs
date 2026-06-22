const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The literal '\n' was created. We want real new line character.
// Because it's literally written `\n` in the file.
html = html.replace(/\\n/g, '\n');

fs.writeFileSync('index.html', html);
