const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Sessão Tântrica Individual",
        "description": "Uma sessão individual focada em despertar sensações, ampliar a sensibilidade e reconectar você com o seu corpo. Através de toques conscientes e conduzidos com respeito, você vivencia o prazer de forma mais presente e profunda.",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Andreia Fonseca - Terapia Tântrica"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Sessão Tântrica para Casais",
        "description": "Uma experiência guiada para casais que desejam fortalecer a conexão, despertar o desejo e sair da rotina. Mais presença, cumplicidade e novas formas de sentir o outro.",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Andreia Fonseca - Terapia Tântrica"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Imersão Sensorial do Toque",
        "description": "Um mini curso prático para desenvolver sensibilidade, presença e condução no toque. Aprenda técnicas que ampliam o prazer e criam experiências marcantes a dois.",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Andreia Fonseca - Terapia Tântrica"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Formação em Massagem Tântrica — Nível Inicial",
        "description": "Um curso individual e guiado para quem deseja aprender a técnica com profundidade e segurança. Uma experiência prática, privada e totalmente focada no seu desenvolvimento.",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Andreia Fonseca - Terapia Tântrica"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Curso de Aplicação do Repertório Sexual",
        "description": "Um curso prático voltado para a aplicação do repertório sexual de forma consciente. Aprenda técnicas, posturas e dinâmicas que enriquecem a vivência da sexualidade com mais presença, comunicação e profundidade.",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Andreia Fonseca - Terapia Tântrica"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Treinamento Tântrico para Casais",
        "description": "Um treinamento exclusivo para casais que desejam explorar novas formas de prazer e conexão. Vocês aprendem, na prática, como conduzir experiências mais intensas e conscientes a dois.",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Andreia Fonseca - Terapia Tântrica"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "name": "Programa de Reconexão com o Prazer (4 Sessões)",
        "description": "Um protocolo em 4 encontros progressivos para desenvolver consciência corporal, comunicação e sensibilidade. Você aprende a reconhecer seus limites, expressar desejos e viver o prazer com mais clareza e segurança.",
        "provider": {
          "@type": "HealthAndBeautyBusiness",
          "name": "Andreia Fonseca - Terapia Tântrica"
        }
      }
    }
  ]
};

const newJsonLdScript = `\n    <script type="application/ld+json">\n      ${JSON.stringify(servicesJsonLd, null, 2).replace(/\\n/g, '\n      ')}\n    </script>`;

const businessJsonLdEndTag = '</script>';
const expectedBusinessJsonLd = '"priceRange": "$"';

if (html.includes(expectedBusinessJsonLd)) {
    const endTagIndex = html.indexOf(businessJsonLdEndTag, html.indexOf(expectedBusinessJsonLd));
    if (endTagIndex !== -1) {
        html = html.slice(0, endTagIndex + businessJsonLdEndTag.length) + newJsonLdScript + html.slice(endTagIndex + businessJsonLdEndTag.length);
        fs.writeFileSync('index.html', html);
        console.log("Services JSON-LD added.");
    } else {
        console.log("Couldn't find the end of the script tag.");
    }
} else {
    console.log("Couldn't find the existing business JSON LD snippet.");
}
