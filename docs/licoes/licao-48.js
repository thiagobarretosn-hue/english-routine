/* Lição 47 — I will travel tonight. */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:7, capituloNome:"A New Beginning", licao:47,
    tituloEn:"I will travel tonight.", tituloPt:"Eu irei viajar hoje à noite." },

  hero: { time:"VOLUME 1 · CAP. 7 — A NEW BEGINNING · LIÇÃO 47",
    en:"I will travel tonight.", pt:"Eu irei viajar hoje à noite." },

  naturalLiteral: {
    natural:"I will travel tonight.",
    literal:"Eu irei viajar hoje à noite.",
    nota:"Note que <span class=\"en\" data-say=\"tonight\">tonight</span> já significa <strong>hoje à noite</strong>. Não diga <span class=\"en\" data-say=\"today at night\">today at night</span>."
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"will travel", classe:"auxiliar + verbo", funcao:"a ação no futuro", traducao:"irei viajar", hl:true },
      { palavra:"tonight", classe:"advérbio", funcao:"quando", traducao:"hoje à noite" }
    ],
    nota:"O <span class=\"en\" data-say=\"will\">will</span> é a ferramenta mais simples do inglês para criar o futuro. Ele entra logo antes da ação."
  },

  molde: {
    intro:"Guarde o molde do futuro simples com <span class=\"en\" data-say=\"will\">will</span>:",
    formula:"I will + [ação] + [quando]",
    exemplos: [
      { en:"I will work tomorrow.", pt:"Eu irei trabalhar amanhã." },
      { en:"I will study later.", pt:"Eu vou estudar mais tarde." },
      { en:"I will sleep soon.", pt:"Eu irei dormir em breve." }
    ],
    nota:"No dia a dia, é muito comum juntar <span class=\"en\" data-say=\"I will\">I will</span> e falar apenas <span class=\"en\" data-say=\"I'll\">I'll</span>."
  },

  conjugacao: {
    verbo: { base:"travel", past:"traveled", irregular:false,
             ptPast:"eu viajei", ptFut:"eu irei viajar" },
    nota:"No presente (viajo, viaja), <strong>he / she / it</strong> ganham <strong>-s</strong>. Mas atenção: na frase da lição (futuro com <span class=\"en\" data-say=\"will\">will</span>), o verbo não muda!",
    linhas: [
      { p:"I",    en:"I travel",   say:"I travel.",   pt:"eu viajo" },
      { p:"you",  en:"you travel", say:"You travel.", pt:"você viaja" },
      { p:"we",   en:"we travel",  say:"We travel.",  pt:"nós viajamos" },
      { p:"they", en:"they travel", say:"They travel.", pt:"eles viajam" },
      { p:"he",   en:"he travel<strong>s</strong>",  say:"He travels.",  pt:"ele viaja", hl:true },
      { p:"she",  en:"she travel<strong>s</strong>", say:"She travels.", pt:"ela viaja", hl:true },
      { p:"it",   en:"it travel<strong>s</strong>",  say:"It travels.",  pt:"(coisa) viaja", hl:true }
    ]
  },

  formas: {
    intro:"Veja as 4 formas no tempo (presente, passado e futuro):",
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't travel often.", pt:"Eu não viajo com frequência." },
      { tag:"?",   tagType:"bad", en:"Do you travel often?", pt:"Você viaja com frequência?" },
      { tag:"passado", en:"I traveled last night.", pt:"Eu viajei ontem à noite. (travel → traveled)" },
      { tag:"futuro",  en:"I will travel tonight.", pt:"Eu irei viajar hoje à noite." }
    ],
    nota:"Na negativa e pergunta do presente, usamos <span class=\"en\" data-say=\"don't\">don't</span> / <span class=\"en\" data-say=\"do\">do</span>. No passado, adicionamos <strong>-ed</strong>. No futuro, entra o <span class=\"en\" data-say=\"will\">will</span>."
  },

  speakNaturally: {
    intro:"Jeitos naturais de falar sobre planos de viagem:",
    linhas: [
      { en:"I'll travel tonight.", pt:"Vou viajar hoje à noite. (contração I'll)" },
      { en:"I'm going to travel tonight.", pt:"Vou viajar hoje à noite. (usando going to)" },
      { en:"I'm traveling tonight.", pt:"Viajo hoje à noite. (presente contínuo como futuro)" },
      { en:"I have a trip tonight.", pt:"Tenho uma viagem hoje à noite." }
    ],
    nota:"Usar <span class=\"en\" data-say=\"I'm going to\">I'm going to</span> é ainda mais comum que <span class=\"en\" data-say=\"will\">will</span> para planos que você já decidiu antes."
  },

  expressoes: [
    { en:"travel abroad", pt:"viajar para o exterior" },
    { en:"travel for work", pt:"viajar a trabalho" },
    { en:"travel light", pt:"viajar leve (com pouca bagagem)" },
    { en:"tonight is the night", pt:"hoje é a grande noite" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"will", soa:"“uíu”", sentido:"(marca o verbo no futuro)" },
      { palavra:"travel", soa:"“TRÉ-vâl”", sentido:"viajar" },
      { palavra:"tonight", soa:"“tu-NÁIT”", sentido:"hoje à noite" }
    ],
    fraseSoa:"ai uíu TRÉ-vâl tu-NÁIT",
    notaPron:"Cuidado com <span class=\"en\" data-say=\"tonight\">tonight</span>: as letras <strong>gh</strong> não têm som nenhum. Fale direto “náit”. E o <strong>L</strong> de <span class=\"en\" data-say=\"will\">will</span> soa como o “u” de mau.",
    cultura:"Nos EUA, quem viaja de avião tenta sempre <span class=\"en\" data-say=\"travel light\">travel light</span> (viajar apenas com bagagem de mão) para evitar as altas taxas de despacho de malas."
  },

  erros: [
    { tipo:"bad",  texto:"I will to travel tonight.", nota:"A regra é clara: depois de <span class=\"en\" data-say=\"will\">will</span>, o verbo vem purinho, sem <span class=\"en\" data-say=\"to\">to</span>." },
    { tipo:"good", en:"I will travel tonight.", nota:"—" },
    { tipo:"bad",  texto:"He wills travel tonight.", nota:"O <span class=\"en\" data-say=\"will\">will</span> nunca muda. Ele não leva <strong>-s</strong> na terceira pessoa." },
    { tipo:"good", en:"He will travel tonight.", nota:"—" }
  ],

  dica: {
    texto:"O <span class=\"en\" data-say=\"will\">will</span> deixa tudo mais fácil! Para colocar qualquer verbo no futuro, basta usá-lo antes. Teste com estas ações:",
    chips:["travel","study","work","sleep"],
    nota:"Toque nas palavras. Transforme sua rotina em planos futuros!"
  },

  dialogo: [
    { who:"A", en:"Will you travel tonight?", pt:"Você vai viajar hoje à noite?" },
    { who:"B", en:"Yeah, I'll travel to New York.", pt:"Sim, vou viajar para Nova York." },
    { who:"A", en:"That's great! Have a safe trip.", pt:"Que ótimo! Faça uma viagem segura." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete com o auxiliar de futuro:", before:"I", after:"travel tonight.", resposta:"will" },
    { tipo:"completar", q:"Complete com o verbo na forma correta:", before:"She will", after:"tonight.", resposta:"travel", wide:true, dica:"Lembre-se: sem -s e sem to depois do will." },
    { tipo:"reorganizar", q:"Coloque as palavras na ordem:", pecas:["tonight.","travel","will","I"], resposta:"I will travel tonight." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Eles irão viajar amanhã.", resposta:"They will travel tomorrow." },
    { tipo:"transformar", q:"Transforme a frase para os outros tempos:", base:"I travel often.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't travel often." },
      { tag:"?",   tagType:"bad", en:"Do you travel often?" },
      { tag:"passado", en:"I traveled last night." },
      { tag:"futuro",  en:"I will travel tonight." }
    ]},
    { tipo:"escrever", q:"Escreva para onde você irá viajar usando 'I will travel to...'", exemplo:"I will travel to London." }
  ],

  flashcards: [
    { pt:"Eu irei viajar amanhã.", en:"I will travel tomorrow." },
    { pt:"Eles não irão viajar hoje à noite.", en:"They won't travel tonight." }
  ],

  conexao:"Esta lição introduz o futuro simples com <span class=\"en\" data-say=\"will\">will</span>, abrindo um leque enorme de possibilidades para contar seus planos!",

  revisao: [
    "O futuro simples é feito colocando <span class=\"en\" data-say=\"will\">will</span> antes do verbo.",
    "Nunca use <span class=\"en\" data-say=\"to\">to</span> ou coloque <strong>-s</strong> no verbo logo após o <span class=\"en\" data-say=\"will\">will</span>.",
    "<span class=\"en\" data-say=\"tonight\">tonight</span> é a forma certa e natural de dizer “hoje à noite”.",
    "<span class=\"en\" data-say=\"travel\">travel</span> soa “TRÉ-vâl” — cuidado para não falar “trével”."
  ]
});
