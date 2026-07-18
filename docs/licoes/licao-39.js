/* Lição 39 — I watch soccer games and have dinner in my room.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:39,
    tituloEn:"I watch soccer games and have dinner in my room.", tituloPt:"Eu assisto aos jogos de futebol e janto no meu quarto." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 39",
    en:"I watch soccer games and have dinner in my room.", pt:"Assisto aos jogos de futebol e janto no meu quarto." },

  naturalLiteral: {
    natural:"I watch soccer games and have dinner in my room.",
    literal:"Eu assisto jogos de futebol e tenho jantar no meu quarto.",
    nota:'<span class="en" data-say="watch">watch</span> = assistir (TV, filme, jogo). <span class="en" data-say="soccer">soccer</span> = futebol (nos EUA). E <span class="en" data-say="in my room">in my room</span> = no meu quarto — <span class="en" data-say="in">in</span> para dentro de um espaço fechado.'
  },

  estrutura: {
    linhas: [
      { palavra:"I watch soccer games", classe:"verbo + objeto", funcao:"1ª ação", traducao:"assisto jogos de futebol", hl:true },
      { palavra:"and", classe:"conjunção", funcao:"liga as ações", traducao:"e" },
      { palavra:"have dinner", classe:"verbo + refeição", funcao:"2ª ação", traducao:"janto" },
      { palavra:"in my room", classe:"in + espaço", funcao:"onde", traducao:"no meu quarto", hl:true }
    ],
    nota:'Três verbos de “ver” que confundem: <span class="en" data-say="watch">watch</span> (acompanhar algo em movimento — TV, jogo), <span class="en" data-say="see">see</span> (enxergar, perceber) e <span class="en" data-say="look">look</span> (olhar de propósito).'
  },

  molde: {
    intro:"O molde de assistir + lugar fechado:",
    formula:"I watch + [algo]   /   in + [espaço fechado]",
    exemplos: [
      { en:"I watch TV.", pt:"Assisto TV." },
      { en:"I watch a movie.", pt:"Assisto um filme." },
      { en:"in the kitchen", pt:"na cozinha" }
    ],
    nota:'<span class="en" data-say="in">in</span> para espaços fechados (in my room, in the kitchen, in the car). Compare com o <span class="en" data-say="at">at</span> (ponto) da Lição 31: at home (em casa, ponto) × in my room (dentro do quarto).'
  },

  conjugacao: {
    verbo: { base:"watch soccer games", past:"watched soccer games", irregular:false, ptPast:"eu assisti aos jogos", ptFut:"eu vou assistir aos jogos" },
    nota:'⚠️ <span class="en" data-say="watch">watch</span> termina em <strong>-ch</strong>, então leva <strong>-es</strong> na 3ª pessoa: he <span class="en" data-say="watches">watches</span> (igual a brush → brushes).',
    linhas: [
      { p:"I", en:"I watch games", say:"I watch soccer games.", pt:"eu assisto jogos" },
      { p:"you", en:"you watch games", say:"You watch soccer games.", pt:"você assiste jogos" },
      { p:"we", en:"we watch games", say:"We watch soccer games.", pt:"nós assistimos jogos" },
      { p:"they", en:"they watch games", say:"They watch soccer games.", pt:"eles assistem jogos" },
      { p:"he", en:"he watch<strong>es</strong> games", say:"He watches soccer games.", pt:"ele assiste jogos", hl:true },
      { p:"she", en:"she watch<strong>es</strong> games", say:"She watches soccer games.", pt:"ela assiste jogos", hl:true },
      { p:"it", en:"it watch<strong>es</strong>", say:"It watches.", pt:"(coisa) assiste", hl:true }
    ]
  },

  formas: {
    intro:'Passado watched (regular, “uótcht”).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't watch soccer in my room.", pt:"Não assisto futebol no meu quarto." },
      { tag:"?", tagType:"bad", en:"Do you watch soccer games?", pt:"Você assiste jogos de futebol?" },
      { tag:"passado", en:"I watched the game in my room.", pt:"Assisti ao jogo no meu quarto. (watch → watched)" },
      { tag:"futuro", en:"I will watch the game tonight.", pt:"Vou assistir ao jogo hoje à noite." }
    ],
    nota:'A regra do <strong>-es</strong> depois de -ch/-sh/-ss/-x: watch → watches, brush → brushes, kiss → kisses, fix → fixes.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar de assistir jogo:",
    linhas: [
      { en:"I watch the games in my room.", pt:"Assisto aos jogos no meu quarto." },
      { en:"I catch the soccer game.", pt:"Pego o jogo de futebol." },
      { en:"I watch soccer while I eat.", pt:"Assisto futebol enquanto como." },
      { en:"I have dinner in front of the TV.", pt:"Janto na frente da TV." },
      { en:"I eat in my room.", pt:"Como no meu quarto." }
    ],
    nota:'<span class="en" data-say="catch the game">catch the game</span> = assistir/pegar o jogo; <span class="en" data-say="in front of the TV">in front of the TV</span> = na frente da TV.'
  },

  expressoes: [
    { en:"watch a game", pt:"assistir um jogo" },
    { en:"watch TV", pt:"assistir TV" },
    { en:"in my room", pt:"no meu quarto" },
    { en:"in front of the TV", pt:"na frente da TV" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"watch", ipa:"/wɒtʃ/", soa:"“uótch”", sentido:"assistir" },
      { palavra:"soccer", ipa:"/ˈsɒkər/", soa:"“SÓ-ker”", sentido:"futebol" },
      { palavra:"room", ipa:"/ruːm/", soa:"“rúum”", sentido:"quarto / sala" }
    ],
    fraseSoa:"ai uótch SÓ-ker guêims end rév DÍ-ner in mai rúum",
    fraseIpa:"/aɪ wɒtʃ ˈsɒkər ɡeɪmz ænd hæv ˈdɪnər ɪn maɪ ruːm/",
    notaPron:'<span class="en" data-say="watch">watch</span> tem o “w” (som de u) + “tch”: “uótch”. E <span class="en" data-say="room">room</span> tem o u longo (“rúum”).',
    cultura:'Nos EUA, <span class="en" data-say="soccer">soccer</span> = o nosso futebol; <span class="en" data-say="football">football</span> = futebol americano. Ao falar de jogos com americanos, use <strong>soccer</strong> para não confundir.'
  },

  erros: [
    { tipo:"bad", texto:"He watch soccer.", nota:"Verbo em -ch → -es: He watch<strong>es</strong> soccer." },
    { tipo:"bad", texto:"I see the game.", nota:"Para acompanhar o jogo use <strong>watch</strong>; see é mais “enxergar”." },
    { tipo:"bad", texto:"in the my room.", nota:"É <strong>in my room</strong> (sem the antes do possessivo)." },
    { tipo:"bad", texto:"football (querendo dizer futebol).", nota:"Nos EUA futebol é <strong>soccer</strong>; football é o americano." }
  ],

  dica: {
    texto:'A regra do -es (ch/sh/ss/x) e os verbos de “ver”. Toque e ouça:',
    chips:["watch a game","watch TV","see","look"],
    nota:"watch = acompanhar (TV/jogo); see = enxergar; look = olhar. E watch → watches (-es)."
  },

  dialogo: [
    { who:"A", en:"Do you watch soccer?", pt:"Você assiste futebol?" },
    { who:"B", en:"Yeah, I watch soccer games and have dinner in my room.", pt:"Sim, assisto aos jogos e janto no meu quarto." },
    { who:"A", en:"Dinner and a game. Perfect combo.", pt:"Jantar e um jogo. Combo perfeito." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a 3ª pessoa (verbo em -ch):", before:"He", after:"soccer games.", resposta:"watches", wide:true, dica:"-ch leva -es." },
    { tipo:"completar", q:"Complete (dentro do quarto):", before:"I have dinner", after:"my room.", resposta:"in" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["games","I","soccer","watch"], resposta:"I watch soccer games." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela assiste jogos de futebol.", resposta:"She watches soccer games." },
    { tipo:"transformar", q:"Transforme", base:"I watch soccer games in my room.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't watch soccer games in my room." },
      { tag:"?", tagType:"bad", en:"Do you watch soccer games in your room?" },
      { tag:"passado", en:"I watched soccer games in my room." },
      { tag:"futuro", en:"I will watch soccer games in my room." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com watch + algo + in + lugar.", exemplo:"I watch movies in the living room." }
  ],

  flashcards: [
    { pt:"Assisto aos jogos no meu quarto.", en:"I watch the games in my room." },
    { pt:"Ela assiste jogos de futebol.", en:"She watches soccer games." }
  ],

  conexao:'Reencontra o <span class="en" data-say="have dinner">have dinner</span> (Lição 34) e a regra do <strong>-es</strong> que você viu em brush → brushes (Lição 2), agora em watch → watches. O <span class="en" data-say="watch">watch</span> volta nas próximas lições (séries, filmes).',

  revisao: [
    "<strong>watch</strong> = assistir (TV, jogo, filme).",
    "Verbo em <strong>-ch/-sh/-ss/-x</strong> → <strong>-es</strong> (watches, brushes).",
    "<strong>watch</strong> × <strong>see</strong> × <strong>look</strong> (acompanhar/enxergar/olhar).",
    "<strong>in</strong> + espaço fechado (in my room).",
    "<strong>soccer</strong> (EUA) = futebol."
  ]
});
