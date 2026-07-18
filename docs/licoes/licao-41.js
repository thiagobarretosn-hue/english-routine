/* Lição 41 — I like playing guitar while I watch something.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:41,
    tituloEn:"I like playing guitar while I watch something.", tituloPt:"Eu gosto de tocar violão enquanto assisto algo." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 41",
    en:"I like playing guitar while I watch something.", pt:"Gosto de tocar violão enquanto assisto algo." },

  naturalLiteral: {
    natural:"I like playing guitar while I watch something.",
    literal:"Eu gosto tocando violão enquanto eu assisto algo.",
    nota:'<span class="en" data-say="play the guitar">play the guitar</span> = tocar violão (instrumento leva <strong>the</strong>, Lição 30). E <span class="en" data-say="while">while</span> = enquanto — liga duas ações que acontecem ao mesmo tempo.'
  },

  estrutura: {
    linhas: [
      { palavra:"I like playing guitar", classe:"like + -ing + instrumento", funcao:"gosto de tocar violão", traducao:"gosto de tocar violão", hl:true },
      { palavra:"while", classe:"conjunção", funcao:"ao mesmo tempo que", traducao:"enquanto", hl:true },
      { palavra:"I watch something", classe:"oração", funcao:"a ação simultânea", traducao:"assisto algo" }
    ],
    nota:'<span class="en" data-say="while">while</span> precisa de sujeito + verbo depois (while I watch), como o <span class="en" data-say="after">after</span> e o <span class="en" data-say="when">when</span>. E note o <span class="en" data-say="something">something</span> da Lição 36 aparecendo de novo.'
  },

  molde: {
    intro:"O molde de duas coisas ao mesmo tempo:",
    formula:"[ação 1] while + [sujeito + ação 2]",
    exemplos: [
      { en:"I listen to music while I work.", pt:"Ouço música enquanto trabalho." },
      { en:"I eat while I watch TV.", pt:"Como enquanto assisto TV." },
      { en:"I read while I wait.", pt:"Leio enquanto espero." }
    ],
    nota:'Instrumentos levam <strong>the</strong>: <span class="en" data-say="play the guitar">play the guitar</span>, <span class="en" data-say="play the piano">play the piano</span> (na fala casual o the às vezes cai, mas o padrão é com the).'
  },

  conjugacao: {
    verbo: { base:"play guitar", past:"played guitar", irregular:false, ptPast:"eu toquei violão", ptFut:"eu vou tocar violão" },
    nota:'like → likes; play → plays; watch → watches.',
    linhas: [
      { p:"I", en:"I play guitar", say:"I like playing guitar.", pt:"eu toco violão" },
      { p:"you", en:"you play guitar", say:"You like playing guitar.", pt:"você toca violão" },
      { p:"we", en:"we play guitar", say:"We like playing guitar.", pt:"nós tocamos violão" },
      { p:"they", en:"they play guitar", say:"They like playing guitar.", pt:"eles tocam violão" },
      { p:"he", en:"he play<strong>s</strong> guitar", say:"He likes playing guitar.", pt:"ele toca violão", hl:true },
      { p:"she", en:"she play<strong>s</strong> guitar", say:"She likes playing guitar.", pt:"ela toca violão", hl:true },
      { p:"it", en:"it play<strong>s</strong>", say:"It plays.", pt:"(coisa) toca", hl:true }
    ]
  },

  formas: {
    intro:'Passados: like → liked; play → played; watch → watched.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't play guitar while I work.", pt:"Não toco violão enquanto trabalho." },
      { tag:"?", tagType:"bad", en:"Do you play guitar while you watch TV?", pt:"Você toca violão enquanto assiste TV?" },
      { tag:"passado", en:"I played guitar while I watched TV.", pt:"Toquei violão enquanto assistia TV. (played / watched)" },
      { tag:"futuro", en:"I will play guitar while I relax.", pt:"Vou tocar violão enquanto relaxo." }
    ],
    nota:'Depois de <span class="en" data-say="while">while</span>, o verbo fica no presente simples (while I watch), mesmo quando a frase é sobre o passado ou o futuro.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você toca enquanto faz outra coisa:",
    linhas: [
      { en:"I play guitar while watching TV.", pt:"Toco violão enquanto assisto TV." },
      { en:"I strum my guitar at night.", pt:"Dedilho meu violão à noite." },
      { en:"I like to play while I relax.", pt:"Gosto de tocar enquanto relaxo." },
      { en:"I do both at the same time.", pt:"Faço as duas coisas ao mesmo tempo." },
      { en:"I noodle on the guitar.", pt:"Fico brincando no violão. (informal)" }
    ],
    nota:'<span class="en" data-say="strum">strum</span> = dedilhar/tocar acordes; <span class="en" data-say="at the same time">at the same time</span> = ao mesmo tempo (sinônimo de “while”).'
  },

  expressoes: [
    { en:"play the guitar", pt:"tocar violão" },
    { en:"while", pt:"enquanto" },
    { en:"at the same time", pt:"ao mesmo tempo" },
    { en:"play music", pt:"tocar música" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"guitar", ipa:"/ɡɪˈtɑːr/", soa:"“gui-TÁR”", sentido:"violão / guitarra" },
      { palavra:"while", ipa:"/waɪl/", soa:"“uáil”", sentido:"enquanto" },
      { palavra:"play", ipa:"/pleɪ/", soa:"“plêi”", sentido:"tocar / jogar" }
    ],
    fraseSoa:"ai láik plêi-ing gui-TÁR uáil ai uótch SÂM-thing",
    fraseIpa:"/aɪ laɪk ˈpleɪɪŋ ɡɪˈtɑːr waɪl aɪ wɒtʃ ˈsʌmθɪŋ/",
    notaPron:'⚠️ <span class="en" data-say="guitar">guitar</span> tem a força na <strong>2ª</strong> sílaba: “gui-<strong>TÁR</strong>”, não “GUI-tar”. E <span class="en" data-say="while">while</span> começa com “u”: “uáil”.',
    cultura:'Em inglês, <span class="en" data-say="guitar">guitar</span> serve tanto para violão quanto para guitarra — o contexto (ou <span class="en" data-say="acoustic guitar">acoustic guitar</span> / <span class="en" data-say="electric guitar">electric guitar</span>) diz qual é.'
  },

  erros: [
    { tipo:"bad", texto:"GUI-tar (força no começo).", nota:"A força é na 2ª sílaba: <strong>gui-TÁR</strong>." },
    { tipo:"bad", texto:"while I watching.", nota:"Depois de while, presente simples: <strong>while I watch</strong>." },
    { tipo:"bad", texto:"I like play guitar.", nota:"Depois de like, -ing: <strong>like playing</strong> guitar." },
    { tipo:"bad", texto:"He play guitar.", nota:"3ª pessoa: He play<strong>s</strong> guitar." }
  ],

  dica: {
    texto:'<strong>while</strong> = enquanto (duas ações juntas). E instrumento leva <strong>the</strong>. Toque e ouça:',
    chips:["play the guitar","play the piano","while I watch","at the same time"],
    nota:"while + oração (while I watch). play the + instrumento. guitar = força na 2ª sílaba."
  },

  dialogo: [
    { who:"A", en:"Do you play any instruments?", pt:"Você toca algum instrumento?" },
    { who:"B", en:"Yeah, I like playing guitar while I watch something.", pt:"Sim, gosto de tocar violão enquanto assisto algo." },
    { who:"A", en:"Nice, multitasking with music.", pt:"Legal, fazendo várias coisas com música." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (enquanto):", before:"I play guitar", after:"I watch TV.", resposta:"while" },
    { tipo:"completar", q:"Complete com o -ing (depois de like):", before:"I like", after:"guitar.", resposta:"playing", wide:true, dica:"like + verbo-ing." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["guitar","I","the","play"], resposta:"I play the guitar." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele toca violão enquanto assiste TV.", resposta:"He plays guitar while he watches TV." },
    { tipo:"transformar", q:"Transforme", base:"I play guitar while I watch TV.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't play guitar while I watch TV." },
      { tag:"?", tagType:"bad", en:"Do you play guitar while you watch TV?" },
      { tag:"passado", en:"I played guitar while I watched TV." },
      { tag:"futuro", en:"I will play guitar while I watch TV." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com while (duas ações juntas).", exemplo:"I listen to music while I cook." }
  ],

  flashcards: [
    { pt:"Toco violão enquanto assisto TV.", en:"I play guitar while I watch TV." },
    { pt:"Ouço música enquanto trabalho.", en:"I listen to music while I work." }
  ],

  conexao:'Junta o <span class="en" data-say="play the guitar">play the guitar</span> (a regra do instrumento com the, Lição 30), o <span class="en" data-say="like">like</span> + -ing (Lição 40), o <span class="en" data-say="something">something</span> (Lição 36) e o novo <span class="en" data-say="while">while</span>. Uma frase que costura quatro coisas que você já sabe.',

  revisao: [
    "<strong>while</strong> = enquanto (+ sujeito + verbo no presente).",
    "<strong>play the guitar</strong> (instrumento leva the).",
    "<strong>guitar</strong> = força na 2ª sílaba (gui-TÁR).",
    "<strong>like</strong> + verbo-ing (like playing).",
    "<strong>guitar</strong> = violão E guitarra (contexto decide)."
  ]
});
