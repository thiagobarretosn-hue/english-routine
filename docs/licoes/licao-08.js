/* Lição 8 — I have breakfast at 10.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:8,
    tituloEn:"I have breakfast at 10.", tituloPt:"Eu tomo café da manhã às 10 horas." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 08",
    en:"I have breakfast at 10.", pt:"Eu tomo café da manhã às 10 horas." },

  naturalLiteral: {
    natural:"I have breakfast at 10.",
    literal:"Eu tenho café da manhã às 10.",
    nota:'Aqui o <span class="en" data-say="have">have</span> não é “ter” — com refeições ele significa <strong>tomar/comer</strong>. E <span class="en" data-say="breakfast">breakfast</span> vem <strong>sem artigo</strong>: nunca “the breakfast”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"have", classe:"verbo", funcao:"a ação (tomar/comer)", traducao:"tomar", hl:true },
      { palavra:"breakfast", classe:"substantivo", funcao:"a refeição", traducao:"café da manhã" },
      { palavra:"at 10", classe:"expressão de tempo", funcao:"o horário", traducao:"às 10" }
    ],
    nota:'<span class="en" data-say="have">have</span> é campeão de usos: “ter” (I have a car), “tomar/comer” (I have coffee), e monta várias expressões. Com refeições e bebidas, pense sempre em <strong>tomar/comer</strong>.'
  },

  molde: {
    intro:"O molde das refeições:",
    formula:"I have + [refeição] + at + horário",
    exemplos: [
      { en:"I have lunch at noon.", pt:"Almoço ao meio-dia." },
      { en:"I have dinner at 8.", pt:"Janto às 8." },
      { en:"I have a coffee at 3.", pt:"Tomo um café às 3." }
    ],
    nota:'<span class="en" data-say="have breakfast">have breakfast</span>, <span class="en" data-say="have lunch">have lunch</span>, <span class="en" data-say="have dinner">have dinner</span> — as três refeições, sempre sem artigo.'
  },

  conjugacao: {
    verbo: { base:"have breakfast", past:"had breakfast", irregular:true, ptPast:"eu tomei café da manhã", ptFut:"eu vou tomar café da manhã" },
    nota:'⚠️ <span class="en" data-say="have">have</span> é <strong>irregular</strong> na 3ª pessoa: vira <span class="en" data-say="has">has</span>, não “haves”.',
    linhas: [
      { p:"I", en:"I have breakfast", say:"I have breakfast.", pt:"eu tomo café da manhã" },
      { p:"you", en:"you have breakfast", say:"You have breakfast.", pt:"você toma café da manhã" },
      { p:"we", en:"we have breakfast", say:"We have breakfast.", pt:"nós tomamos café da manhã" },
      { p:"they", en:"they have breakfast", say:"They have breakfast.", pt:"eles tomam café da manhã" },
      { p:"he", en:"he <strong>has</strong> breakfast", say:"He has breakfast.", pt:"ele toma café da manhã", hl:true },
      { p:"she", en:"she <strong>has</strong> breakfast", say:"She has breakfast.", pt:"ela toma café da manhã", hl:true },
      { p:"it", en:"it <strong>has</strong>", say:"It has.", pt:"(coisa) tem", hl:true }
    ]
  },

  formas: {
    intro:'Passado também é irregular: <span class="en" data-say="have">have</span> → <span class="en" data-say="had">had</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't have breakfast at 10.", pt:"Eu não tomo café da manhã às 10." },
      { tag:"?", tagType:"bad", en:"Do you have breakfast at 10?", pt:"Você toma café da manhã às 10?" },
      { tag:"passado", en:"I had breakfast at 10.", pt:"Tomei café da manhã às 10. (have → had, irregular)" },
      { tag:"futuro", en:"I will have breakfast at 10.", pt:"Vou tomar café da manhã às 10." }
    ],
    nota:'Repare: na negativa/pergunta o <span class="en" data-say="have">have</span> volta à base normalmente (do you <strong>have</strong>). O <em>has</em> só aparece no afirmativo do he/she/it.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você toma café da manhã:",
    linhas: [
      { en:"I eat breakfast at 10.", pt:"Como café da manhã às 10." },
      { en:"I grab breakfast around 10.", pt:"Pego algo pra comer por volta das 10." },
      { en:"I have a late breakfast.", pt:"Tomo um café da manhã tardio." },
      { en:"I never skip breakfast.", pt:"Nunca pulo o café da manhã." },
      { en:"Breakfast is at 10 for me.", pt:"Pra mim, o café é às 10." }
    ],
    nota:'<span class="en" data-say="skip">skip</span> = pular (uma refeição). <span class="en" data-say="grab">grab</span> = pegar rápido — muito usado com comida.'
  },

  expressoes: [
    { en:"have breakfast", pt:"tomar café da manhã" },
    { en:"have lunch", pt:"almoçar" },
    { en:"have dinner", pt:"jantar" },
    { en:"grab a bite", pt:"comer alguma coisa (rápido)" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"have", ipa:"/hæv/", soa:"“rév”", sentido:"ter / tomar / comer" },
      { palavra:"breakfast", ipa:"/ˈbrɛkfəst/", soa:"“BRÉK-fâst”", sentido:"café da manhã" },
      { palavra:"at", ipa:"/æt/", soa:"“ét”", sentido:"às (horário)" }
    ],
    fraseSoa:"ai rév BRÉK-fâst ét ten",
    fraseIpa:"/aɪ hæv ˈbrɛkfəst æt tɛn/",
    notaPron:'<span class="en" data-say="breakfast">breakfast</span> tem a força na 1ª sílaba: “<strong>BRÉK</strong>-fâst”, e o segundo “a” é fraquinho. Não é “brék-FÁST”.',
    cultura:'<span class="en" data-say="breakfast">breakfast</span> vem de <strong>break</strong> (quebrar) + <strong>fast</strong> (jejum) = “quebrar o jejum” da noite. Curioso: o mesmo <span class="en" data-say="fast">fast</span> que significa “rápido” também significa “jejum”.'
  },

  erros: [
    { tipo:"bad", texto:"I have the breakfast.", nota:"Refeição vai sem artigo: <strong>have breakfast</strong>." },
    { tipo:"good", en:"I have breakfast.", nota:"—" },
    { tipo:"bad", texto:"He have breakfast.", nota:"3ª pessoa de have é <strong>has</strong>: He has breakfast." },
    { tipo:"bad", texto:"I take breakfast.", nota:"Café da manhã se “tem/toma” com <strong>have</strong>, não “take”." }
  ],

  dica: {
    texto:'Guarde o trio das refeições, sempre com <span class="en" data-say="have">have</span> e sem artigo:',
    chips:["have breakfast","have lunch","have dinner","have a coffee"],
    nota:"Toque em cada uma. E lembre do único que muda: he/she/it → <strong>has</strong>."
  },

  dialogo: [
    { who:"A", en:"Do you have breakfast in the morning?", pt:"Você toma café da manhã de manhã?" },
    { who:"B", en:"Yeah, I have breakfast around 10.", pt:"Sim, tomo café da manhã por volta das 10." },
    { who:"A", en:"That's late! I have mine at 7.", pt:"Que tarde! Eu tomo o meu às 7." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete:", before:"I", after:"breakfast at 10.", resposta:"have" },
    { tipo:"completar", q:"Complete a 3ª pessoa (cuidado, é irregular):", before:"He", after:"breakfast at 9.", resposta:"has", wide:true, dica:"have vira ___ no he/she/it." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["breakfast","I","at","have","10"], resposta:"I have breakfast at 10." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela toma café da manhã às 9.", resposta:"She has breakfast at 9." },
    { tipo:"transformar", q:"Transforme", base:"I have breakfast at 10.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't have breakfast at 10." },
      { tag:"?", tagType:"bad", en:"Do you have breakfast at 10?" },
      { tag:"passado", en:"I had breakfast at 10." },
      { tag:"futuro", en:"I will have breakfast at 10." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com have + refeição + horário.", exemplo:"I have dinner at 8 p.m." }
  ],

  flashcards: [
    { pt:"Nunca pulo o café da manhã.", en:"I never skip breakfast." },
    { pt:"Ela toma café da manhã às 9.", en:"She has breakfast at 9." }
  ],

  conexao:'Volta o <span class="en" data-say="at">at</span> + horário (Lição 1), agora com o verbo <span class="en" data-say="have">have</span>. Cuidado para não confundir com a próxima lição: <span class="en" data-say="have breakfast">have breakfast</span> é <em>comer</em>; <span class="en" data-say="make breakfast">make breakfast</span> é <em>preparar</em>.',

  revisao: [
    "<strong>have + refeição</strong> = tomar/comer (have breakfast, sem artigo).",
    "3ª pessoa irregular: he/she/it → <strong>has</strong>.",
    "Passado irregular: have → <strong>had</strong>.",
    "Na negativa/pergunta o verbo volta à base: Do you <strong>have</strong>?",
    "Vizinhos: <strong>skip</strong> (pular), <strong>grab</strong> (pegar rápido)."
  ]
});
