/* Lição 31 — I play beach volleyball at Balneário Bica at 8 p.m.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:5, capituloNome:"Class, Sports & Therapy", licao:31,
    tituloEn:"I play beach volleyball at Balneário Bica at 8 p.m.", tituloPt:"Eu jogo vôlei de areia no Balneário Bica às 20h." },

  hero: { time:"VOLUME 1 · CAP. 5 — CLASS, SPORTS & THERAPY · LIÇÃO 31",
    en:"I play beach volleyball at Balneário Bica at 8 p.m.", pt:"Jogo vôlei de areia no Balneário Bica às 20h." },

  naturalLiteral: {
    natural:"I play beach volleyball at Balneário Bica at 8 p.m.",
    literal:"Eu jogo vôlei de praia no Balneário Bica às 8 da noite.",
    nota:'Repare que a frase tem <strong>dois</strong> <span class="en" data-say="at">at</span>: o primeiro marca o <em>lugar</em> (at Balneário Bica) e o segundo o <em>horário</em> (at 8). O mesmo <span class="en" data-say="at">at</span> faz os dois trabalhos.'
  },

  estrutura: {
    linhas: [
      { palavra:"I play beach volleyball", classe:"verbo + esporte", funcao:"a ação", traducao:"jogo vôlei de areia", hl:true },
      { palavra:"at Balneário Bica", classe:"at + lugar", funcao:"onde", traducao:"no Balneário Bica", hl:true },
      { palavra:"at 8 p.m.", classe:"at + horário", funcao:"quando", traducao:"às 8 da noite", hl:true }
    ],
    nota:'<span class="en" data-say="beach volleyball">beach volleyball</span> = vôlei de praia/areia (também <span class="en" data-say="sand volleyball">sand volleyball</span>). É um substantivo composto: “beach” descreve o tipo de “volleyball”.'
  },

  molde: {
    intro:"O molde do at (lugar pontual + horário):",
    formula:"at + [lugar específico]   /   at + [horário]",
    exemplos: [
      { en:"at home", pt:"em casa" },
      { en:"at the beach", pt:"na praia" },
      { en:"at 8", pt:"às 8" }
    ],
    nota:'<span class="en" data-say="at">at</span> serve para pontos específicos: <span class="en" data-say="at Balneário Bica">at Balneário Bica</span>, <span class="en" data-say="at home">at home</span>, <span class="en" data-say="at the beach">at the beach</span> — e para horários (at 8). Para cidades/países maiores usa-se <span class="en" data-say="in">in</span> (in Brazil).'
  },

  conjugacao: {
    nota:'play → he plays (Lição 30).',
    linhas: [
      { p:"I", en:"I play beach volleyball", say:"I play beach volleyball at 8.", pt:"eu jogo vôlei de areia" },
      { p:"you", en:"you play beach volleyball", say:"You play beach volleyball at 8.", pt:"você joga vôlei de areia" },
      { p:"we", en:"we play beach volleyball", say:"We play beach volleyball at 8.", pt:"nós jogamos vôlei de areia" },
      { p:"they", en:"they play beach volleyball", say:"They play beach volleyball at 8.", pt:"eles jogam vôlei de areia" },
      { p:"he", en:"he play<strong>s</strong> beach volleyball", say:"He plays beach volleyball at 8.", pt:"ele joga vôlei de areia", hl:true },
      { p:"she", en:"she play<strong>s</strong> beach volleyball", say:"She plays beach volleyball at 8.", pt:"ela joga vôlei de areia", hl:true },
      { p:"it", en:"it play<strong>s</strong>", say:"It plays.", pt:"(coisa) toca", hl:true }
    ]
  },

  formas: {
    intro:'Passado played (Lição 30).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't play beach volleyball at 8.", pt:"Eu não jogo vôlei de areia às 8." },
      { tag:"?", tagType:"bad", en:"Do you play beach volleyball at Balneário Bica?", pt:"Você joga vôlei de areia no Balneário Bica?" },
      { tag:"passado", en:"I played beach volleyball at 8.", pt:"Joguei vôlei de areia às 8." },
      { tag:"futuro", en:"I will play beach volleyball at 8.", pt:"Vou jogar vôlei de areia às 8." }
    ],
    nota:'Para lugares você também vai ouvir <span class="en" data-say="on the beach">on the beach</span> (na areia da praia) — <span class="en" data-say="at">at</span> foca no ponto, <span class="en" data-say="on">on</span> na superfície.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar do vôlei de praia:",
    linhas: [
      { en:"I play beach volleyball at 8.", pt:"Jogo vôlei de areia às 8." },
      { en:"There's a game at Balneário Bica.", pt:"Tem um jogo no Balneário Bica." },
      { en:"I play sand volleyball at night.", pt:"Jogo vôlei de areia à noite." },
      { en:"I hit the beach for volleyball.", pt:"Vou pra praia jogar vôlei." },
      { en:"I have beach volleyball at 8.", pt:"Tenho vôlei de areia às 8." }
    ],
    nota:'<span class="en" data-say="at night">at night</span> = à noite (com at). Note que “de manhã” é <span class="en" data-say="in the morning">in the morning</span>, mas “à noite” é <span class="en" data-say="at night">at night</span> — cada um com sua preposição.'
  },

  expressoes: [
    { en:"beach volleyball", pt:"vôlei de praia/areia" },
    { en:"at the beach", pt:"na praia" },
    { en:"at night", pt:"à noite" },
    { en:"a game", pt:"um jogo / uma partida" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"beach", ipa:"/biːtʃ/", soa:"“bíitch”", sentido:"praia" },
      { palavra:"volleyball", ipa:"/ˈvɒlibɔːl/", soa:"“VÓ-li-ból”", sentido:"vôlei" },
      { palavra:"at", ipa:"/æt/", soa:"“ét”", sentido:"em (lugar) / às (horário)" }
    ],
    fraseSoa:"ai plêi bíitch VÓ-li-ból ét Balneário Bica ét êit pí-ém",
    fraseIpa:"/aɪ pleɪ biːtʃ ˈvɒlibɔːl æt bɐlneˈaɾju ˈbikɐ æt eɪt ˌpiː ˈɛm/",
    notaPron:'<span class="en" data-say="beach">beach</span> tem o “i” longo (“bíitch”) — cuidado para não falar a versão curta, que vira um palavrão em inglês. Alongue bem o i.',
    cultura:'O nome <span data-say="Balneário Bica">Balneário Bica</span> é próprio (fica em português). Em inglês você diria o nome do lugar como ele é: <span class="en" data-say="at Balneário Bica">at Balneário Bica</span> — nomes de lugares não se traduzem.'
  },

  erros: [
    { tipo:"bad", texto:"in Balneário Bica.", nota:"Para um ponto específico use <strong>at</strong>: at Balneário Bica." },
    { tipo:"bad", texto:"beach's volleyball.", nota:"É composto, sem apóstrofo: <strong>beach volleyball</strong>." },
    { tipo:"bad", texto:"at the 8.", nota:"Horário é só <strong>at 8</strong> (sem the)." },
    { tipo:"bad", texto:"He play beach volleyball.", nota:"3ª pessoa: He play<strong>s</strong>." }
  ],

  dica: {
    texto:'Um <strong>at</strong>, dois trabalhos: lugar pontual e horário. Toque e ouça:',
    chips:["at Balneário Bica","at home","at the beach","at 8"],
    nota:"at = ponto específico (lugar) E horário. Cidade/país grande = in (in Brazil)."
  },

  dialogo: [
    { who:"A", en:"Where do you play volleyball?", pt:"Onde você joga vôlei?" },
    { who:"B", en:"I play beach volleyball at Balneário Bica at 8 p.m.", pt:"Jogo vôlei de areia no Balneário Bica às 20h." },
    { who:"A", en:"Beach volleyball at night? Sounds awesome.", pt:"Vôlei de areia à noite? Parece incrível." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (lugar pontual):", before:"I play", after:"Balneário Bica.", resposta:"at" },
    { tipo:"completar", q:"Complete (horário):", before:"I play", after:"8 p.m.", resposta:"at" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["volleyball","I","beach","play"], resposta:"I play beach volleyball." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele joga vôlei de areia às 8.", resposta:"He plays beach volleyball at 8." },
    { tipo:"transformar", q:"Transforme", base:"I play beach volleyball at 8 p.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't play beach volleyball at 8 p.m." },
      { tag:"?", tagType:"bad", en:"Do you play beach volleyball at 8 p.m.?" },
      { tag:"passado", en:"I played beach volleyball at 8 p.m." },
      { tag:"futuro", en:"I will play beach volleyball at 8 p.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com at + lugar + at + horário.", exemplo:"I study at the library at 3." }
  ],

  flashcards: [
    { pt:"Jogo vôlei de areia no Balneário Bica.", en:"I play beach volleyball at Balneário Bica." },
    { pt:"Tem um jogo às 8 da noite.", en:"There's a game at 8 p.m." }
  ],

  conexao:'Continua o <span class="en" data-say="play">play</span> da Lição 30 e o <span class="en" data-say="at">at</span> de horário da Lição 1 — agora mostrando que o mesmo <span class="en" data-say="at">at</span> também marca lugar. A próxima lição diz por quanto tempo você joga.',

  revisao: [
    "<strong>at</strong> = lugar pontual (at Balneário Bica, at home) E horário (at 8).",
    "<strong>in</strong> para cidade/país (in Brazil).",
    "<strong>beach volleyball</strong> = vôlei de areia (composto).",
    "<strong>at night</strong> (à noite) × <strong>in the morning</strong> (de manhã).",
    "<strong>beach</strong> = “bíitch” (i bem longo!)."
  ]
});
