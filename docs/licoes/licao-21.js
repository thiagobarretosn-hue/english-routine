/* Lição 21 — After my workout, I go back home.  (dado — fecha o Capítulo 3) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:21,
    tituloEn:"After my workout, I go back home.", tituloPt:"Depois do treino eu retorno para casa." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 21",
    en:"After my workout, I go back home.", pt:"Depois do treino, eu volto para casa." },

  naturalLiteral: {
    natural:"After my workout, I go back home.",
    literal:"Depois do meu treino, eu vou de volta para casa.",
    nota:'<span class="en" data-say="go back home">go back home</span> = voltar para casa (<span class="en" data-say="go back">go back</span> = voltar). E <span class="en" data-say="home">home</span> dispensa “to”, como na Lição 14: nunca “go back to home”.'
  },

  estrutura: {
    linhas: [
      { palavra:"After my workout,", classe:"after + possessivo + substantivo", funcao:"quando", traducao:"depois do meu treino", hl:true },
      { palavra:"I go back", classe:"sujeito + verbo + partícula", funcao:"a ação (voltar)", traducao:"eu volto", hl:true },
      { palavra:"home", classe:"advérbio", funcao:"para onde", traducao:"para casa" }
    ],
    nota:'Cuidado com duas palavras parecidas: <span class="en" data-say="workout">workout</span> (uma palavra = o treino, substantivo) e <span class="en" data-say="work out">work out</span> (duas palavras = treinar, verbo). Aqui, com “my”, é o substantivo: <strong>my workout</strong>.'
  },

  molde: {
    intro:"O molde de voltar a lugares:",
    formula:"I go back + (to) + lugar",
    exemplos: [
      { en:"I go back home.", pt:"Volto para casa. (sem to)" },
      { en:"I go back to work.", pt:"Volto ao trabalho." },
      { en:"I go back to the gym.", pt:"Volto para a academia." }
    ],
    nota:'Mesma regra do the: <span class="en" data-say="go back home">go back home</span> (casa, sem to) × <span class="en" data-say="go back to work">go back to work</span> / <span class="en" data-say="go back to the gym">go back to the gym</span> (com to).'
  },

  conjugacao: {
    nota:'go → he goes (Lição 14). O <span class="en" data-say="back">back</span> vem logo depois.',
    linhas: [
      { p:"I", en:"I go back home", say:"I go back home.", pt:"eu volto para casa" },
      { p:"you", en:"you go back home", say:"You go back home.", pt:"você volta para casa" },
      { p:"we", en:"we go back home", say:"We go back home.", pt:"nós voltamos para casa" },
      { p:"they", en:"they go back home", say:"They go back home.", pt:"eles voltam para casa" },
      { p:"he", en:"he go<strong>es</strong> back home", say:"He goes back home.", pt:"ele volta para casa", hl:true },
      { p:"she", en:"she go<strong>es</strong> back home", say:"She goes back home.", pt:"ela volta para casa", hl:true },
      { p:"it", en:"it go<strong>es</strong> back", say:"It goes back.", pt:"(coisa) volta", hl:true }
    ]
  },

  formas: {
    intro:'Passado com o irregular went (Lição 14): <span class="en" data-say="went back">went back</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't go back home after my workout.", pt:"Eu não volto para casa depois do treino." },
      { tag:"?", tagType:"bad", en:"Do you go back home after your workout?", pt:"Você volta para casa depois do treino?" },
      { tag:"passado", en:"I went back home after my workout.", pt:"Voltei para casa depois do treino. (go → went)" },
      { tag:"futuro", en:"I will go back home after my workout.", pt:"Vou voltar para casa depois do treino." }
    ],
    nota:'<span class="en" data-say="go back">go back</span> = voltar; <span class="en" data-say="come back">come back</span> = voltar (do ponto de vista de quem está no destino). Sutil, mas útil.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você volta pra casa:",
    linhas: [
      { en:"After my workout, I head home.", pt:"Depois do treino, vou pra casa." },
      { en:"I go straight home after the gym.", pt:"Vou direto pra casa depois da academia." },
      { en:"Once I'm done, I go home.", pt:"Assim que termino, vou pra casa." },
      { en:"I head back home.", pt:"Volto pra casa." },
      { en:"After training, I go home.", pt:"Depois de treinar, vou pra casa." }
    ],
    nota:'<span class="en" data-say="head home">head home</span> = ir/voltar pra casa; <span class="en" data-say="straight home">straight home</span> = direto pra casa (sem parar).'
  },

  expressoes: [
    { en:"go back home", pt:"voltar para casa" },
    { en:"go back to work", pt:"voltar ao trabalho" },
    { en:"a workout", pt:"um treino" },
    { en:"head home", pt:"ir para casa" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"workout", ipa:"/ˈwɜːrkaʊt/", soa:"“UÂRK-áut”", sentido:"treino (substantivo)" },
      { palavra:"go back", ipa:"/ɡoʊ bæk/", soa:"“gôu bék”", sentido:"voltar" },
      { palavra:"home", ipa:"/hoʊm/", soa:"“rôum”", sentido:"casa" }
    ],
    fraseSoa:"áfter mai UÂRK-áut, ai gôu bék rôum",
    fraseIpa:"/ˈæftər maɪ ˈwɜːrkaʊt aɪ ɡoʊ bæk hoʊm/",
    notaPron:'<span class="en" data-say="workout">workout</span> tem a força na 1ª sílaba (“UÂRK-áut”). Já o verbo <span class="en" data-say="work out">work out</span> distribui melhor a ênfase — a escrita (junto/separado) muda o significado.',
    cultura:'Depois do treino, a frase natural é <span class="en" data-say="I\'m gonna head home.">“I\'m gonna head home.”</span> (vou pra casa). <span class="en" data-say="gonna">gonna</span> é a forma falada de “going to”.'
  },

  erros: [
    { tipo:"bad", texto:"I go back to home.", nota:"Casa sem “to”: <strong>go back home</strong>." },
    { tipo:"good", en:"I go back home.", nota:"—" },
    { tipo:"bad", texto:"After my work out (com espaço).", nota:"Como substantivo é junto: my <strong>workout</strong>." },
    { tipo:"bad", texto:"He go back home.", nota:"3ª pessoa: He <strong>goes</strong> back home." }
  ],

  dica: {
    texto:'<strong>go back</strong> = voltar. E a mesma regra do the/to: casa é exceção (sem to). Toque e compare:',
    chips:["go back home","go back to work","go back to the gym","head home"],
    nota:"home sem to; work e the gym com to. E workout (subst) ≠ work out (verbo)."
  },

  dialogo: [
    { who:"A", en:"What do you do after the gym?", pt:"O que você faz depois da academia?" },
    { who:"B", en:"After my workout, I go back home and shower.", pt:"Depois do treino, volto pra casa e tomo banho." },
    { who:"A", en:"Straight home, no stops?", pt:"Direto pra casa, sem paradas?" },
    { who:"B", en:"Yeah, straight home.", pt:"Isso, direto pra casa." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (voltar):", before:"After my workout, I go", after:"home.", resposta:"back" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"back home.", resposta:"goes", wide:true, dica:"go vira ___ no he/she/it." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["home","I","back","go"], resposta:"I go back home." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Depois do treino, ele volta para casa.", resposta:"After his workout, he goes back home." },
    { tipo:"transformar", q:"Transforme", base:"After my workout, I go back home.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't go back home after my workout." },
      { tag:"?", tagType:"bad", en:"Do you go back home after your workout?" },
      { tag:"passado", en:"I went back home after my workout." },
      { tag:"futuro", en:"I will go back home after my workout." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com go back + lugar.", exemplo:"After lunch, I go back to work." }
  ],

  flashcards: [
    { pt:"Depois do treino, volto pra casa.", en:"After my workout, I go back home." },
    { pt:"Vou direto pra casa depois da academia.", en:"I go straight home after the gym." }
  ],

  conexao:'Fecha o <strong>Capítulo 3 — The Gym</strong> juntando várias peças: <span class="en" data-say="after">after</span> + substantivo (Lição 12), <span class="en" data-say="go">go</span> e a regra do <span class="en" data-say="home">home</span> sem “to” (Lição 14). Sua rotina de academia completa: <span class="en" data-say="I go to the gym, I train, I leave, and I go back home.">go to the gym → train → leave → go back home</span>.',

  revisao: [
    "<strong>go back</strong> = voltar; casa sem “to” (go back home).",
    "<strong>workout</strong> (subst, junto) ≠ <strong>work out</strong> (verbo, separado).",
    "Passado: go → <strong>went back</strong>.",
    "<strong>go back</strong> × <strong>come back</strong> (depende de onde você está).",
    "🏁 Capítulo 3 completo: chegar → treinar → sair → voltar pra casa."
  ]
});
