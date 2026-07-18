/* Lição 19 — On Thursdays I do cardio.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:19,
    tituloEn:"On Thursdays I do cardio.", tituloPt:"Eu faço cardio (treino aeróbico) na quinta-feira." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 19",
    en:"On Thursdays I do cardio.", pt:"Às quintas eu faço cardio (treino aeróbico)." },

  naturalLiteral: {
    natural:"On Thursdays I do cardio.",
    literal:"Nas quintas eu faço cardio.",
    nota:'Exercício se “<span class="en" data-say="do">do</span>” — <span class="en" data-say="do cardio">do cardio</span>, <span class="en" data-say="do yoga">do yoga</span> — nunca “make cardio”. É a mesma diferença do/make que apareceu lá no “I make my bed”.'
  },

  estrutura: {
    linhas: [
      { palavra:"On Thursdays", classe:"on + dia (plural)", funcao:"quando (hábito)", traducao:"às quintas", hl:true },
      { palavra:"I do", classe:"sujeito + verbo", funcao:"a ação (fazer)", traducao:"eu faço", hl:true },
      { palavra:"cardio", classe:"substantivo", funcao:"a atividade", traducao:"cardio / aeróbico" }
    ],
    nota:'<span class="en" data-say="cardio">cardio</span> é a forma curta de “cardiovascular exercise” — corrida, esteira, bike, qualquer treino aeróbico.'
  },

  molde: {
    intro:"O molde do verbo do para atividades:",
    formula:"I do + [atividade / exercício]",
    exemplos: [
      { en:"I do yoga.", pt:"Faço yoga." },
      { en:"I do a workout.", pt:"Faço um treino." },
      { en:"I do some exercise.", pt:"Faço um exercício." }
    ],
    nota:'A regra geral: <strong>do</strong> = fazer atividades/tarefas (do cardio, do homework, do the dishes); <strong>make</strong> = criar/produzir algo (make breakfast, make a decision).'
  },

  conjugacao: {
    nota:'⚠️ <span class="en" data-say="do">do</span> é irregular: he <span class="en" data-say="does">does</span> (o mesmo “does” que você já usa nas perguntas!).',
    linhas: [
      { p:"I", en:"I do cardio", say:"I do cardio.", pt:"eu faço cardio" },
      { p:"you", en:"you do cardio", say:"You do cardio.", pt:"você faz cardio" },
      { p:"we", en:"we do cardio", say:"We do cardio.", pt:"nós fazemos cardio" },
      { p:"they", en:"they do cardio", say:"They do cardio.", pt:"eles fazem cardio" },
      { p:"he", en:"he <strong>does</strong> cardio", say:"He does cardio.", pt:"ele faz cardio", hl:true },
      { p:"she", en:"she <strong>does</strong> cardio", say:"She does cardio.", pt:"ela faz cardio", hl:true },
      { p:"it", en:"it <strong>does</strong>", say:"It does.", pt:"(coisa) faz", hl:true }
    ]
  },

  formas: {
    intro:'Curiosidade: aqui o <span class="en" data-say="do">do</span> aparece <strong>duas vezes</strong> — o auxiliar (do/does/did) + o verbo principal (do).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't do cardio on Thursdays.", pt:"Eu não faço cardio às quintas. (don't + do)" },
      { tag:"?", tagType:"bad", en:"Do you do cardio on Thursdays?", pt:"Você faz cardio às quintas? (Do you + do)" },
      { tag:"passado", en:"I did cardio on Thursday.", pt:"Fiz cardio na quinta. (do → did)" },
      { tag:"futuro", en:"I will do cardio on Thursday.", pt:"Vou fazer cardio na quinta." }
    ],
    nota:'<span class="en" data-say="Do you do cardio?">Do you do cardio?</span> parece estranho, mas está certíssimo: o primeiro “do” é o ajudante da pergunta, o segundo é o verbo “fazer”.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar de cardio:",
    linhas: [
      { en:"Thursday is cardio day.", pt:"Quinta é dia de cardio." },
      { en:"I do some cardio on Thursdays.", pt:"Faço um cardio às quintas." },
      { en:"I run on Thursdays.", pt:"Corro às quintas." },
      { en:"I hit the treadmill.", pt:"Vou para a esteira." },
      { en:"On Thursdays I do a light workout.", pt:"Às quintas faço um treino leve." }
    ],
    nota:'<span class="en" data-say="treadmill">treadmill</span> = esteira. <span class="en" data-say="cardio">cardio</span> cobre corrida, bike, elíptico, pular corda — tudo que acelera o coração.'
  },

  expressoes: [
    { en:"do cardio", pt:"fazer cardio" },
    { en:"do yoga", pt:"fazer yoga" },
    { en:"do a workout", pt:"fazer um treino" },
    { en:"cardio day", pt:"dia de cardio" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"do", ipa:"/duː/", soa:"“du”", sentido:"fazer" },
      { palavra:"cardio", ipa:"/ˈkɑːrdioʊ/", soa:"“KÁR-di-ôu”", sentido:"treino aeróbico" },
      { palavra:"Thursday", ipa:"/ˈθɜːrzdeɪ/", soa:"“THÂRZ-dei”", sentido:"quinta-feira" }
    ],
    fraseSoa:"on THÂRZ-deis ai du KÁR-di-ôu",
    fraseIpa:"/ɒn ˈθɜːrzdeɪz aɪ duː ˈkɑːrdioʊ/",
    notaPron:'<span class="en" data-say="Thursday">Thursday</span> começa com o som <strong>/θ/</strong> (língua entre os dentes, como em “teeth”), não com “t” nem “f”: “THÂRZ-dei”.',
    cultura:'Não confunda <span class="en" data-say="Thursday">Thursday</span> (quinta, com “th”) e <span class="en" data-say="Tuesday">Tuesday</span> (terça, com “t”). Os dois começam parecido na escrita e confundem muito brasileiro.'
  },

  erros: [
    { tipo:"bad", texto:"I make cardio.", nota:"Exercício se <strong>do</strong>, não “make”: I do cardio." },
    { tipo:"good", en:"I do cardio.", nota:"—" },
    { tipo:"bad", texto:"He do cardio.", nota:"3ª pessoa de do é <strong>does</strong>: He does cardio." },
    { tipo:"bad", texto:"Thursday com “t” no começo.", nota:"É o som /θ/ (th): <strong>THÂRZ-dei</strong>." }
  ],

  dica: {
    texto:'A dupla eterna: <strong>DO</strong> = fazer atividades; <strong>MAKE</strong> = criar coisas. Toque e compare:',
    chips:["do cardio","do yoga","do the dishes","make breakfast"],
    nota:"do cardio / do yoga / do the dishes (atividades) × make breakfast (você cria algo)."
  },

  dialogo: [
    { who:"A", en:"Do you do cardio?", pt:"Você faz cardio?" },
    { who:"B", en:"Yeah, on Thursdays I do cardio.", pt:"Sim, às quintas eu faço cardio." },
    { who:"A", en:"Nice. What do you do — run or bike?", pt:"Legal. O que você faz — corre ou pedala?" },
    { who:"B", en:"I usually run.", pt:"Geralmente corro." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete o verbo (fazer atividade):", before:"On Thursdays I", after:"cardio.", resposta:"do" },
    { tipo:"completar", q:"Complete a 3ª pessoa (irregular):", before:"He", after:"cardio on Thursdays.", resposta:"does", wide:true, dica:"do vira ___ no he/she/it." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["cardio","Thursdays","I","On","do"], resposta:"On Thursdays I do cardio." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela faz cardio às quintas.", resposta:"She does cardio on Thursdays." },
    { tipo:"transformar", q:"Transforme", base:"On Thursdays I do cardio.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't do cardio on Thursdays." },
      { tag:"?", tagType:"bad", en:"Do you do cardio on Thursdays?" },
      { tag:"passado", en:"I did cardio on Thursday." },
      { tag:"futuro", en:"I will do cardio on Thursday." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com do + atividade.", exemplo:"On Sundays I do yoga." }
  ],

  flashcards: [
    { pt:"Quinta é dia de cardio.", en:"Thursday is cardio day." },
    { pt:"Ela faz cardio às quintas.", en:"She does cardio on Thursdays." }
  ],

  conexao:'Fecha sua semana de treino (segunda a quinta). Reforça a diferença <strong>do × make</strong> (do “I make my bed” da Lição 3) e mostra o <span class="en" data-say="does">does</span> como verbo — o mesmo que você já usava só como ajudante das perguntas.',

  revisao: [
    "<strong>do</strong> = fazer atividades (do cardio, do yoga); <strong>make</strong> = criar.",
    "3ª pessoa irregular: do → <strong>does</strong>; passado → <strong>did</strong>.",
    "<strong>Do you do…?</strong> — o primeiro é ajudante, o segundo é o verbo.",
    "<strong>Thursday</strong> = som /θ/ (“THÂRZ-dei”), diferente de Tuesday.",
    "<strong>cardio</strong> = treino aeróbico (corrida, bike, esteira)."
  ]
});
