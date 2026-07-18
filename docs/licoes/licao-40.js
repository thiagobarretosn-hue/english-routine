/* Lição 40 — I like watching series and movies.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:40,
    tituloEn:"I like watching series and movies.", tituloPt:"Eu gosto de assistir séries e filmes." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 40",
    en:"I like watching series and movies.", pt:"Eu gosto de assistir séries e filmes." },

  naturalLiteral: {
    natural:"I like watching series and movies.",
    literal:"Eu gosto assistindo séries e filmes.",
    nota:'<span class="en" data-say="like">like</span> + verbo com <strong>-ing</strong>: <span class="en" data-say="like watching">like watching</span> (gostar de assistir). E cuidado: <span class="en" data-say="series">series</span> é igual no singular e no plural (one series, two series).'
  },

  estrutura: {
    linhas: [
      { palavra:"I like", classe:"sujeito + verbo", funcao:"gosto", traducao:"eu gosto", hl:true },
      { palavra:"watching", classe:"gerúndio (-ing)", funcao:"de quê (a atividade)", traducao:"de assistir", hl:true },
      { palavra:"series and movies", classe:"substantivos", funcao:"o objeto", traducao:"séries e filmes" }
    ],
    nota:'Depois de <span class="en" data-say="like">like</span>, o verbo geralmente ganha <strong>-ing</strong> (like watching, like cooking) — a mesma regra da Lição 10. Também existe “like to watch”, mas o -ing é o mais comum.'
  },

  molde: {
    intro:"O molde de gostar de fazer algo:",
    formula:"I like + [verbo]-ing",
    exemplos: [
      { en:"I like reading.", pt:"Gosto de ler." },
      { en:"I like cooking.", pt:"Gosto de cozinhar." },
      { en:"I like watching movies.", pt:"Gosto de assistir filmes." }
    ],
    nota:'Família dos “gostar/amar/odiar” + -ing: <span class="en" data-say="I love watching">love watching</span> (amo), <span class="en" data-say="I enjoy watching">enjoy watching</span> (curto), <span class="en" data-say="I hate watching">hate watching</span> (odeio).'
  },

  conjugacao: {
    nota:'like → he likes.',
    linhas: [
      { p:"I", en:"I like watching series", say:"I like watching series.", pt:"eu gosto de assistir séries" },
      { p:"you", en:"you like watching series", say:"You like watching series.", pt:"você gosta de assistir séries" },
      { p:"we", en:"we like watching series", say:"We like watching series.", pt:"nós gostamos de assistir séries" },
      { p:"they", en:"they like watching series", say:"They like watching series.", pt:"eles gostam de assistir séries" },
      { p:"he", en:"he like<strong>s</strong> watching series", say:"He likes watching series.", pt:"ele gosta de assistir séries", hl:true },
      { p:"she", en:"she like<strong>s</strong> watching series", say:"She likes watching series.", pt:"ela gosta de assistir séries", hl:true },
      { p:"it", en:"it like<strong>s</strong>", say:"It likes.", pt:"(coisa) gosta", hl:true }
    ]
  },

  formas: {
    intro:'Passado liked (regular).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't like watching horror movies.", pt:"Não gosto de assistir filmes de terror." },
      { tag:"?", tagType:"bad", en:"Do you like watching series?", pt:"Você gosta de assistir séries?" },
      { tag:"passado", en:"I liked that series.", pt:"Gostei daquela série. (like → liked)" },
      { tag:"futuro", en:"I will like this movie.", pt:"Vou gostar deste filme." }
    ],
    nota:'Depois de <span class="en" data-say="like">like</span> na negativa/pergunta, o -ing continua: “Do you <strong>like watching</strong>…?”'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você curte séries e filmes:",
    linhas: [
      { en:"I love watching series.", pt:"Amo assistir séries." },
      { en:"I'm into TV shows.", pt:"Curto muito séries/programas de TV." },
      { en:"I binge-watch series.", pt:"Maratono séries." },
      { en:"I enjoy movies.", pt:"Curto filmes." },
      { en:"I'm a big movie fan.", pt:"Sou muito fã de filmes." }
    ],
    nota:'<span class="en" data-say="be into">be into</span> (something) = curtir/gostar muito; <span class="en" data-say="binge-watch">binge-watch</span> = maratonar (assistir vários episódios seguidos).'
  },

  expressoes: [
    { en:"like watching", pt:"gostar de assistir" },
    { en:"a TV show", pt:"uma série / programa de TV" },
    { en:"binge-watch", pt:"maratonar" },
    { en:"a movie", pt:"um filme" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"like", ipa:"/laɪk/", soa:"“láik”", sentido:"gostar (de)" },
      { palavra:"watching", ipa:"/ˈwɒtʃɪŋ/", soa:"“UÓ-tching”", sentido:"assistindo" },
      { palavra:"series", ipa:"/ˈsɪəriːz/", soa:"“SÍ-riz”", sentido:"série(s)" },
      { palavra:"movies", ipa:"/ˈmuːviz/", soa:"“MÚU-viz”", sentido:"filmes" }
    ],
    fraseSoa:"ai láik UÓ-tching SÍ-riz end MÚU-viz",
    fraseIpa:"/aɪ laɪk ˈwɒtʃɪŋ ˈsɪəriːz ænd ˈmuːviz/",
    notaPron:'<span class="en" data-say="series">series</span> já termina em som de “z” e é <strong>igual</strong> no singular e no plural: one series, two series. Não existe “serie”.',
    cultura:'<span class="en" data-say="TV show">TV show</span> (EUA) = série/programa de TV. <span class="en" data-say="movie">movie</span> (EUA) = <span class="en" data-say="film">film</span> (UK) = filme. A Netflix popularizou o <span class="en" data-say="binge-watch">binge-watch</span> no mundo todo.'
  },

  erros: [
    { tipo:"bad", texto:"I like watch series.", nota:"Depois de like, use -ing (ou to): <strong>like watching</strong> / like to watch." },
    { tipo:"bad", texto:"a serie.", nota:"É <strong>series</strong> (com s), igual no singular e plural." },
    { tipo:"bad", texto:"two series (achando que é plural diferente).", nota:"Certo! <strong>series</strong> não muda: one series, two series." },
    { tipo:"bad", texto:"He like watching.", nota:"3ª pessoa: He like<strong>s</strong> watching." }
  ],

  dica: {
    texto:'A família dos sentimentos + <strong>-ing</strong>. Toque e ouça:',
    chips:["like watching","love watching","enjoy reading","hate waiting"],
    nota:"like/love/enjoy/hate + verbo-ing. E series = igual no singular e plural."
  },

  dialogo: [
    { who:"A", en:"What do you do at night?", pt:"O que você faz à noite?" },
    { who:"B", en:"I like watching series and movies.", pt:"Gosto de assistir séries e filmes." },
    { who:"A", en:"Same. I binge-watch a lot.", pt:"Igual. Eu maratono bastante." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete com o -ing:", before:"I like", after:"series.", resposta:"watching" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"watching movies.", resposta:"likes", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["watching","I","movies","like"], resposta:"I like watching movies." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele gosta de assistir séries.", resposta:"He likes watching series." },
    { tipo:"transformar", q:"Transforme", base:"I like watching movies.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't like watching movies." },
      { tag:"?", tagType:"bad", en:"Do you like watching movies?" },
      { tag:"passado", en:"I liked watching movies." },
      { tag:"futuro", en:"I will like watching movies." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com like/love + verbo-ing.", exemplo:"I love reading at night." }
  ],

  flashcards: [
    { pt:"Amo assistir séries.", en:"I love watching series." },
    { pt:"Ele gosta de assistir séries.", en:"He likes watching series." }
  ],

  conexao:'Retoma o <span class="en" data-say="like">like</span> + -ing (Lição 10) e o <span class="en" data-say="watch">watch</span> (Lição 39). Prepara a próxima lição, onde você faz duas coisas ao mesmo tempo: tocar violão <em>enquanto</em> assiste algo.',

  revisao: [
    "<strong>like</strong> + verbo-ing (like watching).",
    "Família: <strong>love / enjoy / hate</strong> + -ing.",
    "<strong>series</strong> = igual no singular e plural.",
    "<strong>TV show</strong> (EUA) = série; <strong>movie</strong> = <strong>film</strong> (UK).",
    "<strong>binge-watch</strong> = maratonar."
  ]
});
