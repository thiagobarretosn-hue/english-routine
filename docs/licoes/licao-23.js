/* Lição 23 — I have lunch after I get back from the gym.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:4, capituloNome:"Lunch & Afternoon", licao:23,
    tituloEn:"I have lunch after I get back from the gym.", tituloPt:"Eu almoço depois que volto da academia." },

  hero: { time:"VOLUME 1 · CAP. 4 — LUNCH & AFTERNOON · LIÇÃO 23",
    en:"I have lunch after I get back from the gym.", pt:"Eu almoço depois que volto da academia." },

  naturalLiteral: {
    natural:"I have lunch after I get back from the gym.",
    literal:"Eu tenho almoço depois que eu volto da academia.",
    nota:'<span class="en" data-say="have lunch">have lunch</span> = almoçar (o mesmo <span class="en" data-say="have">have</span> das refeições, Lição 8, sem artigo). E <span class="en" data-say="get back from">get back from</span> = voltar de (get back = voltar; from = de).'
  },

  estrutura: {
    linhas: [
      { palavra:"I have lunch", classe:"verbo + refeição", funcao:"a ação principal", traducao:"eu almoço", hl:true },
      { palavra:"after", classe:"conjunção", funcao:"liga no tempo", traducao:"depois que" },
      { palavra:"I get back", classe:"sujeito + phrasal", funcao:"a ação anterior (voltar)", traducao:"eu volto", hl:true },
      { palavra:"from the gym", classe:"from + lugar", funcao:"de onde", traducao:"da academia" }
    ],
    nota:'<span class="en" data-say="get back">get back</span> é irmão do <span class="en" data-say="go back">go back</span> da Lição 21 — os dois significam “voltar”. Com <span class="en" data-say="from">from</span> você diz de onde: get back <strong>from</strong> the gym.'
  },

  molde: {
    intro:"O molde de voltar de um lugar + almoçar:",
    formula:"I have lunch after I get back from + [lugar]",
    exemplos: [
      { en:"I get back from work at 6.", pt:"Volto do trabalho às 6." },
      { en:"I have lunch after class.", pt:"Almoço depois da aula." },
      { en:"I rest after I get back from the gym.", pt:"Descanso depois que volto da academia." }
    ],
    nota:'<span class="en" data-say="get back from">get back from</span> = voltar de (a origem). Não confunda com <span class="en" data-say="get back to">get back to</span> = voltar para (o destino), que você verá na Lição 25.'
  },

  conjugacao: {
    verbo: { base:"have lunch", past:"had lunch", irregular:true, ptPast:"eu almocei", ptFut:"eu vou almoçar" },
    nota:'have → has (Lição 8); get back → gets back.',
    linhas: [
      { p:"I", en:"I have lunch", say:"I have lunch after the gym.", pt:"eu almoço" },
      { p:"you", en:"you have lunch", say:"You have lunch after the gym.", pt:"você almoça" },
      { p:"we", en:"we have lunch", say:"We have lunch after the gym.", pt:"nós almoçamos" },
      { p:"they", en:"they have lunch", say:"They have lunch after the gym.", pt:"eles almoçam" },
      { p:"he", en:"he <strong>has</strong> lunch", say:"He has lunch after the gym.", pt:"ele almoça", hl:true },
      { p:"she", en:"she <strong>has</strong> lunch", say:"She has lunch after the gym.", pt:"ela almoça", hl:true },
      { p:"it", en:"it <strong>has</strong>", say:"It has.", pt:"(coisa) tem", hl:true }
    ]
  },

  formas: {
    intro:'Passados irregulares: have → <span class="en" data-say="had">had</span>; get → <span class="en" data-say="got">got</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't have lunch after the gym.", pt:"Eu não almoço depois da academia." },
      { tag:"?", tagType:"bad", en:"Do you have lunch after the gym?", pt:"Você almoça depois da academia?" },
      { tag:"passado", en:"I had lunch after I got back from the gym.", pt:"Almocei depois que voltei da academia. (had / got)" },
      { tag:"futuro", en:"I will have lunch after I get back from the gym.", pt:"Vou almoçar depois que voltar da academia." }
    ],
    nota:'Como na Lição 22: depois de <span class="en" data-say="after">after</span>, o verbo fica no presente mesmo quando a frase é sobre o futuro.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você almoça depois do treino:",
    linhas: [
      { en:"I have lunch when I get back.", pt:"Almoço quando volto." },
      { en:"I eat lunch after the gym.", pt:"Almoço depois da academia." },
      { en:"After my workout, I have lunch.", pt:"Depois do treino, almoço." },
      { en:"Lunch is right after the gym.", pt:"O almoço é logo depois da academia." },
      { en:"I grab lunch when I'm back.", pt:"Pego o almoço quando volto." }
    ],
    nota:'<span class="en" data-say="Let\'s grab lunch.">“Let\'s grab lunch.”</span> = “vamos almoçar” — um convite casual muito comum entre colegas.'
  },

  expressoes: [
    { en:"have lunch", pt:"almoçar" },
    { en:"get back", pt:"voltar" },
    { en:"get back from", pt:"voltar de" },
    { en:"grab lunch", pt:"comer/pegar o almoço" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"lunch", ipa:"/lʌntʃ/", soa:"“lântch”", sentido:"almoço" },
      { palavra:"get back", ipa:"/ɡɛt bæk/", soa:"“guét bék”", sentido:"voltar" },
      { palavra:"from", ipa:"/frʌm/", soa:"“frâm”", sentido:"de (origem)" }
    ],
    fraseSoa:"ai rév lântch áfter ai guét bék frâm dâ djim",
    fraseIpa:"/aɪ hæv lʌntʃ ˈæftər aɪ ɡɛt bæk frʌm ðə dʒɪm/",
    notaPron:'<span class="en" data-say="lunch">lunch</span> termina com o som “tch” (/tʃ/): “lântch”. O “u” é o mesmo /ʌ/ de “up” (“â”).',
    cultura:'A pergunta <span class="en" data-say="Did you have lunch?">“Did you have lunch?”</span> (você almoçou?) é super comum. E <span class="en" data-say="lunch break">lunch break</span> = intervalo/horário de almoço.'
  },

  erros: [
    { tipo:"bad", texto:"I take lunch.", nota:"Almoçar é <strong>have lunch</strong>, não “take lunch”." },
    { tipo:"good", en:"I have lunch.", nota:"—" },
    { tipo:"bad", texto:"I get back of the gym.", nota:"É <strong>from</strong>, não “of”: get back from the gym." },
    { tipo:"bad", texto:"He have lunch.", nota:"3ª pessoa: He <strong>has</strong> lunch." }
  ],

  dica: {
    texto:'Guarde os dois “voltar” irmãos e o par from/to:',
    chips:["get back from the gym","go back home","have lunch","grab lunch"],
    nota:"get back FROM = voltar de (origem); get back TO = voltar para (destino). E almoçar é sempre have lunch."
  },

  dialogo: [
    { who:"A", en:"When do you have lunch?", pt:"Quando você almoça?" },
    { who:"B", en:"I have lunch after I get back from the gym.", pt:"Almoço depois que volto da academia." },
    { who:"A", en:"So you work out, then eat. Smart.", pt:"Então você treina, depois come. Inteligente." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (almoçar):", before:"I", after:"lunch at noon.", resposta:"have" },
    { tipo:"completar", q:"Complete a preposição (voltar de):", before:"I get back", after:"the gym.", resposta:"from" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["lunch","I","have"], resposta:"I have lunch." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela almoça depois que volta da academia.", resposta:"She has lunch after she gets back from the gym." },
    { tipo:"transformar", q:"Transforme", base:"I have lunch after the gym.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't have lunch after the gym." },
      { tag:"?", tagType:"bad", en:"Do you have lunch after the gym?" },
      { tag:"passado", en:"I had lunch after the gym." },
      { tag:"futuro", en:"I will have lunch after the gym." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com get back from + lugar.", exemplo:"I get back from work at 7." }
  ],

  flashcards: [
    { pt:"Almoço depois que volto da academia.", en:"I have lunch after I get back from the gym." },
    { pt:"Vamos almoçar.", en:"Let's grab lunch." }
  ],

  conexao:'Junta o <span class="en" data-say="have">have</span> das refeições (Lição 8) com o “voltar” (<span class="en" data-say="get back">get back</span>, primo do <span class="en" data-say="go back">go back</span> da Lição 21) e o <span class="en" data-say="from">from</span> da Lição 6. A próxima lição mostra o que você almoça.',

  revisao: [
    "<strong>have lunch</strong> = almoçar (sem artigo).",
    "<strong>get back</strong> = voltar (irmão de go back).",
    "<strong>get back from</strong> (voltar de) × get back to (voltar para).",
    "Passados: have → <strong>had</strong>; get → <strong>got</strong>.",
    "Natural: <strong>grab lunch</strong> (comer/pegar o almoço)."
  ]
});
