/* Lição 7 — I'm a civil engineer and I work with plumbing design.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:7,
    tituloEn:"I'm a civil engineer and I work with plumbing design.", tituloPt:"Sou engenheiro civil e trabalho com projetos hidrossanitários." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 07",
    en:"I'm a civil engineer and I work with plumbing design.", pt:"Sou engenheiro civil e trabalho com projetos hidrossanitários." },

  naturalLiteral: {
    natural:"I'm a civil engineer and I work with plumbing design.",
    literal:"Eu sou um engenheiro civil e eu trabalho com projeto de encanamento.",
    nota:'Duas coisas essenciais: profissão em inglês vem <strong>sempre com a/an</strong> (<span class="en" data-say="a civil engineer">a civil engineer</span>), diferente do português (“sou engenheiro”, sem artigo); e <span class="en" data-say="plumbing design">plumbing design</span> é como se diz “projeto hidrossanitário / hidráulico”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I'm", classe:"pronome + verbo to be", funcao:"eu sou (I am)", traducao:"eu sou", hl:true },
      { palavra:"a civil engineer", classe:"artigo + profissão", funcao:"o que você é", traducao:"engenheiro civil" },
      { palavra:"and", classe:"conjunção", funcao:"liga as duas ideias", traducao:"e" },
      { palavra:"I work with", classe:"verbo + preposição", funcao:"o que você faz", traducao:"trabalho com" },
      { palavra:"plumbing design", classe:"substantivo composto", funcao:"sua área", traducao:"projeto hidrossanitário" }
    ],
    nota:'Aqui entra um verbo novo e importantíssimo: <span class="en" data-say="I am">to be</span> (ser/estar). <span class="en" data-say="I am">I am</span> vira <span class="en" data-say="I\'m">I\'m</span> na fala. Ele funciona diferente dos verbos que vimos até agora.'
  },

  molde: {
    intro:"Dois moldes numa frase só — dizer o que você é e o que você faz:",
    formula:"I'm a/an + profissão + and I work with + área",
    exemplos: [
      { en:"I'm a doctor and I work with children.", pt:"Sou médico e trabalho com crianças." },
      { en:"I'm an architect and I work with interior design.", pt:"Sou arquiteto e trabalho com design de interiores." },
      { en:"I'm a teacher and I work with English.", pt:"Sou professor e trabalho com inglês." }
    ],
    nota:'Use <span class="en" data-say="a">a</span> antes de som de consoante (a doctor) e <span class="en" data-say="an">an</span> antes de som de vogal (an engineer, an architect).'
  },

  conjugacao: {
    nota:'Este é o verbo <strong>to be</strong> (ser/estar). Ele NÃO usa a mesma lógica dos outros verbos — cada pessoa tem sua forma própria.',
    linhas: [
      { p:"I", en:"I am / I'm", say:"I am a civil engineer.", pt:"eu sou" },
      { p:"you", en:"you are / you're", say:"You are a civil engineer.", pt:"você é" },
      { p:"we", en:"we are / we're", say:"We are civil engineers.", pt:"nós somos" },
      { p:"they", en:"they are / they're", say:"They are civil engineers.", pt:"eles são" },
      { p:"he", en:"he is / he's", say:"He is a civil engineer.", pt:"ele é", hl:true },
      { p:"she", en:"she is / she's", say:"She is a civil engineer.", pt:"ela é", hl:true },
      { p:"it", en:"it is / it's", say:"It is.", pt:"(coisa) é/está", hl:true }
    ]
  },

  formas: {
    intro:'⚠️ Atenção: com o <strong>to be</strong>, negativa e pergunta <strong>não</strong> usam do/does! O próprio <em>am/is/are</em> faz o trabalho.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I'm not a civil engineer.", pt:"Eu não sou engenheiro civil. (I'm not — sem “don't”)" },
      { tag:"?", tagType:"bad", en:"Are you a civil engineer?", pt:"Você é engenheiro civil? (Are you — sem “do you”)" },
      { tag:"passado", en:"I was a civil engineer.", pt:"Eu era engenheiro civil. (am/is → was)" },
      { tag:"futuro", en:"I will be a civil engineer.", pt:"Vou ser engenheiro civil. (will + be)" }
    ],
    nota:'Compare com as lições anteriores: lá era <span class="en" data-say="Do you work?">Do you work?</span> / <span class="en" data-say="I don\'t work.">I don\'t work.</span> Com o <strong>to be</strong> é <span class="en" data-say="Are you?">Are you?</span> / <span class="en" data-say="I\'m not.">I\'m not.</span> Não misture os dois.'
  },

  speakNaturally: {
    intro:"Formas naturais de apresentar sua profissão:",
    linhas: [
      { en:"I work as a civil engineer.", pt:"Trabalho como engenheiro civil." },
      { en:"I'm in civil engineering.", pt:"Atuo na engenharia civil." },
      { en:"I design plumbing systems.", pt:"Projeto sistemas hidráulicos." },
      { en:"My field is plumbing design.", pt:"Minha área é projeto hidrossanitário." },
      { en:"I do hydraulic and sanitary design.", pt:"Faço projeto hidráulico e sanitário." }
    ],
    nota:'No mercado americano, <span class="en" data-say="plumbing design">plumbing design</span> e <span class="en" data-say="plumbing systems">plumbing systems</span> cobrem o que chamamos de hidrossanitário (água, esgoto, drenagem).'
  },

  expressoes: [
    { en:"a civil engineer", pt:"um engenheiro civil" },
    { en:"work as", pt:"trabalhar como" },
    { en:"plumbing design", pt:"projeto hidrossanitário" },
    { en:"work with", pt:"trabalhar com" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"engineer", ipa:"/ˌɛndʒɪˈnɪr/", soa:"“en-ji-NÍAR”", sentido:"engenheiro (força na última sílaba!)" },
      { palavra:"civil", ipa:"/ˈsɪvəl/", soa:"“SÍvol”", sentido:"civil" },
      { palavra:"plumbing", ipa:"/ˈplʌmɪŋ/", soa:"“PLÂming”", sentido:"encanamento / hidráulica (o b é MUDO)" },
      { palavra:"design", ipa:"/dɪˈzaɪn/", soa:"“di-ZÁIN”", sentido:"projeto / projetar" }
    ],
    fraseSoa:"aim a SÍvol en-ji-NÍAR end ai uârk uith PLÂming di-ZÁIN",
    fraseIpa:"/aɪm ə ˈsɪvəl ˌɛndʒɪˈnɪr ænd aɪ wɜːrk wɪð ˈplʌmɪŋ dɪˈzaɪn/",
    notaPron:'Dois perigos: <span class="en" data-say="engineer">engineer</span> tem a força na <strong>última</strong> sílaba (“en-ji-NÍAR”), não no começo; e em <span class="en" data-say="plumbing">plumbing</span> o <strong>b é mudo</strong> — fala “PLÂming”, igual em <span class="en" data-say="plumber">plumber</span> (encanador, “PLÂmer”).',
    cultura:'Ao se apresentar, o americano espera <span class="en" data-say="What do you do?">“What do you do?”</span> (o que você faz?) e você responde <span class="en" data-say="I\'m a civil engineer.">“I\'m a civil engineer.”</span> — sempre com o <strong>a</strong>. Omitir o artigo soa muito errado ao ouvido nativo.'
  },

  erros: [
    { tipo:"bad", texto:"I'm civil engineer.", nota:"Profissão pede artigo: I'm A civil engineer." },
    { tipo:"good", en:"I'm a civil engineer.", nota:"—" },
    { tipo:"bad", texto:"I'm a engineer.", nota:"Antes de som de vogal, use AN: an engineer." },
    { tipo:"bad", texto:"Do you are an engineer?", nota:"Com to be não se usa do: Are you an engineer?" },
    { tipo:"bad", texto:"plumbing com o “b” falado.", nota:"O b é mudo: “PLÂming”, não “plumbing”." }
  ],

  dica: {
    texto:'Regra de ouro: em inglês, ninguém é uma profissão “pelada”. Sempre <span class="en" data-say="a">a</span> / <span class="en" data-say="an">an</span> na frente. Repita o padrão:',
    chips:["I'm a civil engineer","I'm an architect","I'm a teacher","I'm an engineer"],
    nota:"Toque em cada uma. Note o an antes de architect e engineer (som de vogal) e o a antes de civil e teacher (som de consoante)."
  },

  dialogo: [
    { who:"A", en:"So, what do you do?", pt:"Então, o que você faz?" },
    { who:"B", en:"I'm a civil engineer. I work with plumbing design.", pt:"Sou engenheiro civil. Trabalho com projeto hidrossanitário." },
    { who:"A", en:"Oh nice — so you design water and sewer systems?", pt:"Ah, legal — então você projeta sistemas de água e esgoto?" },
    { who:"B", en:"Exactly.", pt:"Exatamente." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete com o artigo certo:", before:"I'm", after:"civil engineer.", resposta:"a" },
    { tipo:"completar", q:"Complete (som de vogal → an):", before:"She's", after:"architect.", resposta:"an", dica:"architect começa com som de vogal." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["a","I'm","engineer","civil"], resposta:"I'm a civil engineer." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela é engenheira e trabalha com projetos.", resposta:"She's an engineer and she works with design." },
    { tipo:"transformar", q:"Transforme", base:"I'm a civil engineer.", formas:[
      { tag:"neg", tagType:"bad", en:"I'm not a civil engineer." },
      { tag:"?", tagType:"bad", en:"Are you a civil engineer?" },
      { tag:"passado", en:"I was a civil engineer." },
      { tag:"futuro", en:"I will be a civil engineer." }
    ]},
    { tipo:"escrever", q:"Escreva sua própria apresentação: “I'm a/an ___ and I work with ___.”", exemplo:"I'm a civil engineer and I work with plumbing design." }
  ],

  flashcards: [
    { pt:"Sou engenheiro civil.", en:"I'm a civil engineer." },
    { pt:"Trabalho com projeto hidrossanitário.", en:"I work with plumbing design." }
  ],

  conexao:'Esta lição usa o <span class="en" data-say="work with">work with</span> do pacote de preposições da Lição 6 e apresenta o verbo <strong>to be</strong> — que é a base de metade das frases do inglês. Guarde bem a diferença: verbos comuns usam <span class="en" data-say="do">do/does</span>; o <strong>to be</strong> se vira sozinho (am/is/are). Isso vai voltar em muitas lições.',

  revisao: [
    "Profissão SEMPRE com <strong>a/an</strong>: I'm <strong>a</strong> civil engineer.",
    "<strong>a</strong> antes de consoante, <strong>an</strong> antes de vogal (an engineer).",
    "Verbo <strong>to be</strong>: I am, you are, he is… (I'm, you're, he's).",
    "Com to be, negativa/pergunta <strong>sem do/does</strong>: I'm not / Are you?",
    "<strong>plumbing</strong> = b mudo (“PLÂming”); <strong>engineer</strong> = força na última sílaba."
  ]
});
