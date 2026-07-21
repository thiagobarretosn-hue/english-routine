/* Lição 29 — I go to therapy at 11 a.m.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:5, capituloNome:"Class, Sports & Therapy", licao:29,
    tituloEn:"I go to therapy at 11 a.m.", tituloPt:"Eu faço terapia às 11 horas." },

  hero: { time:"VOLUME 1 · CAP. 5 — CLASS, SPORTS & THERAPY · LIÇÃO 29",
    en:"I go to therapy at 11 a.m.", pt:"Eu faço terapia às 11 da manhã." },

  naturalLiteral: {
    natural:"I go to therapy at 11 a.m.",
    literal:"Eu vou para a terapia às 11 da manhã.",
    nota:'<span class="en" data-say="go to therapy">go to therapy</span> = fazer terapia. Igual a “go to work” e “go to school”, <span class="en" data-say="therapy">therapy</span> vem <strong>sem the</strong> — é uma atividade, não um lugar específico.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"go to", classe:"verbo + preposição", funcao:"a ação (ir a)", traducao:"vou para", hl:true },
      { palavra:"therapy", classe:"substantivo (atividade)", funcao:"a atividade", traducao:"terapia", hl:true },
      { palavra:"at 11 a.m.", classe:"expressão de tempo", funcao:"o horário", traducao:"às 11 da manhã" }
    ],
    nota:'Compare com a Lição 14: <span class="en" data-say="go to the gym">go to <strong>the</strong> gym</span> (lugar) × <span class="en" data-say="go to therapy">go to therapy</span> (atividade, sem the). Atividades e rotinas abstratas dispensam o the.'
  },

  molde: {
    intro:"Atividades e lugares que vão SEM the:",
    formula:"go to + therapy / work / school / church / bed",
    exemplos: [
      { en:"I go to work at 8.", pt:"Vou trabalhar às 8." },
      { en:"I go to bed late.", pt:"Vou dormir tarde." },
      { en:"I go to church on Sundays.", pt:"Vou à igreja aos domingos." }
    ],
    nota:'Guarde a lista dos “sem the”: <span class="en" data-say="therapy">therapy</span>, <span class="en" data-say="work">work</span>, <span class="en" data-say="school">school</span>, <span class="en" data-say="church">church</span>, <span class="en" data-say="bed">bed</span>. Prédios específicos levam the (the gym, the office, the bank).'
  },

  conjugacao: {
    verbo: { base:"go to therapy", past:"went to therapy", irregular:true, ptPast:"eu fui à terapia", ptFut:"eu vou à terapia" },
    nota:'go → he goes (Lição 14).',
    linhas: [
      { p:"I", en:"I go to therapy", say:"I go to therapy.", pt:"eu faço terapia" },
      { p:"you", en:"you go to therapy", say:"You go to therapy.", pt:"você faz terapia" },
      { p:"we", en:"we go to therapy", say:"We go to therapy.", pt:"nós fazemos terapia" },
      { p:"they", en:"they go to therapy", say:"They go to therapy.", pt:"eles fazem terapia" },
      { p:"he", en:"he go<strong>es</strong> to therapy", say:"He goes to therapy.", pt:"ele faz terapia", hl:true },
      { p:"she", en:"she go<strong>es</strong> to therapy", say:"She goes to therapy.", pt:"ela faz terapia", hl:true },
      { p:"it", en:"it go<strong>es</strong>", say:"It goes.", pt:"(coisa) vai", hl:true }
    ]
  },

  formas: {
    intro:'Passado com went (Lição 14).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't go to therapy on Mondays.", pt:"Eu não faço terapia às segundas." },
      { tag:"?", tagType:"bad", en:"Do you go to therapy?", pt:"Você faz terapia?" },
      { tag:"passado", en:"I went to therapy at 11.", pt:"Fui à terapia às 11. (go → went)" },
      { tag:"futuro", en:"I will go to therapy at 11.", pt:"Vou à terapia às 11." }
    ],
    nota:'Também é muito comum dizer <span class="en" data-say="I have therapy at 11.">I have therapy at 11.</span> — com <strong>have</strong>, como uma marcação na agenda.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar de terapia:",
    linhas: [
      { en:"I have therapy at 11.", pt:"Tenho terapia às 11." },
      { en:"I see my therapist at 11.", pt:"Vejo minha terapeuta às 11." },
      { en:"I have a therapy session at 11.", pt:"Tenho uma sessão de terapia às 11." },
      { en:"I do therapy once a week.", pt:"Faço terapia uma vez por semana." },
      { en:"My therapy is at 11.", pt:"Minha terapia é às 11." }
    ],
    nota:'<span class="en" data-say="therapist">therapist</span> = terapeuta; <span class="en" data-say="session">session</span> = sessão. Nos EUA, falar de terapia é totalmente normal e sem estigma.'
  },

  expressoes: [
    { en:"go to therapy", pt:"fazer terapia" },
    { en:"a therapy session", pt:"uma sessão de terapia" },
    { en:"my therapist", pt:"meu/minha terapeuta" },
    { en:"go to bed", pt:"ir dormir" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"therapy", ipa:"/ˈθɛrəpi/", soa:"“THÉ-ra-pi”", sentido:"terapia" },
      { palavra:"go to", ipa:"/ɡoʊ tu/", soa:"“gôu tu”", sentido:"ir a" },
      { palavra:"a.m.", ipa:"/ˌeɪ ˈɛm/", soa:"“êi ém”", sentido:"da manhã" }
    ],
    fraseSoa:"ai gôu tu THÉ-ra-pi ét ilévn êi-ém",
    fraseIpa:"/aɪ ɡoʊ tu ˈθɛrəpi æt ɪˈlɛvən ˌeɪ ˈɛm/",
    notaPron:'<span class="en" data-say="therapy">therapy</span> começa com o som <strong>th</strong> (língua entre os dentes, como em “teeth” e “Thursday”): “THÉ-ra-pi”, não “TÉ-ra-pi”.',
    cultura:'Nos EUA, <span class="en" data-say="I have therapy today.">“I have therapy today.”</span> é dito com naturalidade, como quem fala de uma consulta médica. Cuidar da saúde mental é visto como algo positivo.'
  },

  erros: [
    { tipo:"bad", texto:"I go to the therapy.", nota:"Atividade sem the: <strong>go to therapy</strong>." },
    { tipo:"good", en:"I go to therapy.", nota:"—" },
    { tipo:"bad", texto:"therapy com “t” no começo.", nota:"É o som do <strong>th</strong>: <strong>THÉ-ra-pi</strong>." },
    { tipo:"bad", texto:"I make therapy.", nota:"Use <strong>go to</strong> ou <strong>have</strong> therapy, não “make”." }
  ],

  dica: {
    texto:'A lista dos “go to” <strong>sem the</strong>. Toque e ouça — todas atividades/rotinas:',
    chips:["go to therapy","go to work","go to school","go to bed"],
    nota:"therapy, work, school, bed = sem the. Prédio específico (the gym, the office) = com the."
  },

  dialogo: [
    { who:"A", en:"What's your morning like on Tuesdays?", pt:"Como é sua manhã de terça?" },
    { who:"B", en:"I go to therapy at 11.", pt:"Faço terapia às 11." },
    { who:"A", en:"That's a great habit. Good for you.", pt:"É um ótimo hábito. Que bom pra você." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (sem artigo):", before:"I go to", after:"at 11.", resposta:"therapy" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"to therapy at 11.", resposta:"goes", wide:true, dica:"go vira ___." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["therapy","I","to","go"], resposta:"I go to therapy." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela faz terapia às 11.", resposta:"She goes to therapy at 11." },
    { tipo:"transformar", q:"Transforme", base:"I go to therapy at 11 a.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't go to therapy at 11 a.m." },
      { tag:"?", tagType:"bad", en:"Do you go to therapy at 11 a.m.?" },
      { tag:"passado", en:"I went to therapy at 11 a.m." },
      { tag:"futuro", en:"I will go to therapy at 11 a.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com go to + atividade sem the.", exemplo:"I go to bed at midnight." }
  ],

  flashcards: [
    { pt:"Tenho terapia às 11.", en:"I have therapy at 11." },
    { pt:"Vejo minha terapeuta às 11.", en:"I see my therapist at 11." }
  ],

  conexao:'Reforça o <span class="en" data-say="go to">go to</span> da Lição 14, agora com a versão <strong>sem the</strong> (atividades). E treina de novo o som do <strong>th</strong> que apareceu em teeth, Thursday e agora therapy.',

  revisao: [
    "<strong>go to therapy</strong> (sem the) — atividade, não prédio.",
    "Sem the: therapy, work, school, church, bed.",
    "Com the: the gym, the office, the bank.",
    "<strong>therapy</strong> = som do <strong>th</strong> (“THÉ-ra-pi”).",
    "Também: <strong>have therapy</strong> / <strong>see my therapist</strong>."
  ]
});
