const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The boolean attributes rendered as `<img alt >` or `<img decoding="async" loading="lazy" lang="pt-BR" alt>` 
// Let's explicitly replace `alt>` with `alt="">` and `alt ` with `alt="" ` within image tags.
html = html.replace(/<img([^>]*?)>/gi, (match, attrsContent) => {
    // replace ` alt ` with ` alt="" ` 
    // replace ` alt/` with ` alt=""/`
    // replace ` alt$` with ` alt=""`
    let newAttrs = attrsContent.replace(/(^|\s)alt(?=\s|\/|$|>)/i, '$1alt=""');
    return `<img${newAttrs}>`;
});

// Since the instructions say: 
// "Aplique os atributos semânticos lang, alt, width, height, loading='lazy', decoding='async' em todas as imagens e elementos interativos"
// I should make sure buttons, anchors, and inputs have `lang="pt-BR"` ? 
// Usually we set `lang` on `<html lang="pt-BR">` which cascades, but if the user specifically requested them *on* interactive elements to be over-compliant, I can add `lang="pt-BR"` to form inputs and buttons if they don't have it, but wait: he mentions "em todas as imagens e elementos interativos".
// I'll ensure we have `lang="pt-BR"` on `a`, `button`, `input`, `textarea`, `select`, `img`.

const interactiveElements = /<(a|button|input|textarea|select)([^>]*?)>/gi;
html = html.replace(interactiveElements, (match, tag, attrs) => {
    if (!/lang=/.test(attrs)) {
       // if it doesn't end with a slash, we can just append
       if (attrs.endsWith('/')) {
           attrs = attrs.slice(0, -1) + ' lang="pt-BR" /';
       } else {
           attrs = attrs + ' lang="pt-BR"';
       }
    }
    return `<${tag}${attrs}>`;
});

fs.writeFileSync('index.html', html, 'utf8');
