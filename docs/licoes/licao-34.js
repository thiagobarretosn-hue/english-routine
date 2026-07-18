/* Lição 34 — I have dinner really late every day.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:34,
    tituloEn:"I have dinner really late every day.", tituloPt:"Eu janto bem tarde todos os dias." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 34",
    en:"I have dinner really late every day.", pt:"Eu janto bem tarde todos os dias." },

  naturalLiteral: {
    natural:"I have dinner really late every day.",
    literal:"Eu tenho jantar realmente tarde todo dia.",
    nota:'<span class="en" data-say="have dinner">have dinner</span> = jantar (o mesmo <span class="en" data-say="have">have</span> das refeições, sem artigo). <span class="en" data-say="really">really</span> = bem/muito (intensifica); <span class="en" data-say="every day">every day</span> = todo dia.'
  },

  estrutura: {
    linhas: [
      { palavra:"I have dinner", classe:"verbo + refeição", funcao:"a ação (jantar)", traducao:"eu janto", hl:true },
      { palavra:"really late", classe:"advérbio + advérbio", funcao:"como (bem tarde)", traducao:"bem tarde", hl:true },
      { palavra:"every day", classe:"expressão de frequência", funcao:"quando", traducao:"todos os dias" }
    ],
    nota:'<span class="en" data-say="really">really</span> deixa o que vem depois mais forte: really late (bem tarde), really good (muito bom), really tired (bem cansado).'
  },

  molde: {
    intro:"Dois moldes: intensificar + frequência.",
    formula:"really + [adjetivo/advérbio]   /   every + day/week/morning",
    exemplos: [
      { en:"I'm really tired.", pt:"Estou bem cansado." },
      { en:"It's really good.", pt:"É muito bom." },
      { en:"I train every morning.", pt:"Treino toda manhã." }
    ],
    nota:'⚠️ <span class="en" data-say="every day">every day</span> (duas palavras) = todo dia (frequência). <span class="en" data-say="everyday">everyday</span> (uma palavra) = cotidiano (adjetivo: “everyday life”). Cuidado para não trocar.'
  },

  conjugacao: {
    verbo: { base:"have dinner", past:"had dinner", irregular:true, ptPast:"eu jantei", ptFut:"eu vou jantar" },
    nota:'have → has (Lição 8).',
    linhas: [
      { p:"I", en:"I have dinner late", say:"I have dinner really late.", pt:"eu janto tarde" },
      { p:"you", en:"you have dinner late", say:"You have dinner really late.", pt:"você janta tarde" },
      { p:"we", en:"we have dinner late", say:"We have dinner really late.", pt:"nós jantamos tarde" },
      { p:"they", en:"they have dinner late", say:"They have dinner really late.", pt:"eles jantam tarde" },
      { p:"he", en:"he <strong>has</strong> dinner late", say:"He has dinner really late.", pt:"ele janta tarde", hl:true },
      { p:"she", en:"she <strong>has</strong> dinner late", say:"She has dinner really late.", pt:"ela janta tarde", hl:true },
      { p:"it", en:"it <strong>has</strong>", say:"It has.", pt:"(coisa) tem", hl:true }
    ]
  },

  formas: {
    intro:'Passado had (irregular).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't have dinner late.", pt:"Eu não janto tarde." },
      { tag:"?", tagType:"bad", en:"Do you have dinner late?", pt:"Você janta tarde?" },
      { tag:"passado", en:"I had dinner really late.", pt:"Jantei bem tarde. (have → had)" },
      { tag:"futuro", en:"I will have dinner really late.", pt:"Vou jantar bem tarde." }
    ],
    nota:'<span class="en" data-say="late">late</span> é o oposto de <span class="en" data-say="early">early</span> (cedo). Você pode ter dinner <span class="en" data-say="early">early</span> ou <span class="en" data-say="late">late</span>.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você janta tarde:",
    linhas: [
      { en:"I have a late dinner.", pt:"Faço um jantar tardio." },
      { en:"I eat dinner really late.", pt:"Janto bem tarde." },
      { en:"I always eat late.", pt:"Sempre como tarde." },
      { en:"Dinner is late for me.", pt:"Pra mim, o jantar é tarde." },
      { en:"I have dinner around 11.", pt:"Janto por volta das 11." }
    ],
    nota:'<span class="en" data-say="a late dinner">a late dinner</span> (adjetivo antes) ou <span class="en" data-say="eat late">eat late</span> (advérbio depois) — as duas formas dizem a mesma ideia.'
  },

  expressoes: [
    { en:"have dinner", pt:"jantar" },
    { en:"a late dinner", pt:"um jantar tardio" },
    { en:"every day", pt:"todos os dias" },
    { en:"really late", pt:"bem tarde" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"dinner", ipa:"/ˈdɪnər/", soa:"“DÍ-ner”", sentido:"jantar" },
      { palavra:"late", ipa:"/leɪt/", soa:"“lêit”", sentido:"tarde" },
      { palavra:"really", ipa:"/ˈriːli/", soa:"“RÍi-li”", sentido:"muito / bem" }
    ],
    fraseSoa:"ai rév DÍ-ner RÍi-li lêit évri dei",
    fraseIpa:"/aɪ hæv ˈdɪnər ˈriːli leɪt ˈɛvri deɪ/",
    notaPron:'<span class="en" data-say="dinner">dinner</span> tem a força na 1ª sílaba (“DÍ-ner”) e um “i” curto. Não confunda com <span class="en" data-say="diner">diner</span> (“DÁI-ner”, um tipo de restaurante).',
    cultura:'Nos EUA, o jantar costuma ser cedo (18h–19h). Jantar às 22h ou 23h, como no Brasil, soa <span class="en" data-say="really late">really late</span> para um americano — um bom assunto de conversa cultural.'
  },

  erros: [
    { tipo:"bad", texto:"every days.", nota:"É <strong>every day</strong> — “day” no singular." },
    { tipo:"bad", texto:"I have dinner everyday.", nota:"Frequência = <strong>every day</strong> (2 palavras). “everyday” (1 palavra) é adjetivo." },
    { tipo:"bad", texto:"He have dinner late.", nota:"3ª pessoa: He <strong>has</strong> dinner late." },
    { tipo:"bad", texto:"I have the dinner.", nota:"Refeição sem artigo: <strong>have dinner</strong>." }
  ],

  dica: {
    texto:'<strong>really</strong> intensifica; a família <strong>every</strong> marca frequência. Toque e ouça:',
    chips:["really late","really good","every day","every night"],
    nota:"really + adjetivo/advérbio. every day (2 palavras) = frequência; everyday (1) = adjetivo."
  },

  dialogo: [
    { who:"A", en:"What time do you have dinner?", pt:"Que horas você janta?" },
    { who:"B", en:"I have dinner really late, like 11 p.m.", pt:"Janto bem tarde, tipo 23h." },
    { who:"A", en:"Wow, that's late! I eat at 7.", pt:"Nossa, que tarde! Eu como às 7." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (intensificador):", before:"I have dinner", after:"late.", resposta:"really" },
    { tipo:"completar", q:"Complete a frequência (2 palavras → 2ª palavra):", before:"I have dinner late every", after:".", resposta:"day" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["late","I","dinner","really","have"], resposta:"I have dinner really late." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela janta bem tarde.", resposta:"She has dinner really late." },
    { tipo:"transformar", q:"Transforme", base:"I have dinner really late.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't have dinner really late." },
      { tag:"?", tagType:"bad", en:"Do you have dinner really late?" },
      { tag:"passado", en:"I had dinner really late." },
      { tag:"futuro", en:"I will have dinner really late." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com really + adjetivo.", exemplo:"I'm really tired after work." }
  ],

  flashcards: [
    { pt:"Faço um jantar tardio.", en:"I have a late dinner." },
    { pt:"Sempre como tarde.", en:"I always eat late." }
  ],

  conexao:'Abre o <strong>Capítulo 6 — Dinner & Night</strong>. Completa o trio das refeições com <span class="en" data-say="have dinner">have dinner</span> (você já tinha have breakfast e have lunch). O <span class="en" data-say="every day">every day</span> aqui volta na última lição do livro (“I go to sleep late every day”).',

  revisao: [
    "<strong>have dinner</strong> = jantar (sem artigo).",
    "<strong>really</strong> + adjetivo/advérbio = intensifica (really late).",
    "<strong>every day</strong> (2 palavras, frequência) × <strong>everyday</strong> (1, adjetivo).",
    "<strong>late</strong> (tarde) × <strong>early</strong> (cedo).",
    "<strong>dinner</strong> (jantar) × <strong>diner</strong> (restaurante)."
  ]
});
