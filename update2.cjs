const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Update FUNIL_SERVICOS_LABEL 5 and 7
html = html.replace("'5': 'Formação Avançada em Tantra',", "'5': 'Curso de Aplicação do Repertório Sexual',\n      '7': 'Programa de Reconexão com o Prazer'");

// Update FUNIL_MENSAGENS 5 and 7
const newMsgs = `'5': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Curso de Aplicação do Repertório Sexual*. Quero aprender a aplicar o repertório sexual de forma consciente, com presença e intenção.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre os pré-requisitos, conteúdo e valores. 🌹\`,
      '6': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Treinamento Tântrico para Casais* — quero aprender, junto com meu(minha) parceiro(a), novas formas de criar conexão e prazer.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona o treinamento, duração e valores. 🌹\`,
      '7': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Programa de Reconexão com o Prazer (4 Sessões)* — quero trilhar um caminho guiado para conhecer e sentir meu corpo de verdade.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre o formato das sessões, valores e agendamento. 🌹\``;

html = html.replace(/'5':[\s\S]*?'6':[\s\S]*?`/, newMsgs);

// Update Modal 5 Button HTML inside funil
const funilBtn5Old = `<p class="funil-option-compact-titulo">Formação Avançada em Tantra</p>
              <p class="funil-option-compact-sub">Aprofundamento da prática</p>`;
const funilBtn5New = `<p class="funil-option-compact-titulo">Curso de Aplicação</p>
              <p class="funil-option-compact-sub">Repertório sexual com intenção</p>`;
html = html.replace(funilBtn5Old, funilBtn5New);

// Add Funil Button 7
const funilBtn7 = `
          <button type="button" class="funil-option-compact funil-option" data-servico="7">
            <div class="funil-option-compact-header">
              <span class="funil-option-numero">07</span>
              <span class="funil-option-check">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
            </div>
            <div class="funil-option-compact-body">
              <p class="funil-option-compact-titulo">Programa de Reconexão</p>
              <p class="funil-option-compact-sub">4 sessões de evolução guiada</p>
            </div>
          </button>
`;

if (!html.includes('data-servico="7"')) {
    html = html.replace('</button>\n\n        </div>\n\n        <div class="mt-8 flex justify-end">', '</button>\n' + funilBtn7 + '\n        </div>\n\n        <div class="mt-8 flex justify-end">');
}

fs.writeFileSync('index.html', html);
