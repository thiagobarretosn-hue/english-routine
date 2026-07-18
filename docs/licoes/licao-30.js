/* Lição 30 — On Mondays I play volleyball.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:5, capituloNome:"Class, Sports & Therapy", licao:30,
    tituloEn:"On Mondays I play volleyball.", tituloPt:"Geralmente às segundas eu vou jogar vôlei." },

  hero: { time:"VOLUME 1 · CAP. 5 — CLASS, SPORTS & THERAPY · LIÇÃO 30",
    en:"On Mondays I play volleyball.", pt:"Às segundas eu jogo vôlei." },

  naturalLiteral: {
    natural:"On Mondays I play volleyball.",
    literal:"Nas segundas eu jogo vôlei.",
    nota:'<span class="en" data-say="play volleyball">play volleyball</span> = jogar vôlei. Regra de ouro: esporte vem <strong>sem the</strong> (play volleyball), mas instrumento musical leva the (play <strong>the</strong> guitar).'
  },

  estrutura: {
    linhas: [
      { palavra:"On Mondays", classe:"on + dia (plural)", funcao:"quando (hábito)", traducao:"às segundas", hl:true },
      { palavra:"I play", classe:"sujeito + verbo", funcao:"a ação", traducao:"eu jogo", hl:true },
      { palavra:"volleyball", classe:"substantivo (esporte)", funcao:"o esporte", traducao:"vôlei" }
    ],
    nota:'<span class="en" data-say="play">play</span> serve tanto para “jogar” (esporte) quanto para “tocar” (instrumento) e “brincar”. O que muda é o the: sem the para esporte, com the para instrumento.'
  },

  molde: {
    intro:"A regra do play, lado a lado:",
    formula:"play + esporte (sem the)   /   play the + instrumento",
    exemplos: [
      { en:"I play soccer.", pt:"Jogo futebol." },
      { en:"I play tennis.", pt:"Jogo tênis." },
      { en:"I play the guitar.", pt:"Toco violão. (com the)" }
    ],
    nota:'Esportes: <span class="en" data-say="play volleyball">play volleyball</span>, <span class="en" data-say="play soccer">play soccer</span>, <span class="en" data-say="play basketball">play basketball</span> — todos sem the. Instrumentos: <span class="en" data-say="play the guitar">play the guitar</span>, <span class="en" data-say="play the piano">play the piano</span> — com the.'
  },

  conjugacao: {
    nota:'⚠️ <span class="en" data-say="play">play</span> termina em <strong>vogal + y</strong>, então ganha só <strong>-s</strong> (plays), diferente de fry → fries (consoante + y).',
    linhas: [
      { p:"I", en:"I play volleyball", say:"I play volleyball on Mondays.", pt:"eu jogo vôlei" },
      { p:"you", en:"you play volleyball", say:"You play volleyball on Mondays.", pt:"você joga vôlei" },
      { p:"we", en:"we play volleyball", say:"We play volleyball on Mondays.", pt:"nós jogamos vôlei" },
      { p:"they", en:"they play volleyball", say:"They play volleyball on Mondays.", pt:"eles jogam vôlei" },
      { p:"he", en:"he play<strong>s</strong> volleyball", say:"He plays volleyball on Mondays.", pt:"ele joga vôlei", hl:true },
      { p:"she", en:"she play<strong>s</strong> volleyball", say:"She plays volleyball on Mondays.", pt:"ela joga vôlei", hl:true },
      { p:"it", en:"it play<strong>s</strong>", say:"It plays.", pt:"(coisa) toca/reproduz", hl:true }
    ]
  },

  formas: {
    intro:'Passado <span class="en" data-say="played">played</span> — vogal + y vira só <strong>-ed</strong> (played, não “plaied”).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't play volleyball on Mondays.", pt:"Eu não jogo vôlei às segundas." },
      { tag:"?", tagType:"bad", en:"Do you play volleyball on Mondays?", pt:"Você joga vôlei às segundas?" },
      { tag:"passado", en:"I played volleyball on Monday.", pt:"Joguei vôlei na segunda. (play → played)" },
      { tag:"futuro", en:"I will play volleyball on Monday.", pt:"Vou jogar vôlei na segunda." }
    ],
    nota:'Compare com a Lição 10: <strong>fry → fries/fried</strong> (consoante+y) × <strong>play → plays/played</strong> (vogal+y). A vogal antes do y muda a regra.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar do seu vôlei:",
    linhas: [
      { en:"On Mondays I play volleyball.", pt:"Às segundas jogo vôlei." },
      { en:"Monday is volleyball night.", pt:"Segunda é noite de vôlei." },
      { en:"I have a volleyball game on Mondays.", pt:"Tenho jogo de vôlei às segundas." },
      { en:"I hit the court on Mondays.", pt:"Vou pra quadra às segundas." },
      { en:"I play in a volleyball league.", pt:"Jogo numa liga de vôlei." }
    ],
    nota:'<span class="en" data-say="court">court</span> = quadra; <span class="en" data-say="game">game</span> = jogo/partida. <span class="en" data-say="hit the court">hit the court</span> = ir pra quadra (como “hit the gym”).'
  },

  expressoes: [
    { en:"play volleyball", pt:"jogar vôlei" },
    { en:"play soccer", pt:"jogar futebol" },
    { en:"play the guitar", pt:"tocar violão" },
    { en:"a volleyball game", pt:"um jogo de vôlei" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"play", ipa:"/pleɪ/", soa:"“plêi”", sentido:"jogar / tocar / brincar" },
      { palavra:"volleyball", ipa:"/ˈvɒlibɔːl/", soa:"“VÓ-li-ból”", sentido:"vôlei" },
      { palavra:"Monday", ipa:"/ˈmʌndeɪ/", soa:"“MÂN-dei”", sentido:"segunda-feira" }
    ],
    fraseSoa:"on MÂN-deis ai plêi VÓ-li-ból",
    fraseIpa:"/ɒn ˈmʌndeɪz aɪ pleɪ ˈvɒlibɔːl/",
    notaPron:'<span class="en" data-say="volleyball">volleyball</span> tem a força na 1ª sílaba: “VÓ-li-ból”. E <span class="en" data-say="play">play</span> é “plêi”, com o ditongo “êi”.',
    cultura:'Nos EUA, <span class="en" data-say="soccer">soccer</span> é o nosso futebol; <span class="en" data-say="football">football</span> é o futebol americano. Não confunda ao falar de esportes.'
  },

  erros: [
    { tipo:"bad", texto:"I play the volleyball.", nota:"Esporte vai <strong>sem the</strong>: play volleyball." },
    { tipo:"good", en:"I play volleyball.", nota:"—" },
    { tipo:"bad", texto:"I play guitar.", nota:"Instrumento leva the: <strong>play the guitar</strong>." },
    { tipo:"bad", texto:"He play volleyball.", nota:"3ª pessoa: He play<strong>s</strong> (vogal+y → só -s)." }
  ],

  dica: {
    texto:'<strong>play</strong> + esporte (sem the) × <strong>play the</strong> + instrumento. E vogal+y = só -s. Toque e compare:',
    chips:["play volleyball","play soccer","play the guitar","play the piano"],
    nota:"esporte sem the; instrumento com the. play → plays (não plaies)."
  },

  dialogo: [
    { who:"A", en:"Do you play any sports?", pt:"Você joga algum esporte?" },
    { who:"B", en:"Yeah, on Mondays I play volleyball.", pt:"Sim, às segundas jogo vôlei." },
    { who:"A", en:"Indoor or beach?", pt:"De quadra ou de praia?" },
    { who:"B", en:"Beach, actually.", pt:"De praia, na verdade." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (esporte, sem artigo):", before:"On Mondays I play", after:".", resposta:"volleyball" },
    { tipo:"completar", q:"Complete a 3ª pessoa (vogal+y):", before:"He", after:"volleyball.", resposta:"plays", wide:true, dica:"play + vogal antes do y = só -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["volleyball","I","Mondays","play","On"], resposta:"On Mondays I play volleyball." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela joga vôlei às segundas.", resposta:"She plays volleyball on Mondays." },
    { tipo:"transformar", q:"Transforme", base:"On Mondays I play volleyball.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't play volleyball on Mondays." },
      { tag:"?", tagType:"bad", en:"Do you play volleyball on Mondays?" },
      { tag:"passado", en:"I played volleyball on Monday." },
      { tag:"futuro", en:"I will play volleyball on Monday." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com play + esporte OU play the + instrumento.", exemplo:"I play the guitar on weekends." }
  ],

  flashcards: [
    { pt:"Às segundas jogo vôlei.", en:"On Mondays I play volleyball." },
    { pt:"Toco violão nos fins de semana.", en:"I play the guitar on weekends." }
  ],

  conexao:'Retoma o padrão <span class="en" data-say="on Mondays">On + dia</span> (Lição 16) e a regra do y (Lição 10), agora com a exceção da vogal (play → plays). Esse <span class="en" data-say="play">play</span> volta nas próximas duas lições (vôlei de praia) e no violão da Lição 41.',

  revisao: [
    "<strong>play</strong> + esporte (sem the) × <strong>play the</strong> + instrumento.",
    "Vogal + y → só <strong>-s</strong> (plays) e <strong>-ed</strong> (played).",
    "Consoante + y → -ies/-ied (fries/fried) — Lição 10.",
    "<strong>soccer</strong> (EUA) = futebol; football = futebol americano.",
    "<strong>court</strong> = quadra; <strong>game</strong> = jogo."
  ]
});
