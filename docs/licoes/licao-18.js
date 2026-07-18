/* Lição 18 — On Wednesdays I train legs.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:18,
    tituloEn:"On Wednesdays I train legs.", tituloPt:"Normalmente às quartas eu treino perna." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 18",
    en:"On Wednesdays I train legs.", pt:"Às quartas eu treino perna." },

  naturalLiteral: {
    natural:"On Wednesdays I train legs.",
    literal:"Nas quartas eu treino pernas.",
    nota:'Mesma estrutura das lições 16 e 17. A novidade aqui é a palavra <span class="en" data-say="Wednesday">Wednesday</span> — que se escreve com um <strong>d</strong> que <strong>não se pronuncia</strong>: fala-se “UÊNZ-dei”.'
  },

  estrutura: {
    linhas: [
      { palavra:"On Wednesdays", classe:"on + dia (plural)", funcao:"quando (hábito)", traducao:"às quartas", hl:true },
      { palavra:"I train", classe:"sujeito + verbo", funcao:"a ação", traducao:"eu treino" },
      { palavra:"legs", classe:"substantivo (plural)", funcao:"o músculo", traducao:"pernas" }
    ],
    nota:'Em inglês, treino de perna é <span class="en" data-say="legs">legs</span> (plural), porque você treina as duas. O famoso e temido <span class="en" data-say="leg day">leg day</span>.'
  },

  molde: {
    intro:"Continua o molde da semana de treino:",
    formula:"On + [dia]s I train + [músculo]",
    exemplos: [
      { en:"On Wednesdays I train legs.", pt:"Às quartas treino perna." },
      { en:"On Fridays I train arms.", pt:"Às sextas treino braço." },
      { en:"On Saturdays I train abs.", pt:"Aos sábados treino abdômen." }
    ],
    nota:'Vocabulário de músculos para completar: <span class="en" data-say="arms">arms</span> (braços), <span class="en" data-say="abs">abs</span> (abdômen), <span class="en" data-say="glutes">glutes</span> (glúteos), <span class="en" data-say="calves">calves</span> (panturrilhas).'
  },

  conjugacao: {
    verbo: { base:"train legs", past:"trained legs", irregular:false, ptPast:"eu treinei perna", ptFut:"eu vou treinar perna" },
    nota:'train → he trains (o de sempre).',
    linhas: [
      { p:"I", en:"I train legs", say:"I train legs on Wednesdays.", pt:"eu treino perna" },
      { p:"you", en:"you train legs", say:"You train legs on Wednesdays.", pt:"você treina perna" },
      { p:"we", en:"we train legs", say:"We train legs on Wednesdays.", pt:"nós treinamos perna" },
      { p:"they", en:"they train legs", say:"They train legs on Wednesdays.", pt:"eles treinam perna" },
      { p:"he", en:"he train<strong>s</strong> legs", say:"He trains legs on Wednesdays.", pt:"ele treina perna", hl:true },
      { p:"she", en:"she train<strong>s</strong> legs", say:"She trains legs on Wednesdays.", pt:"ela treina perna", hl:true },
      { p:"it", en:"it train<strong>s</strong>", say:"It trains.", pt:"(coisa) treina", hl:true }
    ]
  },

  formas: {
    intro:'Passado trained (regular).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't train legs on Wednesdays.", pt:"Eu não treino perna às quartas." },
      { tag:"?", tagType:"bad", en:"Do you train legs on Wednesdays?", pt:"Você treina perna às quartas?" },
      { tag:"passado", en:"I trained legs on Wednesday.", pt:"Treinei perna na quarta." },
      { tag:"futuro", en:"I will train legs on Wednesday.", pt:"Vou treinar perna na quarta." }
    ],
    nota:'Nunca <span class="en" data-say="skip leg day">skip leg day</span> (pular o dia de perna) — é a piada mais famosa das academias.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar do dia de perna:",
    linhas: [
      { en:"Wednesday is leg day.", pt:"Quarta é dia de perna." },
      { en:"I hit legs on Wednesdays.", pt:"Treino perna às quartas." },
      { en:"I never skip leg day.", pt:"Nunca pulo o dia de perna." },
      { en:"On Wednesdays I do legs.", pt:"Às quartas faço perna." },
      { en:"Leg day is the hardest.", pt:"Dia de perna é o mais difícil." }
    ],
    nota:'<span class="en" data-say="leg day">leg day</span> é praticamente uma instituição na cultura de academia. “Never skip leg day” é quase um mandamento.'
  },

  expressoes: [
    { en:"leg day", pt:"dia de perna" },
    { en:"train legs", pt:"treinar perna" },
    { en:"lower body", pt:"parte inferior do corpo" },
    { en:"squat", pt:"agachamento" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"Wednesday", ipa:"/ˈwɛnzdeɪ/", soa:"“UÊNZ-dei”", sentido:"quarta-feira (d mudo!)" },
      { palavra:"legs", ipa:"/lɛɡz/", soa:"“légz”", sentido:"pernas" },
      { palavra:"train", ipa:"/treɪn/", soa:"“trêin”", sentido:"treinar" }
    ],
    fraseSoa:"on UÊNZ-deis ai trêin légz",
    fraseIpa:"/ɒn ˈwɛnzdeɪz aɪ treɪn lɛɡz/",
    notaPron:'<span class="en" data-say="Wednesday">Wednesday</span> é a mais traiçoeira dos dias: escreve-se “Wed-nes-day”, mas fala-se “<strong>UÊNZ-dei</strong>” — o primeiro <strong>d</strong> é totalmente mudo. Ouça algumas vezes.',
    cultura:'Truque de memória americano: muita gente aprende a soletrar Wednesday dizendo “Wed-nes-day” bem devagar (com o d) só para lembrar da escrita — mas na fala real o d some.'
  },

  erros: [
    { tipo:"bad", texto:"Wednesday falado “ued-NÉS-dei”.", nota:"O primeiro d é mudo: <strong>UÊNZ-dei</strong>." },
    { tipo:"bad", texto:"I train leg.", nota:"Treino de perna é <strong>legs</strong> (plural)." },
    { tipo:"bad", texto:"In Wednesdays.", nota:"Dias levam <strong>on</strong>: On Wednesdays." },
    { tipo:"bad", texto:"on wednesday (minúsculo).", nota:"Dias são <strong>maiúsculos</strong>: Wednesday." }
  ],

  dica: {
    texto:'Grave a fala de Wednesday (“UÊNZ-dei”, sem o primeiro d) e o vocabulário de músculos da parte inferior:',
    chips:["legs","glutes","calves","squat"],
    nota:"Toque em cada um. legs (pernas), glutes (glúteos), calves (panturrilhas), squat (agachamento)."
  },

  dialogo: [
    { who:"A", en:"What's your Wednesday workout?", pt:"Qual é seu treino de quarta?" },
    { who:"B", en:"On Wednesdays I train legs. Leg day.", pt:"Às quartas treino perna. Dia de perna." },
    { who:"A", en:"Respect. I always skip leg day.", pt:"Respeito. Eu sempre pulo o dia de perna." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (plural):", before:"On Wednesdays I train", after:".", resposta:"legs" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"legs on Wednesdays.", resposta:"trains", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["legs","Wednesdays","I","On","train"], resposta:"On Wednesdays I train legs." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele treina perna às quartas.", resposta:"He trains legs on Wednesdays." },
    { tipo:"transformar", q:"Transforme", base:"On Wednesdays I train legs.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't train legs on Wednesdays." },
      { tag:"?", tagType:"bad", en:"Do you train legs on Wednesdays?" },
      { tag:"passado", en:"I trained legs on Wednesday." },
      { tag:"futuro", en:"I will train legs on Wednesday." }
    ]},
    { tipo:"escrever", q:"Escreva o treino de outro dia da semana.", exemplo:"On Fridays I train arms and abs." }
  ],

  flashcards: [
    { pt:"Quarta é dia de perna.", en:"Wednesday is leg day." },
    { pt:"Nunca pulo o dia de perna.", en:"I never skip leg day." }
  ],

  conexao:'Terceiro dia da sua rotina semanal (Lições 16–17–18). Reforça o padrão <span class="en" data-say="on Wednesdays">On + dia</span> e adiciona a pronúncia mais difícil dos dias. Falta só o cardio de quinta (próxima lição) para completar sua semana de treino.',

  revisao: [
    "<strong>Wednesday</strong> = “UÊNZ-dei” (primeiro d é mudo).",
    "Treino de perna é <strong>legs</strong> (plural) — leg day.",
    "Padrão da semana: <strong>On + dia no plural</strong>.",
    "Músculos: legs, glutes, calves, arms, abs.",
    "“Never <strong>skip leg day</strong>”."
  ]
});
