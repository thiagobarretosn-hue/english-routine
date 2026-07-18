/* Lição 32 — I play volleyball from 7 to 10 p.m.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:5, capituloNome:"Class, Sports & Therapy", licao:32,
    tituloEn:"I play volleyball from 7 to 10 p.m.", tituloPt:"Eu jogo vôlei das 19h até as 22h." },

  hero: { time:"VOLUME 1 · CAP. 5 — CLASS, SPORTS & THERAPY · LIÇÃO 32",
    en:"I play volleyball from 7 to 10 p.m.", pt:"Jogo vôlei das 19h às 22h (das 7 às 10 da noite)." },

  naturalLiteral: {
    natural:"I play volleyball from 7 to 10 p.m.",
    literal:"Eu jogo vôlei das 7 às 10 da noite.",
    nota:'<span class="en" data-say="from 7 to 10">from 7 to 10</span> = das 7 às 10. A dupla <span class="en" data-say="from">from</span> … <span class="en" data-say="to">to</span> marca o intervalo <strong>inteiro</strong>: o começo (from) e o fim (to).'
  },

  estrutura: {
    linhas: [
      { palavra:"I play volleyball", classe:"verbo + esporte", funcao:"a ação", traducao:"jogo vôlei" },
      { palavra:"from 7", classe:"from + horário", funcao:"o começo", traducao:"das 7", hl:true },
      { palavra:"to 10 p.m.", classe:"to + horário", funcao:"o fim", traducao:"até as 10 da noite", hl:true }
    ],
    nota:'Você já viu o <span class="en" data-say="until">until</span> (Lição 27), que marca só o fim. Aqui, com <span class="en" data-say="from">from</span> … <span class="en" data-say="to">to</span>, você marca o começo E o fim de uma vez.'
  },

  molde: {
    intro:"O molde do intervalo:",
    formula:"from + [início] to + [fim]",
    exemplos: [
      { en:"I work from 8 to 6.", pt:"Trabalho das 8 às 6." },
      { en:"The store is open from 9 to 5.", pt:"A loja abre das 9 às 5." },
      { en:"We drive from Monday to Friday.", pt:"Dirigimos de segunda a sexta." }
    ],
    nota:'<span class="en" data-say="from">from</span> … <span class="en" data-say="to">to</span> serve para tempo (from 7 to 10) e também para lugares (from home to work). Sempre um par: começou o “from”, vem o “to”.'
  },

  conjugacao: {
    verbo: { base:"play volleyball", past:"played volleyball", irregular:false, ptPast:"eu joguei vôlei", ptFut:"eu vou jogar vôlei" },
    nota:'play → he plays (Lição 30).',
    linhas: [
      { p:"I", en:"I play from 7 to 10", say:"I play volleyball from 7 to 10.", pt:"eu jogo das 7 às 10" },
      { p:"you", en:"you play from 7 to 10", say:"You play volleyball from 7 to 10.", pt:"você joga das 7 às 10" },
      { p:"we", en:"we play from 7 to 10", say:"We play volleyball from 7 to 10.", pt:"nós jogamos das 7 às 10" },
      { p:"they", en:"they play from 7 to 10", say:"They play volleyball from 7 to 10.", pt:"eles jogam das 7 às 10" },
      { p:"he", en:"he play<strong>s</strong> from 7 to 10", say:"He plays volleyball from 7 to 10.", pt:"ele joga das 7 às 10", hl:true },
      { p:"she", en:"she play<strong>s</strong> from 7 to 10", say:"She plays volleyball from 7 to 10.", pt:"ela joga das 7 às 10", hl:true },
      { p:"it", en:"it play<strong>s</strong>", say:"It plays.", pt:"(coisa) toca", hl:true }
    ]
  },

  formas: {
    intro:'Passado played.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't play from 7 to 10.", pt:"Eu não jogo das 7 às 10." },
      { tag:"?", tagType:"bad", en:"Do you play from 7 to 10?", pt:"Você joga das 7 às 10?" },
      { tag:"passado", en:"I played from 7 to 10.", pt:"Joguei das 7 às 10." },
      { tag:"futuro", en:"I will play from 7 to 10.", pt:"Vou jogar das 7 às 10." }
    ],
    nota:'Para dizer a duração, use <span class="en" data-say="for">for</span>: <span class="en" data-say="I play for three hours.">I play for three hours.</span> (jogo por três horas). from/to = de quando a quando; for = por quanto tempo.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer o intervalo do jogo:",
    linhas: [
      { en:"I play from 7 to 10.", pt:"Jogo das 7 às 10." },
      { en:"The game goes from 7 to 10.", pt:"O jogo vai das 7 às 10." },
      { en:"I play for three hours.", pt:"Jogo por três horas." },
      { en:"We play until 10.", pt:"Jogamos até as 10." },
      { en:"I'm on the court from 7 to 10.", pt:"Fico na quadra das 7 às 10." }
    ],
    nota:'<span class="en" data-say="goes from">goes from</span> … to = “vai de … a …”. Usa-se para horários de funcionamento, jogos, aulas.'
  },

  expressoes: [
    { en:"from ... to ...", pt:"de ... a ... / das ... às ..." },
    { en:"for three hours", pt:"por três horas" },
    { en:"all evening", pt:"a noite toda" },
    { en:"open from 9 to 5", pt:"aberto das 9 às 5" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"from", ipa:"/frʌm/", soa:"“frâm”", sentido:"de (início)" },
      { palavra:"to", ipa:"/tu/", soa:"“tu”", sentido:"a / até (fim)" },
      { palavra:"play", ipa:"/pleɪ/", soa:"“plêi”", sentido:"jogar" }
    ],
    fraseSoa:"ai plêi VÓ-li-ból frâm séven tu ten pí-ém",
    fraseIpa:"/aɪ pleɪ ˈvɒlibɔːl frʌm ˈsɛvən tu tɛn ˌpiː ˈɛm/",
    notaPron:'Na fala rápida, <span class="en" data-say="from">from</span> e <span class="en" data-say="to">to</span> ficam bem fracos (“frâm”, “tâ”). O foco vai nos números: “sévn tu tén”.',
    cultura:'Horários de funcionamento nos EUA aparecem como <span class="en" data-say="9 to 5">9 to 5</span> ou <span class="en" data-say="9 AM to 5 PM">9 AM to 5 PM</span>. O “from” costuma ser omitido em placas, mas na fala completa ele aparece.'
  },

  erros: [
    { tipo:"bad", texto:"from 7 at 10.", nota:"O par é from … <strong>to</strong>: from 7 to 10." },
    { tipo:"bad", texto:"between 7 to 10.", nota:"Com “between” é <strong>and</strong>: between 7 and 10 — ou use from 7 to 10." },
    { tipo:"bad", texto:"I play during three hours.", nota:"Duração é com <strong>for</strong>: for three hours." },
    { tipo:"bad", texto:"He play from 7 to 10.", nota:"3ª pessoa: He play<strong>s</strong>." }
  ],

  dica: {
    texto:'Três formas de falar de tempo — escolha pela intenção. Toque e compare:',
    chips:["from 7 to 10","until 10","for three hours","at 8"],
    nota:"from…to = começo e fim; until = só o fim; for = duração; at = um ponto."
  },

  dialogo: [
    { who:"A", en:"How long do you play?", pt:"Por quanto tempo você joga?" },
    { who:"B", en:"I play volleyball from 7 to 10 p.m.", pt:"Jogo vôlei das 7 às 10 da noite." },
    { who:"A", en:"Three hours? That's a real workout.", pt:"Três horas? Isso é treino de verdade." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete o par (início):", before:"I play", after:"7 to 10.", resposta:"from" },
    { tipo:"completar", q:"Complete o par (fim):", before:"I play from 7", after:"10.", resposta:"to" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["to","from","I","10","7","play"], resposta:"I play from 7 to 10." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele joga das 7 às 10.", resposta:"He plays from 7 to 10." },
    { tipo:"transformar", q:"Transforme", base:"I play volleyball from 7 to 10 p.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't play volleyball from 7 to 10 p.m." },
      { tag:"?", tagType:"bad", en:"Do you play volleyball from 7 to 10 p.m.?" },
      { tag:"passado", en:"I played volleyball from 7 to 10 p.m." },
      { tag:"futuro", en:"I will play volleyball from 7 to 10 p.m." }
    ]},
    { tipo:"escrever", q:"Escreva um intervalo seu com from ... to ...", exemplo:"I work from 8 to 6." }
  ],

  flashcards: [
    { pt:"Jogo vôlei das 7 às 10.", en:"I play volleyball from 7 to 10." },
    { pt:"Jogo por três horas.", en:"I play for three hours." }
  ],

  conexao:'Fecha o par com o <span class="en" data-say="until">until</span> da Lição 27: agora você marca o intervalo inteiro (<span class="en" data-say="from 7 to 10">from 7 to 10</span>). E continua o <span class="en" data-say="play">play</span> do seu vôlei (Lições 30–31).',

  revisao: [
    "<strong>from</strong> … <strong>to</strong> = intervalo (começo e fim).",
    "<strong>until</strong> = só o fim; <strong>for</strong> = duração; <strong>at</strong> = ponto.",
    "<strong>between</strong> 7 <strong>and</strong> 10 (com “and”, não “to”).",
    "Na fala, from/to ficam fracos; o foco vai nos números.",
    "Funciona para tempo e lugar (from home to work)."
  ]
});
