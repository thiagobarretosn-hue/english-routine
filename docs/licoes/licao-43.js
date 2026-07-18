/* Lição 43 — After dinner, I play on my computer or console.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:43,
    tituloEn:"After dinner, I play on my computer or console.", tituloPt:"Depois do jantar, jogo no computador ou no videogame." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 43",
    en:"After dinner, I play on my computer or console.", pt:"Depois do jantar, jogo no computador ou no videogame." },

  naturalLiteral: {
    natural:"After dinner, I play on my computer or console.",
    literal:"Depois do jantar, eu jogo no meu computador ou console.",
    nota:'Para jogar em um aparelho, usa-se <span class="en" data-say="play on">play on</span> — <span class="en" data-say="play on my computer">play on my computer</span>. E <span class="en" data-say="console">console</span> = videogame (PlayStation, Xbox…).'
  },

  estrutura: {
    linhas: [
      { palavra:"After dinner,", classe:"after + substantivo", funcao:"quando", traducao:"depois do jantar" },
      { palavra:"I play on", classe:"verbo + preposição", funcao:"a ação (jogar em)", traducao:"jogo em", hl:true },
      { palavra:"my computer or console", classe:"aparelho A or B", funcao:"onde", traducao:"meu computador ou videogame", hl:true }
    ],
    nota:'Repare a diferença de preposição: você <span class="en" data-say="play volleyball">play volleyball</span> (esporte, sem nada), mas <span class="en" data-say="play on my computer">play on my computer</span> (aparelho, com <strong>on</strong>).'
  },

  molde: {
    intro:"O molde de jogar em aparelhos:",
    formula:"I play on + [meu computador / console / celular]",
    exemplos: [
      { en:"I play on my phone.", pt:"Jogo no celular." },
      { en:"I play video games.", pt:"Jogo videogame." },
      { en:"I play on my PlayStation.", pt:"Jogo no PlayStation." }
    ],
    nota:'<span class="en" data-say="video games">video games</span> = videogames (o que você joga); <span class="en" data-say="console">console</span> = o aparelho. Você <span class="en" data-say="play video games">play video games</span> <span class="en" data-say="on a console">on a console</span>.'
  },

  conjugacao: {
    nota:'play → he plays (vogal + y = só -s).',
    linhas: [
      { p:"I", en:"I play on my computer", say:"I play on my computer.", pt:"eu jogo no computador" },
      { p:"you", en:"you play on your computer", say:"You play on your computer.", pt:"você joga no computador" },
      { p:"we", en:"we play on our computers", say:"We play on our computers.", pt:"nós jogamos no computador" },
      { p:"they", en:"they play on their computers", say:"They play on their computers.", pt:"eles jogam no computador" },
      { p:"he", en:"he play<strong>s</strong> on his computer", say:"He plays on his computer.", pt:"ele joga no computador dele", hl:true },
      { p:"she", en:"she play<strong>s</strong> on her computer", say:"She plays on her computer.", pt:"ela joga no computador dela", hl:true },
      { p:"it", en:"it play<strong>s</strong>", say:"It plays.", pt:"(coisa) toca/reproduz", hl:true }
    ]
  },

  formas: {
    intro:'Passado played (vogal + y → played).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't play after dinner.", pt:"Eu não jogo depois do jantar." },
      { tag:"?", tagType:"bad", en:"Do you play on your console?", pt:"Você joga no videogame?" },
      { tag:"passado", en:"After dinner, I played on my console.", pt:"Depois do jantar, joguei no videogame. (play → played)" },
      { tag:"futuro", en:"After dinner, I will play on my computer.", pt:"Depois do jantar, vou jogar no computador." }
    ],
    nota:'Como verbo, “jogar videogame” também vira só <span class="en" data-say="game">game</span>: <span class="en" data-say="I game at night.">I game at night.</span> (jogo à noite) — bem informal.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você joga:",
    linhas: [
      { en:"I play video games after dinner.", pt:"Jogo videogame depois do jantar." },
      { en:"I game at night.", pt:"Jogo à noite." },
      { en:"I play on my PC or PlayStation.", pt:"Jogo no PC ou no PlayStation." },
      { en:"I hop on my console.", pt:"Entro no videogame." },
      { en:"I play some games to unwind.", pt:"Jogo um pouco pra relaxar." }
    ],
    nota:'<span class="en" data-say="PC">PC</span> = computador (personal computer); <span class="en" data-say="unwind">unwind</span> = relaxar/desligar a cabeça.'
  },

  expressoes: [
    { en:"play video games", pt:"jogar videogame" },
    { en:"play on the computer", pt:"jogar no computador" },
    { en:"a console", pt:"um videogame (aparelho)" },
    { en:"game at night", pt:"jogar à noite" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"play on", ipa:"/pleɪ ɒn/", soa:"“plêi on”", sentido:"jogar em (aparelho)" },
      { palavra:"computer", ipa:"/kəmˈpjuːtər/", soa:"“kâm-PIÚ-ter”", sentido:"computador" },
      { palavra:"console", ipa:"/ˈkɒnsoʊl/", soa:"“CÓN-sôul”", sentido:"videogame (aparelho)" }
    ],
    fraseSoa:"áfter DÍ-ner, ai plêi on mai kâm-PIÚ-ter or CÓN-sôul",
    fraseIpa:"/ˈæftər ˈdɪnər aɪ pleɪ ɒn maɪ kəmˈpjuːtər ɔːr ˈkɒnsoʊl/",
    notaPron:'<span class="en" data-say="console">console</span> (o videogame) tem a força na 1ª sílaba: “CÓN-sôul”. Não confunda com o verbo <span class="en" data-say="to console">to console</span> (consolar), que tem força na 2ª.',
    cultura:'<span class="en" data-say="console">console</span> = PlayStation, Xbox, Nintendo. <span class="en" data-say="PC gaming">PC gaming</span> = jogar no computador. E <span class="en" data-say="gamer">gamer</span> = quem joga bastante.'
  },

  erros: [
    { tipo:"bad", texto:"I play in my computer.", nota:"É <strong>on</strong>: play on my computer." },
    { tipo:"bad", texto:"I play with computer.", nota:"Para jogar no aparelho é <strong>play on</strong>." },
    { tipo:"bad", texto:"videogame (uma palavra).", nota:"Escreve-se separado: <strong>video game(s)</strong>." },
    { tipo:"bad", texto:"He play on his console.", nota:"3ª pessoa: He play<strong>s</strong> on his console." }
  ],

  dica: {
    texto:'A preposição muda com o que você joga. Toque e compare:',
    chips:["play volleyball","play the guitar","play on my computer","play video games"],
    nota:"esporte (sem nada) · instrumento (the) · aparelho (on). Três “play” diferentes."
  },

  dialogo: [
    { who:"A", en:"What do you do after dinner?", pt:"O que você faz depois do jantar?" },
    { who:"B", en:"After dinner, I play on my computer or console.", pt:"Depois do jantar, jogo no computador ou no videogame." },
    { who:"A", en:"Nice way to unwind.", pt:"Ótimo jeito de relaxar." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a preposição (jogar no aparelho):", before:"I play", after:"my computer.", resposta:"on" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"on his console.", resposta:"plays", wide:true, dica:"play → só -s (vogal+y)." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["on","I","computer","play","my"], resposta:"I play on my computer." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele joga no videogame depois do jantar.", resposta:"He plays on his console after dinner." },
    { tipo:"transformar", q:"Transforme", base:"After dinner, I play on my computer.", formas:[
      { tag:"neg", tagType:"bad", en:"After dinner, I don't play on my computer." },
      { tag:"?", tagType:"bad", en:"Do you play on your computer after dinner?" },
      { tag:"passado", en:"After dinner, I played on my computer." },
      { tag:"futuro", en:"After dinner, I will play on my computer." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com play on + aparelho.", exemplo:"I play on my phone before bed." }
  ],

  flashcards: [
    { pt:"Jogo videogame depois do jantar.", en:"I play video games after dinner." },
    { pt:"Jogo no PC ou no PlayStation.", en:"I play on my PC or PlayStation." }
  ],

  conexao:'Fecha a “trilogia do play”: esporte (Lição 30), instrumento (Lição 41) e agora aparelho — cada um com sua regra. Junta também o <span class="en" data-say="or">or</span> (Lição 35) e o <span class="en" data-say="computer">computer</span> (Lição 4).',

  revisao: [
    "<strong>play on</strong> + aparelho (play on my computer/console).",
    "As 3 regras do play: esporte (nada), instrumento (the), aparelho (on).",
    "<strong>console</strong> = o videogame (“CÓN-sôul”).",
    "<strong>video game(s)</strong> = separado.",
    "Verbo informal: <strong>game</strong> (I game at night)."
  ]
});
