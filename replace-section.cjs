const fs = require('fs');

const replacementText = `<!-- SEÇÃO: PROTOCOLOS DE ATENDIMENTO (SERVIÇOS) -->
<section id="servicos" class="relative py-24 md:py-32 bg-onyx">
  
  <!-- Cabeçalho da seção -->
  <div class="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-20" data-animate>
    <p class="text-xs font-medium uppercase tracking-[1.5px] text-champagne mb-4">Nossos encontros</p>
    <h2 class="font-serif text-4xl md:text-5xl text-marfim leading-tight mb-6" style="letter-spacing: -0.3px;">
      Protocolos de <em class="text-champagne font-normal">atendimento</em>
    </h2>
    <p class="text-base md:text-lg text-mauve font-light leading-relaxed max-w-2xl mx-auto">
      Cada serviço é pensado para um momento específico da sua jornada. Escolha o que mais ressoa com você agora.
    </p>
  </div>

  <!-- Grid de 7 cards: 3 colunas desktop, 2 tablet, 1 mobile -->
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

      <!-- CARD 01: Sessão Tântrica Individual -->
      <article 
        class="bg-berinjela/40 backdrop-blur-sm rounded-xl overflow-hidden border border-champagne/20 border-t-2 border-t-champagne hover:bg-berinjela/60 hover:border-champagne/40 hover:-translate-y-1 transition-all duration-400 flex flex-col"
        data-animate
      >
        <div class="relative overflow-hidden" style="height: 220px;">
          <img 
            src="https://images.unsplash.com/photo-1602874801006-7e3b7c41cae6?w=800&q=80" 
            alt="Sessão Tântrica Individual"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-onyx/40"></div>
          <span class="absolute top-4 right-5 font-serif italic text-3xl text-champagne/70">01</span>
        </div>
        <div class="p-7 flex flex-col flex-grow text-center md:text-left">
          <p class="text-[11px] font-medium uppercase tracking-[1.5px] text-magenta mb-2">Serviço 01</p>
          <h3 class="font-serif text-2xl text-marfim leading-tight mb-3">Sessão Tântrica Individual</h3>
          <p class="font-serif italic text-[17px] text-magenta leading-snug mb-4">Uma experiência intensa de reconexão com o seu prazer</p>
          <p class="text-sm text-mauve leading-relaxed mb-6 flex-grow">
            Uma sessão individual focada em despertar sensações, ampliar a sensibilidade e reconectar você com o seu corpo. Através de toques conscientes e conduzidos com respeito, você vivencia o prazer de forma mais presente e profunda.
          </p>
          <button 
            onclick="openModal('modal-servico-1')"
            class="w-full bg-transparent border border-bordo text-magenta hover:bg-magenta hover:text-marfim hover:border-magenta px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            Conheça essa experiência
          </button>
        </div>
      </article>

      <!-- CARD 02: Sessão Tântrica para Casais -->
      <article 
        class="bg-berinjela/40 backdrop-blur-sm rounded-xl overflow-hidden border border-champagne/20 border-t-2 border-t-champagne hover:bg-berinjela/60 hover:border-champagne/40 hover:-translate-y-1 transition-all duration-400 flex flex-col"
        data-animate
      >
        <div class="relative overflow-hidden" style="height: 220px;">
          <img 
            src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80" 
            alt="Sessão Tântrica para Casais"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-onyx/40"></div>
          <span class="absolute top-4 right-5 font-serif italic text-3xl text-champagne/70">02</span>
        </div>
        <div class="p-7 flex flex-col flex-grow text-center md:text-left">
          <p class="text-[11px] font-medium uppercase tracking-[1.5px] text-magenta mb-2">Serviço 02</p>
          <h3 class="font-serif text-2xl text-marfim leading-tight mb-3">Sessão Tântrica para Casais</h3>
          <p class="font-serif italic text-[17px] text-magenta leading-snug mb-4">Redescubram o prazer de estarem juntos</p>
          <p class="text-sm text-mauve leading-relaxed mb-6 flex-grow">
            Uma experiência guiada para casais que desejam fortalecer a conexão, despertar o desejo e sair da rotina. Mais presença, cumplicidade e novas formas de sentir o outro.
          </p>
          <button 
            onclick="openModal('modal-servico-2')"
            class="w-full bg-transparent border border-bordo text-magenta hover:bg-magenta hover:text-marfim hover:border-magenta px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            Conheça essa experiência
          </button>
        </div>
      </article>

      <!-- CARD 03: Imersão Sensorial do Toque -->
      <article 
        class="bg-berinjela/40 backdrop-blur-sm rounded-xl overflow-hidden border border-champagne/20 border-t-2 border-t-champagne hover:bg-berinjela/60 hover:border-champagne/40 hover:-translate-y-1 transition-all duration-400 flex flex-col"
        data-animate
      >
        <div class="relative overflow-hidden" style="height: 220px;">
          <img 
            src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80" 
            alt="Imersão Sensorial do Toque"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-onyx/40"></div>
          <span class="absolute top-4 right-5 font-serif italic text-3xl text-champagne/70">03</span>
        </div>
        <div class="p-7 flex flex-col flex-grow text-center md:text-left">
          <p class="text-[11px] font-medium uppercase tracking-[1.5px] text-magenta mb-2">Serviço 03</p>
          <h3 class="font-serif text-2xl text-marfim leading-tight mb-3">Imersão Sensorial do Toque</h3>
          <p class="font-serif italic text-[17px] text-magenta leading-snug mb-4">Aprenda a despertar sensações através do toque</p>
          <p class="text-sm text-mauve leading-relaxed mb-6 flex-grow">
            Um mini curso prático para desenvolver sensibilidade, presença e condução no toque. Aprenda técnicas que ampliam o prazer e criam experiências marcantes a dois.
          </p>
          <button 
            onclick="openModal('modal-servico-3')"
            class="w-full bg-transparent border border-bordo text-magenta hover:bg-magenta hover:text-marfim hover:border-magenta px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            Conheça essa experiência
          </button>
        </div>
      </article>

      <!-- CARD 04: Formação em Massagem Tântrica - Nível Inicial -->
      <article 
        class="bg-berinjela/40 backdrop-blur-sm rounded-xl overflow-hidden border border-champagne/20 border-t-2 border-t-champagne hover:bg-berinjela/60 hover:border-champagne/40 hover:-translate-y-1 transition-all duration-400 flex flex-col"
        data-animate
      >
        <div class="relative overflow-hidden" style="height: 220px;">
          <img 
            src="https://images.unsplash.com/photo-1611072965169-6c4e7b3f3f4e?w=800&q=80" 
            alt="Formação em Massagem Tântrica"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-onyx/40"></div>
          <span class="absolute top-4 right-5 font-serif italic text-3xl text-champagne/70">04</span>
        </div>
        <div class="p-7 flex flex-col flex-grow text-center md:text-left">
          <p class="text-[11px] font-medium uppercase tracking-[1.5px] text-magenta mb-2">Serviço 04</p>
          <h3 class="font-serif text-2xl text-marfim leading-tight mb-3">Formação em Massagem Tântrica — Nível Inicial</h3>
          <p class="font-serif italic text-[17px] text-magenta leading-snug mb-4">Aprenda do zero, com prática e acompanhamento</p>
          <p class="text-sm text-mauve leading-relaxed mb-6 flex-grow">
            Um curso individual e guiado para quem deseja aprender a técnica com profundidade e segurança. Uma experiência prática, privada e totalmente focada no seu desenvolvimento.
          </p>
          <button 
            onclick="openModal('modal-servico-4')"
            class="w-full bg-transparent border border-bordo text-magenta hover:bg-magenta hover:text-marfim hover:border-magenta px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            Conheça essa experiência
          </button>
        </div>
      </article>

      <!-- CARD 05: Curso de Aplicação do Repertório Sexual -->
      <article 
        class="bg-berinjela/40 backdrop-blur-sm rounded-xl overflow-hidden border border-champagne/20 border-t-2 border-t-champagne hover:bg-berinjela/60 hover:border-champagne/40 hover:-translate-y-1 transition-all duration-400 flex flex-col"
        data-animate
      >
        <div class="relative overflow-hidden" style="height: 220px;">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80" 
            alt="Curso de Aplicação do Repertório Sexual"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-onyx/40"></div>
          <span class="absolute top-4 right-5 font-serif italic text-3xl text-champagne/70">05</span>
        </div>
        <div class="p-7 flex flex-col flex-grow text-center md:text-left">
          <p class="text-[11px] font-medium uppercase tracking-[1.5px] text-magenta mb-2">Serviço 05</p>
          <h3 class="font-serif text-2xl text-marfim leading-tight mb-3">Curso de Aplicação do Repertório Sexual</h3>
          <p class="font-serif italic text-[17px] text-magenta leading-snug mb-4">Aprenda a aplicar o repertório sexual com presença e intenção</p>
          <p class="text-sm text-mauve leading-relaxed mb-6 flex-grow">
            Um curso prático voltado para a aplicação do repertório sexual de forma consciente. Aprenda técnicas, posturas e dinâmicas que enriquecem a vivência da sexualidade com mais presença, comunicação e profundidade.
          </p>
          <button 
            onclick="openModal('modal-servico-5')"
            class="w-full bg-transparent border border-bordo text-magenta hover:bg-magenta hover:text-marfim hover:border-magenta px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            Conheça essa experiência
          </button>
        </div>
      </article>

      <!-- CARD 06: Treinamento Tântrico para Casais -->
      <article 
        class="bg-berinjela/40 backdrop-blur-sm rounded-xl overflow-hidden border border-champagne/20 border-t-2 border-t-champagne hover:bg-berinjela/60 hover:border-champagne/40 hover:-translate-y-1 transition-all duration-400 flex flex-col"
        data-animate
      >
        <div class="relative overflow-hidden" style="height: 220px;">
          <img 
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80" 
            alt="Treinamento Tântrico para Casais"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-onyx/40"></div>
          <span class="absolute top-4 right-5 font-serif italic text-3xl text-champagne/70">06</span>
        </div>
        <div class="p-7 flex flex-col flex-grow text-center md:text-left">
          <p class="text-[11px] font-medium uppercase tracking-[1.5px] text-magenta mb-2">Serviço 06</p>
          <h3 class="font-serif text-2xl text-marfim leading-tight mb-3">Treinamento Tântrico para Casais</h3>
          <p class="font-serif italic text-[17px] text-magenta leading-snug mb-4">Aprendam juntos a criar experiências inesquecíveis</p>
          <p class="text-sm text-mauve leading-relaxed mb-6 flex-grow">
            Um treinamento exclusivo para casais que desejam explorar novas formas de prazer e conexão. Vocês aprendem, na prática, como conduzir experiências mais intensas e conscientes a dois.
          </p>
          <button 
            onclick="openModal('modal-servico-6')"
            class="w-full bg-transparent border border-bordo text-magenta hover:bg-magenta hover:text-marfim hover:border-magenta px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            Conheça essa experiência
          </button>
        </div>
      </article>

      <!-- CARD 07: Programa de Reconexão com o Prazer (4 Sessões) - centralizado na 3ª linha em desktop -->
      <article 
        class="bg-berinjela/40 backdrop-blur-sm rounded-xl overflow-hidden border border-champagne/20 border-t-2 border-t-champagne hover:bg-berinjela/60 hover:border-champagne/40 hover:-translate-y-1 transition-all duration-400 flex flex-col lg:col-start-2"
        data-animate
      >
        <div class="relative overflow-hidden" style="height: 220px;">
          <img 
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80" 
            alt="Programa de Reconexão com o Prazer"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-onyx/40"></div>
          <span class="absolute top-4 right-5 font-serif italic text-3xl text-champagne/70">07</span>
        </div>
        <div class="p-7 flex flex-col flex-grow text-center md:text-left">
          <p class="text-[11px] font-medium uppercase tracking-[1.5px] text-magenta mb-2">Serviço 07</p>
          <h3 class="font-serif text-2xl text-marfim leading-tight mb-3">Programa de Reconexão com o Prazer (4 Sessões)</h3>
          <p class="font-serif italic text-[17px] text-magenta leading-snug mb-4">Um caminho guiado para conhecer e sentir seu corpo de verdade</p>
          <p class="text-sm text-mauve leading-relaxed mb-6 flex-grow">
            Um protocolo em 4 encontros progressivos para desenvolver consciência corporal, comunicação e sensibilidade. Você aprende a reconhecer seus limites, expressar desejos e viver o prazer com mais clareza e segurança.
          </p>
          <button 
            onclick="openModal('modal-servico-7')"
            class="w-full bg-transparent border border-bordo text-magenta hover:bg-magenta hover:text-marfim hover:border-magenta px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
          >
            Conheça essa experiência
          </button>
        </div>
      </article>

    </div>
  </div>
</section>`;

let html = fs.readFileSync('index.html', 'utf8');

const regex = /<section\s+id="servicos"[\s\S]*?<\/section>/;

if (regex.test(html)) {
  html = html.replace(regex, replacementText);
  fs.writeFileSync('index.html', html);
  console.log("Successfully replaced the section.");
} else {
  console.log("Could not find the section.");
}
