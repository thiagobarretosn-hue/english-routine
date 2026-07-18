/* Lição 9 — I make breakfast.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:9,
    tituloEn:"I make breakfast.", tituloPt:"Eu preparo o café da manhã." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 09",
    en:"I make breakfast.", pt:"Eu preparo o café da manhã." },

  naturalLiteral: {
    natural:"I make breakfast.",
    literal:"Eu faço café da manhã.",
    nota:'<span class="en" data-say="make breakfast">make breakfast</span> = <strong>preparar</strong> o café da manhã (na cozinha). Não confunda com <span class="en" data-say="have breakfast">have breakfast</span> (Lição 8), que é <strong>comer</strong>. Primeiro você <span class="en" data-say="make">make</span>, depois <span class="en" data-say="have">have</span>.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"make", classe:"verbo", funcao:"a ação (preparar)", traducao:"preparar/fazer", hl:true },
      { palavra:"breakfast", classe:"substantivo", funcao:"o que é preparado", traducao:"café da manhã" }
    ],
    nota:'É o mesmo <span class="en" data-say="make">make</span> da Lição 3 (make my bed). Aqui ele significa “preparar comida”. O sentido de make vem sempre do objeto.'
  },

  molde: {
    intro:"O molde de preparar comida:",
    formula:"I make + [comida / bebida]",
    exemplos: [
      { en:"I make coffee.", pt:"Faço café." },
      { en:"I make a sandwich.", pt:"Faço um sanduíche." },
      { en:"I make lunch.", pt:"Preparo o almoço." }
    ],
    nota:'A diferença que vale ouro: <strong>make</strong> = preparar (cozinha), <strong>have</strong> = comer (mesa). <span class="en" data-say="I make breakfast, then I have it.">I make breakfast, then I have it.</span>'
  },

  conjugacao: {
    nota:'Padrão de sempre — só <strong>he / she / it</strong> ganham <strong>-s</strong> (make → makes).',
    linhas: [
      { p:"I", en:"I make breakfast", say:"I make breakfast.", pt:"eu preparo o café da manhã" },
      { p:"you", en:"you make breakfast", say:"You make breakfast.", pt:"você prepara o café da manhã" },
      { p:"we", en:"we make breakfast", say:"We make breakfast.", pt:"nós preparamos o café da manhã" },
      { p:"they", en:"they make breakfast", say:"They make breakfast.", pt:"eles preparam o café da manhã" },
      { p:"he", en:"he make<strong>s</strong> breakfast", say:"He makes breakfast.", pt:"ele prepara o café da manhã", hl:true },
      { p:"she", en:"she make<strong>s</strong> breakfast", say:"She makes breakfast.", pt:"ela prepara o café da manhã", hl:true },
      { p:"it", en:"it make<strong>s</strong>", say:"It makes.", pt:"(coisa) faz", hl:true }
    ]
  },

  formas: {
    intro:'Lembra do passado irregular da Lição 3: make → <span class="en" data-say="made">made</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't make breakfast.", pt:"Eu não preparo o café da manhã." },
      { tag:"?", tagType:"bad", en:"Do you make breakfast?", pt:"Você prepara o café da manhã?" },
      { tag:"passado", en:"I made breakfast.", pt:"Preparei o café da manhã. (make → made)" },
      { tag:"futuro", en:"I will make breakfast.", pt:"Vou preparar o café da manhã." }
    ],
    nota:'Nunca “maked”. É <span class="en" data-say="made">made</span> — um dos irregulares mais usados.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você prepara o café:",
    linhas: [
      { en:"I cook breakfast.", pt:"Cozinho o café da manhã." },
      { en:"I fix breakfast.", pt:"Preparo o café. (informal, EUA)" },
      { en:"I whip up breakfast.", pt:"Faço um café rapidinho." },
      { en:"I get breakfast ready.", pt:"Deixo o café pronto." },
      { en:"I prepare breakfast.", pt:"Preparo o café da manhã. (mais formal)" }
    ],
    nota:'<span class="en" data-say="whip up">whip up</span> = fazer algo rápido; <span class="en" data-say="fix">fix</span> (além de “consertar”) também é “preparar comida” no inglês americano.'
  },

  expressoes: [
    { en:"make breakfast", pt:"preparar o café da manhã" },
    { en:"make coffee", pt:"fazer café" },
    { en:"make a sandwich", pt:"fazer um sanduíche" },
    { en:"cook a meal", pt:"cozinhar uma refeição" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"make", ipa:"/meɪk/", soa:"“mêik”", sentido:"fazer / preparar" },
      { palavra:"breakfast", ipa:"/ˈbrɛkfəst/", soa:"“BRÉK-fâst”", sentido:"café da manhã" },
      { palavra:"cook", ipa:"/kʊk/", soa:"“kuk”", sentido:"cozinhar / cozinheiro" }
    ],
    fraseSoa:"ai mêik BRÉK-fâst",
    fraseIpa:"/aɪ meɪk ˈbrɛkfəst/",
    notaPron:'<span class="en" data-say="cook">cook</span> soa “kuk” (u curtinho), diferente de <span class="en" data-say="cool">cool</span> (“kúul”, com u longo). Cuidado para não trocar.',
    cultura:'<span class="en" data-say="What did you make?">“What did you make?”</span> (o que você fez/preparou?) é pergunta comum na cozinha. E <span class="en" data-say="home-cooked meal">home-cooked meal</span> = comida caseira, algo muito valorizado.'
  },

  erros: [
    { tipo:"bad", texto:"I do breakfast.", nota:"Comida se prepara com <strong>make</strong>, não “do”. → I make breakfast." },
    { tipo:"good", en:"I make breakfast.", nota:"—" },
    { tipo:"bad", texto:"I make breakfast (querendo dizer “como”).", nota:"Se você <em>come</em>, é <strong>have</strong> breakfast; make é só preparar." },
    { tipo:"bad", texto:"He make breakfast.", nota:"3ª pessoa: He make<strong>s</strong> breakfast." }
  ],

  dica: {
    texto:'A dupla da cozinha e da mesa: <strong>MAKE</strong> = preparar, <strong>HAVE</strong> = comer. Visualize a sequência:',
    chips:["make coffee","make breakfast","have breakfast","make a sandwich"],
    nota:"Toque em cada uma. Você MAKE na cozinha e depois HAVE na mesa — essa dupla resolve metade das frases sobre comida."
  },

  dialogo: [
    { who:"A", en:"Do you make your own breakfast?", pt:"Você mesmo prepara seu café da manhã?" },
    { who:"B", en:"Yeah, I make breakfast every day.", pt:"Sim, preparo o café todo dia." },
    { who:"A", en:"What do you usually make?", pt:"O que você costuma fazer?" },
    { who:"B", en:"Usually eggs.", pt:"Geralmente ovos." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (preparar):", before:"I", after:"breakfast every day.", resposta:"make" },
    { tipo:"completar", q:"Complete (comer, da lição anterior):", before:"After I cook, I", after:"breakfast.", resposta:"have", wide:true, dica:"comer = have." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["breakfast","make","I"], resposta:"I make breakfast." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela prepara o café da manhã.", resposta:"She makes breakfast." },
    { tipo:"transformar", q:"Transforme", base:"I make breakfast.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't make breakfast." },
      { tag:"?", tagType:"bad", en:"Do you make breakfast?" },
      { tag:"passado", en:"I made breakfast." },
      { tag:"futuro", en:"I will make breakfast." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com make + comida ou bebida.", exemplo:"I make coffee every morning." }
  ],

  flashcards: [
    { pt:"Preparo o café da manhã todo dia.", en:"I make breakfast every day." },
    { pt:"Faço o café, depois tomo.", en:"I make coffee, then I have it." }
  ],

  conexao:'Junta o <span class="en" data-say="make">make</span> da Lição 3 com o <span class="en" data-say="breakfast">breakfast</span> da Lição 8, e crava a diferença <strong>make (preparar) × have (comer)</strong> — uma das confusões mais comuns de quem está aprendendo.',

  revisao: [
    "<strong>make breakfast</strong> = preparar; <strong>have breakfast</strong> = comer.",
    "Mesmo <strong>make</strong> da cama (Lição 3): o sentido vem do objeto.",
    "Passado irregular: make → <strong>made</strong>.",
    "Comida se prepara com <strong>make</strong>, nunca “do”.",
    "Naturais: <strong>cook</strong>, <strong>fix</strong>, <strong>whip up</strong> breakfast."
  ]
});
