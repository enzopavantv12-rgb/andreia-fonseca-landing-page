const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// The <head> replacement
const newHead = `<head>
    <!-- === META TAGS BÁSICAS === -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#1F0F1A" />
    <meta name="color-scheme" content="dark" />

    <!-- === TÍTULO E DESCRIÇÃO PRINCIPAIS === -->
    <title>Andreia Fonseca · Terapeuta Tântrica em Belo Horizonte | Massagem Tântrica e Sessões para Casais</title>
    <meta name="description" content="Terapia tântrica profissional individual e para casais em Belo Horizonte. Reconexão corporal, ampliação da sensibilidade e despertar do prazer consciente. +5 anos de experiência, +4.000 atendimentos, sigilo absoluto. Agende sua sessão." />

    <!-- === LINGUAGEM, AUTORIA E CANONICAL === -->
    <meta name="author" content="Andreia Fonseca" />
    <meta name="language" content="pt-BR" />
    <meta http-equiv="content-language" content="pt-BR" />
    <link rel="canonical" href="https://andreia-tantrica-bh.com.br" /> <!-- Use domain provided or conceptual -->

    <!-- === ROBOTS E INDEXAÇÃO === -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow" />

    <!-- === GEO TAGS === -->
    <meta name="geo.region" content="BR-MG" />
    <meta name="geo.placename" content="Belo Horizonte" />
    <meta name="geo.position" content="-19.9337;-43.9381" />
    <meta name="ICBM" content="-19.9337, -43.9381" />

    <!-- === OPEN GRAPH === -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Andreia Fonseca · Terapeuta Tântrica" />
    <meta property="og:title" content="Andreia Fonseca · Terapeuta Tântrica em Belo Horizonte" />
    <meta property="og:description" content="Terapia tântrica profissional em Belo Horizonte. Sessões individuais e para casais. +5 anos de experiência, +4.000 atendimentos, sigilo absoluto." />
    <meta property="og:url" content="https://andreia-tantrica-bh.com.br" />
    <meta property="og:image" content="https://i.postimg.cc/KjgR6Yf8/DSCF9986.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Andreia Fonseca, terapeuta tântrica em Belo Horizonte" />
    <meta property="og:locale" content="pt_BR" />

    <!-- === TWITTER CARDS === -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Andreia Fonseca · Terapeuta Tântrica em Belo Horizonte" />
    <meta name="twitter:description" content="Terapia tântrica profissional em Belo Horizonte. Sessões individuais e para casais. Espaço seguro, sigilo absoluto." />
    <meta name="twitter:image" content="https://i.postimg.cc/KjgR6Yf8/DSCF9986.jpg" />
    <meta name="twitter:image:alt" content="Andreia Fonseca, terapeuta tântrica em Belo Horizonte" />

    <!-- === FAVICON === -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    
    <!-- === PRECONNECT E DNS-PREFETCH === -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />
    <link rel="dns-prefetch" href="https://unpkg.com" />
    <link rel="dns-prefetch" href="https://images.unsplash.com" />
    <link rel="dns-prefetch" href="https://i.postimg.cc" />

    <!-- === GOOGLE FONTS === -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

    <!-- === JSON-LD Services === -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Andreia Fonseca - Terapia Tântrica",
        "image": "https://i.postimg.cc/KjgR6Yf8/DSCF9986.jpg",
        "telephone": "+5531982003004",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Belo Horizonte",
          "addressRegion": "MG",
          "addressCountry": "BR"
        },
        "description": "Terapia tântrica individual, sessões para casais, imersão sensorial e cursos em Belo Horizonte. Um espaço seguro para reconexão com o prazer.",
        "priceRange": "$$$$"
      }
    </script>
  </head>`;

html = html.replace(/<head>[\s\S]*?<\/head>/i, newHead);

// Fix images with alt, lang, loading lazy, decoding async
html = html.replace(/<img([^>]*)>/g, (match, attrs) => {
  let newAttrs = attrs;
  
  // Clean up any existing duplicate or malformed attributes before appending
  // This helps avoiding issues.

  if (!/loading=/.test(newAttrs)) {
    // Only set eager if it's the hero image, else lazy
    if (newAttrs.includes('hero-bg-img') || newAttrs.includes('https://i.postimg.cc/4yGMV07N/Chat-GPT-Image-10-de-mai-de-2026-21-38-08.png')) {
      newAttrs += ' loading="eager"';
    } else {
      newAttrs += ' loading="lazy"';
    }
  }
  
  if (!/decoding=/.test(newAttrs)) {
    newAttrs += ' decoding="async"';
  }
  
  if (!/lang=/.test(newAttrs)) {
    newAttrs += ' lang="pt-BR"';
  }
  
  if (!/alt=/.test(newAttrs)) {
      newAttrs += ' alt=""';
  }
  
  return `<img${newAttrs}>`;
});

fs.writeFileSync('index.html', html, 'utf8');
