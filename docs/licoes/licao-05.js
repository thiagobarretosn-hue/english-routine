/* Lição 5 — I start working at 8 a.m.  (dado; renderizado por app.js) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:5,
    tituloEn:"I start working at 8 a.m.", tituloPt:"Eu começo a trabalhar às 8:00 da manhã." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 05",
    en:"I start working at 8 a.m.", pt:"Eu começo a trabalhar às 8:00 da manhã." },

  naturalLiteral: {
    natural:"I start working at 8 a.m.",
    literal:"Eu começo trabalhando às 8 da manhã.",
    nota:'Depois de <span class="en" data-say="start">start</span>, o verbo seguinte normalmente ganha <strong>-ing</strong>: <span class="en" data-say="start working">start working</span> (começar a trabalhar). E volta o <span class="en" data-say="at">at</span> + horário da Lição 1.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"start", classe:"verbo", funcao:"a ação (começar)", traducao:"começar", hl:true },
      { palavra:"working", classe:"gerúndio (-ing)", funcao:"o que se começa", traducao:"a trabalhar", hl:true },
      { palavra:"at 8 a.m.", classe:"expressão de tempo", funcao:"o horário", traducao:"às 8 da manhã" }
    ],
    nota:'Regra prática: <span class="en" data-say="start">start</span> + verbo com <strong>-ing</strong>. Também existe <span class="en" data-say="start to work">start to work</span> (com <em>to</em>), mas <span class="en" data-say="start working">start working</span> é o mais natural no dia a dia.'
  },

  molde: {
    intro:"O molde de começar a fazer algo:",
    formula:"I start + [verbo]-ing + at + horário",
    exemplos: [
      { en:"I start studying at 9.", pt:"Eu começo a estudar às 9." },
      { en:"I start cooking at noon.", pt:"Eu começo a cozinhar ao meio-dia." },
      { en:"I start driving at 7.", pt:"Eu começo a dirigir às 7." }
    ],
    nota:'O oposto é <span class="en" data-say="stop">stop</span>, que segue a mesma regra do -ing: <span class="en" data-say="I stop working at 6.">I stop working at 6.</span> (você verá isso na Lição 13).'
  },

  conjugacao: {
    verbo: { base:"start working", past:"started working", irregular:false, ptPast:"eu comecei a trabalhar", ptFut:"eu vou começar a trabalhar" },
    nota:'Só <strong>he / she / it</strong> ganham <strong>-s</strong> — no verbo <em>start</em>, não no <em>working</em>.',
    linhas: [
      { p:"I", en:"I start working", say:"I start working at 8.", pt:"eu começo a trabalhar" },
      { p:"you", en:"you start working", say:"You start working at 8.", pt:"você começa a trabalhar" },
      { p:"we", en:"we start working", say:"We start working at 8.", pt:"nós começamos a trabalhar" },
      { p:"they", en:"they start working", say:"They start working at 8.", pt:"eles começam a trabalhar" },
      { p:"he", en:"he start<strong>s</strong> working", say:"He starts working at 8.", pt:"ele começa a trabalhar", hl:true },
      { p:"she", en:"she start<strong>s</strong> working", say:"She starts working at 8.", pt:"ela começa a trabalhar", hl:true },
      { p:"it", en:"it start<strong>s</strong>", say:"It starts.", pt:"(coisa) começa/liga", hl:true }
    ]
  },

  formas: {
    intro:'Padrão do/does/did/will de sempre. Note o passado <span class="en" data-say="started">started</span> (com o som “-tid”).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't start working at 8.", pt:"Eu não começo a trabalhar às 8." },
      { tag:"?", tagType:"bad", en:"Do you start working at 8?", pt:"Você começa a trabalhar às 8?" },
      { tag:"passado", en:"I started working at 8.", pt:"Comecei a trabalhar às 8. (start → started, regular)" },
      { tag:"futuro", en:"I will start working at 8.", pt:"Vou começar a trabalhar às 8." }
    ],
    nota:'<span class="en" data-say="started">started</span> soa “stártid” — o <strong>-ed</strong> depois de <strong>t</strong>/<strong>d</strong> vira uma sílaba extra “id”.'
  },

  speakNaturally: {
    intro:"Como americanos dizem que começam o expediente:",
    linhas: [
      { en:"I start work at 8.", pt:"Começo o trabalho às 8." },
      { en:"My day starts at 8.", pt:"Meu dia começa às 8." },
      { en:"I get to work at 8.", pt:"Chego ao trabalho às 8." },
      { en:"I clock in at 8.", pt:"Bato o ponto às 8." },
      { en:"I'm at my desk by 8.", pt:"Estou na minha mesa às 8." }
    ],
    nota:'<span class="en" data-say="clock in">clock in</span> / <span class="en" data-say="clock out">clock out</span> = bater o ponto na entrada / na saída.'
  },

  expressoes: [
    { en:"start working", pt:"começar a trabalhar" },
    { en:"get started", pt:"começar / dar o pontapé" },
    { en:"start over", pt:"recomeçar do zero" },
    { en:"start a business", pt:"abrir um negócio" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"start", ipa:"/stɑːrt/", soa:"“stárt”", sentido:"começar" },
      { palavra:"working", ipa:"/ˈwɜːrkɪŋ/", soa:"“uârking”", sentido:"trabalhando" },
      { palavra:"work", ipa:"/wɜːrk/", soa:"“uârk”", sentido:"trabalho / trabalhar" }
    ],
    fraseSoa:"ai stárt uârking ét êit êi-ém",
    fraseIpa:"/aɪ stɑːrt ˈwɜːrkɪŋ æt eɪt eɪ ˈɛm/",
    notaPron:'O som de <span class="en" data-say="work">work</span> (“uârk”) não existe em português — é um “â” com a boca fechada e a língua puxada pra trás. Treine no áudio.',
    cultura:'<span class="en" data-say="What time do you start work?">“What time do you start work?”</span> é pergunta de conversa casual no trabalho. Responder com o horário e um <span class="en" data-say="I work from home.">“I work from home.”</span> (próxima lição!) é bem comum.'
  },

  erros: [
    { tipo:"bad", texto:"I start to working at 8.", nota:"Ou “start working” ou “start to work” — nunca “to working”." },
    { tipo:"good", en:"I start working at 8.", nota:"—" },
    { tipo:"bad", texto:"I start working in 8.", nota:"Horário é com at, não in: at 8." },
    { tipo:"bad", texto:"He start working at 8.", nota:"3ª pessoa: He start<strong>s</strong> working." }
  ],

  dica: {
    texto:'Pense no <span class="en" data-say="start">start</span> como o botão ▶ (play). Você dá play em várias coisas no dia:',
    chips:["start working","start studying","start cooking","start driving"],
    nota:"Toque em cada uma. O padrão start + -ing se repete em todas — decore o molde, não cada frase."
  },

  dialogo: [
    { who:"A", en:"What time do you start working?", pt:"Que horas você começa a trabalhar?" },
    { who:"B", en:"I start at 8. I work from home, so there's no commute.", pt:"Começo às 8. Trabalho de casa, então não tenho deslocamento." },
    { who:"A", en:"Nice. I start at 9, but I have a long commute.", pt:"Legal. Eu começo às 9, mas tenho um trajeto longo." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete com o gerúndio:", before:"I start", after:"at 8 a.m.", resposta:"working" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"working at 9.", resposta:"starts", wide:true, dica:"o -s vai no start." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["working","I","at","start","8"], resposta:"I start working at 8." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele começa a trabalhar às 7.", resposta:"He starts working at 7." },
    { tipo:"transformar", q:"Transforme", base:"I start working at 8 a.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't start working at 8 a.m." },
      { tag:"?", tagType:"bad", en:"Do you start working at 8 a.m.?" },
      { tag:"passado", en:"I started working at 8 a.m." },
      { tag:"futuro", en:"I will start working at 8 a.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com start + verbo-ing + horário.", exemplo:"I start studying at 9 p.m." }
  ],

  flashcards: [
    { pt:"Meu dia começa às 8.", en:"My day starts at 8." },
    { pt:"Ele começa a trabalhar às 7.", en:"He starts working at 7." }
  ],

  conexao:'Você reencontra o <span class="en" data-say="at">at</span> + horário da Lição 1, agora com o verbo <span class="en" data-say="start">start</span>. E o <span class="en" data-say="work">work</span> desta lição é a porta de entrada do Capítulo 2 inteiro — ele vai aparecer em “work from home”, “stop working”, “go back to work”…',

  revisao: [
    "<strong>start + verbo-ing</strong> = começar a fazer algo (start working).",
    "Horário sempre com <strong>at</strong> (at 8), nunca “in 8”.",
    "3ª pessoa: o <strong>-s</strong> vai no <em>start</em> (he start<strong>s</strong> working).",
    "Passado regular: start → <strong>started</strong> (“stártid”).",
    "Vizinhos úteis: <strong>clock in / clock out</strong> (bater ponto)."
  ]
});
