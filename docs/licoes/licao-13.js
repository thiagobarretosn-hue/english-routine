/* Lição 13 — I stop working at 12.  (dado — fecha o Capítulo 2) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:13,
    tituloEn:"I stop working at 12.", tituloPt:"Eu paro de trabalhar às 12 horas." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 13",
    en:"I stop working at 12.", pt:"Eu paro de trabalhar ao meio-dia." },

  naturalLiteral: {
    natural:"I stop working at 12.",
    literal:"Eu paro trabalhando às 12.",
    nota:'<span class="en" data-say="stop working">stop working</span> = parar <strong>de</strong> trabalhar (stop + verbo-ing). É o par exato do <span class="en" data-say="start working">start working</span> da Lição 5. E <span class="en" data-say="12">12</span> aqui é meio-dia — em inglês, <span class="en" data-say="noon">noon</span>.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"stop", classe:"verbo", funcao:"a ação (parar)", traducao:"parar", hl:true },
      { palavra:"working", classe:"gerúndio (-ing)", funcao:"o que se para de fazer", traducao:"de trabalhar", hl:true },
      { palavra:"at 12", classe:"expressão de tempo", funcao:"o horário", traducao:"às 12 / ao meio-dia" }
    ],
    nota:'⚠️ Diferença que muda tudo: <span class="en" data-say="stop working">stop working</span> = parar DE trabalhar; <span class="en" data-say="stop to work">stop to work</span> = parar PARA trabalhar. O -ing e o to dão sentidos opostos!'
  },

  molde: {
    intro:"O par start / stop, os dois com -ing:",
    formula:"I start / stop + [verbo]-ing + at + horário",
    exemplos: [
      { en:"I stop studying at 10.", pt:"Paro de estudar às 10." },
      { en:"I stop eating at 9.", pt:"Paro de comer às 9." },
      { en:"I start working at 8 and stop at 12.", pt:"Começo a trabalhar às 8 e paro às 12." }
    ],
    nota:'<span class="en" data-say="noon">noon</span> = meio-dia (12 p.m.); <span class="en" data-say="midnight">midnight</span> = meia-noite (12 a.m.). Bom saber para não se confundir com “12”.'
  },

  conjugacao: {
    verbo: { base:"stop working", past:"stopped working", irregular:false, ptPast:"eu parei de trabalhar", ptFut:"eu vou parar de trabalhar" },
    nota:'stop → he stops (só o -s de sempre; o -ing fica no working).',
    linhas: [
      { p:"I", en:"I stop working", say:"I stop working at 12.", pt:"eu paro de trabalhar" },
      { p:"you", en:"you stop working", say:"You stop working at 12.", pt:"você para de trabalhar" },
      { p:"we", en:"we stop working", say:"We stop working at 12.", pt:"nós paramos de trabalhar" },
      { p:"they", en:"they stop working", say:"They stop working at 12.", pt:"eles param de trabalhar" },
      { p:"he", en:"he stop<strong>s</strong> working", say:"He stops working at 12.", pt:"ele para de trabalhar", hl:true },
      { p:"she", en:"she stop<strong>s</strong> working", say:"She stops working at 12.", pt:"ela para de trabalhar", hl:true },
      { p:"it", en:"it stop<strong>s</strong>", say:"It stops.", pt:"(coisa) para", hl:true }
    ]
  },

  formas: {
    intro:'⚠️ Passado dobra o p: stop → <span class="en" data-say="stopped">stopped</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't stop working at 12.", pt:"Eu não paro de trabalhar às 12." },
      { tag:"?", tagType:"bad", en:"Do you stop working at 12?", pt:"Você para de trabalhar às 12?" },
      { tag:"passado", en:"I stopped working at 12.", pt:"Parei de trabalhar às 12. (stop → stopped)" },
      { tag:"futuro", en:"I will stop working at 12.", pt:"Vou parar de trabalhar às 12." }
    ],
    nota:'Verbos curtos terminados em <strong>vogal + consoante</strong> dobram a consoante no passado: stop → stopped, plan → planned.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você encerra o expediente:",
    linhas: [
      { en:"I finish work at 12.", pt:"Termino o trabalho às 12." },
      { en:"I wrap up at noon.", pt:"Encerro ao meio-dia." },
      { en:"I'm done by 12.", pt:"Estou de folga até as 12 / termino até as 12." },
      { en:"I clock out at 12.", pt:"Bato o ponto (saída) às 12." },
      { en:"I call it a day at noon.", pt:"Encerro o dia ao meio-dia." }
    ],
    nota:'<span class="en" data-say="call it a day">call it a day</span> = encerrar o trabalho por hoje. <span class="en" data-say="wrap up">wrap up</span> = finalizar. E <span class="en" data-say="clock out">clock out</span> é o par do <span class="en" data-say="clock in">clock in</span> da Lição 5.'
  },

  expressoes: [
    { en:"stop working", pt:"parar de trabalhar" },
    { en:"stop by", pt:"dar uma passada (visitar rápido)" },
    { en:"stop it", pt:"para com isso" },
    { en:"call it a day", pt:"encerrar o dia" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"stop", ipa:"/stɒp/", soa:"“stóp”", sentido:"parar" },
      { palavra:"working", ipa:"/ˈwɜːrkɪŋ/", soa:"“uârking”", sentido:"trabalhando" },
      { palavra:"noon", ipa:"/nuːn/", soa:"“núun”", sentido:"meio-dia" }
    ],
    fraseSoa:"ai stóp uârking ét tuélv",
    fraseIpa:"/aɪ stɒp ˈwɜːrkɪŋ æt twɛlv/",
    notaPron:'<span class="en" data-say="twelve">twelve</span> (12) tem o som “tuélv”, com o “w” virando “u”. E <span class="en" data-say="noon">noon</span> é “núun”, com u bem longo.',
    cultura:'<span class="en" data-say="Let\'s call it a day.">“Let\'s call it a day.”</span> é o que se diz para encerrar o trabalho ou uma reunião: “por hoje é isso”. Muito comum no fim do expediente.'
  },

  erros: [
    { tipo:"bad", texto:"I stop to work at 12 (querendo dizer “paro de trabalhar”).", nota:"Isso significa “paro PARA trabalhar”! O certo é <strong>stop working</strong>." },
    { tipo:"good", en:"I stop working at 12.", nota:"—" },
    { tipo:"bad", texto:"I stoped working.", nota:"Passado dobra o p: <strong>stopped</strong>." },
    { tipo:"bad", texto:"He stop working.", nota:"3ª pessoa: He stop<strong>s</strong> working." }
  ],

  dica: {
    texto:'A dupla do expediente: <strong>start</strong> (começar) e <strong>stop</strong> (parar), os dois com -ing. Seu dia de trabalho em duas frases:',
    chips:["I start working at 8","I stop working at 12","clock in","clock out"],
    nota:"Toque em cada uma. E nunca esqueça: stop + -ing (parar de) ≠ stop + to (parar para)."
  },

  dialogo: [
    { who:"A", en:"What time do you stop working?", pt:"Que horas você para de trabalhar?" },
    { who:"B", en:"I stop working at noon for lunch, then I start again at 2.", pt:"Paro ao meio-dia pro almoço, aí começo de novo às 2." },
    { who:"A", en:"Nice. I just call it a day at 6.", pt:"Legal. Eu encerro de vez às 6." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete com o gerúndio:", before:"I stop", after:"at 12.", resposta:"working" },
    { tipo:"completar", q:"Complete o passado (cuidado, dobra o p):", before:"Yesterday I", after:"working at 11.", resposta:"stopped", wide:true, dica:"stop no passado." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["working","I","at","stop","12"], resposta:"I stop working at 12." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele para de trabalhar ao meio-dia.", resposta:"He stops working at noon." },
    { tipo:"transformar", q:"Transforme", base:"I stop working at 12.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't stop working at 12." },
      { tag:"?", tagType:"bad", en:"Do you stop working at 12?" },
      { tag:"passado", en:"I stopped working at 12." },
      { tag:"futuro", en:"I will stop working at 12." }
    ]},
    { tipo:"escrever", q:"Escreva seu par: “I start working at ___ and stop at ___.”", exemplo:"I start working at 8 and stop at 12." }
  ],

  flashcards: [
    { pt:"Paro de trabalhar ao meio-dia.", en:"I stop working at noon." },
    { pt:"Começo às 8 e paro às 12.", en:"I start working at 8 and stop at 12." }
  ],

  conexao:'Fecha o par com o <span class="en" data-say="start working">start working</span> da Lição 5 e completa o <strong>Capítulo 2 — Work & Breakfast</strong>. Sua manhã de trabalho inteira em inglês: <span class="en" data-say="I start working at 8, I have breakfast at 10, and I stop working at 12.">I start working at 8, I have breakfast at 10, and I stop working at 12.</span>',

  revisao: [
    "<strong>stop + -ing</strong> = parar de fazer (stop working).",
    "⚠️ <strong>stop + to</strong> = parar PARA fazer (sentido oposto!).",
    "Par com a Lição 5: <strong>start</strong> ↔ <strong>stop</strong>.",
    "Passado dobra a consoante: stop → <strong>stopped</strong>.",
    "🏁 Capítulo 2 completo: trabalho + café da manhã.",
    "<strong>noon</strong> = meio-dia, <strong>midnight</strong> = meia-noite."
  ]
});
