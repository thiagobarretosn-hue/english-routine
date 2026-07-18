/* Lição 35 — I make dinner at home or order food on a delivery app.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:35,
    tituloEn:"I make dinner at home or order food on a delivery app.", tituloPt:"Eu janto em casa ou peço comida no aplicativo de entrega." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 35",
    en:"I make dinner at home or order food on a delivery app.", pt:"Eu faço o jantar em casa ou peço comida num aplicativo de entrega." },

  naturalLiteral: {
    natural:"I make dinner at home or order food on a delivery app.",
    literal:"Eu faço jantar em casa ou peço comida num aplicativo de entrega.",
    nota:'Duas opções ligadas por <span class="en" data-say="or">or</span> (ou): <span class="en" data-say="make dinner">make dinner</span> (preparar, Lição 9) ou <span class="en" data-say="order food">order food</span> (pedir comida). E usa-se <span class="en" data-say="on an app">on</span> an app (num app).'
  },

  estrutura: {
    linhas: [
      { palavra:"I make dinner at home", classe:"opção A", funcao:"1ª alternativa", traducao:"faço o jantar em casa", hl:true },
      { palavra:"or", classe:"conjunção", funcao:"liga as alternativas", traducao:"ou", hl:true },
      { palavra:"order food", classe:"opção B", funcao:"2ª alternativa", traducao:"peço comida" },
      { palavra:"on a delivery app", classe:"on + app", funcao:"onde", traducao:"num app de entrega" }
    ],
    nota:'<span class="en" data-say="order">order</span> = pedir (comida, um produto). E aplicativo é <span class="en" data-say="app">app</span> — como começa com som de vogal, o artigo é <strong>an</strong> app, mas aqui com adjetivo fica <span class="en" data-say="a delivery app">a delivery app</span> (o “a” concorda com “delivery”).'
  },

  molde: {
    intro:"O molde da alternativa com or:",
    formula:"[opção A] or [opção B]",
    exemplos: [
      { en:"I cook or I order in.", pt:"Cozinho ou peço em casa." },
      { en:"Tea or coffee?", pt:"Chá ou café?" },
      { en:"I walk or take the bus.", pt:"Vou a pé ou pego o ônibus." }
    ],
    nota:'<span class="en" data-say="order food">order food</span>, <span class="en" data-say="order takeout">order takeout</span> (pedir para viagem), <span class="en" data-say="order in">order in</span> (pedir para comer em casa) — variações muito usadas.'
  },

  conjugacao: {
    verbo: { base:"order food", past:"ordered food", irregular:false, ptPast:"eu pedi comida", ptFut:"eu vou pedir comida" },
    nota:'make → makes; order → orders.',
    linhas: [
      { p:"I", en:"I order food", say:"I order food on an app.", pt:"eu peço comida" },
      { p:"you", en:"you order food", say:"You order food on an app.", pt:"você pede comida" },
      { p:"we", en:"we order food", say:"We order food on an app.", pt:"nós pedimos comida" },
      { p:"they", en:"they order food", say:"They order food on an app.", pt:"eles pedem comida" },
      { p:"he", en:"he order<strong>s</strong> food", say:"He orders food on an app.", pt:"ele pede comida", hl:true },
      { p:"she", en:"she order<strong>s</strong> food", say:"She orders food on an app.", pt:"ela pede comida", hl:true },
      { p:"it", en:"it order<strong>s</strong>", say:"It orders.", pt:"(coisa) pede", hl:true }
    ]
  },

  formas: {
    intro:'Passados: make → <span class="en" data-say="made">made</span> (irregular); order → <span class="en" data-say="ordered">ordered</span> (regular).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't order food during the week.", pt:"Não peço comida durante a semana." },
      { tag:"?", tagType:"bad", en:"Do you order food on apps?", pt:"Você pede comida em apps?" },
      { tag:"passado", en:"I ordered food last night.", pt:"Pedi comida ontem à noite. (order → ordered)" },
      { tag:"futuro", en:"I will order food tonight.", pt:"Vou pedir comida hoje à noite." }
    ],
    nota:'<span class="en" data-say="tonight">tonight</span> = hoje à noite; <span class="en" data-say="last night">last night</span> = ontem à noite. Duas expressões de tempo muito úteis à noite.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que cozinha ou pede:",
    linhas: [
      { en:"I cook or I order in.", pt:"Cozinho ou peço em casa." },
      { en:"I make dinner or get takeout.", pt:"Faço o jantar ou pego comida pra viagem." },
      { en:"I order delivery.", pt:"Peço delivery." },
      { en:"Sometimes I cook, sometimes I order.", pt:"Às vezes cozinho, às vezes peço." },
      { en:"I use a food delivery app.", pt:"Uso um app de entrega de comida." }
    ],
    nota:'<span class="en" data-say="takeout">takeout</span> = comida para viagem (você busca); <span class="en" data-say="delivery">delivery</span> = entrega (trazem até você).'
  },

  expressoes: [
    { en:"make dinner", pt:"preparar o jantar" },
    { en:"order food", pt:"pedir comida" },
    { en:"order takeout", pt:"pedir para viagem" },
    { en:"a delivery app", pt:"um app de entrega" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"order", ipa:"/ˈɔːrdər/", soa:"“ÓR-der”", sentido:"pedir" },
      { palavra:"food", ipa:"/fuːd/", soa:"“fúud”", sentido:"comida (incontável)" },
      { palavra:"app", ipa:"/æp/", soa:"“áp”", sentido:"aplicativo" }
    ],
    fraseSoa:"ai mêik DÍ-ner ét rôum or ÓR-der fúud on â di-LÍ-vâri áp",
    fraseIpa:"/aɪ meɪk ˈdɪnər æt hoʊm ɔːr ˈɔːrdər fuːd ɒn ə dɪˈlɪvəri æp/",
    notaPron:'<span class="en" data-say="food">food</span> tem o “u” bem longo (“fúud”), diferente de <span class="en" data-say="foot">foot</span> (“fut”, u curto = pé). Alongue o u.',
    cultura:'<span class="en" data-say="What should we order?">“What should we order?”</span> é a pergunta clássica antes de pedir comida. E <span class="en" data-say="I\'m gonna order in tonight.">“I\'m gonna order in tonight.”</span> = vou pedir comida em casa hoje.'
  },

  erros: [
    { tipo:"bad", texto:"I ask food.", nota:"Comida se <strong>order</strong> (pedir), não “ask”." },
    { tipo:"bad", texto:"in a app.", nota:"É <strong>on an app</strong> (on + an, pois app começa com vogal)." },
    { tipo:"bad", texto:"I order a food.", nota:"<strong>food</strong> é incontável — sem “a”." },
    { tipo:"bad", texto:"He order food.", nota:"3ª pessoa: He order<strong>s</strong> food." }
  ],

  dica: {
    texto:'<strong>or</strong> abre alternativas; <strong>order</strong> é pedir. Toque e ouça as opções:',
    chips:["make dinner","order food","order takeout","order delivery"],
    nota:"make = cozinhar; order = pedir. takeout você busca; delivery trazem até você."
  },

  dialogo: [
    { who:"A", en:"Are you cooking tonight?", pt:"Vai cozinhar hoje à noite?" },
    { who:"B", en:"I make dinner at home or order food on a delivery app.", pt:"Faço o jantar em casa ou peço comida no app." },
    { who:"A", en:"Depends on the day, huh?", pt:"Depende do dia, né?" },
    { who:"B", en:"Exactly.", pt:"Exatamente." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a conjunção (alternativa):", before:"I cook", after:"I order food.", resposta:"or" },
    { tipo:"completar", q:"Complete o verbo (pedir):", before:"I", after:"food on an app.", resposta:"order" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["food","I","order"], resposta:"I order food." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele pede comida no app.", resposta:"He orders food on an app." },
    { tipo:"transformar", q:"Transforme", base:"I order food on an app.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't order food on an app." },
      { tag:"?", tagType:"bad", en:"Do you order food on an app?" },
      { tag:"passado", en:"I ordered food on an app." },
      { tag:"futuro", en:"I will order food on an app." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com “A or B”.", exemplo:"I stay home or go out." }
  ],

  flashcards: [
    { pt:"Cozinho ou peço em casa.", en:"I cook or I order in." },
    { pt:"Pedi comida ontem à noite.", en:"I ordered food last night." }
  ],

  conexao:'Retoma o <span class="en" data-say="make">make</span> (Lição 9) agora com <span class="en" data-say="dinner">dinner</span>, e apresenta o <span class="en" data-say="or">or</span> (alternativa) — que volta várias vezes no capítulo (jantar ou pedir, PC ou videogame, filme ou série).',

  revisao: [
    "<strong>or</strong> = ou (alternativa: A or B).",
    "<strong>order food</strong> = pedir comida (nunca “ask”).",
    "<strong>on an app</strong> (app começa com vogal → an).",
    "<strong>food</strong> é incontável (sem “a”).",
    "<strong>takeout</strong> (você busca) × <strong>delivery</strong> (trazem)."
  ]
});
