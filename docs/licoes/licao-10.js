/* Lição 10 — I fry eggs — I like scrambled eggs.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:2, capituloNome:"Work & Breakfast", licao:10,
    tituloEn:"I fry eggs — I like scrambled eggs.", tituloPt:"Eu frito ovos — gosto de ovos mexidos." },

  hero: { time:"VOLUME 1 · CAP. 2 — WORK & BREAKFAST · LIÇÃO 10",
    en:"I fry eggs — I like scrambled eggs.", pt:"Eu frito ovos — gosto de ovos mexidos." },

  naturalLiteral: {
    natural:"I fry eggs — I like scrambled eggs.",
    literal:"Eu frito ovos — eu gosto de ovos mexidos.",
    nota:'<span class="en" data-say="scrambled eggs">scrambled eggs</span> = ovos <strong>mexidos</strong> (scrambled = “embaralhados”). E <span class="en" data-say="like">like</span> + substantivo dispensa preposição: <span class="en" data-say="I like eggs">I like eggs</span>, não “I like of eggs”.'
  },

  estrutura: {
    linhas: [
      { palavra:"I fry", classe:"pronome + verbo", funcao:"1ª ação (fritar)", traducao:"eu frito", hl:true },
      { palavra:"eggs", classe:"substantivo (plural)", funcao:"o objeto", traducao:"ovos" },
      { palavra:"I like", classe:"pronome + verbo", funcao:"gosto de", traducao:"eu gosto", hl:true },
      { palavra:"scrambled eggs", classe:"adjetivo + substantivo", funcao:"o que você gosta", traducao:"ovos mexidos" }
    ],
    nota:'Em inglês o adjetivo vem <strong>antes</strong> do substantivo: <span class="en" data-say="scrambled eggs">scrambled eggs</span> (mexidos + ovos), ao contrário do português (ovos mexidos).'
  },

  molde: {
    intro:"Dois moldes úteis: gostar de algo e gostar de fazer algo.",
    formula:"I like + [substantivo]  /  I like + [verbo]-ing",
    exemplos: [
      { en:"I like coffee.", pt:"Gosto de café." },
      { en:"I like cooking.", pt:"Gosto de cozinhar." },
      { en:"I like fried eggs.", pt:"Gosto de ovos fritos." }
    ],
    nota:'Tipos de ovo (guarde este vocabulário): <span class="en" data-say="scrambled eggs">scrambled</span> (mexidos), <span class="en" data-say="fried eggs">fried</span> (fritos), <span class="en" data-say="boiled eggs">boiled</span> (cozidos), <span class="en" data-say="an omelet">an omelet</span> (omelete).'
  },

  conjugacao: {
    verbo: { base:"fry eggs", past:"fried eggs", irregular:false, ptPast:"eu fritei ovos", ptFut:"eu vou fritar ovos" },
    nota:'⚠️ Regra nova: verbo terminado em <strong>consoante + y</strong> troca o y por <strong>-ies</strong> na 3ª pessoa. fry → he <strong>fries</strong>.',
    linhas: [
      { p:"I", en:"I fry eggs", say:"I fry eggs.", pt:"eu frito ovos" },
      { p:"you", en:"you fry eggs", say:"You fry eggs.", pt:"você frita ovos" },
      { p:"we", en:"we fry eggs", say:"We fry eggs.", pt:"nós fritamos ovos" },
      { p:"they", en:"they fry eggs", say:"They fry eggs.", pt:"eles fritam ovos" },
      { p:"he", en:"he fr<strong>ies</strong> eggs", say:"He fries eggs.", pt:"ele frita ovos", hl:true },
      { p:"she", en:"she fr<strong>ies</strong> eggs", say:"She fries eggs.", pt:"ela frita ovos", hl:true },
      { p:"it", en:"it fr<strong>ies</strong>", say:"It fries.", pt:"(coisa) frita", hl:true }
    ]
  },

  formas: {
    intro:'No passado, o y também vira i: fry → <span class="en" data-say="fried">fried</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't fry eggs.", pt:"Eu não frito ovos." },
      { tag:"?", tagType:"bad", en:"Do you fry eggs?", pt:"Você frita ovos?" },
      { tag:"passado", en:"I fried eggs.", pt:"Fritei ovos. (fry → fried)" },
      { tag:"futuro", en:"I will fry eggs.", pt:"Vou fritar ovos." }
    ],
    nota:'A mesma regra do y vale para <span class="en" data-say="study">study</span> → studies/studied, <span class="en" data-say="try">try</span> → tries/tried.'
  },

  speakNaturally: {
    intro:"Formas naturais de falar de ovos no café:",
    linhas: [
      { en:"I make scrambled eggs.", pt:"Faço ovos mexidos." },
      { en:"I have eggs for breakfast.", pt:"Como ovos no café da manhã." },
      { en:"I usually go for scrambled.", pt:"Geralmente escolho mexidos." },
      { en:"I love a good omelet.", pt:"Amo um bom omelete." },
      { en:"I like my eggs scrambled.", pt:"Gosto dos meus ovos mexidos." }
    ],
    nota:'<span class="en" data-say="go for">go for</span> = optar por. <span class="en" data-say="I like my eggs scrambled.">I like my eggs scrambled</span> é a forma nativa de dizer “gosto dos ovos mexidos”.'
  },

  expressoes: [
    { en:"scrambled eggs", pt:"ovos mexidos" },
    { en:"fried eggs", pt:"ovos fritos" },
    { en:"boiled eggs", pt:"ovos cozidos" },
    { en:"an omelet", pt:"um omelete" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"fry", ipa:"/fraɪ/", soa:"“frái”", sentido:"fritar" },
      { palavra:"eggs", ipa:"/ɛɡz/", soa:"“égz”", sentido:"ovos" },
      { palavra:"scrambled", ipa:"/ˈskræmbəld/", soa:"“SKRÉM-bold”", sentido:"mexidos (embaralhados)" },
      { palavra:"like", ipa:"/laɪk/", soa:"“láik”", sentido:"gostar (de)" }
    ],
    fraseSoa:"ai frái égz — ai láik SKRÉM-bold égz",
    fraseIpa:"/aɪ fraɪ ɛɡz — aɪ laɪk ˈskræmbəld ɛɡz/",
    notaPron:'<span class="en" data-say="eggs">eggs</span> termina com som de <strong>z</strong> (“égz”), não “éggs”. E <span class="en" data-say="like">like</span> é “láik”, com o ditongo “ái”.',
    cultura:'No restaurante você vai ouvir <span class="en" data-say="How would you like your eggs?">“How would you like your eggs?”</span> — e responde <span class="en" data-say="Scrambled, please.">“Scrambled, please.”</span> ou <span class="en" data-say="Over easy.">“Over easy.”</span> (frito, gema mole).'
  },

  erros: [
    { tipo:"bad", texto:"He fry eggs.", nota:"Consoante + y → -ies na 3ª pessoa: He <strong>fries</strong> eggs." },
    { tipo:"bad", texto:"I like scrambled egg.", nota:"No plural: scrambled <strong>eggs</strong>." },
    { tipo:"bad", texto:"mexed eggs.", nota:"Não existe “mexed”. É <strong>scrambled</strong> eggs." },
    { tipo:"bad", texto:"I like to eggs.", nota:"like + substantivo direto: <strong>I like eggs</strong> (sem “to”)." }
  ],

  dica: {
    texto:'Grave a regra do <strong>y</strong>: consoante + y → troca por <strong>ies</strong> na 3ª pessoa. E os tipos de ovo:',
    chips:["scrambled eggs","fried eggs","boiled eggs","an omelet"],
    nota:"Toque em cada uma. fry→fries, study→studies, try→tries — a mesma troca do y sempre."
  },

  dialogo: [
    { who:"A", en:"How do you like your eggs?", pt:"Como você gosta dos ovos?" },
    { who:"B", en:"I like them scrambled. You?", pt:"Gosto deles mexidos. E você?" },
    { who:"A", en:"Fried, always.", pt:"Fritos, sempre." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete a 3ª pessoa (regra do y):", before:"He", after:"eggs every morning.", resposta:"fries", wide:true, dica:"fry vira ___ (y → ies)." },
    { tipo:"completar", q:"Complete:", before:"I like", after:"eggs.", resposta:"scrambled" },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["eggs","I","scrambled","like"], resposta:"I like scrambled eggs." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela frita ovos.", resposta:"She fries eggs." },
    { tipo:"transformar", q:"Transforme", base:"I fry eggs.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't fry eggs." },
      { tag:"?", tagType:"bad", en:"Do you fry eggs?" },
      { tag:"passado", en:"I fried eggs." },
      { tag:"futuro", en:"I will fry eggs." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com like + comida.", exemplo:"I like fried eggs and bacon." }
  ],

  flashcards: [
    { pt:"Gosto dos meus ovos mexidos.", en:"I like my eggs scrambled." },
    { pt:"Ela frita ovos toda manhã.", en:"She fries eggs every morning." }
  ],

  conexao:'Reaparece o <span class="en" data-say="like">like</span> (que combina com substantivo e com verbo-ing) e a regra do <strong>-s</strong> ganha um caso novo: verbos em <strong>-y</strong> viram <strong>-ies</strong>. Os <span class="en" data-say="eggs">eggs</span> daqui voltam na próxima lição, no seu café da manhã completo.',

  revisao: [
    "Verbo <strong>consoante + y</strong> → <strong>-ies</strong> na 3ª pessoa (fry → fries) e <strong>-ied</strong> no passado (fried).",
    "<strong>like</strong> + substantivo (I like eggs) ou + verbo-ing (I like cooking).",
    "Adjetivo antes do substantivo: <strong>scrambled eggs</strong>.",
    "Tipos de ovo: scrambled, fried, boiled, omelet.",
    "<strong>eggs</strong> termina em som de z (“égz”)."
  ]
});
