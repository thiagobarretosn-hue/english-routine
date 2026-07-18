/* Lição 46 — I usually go to sleep late every day.  (dado — FECHA o Volume 1) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:6, capituloNome:"Dinner & Night", licao:46,
    tituloEn:"I usually go to sleep late every day.", tituloPt:"Eu normalmente durmo tarde todos os dias." },

  hero: { time:"VOLUME 1 · CAP. 6 — DINNER & NIGHT · LIÇÃO 46 — A ÚLTIMA",
    en:"I usually go to sleep late every day.", pt:"Eu normalmente durmo tarde todos os dias." },

  naturalLiteral: {
    natural:"I usually go to sleep late every day.",
    literal:"Eu usualmente vou dormir tarde todo dia.",
    nota:'A última frase da sua rotina! <span class="en" data-say="go to sleep">go to sleep</span> = adormecer/ir dormir (sem the, como go to bed). E ela reúne o <span class="en" data-say="usually">usually</span> (Lição 11) e o <span class="en" data-say="every day">every day</span> (Lição 34).'
  },

  estrutura: {
    linhas: [
      { palavra:"I usually", classe:"sujeito + advérbio", funcao:"eu normalmente", traducao:"eu normalmente" },
      { palavra:"go to sleep", classe:"verbo + preposição", funcao:"a ação (dormir)", traducao:"vou dormir", hl:true },
      { palavra:"late", classe:"advérbio", funcao:"como", traducao:"tarde" },
      { palavra:"every day", classe:"frequência", funcao:"quando", traducao:"todos os dias" }
    ],
    nota:'Três “dormir” que confundem: <span class="en" data-say="go to bed">go to bed</span> (deitar), <span class="en" data-say="go to sleep">go to sleep</span> (pegar no sono) e <span class="en" data-say="sleep">sleep</span> (dormir/estar dormindo).'
  },

  molde: {
    intro:"O molde de ir dormir:",
    formula:"go to sleep / go to bed + [horário/advérbio]",
    exemplos: [
      { en:"I go to bed at midnight.", pt:"Vou pra cama à meia-noite." },
      { en:"I go to sleep around 1.", pt:"Durmo por volta de 1." },
      { en:"I sleep eight hours.", pt:"Durmo oito horas." }
    ],
    nota:'<span class="en" data-say="go to bed">go to bed</span> e <span class="en" data-say="go to sleep">go to sleep</span> vão sem the — como therapy, work e school (Lição 29).'
  },

  conjugacao: {
    nota:'go → he goes (Lição 14). usually antes do verbo.',
    linhas: [
      { p:"I", en:"I go to sleep late", say:"I usually go to sleep late.", pt:"eu durmo tarde" },
      { p:"you", en:"you go to sleep late", say:"You usually go to sleep late.", pt:"você dorme tarde" },
      { p:"we", en:"we go to sleep late", say:"We usually go to sleep late.", pt:"nós dormimos tarde" },
      { p:"they", en:"they go to sleep late", say:"They usually go to sleep late.", pt:"eles dormem tarde" },
      { p:"he", en:"he go<strong>es</strong> to sleep late", say:"He usually goes to sleep late.", pt:"ele dorme tarde", hl:true },
      { p:"she", en:"she go<strong>es</strong> to sleep late", say:"She usually goes to sleep late.", pt:"ela dorme tarde", hl:true },
      { p:"it", en:"it go<strong>es</strong> to sleep", say:"It goes to sleep.", pt:"(coisa) dorme", hl:true }
    ]
  },

  formas: {
    intro:'Passados irregulares: go → <span class="en" data-say="went">went</span>; sleep → <span class="en" data-say="slept">slept</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't usually go to sleep early.", pt:"Normalmente não durmo cedo." },
      { tag:"?", tagType:"bad", en:"Do you go to sleep late?", pt:"Você dorme tarde?" },
      { tag:"passado", en:"I went to sleep late last night.", pt:"Dormi tarde ontem à noite. (go → went)" },
      { tag:"futuro", en:"I will go to sleep late again.", pt:"Vou dormir tarde de novo." }
    ],
    nota:'⚠️ Cuidado: <span class="en" data-say="sleep late">sleep late</span> às vezes significa “acordar tarde” (dormir até tarde). Para “ir dormir tarde”, prefira <span class="en" data-say="go to sleep late">go to sleep late</span> ou <span class="en" data-say="stay up late">stay up late</span> (ficar acordado até tarde).'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você dorme tarde:",
    linhas: [
      { en:"I usually go to bed late.", pt:"Normalmente vou pra cama tarde." },
      { en:"I'm a night owl.", pt:"Sou uma pessoa da noite." },
      { en:"I stay up late.", pt:"Fico acordado até tarde." },
      { en:"I go to sleep around 1.", pt:"Durmo por volta de 1." },
      { en:"I never go to bed early.", pt:"Nunca vou dormir cedo." }
    ],
    nota:'<span class="en" data-say="night owl">night owl</span> = pessoa que dorme tarde (coruja); o oposto é <span class="en" data-say="early bird">early bird</span> (quem madruga). Qual é você? 🦉'
  },

  expressoes: [
    { en:"go to sleep", pt:"ir dormir / adormecer" },
    { en:"go to bed", pt:"ir para a cama" },
    { en:"stay up late", pt:"ficar acordado até tarde" },
    { en:"a night owl", pt:"pessoa que dorme tarde" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"sleep", ipa:"/sliːp/", soa:"“slíip”", sentido:"dormir" },
      { palavra:"late", ipa:"/leɪt/", soa:"“lêit”", sentido:"tarde" },
      { palavra:"every day", ipa:"/ˈɛvri deɪ/", soa:"“ÉV-ri dei”", sentido:"todos os dias" }
    ],
    fraseSoa:"ai IÚ-ju-a-li gôu tu slíip lêit ÉV-ri dei",
    fraseIpa:"/aɪ ˈjuːʒuəli ɡoʊ tu sliːp leɪt ˈɛvri deɪ/",
    notaPron:'<span class="en" data-say="sleep">sleep</span> tem o “i” longo (“slíip”), diferente de <span class="en" data-say="slip">slip</span> (“slíp”, i curto = escorregar). Alongue bem o i.',
    cultura:'A pergunta <span class="en" data-say="Are you a night owl or an early bird?">“Are you a night owl or an early bird?”</span> é ótima para conversa. E, no fim do dia, todo mundo se despede com <span class="en" data-say="Good night!">Good night!</span> 🌙'
  },

  erros: [
    { tipo:"bad", texto:"go to the sleep.", nota:"Sem the: <strong>go to sleep</strong> (e go to bed)." },
    { tipo:"bad", texto:"I go sleep.", nota:"Precisa do to: <strong>go to sleep</strong>." },
    { tipo:"bad", texto:"sleep pronunciado “slip”.", nota:"É o i longo: <strong>“slíip”</strong> (slip = escorregar)." },
    { tipo:"bad", texto:"He go to sleep.", nota:"3ª pessoa: He <strong>goes</strong> to sleep." }
  ],

  dica: {
    texto:'O trio do dormir e o fechamento do seu dia. Toque e ouça:',
    chips:["go to bed","go to sleep","stay up late","night owl"],
    nota:"go to bed (deitar) → go to sleep (pegar no sono). E você fecha o ciclo: acordou na Lição 1, dorme na Lição 46."
  },

  dialogo: [
    { who:"A", en:"What time do you go to sleep?", pt:"Que horas você dorme?" },
    { who:"B", en:"I usually go to sleep late, like 1 a.m.", pt:"Normalmente durmo tarde, tipo 1 da manhã." },
    { who:"A", en:"A real night owl. Good night!", pt:"Um verdadeiro notívago. Boa noite!" },
    { who:"B", en:"Good night!", pt:"Boa noite!" }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete (sem the):", before:"I go to", after:"late.", resposta:"sleep" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He usually", after:"to sleep late.", resposta:"goes", wide:true, dica:"go vira ___." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["sleep","I","to","late","go"], resposta:"I go to sleep late." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela normalmente dorme tarde.", resposta:"She usually goes to sleep late." },
    { tipo:"transformar", q:"Transforme", base:"I go to sleep late every day.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't go to sleep late every day." },
      { tag:"?", tagType:"bad", en:"Do you go to sleep late every day?" },
      { tag:"passado", en:"I went to sleep late every day." },
      { tag:"futuro", en:"I will go to sleep late every day." }
    ]},
    { tipo:"escrever", q:"Escreva sua própria frase: “I usually go to sleep ___.”", exemplo:"I usually go to sleep around midnight." }
  ],

  flashcards: [
    { pt:"Normalmente durmo tarde.", en:"I usually go to sleep late." },
    { pt:"Sou uma pessoa da noite.", en:"I'm a night owl." }
  ],

  conexao:'🎉 <strong>Você fechou o ciclo!</strong> Na Lição 1 você aprendeu <span class="en" data-say="I wake up at 8 a.m.">I wake up at 8 a.m.</span> — e agora, na Lição 46, <span class="en" data-say="I go to sleep late.">I go to sleep late.</span> Do primeiro ao último minuto do dia, sua rotina inteira está em inglês. Este é o <strong>fim do Volume 1 — Present</strong>: 46 frases, dezenas de moldes, e a sua vida contada no presente. Os próximos volumes pegam exatamente estas frases e as levam para o <strong>passado</strong> (Volume 2) e o <strong>futuro</strong> (Volume 3).',

  revisao: [
    "<strong>go to sleep</strong> (adormecer) / <strong>go to bed</strong> (deitar) — sem the.",
    "Passados: go → <strong>went</strong>; sleep → <strong>slept</strong>.",
    "<strong>night owl</strong> (dorme tarde) × <strong>early bird</strong> (madruga).",
    "<strong>sleep</strong> (“slíip”, i longo) × <strong>slip</strong> (“slíp”).",
    "🏁 <strong>Volume 1 completo!</strong> Da Lição 1 (acordar) à 46 (dormir), o dia inteiro em inglês."
  ]
});
