/* Lição 20 — I leave the gym at 2 p.m.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:20,
    tituloEn:"I leave the gym at 2 p.m.", tituloPt:"Eu saio da academia às 14 horas." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 20",
    en:"I leave the gym at 2 p.m.", pt:"Eu saio da academia às 14 horas (2 da tarde)." },

  naturalLiteral: {
    natural:"I leave the gym at 2 p.m.",
    literal:"Eu deixo a academia às 2 da tarde.",
    nota:'<span class="en" data-say="leave">leave</span> = sair de um lugar. E atenção: em inglês você <strong>não</strong> usa “from” aqui — é <span class="en" data-say="leave the gym">leave the gym</span>, não “leave from the gym”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"leave", classe:"verbo", funcao:"a ação (sair de)", traducao:"sair de", hl:true },
      { palavra:"the gym", classe:"artigo + substantivo", funcao:"o lugar", traducao:"a academia" },
      { palavra:"at 2 p.m.", classe:"expressão de tempo", funcao:"o horário", traducao:"às 2 da tarde" }
    ],
    nota:'<span class="en" data-say="leave">leave</span> tem dois sentidos: <strong>sair de</strong> (leave the gym) e <strong>deixar/esquecer</strong> (I left my keys — deixei minhas chaves). O contexto diz qual é.'
  },

  molde: {
    intro:"O molde de sair de lugares:",
    formula:"I leave + [lugar] + at + horário",
    exemplos: [
      { en:"I leave home at 8.", pt:"Saio de casa às 8." },
      { en:"I leave work at 6.", pt:"Saio do trabalho às 6." },
      { en:"I leave the office at 5.", pt:"Saio do escritório às 5." }
    ],
    nota:'É o oposto do <span class="en" data-say="go to">go to</span> (Lição 14): você <span class="en" data-say="go to the gym">go to the gym</span> (chega) e depois <span class="en" data-say="leave the gym">leave the gym</span> (sai).'
  },

  conjugacao: {
    nota:'leave → he leaves (só o -s).',
    linhas: [
      { p:"I", en:"I leave the gym", say:"I leave the gym.", pt:"eu saio da academia" },
      { p:"you", en:"you leave the gym", say:"You leave the gym.", pt:"você sai da academia" },
      { p:"we", en:"we leave the gym", say:"We leave the gym.", pt:"nós saímos da academia" },
      { p:"they", en:"they leave the gym", say:"They leave the gym.", pt:"eles saem da academia" },
      { p:"he", en:"he leave<strong>s</strong> the gym", say:"He leaves the gym.", pt:"ele sai da academia", hl:true },
      { p:"she", en:"she leave<strong>s</strong> the gym", say:"She leaves the gym.", pt:"ela sai da academia", hl:true },
      { p:"it", en:"it leave<strong>s</strong>", say:"It leaves.", pt:"(coisa) sai/parte", hl:true }
    ]
  },

  formas: {
    intro:'⚠️ Passado irregular: leave → <span class="en" data-say="left">left</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't leave the gym at 2.", pt:"Eu não saio da academia às 2." },
      { tag:"?", tagType:"bad", en:"Do you leave the gym at 2?", pt:"Você sai da academia às 2?" },
      { tag:"passado", en:"I left the gym at 2.", pt:"Saí da academia às 2. (leave → left)" },
      { tag:"futuro", en:"I will leave the gym at 2.", pt:"Vou sair da academia às 2." }
    ],
    nota:'<span class="en" data-say="left">left</span> também significa “esquerda” — mas como passado de leave é “saí/deixei”. O contexto resolve.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você vai embora:",
    linhas: [
      { en:"I head out at 2.", pt:"Vou embora às 2." },
      { en:"I'm out by 2.", pt:"Tô fora até as 2 / saio até as 2." },
      { en:"I take off at 2.", pt:"Vou embora às 2. (informal)" },
      { en:"I leave around 2.", pt:"Saio por volta das 2." },
      { en:"I wrap up my workout at 2.", pt:"Encerro o treino às 2." }
    ],
    nota:'<span class="en" data-say="head out">head out</span> e <span class="en" data-say="take off">take off</span> = ir embora. E <span class="en" data-say="I\'m out">I\'m out</span> é o “tô saindo” bem casual.'
  },

  expressoes: [
    { en:"leave the gym", pt:"sair da academia" },
    { en:"leave home", pt:"sair de casa" },
    { en:"leave a message", pt:"deixar um recado" },
    { en:"leave behind", pt:"deixar para trás" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"leave", ipa:"/liːv/", soa:"“líiv”", sentido:"sair de / deixar" },
      { palavra:"gym", ipa:"/dʒɪm/", soa:"“djim”", sentido:"academia" },
      { palavra:"at", ipa:"/æt/", soa:"“ét”", sentido:"às (horário)" }
    ],
    fraseSoa:"ai líiv dâ djim ét tu pí-ém",
    fraseIpa:"/aɪ liːv ðə dʒɪm æt tuː ˌpiː ˈɛm/",
    notaPron:'⚠️ Cuidado clássico: <span class="en" data-say="leave">leave</span> (“líiv”, com i longo, = sair) ≠ <span class="en" data-say="live">live</span> (“lív”, com i curto, = morar). Um som de i muda tudo.',
    cultura:'<span class="en" data-say="I\'m heading out.">“I\'m heading out.”</span> é o jeito educado e comum de avisar que você está indo embora — de um lugar, de uma reunião, de uma festa.'
  },

  erros: [
    { tipo:"bad", texto:"I leave from the gym.", nota:"Sem “from”: <strong>leave the gym</strong>." },
    { tipo:"good", en:"I leave the gym.", nota:"—" },
    { tipo:"bad", texto:"I leaved the gym.", nota:"Passado é <strong>left</strong> (irregular)." },
    { tipo:"bad", texto:"leave e live com o mesmo som.", nota:"<strong>leave</strong> (líiv, sair) ≠ <strong>live</strong> (lív, morar)." }
  ],

  dica: {
    texto:'<strong>leave</strong> é o oposto de <strong>go to</strong> (chegar → sair). E cuidado com o som: líiv (sair) ≠ lív (morar). Toque e compare:',
    chips:["go to the gym","leave the gym","leave home","leave work"],
    nota:"go to = chega; leave = sai. E leave nunca leva “from”."
  },

  dialogo: [
    { who:"A", en:"What time do you leave the gym?", pt:"Que horas você sai da academia?" },
    { who:"B", en:"I leave the gym at 2 and head home.", pt:"Saio da academia às 2 e vou pra casa." },
    { who:"A", en:"So a one-hour workout. Nice.", pt:"Então uma hora de treino. Legal." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (sem preposição extra):", before:"I leave", after:"gym at 2.", resposta:"the" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"the gym at 2.", resposta:"leaves", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["the","I","gym","leave"], resposta:"I leave the gym." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele sai da academia às 2.", resposta:"He leaves the gym at 2." },
    { tipo:"transformar", q:"Transforme", base:"I leave the gym at 2 p.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't leave the gym at 2 p.m." },
      { tag:"?", tagType:"bad", en:"Do you leave the gym at 2 p.m.?" },
      { tag:"passado", en:"I left the gym at 2 p.m." },
      { tag:"futuro", en:"I will leave the gym at 2 p.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com leave + lugar + horário.", exemplo:"I leave work at 6 p.m." }
  ],

  flashcards: [
    { pt:"Saí da academia às 2.", en:"I left the gym at 2." },
    { pt:"Ele sai da academia às 2.", en:"He leaves the gym at 2." }
  ],

  conexao:'Faz par com o <span class="en" data-say="go to the gym">go to the gym</span> da Lição 14: você chega e depois sai. E o <span class="en" data-say="left">left</span> entra na sua lista de irregulares (went, rode, took, made… agora left).',

  revisao: [
    "<strong>leave</strong> = sair de (sem “from”): leave the gym.",
    "Também significa <strong>deixar</strong> (I left my keys).",
    "Passado irregular: leave → <strong>left</strong>.",
    "⚠️ <strong>leave</strong> (líiv, sair) ≠ <strong>live</strong> (lív, morar).",
    "Naturais: <strong>head out</strong>, <strong>take off</strong>, <strong>I'm out</strong>."
  ]
});
