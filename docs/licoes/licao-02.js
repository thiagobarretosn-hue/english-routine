/* Lição 2 — I brush my teeth after I wake up.  (dado; renderizado por app.js) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:1, capituloNome:"Morning", licao:2,
    tituloEn:"I brush my teeth after I wake up.", tituloPt:"Eu escovo os dentes depois que acordo." },

  hero: { time:"VOLUME 1 · CAP. 1 — MORNING · LIÇÃO 02",
    en:"I brush my teeth after I wake up.", pt:"Eu escovo os dentes depois que acordo." },

  naturalLiteral: {
    natural:"I brush my teeth after I wake up.",
    literal:"Eu escovo meus dentes depois que eu acordo.",
    nota:'Duas coisas soam estranhas ao pé da letra em português, mas são <strong>obrigatórias</strong> em inglês: dizemos <span class="en" data-say="my teeth">my teeth</span> (meus dentes), não “os dentes”; e depois de <span class="en" data-say="after">after</span> vem <em>sujeito + verbo</em> — <span class="en" data-say="after I wake up">after I wake up</span>, não “after wake up”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito (ação 1)", traducao:"eu" },
      { palavra:"brush", classe:"verbo", funcao:"a ação principal", traducao:"escovar", hl:true },
      { palavra:"my teeth", classe:"possessivo + substantivo", funcao:"o objeto", traducao:"meus dentes" },
      { palavra:"after", classe:"conjunção", funcao:"liga as duas ações no tempo", traducao:"depois que", hl:true },
      { palavra:"I wake up", classe:"oração", funcao:"a ação 2 (a que vem antes)", traducao:"eu acordo" }
    ],
    nota:'<span class="en" data-say="after">after</span> aqui é uma <strong>conjunção</strong>: ela precisa de uma oração completa depois (sujeito + verbo). Repare que o <span class="en" data-say="wake up">wake up</span> da Lição 1 voltou — agora dentro de <span class="en" data-say="after I wake up">after I wake up</span>.'
  },

  molde: {
    intro:"O molde desta lição conecta <strong>duas ações</strong> pela ordem no tempo:",
    formula:"[ação 1] + after + [sujeito + ação 2]",
    exemplos: [
      { en:"I make my bed after I wake up.", pt:"Eu arrumo a cama depois que acordo." },
      { en:"I have coffee after I brush my teeth.", pt:"Eu tomo café depois que escovo os dentes." },
      { en:"I check my phone after I get up.", pt:"Eu olho o celular depois que me levanto." }
    ],
    nota:'Você também pode <strong>inverter</strong> a ordem, começando pelo <span class="en" data-say="after">after</span> — aí entra uma vírgula: <span class="en" data-say="After I wake up, I brush my teeth.">After I wake up, I brush my teeth.</span> O sentido é o mesmo.'
  },

  conjugacao: {
    nota:'Duas coisas mudam junto com a pessoa: o <strong>-es</strong> na 3ª pessoa (verbo terminado em <strong>-sh</strong> leva <strong>-es</strong>, não só -s) e o <strong>possessivo</strong> (my → your → his → her...).',
    linhas: [
      { p:"I", en:"I brush my teeth", say:"I brush my teeth.", pt:"eu escovo meus dentes" },
      { p:"you", en:"you brush your teeth", say:"You brush your teeth.", pt:"você escova seus dentes" },
      { p:"we", en:"we brush our teeth", say:"We brush our teeth.", pt:"nós escovamos nossos dentes" },
      { p:"they", en:"they brush their teeth", say:"They brush their teeth.", pt:"eles escovam seus dentes" },
      { p:"he", en:"he brush<strong>es</strong> his teeth", say:"He brushes his teeth.", pt:"ele escova os dentes dele", hl:true },
      { p:"she", en:"she brush<strong>es</strong> her teeth", say:"She brushes her teeth.", pt:"ela escova os dentes dela", hl:true },
      { p:"it", en:"it brush<strong>es</strong>", say:"It brushes.", pt:"(ele/ela — coisa/animal) escova", hl:true }
    ]
  },

  formas: {
    intro:'Como na Lição 1, o “ajudante” (do/does/did/will) faz o verbo voltar à forma base. Repare que no passado <strong>os dois</strong> verbos mudam.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't brush my teeth after I wake up.", pt:"Eu não escovo os dentes depois que acordo." },
      { tag:"?", tagType:"bad", en:"Do you brush your teeth after you wake up?", pt:"Você escova os dentes depois que acorda?" },
      { tag:"passado", en:"I brushed my teeth after I woke up.", pt:"Escovei os dentes depois que acordei. (brush → brushed, regular; wake → woke, irregular)" },
      { tag:"futuro", en:"I will brush my teeth after I wake up.", pt:"Vou escovar os dentes depois que acordar." }
    ],
    nota:'<span class="en" data-say="brush">brush</span> é regular: passado <span class="en" data-say="brushed">brushed</span> (som “brâsht”). Já <span class="en" data-say="wake">wake</span> é irregular: <span class="en" data-say="woke">woke</span>.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer a mesma ideia:",
    linhas: [
      { en:"I brush my teeth right after I wake up.", pt:"Escovo os dentes logo depois de acordar." },
      { en:"As soon as I wake up, I brush my teeth.", pt:"Assim que acordo, escovo os dentes." },
      { en:"The first thing I do is brush my teeth.", pt:"A primeira coisa que faço é escovar os dentes." },
      { en:"I brush my teeth first thing in the morning.", pt:"Escovo os dentes logo de manhã." },
      { en:"I always brush my teeth when I get up.", pt:"Sempre escovo os dentes quando levanto." }
    ],
    nota:'<span class="en" data-say="right after">right after</span> = “logo depois”. <span class="en" data-say="as soon as">as soon as</span> = “assim que” — um vizinho muito útil do <span class="en" data-say="after">after</span>.'
  },

  expressoes: [
    { en:"brush your teeth", pt:"escovar os dentes" },
    { en:"brush your hair", pt:"escovar o cabelo" },
    { en:"a toothbrush", pt:"uma escova de dentes" },
    { en:"brush up on your English", pt:"revisar / aperfeiçoar seu inglês" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"brush", ipa:"/brʌʃ/", soa:"“brâsh”", sentido:"escovar / escova" },
      { palavra:"teeth", ipa:"/tiːθ/", soa:"“títh”", sentido:"dentes (plural de tooth)" },
      { palavra:"after", ipa:"/ˈæftər/", soa:"“áfter”", sentido:"depois (que)" }
    ],
    fraseSoa:"ai brâsh mai títh áfter ai uêik âp",
    fraseIpa:"/aɪ brʌʃ maɪ tiːθ ˈæftər aɪ weɪk ʌp/",
    notaPron:'O <strong>th</strong> de <span class="en" data-say="teeth">teeth</span> é o som /θ/: ponta da língua entre os dentes, soprando — não é “t” nem “f”. E cuidado: singular é <span class="en" data-say="tooth">tooth</span> (um dente), plural é <span class="en" data-say="teeth">teeth</span> (dentes), irregular.',
    cultura:'Nos EUA, <span class="en" data-say="brush your teeth">brush your teeth</span> é a frase clássica que todo pai fala pro filho antes de dormir. E <span class="en" data-say="brush up on">brush up on</span> algo (“brush up on my Spanish”) significa <em>revisar</em> — é exatamente o que você está fazendo com o inglês agora.'
  },

  erros: [
    { tipo:"bad", texto:"I brush the teeth.", nota:"Partes do corpo pedem possessivo: my teeth, não “the teeth”." },
    { tipo:"good", en:"I brush my teeth.", nota:"—" },
    { tipo:"bad", texto:"I brush my teeth after wake up.", nota:"Depois de after precisa do sujeito: after I wake up." },
    { tipo:"good", en:"I brush my teeth after I wake up.", nota:"—" },
    { tipo:"bad", texto:"He brush his teeth.", nota:"Verbo em -sh leva -es na 3ª pessoa: He brushes." },
    { tipo:"bad", texto:"I brush my tooths.", nota:"Plural de tooth é teeth (irregular), nunca “tooths”." }
  ],

  dica: {
    texto:'Pense no <span class="en" data-say="after">after</span> como uma <strong>seta do tempo</strong>. Em “A <span class="en" data-say="after">after</span> B”, o B acontece <em>primeiro</em>. Visualize a sequência:',
    chips:["I wake up","after that","I brush my teeth","then I make my bed"],
    nota:"Truque: sempre que pensar “after”, já espere um <strong>sujeito + verbo</strong> logo em seguida (after I…, after she…). Isso te salva do erro mais comum."
  },

  dialogo: [
    { who:"A", en:"What's the first thing you do in the morning?", pt:"Qual é a primeira coisa que você faz de manhã?" },
    { who:"B", en:"I brush my teeth right after I wake up. What about you?", pt:"Escovo os dentes logo depois de acordar. E você?" },
    { who:"A", en:"I make my bed first, then I brush my teeth.", pt:"Arrumo a cama primeiro, depois escovo os dentes." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete:", before:"I brush my", after:"after I wake up.", resposta:"teeth" },
    { tipo:"completar", q:"Complete a 3ª pessoa (cuidado com o -sh):", before:"She", after:"her teeth.", resposta:"brushes", wide:true, dica:"verbo terminado em -sh." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["teeth","I","my","brush","after","I","wake up"], resposta:"I brush my teeth after I wake up." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele escova os dentes depois que acorda.", resposta:"He brushes his teeth after he wakes up." },
    { tipo:"transformar", q:"Transforme", base:"I brush my teeth after I wake up.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't brush my teeth after I wake up." },
      { tag:"?", tagType:"bad", en:"Do you brush your teeth after you wake up?" },
      { tag:"passado", en:"I brushed my teeth after I woke up." },
      { tag:"futuro", en:"I will brush my teeth after I wake up." }
    ]},
    { tipo:"escrever", q:"Crie uma frase sua com “after I wake up”.", exemplo:"I check my phone after I wake up." }
  ],

  flashcards: [
    { pt:"Assim que acordo, escovo os dentes.", en:"As soon as I wake up, I brush my teeth." },
    { pt:"Ela escova os dentes depois que acorda.", en:"She brushes her teeth after she wakes up." }
  ],

  conexao:'Esta lição pega o <span class="en" data-say="wake up">wake up</span> da Lição 1 e o encaixa numa estrutura maior com <span class="en" data-say="after">after</span>. Você já sabia dizer <em>quando</em> acorda (“at 8 a.m.”); agora sabe dizer o que faz <em>depois</em> de acordar. Nas próximas lições, <span class="en" data-say="after">after</span> vai se repetir muito — é uma das palavras que mais amarra a sua rotina.',

  revisao: [
    "<strong>after + sujeito + verbo</strong> conecta duas ações no tempo (após acordar → escovar).",
    "Partes do corpo pedem <strong>possessivo</strong>: <em>my</em> teeth, não “the teeth”.",
    "<strong>teeth</strong> é o plural irregular de <strong>tooth</strong>.",
    "Verbos terminados em <strong>-sh</strong> levam <strong>-es</strong> na 3ª pessoa: he brush<strong>es</strong>.",
    "Dá para inverter: <em>After I wake up, I brush my teeth</em> (com vírgula)."
  ]
});
