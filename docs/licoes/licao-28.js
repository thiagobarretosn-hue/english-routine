/* Lição 28 — I have an English class at 7 p.m. with my teacher Átilas.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:5, capituloNome:"Class, Sports & Therapy", licao:28,
    tituloEn:"I have an English class at 7 p.m. with my teacher Átilas.", tituloPt:"Tenho aula de inglês às 19h com o professor Átilas." },

  hero: { time:"VOLUME 1 · CAP. 5 — CLASS, SPORTS & THERAPY · LIÇÃO 28",
    en:"I have an English class at 7 p.m. with my teacher Átilas.", pt:"Tenho aula de inglês às 19h com o professor Átilas." },

  naturalLiteral: {
    natural:"I have an English class at 7 p.m. with my teacher Átilas.",
    literal:"Eu tenho uma aula de inglês às 7 da noite com meu professor Átilas.",
    nota:'Aula se “tem/faz” com <span class="en" data-say="have">have</span> (have a class). E cuidado: é <span class="en" data-say="an English class">an English class</span> — com <strong>an</strong>, porque “English” começa com som de vogal.'
  },

  estrutura: {
    linhas: [
      { palavra:"I have", classe:"sujeito + verbo", funcao:"a ação (ter)", traducao:"eu tenho", hl:true },
      { palavra:"an English class", classe:"artigo + adjetivo + substantivo", funcao:"o quê", traducao:"uma aula de inglês", hl:true },
      { palavra:"at 7 p.m.", classe:"expressão de tempo", funcao:"o horário", traducao:"às 7 da noite" },
      { palavra:"with my teacher", classe:"with + pessoa", funcao:"com quem", traducao:"com meu professor" }
    ],
    nota:'Em inglês o idioma vira <strong>adjetivo</strong> antes de “class”: <span class="en" data-say="an English class">an English class</span> (uma aula de inglês), <span class="en" data-say="a Spanish class">a Spanish class</span>. E <span class="en" data-say="teacher">teacher</span> = professor (de aula/escola).'
  },

  molde: {
    intro:"O molde de aulas:",
    formula:"I have a/an + [matéria] + class/lesson",
    exemplos: [
      { en:"I have a math class.", pt:"Tenho aula de matemática." },
      { en:"I have a piano lesson.", pt:"Tenho aula de piano." },
      { en:"I take English classes.", pt:"Faço aulas de inglês." }
    ],
    nota:'<span class="en" data-say="have a class">have a class</span> e <span class="en" data-say="take a class">take a class</span> — as duas funcionam. <span class="en" data-say="class">class</span> (turma/aula) e <span class="en" data-say="lesson">lesson</span> (aula/lição) são quase sinônimos.'
  },

  conjugacao: {
    verbo: { base:"have a class", past:"had a class", irregular:true, ptPast:"eu tive aula", ptFut:"eu vou ter aula" },
    nota:'have → has (Lição 8).',
    linhas: [
      { p:"I", en:"I have a class", say:"I have an English class.", pt:"eu tenho aula" },
      { p:"you", en:"you have a class", say:"You have an English class.", pt:"você tem aula" },
      { p:"we", en:"we have a class", say:"We have an English class.", pt:"nós temos aula" },
      { p:"they", en:"they have a class", say:"They have an English class.", pt:"eles têm aula" },
      { p:"he", en:"he <strong>has</strong> a class", say:"He has an English class.", pt:"ele tem aula", hl:true },
      { p:"she", en:"she <strong>has</strong> a class", say:"She has an English class.", pt:"ela tem aula", hl:true },
      { p:"it", en:"it <strong>has</strong>", say:"It has.", pt:"(coisa) tem", hl:true }
    ]
  },

  formas: {
    intro:'Passado had.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't have a class today.", pt:"Não tenho aula hoje." },
      { tag:"?", tagType:"bad", en:"Do you have an English class?", pt:"Você tem aula de inglês?" },
      { tag:"passado", en:"I had an English class at 7.", pt:"Tive aula de inglês às 7. (have → had)" },
      { tag:"futuro", en:"I will have an English class at 7.", pt:"Vou ter aula de inglês às 7." }
    ],
    nota:'É a mesma coisa que você está fazendo agora: <span class="en" data-say="I have English classes with my teacher.">I have English classes with my teacher.</span>'
  },

  speakNaturally: {
    intro:"Formas naturais de falar da sua aula:",
    linhas: [
      { en:"I take English classes.", pt:"Faço aulas de inglês." },
      { en:"I have English lessons at 7.", pt:"Tenho aulas de inglês às 7." },
      { en:"I study English with a teacher.", pt:"Estudo inglês com um professor." },
      { en:"My English class is at 7.", pt:"Minha aula de inglês é às 7." },
      { en:"I have a lesson with Átilas at 7.", pt:"Tenho aula com o Átilas às 7." }
    ],
    nota:'<span class="en" data-say="take a class">take a class</span> foca em “fazer/frequentar” a aula; <span class="en" data-say="have a class">have a class</span> foca em “ter” a aula na agenda. Ambos naturais.'
  },

  expressoes: [
    { en:"have a class", pt:"ter aula" },
    { en:"take a class", pt:"fazer/frequentar uma aula" },
    { en:"an English lesson", pt:"uma aula de inglês" },
    { en:"my teacher", pt:"meu professor" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"class", ipa:"/klæs/", soa:"“clés”", sentido:"aula / turma" },
      { palavra:"teacher", ipa:"/ˈtiːtʃər/", soa:"“TÍi-tcher”", sentido:"professor" },
      { palavra:"English", ipa:"/ˈɪŋɡlɪʃ/", soa:"“ÍN-glish”", sentido:"inglês" }
    ],
    fraseSoa:"ai rév an ÍN-glish clés ét séven pí-ém uith mai TÍi-tcher Átilas",
    fraseIpa:"/aɪ hæv ən ˈɪŋɡlɪʃ klæs æt ˈsɛvən ˌpiː ˈɛm/",
    notaPron:'<span class="en" data-say="English">English</span> tem som de vogal no começo (“ÍN…”), por isso o artigo é <strong>an</strong>. E <span class="en" data-say="teacher">teacher</span> tem o “tch” duas vezes de cara: “TÍi-tcher”.',
    cultura:'Diferença importante: <span class="en" data-say="teacher">teacher</span> = professor (aula, escola, curso); <span class="en" data-say="professor">professor</span> = professor <em>universitário</em> (título acadêmico). Seu Átilas é seu <strong>teacher</strong>.'
  },

  erros: [
    { tipo:"bad", texto:"I have a English class.", nota:"Antes de som de vogal, use <strong>an</strong>: an English class." },
    { tipo:"good", en:"I have an English class.", nota:"—" },
    { tipo:"bad", texto:"I do an English class.", nota:"Aula se <strong>have</strong>/<strong>take</strong>, não “do”." },
    { tipo:"bad", texto:"a class of English.", nota:"O idioma vira adjetivo: <strong>an English class</strong>." }
  ],

  dica: {
    texto:'<strong>a</strong> antes de consoante, <strong>an</strong> antes de vogal — a mesma regra da Lição 7. Toque e ouça:',
    chips:["an English class","a math class","a piano lesson","an online class"],
    nota:"an English / an online (vogal) × a math / a piano (consoante)."
  },

  dialogo: [
    { who:"A", en:"Do you study English?", pt:"Você estuda inglês?" },
    { who:"B", en:"Yeah, I have an English class at 7 with my teacher Átilas.", pt:"Sim, tenho aula de inglês às 7 com o professor Átilas." },
    { who:"A", en:"Nice, evening classes. How often?", pt:"Legal, aulas à noite. Com que frequência?" },
    { who:"B", en:"Twice a week.", pt:"Duas vezes por semana." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete o artigo (som de vogal):", before:"I have", after:"English class.", resposta:"an" },
    { tipo:"completar", q:"Complete o verbo (ter aula):", before:"I", after:"a class at 7.", resposta:"have" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["an","I","class","have","English"], resposta:"I have an English class." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela tem uma aula de inglês às 7.", resposta:"She has an English class at 7." },
    { tipo:"transformar", q:"Transforme", base:"I have an English class at 7 p.m.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't have an English class at 7 p.m." },
      { tag:"?", tagType:"bad", en:"Do you have an English class at 7 p.m.?" },
      { tag:"passado", en:"I had an English class at 7 p.m." },
      { tag:"futuro", en:"I will have an English class at 7 p.m." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com have a/an + matéria + class.", exemplo:"I have a Spanish class on Fridays." }
  ],

  flashcards: [
    { pt:"Tenho aula de inglês às 7.", en:"I have an English class at 7." },
    { pt:"Estudo inglês com um professor.", en:"I study English with a teacher." }
  ],

  conexao:'Abre o <strong>Capítulo 5</strong>. Junta o <span class="en" data-say="have">have</span> (Lição 26), o <span class="en" data-say="with">with</span> + pessoa e a regra <span class="en" data-say="a">a</span>/<span class="en" data-say="an">an</span> da Lição 7. E é literalmente o que você faz: aula de inglês à noite.',

  revisao: [
    "<strong>have</strong>/<strong>take a class</strong> = ter/fazer aula.",
    "<strong>an</strong> English class (som de vogal → an).",
    "Idioma vira adjetivo: <strong>an English class</strong>.",
    "<strong>teacher</strong> (professor de aula) × <strong>professor</strong> (universitário).",
    "<strong>with</strong> + pessoa: with my teacher."
  ]
});
