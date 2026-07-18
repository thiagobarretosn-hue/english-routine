/* Lição 44 — I still watch a movie or series after lying down.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:44,
    tituloEn:"I still watch a movie or series after lying down.", tituloPt:"Ainda assisto um filme ou série depois de deitar." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 44",
    en:"I still watch a movie or series after lying down.", pt:"Ainda assisto um filme ou série depois de deitar." },

  naturalLiteral: {
    natural:"I still watch a movie or series after lying down.",
    literal:"Eu ainda assisto um filme ou série depois de deitando.",
    nota:'Duas novidades: <span class="en" data-say="still">still</span> = ainda (a ação continua acontecendo); e <span class="en" data-say="after lying down">after lying down</span> = depois de deitar — aqui o <span class="en" data-say="after">after</span> vem com um verbo em <strong>-ing</strong>.'
  },

  estrutura: {
    linhas: [
      { palavra:"I still watch", classe:"sujeito + still + verbo", funcao:"ainda assisto", traducao:"ainda assisto", hl:true },
      { palavra:"a movie or series", classe:"objeto (A or B)", funcao:"o quê", traducao:"um filme ou série" },
      { palavra:"after lying down", classe:"after + verbo-ing", funcao:"quando", traducao:"depois de deitar", hl:true }
    ],
    nota:'Terceira forma do <span class="en" data-say="after">after</span>: depois de oração (after I eat), depois de substantivo (after dinner) e agora depois de <strong>verbo-ing</strong> (after lying down). As três valem.'
  },

  molde: {
    intro:"Dois moldes: “ainda” + after com -ing.",
    formula:"still + [verbo]   /   after + [verbo]-ing",
    exemplos: [
      { en:"I still study at night.", pt:"Ainda estudo à noite." },
      { en:"after eating", pt:"depois de comer" },
      { en:"after working out", pt:"depois de treinar" }
    ],
    nota:'<span class="en" data-say="still">still</span> vem <strong>antes</strong> do verbo principal (I still watch), como os advérbios de frequência. E <span class="en" data-say="lie down">lie down</span> → <span class="en" data-say="lying down">lying down</span> = deitar-se.'
  },

  conjugacao: {
    nota:'watch → he watches (-es); still fica antes do verbo.',
    linhas: [
      { p:"I", en:"I still watch a movie", say:"I still watch a movie.", pt:"eu ainda assisto um filme" },
      { p:"you", en:"you still watch a movie", say:"You still watch a movie.", pt:"você ainda assiste um filme" },
      { p:"we", en:"we still watch a movie", say:"We still watch a movie.", pt:"nós ainda assistimos um filme" },
      { p:"they", en:"they still watch a movie", say:"They still watch a movie.", pt:"eles ainda assistem um filme" },
      { p:"he", en:"he still watch<strong>es</strong> a movie", say:"He still watches a movie.", pt:"ele ainda assiste um filme", hl:true },
      { p:"she", en:"she still watch<strong>es</strong> a movie", say:"She still watches a movie.", pt:"ela ainda assiste um filme", hl:true },
      { p:"it", en:"it still watch<strong>es</strong>", say:"It still watches.", pt:"(coisa) ainda assiste", hl:true }
    ]
  },

  formas: {
    intro:'Passados: watch → watched; lie → <span class="en" data-say="lay">lay</span> (irregular, mas em -ing é sempre lying).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't watch anything after lying down.", pt:"Não assisto nada depois de deitar. (negativa → anything)" },
      { tag:"?", tagType:"bad", en:"Do you still watch TV in bed?", pt:"Você ainda assiste TV na cama?" },
      { tag:"passado", en:"I still watched a movie after lying down.", pt:"Ainda assisti um filme depois de deitar." },
      { tag:"futuro", en:"I will still watch a movie in bed.", pt:"Ainda vou assistir um filme na cama." }
    ],
    nota:'<span class="en" data-say="in bed">in bed</span> = na cama (deitado); <span class="en" data-say="fall asleep">fall asleep</span> = adormecer. Muita gente <span class="en" data-say="watch until you fall asleep">watches until they fall asleep</span>.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você ainda assiste na cama:",
    linhas: [
      { en:"I still watch something in bed.", pt:"Ainda assisto algo na cama." },
      { en:"I watch a bit before sleeping.", pt:"Assisto um pouco antes de dormir." },
      { en:"Even in bed, I watch TV.", pt:"Mesmo na cama, assisto TV." },
      { en:"I watch until I fall asleep.", pt:"Assisto até pegar no sono." },
      { en:"I put on a movie in bed.", pt:"Coloco um filme na cama." }
    ],
    nota:'<span class="en" data-say="put on">put on</span> (a movie) = colocar/botar (um filme) para assistir. <span class="en" data-say="a bit">a bit</span> = um pouco.'
  },

  expressoes: [
    { en:"lie down", pt:"deitar-se" },
    { en:"in bed", pt:"na cama" },
    { en:"fall asleep", pt:"adormecer / pegar no sono" },
    { en:"put on a movie", pt:"colocar um filme" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"still", ipa:"/stɪl/", soa:"“stíl”", sentido:"ainda" },
      { palavra:"lying down", ipa:"/ˈlaɪɪŋ daʊn/", soa:"“LÁI-ing dáun”", sentido:"deitando(-se)" },
      { palavra:"movie", ipa:"/ˈmuːvi/", soa:"“MÚu-vi”", sentido:"filme" }
    ],
    fraseSoa:"ai stíl uótch â MÚu-vi or SÍ-riz áfter LÁI-ing dáun",
    fraseIpa:"/aɪ stɪl wɒtʃ ə ˈmuːvi ɔːr ˈsɪəriːz ˈæftər ˈlaɪɪŋ daʊn/",
    notaPron:'<span class="en" data-say="lying">lying</span> soa “LÁI-ing”, com o ditongo “ái”. O verbo é <span class="en" data-say="lie down">lie down</span> (deitar-se), que no -ing vira <strong>lying</strong>.',
    cultura:'Cuidado com o par confuso: <span class="en" data-say="lie">lie</span> (deitar-se, você mesmo) × <span class="en" data-say="lay">lay</span> (deitar/pôr algo). Muitos nativos até confundem, mas <span class="en" data-say="lie down">lie down</span> é o certo para “se deitar”.'
  },

  erros: [
    { tipo:"bad", texto:"after lie down.", nota:"Depois de after + verbo, use -ing: <strong>after lying down</strong>." },
    { tipo:"bad", texto:"I watch still a movie.", nota:"<strong>still</strong> vem antes do verbo: I still watch." },
    { tipo:"bad", texto:"He still watch.", nota:"3ª pessoa: He still watch<strong>es</strong>." },
    { tipo:"bad", texto:"a serie.", nota:"É <strong>series</strong> (Lição 40)." }
  ],

  dica: {
    texto:'<strong>still</strong> = ainda (antes do verbo). E o after ganha uma 3ª forma: after + -ing. Toque e ouça:',
    chips:["still watch","after lying down","after eating","in bed"],
    nota:"still antes do verbo. after + oração / substantivo / verbo-ing — as três formas."
  },

  dialogo: [
    { who:"A", en:"Do you sleep right after dinner?", pt:"Você dorme logo depois do jantar?" },
    { who:"B", en:"No, I still watch a movie or series after lying down.", pt:"Não, ainda assisto um filme ou série depois de deitar." },
    { who:"A", en:"Until you fall asleep?", pt:"Até pegar no sono?" },
    { who:"B", en:"Pretty much.", pt:"Praticamente." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (ainda, antes do verbo):", before:"I", after:"watch a movie.", resposta:"still" },
    { tipo:"completar", q:"Complete (after + verbo-ing):", before:"after", after:"down.", resposta:"lying", wide:true, dica:"lie down no -ing." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["watch","I","movie","still","a"], resposta:"I still watch a movie." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela ainda assiste um filme na cama.", resposta:"She still watches a movie in bed." },
    { tipo:"transformar", q:"Transforme", base:"I still watch a movie after lying down.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't watch a movie after lying down." },
      { tag:"?", tagType:"bad", en:"Do you still watch a movie after lying down?" },
      { tag:"passado", en:"I still watched a movie after lying down." },
      { tag:"futuro", en:"I will still watch a movie after lying down." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com after + verbo-ing.", exemplo:"I relax after eating." }
  ],

  flashcards: [
    { pt:"Ainda assisto algo na cama.", en:"I still watch something in bed." },
    { pt:"Assisto até pegar no sono.", en:"I watch until I fall asleep." }
  ],

  conexao:'Junta o <span class="en" data-say="watch">watch</span> (L39–40), o <span class="en" data-say="or">or</span> (L35) e o <span class="en" data-say="series">series</span> (L40), e completa as <strong>três formas do after</strong> (oração, substantivo, verbo-ing). Você está a duas lições de fechar o dia — e o livro.',

  revisao: [
    "<strong>still</strong> = ainda (vem antes do verbo).",
    "<strong>after</strong> + verbo-ing (after lying down) — a 3ª forma.",
    "<strong>lie down</strong> → <strong>lying down</strong> (deitar-se).",
    "<strong>fall asleep</strong> = adormecer; <strong>in bed</strong> = na cama.",
    "<strong>put on</strong> a movie = colocar um filme."
  ]
});
