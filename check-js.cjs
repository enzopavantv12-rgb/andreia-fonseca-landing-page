const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const regex = /<script>([\s\S]*?)<\/script>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  try {
    new Function(match[1]);
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log('Syntax error in script tag:');
      console.log(e.message);
      
      const lines = match[1].split('\\n');
      console.log('Snippet length:', lines.length);
      // find roughly where the error could be
      console.log(lines.slice(0, 10).join('\\n'));
    }
  }
}
console.log('Done script check');
