/* Lição 45 — I get ready for bed.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:45,
    tituloEn:"I get ready for bed.", tituloPt:"Eu me preparo para dormir." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 45",
    en:"I get ready for bed.", pt:"Eu me preparo para dormir." },

  naturalLiteral: {
    natural:"I get ready for bed.",
    literal:"Eu fico pronto para a cama.",
    nota:'<span class="en" data-say="get ready for">get ready for</span> = se preparar para. E <span class="en" data-say="bed">bed</span> aqui vem <strong>sem the</strong> (como em go to bed) — é a ideia de “dormir”, não a cama física.'
  },

  estrutura: {
    linhas: [
      { palavra:"I get ready", classe:"verbo (get + adjetivo)", funcao:"me preparo / me apronto", traducao:"eu me preparo", hl:true },
      { palavra:"for bed", classe:"for + substantivo", funcao:"para quê", traducao:"para dormir", hl:true }
    ],
    nota:'<span class="en" data-say="get ready">get ready</span> é aquele <span class="en" data-say="get">get</span> coringa (Lição 22) no sentido de “ficar/tornar-se”: get ready = ficar pronto. E o <span class="en" data-say="for">for</span> aponta o objetivo.'
  },

  molde: {
    intro:"O molde de se preparar para algo:",
    formula:"get ready for + [substantivo]   /   get ready to + [verbo]",
    exemplos: [
      { en:"I get ready for work.", pt:"Me preparo para o trabalho." },
      { en:"I get ready for the day.", pt:"Me preparo para o dia." },
      { en:"I get ready to sleep.", pt:"Me preparo para dormir." }
    ],
    nota:'<span class="en" data-say="get ready for">get ready for</span> + substantivo (for bed, for work); <span class="en" data-say="get ready to">get ready to</span> + verbo (to sleep, to leave). Duas construções, mesma ideia.'
  },

  conjugacao: {
    verbo: { base:"get ready for bed", past:"got ready for bed", irregular:true, ptPast:"eu me preparei para dormir", ptFut:"eu vou me preparar para dormir" },
    nota:'get → he gets.',
    linhas: [
      { p:"I", en:"I get ready for bed", say:"I get ready for bed.", pt:"eu me preparo para dormir" },
      { p:"you", en:"you get ready for bed", say:"You get ready for bed.", pt:"você se prepara para dormir" },
      { p:"we", en:"we get ready for bed", say:"We get ready for bed.", pt:"nós nos preparamos para dormir" },
      { p:"they", en:"they get ready for bed", say:"They get ready for bed.", pt:"eles se preparam para dormir" },
      { p:"he", en:"he get<strong>s</strong> ready for bed", say:"He gets ready for bed.", pt:"ele se prepara para dormir", hl:true },
      { p:"she", en:"she get<strong>s</strong> ready for bed", say:"She gets ready for bed.", pt:"ela se prepara para dormir", hl:true },
      { p:"it", en:"it get<strong>s</strong> ready", say:"It gets ready.", pt:"(coisa) fica pronta", hl:true }
    ]
  },

  formas: {
    intro:'Passado got (irregular, Lição 22).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't get ready for bed early.", pt:"Não me preparo pra dormir cedo." },
      { tag:"?", tagType:"bad", en:"Do you get ready for bed at 11?", pt:"Você se prepara pra dormir às 11?" },
      { tag:"passado", en:"I got ready for bed.", pt:"Me preparei para dormir. (get → got)" },
      { tag:"futuro", en:"I will get ready for bed soon.", pt:"Vou me preparar para dormir logo." }
    ],
    nota:'<span class="en" data-say="soon">soon</span> = logo, em breve. Muito usado quando você fala do que vai fazer a seguir.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você se apronta pra dormir:",
    linhas: [
      { en:"I get ready for bed.", pt:"Me preparo pra dormir." },
      { en:"I wind down.", pt:"Vou desacelerando." },
      { en:"I do my bedtime routine.", pt:"Faço minha rotina de dormir." },
      { en:"I get ready to sleep.", pt:"Me preparo pra dormir." },
      { en:"I start winding down for the night.", pt:"Começo a relaxar pra noite." }
    ],
    nota:'<span class="en" data-say="wind down">wind down</span> = desacelerar antes de dormir (o oposto de “get pumped”); <span class="en" data-say="bedtime">bedtime</span> = hora de dormir.'
  },

  expressoes: [
    { en:"get ready for bed", pt:"se preparar para dormir" },
    { en:"get ready for work", pt:"se preparar para o trabalho" },
    { en:"wind down", pt:"desacelerar (antes de dormir)" },
    { en:"bedtime routine", pt:"rotina de dormir" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"get ready", ipa:"/ɡɛt ˈrɛdi/", soa:"“guét RÉ-di”", sentido:"se preparar / se aprontar" },
      { palavra:"for", ipa:"/fɔːr/", soa:"“for”", sentido:"para" },
      { palavra:"bed", ipa:"/bɛd/", soa:"“béd”", sentido:"cama / dormir" }
    ],
    fraseSoa:"ai guét RÉ-di for béd",
    fraseIpa:"/aɪ ɡɛt ˈrɛdi fɔːr bɛd/",
    notaPron:'<span class="en" data-say="ready">ready</span> soa “RÉ-di”, com o /e/ aberto e o d bem marcado. Frase curtinha e fácil de treinar no áudio.',
    cultura:'<span class="en" data-say="Get ready for bed!">“Get ready for bed!”</span> é o que os pais falam pras crianças à noite (escovar os dentes, pôr o pijama…). Serve para qualquer preparação: <span class="en" data-say="get ready for the trip">get ready for the trip</span>, <span class="en" data-say="get ready for the meeting">get ready for the meeting</span>.'
  },

  erros: [
    { tipo:"bad", texto:"I get ready to bed.", nota:"Com substantivo é <strong>for</strong>: get ready <strong>for</strong> bed (to + verbo: get ready to sleep)." },
    { tipo:"bad", texto:"for the bed.", nota:"Aqui bed vem sem the: <strong>for bed</strong>." },
    { tipo:"bad", texto:"I prepare for bed.", nota:"Natural é <strong>get ready for bed</strong> (“prepare” soa mais formal)." },
    { tipo:"bad", texto:"He get ready.", nota:"3ª pessoa: He get<strong>s</strong> ready." }
  ],

  dica: {
    texto:'<strong>get ready for</strong> + substantivo × <strong>get ready to</strong> + verbo. Toque e ouça:',
    chips:["get ready for bed","get ready for work","get ready to sleep","wind down"],
    nota:"for + substantivo (for bed); to + verbo (to sleep). E bed vai sem the."
  },

  dialogo: [
    { who:"A", en:"It's getting late.", pt:"Está ficando tarde." },
    { who:"B", en:"Yeah, I'm going to get ready for bed.", pt:"É, vou me preparar pra dormir." },
    { who:"A", en:"Good night!", pt:"Boa noite!" },
    { who:"B", en:"Night!", pt:"'Noite!" }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (com substantivo):", before:"I get ready", after:"bed.", resposta:"for" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"ready for bed.", resposta:"gets", wide:true, dica:"get vira ___." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["for","I","ready","bed","get"], resposta:"I get ready for bed." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela se prepara para dormir.", resposta:"She gets ready for bed." },
    { tipo:"transformar", q:"Transforme", base:"I get ready for bed.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't get ready for bed." },
      { tag:"?", tagType:"bad", en:"Do you get ready for bed?" },
      { tag:"passado", en:"I got ready for bed." },
      { tag:"futuro", en:"I will get ready for bed." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com get ready for/to.", exemplo:"I get ready for work at 7." }
  ],

  flashcards: [
    { pt:"Me preparo pra dormir.", en:"I get ready for bed." },
    { pt:"Faço minha rotina de dormir.", en:"I do my bedtime routine." }
  ],

  conexao:'Retoma o <span class="en" data-say="get">get</span> coringa (Lição 22) e o <span class="en" data-say="bed">bed</span> sem the (Lição 29, go to bed). É a penúltima ação do seu dia — a próxima e última lição te leva ao sono, fechando o livro.',

  revisao: [
    "<strong>get ready for</strong> + substantivo (for bed, for work).",
    "<strong>get ready to</strong> + verbo (to sleep, to leave).",
    "<strong>bed</strong> vai sem the (for bed).",
    "Passado: get → <strong>got</strong>.",
    "<strong>wind down</strong> = desacelerar antes de dormir."
  ]
});
