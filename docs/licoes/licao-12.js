/* Lição 12 — I take a shower and brush my teeth after breakfast.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:12,
    tituloEn:"I take a shower and brush my teeth after breakfast.", tituloPt:"Eu tomo banho e escovo os dentes depois do café da manhã." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 12",
    en:"I take a shower and brush my teeth after breakfast.", pt:"Eu tomo banho e escovo os dentes depois do café da manhã." },

  naturalLiteral: {
    natural:"I take a shower and brush my teeth after breakfast.",
    literal:"Eu pego um banho e escovo meus dentes depois do café da manhã.",
    nota:'Banho se “toma” com <span class="en" data-say="take">take</span>: <span class="en" data-say="take a shower">take a shower</span>. E aqui o <span class="en" data-say="after">after</span> vem com um <strong>substantivo</strong> (after breakfast), diferente da Lição 2, onde vinha com oração (after I wake up).'
  },

  estrutura: {
    linhas: [
      { palavra:"I take a shower", classe:"verbo + a + substantivo", funcao:"1ª ação (tomar banho)", traducao:"eu tomo banho", hl:true },
      { palavra:"and", classe:"conjunção", funcao:"liga a 2ª ação", traducao:"e" },
      { palavra:"brush my teeth", classe:"verbo + objeto", funcao:"2ª ação", traducao:"escovo os dentes" },
      { palavra:"after breakfast", classe:"after + substantivo", funcao:"quando", traducao:"depois do café" }
    ],
    nota:'<span class="en" data-say="take">take</span> é coringa como o <span class="en" data-say="make">make</span>: take a shower, take a nap, take a break, take a walk. E <span class="en" data-say="after">after</span> aceita as duas formas — after + <em>substantivo</em> (after breakfast) ou after + <em>oração</em> (after I eat).'
  },

  molde: {
    intro:"O molde do take a + substantivo:",
    formula:"I take a + [shower / nap / break / walk]",
    exemplos: [
      { en:"I take a nap after lunch.", pt:"Tiro um cochilo depois do almoço." },
      { en:"I take a break at 3.", pt:"Faço uma pausa às 3." },
      { en:"I take a walk in the evening.", pt:"Dou uma caminhada à noite." }
    ],
    nota:'Cuidado: <span class="en" data-say="shower">shower</span> é chuveiro; <span class="en" data-say="bath">bath</span> é banheira. “Take a shower” (banho de chuveiro) ≠ “take a bath” (banho de banheira).'
  },

  conjugacao: {
    nota:'take → he takes. O <span class="en" data-say="a">a</span> (um) continua antes de shower.',
    linhas: [
      { p:"I", en:"I take a shower", say:"I take a shower.", pt:"eu tomo banho" },
      { p:"you", en:"you take a shower", say:"You take a shower.", pt:"você toma banho" },
      { p:"we", en:"we take showers", say:"We take showers.", pt:"nós tomamos banho" },
      { p:"they", en:"they take showers", say:"They take showers.", pt:"eles tomam banho" },
      { p:"he", en:"he take<strong>s</strong> a shower", say:"He takes a shower.", pt:"ele toma banho", hl:true },
      { p:"she", en:"she take<strong>s</strong> a shower", say:"She takes a shower.", pt:"ela toma banho", hl:true },
      { p:"it", en:"it take<strong>s</strong>", say:"It takes.", pt:"(coisa) leva/pega", hl:true }
    ]
  },

  formas: {
    intro:'⚠️ Passado irregular: take → <span class="en" data-say="took">took</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't take a shower after breakfast.", pt:"Eu não tomo banho depois do café." },
      { tag:"?", tagType:"bad", en:"Do you take a shower after breakfast?", pt:"Você toma banho depois do café?" },
      { tag:"passado", en:"I took a shower after breakfast.", pt:"Tomei banho depois do café. (take → took)" },
      { tag:"futuro", en:"I will take a shower after breakfast.", pt:"Vou tomar banho depois do café." }
    ],
    nota:'<span class="en" data-say="took">took</span> (não “taked”). É irmão de outros irregulares que você verá: shake → shook, mistake → mistook.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você toma banho:",
    linhas: [
      { en:"I hop in the shower.", pt:"Pulo no banho. (informal)" },
      { en:"I shower after breakfast.", pt:"Tomo banho depois do café. (shower como verbo)" },
      { en:"I take a quick shower.", pt:"Tomo um banho rápido." },
      { en:"I freshen up.", pt:"Me arrumo / dou um trato." },
      { en:"I get cleaned up.", pt:"Me limpo / fico apresentável." }
    ],
    nota:'<span class="en" data-say="shower">shower</span> também funciona como verbo: <span class="en" data-say="I shower every morning.">I shower every morning.</span> — sem o “take a”.'
  },

  expressoes: [
    { en:"take a shower", pt:"tomar banho (de chuveiro)" },
    { en:"take a nap", pt:"tirar um cochilo" },
    { en:"take a break", pt:"fazer uma pausa" },
    { en:"take a walk", pt:"dar uma caminhada" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"take", ipa:"/teɪk/", soa:"“têik”", sentido:"pegar / tomar" },
      { palavra:"shower", ipa:"/ˈʃaʊər/", soa:"“CHÁ-uer”", sentido:"banho / chuveiro" },
      { palavra:"after", ipa:"/ˈæftər/", soa:"“áfter”", sentido:"depois de" }
    ],
    fraseSoa:"ai têik â CHÁ-uer end brâsh mai títh áfter BRÉK-fâst",
    fraseIpa:"/aɪ teɪk ə ˈʃaʊər ænd brʌʃ maɪ tiːθ ˈæftər ˈbrɛkfəst/",
    notaPron:'<span class="en" data-say="shower">shower</span> começa com o som “ch” (/ʃ/) e tem o ditongo “áu”: “CHÁ-uer”. Não é “xóuer” nem “chóver”.',
    cultura:'<span class="en" data-say="hop in the shower">“hop in the shower”</span> (literalmente “pular no chuveiro”) é o jeito informal e comuníssimo de dizer que vai tomar banho rápido.'
  },

  erros: [
    { tipo:"bad", texto:"I take a bath (querendo chuveiro).", nota:"<strong>bath</strong> é banheira; para chuveiro use <strong>take a shower</strong>." },
    { tipo:"bad", texto:"I make a shower.", nota:"Banho se “toma” com <strong>take</strong>, não “make”." },
    { tipo:"bad", texto:"after I breakfast.", nota:"breakfast não é verbo. Use <strong>after breakfast</strong> (substantivo) ou after I <em>have</em> breakfast." },
    { tipo:"bad", texto:"I taked a shower.", nota:"Passado é <strong>took</strong> (irregular)." }
  ],

  dica: {
    texto:'<span class="en" data-say="take">take</span> é coringa igual ao <span class="en" data-say="make">make</span>. Guarde o pacote:',
    chips:["take a shower","take a nap","take a break","take a walk"],
    nota:"Toque em cada uma. E lembre: after + substantivo (after breakfast) OU after + oração (after I eat) — os dois valem."
  },

  dialogo: [
    { who:"A", en:"When do you shower?", pt:"Quando você toma banho?" },
    { who:"B", en:"I take a shower after breakfast.", pt:"Tomo banho depois do café." },
    { who:"A", en:"I shower first thing, before anything else.", pt:"Eu tomo banho logo de cara, antes de tudo." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete o verbo do banho:", before:"I", after:"a shower.", resposta:"take" },
    { tipo:"completar", q:"Complete (after + o quê):", before:"I brush my teeth after", after:".", resposta:"breakfast", wide:true, dica:"substantivo da refeição." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["a","I","shower","take"], resposta:"I take a shower." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele toma banho depois do café.", resposta:"He takes a shower after breakfast." },
    { tipo:"transformar", q:"Transforme", base:"I take a shower after breakfast.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't take a shower after breakfast." },
      { tag:"?", tagType:"bad", en:"Do you take a shower after breakfast?" },
      { tag:"passado", en:"I took a shower after breakfast." },
      { tag:"futuro", en:"I will take a shower after breakfast." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com take a + substantivo.", exemplo:"I take a nap after lunch." }
  ],

  flashcards: [
    { pt:"Tomo um banho rápido.", en:"I take a quick shower." },
    { pt:"Ele tomou banho depois do café.", en:"He took a shower after breakfast." }
  ],

  conexao:'Reencontra o <span class="en" data-say="brush my teeth">brush my teeth</span> da Lição 2 e o <span class="en" data-say="after">after</span> — agora com substantivo (after breakfast). O verbo coringa <span class="en" data-say="take">take</span> vai reaparecer no Capítulo 4 em <span class="en" data-say="take off">take off my clothes</span>.',

  revisao: [
    "<strong>take a shower</strong> (chuveiro) ≠ take a bath (banheira).",
    "<strong>take</strong> é coringa: take a nap / break / walk.",
    "<strong>after</strong> + substantivo (after breakfast) OU + oração (after I eat).",
    "Passado irregular: take → <strong>took</strong>.",
    "<strong>shower</strong> também é verbo: I shower every morning."
  ]
});
