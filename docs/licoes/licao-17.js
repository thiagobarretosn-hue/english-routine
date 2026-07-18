/* Lição 17 — On Tuesdays I train back and biceps.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:17,
    tituloEn:"On Tuesdays I train back and biceps.", tituloPt:"Normalmente às terças eu treino costas e bíceps." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 17",
    en:"On Tuesdays I train back and biceps.", pt:"Às terças eu treino costas e bíceps." },

  naturalLiteral: {
    natural:"On Tuesdays I train back and biceps.",
    literal:"Nas terças eu treino costas e bíceps.",
    nota:'Detalhe curioso: “costas” é plural em português, mas <span class="en" data-say="back">back</span> é <strong>singular</strong> em inglês (my back = minhas costas). E, com só <strong>dois</strong> itens na lista, usa-se apenas <span class="en" data-say="and">and</span>, sem vírgula.'
  },

  estrutura: {
    linhas: [
      { palavra:"On Tuesdays", classe:"on + dia (plural)", funcao:"quando (hábito)", traducao:"às terças", hl:true },
      { palavra:"I train", classe:"sujeito + verbo", funcao:"a ação", traducao:"eu treino" },
      { palavra:"back and biceps", classe:"substantivo + and + substantivo", funcao:"os músculos", traducao:"costas e bíceps", hl:true }
    ],
    nota:'Compare com a Lição 16: lá eram 3 itens (com vírgulas); aqui são só 2 — então basta <span class="en" data-say="back and biceps">back and biceps</span>, sem vírgula nenhuma.'
  },

  molde: {
    intro:"A regra das listas, lado a lado:",
    formula:"2 itens: A and B   /   3+ itens: A, B, and C",
    exemplos: [
      { en:"back and biceps", pt:"costas e bíceps (2 itens)" },
      { en:"chest, shoulders, and triceps", pt:"peito, ombro e tríceps (3 itens)" },
      { en:"eggs and coffee", pt:"ovos e café (2 itens)" }
    ],
    nota:'Simples assim: dois itens → só <strong>and</strong>. Três ou mais → vírgulas e um <strong>and</strong> no fim.'
  },

  conjugacao: {
    verbo: { base:"train back", past:"trained back", irregular:false, ptPast:"eu treinei costas", ptFut:"eu vou treinar costas" },
    nota:'train → he trains (revisão da Lição 16).',
    linhas: [
      { p:"I", en:"I train back", say:"I train back on Tuesdays.", pt:"eu treino costas" },
      { p:"you", en:"you train back", say:"You train back on Tuesdays.", pt:"você treina costas" },
      { p:"we", en:"we train back", say:"We train back on Tuesdays.", pt:"nós treinamos costas" },
      { p:"they", en:"they train back", say:"They train back on Tuesdays.", pt:"eles treinam costas" },
      { p:"he", en:"he train<strong>s</strong> back", say:"He trains back on Tuesdays.", pt:"ele treina costas", hl:true },
      { p:"she", en:"she train<strong>s</strong> back", say:"She trains back on Tuesdays.", pt:"ela treina costas", hl:true },
      { p:"it", en:"it train<strong>s</strong>", say:"It trains.", pt:"(coisa) treina", hl:true }
    ]
  },

  formas: {
    intro:'Mesma base da Lição 16 — passado trained.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't train back on Tuesdays.", pt:"Eu não treino costas às terças." },
      { tag:"?", tagType:"bad", en:"Do you train back on Tuesdays?", pt:"Você treina costas às terças?" },
      { tag:"passado", en:"I trained back on Tuesday.", pt:"Treinei costas na terça." },
      { tag:"futuro", en:"I will train back on Tuesday.", pt:"Vou treinar costas na terça." }
    ],
    nota:'<span class="en" data-say="Tuesday">Tuesday</span> é uma das palavras que brasileiro mais erra na pronúncia — ouça bem: “TÚUZ-dei”.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar do treino de terça:",
    linhas: [
      { en:"Tuesday is back day.", pt:"Terça é dia de costas." },
      { en:"On Tuesdays I do pull.", pt:"Às terças faço treino de puxar (pull)." },
      { en:"I hit back and biceps on Tuesdays.", pt:"Treino costas e bíceps às terças." },
      { en:"Tuesday is pull day.", pt:"Terça é dia de pull." },
      { en:"I work my back on Tuesdays.", pt:"Trabalho as costas às terças." }
    ],
    nota:'Treinar costas e bíceps junto é o clássico <span class="en" data-say="pull day">pull day</span> (dia de puxar) — o par do <span class="en" data-say="push day">push day</span> da Lição 16.'
  },

  expressoes: [
    { en:"train back", pt:"treinar costas" },
    { en:"pull day", pt:"dia de puxar" },
    { en:"biceps curl", pt:"rosca de bíceps" },
    { en:"back muscles", pt:"músculos das costas" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"back", ipa:"/bæk/", soa:"“bék”", sentido:"costas (singular em inglês)" },
      { palavra:"biceps", ipa:"/ˈbaɪsɛps/", soa:"“BÁI-seps”", sentido:"bíceps" },
      { palavra:"Tuesday", ipa:"/ˈtuːzdeɪ/", soa:"“TÚUZ-dei”", sentido:"terça-feira" }
    ],
    fraseSoa:"on TÚUZ-deis ai trêin bék end BÁI-seps",
    fraseIpa:"/ɒn ˈtuːzdeɪz aɪ treɪn bæk ænd ˈbaɪsɛps/",
    notaPron:'<span class="en" data-say="back">back</span> tem o som /æ/ (aquele “é” bem aberto): “bék”. E <span class="en" data-say="Tuesday">Tuesday</span> começa com “tiú/tú”, não “tchusdei”.',
    cultura:'Os dias da semana em inglês são sempre <strong>maiúsculos</strong>: Monday, Tuesday, Wednesday… diferente do português. Isso vale também para os meses.'
  },

  erros: [
    { tipo:"bad", texto:"I train my backs.", nota:"<strong>back</strong> é singular em inglês: my back (minhas costas)." },
    { tipo:"bad", texto:"back, and biceps", nota:"Com só 2 itens não usa vírgula: <strong>back and biceps</strong>." },
    { tipo:"bad", texto:"In Tuesdays.", nota:"Dias levam <strong>on</strong>: On Tuesdays." },
    { tipo:"bad", texto:"on tuesdays (minúsculo).", nota:"Dias da semana são <strong>maiúsculos</strong>: Tuesdays." }
  ],

  dica: {
    texto:'Fixe a regra da vírgula pelo número de itens. Toque e ouça a diferença:',
    chips:["back and biceps","chest, shoulders, and triceps","eggs and coffee","legs"],
    nota:"2 itens = só and (sem vírgula). 3+ itens = vírgulas + and no fim."
  },

  dialogo: [
    { who:"A", en:"And on Tuesdays?", pt:"E às terças?" },
    { who:"B", en:"On Tuesdays I train back and biceps.", pt:"Às terças treino costas e bíceps." },
    { who:"A", en:"Push on Monday, pull on Tuesday. Classic.", pt:"Push na segunda, pull na terça. Clássico." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a conjunção (2 itens):", before:"I train back", after:"biceps.", resposta:"and" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"back on Tuesdays.", resposta:"trains", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["biceps","back","and","train","I"], resposta:"I train back and biceps." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele treina costas e bíceps às terças.", resposta:"He trains back and biceps on Tuesdays." },
    { tipo:"transformar", q:"Transforme", base:"On Tuesdays I train back.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't train back on Tuesdays." },
      { tag:"?", tagType:"bad", en:"Do you train back on Tuesdays?" },
      { tag:"passado", en:"I trained back on Tuesday." },
      { tag:"futuro", en:"I will train back on Tuesday." }
    ]},
    { tipo:"escrever", q:"Escreva uma lista de 3 itens (use vírgulas + and).", exemplo:"I train back, biceps, and abs." }
  ],

  flashcards: [
    { pt:"Terça é dia de costas.", en:"Tuesday is back day." },
    { pt:"Às terças treino costas e bíceps.", en:"On Tuesdays I train back and biceps." }
  ],

  conexao:'Continua a rotina semanal da Lição 16, agora contrastando <strong>listas de 2 itens</strong> (só and) com as de 3 (com vírgulas). E fecha o par push/pull: segunda é push, terça é pull.',

  revisao: [
    "2 itens: <strong>A and B</strong> (sem vírgula). 3+: <strong>A, B, and C</strong>.",
    "<strong>back</strong> = costas, mas é <strong>singular</strong> em inglês.",
    "Dias da semana são <strong>maiúsculos</strong> e levam <strong>on</strong>.",
    "<strong>Tuesday</strong> = “TÚUZ-dei”.",
    "Terça = <strong>pull day</strong> (par do push da segunda)."
  ]
});
