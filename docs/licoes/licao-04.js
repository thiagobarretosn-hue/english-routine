/* Lição 4 — I turn on my computer after I make my bed.  (dado; renderizado por app.js) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:1, capituloNome:"Morning", licao:4,
    tituloEn:"I turn on my computer after I make my bed.", tituloPt:"Eu ligo o computador depois de arrumar a cama." },

  hero: { time:"VOLUME 1 · CAP. 1 — MORNING · LIÇÃO 04",
    en:"I turn on my computer after I make my bed.", pt:"Eu ligo o computador depois de arrumar a cama." },

  naturalLiteral: {
    natural:"I turn on my computer after I make my bed.",
    literal:"Eu viro ligado meu computador depois que eu faço minha cama.",
    nota:'<span class="en" data-say="turn on">turn on</span> é um <em>phrasal verb</em> que significa <strong>ligar</strong> (aparelhos). Não traduza palavra por palavra — “turn” sozinho é “virar”, mas <span class="en" data-say="turn on">turn on</span> junto é “ligar”. Esta frase também junta tudo que você já sabe: <span class="en" data-say="after">after</span> + oração (Lição 2) e <span class="en" data-say="make my bed">make my bed</span> (Lição 3).'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"turn on", classe:"phrasal verb", funcao:"a ação (ligar)", traducao:"ligar", hl:true },
      { palavra:"my computer", classe:"possessivo + substantivo", funcao:"o objeto", traducao:"meu computador" },
      { palavra:"after", classe:"conjunção", funcao:"liga as ações no tempo", traducao:"depois que", hl:true },
      { palavra:"I make my bed", classe:"oração", funcao:"a ação anterior", traducao:"eu arrumo a cama" }
    ],
    nota:'Detalhe importante do <span class="en" data-say="turn on">turn on</span>: ele é <strong>separável</strong>. Dá para dizer <span class="en" data-say="turn on my computer">turn on my computer</span> ou <span class="en" data-say="turn my computer on">turn my computer on</span>. Mas com pronome, ele fica <em>sempre no meio</em>: <span class="en" data-say="turn it on">turn it on</span> (nunca “turn on it”).'
  },

  molde: {
    intro:"O molde do <strong>turn on</strong> + aparelho:",
    formula:"I turn on + [aparelho]",
    exemplos: [
      { en:"I turn on the TV.", pt:"Eu ligo a TV." },
      { en:"I turn on the lights.", pt:"Eu acendo as luzes." },
      { en:"I turn on the AC.", pt:"Eu ligo o ar-condicionado." }
    ],
    nota:'O oposto é <span class="en" data-say="turn off">turn off</span> (desligar): <span class="en" data-say="I turn off the lights.">I turn off the lights.</span> Dois phrasal verbs pelo preço de um.'
  },

  conjugacao: {
    nota:'A 3ª pessoa leva <strong>-s</strong> no verbo principal (turn → turn<strong>s</strong>), e o <span class="en" data-say="on">on</span> continua logo depois.',
    linhas: [
      { p:"I", en:"I turn on my computer", say:"I turn on my computer.", pt:"eu ligo meu computador" },
      { p:"you", en:"you turn on your computer", say:"You turn on your computer.", pt:"você liga seu computador" },
      { p:"we", en:"we turn on our computers", say:"We turn on our computers.", pt:"nós ligamos nossos computadores" },
      { p:"they", en:"they turn on their computers", say:"They turn on their computers.", pt:"eles ligam seus computadores" },
      { p:"he", en:"he turn<strong>s</strong> on his computer", say:"He turns on his computer.", pt:"ele liga o computador dele", hl:true },
      { p:"she", en:"she turn<strong>s</strong> on her computer", say:"She turns on her computer.", pt:"ela liga o computador dela", hl:true },
      { p:"it", en:"it turn<strong>s</strong> on", say:"It turns on.", pt:"(coisa) liga", hl:true }
    ]
  },

  formas: {
    intro:'No passado, os dois verbos mudam: <span class="en" data-say="turn">turn</span> é regular (turned), <span class="en" data-say="make">make</span> é irregular (made).',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't turn on my computer after I make my bed.", pt:"Eu não ligo o computador depois de arrumar a cama." },
      { tag:"?", tagType:"bad", en:"Do you turn on your computer after you make your bed?", pt:"Você liga o computador depois de arrumar a cama?" },
      { tag:"passado", en:"I turned on my computer after I made my bed.", pt:"Liguei o computador depois que arrumei a cama." },
      { tag:"futuro", en:"I will turn on my computer after I make my bed.", pt:"Vou ligar o computador depois de arrumar a cama." }
    ],
    nota:'<span class="en" data-say="turn">turn</span> → <span class="en" data-say="turned">turned</span> (regular, som “târnd”).'
  },

  speakNaturally: {
    intro:"Como americanos realmente dizem “ligar o computador”:",
    linhas: [
      { en:"I boot up my computer.", pt:"Eu inicializo o computador." },
      { en:"I fire up my laptop.", pt:"Eu ligo o notebook. (informal)" },
      { en:"I switch on my computer.", pt:"Eu ligo o computador. (mais britânico)" },
      { en:"The first thing I do is turn on my computer.", pt:"A primeira coisa que faço é ligar o computador." },
      { en:"I get my computer going.", pt:"Eu coloco o computador para funcionar." }
    ],
    nota:'<span class="en" data-say="boot up">boot up</span> e <span class="en" data-say="fire up">fire up</span> são super comuns no ambiente de trabalho — bom soar natural numa reunião.'
  },

  expressoes: [
    { en:"turn on", pt:"ligar (aparelho)" },
    { en:"turn off", pt:"desligar" },
    { en:"turn up", pt:"aumentar (volume)" },
    { en:"turn down", pt:"abaixar / recusar" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"turn on", ipa:"/tɜːrn ɒn/", soa:"“târn ón”", sentido:"ligar" },
      { palavra:"computer", ipa:"/kəmˈpjuːtər/", soa:"“kâm-PIÚ-ter”", sentido:"computador" },
      { palavra:"after", ipa:"/ˈæftər/", soa:"“áfter”", sentido:"depois que" }
    ],
    fraseSoa:"ai târn ón mai kâm-PIÚ-ter áfter ai mêik mai béd",
    fraseIpa:"/aɪ tɜːrn ɒn maɪ kəmˈpjuːtər ˈæftər aɪ meɪk maɪ bɛd/",
    notaPron:'<span class="en" data-say="computer">computer</span> tem a força na 2ª sílaba: “kâm-<strong>PIÚ</strong>-ter”, não “COM-puter”. E o começo é “kâm”, não “com”.',
    cultura:'No trabalho, você vai ouvir muito <span class="en" data-say="Let me boot up my computer.">“Let me boot up my computer.”</span> ou <span class="en" data-say="My computer is booting up.">“My computer is booting up.”</span> — mais natural que “turn on” em contexto de TI.'
  },

  erros: [
    { tipo:"bad", texto:"I open my computer.", nota:"Aparelho se “liga” (turn on), não se “abre”. “Open” é para arquivos/programas. Erro clássico de brasileiro." },
    { tipo:"good", en:"I turn on my computer.", nota:"—" },
    { tipo:"bad", texto:"I turn on it.", nota:"Com pronome, ele vai no meio: turn it on." },
    { tipo:"bad", texto:"...after make my bed.", nota:"Depois de after precisa do sujeito: after I make my bed." }
  ],

  dica: {
    texto:'Pense num <strong>interruptor</strong>: <span class="en" data-say="on">ON</span> = ligado (energia entra), <span class="en" data-say="off">OFF</span> = desligado. É a mesma palavra do interruptor de parede em inglês. Sua manhã completa agora é uma sequência de 4 ações:',
    chips:["wake up","brush my teeth","make my bed","turn on my computer"],
    nota:"Toque em cada uma e diga em voz alta, na ordem. Essa é a sua manhã inteira em inglês — o Capítulo 1 fechado."
  },

  dialogo: [
    { who:"A", en:"What do you do first when you start working?", pt:"O que você faz primeiro quando começa a trabalhar?" },
    { who:"B", en:"I turn on my computer and check my email.", pt:"Ligo o computador e checo meus emails." },
    { who:"A", en:"Same. I turn it on and grab a coffee while it boots up.", pt:"Igual. Ligo ele e pego um café enquanto ele inicia." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete o phrasal verb:", before:"I turn", after:"my computer.", resposta:"on" },
    { tipo:"completar", q:"Complete com o pronome no lugar certo:", before:"I turn", after:"on.", resposta:"it", dica:"o pronome vai no meio do phrasal verb." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["computer","on","turn","I","my"], resposta:"I turn on my computer." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele liga o computador depois que arruma a cama.", resposta:"He turns on his computer after he makes his bed." },
    { tipo:"transformar", q:"Transforme", base:"I turn on my computer after I make my bed.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't turn on my computer after I make my bed." },
      { tag:"?", tagType:"bad", en:"Do you turn on your computer after you make your bed?" },
      { tag:"passado", en:"I turned on my computer after I made my bed." },
      { tag:"futuro", en:"I will turn on my computer after I make my bed." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com turn on ou turn off.", exemplo:"I turn off the lights before I leave." }
  ],

  flashcards: [
    { pt:"Ligo o computador e checo meus emails.", en:"I turn on my computer and check my email." },
    { pt:"Desligo o computador à noite.", en:"I turn off my computer at night." }
  ],

  conexao:'Esta é a primeira frase que <strong>junta várias peças</strong> que você já domina: o phrasal verb novo <span class="en" data-say="turn on">turn on</span> + <span class="en" data-say="after">after</span> (Lição 2) + <span class="en" data-say="make my bed">make my bed</span> (Lição 3). Com ela, você fecha o <strong>Capítulo 1 — Morning</strong>. Sua manhã inteira em inglês: <span class="en" data-say="I wake up, I brush my teeth, I make my bed, and I turn on my computer.">I wake up, I brush my teeth, I make my bed, and I turn on my computer.</span>',

  revisao: [
    "<strong>turn on</strong> = ligar (aparelho); <strong>turn off</strong> = desligar. Nunca “open the computer”.",
    "Phrasal verb separável: turn on the TV / turn the TV on / <strong>turn it on</strong> (pronome no meio).",
    "Revisão do <strong>after + oração</strong> e do <strong>make my bed</strong>.",
    "Passado: turn → turned (regular), make → made (irregular).",
    "🏁 Capítulo 1 completo: acordar → dentes → cama → computador."
  ]
});
