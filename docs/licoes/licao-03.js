/* Lição 3 — I make my bed.  (dado; renderizado por app.js) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:1, capituloNome:"Morning", licao:3,
    tituloEn:"I make my bed.", tituloPt:"Eu arrumo minha cama." },

  hero: { time:"VOLUME 1 · CAP. 1 — MORNING · LIÇÃO 03",
    en:"I make my bed.", pt:"Eu arrumo minha cama." },

  naturalLiteral: {
    natural:"I make my bed.",
    literal:"Eu faço minha cama.",
    nota:'Aqui está o pulo do gato: <span class="en" data-say="make">make</span> normalmente é “fazer/criar”, mas com <span class="en" data-say="bed">bed</span> ele significa <strong>arrumar</strong>. Ninguém “faz” uma cama — a gente arruma. E, como na Lição 2, usamos o possessivo: <span class="en" data-say="my bed">my bed</span> (minha cama), não “a cama”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"make", classe:"verbo", funcao:"a ação (aqui = arrumar)", traducao:"arrumar/fazer", hl:true },
      { palavra:"my bed", classe:"possessivo + substantivo", funcao:"o objeto", traducao:"minha cama" }
    ],
    nota:'<span class="en" data-say="make">make</span> é um verbo “coringa” em inglês: aparece em dezenas de expressões (make coffee, make money, make a decision). O sentido exato vem do que vem depois dele.'
  },

  molde: {
    intro:"Guarde o molde do verbo <strong>make</strong> + objeto:",
    formula:"I make + [o que fica pronto]",
    exemplos: [
      { en:"I make breakfast.", pt:"Eu preparo o café da manhã." },
      { en:"I make coffee.", pt:"Eu faço café." },
      { en:"I make a decision.", pt:"Eu tomo uma decisão." }
    ],
    nota:'Repare: em português usamos verbos diferentes (arrumar, preparar, fazer, tomar), mas em inglês é tudo <span class="en" data-say="make">make</span>. Por isso vale decorar o molde, não a tradução.'
  },

  conjugacao: {
    verbo: { base:"make my bed", past:"made my bed", irregular:true, ptPast:"eu arrumei a cama", ptFut:"eu vou arrumar a cama" },
    nota:'Padrão de sempre: só <strong>he / she / it</strong> ganham <strong>-s</strong>. E o possessivo acompanha (my → his → her).',
    linhas: [
      { p:"I", en:"I make my bed", say:"I make my bed.", pt:"eu arrumo minha cama" },
      { p:"you", en:"you make your bed", say:"You make your bed.", pt:"você arruma sua cama" },
      { p:"we", en:"we make our beds", say:"We make our beds.", pt:"nós arrumamos nossas camas" },
      { p:"they", en:"they make their beds", say:"They make their beds.", pt:"eles arrumam suas camas" },
      { p:"he", en:"he make<strong>s</strong> his bed", say:"He makes his bed.", pt:"ele arruma a cama dele", hl:true },
      { p:"she", en:"she make<strong>s</strong> her bed", say:"She makes her bed.", pt:"ela arruma a cama dela", hl:true },
      { p:"it", en:"it make<strong>s</strong>", say:"It makes.", pt:"(coisa/animal) faz", hl:true }
    ]
  },

  formas: {
    intro:'Atenção ao passado: <span class="en" data-say="make">make</span> é <strong>irregular</strong>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't make my bed.", pt:"Eu não arrumo minha cama." },
      { tag:"?", tagType:"bad", en:"Do you make your bed?", pt:"Você arruma sua cama?" },
      { tag:"passado", en:"I made my bed.", pt:"Eu arrumei minha cama. (make → made, irregular)" },
      { tag:"futuro", en:"I will make my bed.", pt:"Eu vou arrumar minha cama." }
    ],
    nota:'<span class="en" data-say="make">make</span> → <span class="en" data-say="made">made</span> (não existe “maked”). É um dos irregulares mais usados do inglês.'
  },

  speakNaturally: {
    intro:"Jeitos naturais de dizer a mesma ideia:",
    linhas: [
      { en:"I make my bed every morning.", pt:"Arrumo a cama toda manhã." },
      { en:"I make my bed as soon as I get up.", pt:"Arrumo a cama assim que levanto." },
      { en:"I always make my bed.", pt:"Sempre arrumo a cama." },
      { en:"I never leave my bed unmade.", pt:"Nunca deixo a cama desarrumada." },
      { en:"I straighten up my bed.", pt:"Ajeito a cama." }
    ],
    nota:'<span class="en" data-say="unmade">unmade</span> = desarrumada (o prefixo <strong>un-</strong> nega: made → unmade).'
  },

  expressoes: [
    { en:"make the bed", pt:"arrumar a cama" },
    { en:"make breakfast", pt:"preparar o café da manhã" },
    { en:"make a decision", pt:"tomar uma decisão" },
    { en:"make money", pt:"ganhar dinheiro" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"make", ipa:"/meɪk/", soa:"“mêik”", sentido:"fazer / arrumar / preparar" },
      { palavra:"bed", ipa:"/bɛd/", soa:"“béd”", sentido:"cama" },
      { palavra:"my", ipa:"/maɪ/", soa:"“mai”", sentido:"meu / minha" }
    ],
    fraseSoa:"ai mêik mai béd",
    fraseIpa:"/aɪ meɪk maɪ bɛd/",
    notaPron:'<span class="en" data-say="make">make</span> soa “mêik” (com o ditongo “êi”), nunca “méki”. O <strong>e</strong> final em inglês quase sempre é mudo.',
    cultura:'Existe um discurso famoso nos EUA (do almirante William McRaven): “<span class="en" data-say="If you want to change the world, make your bed.">If you want to change the world, make your bed.</span>” — arrumar a cama de manhã é sua primeira pequena vitória do dia. Virou símbolo de disciplina.'
  },

  erros: [
    { tipo:"bad", texto:"I do my bed.", nota:"Cama se “arruma” com make, não com do. → I make my bed." },
    { tipo:"good", en:"I make my bed.", nota:"—" },
    { tipo:"bad", texto:"I make the my bed.", nota:"Ou “the bed” ou “my bed”, nunca os dois juntos." },
    { tipo:"bad", texto:"I maked my bed.", nota:"Passado de make é made (irregular), não “maked”." }
  ],

  dica: {
    texto:'Pense em <span class="en" data-say="make">make</span> como “deixar pronto”. A cama fica pronta → you <span class="en" data-say="make">make</span> it. O café fica pronto → you <span class="en" data-say="make">make</span> it. Sua manhã é uma sequência de coisas que você “deixa prontas”:',
    chips:["wake up","brush my teeth","make my bed","make breakfast"],
    nota:"Toque em cada uma. Note como make já vai reaparecer no café da manhã — você está montando um vocabulário que se repete."
  },

  dialogo: [
    { who:"A", en:"Do you make your bed every day?", pt:"Você arruma a cama todo dia?" },
    { who:"B", en:"Yeah, I make my bed right after I get up. You?", pt:"Sim, arrumo a cama logo depois de levantar. E você?" },
    { who:"A", en:"Honestly, I don't always make mine.", pt:"Sinceramente, nem sempre arrumo a minha." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete:", before:"I", after:"my bed.", resposta:"make" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"his bed.", resposta:"makes", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["bed","I","my","make"], resposta:"I make my bed." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela arruma a cama todo dia.", resposta:"She makes her bed every day." },
    { tipo:"transformar", q:"Transforme", base:"I make my bed.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't make my bed." },
      { tag:"?", tagType:"bad", en:"Do you make your bed?" },
      { tag:"passado", en:"I made my bed." },
      { tag:"futuro", en:"I will make my bed." }
    ]},
    { tipo:"escrever", q:"Crie uma frase sua com o verbo make.", exemplo:"I make coffee every morning." }
  ],

  flashcards: [
    { pt:"Arrumo a cama assim que levanto.", en:"I make my bed as soon as I get up." },
    { pt:"Ele arruma a cama dele.", en:"He makes his bed." }
  ],

  conexao:'Esta lição reforça o <strong>possessivo</strong> que você viu na Lição 2 (<span class="en" data-say="my teeth">my teeth</span> → <span class="en" data-say="my bed">my bed</span>) e apresenta o verbo <span class="en" data-say="make">make</span>, que volta já na próxima parte da rotina (<span class="en" data-say="make breakfast">make breakfast</span>). Sua manhã até aqui: <span class="en" data-say="I wake up, I brush my teeth, and I make my bed.">wake up → brush my teeth → make my bed</span>.',

  revisao: [
    "<strong>make</strong> = fazer / arrumar / preparar — o sentido vem do objeto (make the bed = arrumar).",
    "Passado irregular: <strong>make → made</strong> (nunca “maked”).",
    "Cama se arruma com <strong>make</strong>, não com <em>do</em>.",
    "Possessivo de novo: <strong>my</strong> bed, his bed, her bed.",
    "3ª pessoa com <strong>-s</strong>: he make<strong>s</strong>."
  ]
});
