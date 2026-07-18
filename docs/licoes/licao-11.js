/* Lição 11 — For breakfast I usually have bread with eggs and a cup of coffee.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:11,
    tituloEn:"For breakfast I usually have bread with eggs and a cup of coffee.", tituloPt:"No café da manhã eu normalmente como pão com ovos e tomo uma xícara de café." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 11",
    en:"For breakfast I usually have bread with eggs and a cup of coffee.", pt:"No café da manhã eu normalmente como pão com ovos e uma xícara de café." },

  naturalLiteral: {
    natural:"For breakfast I usually have bread with eggs and a cup of coffee.",
    literal:"Para café da manhã eu usualmente tenho pão com ovos e uma xícara de café.",
    nota:'Sua primeira frase longa! Três peças novas: <span class="en" data-say="usually">usually</span> (normalmente) vem <strong>antes</strong> do verbo; <span class="en" data-say="a cup of coffee">a cup of coffee</span> (uma xícara de café); e <span class="en" data-say="bread">bread</span> é incontável — não tem plural.'
  },

  estrutura: {
    linhas: [
      { palavra:"For breakfast", classe:"expressão", funcao:"contexto (no café)", traducao:"no café da manhã" },
      { palavra:"I usually have", classe:"sujeito + advérbio + verbo", funcao:"o que costumo comer", traducao:"eu normalmente como", hl:true },
      { palavra:"bread with eggs", classe:"substantivo + with", funcao:"o alimento", traducao:"pão com ovos" },
      { palavra:"and", classe:"conjunção", funcao:"soma o item seguinte", traducao:"e" },
      { palavra:"a cup of coffee", classe:"quantificador", funcao:"a bebida", traducao:"uma xícara de café" }
    ],
    nota:'Posição do <span class="en" data-say="usually">usually</span>: entre o sujeito e o verbo — <span class="en" data-say="I usually have">I usually have</span>. Nunca “I have usually”.'
  },

  molde: {
    intro:"O molde da frequência + refeição:",
    formula:"For [refeição] I usually have + comida + and + bebida",
    exemplos: [
      { en:"For lunch I usually have rice and beans.", pt:"No almoço normalmente como arroz e feijão." },
      { en:"For dinner I usually have soup.", pt:"No jantar normalmente tomo sopa." },
      { en:"I usually have a cup of tea.", pt:"Normalmente tomo uma xícara de chá." }
    ],
    nota:'Advérbios de frequência (<span class="en" data-say="usually">usually</span>, <span class="en" data-say="always">always</span>, <span class="en" data-say="never">never</span>, <span class="en" data-say="often">often</span>) vão sempre <strong>antes</strong> do verbo principal.'
  },

  conjugacao: {
    verbo: { base:"have coffee", past:"had coffee", irregular:true, ptPast:"eu tomei café", ptFut:"eu vou tomar café" },
    nota:'have → has (Lição 8). O <span class="en" data-say="usually">usually</span> fica entre a pessoa e o verbo em todas.',
    linhas: [
      { p:"I", en:"I usually have", say:"I usually have coffee.", pt:"eu normalmente tomo" },
      { p:"you", en:"you usually have", say:"You usually have coffee.", pt:"você normalmente toma" },
      { p:"we", en:"we usually have", say:"We usually have coffee.", pt:"nós normalmente tomamos" },
      { p:"they", en:"they usually have", say:"They usually have coffee.", pt:"eles normalmente tomam" },
      { p:"he", en:"he usually <strong>has</strong>", say:"He usually has coffee.", pt:"ele normalmente toma", hl:true },
      { p:"she", en:"she usually <strong>has</strong>", say:"She usually has coffee.", pt:"ela normalmente toma", hl:true },
      { p:"it", en:"it usually <strong>has</strong>", say:"It usually has.", pt:"(coisa) normalmente tem", hl:true }
    ]
  },

  formas: {
    intro:'Na negativa, o <span class="en" data-say="usually">usually</span> costuma vir depois do don\'t: <span class="en" data-say="I don\'t usually">I don\'t usually…</span>',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't usually have coffee.", pt:"Eu normalmente não tomo café." },
      { tag:"?", tagType:"bad", en:"Do you usually have coffee?", pt:"Você normalmente toma café?" },
      { tag:"passado", en:"I usually had coffee.", pt:"Eu normalmente tomava café. (have → had)" },
      { tag:"futuro", en:"I will usually have coffee.", pt:"Eu normalmente vou tomar café." }
    ],
    nota:'<span class="en" data-say="I don\'t usually">I don\'t usually</span> (normalmente não) é bem mais natural que “I usually don\'t”.'
  },

  speakNaturally: {
    intro:"Formas naturais de contar seu café da manhã típico:",
    linhas: [
      { en:"I usually have eggs and toast.", pt:"Normalmente como ovos e torrada." },
      { en:"My go-to breakfast is bread and eggs.", pt:"Meu café da manhã de sempre é pão e ovos." },
      { en:"I always have coffee in the morning.", pt:"Sempre tomo café de manhã." },
      { en:"I typically grab a coffee and some bread.", pt:"Geralmente pego um café e um pão." },
      { en:"It's usually eggs and coffee for me.", pt:"Pra mim, geralmente é ovos e café." }
    ],
    nota:'<span class="en" data-say="go-to">go-to</span> = a opção padrão, a de sempre: <span class="en" data-say="my go-to breakfast">my go-to breakfast</span>.'
  },

  expressoes: [
    { en:"a cup of coffee", pt:"uma xícara de café" },
    { en:"a glass of water", pt:"um copo de água" },
    { en:"a piece of bread", pt:"um pedaço de pão" },
    { en:"bread and butter", pt:"pão com manteiga" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"bread", ipa:"/brɛd/", soa:"“bréd”", sentido:"pão (incontável)" },
      { palavra:"coffee", ipa:"/ˈkɔːfi/", soa:"“KÓ-fi”", sentido:"café" },
      { palavra:"usually", ipa:"/ˈjuːʒuəli/", soa:"“IÚ-ju-a-li”", sentido:"normalmente" },
      { palavra:"a cup of", ipa:"/ə kʌp ʌv/", soa:"“â câp ov”", sentido:"uma xícara de" }
    ],
    fraseSoa:"for BRÉK-fâst ai IÚ-ju-a-li rév bréd uith égz end â câp ov KÓ-fi",
    fraseIpa:"/fɔːr ˈbrɛkfəst aɪ ˈjuːʒuəli hæv brɛd wɪð ɛɡz ænd ə kʌp ʌv ˈkɔːfi/",
    notaPron:'<span class="en" data-say="usually">usually</span> é longa mas tem ritmo: “IÚ-ju-a-li”. E <span class="en" data-say="coffee">coffee</span> é “KÓ-fi”, não “cofí”.',
    cultura:'<span class="en" data-say="What\'s your go-to breakfast?">“What\'s your go-to breakfast?”</span> é uma pergunta simpática de conversa. Falar sua rotina de comida é um ótimo aquecimento de conversa em inglês.'
  },

  erros: [
    { tipo:"bad", texto:"I have usually coffee.", nota:"O advérbio vem antes do verbo: <strong>I usually have</strong> coffee." },
    { tipo:"good", en:"I usually have coffee.", nota:"—" },
    { tipo:"bad", texto:"a coffee cup", nota:"Para a bebida é <strong>a cup of coffee</strong> (“coffee cup” seria a xícara vazia)." },
    { tipo:"bad", texto:"I eat two breads.", nota:"<strong>bread</strong> é incontável — “two pieces of bread”, nunca “breads”." }
  ],

  dica: {
    texto:'Fixe a posição dos advérbios de frequência — todos vêm <strong>antes</strong> do verbo principal:',
    chips:["I always have coffee","I usually have eggs","I often skip breakfast","I never drink soda"],
    nota:"Toque em cada uma. always / usually / often / never — todos grudam antes do verbo."
  },

  dialogo: [
    { who:"A", en:"What do you usually have for breakfast?", pt:"O que você normalmente toma no café da manhã?" },
    { who:"B", en:"I usually have bread with eggs and a cup of coffee.", pt:"Normalmente como pão com ovos e uma xícara de café." },
    { who:"A", en:"Simple and good.", pt:"Simples e bom." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete na posição certa:", before:"I", after:"have coffee. (usually)", resposta:"usually", wide:true, dica:"vem antes do verbo have." },
    { tipo:"completar", q:"Complete o quantificador:", before:"a cup", after:"coffee.", resposta:"of" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["usually","I","coffee","have"], resposta:"I usually have coffee." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela normalmente toma uma xícara de café.", resposta:"She usually has a cup of coffee." },
    { tipo:"transformar", q:"Transforme", base:"I usually have coffee.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't usually have coffee." },
      { tag:"?", tagType:"bad", en:"Do you usually have coffee?" },
      { tag:"passado", en:"I usually had coffee." },
      { tag:"futuro", en:"I will usually have coffee." }
    ]},
    { tipo:"escrever", q:"Descreva seu café da manhã: “For breakfast I usually have ___.”", exemplo:"For breakfast I usually have fruit and yogurt." }
  ],

  flashcards: [
    { pt:"Normalmente tomo uma xícara de café.", en:"I usually have a cup of coffee." },
    { pt:"No almoço normalmente como arroz e feijão.", en:"For lunch I usually have rice and beans." }
  ],

  conexao:'Esta frase costura tudo do café da manhã: o <span class="en" data-say="have">have</span> da Lição 8, os <span class="en" data-say="eggs">eggs</span> da Lição 10, e apresenta os advérbios de frequência com o <span class="en" data-say="usually">usually</span> — que vão voltar em quase toda descrição de rotina daqui pra frente.',

  revisao: [
    "Advérbios de frequência (<strong>usually, always, never, often</strong>) vêm <strong>antes</strong> do verbo.",
    "Quantificadores: <strong>a cup of</strong> coffee, a glass of water, a piece of bread.",
    "<strong>bread</strong> é incontável (sem plural).",
    "Negativa natural: <strong>I don't usually</strong> (normalmente não).",
    "<strong>go-to</strong> = a opção de sempre."
  ]
});
