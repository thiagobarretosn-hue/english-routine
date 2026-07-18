/* Lição 25 — I go back to work at 2 p.m.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:4, capituloNome:"Lunch & Afternoon", licao:25,
    tituloEn:"I go back to work at 2 p.m.", tituloPt:"Eu retorno ao trabalho às 14 horas." },

  hero: { time:"VOLUME 1 · CAP. 4 — LUNCH & AFTERNOON · LIÇÃO 25",
    en:"I go back to work at 2 p.m.", pt:"Eu volto ao trabalho às 14 horas (2 da tarde)." },

  naturalLiteral: {
    natural:"I go back to work at 2 p.m.",
    literal:"Eu vou de volta para o trabalho às 2 da tarde.",
    nota:'<span class="en" data-say="go back to work">go back to work</span> = voltar ao trabalho. Repare: aqui tem <strong>to</strong> (go back <strong>to</strong> work), mas <span class="en" data-say="work">work</span> vem <strong>sem the</strong>. Compare com <span class="en" data-say="go back home">go back home</span> (Lição 21), que não tem “to”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I go back", classe:"sujeito + verbo + partícula", funcao:"a ação (voltar)", traducao:"eu volto", hl:true },
      { palavra:"to work", classe:"to + substantivo", funcao:"o destino", traducao:"ao trabalho", hl:true },
      { palavra:"at 2 p.m.", classe:"expressão de tempo", funcao:"o horário", traducao:"às 2 da tarde" }
    ],
    nota:'A regra das exceções, de novo: <span class="en" data-say="go back home">go back home</span> (sem to), mas <span class="en" data-say="go back to work">go back to work</span> e <span class="en" data-say="go back to the gym">go back to the gym</span> (com to). Home é o teimoso.'
  },

  molde: {
    intro:"O molde de voltar a lugares (com to):",
    formula:"I go back to + [work / school / the gym]",
    exemplos: [
      { en:"I go back to work after lunch.", pt:"Volto ao trabalho depois do almoço." },
      { en:"I go back to school at 1.", pt:"Volto para a escola à 1." },
      { en:"I go back to the office at 2.", pt:"Volto ao escritório às 2." }
    ],
    nota:'<span class="en" data-say="go back to work">go back to work</span> = voltar à atividade; <span class="en" data-say="get back to work">get back to work</span> = a mesma ideia, e também “voltar a se concentrar” (para de enrolar e trabalha).'
  },

  conjugacao: {
    nota:'go → he goes (Lição 14). O <span class="en" data-say="back">back</span> vem logo depois.',
    linhas: [
      { p:"I", en:"I go back to work", say:"I go back to work at 2.", pt:"eu volto ao trabalho" },
      { p:"you", en:"you go back to work", say:"You go back to work at 2.", pt:"você volta ao trabalho" },
      { p:"we", en:"we go back to work", say:"We go back to work at 2.", pt:"nós voltamos ao trabalho" },
      { p:"they", en:"they go back to work", say:"They go back to work at 2.", pt:"eles voltam ao trabalho" },
      { p:"he", en:"he go<strong>es</strong> back to work", say:"He goes back to work at 2.", pt:"ele volta ao trabalho", hl:true },
      { p:"she", en:"she go<strong>es</strong> back to work", say:"She goes back to work at 2.", pt:"ela volta ao trabalho", hl:true },
      { p:"it", en:"it go<strong>es</strong> back", say:"It goes back.", pt:"(coisa) volta", hl:true }
    ]
  },

  formas: {
    intro:'Passado com went (Lição 14): <span class="en" data-say="went back">went back</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't go back to work at 2.", pt:"Eu não volto ao trabalho às 2." },
      { tag:"?", tagType:"bad", en:"Do you go back to work at 2?", pt:"Você volta ao trabalho às 2?" },
      { tag:"passado", en:"I went back to work at 2.", pt:"Voltei ao trabalho às 2. (go → went)" },
      { tag:"futuro", en:"I will go back to work at 2.", pt:"Vou voltar ao trabalho às 2." }
    ],
    nota:'A expressão <span class="en" data-say="Back to work!">“Back to work!”</span> (de volta ao trabalho!) é usada sozinha, tipo “chega de pausa”.'
  },

  speakNaturally: {
    intro:"Formas naturais de retomar o expediente:",
    linhas: [
      { en:"I get back to work at 2.", pt:"Volto ao trabalho às 2." },
      { en:"I'm back at work by 2.", pt:"Estou de volta ao trabalho às 2." },
      { en:"I start again at 2.", pt:"Começo de novo às 2." },
      { en:"I return to work at 2.", pt:"Retorno ao trabalho às 2. (mais formal)" },
      { en:"I'm back at my desk at 2.", pt:"Volto para minha mesa às 2." }
    ],
    nota:'<span class="en" data-say="I\'m back">I\'m back</span> = “voltei / estou de volta”. Curto e muito usado.'
  },

  expressoes: [
    { en:"go back to work", pt:"voltar ao trabalho" },
    { en:"get back to work", pt:"voltar ao trabalho / se concentrar" },
    { en:"back to work", pt:"de volta ao trabalho" },
    { en:"return to work", pt:"retornar ao trabalho" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"go back", ipa:"/ɡoʊ bæk/", soa:"“gôu bék”", sentido:"voltar" },
      { palavra:"work", ipa:"/wɜːrk/", soa:"“uârk”", sentido:"trabalho" },
      { palavra:"at", ipa:"/æt/", soa:"“ét”", sentido:"às (horário)" }
    ],
    fraseSoa:"ai gôu bék tu uârk ét tu pí-ém",
    fraseIpa:"/aɪ ɡoʊ bæk tu wɜːrk æt tuː ˌpiː ˈɛm/",
    notaPron:'O <span class="en" data-say="to">to</span> antes de “work” é fraquinho na fala rápida, quase “tu/tâ”. Não precisa marcar forte: “gôu-bék-tu-uârk”.',
    cultura:'<span class="en" data-say="lunch break">lunch break</span> = intervalo de almoço. Depois dele, você <span class="en" data-say="go back to work">go back to work</span>. O “9-to-5” (das 9 às 5) é o horário comercial clássico nos EUA.'
  },

  erros: [
    { tipo:"bad", texto:"I go back to home.", nota:"Casa é exceção: <strong>go back home</strong> (sem to). Mas trabalho leva: go back <strong>to</strong> work." },
    { tipo:"bad", texto:"I go back at work.", nota:"É <strong>to</strong>, não “at”: go back to work." },
    { tipo:"bad", texto:"go back to the work.", nota:"<strong>work</strong> vai sem the: go back to work." },
    { tipo:"bad", texto:"He go back to work.", nota:"3ª pessoa: He <strong>goes</strong> back to work." }
  ],

  dica: {
    texto:'A tabela das exceções do “voltar”. Toque e compare — só home foge do “to”:',
    chips:["go back home","go back to work","go back to school","go back to the gym"],
    nota:"home = sem to. work / school / the gym = com to. Decore só a exceção (home)."
  },

  dialogo: [
    { who:"A", en:"How long is your lunch break?", pt:"Quanto tempo é seu intervalo de almoço?" },
    { who:"B", en:"About two hours. I go back to work at 2.", pt:"Umas duas horas. Volto ao trabalho às 2." },
    { who:"A", en:"Long break! Mine is just one hour.", pt:"Intervalo longo! O meu é só uma hora." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a preposição (com to):", before:"I go back", after:"work at 2.", resposta:"to" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"back to work at 2.", resposta:"goes", wide:true, dica:"go vira ___." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["to","I","work","back","go"], resposta:"I go back to work." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela volta ao trabalho às 2.", resposta:"She goes back to work at 2." },
    { tipo:"transformar", q:"Transforme", base:"I go back to work at 2 p.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't go back to work at 2 p.m." },
      { tag:"?", tagType:"bad", en:"Do you go back to work at 2 p.m.?" },
      { tag:"passado", en:"I went back to work at 2 p.m." },
      { tag:"futuro", en:"I will go back to work at 2 p.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com go back to + lugar.", exemplo:"I go back to the office after lunch." }
  ],

  flashcards: [
    { pt:"Volto ao trabalho às 2.", en:"I go back to work at 2." },
    { pt:"De volta ao trabalho!", en:"Back to work!" }
  ],

  conexao:'Fecha o par de “voltar” com a Lição 21 (<span class="en" data-say="go back home">go back home</span> × <span class="en" data-say="go back to work">go back to work</span>) e retoma o <span class="en" data-say="work">work</span> do Capítulo 2. Sua tarde já tem: almoçar → voltar ao trabalho.',

  revisao: [
    "<strong>go back to work</strong> (com to, sem the).",
    "Exceção: <strong>go back home</strong> (sem to).",
    "Passado: go → <strong>went back</strong>.",
    "<strong>get back to work</strong> = voltar / se concentrar.",
    "<strong>I'm back</strong> = voltei / estou de volta."
  ]
});
