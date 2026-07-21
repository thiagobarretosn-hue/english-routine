/* Lição 47 — I will travel tonight. */
window.LIVRO.registrar({
  meta: {
    volume: 1,
    volumeNome: "Present",
    capitulo: 7,
    capituloNome: "Um novo começo",
    licao: 47,
    tituloEn: "I will travel tonight.",
    tituloPt: "Eu irei viajar hoje à noite."
  },

  hero: {
    time: "VOLUME 1 · CAP. 7 — UM NOVO COMEÇO · LIÇÃO 47",
    en: "I will travel tonight.",
    pt: "Eu irei viajar hoje à noite."
  },

  naturalLiteral: {
    natural: "I will travel tonight.",
    literal: "Eu irei viajar hoje à noite.",
    nota: "Em inglês, não se diz <span class=\"wrong\">today at night</span>. A palavra <span class=\"en\" data-say=\"tonight\">tonight</span> já resolve tudo em uma tacada só."
  },

  estrutura: {
    linhas: [
      { palavra: "I", classe: "pronome", funcao: "sujeito", traducao: "eu" },
      { palavra: "will travel", classe: "auxiliar + verbo", funcao: "a ação (no futuro)", traducao: "irei viajar", hl: true },
      { palavra: "tonight", classe: "advérbio", funcao: "quando", traducao: "hoje à noite" }
    ],
    nota: "O <span class=\"en\" data-say=\"will\">will</span> é um <em>verbo auxiliar</em>. Sozinho ele não tem tradução, mas joga o verbo seguinte para o futuro."
  },

  molde: {
    intro: "Para falar de planos e do que você vai fazer, use o auxiliar <strong>will</strong> seguido do verbo na forma base.",
    formula: "I + will + verbo + complemento",
    exemplos: [
      { en: "I will study tomorrow.", pt: "Eu vou estudar amanhã." },
      { en: "I will work later.", pt: "Eu vou trabalhar mais tarde." },
      { en: "I will sleep early.", pt: "Eu vou dormir cedo." }
    ],
    nota: "Diferente do português, o verbo da ação (study, work, sleep) <strong>nunca muda</strong> depois do <span class=\"en\" data-say=\"will\">will</span> — fica sempre na forma base."
  },

  conjugacao: {
    verbo: { base: "travel", past: "traveled", irregular: false, ptPast: "eu viajei", ptFut: "eu vou viajar" },
    nota: "No presente, só <strong>he / she / it</strong> ganham <strong>-s</strong>. O resto é igual.",
    linhas: [
      { p: "I",    en: "I travel",    say: "I travel a lot.",    pt: "eu viajo" },
      { p: "you",  en: "you travel",  say: "You travel a lot.",  pt: "você viaja" },
      { p: "we",   en: "we travel",   say: "We travel a lot.",   pt: "nós viajamos" },
      { p: "they", en: "they travel", say: "They travel a lot.", pt: "eles viajam" },
      { p: "he",   en: "he travel<strong>s</strong>",  say: "He travels a lot.",  pt: "ele viaja", hl: true },
      { p: "she",  en: "she travel<strong>s</strong>", say: "She travels a lot.", pt: "ela viaja", hl: true },
      { p: "it",   en: "it travel<strong>s</strong>",  say: "It travels a lot.",  pt: "(coisa) viaja", hl: true }
    ]
  },

  formas: {
    intro: "O <span class=\"en\" data-say=\"will\">will</span> junta com o <strong>not</strong> e vira <span class=\"en\" data-say=\"won't\">won't</span> na negativa. Para perguntar, ele pula para antes do sujeito.",
    linhas: [
      { tag: "neg", tagType: "bad", en: "I won't travel tonight.", pt: "Eu não vou viajar hoje à noite." },
      { tag: "?",   tagType: "bad", en: "Will you travel tonight?", pt: "Você vai viajar hoje à noite?" },
      { tag: "passado", en: "I traveled last night.", pt: "Eu viajei ontem à noite. (travel → traveled, regular)" },
      { tag: "futuro",  en: "I will travel tonight.", pt: "Eu vou viajar hoje à noite." }
    ],
    nota: "Repare no padrão que se repete no inglês inteiro: na pergunta, o auxiliar (<strong>do</strong>, <strong>did</strong>, <strong>will</strong>) vai para a frente."
  },

  speakNaturally: {
    intro: "Como um americano realmente diz que vai viajar hoje à noite:",
    linhas: [
      { en: "I'll travel tonight.", pt: "Vou viajar hoje à noite. (contração)" },
      { en: "I'm traveling tonight.", pt: "Vou viajar hoje à noite. (plano já marcado)" },
      { en: "I'm gonna travel tonight.", pt: "Vou viajar hoje à noite. (bem informal)" },
      { en: "I'm hitting the road tonight.", pt: "Vou pegar a estrada hoje à noite." }
    ],
    nota: "Nativos quase sempre contraem <span class=\"en\" data-say=\"I will\">I will</span> para <span class=\"en\" data-say=\"I'll\">I'll</span>. E usar <em>I'm ___ing</em> para planos marcados é super comum."
  },

  expressoes: [
    { en: "travel light", pt: "viajar leve (com pouca bagagem)" },
    { en: "hit the road", pt: "pegar a estrada / partir" },
    { en: "Safe travels!", pt: "Boa viagem!" },
    { en: "travel abroad", pt: "viajar para o exterior" }
  ],

  vocabulario: {
    linhas: [
      { palavra: "will", soa: "“uil”", sentido: "auxiliar de futuro" },
      { palavra: "travel", soa: "“TRÉ-vol”", sentido: "viajar" },
      { palavra: "tonight", soa: "“tu-NÁIT”", sentido: "hoje à noite" }
    ],
    fraseSoa: "ai uil TRÉ-vol tu-NÁIT",
    notaPron: "Em <span class=\"en\" data-say=\"travel\">travel</span> a força é na 1ª sílaba (“TRÉ-vol”). Já <span class=\"en\" data-say=\"tonight\">tonight</span> tem a força na 2ª: “tu-NÁIT”.",
    cultura: "No Brasil dizemos “viajar para a praia”. Em inglês raramente se usa “travel to the beach” — o natural é <span class=\"en\" data-say=\"go to the beach\">go to the beach</span>. <span class=\"en\" data-say=\"travel\">Travel</span> é mais para viagens longas."
  },

  erros: [
    { tipo: "bad", texto: "I will travel today night.", nota: "Não traduza “hoje à noite” palavra por palavra. O certo é <strong>tonight</strong>." },
    { tipo: "bad", texto: "I will to travel.", nota: "Depois do <strong>will</strong> o verbo vem puro, sem o <strong>to</strong>." },
    { tipo: "good", en: "I will travel tonight.", nota: "—" }
  ],

  dica: {
    texto: "Na fala do dia a dia, o <strong>will</strong> gruda no pronome. Acostume o ouvido com as contrações:",
    chips: ["I'll", "You'll", "He'll", "She'll"],
    nota: "Toque em cada uma. Elas soam quase como “ail”, “iúl”, “rill” e “chill” — bem rápidas."
  },

  dialogo: [
    { who: "A", en: "Will you travel tonight?", pt: "Você vai viajar hoje à noite?" },
    { who: "B", en: "Yes, I'll hit the road at 8.", pt: "Sim, vou pegar a estrada às 8." }
  ],

  exercicios: [
    { tipo: "completar", q: "Complete com o auxiliar do futuro:", before: "I", after: "travel tonight.", resposta: "will", dica: "a palavra que joga a ação para a frente." },
    { tipo: "reorganizar", q: "Coloque em ordem:", pecas: ["tonight", "travel", "will", "I"], resposta: "I will travel tonight." },
    { tipo: "traduzir", q: "Traduza para o inglês:", pt: "Eu não vou viajar amanhã.", resposta: "I won't travel tomorrow." },
    { tipo: "transformar", q: "Transforme", base: "I travel every month.", formas: [
      { tag: "neg", tagType: "bad", en: "I don't travel every month." },
      { tag: "?",   tagType: "bad", en: "Do you travel every month?" },
      { tag: "passado", en: "I traveled every month." },
      { tag: "futuro",  en: "I will travel every month." }
    ]},
    { tipo: "traduzir", q: "Como você deseja boa viagem a alguém?", pt: "Boa viagem!", resposta: "Safe travels!" },
    { tipo: "escrever", q: "O que você vai fazer amanhã? Crie uma frase com “I will…”.", exemplo: "I will work tomorrow." }
  ],

  flashcards: [
    { pt: "Vou viajar hoje à noite.", en: "I will travel tonight." },
    { pt: "Vou pegar a estrada às 8.", en: "I'll hit the road at 8." }
  ],

  conexao: "Nas 46 lições anteriores você montou sua rotina no presente (e viu o passado e o futuro em cada uma). Aqui o <span class=\"en\" data-say=\"will\">will</span> ganha o palco sozinho — é a estrutura que destrava falar de <strong>planos</strong>.",

  revisao: [
    "<strong>will + verbo base</strong> = futuro (I will travel).",
    "Depois de <strong>will</strong> o verbo <strong>nunca</strong> muda (sem -s, sem to).",
    "Negativa: <strong>won't</strong> (will + not). Pergunta: <strong>Will you…?</strong>",
    "<strong>tonight</strong> = hoje à noite (nunca “today night”).",
    "Na fala: <strong>I'll</strong>, <strong>you'll</strong>, <strong>he'll</strong>…"
  ]
});
