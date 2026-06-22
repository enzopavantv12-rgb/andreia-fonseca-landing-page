const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update images in cards and wrap in .servico-card-image
const cards = [
    ['https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop', 'https://source.unsplash.com/600x400/?candle,flame,darkmood,velvet'],
    ['https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop', 'https://source.unsplash.com/600x400/?silk,fabric,texture,warm'],
    ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop', 'https://source.unsplash.com/600x400/?petals,oil,detail,warm'],
    ['https://images.unsplash.com/photo-1552845108-5f773a6e4e59?q=80&w=600&auto=format&fit=crop', 'https://source.unsplash.com/600x400/?oil,droplet,golden,minimal'],
    ['https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop', 'https://source.unsplash.com/600x400/?velvet,burgundy,texture,sensual'],
    ['https://images.unsplash.com/photo-1620063259966-21896860af0f?q=80&w=600&auto=format&fit=crop', 'https://source.unsplash.com/600x400/?candles,ambient,room,warm']
];

cards.forEach(([old, newUrl]) => {
    html = html.replace(old, newUrl);
});

// Update the wrapper
html = html.replace(/(<article class="servico-card-premium"[^>]*>[\s\n]*)<img src="([^"]+)" alt="([^"]+)" class="card-bg-image" \/>/g, '$1<div class="servico-card-image"><img src="$2" alt="$3" class="card-bg-image" /></div>');

const css_addition = `
    .servico-card-image {
      position: absolute;
      inset: 0;
      overflow: hidden;
      border-radius: inherit;
      z-index: 0;
    }
    .servico-card-image::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(31, 15, 26, 0.25) 0%,
        rgba(31, 15, 26, 0.05) 50%,
        rgba(31, 15, 26, 0.45) 100%
      );
      pointer-events: none;
    }
`;

if (!html.includes('.servico-card-image {')) {
    html = html.replace('.card-bg-image {', css_addition + '    .card-bg-image {');
}

// Rename service 5 card
html = html.replace('<h3 class="font-serif font-semibold text-[24px] text-marfim mb-2">Formação Avançada em Tantra</h3>', '<h3 class="font-serif font-semibold text-[24px] text-marfim mb-2">Curso de Aplicação do Repertório Sexual</h3>');
html = html.replace('<p class="font-sans font-medium text-[14px] text-magenta mb-4">Expanda suas possibilidades</p>', '<p class="font-sans font-medium text-[14px] text-magenta mb-4">Aprenda a aplicar o repertório sexual com presença e intenção</p>');
html = html.replace('<p class="font-sans font-normal text-[14px] leading-[1.6] text-mauve mb-6">Para quem já iniciou no tantra. Evolua sua sensibilidade e condução com novas possibilidades de conexão e percepção.</p>', '<p class="font-sans font-normal text-[14px] leading-[1.6] text-mauve mb-6">Um curso prático voltado para a aplicação do repertório sexual de forma consciente. Aprenda técnicas, posturas e dinâmicas que enriquecem a vivência da sexualidade com mais presença, comunicação e profundidade.</p>');

// Update Modal 5
const modal5Old = `      <div class="modal-servico-header">
        <span class="modal-servico-numero">05</span>
        <h2 class="modal-servico-titulo">Formação Avançada em Tantra</h2>
        <p class="modal-servico-subtitulo">Aprofunde sua prática e expanda suas possibilidades</p>
      </div>

      <div class="modal-servico-bloco">
        <p class="modal-servico-descricao">Para quem já iniciou no tantra e deseja evoluir. Esse curso aprofunda técnicas, percepção e condução, expandindo seu repertório e desenvolvendo mais segurança em cada experiência.</p>
      </div>

      <div class="modal-servico-bloco">
        <h3 class="modal-servico-bloco-titulo">Indicado para</h3>
        <ul class="modal-servico-lista">
          <li>Quem já realizou o curso básico</li>
          <li>Aprofundar prática e sensibilidade</li>
          <li>Desenvolver mais domínio nas técnicas</li>
        </ul>
      </div>`;
const modal5New = `      <div class="modal-servico-header">
        <span class="modal-servico-numero">05</span>
        <h2 class="modal-servico-titulo">Curso de Aplicação do Repertório Sexual</h2>
        <p class="modal-servico-subtitulo">Aprenda a aplicar o repertório sexual com presença e intenção</p>
      </div>

      <div class="modal-servico-bloco">
        <p class="modal-servico-descricao">Este curso foi pensado para quem deseja desenvolver e aplicar repertório sexual com profundidade, consciência e segurança. Diferente de uma formação técnica, o foco aqui é a aplicação prática — explorar dinâmicas, posturas e variações que enriquecem a vivência da sexualidade.</p>
        <p class="modal-servico-descricao">Você aprende a integrar repertório com presença, comunicação e intenção, transformando o ato em uma experiência mais consciente e conectada. Tudo é conduzido em ambiente reservado, com orientação direta e respeito absoluto ao seu ritmo.</p>
        <p class="modal-servico-descricao">O curso é estruturado para que você saia com novas possibilidades práticas que pode aplicar imediatamente, sem dependência de técnicas decoradas — e sim com confiança no próprio corpo e na própria vivência.</p>
      </div>

      <div class="modal-servico-bloco">
        <h3 class="modal-servico-bloco-titulo">Para quem é indicado</h3>
        <ul class="modal-servico-lista">
          <li>Pessoas que desejam ampliar o repertório sexual de forma consciente</li>
          <li>Quem quer aplicar o que aprende com mais segurança e presença</li>
          <li>Quem busca aprofundar a vivência além da técnica decorada</li>
          <li>Casais que desejam explorar juntos novas dinâmicas</li>
        </ul>
      </div>
      
      <div class="modal-servico-bloco">
        <h3 class="modal-servico-bloco-titulo">O que esperar</h3>
        <ul class="modal-servico-lista">
          <li>Curso prático aplicado, com orientação direta</li>
          <li>Ambiente reservado e respeitoso</li>
          <li>Foco na aplicação real, não em teoria</li>
          <li>Trabalho com presença, intenção e comunicação</li>
        </ul>
      </div>

      <div class="modal-servico-bloco">
        <h3 class="modal-servico-bloco-titulo">Benefícios</h3>
        <ul class="modal-servico-lista">
          <li>Ampliação do repertório sexual aplicado</li>
          <li>Mais confiança e presença na vivência</li>
          <li>Comunicação mais clara sobre desejos</li>
          <li>Repertório integrado à própria experiência</li>
        </ul>
      </div>`;
html = html.replace(modal5Old, modal5New);

// Replace descriptions
function replaceDescriptions(html, modal_id, new_paragraphs) {
    const startIdx = html.indexOf('id="' + modal_id + '"');
    if (startIdx === -1) return html;
    
    // Find the first modal-servico-bloco inside this modal
    const startStr = '<div class="modal-servico-bloco">';
    const blocoStart = html.indexOf(startStr, startIdx);
    const endStr = '</div>';
    const blocoEnd = html.indexOf(endStr, blocoStart) + endStr.length;
    
    let newBloco = '<div class="modal-servico-bloco">\n';
    new_paragraphs.forEach(p => {
        newBloco += '        <p class="modal-servico-descricao">' + p + '</p>\n';
    });
    newBloco += '      </div>';
    
    return html.substring(0, blocoStart) + newBloco + html.substring(blocoEnd);
}

const m1_p = [
    "A Sessão Tântrica Individual é uma experiência profunda de reconexão com o seu corpo e com o seu prazer. Tudo começa com uma conversa inicial, onde você pode expressar suas expectativas, limites e intenções para a sessão.",
    "A partir disso, iniciamos um processo conduzido com presença e respeito, utilizando toques sutis e progressivos que estimulam a sensibilidade do corpo como um todo. A proposta é desacelerar, sair do automático e permitir que você sinta cada estímulo com mais consciência.",
    "Durante a sessão, técnicas específicas são aplicadas para ampliar as sensações e despertar regiões que muitas vezes estão desconectadas ou pouco exploradas. Isso permite uma vivência mais intensa, consciente e integrada do prazer.",
    "Mais do que uma experiência física, é um momento de escuta do corpo, onde você pode reconhecer suas respostas, seus limites e suas possibilidades de forma segura."
];
html = replaceDescriptions(html, 'modal-servico-1', m1_p);

const m2_p = [
    "A Sessão para Casais é um convite para sair da rotina e viver uma experiência diferente de conexão, presença e intimidade.",
    "Começamos com uma conversa para alinhar expectativas, limites e desejos, criando um ambiente seguro para ambos. A partir disso, conduzimos a experiência de forma leve e respeitosa.",
    "Durante a sessão, o casal permanece junto, podendo observar, participar e se envolver no processo, fortalecendo a cumplicidade e a confiança.",
    "A proposta é ampliar a percepção do toque, estimular a conexão e proporcionar novas formas de sentir o outro."
];
html = replaceDescriptions(html, 'modal-servico-2', m2_p);

const m3_p = [
    "Este mini curso foi criado para quem deseja desenvolver sensibilidade e aprender a conduzir experiências mais profundas através do toque.",
    "Você será guiado(a) em técnicas que ampliam a percepção corporal e ajudam a despertar novas sensações em quem está sendo tocado, criando experiências marcantes e profundas.",
    "O foco é desenvolver presença, intenção e consciência ao tocar o outro — três pilares que transformam o toque comum em uma experiência sensorial completa."
];
html = replaceDescriptions(html, 'modal-servico-3', m3_p);

const m4_p = [
    "Uma formação individual, prática e totalmente guiada para quem deseja aprender a Massagem Tântrica do zero, com profundidade e segurança.",
    "O curso acontece em ambiente privado, com acompanhamento direto e possibilidade de prática com modelo. Cada etapa é explicada, demonstrada e depois praticada, garantindo que você compreenda não apenas a técnica, mas também a intenção por trás de cada movimento.",
    "O foco é desenvolver segurança, técnica e presença — três fundamentos que garantem que você saia da formação preparado(a) para conduzir experiências com confiança real."
];
html = replaceDescriptions(html, 'modal-servico-4', m4_p);

const m6_p = [
    "Um treinamento prático onde o casal aprende, juntos, técnicas para aplicar entre si — fortalecendo conexão, intimidade e prazer de forma consciente.",
    "A proposta é diferente de uma sessão tradicional: aqui vocês são os protagonistas, aprendendo a conduzir um ao outro. Cada técnica é explicada, demonstrada e depois praticada em duplas, com orientação direta para ajustar e refinar.",
    "Ao final, vocês saem não apenas com uma experiência vivida, mas com ferramentas práticas que podem ser aplicadas em casa, transformando a rotina e criando novas formas de conexão a longo prazo."
];
html = replaceDescriptions(html, 'modal-servico-6', m6_p);

// Add Card 7
const card7 = `

        <!-- Serviço 7 -->
        <article class="servico-card-premium block mx-auto w-full max-w-[380px] sm:max-w-none md:col-span-2 lg:col-span-3 lg:w-[calc(33.333%-16px)]" onclick="openModal('modal-servico-7')" style="transition-delay: 150ms;">
          <div class="servico-card-image"><img src="https://source.unsplash.com/600x400/?stones,water,zen,dark" alt="Programa de Reconexão" class="card-bg-image" /></div>
          <div class="progressive-blur-layers">
            <div class="blur-layer"></div><div class="blur-layer"></div><div class="blur-layer"></div><div class="blur-layer"></div><div class="blur-layer"></div>
          </div>
          <div class="card-gradient-overlay"></div>
          
          <div class="card-content">
            <span class="card-number">07</span>
            <h3 class="font-serif font-semibold text-[24px] text-marfim mb-2">Programa de Reconexão com o Prazer (4 Sessões)</h3>
            <p class="font-sans font-medium text-[14px] text-magenta mb-4">Um caminho guiado para conhecer e sentir seu corpo de verdade</p>
            
            <div class="card-description">
              <div class="card-description-inner">
                <p class="font-sans font-normal text-[14px] leading-[1.6] text-mauve mb-6">Um protocolo em 4 encontros progressivos para desenvolver consciência corporal, comunicação e sensibilidade. Você aprende a reconhecer seus limites, expressar desejos e viver o prazer com mais clareza e segurança.</p>
              </div>
            </div>
            
            <button class="card-cta font-sans font-medium text-[13px] uppercase tracking-wider py-3 rounded-xl mt-2">Conheça essa experiência</button>
          </div>
        </article>`;

if (!html.includes('<!-- Serviço 7 -->')) {
    html = html.replace('<!-- Serviço 6 -->', card7 + '\n\n        <!-- Serviço 6 -->');
}

const modal7 = `
  <div id="modal-servico-7" class="hidden fixed inset-0 z-[100] flex-col justify-center items-center opacity-0 transition-opacity duration-300 px-4 py-8">
    <div class="absolute inset-0 bg-onyx/90 backdrop-blur-sm" onclick="closeModal('modal-servico-7')"></div>
    <div class="relative w-full max-w-2xl max-h-full overflow-y-auto bg-onyx border border-champagne/30 rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col">
      <button onclick="closeModal('modal-servico-7')" class="absolute top-4 right-4 md:top-6 md:right-6 text-champagne/60 hover:text-champagne transition-colors z-10 w-10 h-10 flex items-center justify-center rounded-full bg-onyx/50 border border-champagne/20">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="modal-servico-header">
        <span class="modal-servico-numero">07</span>
        <h2 class="modal-servico-titulo">Programa de Reconexão com o Prazer (4 Sessões)</h2>
        <p class="modal-servico-subtitulo">Um processo guiado para desenvolver consciência e comunicação corporal</p>
      </div>

      <div class="modal-servico-bloco">
        <p class="modal-servico-descricao">O Programa de Reconexão com o Prazer é um protocolo estruturado em 4 sessões progressivas, pensado para quem busca uma evolução gradual e guiada na relação com o próprio corpo.</p>
        <p class="modal-servico-descricao">Cada encontro trabalha camadas diferentes: percepção, comunicação, limites e expressão de desejos. Você aprende, de forma prática e consciente, a identificar onde quer ser tocado, como expressar o que sente, e como respeitar seu próprio ritmo.</p>
        <p class="modal-servico-descricao">Diferente de uma sessão única, esse formato permite aprofundamento real ao longo do tempo. As sessões são espaçadas de forma a respeitar seu processo de integração, com orientações entre os encontros para que você desenvolva a percepção também no seu dia a dia.</p>
        <p class="modal-servico-descricao">Ao final do processo, você terá não apenas vivido a experiência, mas integrado ferramentas práticas de autoconhecimento corporal que continuam ressoando muito além das sessões.</p>
      </div>

      <div class="modal-servico-bloco">
        <h3 class="modal-servico-bloco-titulo">Para quem é indicado</h3>
        <ul class="modal-servico-lista">
          <li>Pessoas que desejam desenvolver mais consciência corporal de forma gradual</li>
          <li>Quem sente dificuldade em identificar ou expressar desejos</li>
          <li>Quem quer aprender a comunicar limites com mais clareza</li>
          <li>Pessoas que buscam uma evolução guiada e estruturada</li>
        </ul>
      </div>

      <div class="modal-servico-bloco">
        <h3 class="modal-servico-bloco-titulo">O que esperar</h3>
        <ul class="modal-servico-lista">
          <li>Processo estruturado em 4 etapas progressivas</li>
          <li>Desenvolvimento gradual da percepção corporal</li>
          <li>Aprendizado prático sobre comunicação e consentimento</li>
          <li>Maior clareza sobre limites, desejos e sensações</li>
          <li>Orientações para integração entre as sessões</li>
        </ul>
      </div>

      <div class="modal-servico-bloco">
        <h3 class="modal-servico-bloco-titulo">Benefícios</h3>
        <ul class="modal-servico-lista">
          <li>Autoconhecimento corporal aprofundado</li>
          <li>Comunicação mais clara</li>
          <li>Clareza sobre limites e desejos</li>
          <li>Mais segurança e presença no corpo</li>
        </ul>
      </div>

      <div class="modal-servico-footer">
        <span class="modal-servico-nota">Protocolo de 4 sessões · Evolução gradual</span>
        <a href="#" class="modal-servico-cta" onclick="event.preventDefault(); closeModal('modal-servico-7'); setTimeout(() => abrirFunil('7'), 300);" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
          <img src="https://i.postimg.cc/vHxKTV0Z/whatsapp-(9).png" alt="" style="width: 22px; height: 22px; flex-shrink: 0; filter: brightness(0) invert(1);" />
          <span>Quero agendar</span>
        </a>
      </div>
    </div>
  </div>`;
if (!html.includes('id="modal-servico-7"')) {
    html = html.replace('<section id="o-que-e"', modal7 + '\n\n  <section id="o-que-e"');
}

fs.writeFileSync('index.html', html);
