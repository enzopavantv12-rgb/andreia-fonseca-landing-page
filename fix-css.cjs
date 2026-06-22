const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The literal '\n' was injected as '\\n' in the text output. Let's fix this.
html = html.replace(/\\\\n/g, '\\n');

fs.writeFileSync('index.html', html);
