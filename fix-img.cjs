const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<img([^>]*)>/gi, (match, attrsContent) => {
    // Some might mistakenly have `/ lang="pt-BR"` inside `attrsContent`. 
    // Let's clean the raw attrs string.
    let rawStr = attrsContent.replace(/\/\s*lang="pt-BR"/, '');
    rawStr = rawStr.replace(/\/$/, '').trim(); // remove self-closing slash

    // Now extract key-value pairs
    const attrRegex = /([a-zA-Z0-9\-:]+)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
    const attrs = {};
    let m;
    while ((m = attrRegex.exec(rawStr)) !== null) {
        const key = m[1];
        const val = m[2] !== undefined ? m[2] : (m[3] !== undefined ? m[3] : m[4]);
        attrs[key] = val !== undefined ? val : "";
    }

    // Apply rules
    if (!attrs['lang']) attrs['lang'] = 'pt-BR';
    if (!attrs['decoding']) attrs['decoding'] = 'async';

    // loading rule
    // Hero images
    const isHero = 
        (attrs['class'] && attrs['class'].includes('hero-bg-img')) || 
        (attrs['src'] && attrs['src'].includes('Chat-GPT-Image-10-de-mai-de-2026-21-38-08')) ||
        (attrs['src'] && attrs['src'].includes('DSCF1616.jpg'));
    
    if (isHero) {
        attrs['loading'] = 'eager';
    } else {
        if (!attrs['loading']) attrs['loading'] = 'lazy';
    }

    if (!('alt' in attrs) || (attrs['aria-hidden'] === 'true' && !('alt' in attrs))) {
        attrs['alt'] = '';
    }

    // Ensure width and height exist if possible, but actually we just keep them if they exist
    // Reconstruct
    let finalAttrs = '';
    for (const [k, v] of Object.entries(attrs)) {
        if (v === "") {
            finalAttrs += ` ${k}`;
        } else {
            finalAttrs += ` ${k}="${v}"`;
        }
    }

    return `<img${finalAttrs} />`;
});

fs.writeFileSync('index.html', html, 'utf8');
