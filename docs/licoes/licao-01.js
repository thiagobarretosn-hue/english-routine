/* Lição 1 — I wake up at 8 a.m.  (dado; renderizado por app.js) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:1, capituloNome:"Morning", licao:1,
    tituloEn:"I wake up at 8 a.m.", tituloPt:"Eu acordo às 8:00 da manhã." },

  hero: { time:"VOLUME 1 · CAP. 1 — MORNING · LIÇÃO 01",
    en:"I wake up at 8 a.m.", pt:"Eu acordo às 8:00 da manhã." },

  naturalLiteral: {
    natural:"I wake up at 8 a.m.",
    literal:"Eu acordo às 8 da manhã.",
    nota:'Detalhe fino: em inglês <span class="en" data-say="a.m.">a.m.</span> já significa “da manhã”, então você <em>não</em> diz <span class="wrong">in the morning</span> junto.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"quem faz a ação", traducao:"eu" },
      { palavra:"wake up", classe:"phrasal verb", funcao:"o verbo (a ação)", traducao:"acordar", hl:true },
      { palavra:"at", classe:"preposição", funcao:"marca o horário exato", traducao:"às" },
      { palavra:"8 a.m.", classe:"expressão de tempo", funcao:"o horário", traducao:"8 da manhã" }
    ],
    nota:'<strong>wake up</strong> é um <em>phrasal verb</em>: verbo + partícula que andam juntos. <span class="en" data-say="wake">wake</span> sozinho soa incompleto na rotina; o natural é sempre <span class="en" data-say="wake up">wake up</span>.'
  },

  molde: {
    intro:"Não decore a frase. Guarde o <strong>molde</strong>. Trocando só o verbo você gera dezenas de frases:",
    formula:"I + verbo + at + horário",
    exemplos: [
      { en:"I start work at 8.", pt:"Eu começo a trabalhar às 8." },
      { en:"I leave at 6.", pt:"Eu saio às 6." },
      { en:"I have lunch at noon.", pt:"Eu almoço ao meio-dia." }
    ],
    nota:"Mesma estrutura, verbos diferentes. Você aprendeu um <em>padrão</em>, não uma frase."
  },

  conjugacao: {
    nota:"No Simple Present, apenas <strong>he / she / it</strong> ganham <strong>-s</strong> no verbo. O resto é igual.",
    linhas: [
      { p:"I", en:"I wake up", say:"I wake up at 8.", pt:"eu acordo" },
      { p:"you", en:"you wake up", say:"You wake up at 8.", pt:"você acorda" },
      { p:"we", en:"we wake up", say:"We wake up at 8.", pt:"nós acordamos" },
      { p:"they", en:"they wake up", say:"They wake up at 8.", pt:"eles acordam" },
      { p:"he", en:"he wake<strong>s</strong> up", say:"He wakes up at 8.", pt:"ele acorda", hl:true },
      { p:"she", en:"she wake<strong>s</strong> up", say:"She wakes up at 8.", pt:"ela acorda", hl:true },
      { p:"it", en:"it wake<strong>s</strong> up", say:"It wakes up at 8.", pt:"ele/ela (coisa) acorda", hl:true }
    ]
  },

  formas: {
    intro:'Repare no “ajudante” (<span class="en" data-say="do">do</span> / <span class="en" data-say="does">does</span> / <span class="en" data-say="did">did</span> / <span class="en" data-say="will">will</span>). Quando ele aparece, o verbo principal volta à forma base (sem <strong>-s</strong>).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't wake up at 8.", pt:"Eu não acordo às 8." },
      { tag:"?", tagType:"bad", en:"Do you wake up at 8?", pt:"Você acorda às 8?" },
      { tag:"passado", en:"I woke up at 8.", pt:"Eu acordei às 8. (wake → woke, irregular)" },
      { tag:"futuro", en:"I will wake up at 8.", pt:"Eu vou acordar às 8." }
    ],
    nota:"Passado e futuro aparecem aqui como <em>prévia</em> — eles ganham capítulos inteiros nos Volumes 2 e 3, reencontrando esta mesma frase."
  },

  speakNaturally: {
    intro:"Todas dizem a mesma ideia. Ouça e escolha sua favorita:",
    linhas: [
      { en:"I usually wake up around 8.", pt:"Normalmente acordo por volta das 8." },
      { en:"I'm usually up by 8.", pt:"Normalmente já estou de pé às 8." },
      { en:"I get up around 8.", pt:"Eu me levanto por volta das 8." },
      { en:"I wake up pretty early.", pt:"Eu acordo bem cedo." },
      { en:"I'm an early riser.", pt:"Sou de acordar cedo." }
    ],
    nota:"<strong>wake up</strong> = abrir os olhos. <strong>get up</strong> = sair da cama. Americanos usam os dois o tempo todo."
  },

  expressoes: [
    { en:"wake up early", pt:"acordar cedo" },
    { en:"wake up late", pt:"acordar tarde" },
    { en:"wake up tired", pt:"acordar cansado" },
    { en:"wake up refreshed", pt:"acordar descansado" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"wake up", ipa:"/weɪk ʌp/", soa:"“uêik âp”", sentido:"acordar" },
      { palavra:"at", ipa:"/æt/", soa:"“ét”", sentido:"às (horário)" },
      { palavra:"a.m.", ipa:"/ˌeɪ ˈɛm/", soa:"“êi ém”", sentido:"da manhã" }
    ],
    fraseSoa:"ai uêik âp ét êit êi-ém",
    fraseIpa:"/aɪ weɪk ʌp æt eɪt eɪ ˈɛm/",
    notaPron:"Na fala rápida, o <strong>t</strong> de <span class=\"en\" data-say=\"at\">at</span> quase some — vira “a(t)_eight”.",
    cultura:"a pergunta que você vai ouvir é <span class=\"en\" data-say=\"What time do you usually wake up?\">What time do you usually wake up?</span> (“Que horas você costuma acordar?”). Responder <span class=\"en\" data-say=\"I usually wake up around 8.\">I usually wake up around 8.</span> soa muito mais natural do que só “I wake up at 8”."
  },

  erros: [
    { tipo:"bad", texto:"I am wake up at 8.", nota:"Não existe “am” aqui. O presente simples não usa to be + verbo." },
    { tipo:"good", en:"I wake up at 8.", nota:"—" },
    { tipo:"bad", texto:"He wake up.", nota:"Faltou o -s da 3ª pessoa." },
    { tipo:"good", en:"He wakes up.", nota:"—" },
    { tipo:"bad", texto:"I wake up at 8 in the morning a.m.", nota:"a.m. já é “da manhã”. Escolha um dos dois." }
  ],

  dica: {
    texto:"Visualize sua manhã como uma <strong>linha do tempo</strong>, não como palavras soltas:",
    chips:["wake up","brush my teeth","make my bed","have breakfast"],
    nota:"Toque em cada uma. Ver a ação acontecer fixa muito mais rápido do que traduzir palavra por palavra — e já te dá o gancho para as próximas lições."
  },

  dialogo: [
    { who:"A", en:"Hey, what time do you usually wake up?", pt:"Ei, que horas você costuma acordar?" },
    { who:"B", en:"I usually wake up at 8. What about you?", pt:"Normalmente acordo às 8. E você?" },
    { who:"A", en:"I'm an early riser. I'm up by 6.", pt:"Eu acordo cedo. Estou de pé às 6." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete:", before:"I", after:"up at 8 a.m.", resposta:"wake" },
    { tipo:"completar", q:"Complete (cuidado com a 3ª pessoa):", before:"He", after:"at 7.", resposta:"wakes up", wide:true, dica:"dois verbos, e um deles leva -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["up","wake","I","at","8","a.m."], resposta:"I wake up at 8 a.m." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Eu não acordo tarde.", resposta:"I don't wake up late." },
    { tipo:"transformar", q:"Transforme", base:"I wake up at 8 a.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't wake up at 8 a.m." },
      { tag:"?", tagType:"bad", en:"Do you wake up at 8 a.m.?" },
      { tag:"passado", en:"I woke up at 8 a.m." },
      { tag:"futuro", en:"I will wake up at 8 a.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase sua com o molde “I + verbo + at + horário”.", exemplo:"I have lunch at noon." }
  ],

  flashcards: [
    { pt:"Normalmente acordo por volta das 8.", en:"I usually wake up around 8." },
    { pt:"Sou de acordar cedo.", en:"I'm an early riser." }
  ],

  revisao: [
    "O molde <strong>I + verbo + at + horário</strong> gera dezenas de frases.",
    "<strong>wake up</strong> (abrir os olhos) ≠ <strong>get up</strong> (sair da cama).",
    "Só <strong>he/she/it</strong> ganham <strong>-s</strong>; com do/does/did/will o verbo volta à base.",
    "<strong>at</strong> marca horário exato; <strong>a.m.</strong> já significa “da manhã”."
  ]
});
