/* Lição 14 — I go to the gym at 1 p.m.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:14,
    tituloEn:"I go to the gym at 1 p.m.", tituloPt:"Eu vou para a academia às 13 horas." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 14",
    en:"I go to the gym at 1 p.m.", pt:"Eu vou para a academia às 13 horas (1 da tarde)." },

  naturalLiteral: {
    natural:"I go to the gym at 1 p.m.",
    literal:"Eu vou para a academia à 1 da tarde.",
    nota:'<span class="en" data-say="go to the gym">go to the gym</span> = ir para a academia — repare no <strong>the</strong>. E <span class="en" data-say="1 p.m.">1 p.m.</span> é 1 da tarde (13h); <span class="en" data-say="p.m.">p.m.</span> = depois do meio-dia.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"go to", classe:"verbo + preposição", funcao:"a ação (ir para)", traducao:"vou para", hl:true },
      { palavra:"the gym", classe:"artigo + substantivo", funcao:"o destino", traducao:"a academia" },
      { palavra:"at 1 p.m.", classe:"expressão de tempo", funcao:"o horário", traducao:"à 1 da tarde" }
    ],
    nota:'Aqui mora uma pegadinha: alguns lugares levam <strong>the</strong>, outros não. <span class="en" data-say="go to the gym">go to <strong>the</strong> gym</span>, mas <span class="en" data-say="go to work">go to work</span> (sem the) e <span class="en" data-say="go home">go home</span> (sem to e sem the).'
  },

  molde: {
    intro:"O molde de ir a lugares:",
    formula:"I go to + (the) + lugar",
    exemplos: [
      { en:"I go to the office.", pt:"Vou para o escritório." },
      { en:"I go to work.", pt:"Vou para o trabalho. (sem the)" },
      { en:"I go home.", pt:"Vou para casa. (sem to, sem the)" }
    ],
    nota:'Guarde as exceções: <span class="en" data-say="go home">go home</span>, <span class="en" data-say="go to work">go to work</span>, <span class="en" data-say="go to school">go to school</span> — sem the. A maioria dos outros lugares leva the (the gym, the office, the bank).'
  },

  conjugacao: {
    nota:'⚠️ <span class="en" data-say="go">go</span> ganha <strong>-es</strong> na 3ª pessoa: he <span class="en" data-say="goes">goes</span>.',
    linhas: [
      { p:"I", en:"I go to the gym", say:"I go to the gym.", pt:"eu vou para a academia" },
      { p:"you", en:"you go to the gym", say:"You go to the gym.", pt:"você vai para a academia" },
      { p:"we", en:"we go to the gym", say:"We go to the gym.", pt:"nós vamos para a academia" },
      { p:"they", en:"they go to the gym", say:"They go to the gym.", pt:"eles vão para a academia" },
      { p:"he", en:"he go<strong>es</strong> to the gym", say:"He goes to the gym.", pt:"ele vai para a academia", hl:true },
      { p:"she", en:"she go<strong>es</strong> to the gym", say:"She goes to the gym.", pt:"ela vai para a academia", hl:true },
      { p:"it", en:"it go<strong>es</strong>", say:"It goes.", pt:"(coisa) vai", hl:true }
    ]
  },

  formas: {
    intro:'⚠️ Passado irregular e muito usado: go → <span class="en" data-say="went">went</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't go to the gym at 1.", pt:"Eu não vou para a academia à 1." },
      { tag:"?", tagType:"bad", en:"Do you go to the gym at 1?", pt:"Você vai para a academia à 1?" },
      { tag:"passado", en:"I went to the gym at 1.", pt:"Fui para a academia à 1. (go → went)" },
      { tag:"futuro", en:"I will go to the gym at 1.", pt:"Vou para a academia à 1." }
    ],
    nota:'<span class="en" data-say="went">went</span> não se parece nada com “go” — é um dos irregulares que mais vale decorar.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você vai malhar:",
    linhas: [
      { en:"I hit the gym at 1.", pt:"Vou malhar à 1. (informal)" },
      { en:"I head to the gym at 1.", pt:"Sigo para a academia à 1." },
      { en:"I work out at 1.", pt:"Malho à 1." },
      { en:"I go work out.", pt:"Vou malhar." },
      { en:"My gym time is 1 p.m.", pt:"Meu horário de academia é 1 da tarde." }
    ],
    nota:'<span class="en" data-say="hit the gym">hit the gym</span> = ir malhar; <span class="en" data-say="work out">work out</span> = malhar/treinar (o exercício em si).'
  },

  expressoes: [
    { en:"go to the gym", pt:"ir à academia" },
    { en:"hit the gym", pt:"ir malhar" },
    { en:"work out", pt:"malhar / treinar" },
    { en:"go home", pt:"ir para casa" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"go", ipa:"/ɡoʊ/", soa:"“gôu”", sentido:"ir" },
      { palavra:"gym", ipa:"/dʒɪm/", soa:"“djim”", sentido:"academia" },
      { palavra:"p.m.", ipa:"/ˌpiː ˈɛm/", soa:"“pí ém”", sentido:"da tarde / da noite" }
    ],
    fraseSoa:"ai gôu tu dâ djim ét uân pí-ém",
    fraseIpa:"/aɪ ɡoʊ tu ðə dʒɪm æt wʌn ˌpiː ˈɛm/",
    notaPron:'<span class="en" data-say="gym">gym</span> começa com o som “dj” (/dʒ/), igual ao “j” de “jeans”: “djim”. E <span class="en" data-say="go">go</span> é “gôu”, com ditongo, não “gô”.',
    cultura:'<span class="en" data-say="a.m.">a.m.</span> = antes do meio-dia (manhã); <span class="en" data-say="p.m.">p.m.</span> = depois do meio-dia (tarde/noite). Nos EUA o relógio é de 12 horas: 1 p.m. = 13h, 8 p.m. = 20h.'
  },

  erros: [
    { tipo:"bad", texto:"I go to gym.", nota:"A academia leva artigo: <strong>go to the gym</strong>." },
    { tipo:"good", en:"I go to the gym.", nota:"—" },
    { tipo:"bad", texto:"I go to the home.", nota:"Casa é exceção: <strong>go home</strong> (sem to, sem the)." },
    { tipo:"bad", texto:"He go to the gym.", nota:"3ª pessoa de go é <strong>goes</strong>: He goes." }
  ],

  dica: {
    texto:'Decore o mapa dos lugares: a maioria leva <strong>the</strong>, mas alguns não. Toque e compare:',
    chips:["go to the gym","go to the office","go to work","go home"],
    nota:"the gym / the office (com the) × work / home (sem). São poucas exceções — decore-as e o resto segue o padrão."
  },

  dialogo: [
    { who:"A", en:"What time do you go to the gym?", pt:"Que horas você vai para a academia?" },
    { who:"B", en:"I go to the gym at 1, right after lunch.", pt:"Vou à academia à 1, logo depois do almoço." },
    { who:"A", en:"Nice, I usually hit the gym in the morning.", pt:"Legal, eu costumo malhar de manhã." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete com o artigo:", before:"I go to", after:"gym.", resposta:"the" },
    { tipo:"completar", q:"Complete a 3ª pessoa (irregular):", before:"He", after:"to the gym.", resposta:"goes", wide:true, dica:"go vira ___ no he/she/it." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["the","I","gym","go","to"], resposta:"I go to the gym." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela vai para a academia à 1.", resposta:"She goes to the gym at 1." },
    { tipo:"transformar", q:"Transforme", base:"I go to the gym at 1 p.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't go to the gym at 1 p.m." },
      { tag:"?", tagType:"bad", en:"Do you go to the gym at 1 p.m.?" },
      { tag:"passado", en:"I went to the gym at 1 p.m." },
      { tag:"futuro", en:"I will go to the gym at 1 p.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com go to + lugar + horário.", exemplo:"I go to the office at 9 a.m." }
  ],

  flashcards: [
    { pt:"Vou malhar à 1.", en:"I hit the gym at 1." },
    { pt:"Ele vai para a academia à 1.", en:"He goes to the gym at 1." }
  ],

  conexao:'Abre o <strong>Capítulo 3 — The Gym</strong>. Reencontra o <span class="en" data-say="at">at</span> + horário (Lição 1), agora com <span class="en" data-say="go">go</span> e o irregular <span class="en" data-say="went">went</span>. Esse <span class="en" data-say="go">go</span> volta já em <span class="en" data-say="go back home">go back home</span> (Lição 21).',

  revisao: [
    "<strong>go to the gym</strong> (com the); <strong>go to work</strong> / <strong>go home</strong> (sem).",
    "3ª pessoa: go → <strong>goes</strong> (-es).",
    "Passado irregular: go → <strong>went</strong>.",
    "<strong>p.m.</strong> = depois do meio-dia (1 p.m. = 13h).",
    "Naturais: <strong>hit the gym</strong>, <strong>work out</strong>."
  ]
});
