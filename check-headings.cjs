const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const headingRegex = /<h([1-6])[\s\S]*?>([\s\S]*?)<\/h\1>/gi;

let m;
let lastLevel = null;
let errors = [];

const counts = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};

while ((m = headingRegex.exec(html)) !== null) {
    let level = parseInt(m[1], 10);
    let text = m[2].replace(/<[^>]+>/g, '').trim().substring(0, 50);
    
    counts[level]++;
    
    // Check hierarchy skip
    if (lastLevel !== null) {
        if (level > lastLevel + 1) {
            errors.push(`Hierarchy error: H${lastLevel} -> H${level} ("${text.replace(/\s+/g, ' ')}")`);
        }
    }
    lastLevel = level;
    
    console.log(`H${level}: ${text.replace(/\n\s*/g, ' ')}`);
}

console.log("\nCounts:", counts);
console.log("\nErrors:", errors);

