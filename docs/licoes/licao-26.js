/* Lição 26 — I have online meetings with my coworkers.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:4, capituloNome:"Lunch & Afternoon", licao:26,
    tituloEn:"I have online meetings with my coworkers.", tituloPt:"Tenho reuniões com meus colegas do trabalho de forma online." },

  hero: { time:"VOLUME 1 · CAP. 4 — LUNCH & AFTERNOON · LIÇÃO 26",
    en:"I have online meetings with my coworkers.", pt:"Tenho reuniões online com meus colegas de trabalho." },

  naturalLiteral: {
    natural:"I have online meetings with my coworkers.",
    literal:"Eu tenho reuniões online com meus colegas de trabalho.",
    nota:'Aqui <span class="en" data-say="have">have</span> volta ao sentido de “ter/participar de” (have a meeting = ter uma reunião). E <span class="en" data-say="coworkers">coworkers</span> = colegas de trabalho — <strong>co</strong> (junto) + <strong>workers</strong> (trabalhadores).'
  },

  estrutura: {
    linhas: [
      { palavra:"I have", classe:"sujeito + verbo", funcao:"a ação (ter/participar)", traducao:"eu tenho", hl:true },
      { palavra:"online meetings", classe:"adjetivo + substantivo", funcao:"o quê", traducao:"reuniões online" },
      { palavra:"with", classe:"preposição", funcao:"com quem", traducao:"com", hl:true },
      { palavra:"my coworkers", classe:"possessivo + substantivo", funcao:"as pessoas", traducao:"meus colegas" }
    ],
    nota:'<span class="en" data-say="with">with</span> + pessoas: with my coworkers, with my team, with my boss. É o mesmo <span class="en" data-say="with">with</span> do <span class="en" data-say="work with">work with</span> da Lição 7.'
  },

  molde: {
    intro:"O molde de reuniões e de com quem:",
    formula:"I have a meeting with + [pessoas]",
    exemplos: [
      { en:"I have a meeting with my boss.", pt:"Tenho uma reunião com meu chefe." },
      { en:"I have a call with my team.", pt:"Tenho uma call com minha equipe." },
      { en:"I have a chat with a client.", pt:"Tenho uma conversa com um cliente." }
    ],
    nota:'<span class="en" data-say="have a meeting">have a meeting</span>, <span class="en" data-say="have a call">have a call</span>, <span class="en" data-say="have a chat">have a chat</span> — reunião, ligação, conversa. Todas com <strong>have</strong>.'
  },

  conjugacao: {
    verbo: { base:"have meetings", past:"had meetings", irregular:true, ptPast:"eu tive reuniões", ptFut:"eu vou ter reuniões" },
    nota:'have → has (Lição 8).',
    linhas: [
      { p:"I", en:"I have meetings", say:"I have meetings with my team.", pt:"eu tenho reuniões" },
      { p:"you", en:"you have meetings", say:"You have meetings with your team.", pt:"você tem reuniões" },
      { p:"we", en:"we have meetings", say:"We have meetings with our team.", pt:"nós temos reuniões" },
      { p:"they", en:"they have meetings", say:"They have meetings with their team.", pt:"eles têm reuniões" },
      { p:"he", en:"he <strong>has</strong> meetings", say:"He has meetings with his team.", pt:"ele tem reuniões", hl:true },
      { p:"she", en:"she <strong>has</strong> meetings", say:"She has meetings with her team.", pt:"ela tem reuniões", hl:true },
      { p:"it", en:"it <strong>has</strong>", say:"It has.", pt:"(coisa) tem", hl:true }
    ]
  },

  formas: {
    intro:'Passado had.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't have meetings today.", pt:"Não tenho reuniões hoje." },
      { tag:"?", tagType:"bad", en:"Do you have meetings with your coworkers?", pt:"Você tem reuniões com seus colegas?" },
      { tag:"passado", en:"I had a meeting with my coworkers.", pt:"Tive uma reunião com meus colegas. (have → had)" },
      { tag:"futuro", en:"I will have a meeting at 3.", pt:"Vou ter uma reunião às 3." }
    ],
    nota:'No dia a dia corporativo, muita gente troca “have a meeting” por <span class="en" data-say="hop on a call">hop on a call</span> (entrar numa call) — bem informal e comum.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar de reuniões online:",
    linhas: [
      { en:"I have online meetings with my team.", pt:"Tenho reuniões online com minha equipe." },
      { en:"I meet with my coworkers online.", pt:"Me reúno com meus colegas online." },
      { en:"I hop on calls with my coworkers.", pt:"Entro em calls com meus colegas." },
      { en:"I have video calls during the day.", pt:"Tenho videochamadas durante o dia." },
      { en:"I'm in meetings all afternoon.", pt:"Fico em reuniões a tarde toda." }
    ],
    nota:'<span class="en" data-say="meet">meet</span> (verbo) = se reunir/encontrar; <span class="en" data-say="meeting">meeting</span> (substantivo) = a reunião. Mesma raiz, funções diferentes.'
  },

  expressoes: [
    { en:"have a meeting", pt:"ter/participar de uma reunião" },
    { en:"hop on a call", pt:"entrar numa call" },
    { en:"my coworkers", pt:"meus colegas de trabalho" },
    { en:"my team", pt:"minha equipe" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"meeting", ipa:"/ˈmiːtɪŋ/", soa:"“MÍi-ting”", sentido:"reunião" },
      { palavra:"coworkers", ipa:"/ˈkoʊwɜːrkərz/", soa:"“KÔU-uâr-kers”", sentido:"colegas de trabalho" },
      { palavra:"online", ipa:"/ˌɒnˈlaɪn/", soa:"“on-LÁIN”", sentido:"online / pela internet" }
    ],
    fraseSoa:"ai rév on-LÁIN MÍi-tings uith mai KÔU-uâr-kers",
    fraseIpa:"/aɪ hæv ˌɒnˈlaɪn ˈmiːtɪŋz wɪð maɪ ˈkoʊwɜːrkərz/",
    notaPron:'<span class="en" data-say="meeting">meeting</span> tem o “i” longo (“MÍi-ting”), diferente de “mitting”. E <span class="en" data-say="with">with</span> termina com o som /ð/ (th sonoro), parecido com um “d” suave.',
    cultura:'<span class="en" data-say="coworker">coworker</span> é a palavra do inglês americano; <span class="en" data-say="colleague">colleague</span> (“KÓ-lig”) é mais formal/britânica. As duas significam colega de trabalho.'
  },

  erros: [
    { tipo:"bad", texto:"I do a meeting.", nota:"Reunião se <strong>have</strong> (ter), não “do”: have a meeting." },
    { tipo:"good", en:"I have a meeting.", nota:"—" },
    { tipo:"bad", texto:"I have meeting today.", nota:"Precisa de artigo/plural: <strong>a meeting</strong> ou <strong>meetings</strong>." },
    { tipo:"bad", texto:"meetings with of my coworkers.", nota:"Só <strong>with</strong>: meetings with my coworkers." }
  ],

  dica: {
    texto:'Reunião, ligação e conversa: todas com <strong>have</strong>, e <strong>with</strong> para as pessoas. Toque e ouça:',
    chips:["have a meeting","have a call","with my coworkers","with my team"],
    nota:"have a meeting / call / chat (o evento) + with + pessoas."
  },

  dialogo: [
    { who:"A", en:"Are you busy this afternoon?", pt:"Você está ocupado esta tarde?" },
    { who:"B", en:"Yeah, I have online meetings with my coworkers.", pt:"Sim, tenho reuniões online com meus colegas." },
    { who:"A", en:"Back-to-back calls?", pt:"Calls emendadas?" },
    { who:"B", en:"Pretty much.", pt:"Praticamente." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (ter reunião):", before:"I", after:"a meeting at 3.", resposta:"have" },
    { tipo:"completar", q:"Complete a preposição (com quem):", before:"a meeting", after:"my coworkers.", resposta:"with" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["a","I","meeting","have"], resposta:"I have a meeting." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela tem uma reunião com o chefe.", resposta:"She has a meeting with her boss." },
    { tipo:"transformar", q:"Transforme", base:"I have a meeting with my coworkers.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't have a meeting with my coworkers." },
      { tag:"?", tagType:"bad", en:"Do you have a meeting with your coworkers?" },
      { tag:"passado", en:"I had a meeting with my coworkers." },
      { tag:"futuro", en:"I will have a meeting with my coworkers." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com have a meeting/call + with.", exemplo:"I have a call with a client at 4." }
  ],

  flashcards: [
    { pt:"Tenho reuniões online com meus colegas.", en:"I have online meetings with my coworkers." },
    { pt:"Tenho uma reunião com meu chefe.", en:"I have a meeting with my boss." }
  ],

  conexao:'Retoma o <span class="en" data-say="have">have</span> (Lições 8, 23, 24) num novo sentido (ter/participar) e o <span class="en" data-say="with">with</span> do <span class="en" data-say="work with">work with</span> (Lição 7). Vocabulário de trabalho que combina com o seu “I work from home” (Lição 6).',

  revisao: [
    "<strong>have a meeting</strong> (ter/participar), nunca “do a meeting”.",
    "<strong>with</strong> + pessoas: with my coworkers / team / boss.",
    "<strong>coworker</strong> (EUA) = <strong>colleague</strong> (formal/UK).",
    "<strong>meet</strong> (verbo) × <strong>meeting</strong> (substantivo).",
    "Natural: <strong>hop on a call</strong>."
  ]
});
