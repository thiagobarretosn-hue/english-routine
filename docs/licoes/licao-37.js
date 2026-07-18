/* Lição 37 — I have dinner with my mom and my sister.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:37,
    tituloEn:"I have dinner with my mom and my sister.", tituloPt:"Eu janto com minha mãe e minha irmã." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 37",
    en:"I have dinner with my mom and my sister.", pt:"Eu janto com minha mãe e minha irmã." },

  naturalLiteral: {
    natural:"I have dinner with my mom and my sister.",
    literal:"Eu tenho jantar com minha mãe e minha irmã.",
    nota:'<span class="en" data-say="with">with</span> + pessoas (o mesmo da Lição 26). E vocabulário de família: <span class="en" data-say="mom">mom</span> (mãe, casual) e <span class="en" data-say="sister">sister</span> (irmã).'
  },

  estrutura: {
    linhas: [
      { palavra:"I have dinner", classe:"verbo + refeição", funcao:"a ação (jantar)", traducao:"eu janto", hl:true },
      { palavra:"with", classe:"preposição", funcao:"com quem", traducao:"com", hl:true },
      { palavra:"my mom", classe:"possessivo + substantivo", funcao:"pessoa 1", traducao:"minha mãe" },
      { palavra:"and my sister", classe:"and + pessoa", funcao:"pessoa 2", traducao:"e minha irmã" }
    ],
    nota:'Repare o <span class="en" data-say="my">my</span> repetido: <span class="en" data-say="my mom and my sister">my mom and my sister</span>. Em inglês é comum repetir o possessivo em cada pessoa.'
  },

  molde: {
    intro:"O molde de fazer algo acompanhado:",
    formula:"[ação] with + [pessoa(s)]",
    exemplos: [
      { en:"I live with my family.", pt:"Moro com minha família." },
      { en:"I talk with my dad.", pt:"Converso com meu pai." },
      { en:"I travel with my brother.", pt:"Viajo com meu irmão." }
    ],
    nota:'Família: <span class="en" data-say="mom">mom</span> (mãe), <span class="en" data-say="dad">dad</span> (pai), <span class="en" data-say="sister">sister</span> (irmã), <span class="en" data-say="brother">brother</span> (irmão), <span class="en" data-say="parents">parents</span> (pais), <span class="en" data-say="family">family</span> (família).'
  },

  conjugacao: {
    verbo: { base:"have dinner", past:"had dinner", irregular:true, ptPast:"eu jantei", ptFut:"eu vou jantar" },
    nota:'have → has (Lição 8).',
    linhas: [
      { p:"I", en:"I have dinner with my mom", say:"I have dinner with my mom.", pt:"eu janto com minha mãe" },
      { p:"you", en:"you have dinner with your mom", say:"You have dinner with your mom.", pt:"você janta com sua mãe" },
      { p:"we", en:"we have dinner with our family", say:"We have dinner with our family.", pt:"nós jantamos com nossa família" },
      { p:"they", en:"they have dinner with their family", say:"They have dinner with their family.", pt:"eles jantam com a família deles" },
      { p:"he", en:"he <strong>has</strong> dinner with his mom", say:"He has dinner with his mom.", pt:"ele janta com a mãe dele", hl:true },
      { p:"she", en:"she <strong>has</strong> dinner with her mom", say:"She has dinner with her mom.", pt:"ela janta com a mãe dela", hl:true },
      { p:"it", en:"it <strong>has</strong>", say:"It has.", pt:"(coisa) tem", hl:true }
    ]
  },

  formas: {
    intro:'Passado had (irregular).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't have dinner with my family.", pt:"Eu não janto com minha família." },
      { tag:"?", tagType:"bad", en:"Do you have dinner with your family?", pt:"Você janta com sua família?" },
      { tag:"passado", en:"I had dinner with my mom and my sister.", pt:"Jantei com minha mãe e minha irmã. (have → had)" },
      { tag:"futuro", en:"I will have dinner with my family.", pt:"Vou jantar com minha família." }
    ],
    nota:'Repare o possessivo mudando com a pessoa: <span class="en" data-say="his mom">his mom</span> (a mãe dele), <span class="en" data-say="her mom">her mom</span> (a mãe dela), <span class="en" data-say="their family">their family</span> (a família deles).'
  },

  speakNaturally: {
    intro:"Formas naturais de falar do jantar em família:",
    linhas: [
      { en:"I have dinner with my family.", pt:"Janto com minha família." },
      { en:"I eat with my mom and sister.", pt:"Como com minha mãe e irmã." },
      { en:"We have dinner together.", pt:"Jantamos juntos." },
      { en:"We have family dinners.", pt:"Fazemos jantares em família." },
      { en:"Dinner is family time.", pt:"O jantar é o momento da família." }
    ],
    nota:'<span class="en" data-say="together">together</span> = juntos; <span class="en" data-say="family time">family time</span> = tempo em família. Jantar em família é muito valorizado na cultura americana também.'
  },

  expressoes: [
    { en:"have dinner with", pt:"jantar com" },
    { en:"my family", pt:"minha família" },
    { en:"eat together", pt:"comer juntos" },
    { en:"family time", pt:"tempo em família" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"mom", ipa:"/mɒm/", soa:"“mãm”", sentido:"mãe (casual)" },
      { palavra:"sister", ipa:"/ˈsɪstər/", soa:"“SÍS-ter”", sentido:"irmã" },
      { palavra:"family", ipa:"/ˈfæmɪli/", soa:"“FÉ-mi-li”", sentido:"família" }
    ],
    fraseSoa:"ai rév DÍ-ner uith mai mãm end mai SÍS-ter",
    fraseIpa:"/aɪ hæv ˈdɪnər wɪð maɪ mɒm ænd maɪ ˈsɪstər/",
    notaPron:'<span class="en" data-say="family">family</span> tem 3 sílabas: “FÉ-mi-li”, com o /æ/ (é aberto) no começo. Não é “fa-MÍ-lia”.',
    cultura:'<span class="en" data-say="mom">mom</span> (EUA) e <span class="en" data-say="mum">mum</span> (Reino Unido) = mãe, no dia a dia. <span class="en" data-say="mother">mother</span> é mais formal. O mesmo vale para <span class="en" data-say="dad">dad</span> / <span class="en" data-say="father">father</span>.'
  },

  erros: [
    { tipo:"bad", texto:"with my mom and sister.", nota:"Natural repetir o possessivo: with my mom and <strong>my</strong> sister." },
    { tipo:"bad", texto:"family pronunciado “fa-MÍ-lia”.", nota:"É <strong>FÉ-mi-li</strong> (3 sílabas, força no começo)." },
    { tipo:"bad", texto:"my moms (uma mãe).", nota:"Uma mãe = <strong>my mom</strong> (singular)." },
    { tipo:"bad", texto:"He have dinner with his mom.", nota:"3ª pessoa: He <strong>has</strong> dinner." }
  ],

  dica: {
    texto:'Guarde o vocabulário de família. Toque e ouça cada um:',
    chips:["my mom","my dad","my sister","my brother"],
    nota:"mom/dad, sister/brother, parents (pais), family. E with + pessoa para dizer “com quem”."
  },

  dialogo: [
    { who:"A", en:"Do you eat alone?", pt:"Você come sozinho?" },
    { who:"B", en:"No, I have dinner with my mom and my sister.", pt:"Não, janto com minha mãe e minha irmã." },
    { who:"A", en:"That's nice, family dinners.", pt:"Que legal, jantar em família." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (com quem):", before:"I have dinner", after:"my mom.", resposta:"with" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"dinner with her sister.", resposta:"has", wide:true, dica:"have vira ___." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["my","I","with","dinner","have","mom"], resposta:"I have dinner with my mom." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela janta com a mãe dela.", resposta:"She has dinner with her mom." },
    { tipo:"transformar", q:"Transforme", base:"I have dinner with my family.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't have dinner with my family." },
      { tag:"?", tagType:"bad", en:"Do you have dinner with your family?" },
      { tag:"passado", en:"I had dinner with my family." },
      { tag:"futuro", en:"I will have dinner with my family." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com with + membro da família.", exemplo:"I watch TV with my brother." }
  ],

  flashcards: [
    { pt:"Janto com minha família.", en:"I have dinner with my family." },
    { pt:"Ela janta com a mãe dela.", en:"She has dinner with her mom." }
  ],

  conexao:'Junta o <span class="en" data-say="have dinner">have dinner</span> (Lição 34) com o <span class="en" data-say="with">with</span> + pessoas (Lição 26), agora aplicado à família. Os possessivos (my/his/her/their) que você viu lá atrás voltam aqui com força.',

  revisao: [
    "<strong>with</strong> + pessoas: with my mom and my sister.",
    "Natural repetir o possessivo: my mom and <strong>my</strong> sister.",
    "Família: <strong>mom/dad, sister/brother, parents, family</strong>.",
    "<strong>mom</strong> (EUA) / <strong>mum</strong> (UK) / mother (formal).",
    "<strong>family</strong> = “FÉ-mi-li”."
  ]
});
