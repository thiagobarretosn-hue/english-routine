/* Lição 15 — I usually ride my motorcycle to the gym.  (dado) */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:3, capituloNome:"The Gym", licao:15,
    tituloEn:"I usually ride my motorcycle to the gym.", tituloPt:"Eu normalmente vou de moto para a academia." },

  hero: { time:"VOLUME 1 · CAP. 3 — THE GYM · LIÇÃO 15",
    en:"I usually ride my motorcycle to the gym.", pt:"Eu normalmente vou de moto para a academia." },

  naturalLiteral: {
    natural:"I usually ride my motorcycle to the gym.",
    literal:"Eu usualmente piloto minha motocicleta para a academia.",
    nota:'Moto, bicicleta e cavalo se “<span class="en" data-say="ride">ride</span>” (você monta em cima). Carro se “<span class="en" data-say="drive">drive</span>” (você dirige de dentro). Não confunda os dois.'
  },

  estrutura: {
    linhas: [
      { palavra:"I usually", classe:"sujeito + advérbio", funcao:"eu normalmente", traducao:"eu normalmente" },
      { palavra:"ride", classe:"verbo", funcao:"a ação (pilotar/montar)", traducao:"pilotar", hl:true },
      { palavra:"my motorcycle", classe:"possessivo + substantivo", funcao:"o veículo", traducao:"minha moto" },
      { palavra:"to the gym", classe:"preposição + lugar", funcao:"o destino", traducao:"para a academia" }
    ],
    nota:'O <span class="en" data-say="usually">usually</span> volta na posição de sempre (antes do verbo), e o <span class="en" data-say="to the gym">to the gym</span> é o mesmo destino da Lição 14.'
  },

  molde: {
    intro:"O molde dos meios de transporte:",
    formula:"I ride / drive / take + [veículo]",
    exemplos: [
      { en:"I ride my bike to work.", pt:"Vou de bicicleta para o trabalho." },
      { en:"I drive my car downtown.", pt:"Dirijo meu carro até o centro." },
      { en:"I take the bus to school.", pt:"Pego o ônibus para a escola." }
    ],
    nota:'<strong>ride</strong> = o que você monta (moto, bike, cavalo); <strong>drive</strong> = dirigir (carro, caminhão); <strong>take</strong> = pegar transporte (bus, train, subway). Também existe <span class="en" data-say="by motorcycle">by motorcycle</span> / <span class="en" data-say="by car">by car</span> (de moto / de carro).'
  },

  conjugacao: {
    nota:'ride → he rides. O <span class="en" data-say="usually">usually</span> fica antes do verbo.',
    linhas: [
      { p:"I", en:"I ride my motorcycle", say:"I ride my motorcycle.", pt:"eu piloto minha moto" },
      { p:"you", en:"you ride your motorcycle", say:"You ride your motorcycle.", pt:"você pilota sua moto" },
      { p:"we", en:"we ride our motorcycles", say:"We ride our motorcycles.", pt:"nós pilotamos nossas motos" },
      { p:"they", en:"they ride their motorcycles", say:"They ride their motorcycles.", pt:"eles pilotam suas motos" },
      { p:"he", en:"he ride<strong>s</strong> his motorcycle", say:"He rides his motorcycle.", pt:"ele pilota a moto dele", hl:true },
      { p:"she", en:"she ride<strong>s</strong> her motorcycle", say:"She rides her motorcycle.", pt:"ela pilota a moto dela", hl:true },
      { p:"it", en:"it ride<strong>s</strong>", say:"It rides.", pt:"(coisa) anda", hl:true }
    ]
  },

  formas: {
    intro:'⚠️ Passado irregular: ride → <span class="en" data-say="rode">rode</span>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't ride my motorcycle to the gym.", pt:"Eu não vou de moto para a academia." },
      { tag:"?", tagType:"bad", en:"Do you ride your motorcycle to the gym?", pt:"Você vai de moto para a academia?" },
      { tag:"passado", en:"I rode my motorcycle to the gym.", pt:"Fui de moto para a academia. (ride → rode)" },
      { tag:"futuro", en:"I will ride my motorcycle to the gym.", pt:"Vou de moto para a academia." }
    ],
    nota:'<span class="en" data-say="rode">rode</span> (passado de ride) soa igual a <span class="en" data-say="road">road</span> (estrada) — só o contexto diferencia.'
  },

  speakNaturally: {
    intro:"Formas naturais de dizer que você vai de moto:",
    linhas: [
      { en:"I take my motorcycle.", pt:"Vou de moto. (pego a moto)" },
      { en:"I go by motorcycle.", pt:"Vou de moto." },
      { en:"I hop on my motorcycle.", pt:"Subo na moto." },
      { en:"I commute by motorcycle.", pt:"Me desloco de moto." },
      { en:"I ride my bike there.", pt:"Vou de moto/bike até lá." }
    ],
    nota:'Atenção: <span class="en" data-say="bike">bike</span> pode ser bicicleta OU moto, dependendo do contexto. <span class="en" data-say="commute">commute</span> = o trajeto diário casa↔trabalho.'
  },

  expressoes: [
    { en:"ride a motorcycle", pt:"pilotar uma moto" },
    { en:"ride a bike", pt:"andar de bicicleta/moto" },
    { en:"drive a car", pt:"dirigir um carro" },
    { en:"take the bus", pt:"pegar o ônibus" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"ride", ipa:"/raɪd/", soa:"“ráid”", sentido:"pilotar / andar de (montado)" },
      { palavra:"motorcycle", ipa:"/ˈmoʊtərsaɪkəl/", soa:"“MÔU-ter-sái-col”", sentido:"moto" },
      { palavra:"usually", ipa:"/ˈjuːʒuəli/", soa:"“IÚ-ju-a-li”", sentido:"normalmente" }
    ],
    fraseSoa:"ai IÚ-ju-a-li ráid mai MÔU-ter-sái-col tu dâ djim",
    fraseIpa:"/aɪ ˈjuːʒuəli raɪd maɪ ˈmoʊtərsaɪkəl tu ðə dʒɪm/",
    notaPron:'<span class="en" data-say="motorcycle">motorcycle</span> é longa: “MÔU-ter-sái-col”, com força na 1ª sílaba. No dia a dia, muita gente encurta para <span class="en" data-say="bike">bike</span> ou <span class="en" data-say="motorbike">motorbike</span>.',
    cultura:'<span class="en" data-say="hop on">hop on</span> (a moto/bike) e <span class="en" data-say="hop in">hop in</span> (o carro) — “hop on” para o que você monta, “hop in” para o que você entra. A mesma lógica de ride/drive.'
  },

  erros: [
    { tipo:"bad", texto:"I drive my motorcycle.", nota:"Moto se <strong>ride</strong> (você monta), não “drive”." },
    { tipo:"good", en:"I ride my motorcycle.", nota:"—" },
    { tipo:"bad", texto:"I ride my car.", nota:"Carro se <strong>drive</strong> (você dirige de dentro)." },
    { tipo:"bad", texto:"I rided to the gym.", nota:"Passado de ride é <strong>rode</strong> (irregular)." }
  ],

  dica: {
    texto:'A regra de ouro do transporte: <strong>RIDE</strong> = você monta em cima; <strong>DRIVE</strong> = você dirige de dentro; <strong>TAKE</strong> = você pega (público). Toque e compare:',
    chips:["ride a motorcycle","ride a bike","drive a car","take the bus"],
    nota:"moto e bike você RIDE; carro você DRIVE; ônibus e trem você TAKE."
  },

  dialogo: [
    { who:"A", en:"How do you get to the gym?", pt:"Como você chega na academia?" },
    { who:"B", en:"I usually ride my motorcycle. It's faster.", pt:"Normalmente vou de moto. É mais rápido." },
    { who:"A", en:"Nice. I just drive there.", pt:"Legal. Eu vou de carro." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete o verbo certo (moto):", before:"I", after:"my motorcycle to the gym.", resposta:"ride", wide:true },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"She", after:"her motorcycle.", resposta:"rides", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["my","I","motorcycle","ride"], resposta:"I ride my motorcycle." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ele vai de moto para a academia.", resposta:"He rides his motorcycle to the gym." },
    { tipo:"transformar", q:"Transforme", base:"I ride my motorcycle to the gym.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't ride my motorcycle to the gym." },
      { tag:"?", tagType:"bad", en:"Do you ride your motorcycle to the gym?" },
      { tag:"passado", en:"I rode my motorcycle to the gym." },
      { tag:"futuro", en:"I will ride my motorcycle to the gym." }
    ]},
    { tipo:"escrever", q:"Crie uma frase com ride, drive ou take + transporte.", exemplo:"I take the bus to work." }
  ],

  flashcards: [
    { pt:"Normalmente vou de moto.", en:"I usually ride my motorcycle." },
    { pt:"Ele vai de moto para a academia.", en:"He rides his motorcycle to the gym." }
  ],

  conexao:'Reencontra o <span class="en" data-say="usually">usually</span> (Lição 11) e o destino <span class="en" data-say="to the gym">to the gym</span> (Lição 14). O verbo <span class="en" data-say="take">take</span> que aparece em “take the bus” é o mesmo do <span class="en" data-say="take a shower">take a shower</span> da Lição 12 — um coringa.',

  revisao: [
    "<strong>ride</strong> (moto/bike/cavalo) × <strong>drive</strong> (carro) × <strong>take</strong> (ônibus/trem).",
    "Passado irregular: ride → <strong>rode</strong>.",
    "<strong>by</strong> + transporte: by car, by motorcycle, by bus.",
    "<strong>hop on</strong> (montar) × <strong>hop in</strong> (entrar).",
    "<strong>commute</strong> = trajeto diário casa↔trabalho."
  ]
});
