/* Lição 22 — When I get home, I take off my clothes and take a shower.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:4, capituloNome:"Lunch & Afternoon", licao:22,
    tituloEn:"When I get home, I take off my clothes and take a shower.", tituloPt:"Quando chego em casa, tiro a roupa e vou tomar banho." },

  hero: { time:"VOLUME 1 · CAP. 4 — LUNCH & AFTERNOON · LIÇÃO 22",
    en:"When I get home, I take off my clothes and take a shower.", pt:"Quando chego em casa, tiro a roupa e tomo banho." },

  naturalLiteral: {
    natural:"When I get home, I take off my clothes and take a shower.",
    literal:"Quando eu chego em casa, eu tiro fora minhas roupas e tomo um banho.",
    nota:'Três peças: <span class="en" data-say="when">when</span> + oração (quando…); <span class="en" data-say="get home">get home</span> = chegar em casa (home sem “to”); e <span class="en" data-say="take off">take off</span> = tirar (a roupa) — um phrasal verb.'
  },

  estrutura: {
    linhas: [
      { palavra:"When I get home,", classe:"when + oração", funcao:"quando (a condição)", traducao:"quando chego em casa", hl:true },
      { palavra:"I take off", classe:"phrasal verb", funcao:"1ª ação (tirar)", traducao:"eu tiro", hl:true },
      { palavra:"my clothes", classe:"possessivo + substantivo", funcao:"o objeto", traducao:"minha roupa" },
      { palavra:"and take a shower", classe:"and + 2ª ação", funcao:"e tomo banho", traducao:"e tomo banho" }
    ],
    nota:'<span class="en" data-say="when">when</span> funciona como o <span class="en" data-say="after">after</span> que você já conhece: precisa de sujeito + verbo depois (when I get home). E <span class="en" data-say="get">get</span> aqui = chegar.'
  },

  molde: {
    intro:"Dois moldes úteis: quando algo acontece + chegar a lugares.",
    formula:"When + oração, oração principal  /  get + home / to work",
    exemplos: [
      { en:"When I wake up, I check my phone.", pt:"Quando acordo, olho o celular." },
      { en:"I get home at 6.", pt:"Chego em casa às 6." },
      { en:"I get to work at 8.", pt:"Chego ao trabalho às 8." }
    ],
    nota:'<span class="en" data-say="get home">get home</span> (sem “to”), mas <span class="en" data-say="get to work">get to work</span> / <span class="en" data-say="get to the gym">get to the gym</span> (com “to”) — a mesma exceção do “home” da Lição 14.'
  },

  conjugacao: {
    verbo: { base:"get home", past:"got home", irregular:true, ptPast:"eu cheguei em casa", ptFut:"eu vou chegar em casa" },
    nota:'get → he gets; take off → he takes off.',
    linhas: [
      { p:"I", en:"I get home", say:"When I get home, I relax.", pt:"eu chego em casa" },
      { p:"you", en:"you get home", say:"When you get home, you relax.", pt:"você chega em casa" },
      { p:"we", en:"we get home", say:"When we get home, we relax.", pt:"nós chegamos em casa" },
      { p:"they", en:"they get home", say:"When they get home, they relax.", pt:"eles chegam em casa" },
      { p:"he", en:"he get<strong>s</strong> home", say:"When he gets home, he relaxes.", pt:"ele chega em casa", hl:true },
      { p:"she", en:"she get<strong>s</strong> home", say:"When she gets home, she relaxes.", pt:"ela chega em casa", hl:true },
      { p:"it", en:"it get<strong>s</strong>", say:"It gets.", pt:"(coisa) fica/chega", hl:true }
    ]
  },

  formas: {
    intro:'⚠️ Passados irregulares: get → <span class="en" data-say="got">got</span>; take → <span class="en" data-say="took">took</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't take off my clothes when I get home.", pt:"Eu não tiro a roupa quando chego em casa." },
      { tag:"?", tagType:"bad", en:"Do you take a shower when you get home?", pt:"Você toma banho quando chega em casa?" },
      { tag:"passado", en:"When I got home, I took off my clothes.", pt:"Quando cheguei, tirei a roupa. (got / took)" },
      { tag:"futuro", en:"When I get home, I will take a shower.", pt:"Quando chegar, vou tomar banho." }
    ],
    nota:'Repare: mesmo no futuro, depois de <span class="en" data-say="when">when</span> o verbo fica no presente (when I <strong>get</strong> home, I will…). Regra fixa do inglês.'
  },

  speakNaturally: {
    intro:"Formas naturais do “chegar e se trocar”:",
    linhas: [
      { en:"When I get home, I get changed.", pt:"Quando chego, troco de roupa." },
      { en:"As soon as I get home, I shower.", pt:"Assim que chego, tomo banho." },
      { en:"I get comfortable when I'm home.", pt:"Fico à vontade quando estou em casa." },
      { en:"The first thing I do is change.", pt:"A primeira coisa que faço é me trocar." },
      { en:"I take off my work clothes.", pt:"Tiro a roupa de trabalho." }
    ],
    nota:'<span class="en" data-say="get changed">get changed</span> = trocar de roupa; <span class="en" data-say="get comfortable">get comfortable</span> = ficar à vontade (roupa de casa).'
  },

  expressoes: [
    { en:"get home", pt:"chegar em casa" },
    { en:"take off", pt:"tirar (roupa) / decolar" },
    { en:"get changed", pt:"trocar de roupa" },
    { en:"take a shower", pt:"tomar banho" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"get", ipa:"/ɡɛt/", soa:"“guét”", sentido:"chegar / conseguir / ficar" },
      { palavra:"clothes", ipa:"/kloʊðz/", soa:"“clôuz”", sentido:"roupa (sempre plural)" },
      { palavra:"take off", ipa:"/teɪk ɒf/", soa:"“têik óf”", sentido:"tirar (roupa)" }
    ],
    fraseSoa:"uén ai guét rôum, ai têik óf mai clôuz end têik â CHÁ-uer",
    fraseIpa:"/wɛn aɪ ɡɛt hoʊm aɪ teɪk ɒf maɪ kloʊðz ænd teɪk ə ˈʃaʊər/",
    notaPron:'<span class="en" data-say="clothes">clothes</span> é famosa por ser difícil: soa quase igual a <span class="en" data-say="close">close</span> — “clôuz”. Não tente pronunciar o “th” separado; ele quase sume.',
    cultura:'<span class="en" data-say="take off">take off</span> tem dois sentidos: tirar a roupa e <em>decolar</em> (o avião “takes off”). O contexto sempre deixa claro qual é.'
  },

  erros: [
    { tipo:"bad", texto:"when I get to home.", nota:"Casa sem “to”: <strong>get home</strong>." },
    { tipo:"good", en:"When I get home.", nota:"—" },
    { tipo:"bad", texto:"I take out my clothes.", nota:"Tirar roupa é <strong>take off</strong> (take out = tirar de dentro / levar embora)." },
    { tipo:"bad", texto:"my cloth.", nota:"Roupa é sempre <strong>clothes</strong> (plural)." }
  ],

  dica: {
    texto:'<span class="en" data-say="when">when</span> funciona igual ao <span class="en" data-say="after">after</span>: sujeito + verbo depois. E <span class="en" data-say="get">get</span> é um coringa (chegar, ficar, conseguir):',
    chips:["get home","get changed","get comfortable","take off my clothes"],
    nota:"Toque em cada uma. get = chegar/ficar; take off = tirar (roupa)."
  },

  dialogo: [
    { who:"A", en:"What's the first thing you do when you get home?", pt:"Qual é a primeira coisa que você faz quando chega em casa?" },
    { who:"B", en:"I take off my clothes and take a shower.", pt:"Tiro a roupa e tomo banho." },
    { who:"A", en:"Same. I need to get comfortable right away.", pt:"Igual. Preciso ficar à vontade na hora." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (chegar em casa, sem “to”):", before:"When I get", after:", I relax.", resposta:"home" },
    { tipo:"completar", q:"Complete o phrasal (tirar roupa):", before:"I take", after:"my clothes.", resposta:"off" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["off","I","clothes","take","my"], resposta:"I take off my clothes." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Quando ele chega em casa, toma banho.", resposta:"When he gets home, he takes a shower." },
    { tipo:"transformar", q:"Transforme", base:"When I get home, I take a shower.", formas:[
      { tag:"neg", tagType:"bad", en:"When I get home, I don't take a shower." },
      { tag:"?", tagType:"bad", en:"Do you take a shower when you get home?" },
      { tag:"passado", en:"When I got home, I took a shower." },
      { tag:"futuro", en:"When I get home, I will take a shower." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com “When I get home, ___.”", exemplo:"When I get home, I make dinner." }
  ],

  flashcards: [
    { pt:"Quando chego em casa, troco de roupa.", en:"When I get home, I get changed." },
    { pt:"Tiro a roupa e tomo banho.", en:"I take off my clothes and take a shower." }
  ],

  conexao:'Abre o <strong>Capítulo 4 — Lunch & Afternoon</strong>. Reencontra o <span class="en" data-say="take a shower">take a shower</span> (Lição 12) e a regra do <span class="en" data-say="home">home</span> sem “to” (Lição 14). O <span class="en" data-say="when">when</span> é primo do <span class="en" data-say="after">after</span> da Lição 2.',

  revisao: [
    "<strong>when</strong> + sujeito + verbo (igual ao after).",
    "<strong>get home</strong> (sem to); <strong>get to work</strong> (com to).",
    "<strong>take off</strong> = tirar roupa (e decolar).",
    "<strong>clothes</strong> é sempre plural (“clôuz”, quase “close”).",
    "Depois de <strong>when</strong>, o verbo fica no presente mesmo com futuro."
  ]
});
