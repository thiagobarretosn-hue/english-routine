/* Lição 24 — I usually have rice, beans, and chicken.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:4, capituloNome:"Lunch & Afternoon", licao:24,
    tituloEn:"I usually have rice, beans, and chicken.", tituloPt:"Eu normalmente almoço arroz, feijão e frango." },

  hero: { time:"VOLUME 1 · CAP. 4 — LUNCH & AFTERNOON · LIÇÃO 24",
    en:"I usually have rice, beans, and chicken.", pt:"Eu normalmente como arroz, feijão e frango." },

  naturalLiteral: {
    natural:"I usually have rice, beans, and chicken.",
    literal:"Eu usualmente tenho arroz, feijões e frango.",
    nota:'O prato brasileiro clássico em inglês. Detalhe: <span class="en" data-say="rice">rice</span> (arroz) e <span class="en" data-say="chicken">chicken</span> (frango) são <strong>incontáveis</strong> (sem plural, sem “a”); <span class="en" data-say="beans">beans</span> (feijão) é sempre <strong>plural</strong>.'
  },

  estrutura: {
    linhas: [
      { palavra:"I usually have", classe:"sujeito + advérbio + verbo", funcao:"o que costumo comer", traducao:"eu normalmente como", hl:true },
      { palavra:"rice,", classe:"substantivo incontável", funcao:"item 1", traducao:"arroz," },
      { palavra:"beans,", classe:"substantivo plural", funcao:"item 2", traducao:"feijão," },
      { palavra:"and chicken", classe:"and + item incontável", funcao:"item 3 (fecha a lista)", traducao:"e frango" }
    ],
    nota:'Lista de 3 itens, como na Lição 16: vírgulas + <span class="en" data-say="and">and</span> antes do último. E o <span class="en" data-say="usually">usually</span> na posição de sempre, antes do verbo.'
  },

  molde: {
    intro:"O molde de descrever refeições:",
    formula:"I have + [comida 1], [comida 2], and [comida 3]",
    exemplos: [
      { en:"I have rice and salad.", pt:"Como arroz e salada." },
      { en:"I have chicken with vegetables.", pt:"Como frango com legumes." },
      { en:"I have meat, rice, and beans.", pt:"Como carne, arroz e feijão." }
    ],
    nota:'Vocabulário de prato: <span class="en" data-say="rice">rice</span> (arroz), <span class="en" data-say="beans">beans</span> (feijão), <span class="en" data-say="chicken">chicken</span> (frango), <span class="en" data-say="meat">meat</span> (carne), <span class="en" data-say="salad">salad</span> (salada), <span class="en" data-say="vegetables">vegetables</span> (legumes).'
  },

  conjugacao: {
    nota:'have → has (Lição 8). usually antes do verbo.',
    linhas: [
      { p:"I", en:"I usually have rice", say:"I usually have rice and beans.", pt:"eu normalmente como arroz" },
      { p:"you", en:"you usually have rice", say:"You usually have rice and beans.", pt:"você normalmente come arroz" },
      { p:"we", en:"we usually have rice", say:"We usually have rice and beans.", pt:"nós normalmente comemos arroz" },
      { p:"they", en:"they usually have rice", say:"They usually have rice and beans.", pt:"eles normalmente comem arroz" },
      { p:"he", en:"he usually <strong>has</strong> rice", say:"He usually has rice and beans.", pt:"ele normalmente come arroz", hl:true },
      { p:"she", en:"she usually <strong>has</strong> rice", say:"She usually has rice and beans.", pt:"ela normalmente come arroz", hl:true },
      { p:"it", en:"it usually <strong>has</strong>", say:"It usually has.", pt:"(coisa) normalmente tem", hl:true }
    ]
  },

  formas: {
    intro:'Passado had. Na negativa, lembre do <span class="en" data-say="don\'t usually">don\'t usually</span> (Lição 11).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't usually have chicken.", pt:"Eu normalmente não como frango." },
      { tag:"?", tagType:"bad", en:"Do you usually have rice and beans?", pt:"Você normalmente come arroz e feijão?" },
      { tag:"passado", en:"I had rice, beans, and chicken.", pt:"Comi arroz, feijão e frango. (have → had)" },
      { tag:"futuro", en:"I will have rice, beans, and chicken.", pt:"Vou comer arroz, feijão e frango." }
    ],
    nota:'Curiosidade cultural: o Thiago costuma dizer “I don\'t usually drink at lunch” (normalmente não bebo no almoço) — o <span class="en" data-say="don\'t usually">don\'t usually</span> em ação.'
  },

  speakNaturally: {
    intro:"Formas naturais de descrever seu almoço:",
    linhas: [
      { en:"I usually eat rice and beans.", pt:"Normalmente como arroz e feijão." },
      { en:"My go-to lunch is rice, beans, and chicken.", pt:"Meu almoço de sempre é arroz, feijão e frango." },
      { en:"I have a typical Brazilian lunch.", pt:"Tenho um almoço tipicamente brasileiro." },
      { en:"I always have chicken with rice.", pt:"Sempre como frango com arroz." },
      { en:"For lunch, it's usually rice and beans.", pt:"No almoço, geralmente é arroz e feijão." }
    ],
    nota:'<span class="en" data-say="rice and beans">rice and beans</span> é reconhecido no mundo todo como comida brasileira — um ótimo assunto para puxar conversa sobre a sua cultura.'
  },

  expressoes: [
    { en:"rice and beans", pt:"arroz e feijão" },
    { en:"a home-cooked meal", pt:"uma comida caseira" },
    { en:"a plate of food", pt:"um prato de comida" },
    { en:"have lunch", pt:"almoçar" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"rice", ipa:"/raɪs/", soa:"“ráis”", sentido:"arroz (incontável)" },
      { palavra:"beans", ipa:"/biːnz/", soa:"“bíinz”", sentido:"feijão (plural)" },
      { palavra:"chicken", ipa:"/ˈtʃɪkɪn/", soa:"“TCHÍ-kin”", sentido:"frango" }
    ],
    fraseSoa:"ai IÚ-ju-a-li rév ráis, bíinz, end TCHÍ-kin",
    fraseIpa:"/aɪ ˈjuːʒuəli hæv raɪs biːnz ænd ˈtʃɪkɪn/",
    notaPron:'<span class="en" data-say="chicken">chicken</span> tem o “tch” (/tʃ/) e um “i” curto: “TCHÍ-kin”. Cuidado para não falar “tchí-KÊN”.',
    cultura:'Diferença importante: <span class="en" data-say="chicken">chicken</span> (sem artigo) = frango, a carne; <span class="en" data-say="a chicken">a chicken</span> (com “a”) = uma galinha viva. Você <em>eats chicken</em>, não “a chicken”.'
  },

  erros: [
    { tipo:"bad", texto:"I have rices.", nota:"<strong>rice</strong> é incontável — sem plural." },
    { tipo:"bad", texto:"I eat a chicken.", nota:"“a chicken” é uma galinha viva; a carne é só <strong>chicken</strong>." },
    { tipo:"bad", texto:"I have bean.", nota:"Feijão é sempre <strong>beans</strong> (plural)." },
    { tipo:"bad", texto:"rice beans and chicken (sem vírgulas).", nota:"Lista de 3: <strong>rice, beans, and chicken</strong>." }
  ],

  dica: {
    texto:'Grave o que é incontável (sem plural) e o que é plural. Toque e ouça:',
    chips:["rice","beans","chicken","meat"],
    nota:"rice, chicken e meat = incontáveis (sem plural). beans = sempre plural. Lista de 3 = vírgulas + and."
  },

  dialogo: [
    { who:"A", en:"What do you usually have for lunch?", pt:"O que você normalmente almoça?" },
    { who:"B", en:"I usually have rice, beans, and chicken.", pt:"Normalmente como arroz, feijão e frango." },
    { who:"A", en:"Classic Brazilian lunch!", pt:"Almoço brasileiro clássico!" }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (incontável, sem plural):", before:"I have", after:"and beans.", resposta:"rice" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She usually", after:"chicken.", resposta:"has", wide:true, dica:"have vira ___." },
    { tipo:"reorganizar", q:"Reorganize as peças (com vírgulas mentais):", pecas:["rice,","chicken","beans,","and","have","I"], resposta:"I have rice, beans, and chicken." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele normalmente come arroz e feijão.", resposta:"He usually has rice and beans." },
    { tipo:"transformar", q:"Transforme", base:"I have rice, beans, and chicken.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't have rice, beans, and chicken." },
      { tag:"?", tagType:"bad", en:"Do you have rice, beans, and chicken?" },
      { tag:"passado", en:"I had rice, beans, and chicken." },
      { tag:"futuro", en:"I will have rice, beans, and chicken." }
    ]},
    { tipo:"escrever", q:"Descreva seu almoço: “For lunch I usually have ___.”", exemplo:"For lunch I usually have chicken and salad." }
  ],

  flashcards: [
    { pt:"Normalmente como arroz, feijão e frango.", en:"I usually have rice, beans, and chicken." },
    { pt:"Normalmente não bebo no almoço.", en:"I don't usually drink at lunch." }
  ],

  conexao:'Reúne o <span class="en" data-say="usually">usually</span> (Lição 11), a lista de 3 itens (Lição 16) e o <span class="en" data-say="have">have</span> das refeições (Lição 8) — tudo aplicado ao seu almoço real. Vocabulário de comida que volta no jantar (Capítulo 6).',

  revisao: [
    "<strong>rice</strong> e <strong>chicken</strong> = incontáveis (sem plural).",
    "<strong>beans</strong> = sempre plural.",
    "<strong>chicken</strong> (carne) × <strong>a chicken</strong> (galinha viva).",
    "Lista de 3: <strong>rice, beans, and chicken</strong>.",
    "<strong>usually</strong> antes do verbo; <strong>don't usually</strong> na negativa."
  ]
});
