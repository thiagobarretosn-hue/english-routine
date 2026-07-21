/* Lição 6 — I work from home.  (dado; renderizado por app.js) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:6,
    tituloEn:"I work from home.", tituloPt:"Eu trabalho de casa." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 06",
    en:"I work from home.", pt:"Eu trabalho de casa." },

  naturalLiteral: {
    natural:"I work from home.",
    literal:"Eu trabalho de casa.",
    nota:'Tradução direta. Dois detalhes: usamos <span class="en" data-say="from">from</span> (de/a partir de), e <span class="en" data-say="home">home</span> vem <strong>sem</strong> artigo — nunca “from the home”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"work", classe:"verbo", funcao:"a ação", traducao:"trabalhar", hl:true },
      { palavra:"from", classe:"preposição", funcao:"indica origem/local", traducao:"de", hl:true },
      { palavra:"home", classe:"advérbio/substantivo", funcao:"onde", traducao:"casa" }
    ],
    nota:'<span class="en" data-say="home">home</span> funciona quase como “em casa / para casa” — por isso dispensa artigo e às vezes até preposição: <span class="en" data-say="I go home.">I go home.</span> (vou pra casa), <span class="en" data-say="I stay home.">I stay home.</span> (fico em casa).'
  },

  molde: {
    intro:"O verbo <strong>work</strong> muda de preposição conforme o que você quer dizer:",
    formula:"I work + from / at / for / with + ...",
    exemplos: [
      { en:"I work from home.", pt:"Trabalho de casa." },
      { en:"I work at an office.", pt:"Trabalho num escritório." },
      { en:"I work for a company.", pt:"Trabalho para uma empresa." },
      { en:"I work with pipes.", pt:"Trabalho com tubulações." }
    ],
    nota:'Guarde o pacote: <strong>from home</strong> (de casa), <strong>at</strong> + lugar, <strong>for</strong> + empresa, <strong>with</strong> + o que você usa. A da próxima lição é <span class="en" data-say="work with">work with</span>.'
  },

  conjugacao: {
    verbo: { base:"work from home", past:"worked from home", irregular:false, ptPast:"eu trabalhei de casa", ptFut:"eu vou trabalhar de casa" },
    nota:'Só <strong>he / she / it</strong> ganham <strong>-s</strong>.',
    linhas: [
      { p:"I", en:"I work from home", say:"I work from home.", pt:"eu trabalho de casa" },
      { p:"you", en:"you work from home", say:"You work from home.", pt:"você trabalha de casa" },
      { p:"we", en:"we work from home", say:"We work from home.", pt:"nós trabalhamos de casa" },
      { p:"they", en:"they work from home", say:"They work from home.", pt:"eles trabalham de casa" },
      { p:"he", en:"he work<strong>s</strong> from home", say:"He works from home.", pt:"ele trabalha de casa", hl:true },
      { p:"she", en:"she work<strong>s</strong> from home", say:"She works from home.", pt:"ela trabalha de casa", hl:true },
      { p:"it", en:"it work<strong>s</strong>", say:"It works.", pt:"(coisa) funciona", hl:true }
    ]
  },

  formas: {
    intro:'Padrão do/does/did/will. (Curiosidade: <span class="en" data-say="it works">it works</span> também significa “funciona”.)',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't work from home.", pt:"Eu não trabalho de casa." },
      { tag:"?", tagType:"bad", en:"Do you work from home?", pt:"Você trabalha de casa?" },
      { tag:"passado", en:"I worked from home.", pt:"Trabalhei de casa. (work → worked, regular)" },
      { tag:"futuro", en:"I will work from home.", pt:"Vou trabalhar de casa." }
    ],
    nota:'<span class="en" data-say="worked">worked</span> soa “uârkt” — aqui o <strong>-ed</strong> vira só um “t” no fim, sem sílaba extra.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você trabalha de casa:",
    linhas: [
      { en:"I work remotely.", pt:"Trabalho remotamente." },
      { en:"I'm a remote worker.", pt:"Sou trabalhador remoto." },
      { en:"My job is fully remote.", pt:"Meu trabalho é 100% remoto." },
      { en:"I work out of my house.", pt:"Trabalho de casa. (informal)" },
      { en:"I WFH on Fridays.", pt:"Trabalho de casa às sextas. (WFH = work from home)" }
    ],
    nota:'<span class="en" data-say="WFH">WFH</span> (work from home) é sigla comuníssima em mensagens e e-mails de trabalho.'
  },

  expressoes: [
    { en:"work from home", pt:"trabalhar de casa" },
    { en:"work remotely", pt:"trabalhar remotamente" },
    { en:"remote work", pt:"trabalho remoto" },
    { en:"work-life balance", pt:"equilíbrio entre vida e trabalho" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"work", ipa:"/wɜːrk/", soa:"“uârk”", sentido:"trabalhar / trabalho" },
      { palavra:"from", ipa:"/frʌm/", soa:"“frâm”", sentido:"de / a partir de" },
      { palavra:"home", ipa:"/hoʊm/", soa:"“rôum”", sentido:"casa (o lar)" }
    ],
    fraseSoa:"ai uârk frâm rôum",
    fraseIpa:"/aɪ wɜːrk frʌm hoʊm/",
    notaPron:'<span class="en" data-say="home">home</span> tem o ditongo “ôu” (rôum), não “rôm”. E o <strong>h</strong> é aspirado, com sopro.',
    cultura:'⚠️ <strong>Falso amigo:</strong> em inglês, <span class="en" data-say="home office">home office</span> é o <em>cômodo</em> (o escritório dentro de casa), <strong>não</strong> a modalidade de trabalho. Para dizer que você trabalha de casa, use <span class="en" data-say="work from home">work from home</span> ou <span class="en" data-say="work remotely">work remotely</span> — nunca “I do home office”.'
  },

  erros: [
    { tipo:"bad", texto:"I do home office.", nota:"“home office” é o cômodo, não a modalidade. Diga: I work from home." },
    { tipo:"good", en:"I work from home.", nota:"—" },
    { tipo:"bad", texto:"I work in home.", nota:"A preposição é from: work from home." },
    { tipo:"bad", texto:"I work from the home.", nota:"home vai sem artigo: from home." }
  ],

  dica: {
    texto:'Decore a sigla <strong>WFH</strong> = <span class="en" data-say="Work From Home">Work From Home</span>. E lembre do trio de preposições do work:',
    chips:["work from home","work at an office","work for a company","work with pipes"],
    nota:"Toque em cada uma. from = de onde, at = em qual lugar, for = para quem, with = com o quê."
  },

  dialogo: [
    { who:"A", en:"Do you go to an office?", pt:"Você vai a um escritório?" },
    { who:"B", en:"No, I work from home. Fully remote.", pt:"Não, trabalho de casa. Totalmente remoto." },
    { who:"A", en:"That's the dream. No commute!", pt:"Isso é o sonho. Sem deslocamento!" }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a preposição:", before:"I work", after:"home.", resposta:"from" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"from home.", resposta:"works", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["home","I","from","work"], resposta:"I work from home." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele trabalha de casa.", resposta:"He works from home." },
    { tipo:"transformar", q:"Transforme", base:"I work from home.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't work from home." },
      { tag:"?", tagType:"bad", en:"Do you work from home?" },
      { tag:"passado", en:"I worked from home." },
      { tag:"futuro", en:"I will work from home." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com work + preposição (from/at/for/with).", exemplo:"I work for a construction company." }
  ],

  flashcards: [
    { pt:"Trabalho remotamente.", en:"I work remotely." },
    { pt:"Ele trabalha de casa.", en:"He works from home." }
  ],

  conexao:'Continua o <span class="en" data-say="work">work</span> da Lição 5, agora com a preposição <span class="en" data-say="from">from</span>. A próxima lição usa outra preposição do mesmo pacote — <span class="en" data-say="work with">work with</span> — para você dizer sua profissão de verdade.',

  revisao: [
    "<strong>work from home</strong> = trabalhar de casa (WFH). <strong>home</strong> vai sem artigo.",
    "Preposições do work: <strong>from</strong> (casa), <strong>at</strong> (lugar), <strong>for</strong> (empresa), <strong>with</strong> (o quê).",
    "⚠️ <strong>home office</strong> é falso amigo: é o cômodo, não a modalidade.",
    "Passado regular: work → <strong>worked</strong> (“uârkt”).",
    "Natural: <strong>I work remotely</strong> / <strong>WFH</strong>."
  ]
});
