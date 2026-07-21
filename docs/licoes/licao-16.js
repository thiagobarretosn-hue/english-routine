/* Lição 16 — On Mondays I train chest, shoulders, and triceps.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:16,
    tituloEn:"On Mondays I train chest, shoulders, and triceps.", tituloPt:"Normalmente às segundas eu treino peito, ombro e tríceps." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 16",
    en:"On Mondays I train chest, shoulders, and triceps.", pt:"Às segundas eu treino peito, ombro e tríceps." },

  naturalLiteral: {
    natural:"On Mondays I train chest, shoulders, and triceps.",
    literal:"Nas segundas eu treino peito, ombros e tríceps.",
    nota:'Dois pontos: dias da semana levam <span class="en" data-say="on">on</span> (não “in”); e o dia no <strong>plural</strong> (<span class="en" data-say="on Mondays">on Mondays</span>) significa “toda segunda”, um hábito.'
  },

  estrutura: {
    linhas: [
      { palavra:"On Mondays", classe:"on + dia (plural)", funcao:"quando (hábito)", traducao:"às segundas", hl:true },
      { palavra:"I train", classe:"sujeito + verbo", funcao:"a ação", traducao:"eu treino" },
      { palavra:"chest, shoulders,", classe:"substantivos (lista)", funcao:"os músculos", traducao:"peito, ombros," },
      { palavra:"and triceps", classe:"and + último item", funcao:"fecha a lista", traducao:"e tríceps" }
    ],
    nota:'Lista com 3+ itens: separe por vírgula e use <span class="en" data-say="and">and</span> antes do último — <span class="en" data-say="chest, shoulders, and triceps">chest, shoulders, and triceps</span>. Essa vírgula antes do “and” é comum no inglês americano.'
  },

  molde: {
    intro:"O molde da rotina semanal:",
    formula:"On + [dia]s I + atividade",
    exemplos: [
      { en:"On Mondays I train chest.", pt:"Às segundas treino peito." },
      { en:"On Fridays I rest.", pt:"Às sextas eu descanso." },
      { en:"On weekends I play volleyball.", pt:"Nos fins de semana jogo vôlei." }
    ],
    nota:'<span class="en" data-say="on Monday">On Monday</span> (singular) = numa segunda específica; <span class="en" data-say="on Mondays">On Mondays</span> (plural) = toda segunda. Para rotina, use o plural.'
  },

  conjugacao: {
    verbo: { base:"train chest", past:"trained chest", irregular:false, ptPast:"eu treinei peito", ptFut:"eu vou treinar peito" },
    nota:'train → he trains (só o -s de sempre).',
    linhas: [
      { p:"I", en:"I train chest", say:"I train chest on Mondays.", pt:"eu treino peito" },
      { p:"you", en:"you train chest", say:"You train chest on Mondays.", pt:"você treina peito" },
      { p:"we", en:"we train chest", say:"We train chest on Mondays.", pt:"nós treinamos peito" },
      { p:"they", en:"they train chest", say:"They train chest on Mondays.", pt:"eles treinam peito" },
      { p:"he", en:"he train<strong>s</strong> chest", say:"He trains chest on Mondays.", pt:"ele treina peito", hl:true },
      { p:"she", en:"she train<strong>s</strong> chest", say:"She trains chest on Mondays.", pt:"ela treina peito", hl:true },
      { p:"it", en:"it train<strong>s</strong>", say:"It trains.", pt:"(coisa) treina", hl:true }
    ]
  },

  formas: {
    intro:'train é regular: passado <span class="en" data-say="trained">trained</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't train chest on Mondays.", pt:"Eu não treino peito às segundas." },
      { tag:"?", tagType:"bad", en:"Do you train chest on Mondays?", pt:"Você treina peito às segundas?" },
      { tag:"passado", en:"I trained chest on Monday.", pt:"Treinei peito na segunda. (train → trained)" },
      { tag:"futuro", en:"I will train chest on Monday.", pt:"Vou treinar peito na segunda." }
    ],
    nota:'No passado, costuma-se usar o dia no singular (on Monday), porque foi uma vez específica.'
  },

  speakNaturally: {
    intro:"Como se fala de treino de forma natural:",
    linhas: [
      { en:"Monday is chest day.", pt:"Segunda é dia de peito." },
      { en:"I hit chest on Mondays.", pt:"Treino peito às segundas." },
      { en:"On Mondays I do push.", pt:"Às segundas faço treino de empurrar (push)." },
      { en:"I work out my chest and shoulders.", pt:"Trabalho peito e ombros." },
      { en:"Mondays are for upper body.", pt:"Segundas são de parte superior." }
    ],
    nota:'<span class="en" data-say="chest day">chest day</span>, <span class="en" data-say="leg day">leg day</span> — “dia de peito”, “dia de perna”. E <span class="en" data-say="push">push</span> (empurrar) / <span class="en" data-say="pull">pull</span> (puxar) são divisões clássicas de treino.'
  },

  expressoes: [
    { en:"train chest", pt:"treinar peito" },
    { en:"chest day", pt:"dia de peito" },
    { en:"upper body", pt:"parte superior do corpo" },
    { en:"work out", pt:"malhar / treinar" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"train", ipa:"/treɪn/", soa:"“trêin”", sentido:"treinar" },
      { palavra:"chest", ipa:"/tʃɛst/", soa:"“tchést”", sentido:"peito" },
      { palavra:"shoulders", ipa:"/ˈʃoʊldərz/", soa:"“CHÔUL-ders”", sentido:"ombros" },
      { palavra:"triceps", ipa:"/ˈtraɪsɛps/", soa:"“TRÁI-seps”", sentido:"tríceps" }
    ],
    fraseSoa:"on MÂN-deis ai trêin tchést, CHÔUL-ders, end TRÁI-seps",
    fraseIpa:"/ɒn ˈmʌndeɪz aɪ treɪn tʃɛst ˈʃoʊldərz ænd ˈtraɪsɛps/",
    notaPron:'<span class="en" data-say="chest">chest</span> começa com “tch”, como em “tchau”. E <span class="en" data-say="shoulders">shoulders</span> tem o “sh” + ditongo “ôu”: “CHÔUL-ders”.',
    cultura:'A divisão de treino que você faz (peito/ombro/tríceps num dia) chama-se <span class="en" data-say="push day">push day</span> (dia de empurrar). Os outros são <span class="en" data-say="pull day">pull day</span> (puxar) e <span class="en" data-say="leg day">leg day</span> (perna).'
  },

  erros: [
    { tipo:"bad", texto:"In Mondays I train chest.", nota:"Dias da semana levam <strong>on</strong>: On Mondays." },
    { tipo:"good", en:"On Mondays I train chest.", nota:"—" },
    { tipo:"bad", texto:"On Mondays (querendo dizer uma segunda específica).", nota:"Para hábito use plural (Mondays); para uma vez, singular (on Monday)." },
    { tipo:"bad", texto:"He train chest.", nota:"3ª pessoa: He train<strong>s</strong> chest." }
  ],

  dica: {
    texto:'Grave o <strong>on + dia</strong> e o vocabulário dos músculos que você treina:',
    chips:["chest","shoulders","back","legs"],
    nota:"Toque em cada músculo. E lembre: dia no plural (Mondays) = hábito; on, nunca in."
  },

  dialogo: [
    { who:"A", en:"What do you train on Mondays?", pt:"O que você treina às segundas?" },
    { who:"B", en:"On Mondays I train chest, shoulders, and triceps.", pt:"Às segundas treino peito, ombro e tríceps." },
    { who:"A", en:"So Monday is push day for you.", pt:"Então segunda é dia de push pra você." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a preposição do dia:", before:"", after:"Mondays I train chest.", resposta:"on" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"chest on Mondays.", resposta:"trains", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["Mondays","I","chest","On","train"], resposta:"On Mondays I train chest." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Às segundas ela treina peito e ombros.", resposta:"On Mondays she trains chest and shoulders." },
    { tipo:"transformar", q:"Transforme", base:"On Mondays I train chest.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't train chest on Mondays." },
      { tag:"?", tagType:"bad", en:"Do you train chest on Mondays?" },
      { tag:"passado", en:"I trained chest on Monday." },
      { tag:"futuro", en:"I will train chest on Monday." }
    ]},
    { tipo:"escrever", q:"Escreva seu treino: “On ___ I train ___.”", exemplo:"On Wednesdays I train legs." }
  ],

  flashcards: [
    { pt:"Segunda é dia de peito.", en:"Monday is chest day." },
    { pt:"Às segundas treino peito, ombro e tríceps.", en:"On Mondays I train chest, shoulders, and triceps." }
  ],

  conexao:'Abre a sua rotina semanal de treino. O padrão <span class="en" data-say="on Mondays">On + dia</span> vai se repetir nas próximas três lições (terça, quarta, quinta). Guarde também o vocabulário de músculos — ele volta o capítulo inteiro.',

  revisao: [
    "Dias da semana com <strong>on</strong> (nunca “in”).",
    "Dia no <strong>plural</strong> (on Mondays) = hábito; singular = uma vez.",
    "Lista de 3+: <strong>A, B, and C</strong> (vírgula antes do and).",
    "Músculos: <strong>chest</strong> (peito), <strong>shoulders</strong> (ombros), <strong>triceps</strong>.",
    "Divisões: <strong>push / pull / legs</strong>."
  ]
});
