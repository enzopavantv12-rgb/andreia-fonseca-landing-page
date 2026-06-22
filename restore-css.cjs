const fs = require('fs');

const distHtml = fs.readFileSync('dist/index.html', 'utf8');

// The CSS is between <style> and </style>
const styleMatch = distHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);

if (styleMatch) {
    let styleContent = styleMatch[1];
    
    // Read current index.html
    let html = fs.readFileSync('index.html', 'utf8');
    
    // We accidentally deleted the <style> when replacing the head. Let's just insert it right after the </head> ? No, right BEFORE </head>!
    // My previous replacement replaced everything up to </head> with the new <head> which DID NOT INCLUDE the <style>... wait! Let's just insert it back before </head>! Let's do it cleanly!
    
    html = html.replace('</head>', '\n    <style>' + styleContent + '</style>\n  </head>');
    
    fs.writeFileSync('index.html', html, 'utf8');
    console.log("Restored <style> block from dist successfully!");
} else {
    console.log("Could not find <style> in dist/index.html");
}
