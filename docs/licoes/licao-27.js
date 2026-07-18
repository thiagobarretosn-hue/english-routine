/* Lição 27 — I work until 6 p.m.  (dado — fecha o Capítulo 4) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:4, capituloNome:"Lunch & Afternoon", licao:27,
    tituloEn:"I work until 6 p.m.", tituloPt:"Eu trabalho até às 18 horas." },

  hero: { time:"VOLUME 1 · CAP. 4 — LUNCH & AFTERNOON · LIÇÃO 27",
    en:"I work until 6 p.m.", pt:"Eu trabalho até as 18 horas (6 da tarde)." },

  naturalLiteral: {
    natural:"I work until 6 p.m.",
    literal:"Eu trabalho até as 6 da tarde.",
    nota:'<span class="en" data-say="until">until</span> = até (um ponto no tempo). Marca o momento em que a ação termina. Existe a forma curta <span class="en" data-say="till">till</span>, com o mesmo sentido.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"work", classe:"verbo", funcao:"a ação", traducao:"trabalhar", hl:true },
      { palavra:"until", classe:"preposição", funcao:"marca o fim no tempo", traducao:"até", hl:true },
      { palavra:"6 p.m.", classe:"expressão de tempo", funcao:"o horário-limite", traducao:"as 6 da tarde" }
    ],
    nota:'<span class="en" data-say="until">until</span> indica que a ação continua <strong>até</strong> aquele momento e então para. Combina lindamente com <span class="en" data-say="from">from</span>: <span class="en" data-say="from 8 until 6">from 8 until 6</span> (das 8 até as 6).'
  },

  molde: {
    intro:"O molde do tempo com until:",
    formula:"[ação] until + [horário]   /   from + X to/until + Y",
    exemplos: [
      { en:"I work from 8 until 6.", pt:"Trabalho das 8 até as 6." },
      { en:"I study until midnight.", pt:"Estudo até a meia-noite." },
      { en:"I wait until later.", pt:"Espero até mais tarde." }
    ],
    nota:'<span class="en" data-say="from">from</span> ... <span class="en" data-say="to">to</span> / <span class="en" data-say="until">until</span> ... = de ... até ... Para o intervalo inteiro, use os dois: from 8 to 6.'
  },

  conjugacao: {
    verbo: { base:"work until 6", past:"worked until 6", irregular:false, ptPast:"eu trabalhei até as 6", ptFut:"eu vou trabalhar até as 6" },
    nota:'work → he works (Lição 6).',
    linhas: [
      { p:"I", en:"I work until 6", say:"I work until 6.", pt:"eu trabalho até as 6" },
      { p:"you", en:"you work until 6", say:"You work until 6.", pt:"você trabalha até as 6" },
      { p:"we", en:"we work until 6", say:"We work until 6.", pt:"nós trabalhamos até as 6" },
      { p:"they", en:"they work until 6", say:"They work until 6.", pt:"eles trabalham até as 6" },
      { p:"he", en:"he work<strong>s</strong> until 6", say:"He works until 6.", pt:"ele trabalha até as 6", hl:true },
      { p:"she", en:"she work<strong>s</strong> until 6", say:"She works until 6.", pt:"ela trabalha até as 6", hl:true },
      { p:"it", en:"it work<strong>s</strong>", say:"It works.", pt:"(coisa) funciona", hl:true }
    ]
  },

  formas: {
    intro:'Passado worked (regular, “uârkt”).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't work until 6.", pt:"Eu não trabalho até as 6." },
      { tag:"?", tagType:"bad", en:"Do you work until 6?", pt:"Você trabalha até as 6?" },
      { tag:"passado", en:"I worked until 6.", pt:"Trabalhei até as 6. (work → worked)" },
      { tag:"futuro", en:"I will work until 6.", pt:"Vou trabalhar até as 6." }
    ],
    nota:'Não confunda <span class="en" data-say="until">until</span> (até) com <span class="en" data-say="since">since</span> (desde). “Since 8” = desde as 8; “until 6” = até as 6.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer até quando você trabalha:",
    linhas: [
      { en:"I work till 6.", pt:"Trabalho até as 6. (till = until)" },
      { en:"I'm done at 6.", pt:"Termino às 6." },
      { en:"My workday ends at 6.", pt:"Meu dia de trabalho termina às 6." },
      { en:"I clock out at 6.", pt:"Bato o ponto às 6." },
      { en:"I work a 9-to-6.", pt:"Faço um horário das 9 às 6." }
    ],
    nota:'<span class="en" data-say="9-to-5">9-to-5</span> (nine to five) é o apelido do horário comercial clássico — virou até sinônimo de “emprego tradicional”.'
  },

  expressoes: [
    { en:"until later", pt:"até mais tarde" },
    { en:"from 8 to 6", pt:"das 8 às 6" },
    { en:"work overtime", pt:"fazer hora extra" },
    { en:"call it a day", pt:"encerrar o dia" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"work", ipa:"/wɜːrk/", soa:"“uârk”", sentido:"trabalhar" },
      { palavra:"until", ipa:"/ənˈtɪl/", soa:"“ân-TÍL”", sentido:"até (tempo)" },
      { palavra:"p.m.", ipa:"/ˌpiː ˈɛm/", soa:"“pí ém”", sentido:"da tarde/noite" }
    ],
    fraseSoa:"ai uârk ân-TÍL sics pí-ém",
    fraseIpa:"/aɪ wɜːrk ənˈtɪl sɪks ˌpiː ˈɛm/",
    notaPron:'<span class="en" data-say="until">until</span> tem a força na 2ª sílaba: “ân-TÍL”. A forma curta <span class="en" data-say="till">till</span> (“tíl”) é idêntica em sentido e muito comum na fala.',
    cultura:'Cuidado com o falso vizinho: <span class="en" data-say="till">till</span> (até) parece “til”, mas não tem nada a ver com “til” de plantação. E <span class="en" data-say="by">by</span> 6 (“até as 6, no mais tardar”) é diferente de <span class="en" data-say="until">until</span> 6 (o tempo todo até as 6).'
  },

  erros: [
    { tipo:"bad", texto:"I work since 8 until 6.", nota:"Para o começo use <strong>from</strong>, não “since”: from 8 until 6." },
    { tipo:"bad", texto:"I work until to 6.", nota:"É só <strong>until 6</strong>, sem “to”." },
    { tipo:"bad", texto:"I work until 6 in the afternoon p.m.", nota:"<strong>p.m.</strong> já indica a tarde — não repita “in the afternoon”." },
    { tipo:"bad", texto:"He work until 6.", nota:"3ª pessoa: He work<strong>s</strong> until 6." }
  ],

  dica: {
    texto:'<strong>until</strong> = até (o fim no tempo). Combine com <strong>from</strong> para o intervalo todo. Toque e ouça:',
    chips:["work until 6","from 8 to 6","until later","till midnight"],
    nota:"from = começo, until/to = fim. E till é só a forma curta de until."
  },

  dialogo: [
    { who:"A", en:"How late do you work?", pt:"Até que horas você trabalha?" },
    { who:"B", en:"I work until 6, then I'm done.", pt:"Trabalho até as 6, aí termino." },
    { who:"A", en:"A solid 9-to-6. Nice.", pt:"Um belo 9 às 6. Legal." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (até, no tempo):", before:"I work", after:"6 p.m.", resposta:"until" },
    { tipo:"completar", q:"Complete o começo do intervalo:", before:"I work", after:"8 to 6.", resposta:"from" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["6","I","until","work"], resposta:"I work until 6." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele trabalha até as 6.", resposta:"He works until 6." },
    { tipo:"transformar", q:"Transforme", base:"I work until 6 p.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't work until 6 p.m." },
      { tag:"?", tagType:"bad", en:"Do you work until 6 p.m.?" },
      { tag:"passado", en:"I worked until 6 p.m." },
      { tag:"futuro", en:"I will work until 6 p.m." }
    ]},
    { tipo:"escrever", q:"Escreva seu horário: “I work from ___ until ___.”", exemplo:"I work from 8 until 6." }
  ],

  flashcards: [
    { pt:"Trabalho das 8 até as 6.", en:"I work from 8 until 6." },
    { pt:"Termino às 6.", en:"I'm done at 6." }
  ],

  conexao:'Fecha o <strong>Capítulo 4 — Lunch & Afternoon</strong> e faz par com o <span class="en" data-say="stop working">stop working</span> da Lição 13: você começa (start), para pro almoço (stop), volta (go back to work) e trabalha <span class="en" data-say="until">until</span> 6. Sua tarde inteira em inglês está montada.',

  revisao: [
    "<strong>until</strong> (= <strong>till</strong>) = até um ponto no tempo.",
    "<strong>from</strong> X <strong>to/until</strong> Y = de X até Y.",
    "<strong>until</strong> (até) × <strong>since</strong> (desde) — não confundir.",
    "<strong>by</strong> 6 (no mais tardar) × <strong>until</strong> 6 (o tempo todo).",
    "🏁 Capítulo 4 completo: chegar → almoçar → voltar ao trabalho → até as 6."
  ]
});
