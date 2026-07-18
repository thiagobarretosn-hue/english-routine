/* Lição 38 — After class, I talk to my girlfriend or my mom.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:38,
    tituloEn:"After class, I talk to my girlfriend or my mom.", tituloPt:"Depois da aula, converso com minha namorada ou com a minha mãe." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 38",
    en:"After class, I talk to my girlfriend or my mom.", pt:"Depois da aula, converso com minha namorada ou com a minha mãe." },

  naturalLiteral: {
    natural:"After class, I talk to my girlfriend or my mom.",
    literal:"Depois da aula, eu falo para minha namorada ou minha mãe.",
    nota:'“Conversar com” é <span class="en" data-say="talk to">talk to</span> — com <strong>to</strong>, não “with” (embora “talk with” também exista, “talk to” é o mais comum). E <span class="en" data-say="girlfriend">girlfriend</span> = namorada.'
  },

  estrutura: {
    linhas: [
      { palavra:"After class,", classe:"after + substantivo", funcao:"quando", traducao:"depois da aula", hl:true },
      { palavra:"I talk to", classe:"verbo + preposição", funcao:"a ação (conversar com)", traducao:"converso com", hl:true },
      { palavra:"my girlfriend", classe:"possessivo + substantivo", funcao:"pessoa 1", traducao:"minha namorada" },
      { palavra:"or my mom", classe:"or + pessoa 2", funcao:"alternativa", traducao:"ou minha mãe" }
    ],
    nota:'<span class="en" data-say="after class">after class</span> é uma expressão fixa: “depois da aula”, sem the. E o <span class="en" data-say="or">or</span> (Lição 35) volta ligando as duas pessoas.'
  },

  molde: {
    intro:"O molde de conversar com alguém:",
    formula:"I talk to + [pessoa]",
    exemplos: [
      { en:"I talk to my mom every day.", pt:"Converso com minha mãe todo dia." },
      { en:"I talk to my boss at work.", pt:"Falo com meu chefe no trabalho." },
      { en:"I talk to my friends online.", pt:"Converso com meus amigos online." }
    ],
    nota:'<span class="en" data-say="talk to">talk to</span> = conversar com; <span class="en" data-say="talk about">talk about</span> = falar sobre (um assunto). “I talk to my mom about work.”'
  },

  conjugacao: {
    nota:'talk → he talks.',
    linhas: [
      { p:"I", en:"I talk to my mom", say:"I talk to my mom.", pt:"eu converso com minha mãe" },
      { p:"you", en:"you talk to your mom", say:"You talk to your mom.", pt:"você conversa com sua mãe" },
      { p:"we", en:"we talk to our family", say:"We talk to our family.", pt:"nós conversamos com nossa família" },
      { p:"they", en:"they talk to their family", say:"They talk to their family.", pt:"eles conversam com a família" },
      { p:"he", en:"he talk<strong>s</strong> to his mom", say:"He talks to his mom.", pt:"ele conversa com a mãe dele", hl:true },
      { p:"she", en:"she talk<strong>s</strong> to her mom", say:"She talks to her mom.", pt:"ela conversa com a mãe dela", hl:true },
      { p:"it", en:"it talk<strong>s</strong>", say:"It talks.", pt:"(coisa) fala", hl:true }
    ]
  },

  formas: {
    intro:'Passado talked (regular, “tókt”).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't talk to my girlfriend every day.", pt:"Não converso com minha namorada todo dia." },
      { tag:"?", tagType:"bad", en:"Do you talk to your mom often?", pt:"Você fala com sua mãe com frequência?" },
      { tag:"passado", en:"I talked to my girlfriend last night.", pt:"Conversei com minha namorada ontem à noite. (talk → talked)" },
      { tag:"futuro", en:"I will talk to my mom later.", pt:"Vou falar com minha mãe mais tarde." }
    ],
    nota:'<span class="en" data-say="later">later</span> = mais tarde; <span class="en" data-say="often">often</span> = com frequência. Duas palavrinhas úteis para falar de hábitos de conversa.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você conversa com alguém:",
    linhas: [
      { en:"I call my girlfriend.", pt:"Ligo para minha namorada." },
      { en:"I chat with my mom.", pt:"Bato papo com minha mãe." },
      { en:"I catch up with my girlfriend.", pt:"Coloco o papo em dia com minha namorada." },
      { en:"I talk on the phone.", pt:"Converso ao telefone." },
      { en:"I give my mom a call.", pt:"Dou uma ligada pra minha mãe." }
    ],
    nota:'<span class="en" data-say="catch up">catch up</span> = colocar o papo/assunto em dia; <span class="en" data-say="give someone a call">give someone a call</span> = dar uma ligada para alguém.'
  },

  expressoes: [
    { en:"talk to", pt:"conversar com" },
    { en:"talk about", pt:"falar sobre" },
    { en:"on the phone", pt:"ao telefone" },
    { en:"catch up", pt:"colocar o papo em dia" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"talk", ipa:"/tɔːk/", soa:"“tók”", sentido:"conversar / falar" },
      { palavra:"girlfriend", ipa:"/ˈɡɜːrlfrɛnd/", soa:"“GÂRL-frend”", sentido:"namorada" },
      { palavra:"after", ipa:"/ˈæftər/", soa:"“áfter”", sentido:"depois de" }
    ],
    fraseSoa:"áfter clés, ai tók tu mai GÂRL-frend or mai mãm",
    fraseIpa:"/ˈæftər klæs aɪ tɔːk tu maɪ ˈɡɜːrlfrɛnd ɔːr maɪ mɒm/",
    notaPron:'<span class="en" data-say="talk">talk</span> tem o <strong>l mudo</strong>: fala-se “tók”, sem o “l”. Igual em <span class="en" data-say="walk">walk</span> (“uók”) e <span class="en" data-say="half">half</span> (“réf”).',
    cultura:'<span class="en" data-say="girlfriend">girlfriend</span> = namorada; <span class="en" data-say="boyfriend">boyfriend</span> = namorado. Já <span class="en" data-say="wife">wife</span> = esposa e <span class="en" data-say="husband">husband</span> = marido. Não confunda namoro com casamento.'
  },

  erros: [
    { tipo:"bad", texto:"I talk my girlfriend.", nota:"Precisa do <strong>to</strong>: talk to my girlfriend." },
    { tipo:"good", en:"I talk to my girlfriend.", nota:"—" },
    { tipo:"bad", texto:"talk pronunciado com “l”.", nota:"O l é mudo: <strong>“tók”</strong>." },
    { tipo:"bad", texto:"He talk to his mom.", nota:"3ª pessoa: He talk<strong>s</strong> to his mom." }
  ],

  dica: {
    texto:'<strong>talk to</strong> (com quem) × <strong>talk about</strong> (sobre o quê). Toque e ouça:',
    chips:["talk to my mom","talk to my girlfriend","catch up","on the phone"],
    nota:"talk TO + pessoa; talk ABOUT + assunto. E o l de talk é mudo (“tók”)."
  },

  dialogo: [
    { who:"A", en:"What do you do after your English class?", pt:"O que você faz depois da aula de inglês?" },
    { who:"B", en:"After class, I talk to my girlfriend or my mom.", pt:"Depois da aula, converso com minha namorada ou com minha mãe." },
    { who:"A", en:"Nice, some family and relationship time.", pt:"Legal, um tempo de família e de casal." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a preposição (conversar com):", before:"I talk", after:"my mom.", resposta:"to" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"to her girlfriend.", resposta:"talks", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["to","I","mom","talk","my"], resposta:"I talk to my mom." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele conversa com a namorada dele.", resposta:"He talks to his girlfriend." },
    { tipo:"transformar", q:"Transforme", base:"I talk to my girlfriend.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't talk to my girlfriend." },
      { tag:"?", tagType:"bad", en:"Do you talk to your girlfriend?" },
      { tag:"passado", en:"I talked to my girlfriend." },
      { tag:"futuro", en:"I will talk to my girlfriend." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com talk to + pessoa.", exemplo:"I talk to my best friend every day." }
  ],

  flashcards: [
    { pt:"Ligo para minha namorada.", en:"I call my girlfriend." },
    { pt:"Conversei com minha mãe ontem à noite.", en:"I talked to my mom last night." }
  ],

  conexao:'Junta o <span class="en" data-say="after">after</span> (Lição 12), o <span class="en" data-say="or">or</span> (Lição 35) e o vocabulário de família (Lição 37), somando o <span class="en" data-say="talk to">talk to</span>. É a sua noite depois da aula de inglês, de verdade.',

  revisao: [
    "<strong>talk to</strong> + pessoa (conversar com).",
    "<strong>talk about</strong> + assunto (falar sobre).",
    "O <strong>l</strong> de <strong>talk</strong> é mudo (“tók”), como walk.",
    "<strong>girlfriend/boyfriend</strong> (namoro) × wife/husband (casamento).",
    "Naturais: <strong>catch up</strong>, <strong>give a call</strong>."
  ]
});
