/* Lição 36 — I cook something different every day.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:36,
    tituloEn:"I cook something different every day.", tituloPt:"Eu cozinho algo diferente todos os dias." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 36",
    en:"I cook something different every day.", pt:"Eu cozinho algo diferente todos os dias." },

  naturalLiteral: {
    natural:"I cook something different every day.",
    literal:"Eu cozinho algo diferente todo dia.",
    nota:'A pegadinha aqui é a ordem: com <span class="en" data-say="something">something</span>, o adjetivo vem <strong>depois</strong> — <span class="en" data-say="something different">something different</span>, não “different something”. É o contrário do normal.'
  },

  estrutura: {
    linhas: [
      { palavra:"I cook", classe:"sujeito + verbo", funcao:"a ação", traducao:"eu cozinho", hl:true },
      { palavra:"something", classe:"pronome indefinido", funcao:"o objeto (algo)", traducao:"algo" },
      { palavra:"different", classe:"adjetivo", funcao:"descreve (vem depois!)", traducao:"diferente", hl:true },
      { palavra:"every day", classe:"expressão de frequência", funcao:"quando", traducao:"todos os dias" }
    ],
    nota:'Normalmente o adjetivo vem antes (a <strong>different</strong> meal). Mas com <span class="en" data-say="something">something</span>, <span class="en" data-say="anything">anything</span>, <span class="en" data-say="nothing">nothing</span>, ele vem <strong>depois</strong>: something different, nothing new.'
  },

  molde: {
    intro:"A regra do adjetivo depois de -thing:",
    formula:"something / anything / nothing + [adjetivo]",
    exemplos: [
      { en:"something new", pt:"algo novo" },
      { en:"nothing special", pt:"nada de especial" },
      { en:"anything good", pt:"qualquer coisa boa" }
    ],
    nota:'<span class="en" data-say="something">something</span> (afirmativa), <span class="en" data-say="anything">anything</span> (pergunta/negativa), <span class="en" data-say="nothing">nothing</span> (nada). Todos juntam com o adjetivo <strong>depois</strong>.'
  },

  conjugacao: {
    verbo: { base:"cook something new", past:"cooked something new", irregular:false, ptPast:"eu cozinhei algo novo", ptFut:"eu vou cozinhar algo novo" },
    nota:'cook → he cooks.',
    linhas: [
      { p:"I", en:"I cook something new", say:"I cook something different.", pt:"eu cozinho algo novo" },
      { p:"you", en:"you cook something new", say:"You cook something different.", pt:"você cozinha algo novo" },
      { p:"we", en:"we cook something new", say:"We cook something different.", pt:"nós cozinhamos algo novo" },
      { p:"they", en:"they cook something new", say:"They cook something different.", pt:"eles cozinham algo novo" },
      { p:"he", en:"he cook<strong>s</strong> something new", say:"He cooks something different.", pt:"ele cozinha algo novo", hl:true },
      { p:"she", en:"she cook<strong>s</strong> something new", say:"She cooks something different.", pt:"ela cozinha algo novo", hl:true },
      { p:"it", en:"it cook<strong>s</strong>", say:"It cooks.", pt:"(coisa) cozinha", hl:true }
    ]
  },

  formas: {
    intro:'Passado cooked (regular).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't cook anything special.", pt:"Eu não cozinho nada de especial. (negativa → anything)" },
      { tag:"?", tagType:"bad", en:"Do you cook something different?", pt:"Você cozinha algo diferente?" },
      { tag:"passado", en:"I cooked something different.", pt:"Cozinhei algo diferente. (cook → cooked)" },
      { tag:"futuro", en:"I will cook something different.", pt:"Vou cozinhar algo diferente." }
    ],
    nota:'Na negativa, <span class="en" data-say="something">something</span> costuma virar <span class="en" data-say="anything">anything</span>: I don\'t cook <strong>anything</strong> special.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você varia:",
    linhas: [
      { en:"I cook something new every day.", pt:"Cozinho algo novo todo dia." },
      { en:"I make a different meal each day.", pt:"Faço uma refeição diferente cada dia." },
      { en:"I like to switch it up.", pt:"Gosto de variar." },
      { en:"I never cook the same thing.", pt:"Nunca cozinho a mesma coisa." },
      { en:"I try new recipes.", pt:"Experimento receitas novas." }
    ],
    nota:'<span class="en" data-say="switch it up">switch it up</span> = variar, mudar. <span class="en" data-say="recipe">recipe</span> = receita (cuidado: soa “RÉ-si-pi”, não “re-SÁIP”).'
  },

  expressoes: [
    { en:"something different", pt:"algo diferente" },
    { en:"something new", pt:"algo novo" },
    { en:"nothing special", pt:"nada de especial" },
    { en:"try a recipe", pt:"experimentar uma receita" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"cook", ipa:"/kʊk/", soa:"“kuk”", sentido:"cozinhar" },
      { palavra:"something", ipa:"/ˈsʌmθɪŋ/", soa:"“SÂM-thing”", sentido:"algo" },
      { palavra:"different", ipa:"/ˈdɪfərənt/", soa:"“DÍ-fe-rent”", sentido:"diferente" }
    ],
    fraseSoa:"ai kuk SÂM-thing DÍ-fe-rent évri dei",
    fraseIpa:"/aɪ kʊk ˈsʌmθɪŋ ˈdɪfərənt ˈɛvri deɪ/",
    notaPron:'<span class="en" data-say="something">something</span> tem o som /θ/ (th) no meio: “SÂM-thing”. E o <strong>some</strong> soa “sâm” (o mesmo /ʌ/ de up).',
    cultura:'Perguntas do tipo <span class="en" data-say="Do you want something to eat?">“Do you want something to eat?”</span> (quer algo pra comer?) usam essa mesma estrutura: something + to + verbo.'
  },

  erros: [
    { tipo:"bad", texto:"I cook different something.", nota:"O adjetivo vem depois: <strong>something different</strong>." },
    { tipo:"bad", texto:"some thing.", nota:"É uma palavra só: <strong>something</strong>." },
    { tipo:"bad", texto:"I don't cook something.", nota:"Na negativa vira anything: I don't cook <strong>anything</strong>." },
    { tipo:"bad", texto:"He cook something.", nota:"3ª pessoa: He cook<strong>s</strong>." }
  ],

  dica: {
    texto:'Regra de ouro: com <strong>-thing</strong>, o adjetivo vai <strong>depois</strong>. Toque e ouça:',
    chips:["something different","something new","nothing special","anything good"],
    nota:"something/anything/nothing + adjetivo (depois). É o inverso da ordem normal."
  },

  dialogo: [
    { who:"A", en:"Do you eat the same thing every day?", pt:"Você come a mesma coisa todo dia?" },
    { who:"B", en:"No, I cook something different every day.", pt:"Não, cozinho algo diferente todo dia." },
    { who:"A", en:"Nice, you like variety.", pt:"Legal, você gosta de variedade." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (algo):", before:"I cook", after:"different.", resposta:"something" },
    { tipo:"reorganizar", q:"Coloque na ordem certa:", pecas:["different","I","something","cook"], resposta:"I cook something different." },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"something new.", resposta:"cooks", wide:true, dica:"lembra do -s." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele cozinha algo diferente todo dia.", resposta:"He cooks something different every day." },
    { tipo:"transformar", q:"Transforme", base:"I cook something different.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't cook anything different." },
      { tag:"?", tagType:"bad", en:"Do you cook something different?" },
      { tag:"passado", en:"I cooked something different." },
      { tag:"futuro", en:"I will cook something different." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com something/nothing + adjetivo.", exemplo:"I want something cold to drink." }
  ],

  flashcards: [
    { pt:"Cozinho algo novo todo dia.", en:"I cook something new every day." },
    { pt:"Nunca cozinho a mesma coisa.", en:"I never cook the same thing." }
  ],

  conexao:'Continua o <span class="en" data-say="cook">cook</span> do jantar (Lição 35) e o <span class="en" data-say="every day">every day</span> (Lição 34), com uma regra de ordem que surpreende brasileiro: adjetivo depois de <span class="en" data-say="something">something</span>.',

  revisao: [
    "Com <strong>something/anything/nothing</strong>, o adjetivo vem <strong>depois</strong>.",
    "<strong>something</strong> (afirmativa) → <strong>anything</strong> (negativa/pergunta).",
    "<strong>nothing</strong> = nada (já é negativo).",
    "É uma palavra só: something, anything, nothing.",
    "<strong>recipe</strong> = receita (“RÉ-si-pi”)."
  ]
});
