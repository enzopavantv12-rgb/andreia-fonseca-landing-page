const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

let count = 0;
html = html.replace(/<(a|button|input|textarea|select)([^>]*?)>/gi, (match, tag, attrs) => {
    if (!/lang=/.test(attrs)) {
       count++;
       if (attrs.trim().endsWith('/')) {
           return `<${tag}${attrs.replace(/\/$/, ' lang="pt-BR" /')}>`;
       } else {
           return `<${tag}${attrs} lang="pt-BR">`;
       }
    }
    return match;
});

console.log(`Updated ${count} elements`);
fs.writeFileSync('index.html', html, 'utf8');
