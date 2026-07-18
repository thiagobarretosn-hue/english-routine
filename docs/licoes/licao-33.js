/* Lição 33 — After the game, I go back home and take a shower.  (dado — fecha o Capítulo 5) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:5, capituloNome:"Class, Sports & Therapy", licao:33,
    tituloEn:"After the game, I go back home and take a shower.", tituloPt:"Depois do jogo, volto para casa e tomo banho." },

  hero: { time:"VOLUME 1 · CAP. 5 — CLASS, SPORTS & THERAPY · LIÇÃO 33",
    en:"After the game, I go back home and take a shower.", pt:"Depois do jogo, volto para casa e tomo banho." },

  naturalLiteral: {
    natural:"After the game, I go back home and take a shower.",
    literal:"Depois do jogo, eu vou de volta para casa e tomo um banho.",
    nota:'Esta frase é uma <strong>montagem</strong> de peças que você já domina: <span class="en" data-say="after the game">after the game</span> (after + substantivo), <span class="en" data-say="go back home">go back home</span> (Lição 21) e <span class="en" data-say="take a shower">take a shower</span> (Lição 12).'
  },

  estrutura: {
    linhas: [
      { palavra:"After the game,", classe:"after + substantivo", funcao:"quando", traducao:"depois do jogo", hl:true },
      { palavra:"I go back home", classe:"sujeito + verbo + destino", funcao:"1ª ação", traducao:"volto para casa" },
      { palavra:"and take a shower", classe:"and + 2ª ação", funcao:"e tomo banho", traducao:"e tomo banho" }
    ],
    nota:'<span class="en" data-say="game">game</span> = jogo/partida. E aqui o <span class="en" data-say="after">after</span> vem com substantivo (after the <strong>game</strong>), como o “after breakfast” da Lição 12.'
  },

  molde: {
    intro:"O molde de fechar uma atividade:",
    formula:"After the + [evento], I + [ação] and [ação]",
    exemplos: [
      { en:"After the class, I go home.", pt:"Depois da aula, vou pra casa." },
      { en:"After the meeting, I take a break.", pt:"Depois da reunião, faço uma pausa." },
      { en:"After the game, I get changed.", pt:"Depois do jogo, troco de roupa." }
    ],
    nota:'<span class="en" data-say="after the game">after the game</span> leva <strong>the</strong> porque é um jogo específico (o seu). Compare com <span class="en" data-say="after breakfast">after breakfast</span> (sem the, refeição em geral).'
  },

  conjugacao: {
    nota:'go → he goes; take → he takes.',
    linhas: [
      { p:"I", en:"I go back home", say:"After the game, I go back home.", pt:"eu volto para casa" },
      { p:"you", en:"you go back home", say:"After the game, you go back home.", pt:"você volta para casa" },
      { p:"we", en:"we go back home", say:"After the game, we go back home.", pt:"nós voltamos para casa" },
      { p:"they", en:"they go back home", say:"After the game, they go back home.", pt:"eles voltam para casa" },
      { p:"he", en:"he go<strong>es</strong> back home", say:"After the game, he goes back home.", pt:"ele volta para casa", hl:true },
      { p:"she", en:"she go<strong>es</strong> back home", say:"After the game, she goes back home.", pt:"ela volta para casa", hl:true },
      { p:"it", en:"it go<strong>es</strong> back", say:"It goes back.", pt:"(coisa) volta", hl:true }
    ]
  },

  formas: {
    intro:'Passados irregulares que você já conhece: go → <span class="en" data-say="went">went</span>; take → <span class="en" data-say="took">took</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"After the game, I don't take a shower.", pt:"Depois do jogo, não tomo banho." },
      { tag:"?", tagType:"bad", en:"Do you go back home after the game?", pt:"Você volta para casa depois do jogo?" },
      { tag:"passado", en:"After the game, I went back home and took a shower.", pt:"Depois do jogo, voltei pra casa e tomei banho. (went / took)" },
      { tag:"futuro", en:"After the game, I will go back home and take a shower.", pt:"Depois do jogo, vou pra casa e tomo banho." }
    ],
    nota:'Repare como uma frase só encadeia duas ações com <span class="en" data-say="and">and</span> — e as duas viram passado juntas (went … took).'
  },

  speakNaturally: {
    intro:"Formas naturais de encerrar a noite de esporte:",
    linhas: [
      { en:"After the game, I head home.", pt:"Depois do jogo, vou pra casa." },
      { en:"Once the game's over, I go home.", pt:"Assim que o jogo acaba, vou pra casa." },
      { en:"I shower after the game.", pt:"Tomo banho depois do jogo." },
      { en:"After volleyball, I go back home.", pt:"Depois do vôlei, volto pra casa." },
      { en:"I go straight home after the game.", pt:"Vou direto pra casa depois do jogo." }
    ],
    nota:'<span class="en" data-say="the game\'s over">the game\'s over</span> = o jogo acabou (game is → game\'s). <span class="en" data-say="straight home">straight home</span> = direto pra casa.'
  },

  expressoes: [
    { en:"after the game", pt:"depois do jogo" },
    { en:"the game's over", pt:"o jogo acabou" },
    { en:"go back home", pt:"voltar para casa" },
    { en:"take a shower", pt:"tomar banho" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"game", ipa:"/ɡeɪm/", soa:"“guêim”", sentido:"jogo / partida" },
      { palavra:"after", ipa:"/ˈæftər/", soa:"“áfter”", sentido:"depois de" },
      { palavra:"home", ipa:"/hoʊm/", soa:"“rôum”", sentido:"casa" }
    ],
    fraseSoa:"áfter dâ guêim, ai gôu bék rôum end têik â CHÁ-uer",
    fraseIpa:"/ˈæftər ðə ɡeɪm aɪ ɡoʊ bæk hoʊm ænd teɪk ə ˈʃaʊər/",
    notaPron:'<span class="en" data-say="game">game</span> é “guêim”, com o ditongo “êi” (não “gêime” nem “gãme”). O “a” de game é o mesmo /eɪ/ de wake, make, take.',
    cultura:'Nos EUA, <span class="en" data-say="game">game</span> é a palavra padrão para partida; no inglês britânico, esportes como futebol usam <span class="en" data-say="match">match</span>. Os dois se entendem, mas “game” é mais comum.'
  },

  erros: [
    { tipo:"bad", texto:"After game.", nota:"Jogo específico leva the: <strong>after the game</strong>." },
    { tipo:"bad", texto:"I go back to home.", nota:"Casa sem “to”: <strong>go back home</strong>." },
    { tipo:"bad", texto:"I make a shower.", nota:"Banho é <strong>take a shower</strong>, não “make”." },
    { tipo:"bad", texto:"He go back home.", nota:"3ª pessoa: He <strong>goes</strong> back home." }
  ],

  dica: {
    texto:'Esta lição é pura revisão encadeada. Toque e sinta como as peças se juntam:',
    chips:["after the game","go back home","take a shower","get changed"],
    nota:"Você já sabia cada peça — agora só encadeou tudo numa frase natural."
  },

  dialogo: [
    { who:"A", en:"What do you do after volleyball?", pt:"O que você faz depois do vôlei?" },
    { who:"B", en:"After the game, I go back home and take a shower.", pt:"Depois do jogo, volto pra casa e tomo banho." },
    { who:"A", en:"Straight home, no hanging out?", pt:"Direto pra casa, sem ficar por lá?" },
    { who:"B", en:"Yeah, I'm tired after three hours.", pt:"É, fico cansado depois de três horas." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (jogo específico):", before:"After", after:"game, I go home.", resposta:"the" },
    { tipo:"completar", q:"Complete (voltar):", before:"I go", after:"home after the game.", resposta:"back" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["home","I","back","go"], resposta:"I go back home." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Depois do jogo, ele volta pra casa e toma banho.", resposta:"After the game, he goes back home and takes a shower." },
    { tipo:"transformar", q:"Transforme", base:"After the game, I go back home.", formas:[
      { tag:"neg", tagType:"bad", en:"After the game, I don't go back home." },
      { tag:"?", tagType:"bad", en:"Do you go back home after the game?" },
      { tag:"passado", en:"After the game, I went back home." },
      { tag:"futuro", en:"After the game, I will go back home." }
    ]},
    { tipo:"escrever", q:"Encadeie duas ações com and.", exemplo:"After work, I go home and cook dinner." }
  ],

  flashcards: [
    { pt:"Depois do jogo, volto pra casa e tomo banho.", en:"After the game, I go back home and take a shower." },
    { pt:"Assim que o jogo acaba, vou pra casa.", en:"Once the game's over, I go home." }
  ],

  conexao:'Fecha o <strong>Capítulo 5</strong> montando peças de vários capítulos: <span class="en" data-say="after">after</span> (L12), <span class="en" data-say="go back home">go back home</span> (L21) e <span class="en" data-say="take a shower">take a shower</span> (L12). É a prova de que você já constrói frases combinando o que aprendeu.',

  revisao: [
    "<strong>after the game</strong> (jogo específico → the).",
    "<strong>go back home</strong> (casa sem “to”).",
    "<strong>take a shower</strong> (nunca “make”).",
    "Encadeie ações com <strong>and</strong> (go back home and take a shower).",
    "🏁 Capítulo 5 completo: aula → terapia → vôlei → voltar e tomar banho."
  ]
});
