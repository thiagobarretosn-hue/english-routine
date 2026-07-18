/* Lição 42 — After dinner, I brush my teeth and take a shower.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:42,
    tituloEn:"After dinner, I brush my teeth and take a shower.", tituloPt:"Depois do jantar, escovo os dentes e tomo banho." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 42",
    en:"After dinner, I brush my teeth and take a shower.", pt:"Depois do jantar, escovo os dentes e tomo banho." },

  naturalLiteral: {
    natural:"After dinner, I brush my teeth and take a shower.",
    literal:"Depois do jantar, eu escovo meus dentes e tomo um banho.",
    nota:'Esta frase é 100% <strong>revisão</strong>: <span class="en" data-say="after dinner">after dinner</span> (after + refeição, Lição 12), <span class="en" data-say="brush my teeth">brush my teeth</span> (Lição 2) e <span class="en" data-say="take a shower">take a shower</span> (Lição 12). Você já domina cada peça.'
  },

  estrutura: {
    linhas: [
      { palavra:"After dinner,", classe:"after + substantivo", funcao:"quando", traducao:"depois do jantar", hl:true },
      { palavra:"I brush my teeth", classe:"verbo + objeto", funcao:"1ª ação", traducao:"escovo os dentes" },
      { palavra:"and take a shower", classe:"and + 2ª ação", funcao:"e tomo banho", traducao:"e tomo banho" }
    ],
    nota:'<span class="en" data-say="after dinner">after dinner</span> vem sem the (refeição em geral), igual a after breakfast e after lunch.'
  },

  molde: {
    intro:"O molde de encadear a rotina da noite:",
    formula:"After + [refeição], I + [ação] and [ação]",
    exemplos: [
      { en:"After dinner, I wash the dishes.", pt:"Depois do jantar, lavo a louça." },
      { en:"After dinner, I relax.", pt:"Depois do jantar, relaxo." },
      { en:"After dinner, I get ready for bed.", pt:"Depois do jantar, me preparo pra dormir." }
    ],
    nota:'<span class="en" data-say="wash the dishes">wash the dishes</span> = lavar a louça — um vizinho útil da sua rotina noturna.'
  },

  conjugacao: {
    nota:'brush → brushes (-es); take → takes (-s).',
    linhas: [
      { p:"I", en:"I brush and take a shower", say:"I brush my teeth and take a shower.", pt:"eu escovo e tomo banho" },
      { p:"you", en:"you brush and take a shower", say:"You brush your teeth and take a shower.", pt:"você escova e toma banho" },
      { p:"we", en:"we brush and take showers", say:"We brush our teeth and take showers.", pt:"nós escovamos e tomamos banho" },
      { p:"they", en:"they brush and take showers", say:"They brush their teeth and take showers.", pt:"eles escovam e tomam banho" },
      { p:"he", en:"he brush<strong>es</strong> and take<strong>s</strong> a shower", say:"He brushes his teeth and takes a shower.", pt:"ele escova e toma banho", hl:true },
      { p:"she", en:"she brush<strong>es</strong> and take<strong>s</strong> a shower", say:"She brushes her teeth and takes a shower.", pt:"ela escova e toma banho", hl:true },
      { p:"it", en:"it brush<strong>es</strong>", say:"It brushes.", pt:"(coisa) escova", hl:true }
    ]
  },

  formas: {
    intro:'Passados: brush → brushed (regular); take → <span class="en" data-say="took">took</span> (irregular).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"After dinner, I don't take a shower.", pt:"Depois do jantar, não tomo banho." },
      { tag:"?", tagType:"bad", en:"Do you brush your teeth after dinner?", pt:"Você escova os dentes depois do jantar?" },
      { tag:"passado", en:"After dinner, I brushed my teeth and took a shower.", pt:"Depois do jantar, escovei os dentes e tomei banho." },
      { tag:"futuro", en:"After dinner, I will take a shower.", pt:"Depois do jantar, vou tomar banho." }
    ],
    nota:'Repare como as duas ações viram passado juntas: brushed … took.'
  },

  speakNaturally: {
    intro:"Formas naturais de descrever a rotina antes de dormir:",
    linhas: [
      { en:"After dinner, I get ready for bed.", pt:"Depois do jantar, me preparo pra dormir." },
      { en:"I brush and shower before bed.", pt:"Escovo e tomo banho antes de dormir." },
      { en:"I do my nighttime routine.", pt:"Faço minha rotina noturna." },
      { en:"I freshen up after dinner.", pt:"Dou um trato depois do jantar." },
      { en:"I clean up before bed.", pt:"Me arrumo antes de dormir." }
    ],
    nota:'<span class="en" data-say="nighttime routine">nighttime routine</span> = rotina da noite; <span class="en" data-say="before bed">before bed</span> = antes de dormir. <span class="en" data-say="before">before</span> é o oposto de <span class="en" data-say="after">after</span>.'
  },

  expressoes: [
    { en:"after dinner", pt:"depois do jantar" },
    { en:"before bed", pt:"antes de dormir" },
    { en:"nighttime routine", pt:"rotina noturna" },
    { en:"wash the dishes", pt:"lavar a louça" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"after", ipa:"/ˈæftər/", soa:"“áfter”", sentido:"depois de" },
      { palavra:"dinner", ipa:"/ˈdɪnər/", soa:"“DÍ-ner”", sentido:"jantar" },
      { palavra:"teeth", ipa:"/tiːθ/", soa:"“títh”", sentido:"dentes" }
    ],
    fraseSoa:"áfter DÍ-ner, ai brâsh mai títh end têik â CHÁ-uer",
    fraseIpa:"/ˈæftər ˈdɪnər aɪ brʌʃ maɪ tiːθ ænd teɪk ə ˈʃaʊər/",
    notaPron:'Puro reforço: <span class="en" data-say="teeth">teeth</span> (“títh”, com o som /θ/), <span class="en" data-say="brush">brush</span> (“brâsh”) e <span class="en" data-say="shower">shower</span> (“CHÁ-uer”). Você já treinou todos.',
    cultura:'<span class="en" data-say="before">before</span> e <span class="en" data-say="after">after</span> são o par perfeito para descrever rotina: before bed / after dinner. Guardar os dois destrava metade das frases de sequência.'
  },

  erros: [
    { tipo:"bad", texto:"after the dinner.", nota:"Refeição sem the: <strong>after dinner</strong>." },
    { tipo:"bad", texto:"my tooths.", nota:"Plural de tooth é <strong>teeth</strong> (Lição 2)." },
    { tipo:"bad", texto:"I make a shower.", nota:"Banho é <strong>take a shower</strong>." },
    { tipo:"bad", texto:"He brush and take.", nota:"3ª pessoa: He brush<strong>es</strong> and take<strong>s</strong>." }
  ],

  dica: {
    texto:'Revisão em ação: você já sabe cada peça. Toque e sinta a sequência da noite:',
    chips:["after dinner","brush my teeth","take a shower","before bed"],
    nota:"before (antes) × after (depois) — o par que organiza qualquer rotina."
  },

  dialogo: [
    { who:"A", en:"What's your nighttime routine?", pt:"Qual é sua rotina da noite?" },
    { who:"B", en:"After dinner, I brush my teeth and take a shower.", pt:"Depois do jantar, escovo os dentes e tomo banho." },
    { who:"A", en:"Simple and effective.", pt:"Simples e eficiente." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (refeição, sem the):", before:"After", after:", I brush my teeth.", resposta:"dinner" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"his teeth after dinner.", resposta:"brushes", wide:true, dica:"-sh leva -es." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["teeth","I","my","brush"], resposta:"I brush my teeth." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Depois do jantar, ela escova os dentes.", resposta:"After dinner, she brushes her teeth." },
    { tipo:"transformar", q:"Transforme", base:"After dinner, I take a shower.", formas:[
      { tag:"neg", tagType:"bad", en:"After dinner, I don't take a shower." },
      { tag:"?", tagType:"bad", en:"Do you take a shower after dinner?" },
      { tag:"passado", en:"After dinner, I took a shower." },
      { tag:"futuro", en:"After dinner, I will take a shower." }
    ]},
    { tipo:"escrever", q:"Encadeie duas ações da sua noite com and.", exemplo:"After dinner, I wash the dishes and relax." }
  ],

  flashcards: [
    { pt:"Depois do jantar, escovo os dentes e tomo banho.", en:"After dinner, I brush my teeth and take a shower." },
    { pt:"Faço minha rotina noturna.", en:"I do my nighttime routine." }
  ],

  conexao:'Pura revisão: reúne <span class="en" data-say="after">after</span> (L12), <span class="en" data-say="brush my teeth">brush my teeth</span> (L2) e <span class="en" data-say="take a shower">take a shower</span> (L12). É a prova de que a rotina se repete e se reforça — você fecha o dia com as mesmas ações da manhã.',

  revisao: [
    "<strong>after dinner</strong> / <strong>before bed</strong> — o par da rotina.",
    "<strong>brush my teeth</strong> (teeth, plural irregular).",
    "<strong>take a shower</strong> (nunca “make”).",
    "3ª pessoa: brush<strong>es</strong> and take<strong>s</strong>.",
    "<strong>before</strong> (antes) × <strong>after</strong> (depois)."
  ]
});
