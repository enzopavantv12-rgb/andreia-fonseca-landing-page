const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetStrOld = `      // Mapeamento de serviços (id → label legível para resumo)
      const FUNIL_SERVICOS_LABEL = {
        '1': 'Sessão Tântrica Individual',
        '2': 'Sessão Tântrica para Casais',
        '3': 'Imersão Sensorial do Toque',
        '4': 'Formação em Massagem Tântrica (Inicial)',
        '5': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Curso de Aplicação do Repertório Sexual*. Quero aprender a aplicar o repertório sexual de forma consciente, com presença e intenção.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre os pré-requisitos, conteúdo e valores. 🌹\`,
        '6': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Treinamento Tântrico para Casais* — quero aprender, junto com meu(minha) parceiro(a), novas formas de criar conexão e prazer.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona o treinamento, duração e valores. 🌹\`,
        '7': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Programa de Reconexão com o Prazer (4 Sessões)* — quero trilhar um caminho guiado para conhecer e sentir meu corpo de verdade.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre o formato das sessões, valores e agendamento. 🌹\`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Sessão Tântrica Individual* e gostaria de me reconectar comigo mesma(o) e com o meu prazer.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona, valores e disponibilidade. 🌹\`,
        '2': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Sessão Tântrica para Casais* — quero viver uma experiência de mais conexão e intimidade com meu(minha) parceiro(a).\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona a sessão para casais, valores e como agendar. 🌹\`,
        '3': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Imersão Sensorial do Toque* — quero aprender a conduzir experiências através do toque consciente.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre o conteúdo do mini curso, duração e valores. 🌹\`,
        '4': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Formação em Massagem Tântrica — Nível Inicial*. Quero aprender a técnica do zero, com profundidade e segurança.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre a metodologia, duração, valores e como ingressar. 🌹\`,
        '5': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Formação Avançada em Tantra*. Quero aprofundar minha prática e expandir minhas possibilidades.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre os pré-requisitos, conteúdo e valores. 🌹\`,
        '6': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Treinamento Tântrico para Casais* — quero aprender, junto com meu(minha) parceiro(a), novas formas de criar conexão e prazer.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona o treinamento, duração e valores. 🌹\`
      };`;

const targetStrNew = `      // Mapeamento de serviços (id → label legível para resumo)
      const FUNIL_SERVICOS_LABEL = {
        '1': 'Sessão Tântrica Individual',
        '2': 'Sessão Tântrica para Casais',
        '3': 'Imersão Sensorial do Toque',
        '4': 'Formação em Massagem Tântrica (Inicial)',
        '5': 'Curso de Aplicação do Repertório Sexual',
        '6': 'Treinamento Tântrico para Casais',
        '7': 'Programa de Reconexão com o Prazer'
      };

      const FUNIL_MENSAGENS = {
        '1': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Sessão Tântrica Individual* e gostaria de me reconectar comigo mesma(o) e com o meu prazer.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona, valores e disponibilidade. 🌹\`,
        '2': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Sessão Tântrica para Casais* — quero viver uma experiência de mais conexão e intimidade com meu(minha) parceiro(a).\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona a sessão para casais, valores e como agendar. 🌹\`,
        '3': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Imersão Sensorial do Toque* — quero aprender a conduzir experiências através do toque consciente.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre o conteúdo do mini curso, duração e valores. 🌹\`,
        '4': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse na *Formação em Massagem Tântrica — Nível Inicial*. Quero aprender a técnica do zero, com profundidade e segurança.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre a metodologia, duração, valores e como ingressar. 🌹\`,
        '5': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Curso de Aplicação do Repertório Sexual*. Quero aprender a aplicar o repertório sexual de forma consciente, com presença e intenção.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre os pré-requisitos, conteúdo e valores. 🌹\`,
        '6': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Treinamento Tântrico para Casais* — quero aprender, junto com meu(minha) parceiro(a), novas formas de criar conexão e prazer.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre como funciona o treinamento, duração e valores. 🌹\`,
        '7': (nome, exp) => \`Olá Andreia! Sou \${nome}.\\n\\nTenho interesse no *Programa de Reconexão com o Prazer (4 Sessões)* — quero trilhar um caminho guiado para conhecer e sentir meu corpo de verdade.\\n\\nSobre tantra: \${textoExperiencia(exp)}.\\n\\nGostaria de saber mais sobre o formato das sessões, valores e agendamento. 🌹\`
      };`;

if (!html.includes('const FUNIL_MENSAGENS = {')) {     
    html = html.replace(targetStrOld, targetStrNew);
    if (!html.includes('const FUNIL_MENSAGENS = {')) {
        console.log("Could not replace block.");
    }
} else {
    console.log("Already has FUNIL_MENSAGENS");
}

fs.writeFileSync('index.html', html);
