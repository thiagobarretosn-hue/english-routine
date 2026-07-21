# Como criar uma lição nova (sem programar)

O app **se atualiza sozinho**. Você não mexe em código, nem no índice, nem no menu.

1. **Copie o prompt** abaixo (tudo entre as linhas ═══) e cole em qualquer IA.
2. **Preencha as 3 últimas linhas** (frase, número, capítulo) e envie.
3. **Salve a resposta** em `docs/licoes/licao-NN.js` e dê `git push`.

Ao abrir o app, ele encontra a lição sozinho e a coloca no menu — criando capítulo novo se precisar.

> Hoje o livro vai até a **46**. A próxima é `licao-47.js`.

---
═══════════════ COPIE DAQUI ═══════════════

Você vai gerar **um arquivo JavaScript** de uma lição para o app "English Through My Routine" — curso de inglês para brasileiros baseado na rotina real do aluno. O arquivo é lido por um motor que já existe, então o formato tem que ser **exato**.

## Como você deve me entregar

- Responda **apenas com o conteúdo do arquivo**, dentro de **um único bloco de código**.
- **NÃO** ofereça o arquivo para download, **NÃO** gere anexo, **NÃO** escreva explicações antes ou depois. Eu vou copiar o texto da tela.
- Escreva os acentos **diretamente** (`ç`, `ã`, `é`, `à`, `ê`) e aspas tipográficas normais (`“ ”`). Nunca use entidades HTML (`&ccedil;`) nem devolva texto com caracteres quebrados tipo `LiÃ§Ã£o`, `inglÃªs`, `â€œ`.

## Contexto do curso

- Aluno **brasileiro, iniciante/intermediário**. Explicações **em português**; frases de estudo em inglês.
- Filosofia: ensinar **moldes reutilizáveis**, não frases decoradas. Sempre mostrar o padrão que gera outras frases.
- Tom: direto e encorajador. Explicações curtas, exemplos reais. Nada acadêmico.
- Inglês **natural** (como um americano fala), não tradução literal.

## ⚠️ Regras invioláveis

1. **PROIBIDO usar IPA / fonética** (`/aɪ weɪk ʌp/`). Confunde o aluno brasileiro. A pronúncia é dada **só** em aproximação escrita em português, nos campos `soa` e `fraseSoa`.
2. **`conjugacao.verbo` é obrigatório** (gera as abas Presente/Passado/Futuro):
   - `base` = forma base (ex.: `"wake up"`) — usada no futuro (`will + base`);
   - `past` = passado (ex.: `"woke up"`) — a mesma forma para todas as pessoas;
   - `irregular: true/false`.
   - **Única exceção:** se o verbo da lição for o **`to be`** (am/is/are), **omita** o `verbo` — `was/were` muda por pessoa e quebraria a regra.
3. **HTML só em campos permitidos.** Pode usar `<strong>`, `<em>` e `<span class="en" data-say="frase">frase</span>` em:
   `nota`, `intro`, `texto`, `conexao`, `revisao`, `erros[].nota` e nos campos **`en`** da conjugação.
   **NUNCA** em: `pt`, `traducao`, `classe`, `funcao`, `sentido`, `soa`, `literal`, `formula`, `q`, `exemplo` e `erros[].texto` — ali a tag apareceria como texto na tela.
4. **Sempre que citar uma palavra ou frase em inglês dentro de uma nota, embrulhe em `<span class="en" data-say="...">`** — é isso que cria o botão de áudio 🔊. Use `<strong>` só para destacar termos em português ou regras.
5. **Todo campo `en` precisa da tradução** no `pt` correspondente.
6. `meta.volumeNome` é sempre **`"Present"`**. `meta.volume` é sempre **`1`**.
7. Use **aspas duplas** nas strings. Dentro delas, apóstrofo normal funciona (`"I don't..."`). Se precisar de aspas duplas no meio, escape: `class=\"en\"`.
8. **Flashcards são frases completas**, nunca fragmentos soltos.

## Convenções de pronúncia aproximada (siga à risca)

O curso escreve a pronúncia "à brasileira". Use este padrão:

| Som em inglês | Escreva | Exemplo |
|---|---|---|
| `th` (teeth, think) | **th** (explique: língua entre os dentes) | teeth → “títh” |
| `sh` (shower, she) | **ch** | shower → “CHÁ-uer” |
| `ch` (chest, watch) | **tch** | chest → “tchést” |
| `h` aspirado (have, home) | **r** | have → “rév”, home → “rôum” |
| `w` (wake, will) | **u** | wake → “uêik” |
| `r` final/forte (work) | **âr** | work → “uârk” |
| `a` de cat/at | **é** (aberto) | at → “ét” |
| `u` de up/cup | **â** | up → “âp” |
| `ee`/`ea` longo (sleep) | **íi** | sleep → “slíip” |
| `oo` de food | **úu** | food → “fúud” |
| ditongo `o` (home, go) | **ôu** | go → “gôu” |

- Marque a **sílaba forte em MAIÚSCULAS**: `computer` → `“kâm-PIÚ-ter”`.
- Envolva cada `soa` em aspas tipográficas: `soa: "“uêik âp”"`.

## Formato — exemplo real e completo (imite este estilo)

```js
/* Lição 3 — I make my bed. */
window.LIVRO.registrar({
  meta: { volume:1, volumeNome:"Present", capitulo:1, capituloNome:"Morning", licao:3,
    tituloEn:"I make my bed.", tituloPt:"Eu arrumo minha cama." },

  hero: { time:"VOLUME 1 · CAP. 1 — MORNING · LIÇÃO 03",
    en:"I make my bed.", pt:"Eu arrumo minha cama." },

  naturalLiteral: {
    natural:"I make my bed.",
    literal:"Eu faço minha cama.",
    nota:'Aqui está o pulo do gato: <span class="en" data-say="make">make</span> normalmente é “fazer”, mas com <span class="en" data-say="bed">bed</span> significa <strong>arrumar</strong>.'
  },

  estrutura: {
    linhas: [
      { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
      { palavra:"make", classe:"verbo", funcao:"a ação (aqui = arrumar)", traducao:"arrumar", hl:true },
      { palavra:"my bed", classe:"possessivo + substantivo", funcao:"o objeto", traducao:"minha cama" }
    ],
    nota:'<span class="en" data-say="make">make</span> é um verbo coringa: aparece em make coffee, make money, make a decision.'
  },

  molde: {
    intro:"Guarde o molde do verbo <strong>make</strong> + objeto:",
    formula:"I make + [o que fica pronto]",
    exemplos: [
      { en:"I make breakfast.", pt:"Eu preparo o café da manhã." },
      { en:"I make coffee.", pt:"Eu faço café." },
      { en:"I make a decision.", pt:"Eu tomo uma decisão." }
    ],
    nota:"Em português usamos verbos diferentes (arrumar, preparar, fazer, tomar), mas em inglês é tudo <strong>make</strong>."
  },

  conjugacao: {
    verbo: { base:"make my bed", past:"made my bed", irregular:true,
             ptPast:"eu arrumei a cama", ptFut:"eu vou arrumar a cama" },
    nota:"No presente, só <strong>he / she / it</strong> ganham <strong>-s</strong>. O resto é igual.",
    linhas: [
      { p:"I",    en:"I make my bed",    say:"I make my bed.",    pt:"eu arrumo minha cama" },
      { p:"you",  en:"you make your bed", say:"You make your bed.", pt:"você arruma sua cama" },
      { p:"we",   en:"we make our beds",  say:"We make our beds.",  pt:"nós arrumamos nossas camas" },
      { p:"they", en:"they make their beds", say:"They make their beds.", pt:"eles arrumam suas camas" },
      { p:"he",   en:"he make<strong>s</strong> his bed",  say:"He makes his bed.",  pt:"ele arruma a cama dele", hl:true },
      { p:"she",  en:"she make<strong>s</strong> her bed", say:"She makes her bed.", pt:"ela arruma a cama dela", hl:true },
      { p:"it",   en:"it make<strong>s</strong>",          say:"It makes.",          pt:"(coisa) faz", hl:true }
    ]
  },

  formas: {
    intro:'Atenção ao passado: <span class="en" data-say="make">make</span> é <strong>irregular</strong>.',
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't make my bed.", pt:"Eu não arrumo minha cama." },
      { tag:"?",   tagType:"bad", en:"Do you make your bed?", pt:"Você arruma sua cama?" },
      { tag:"passado", en:"I made my bed.", pt:"Eu arrumei minha cama. (make → made, irregular)" },
      { tag:"futuro",  en:"I will make my bed.", pt:"Eu vou arrumar minha cama." }
    ],
    nota:'<span class="en" data-say="make">make</span> → <span class="en" data-say="made">made</span> (não existe “maked”).'
  },

  speakNaturally: {
    intro:"Jeitos naturais de dizer a mesma ideia:",
    linhas: [
      { en:"I make my bed every morning.", pt:"Arrumo a cama toda manhã." },
      { en:"I make my bed as soon as I get up.", pt:"Arrumo a cama assim que levanto." },
      { en:"I always make my bed.", pt:"Sempre arrumo a cama." },
      { en:"I never leave my bed unmade.", pt:"Nunca deixo a cama desarrumada." }
    ],
    nota:'<span class="en" data-say="unmade">unmade</span> = desarrumada (o prefixo <strong>un-</strong> nega).'
  },

  expressoes: [
    { en:"make the bed", pt:"arrumar a cama" },
    { en:"make breakfast", pt:"preparar o café da manhã" },
    { en:"make a decision", pt:"tomar uma decisão" },
    { en:"make money", pt:"ganhar dinheiro" }
  ],

  vocabulario: {
    linhas: [
      { palavra:"make", soa:"“mêik”", sentido:"fazer / arrumar / preparar" },
      { palavra:"bed", soa:"“béd”", sentido:"cama" },
      { palavra:"my", soa:"“mai”", sentido:"meu / minha" }
    ],
    fraseSoa:"ai mêik mai béd",
    notaPron:'<span class="en" data-say="make">make</span> soa “mêik” (com o ditongo “êi”), nunca “méki”. O <strong>e</strong> final em inglês quase sempre é mudo.',
    cultura:'Existe um discurso famoso nos EUA: “<span class="en" data-say="If you want to change the world, make your bed.">If you want to change the world, make your bed.</span>” — arrumar a cama é a primeira pequena vitória do dia.'
  },

  erros: [
    { tipo:"bad",  texto:"I do my bed.", nota:"Cama se arruma com <strong>make</strong>, não com do." },
    { tipo:"good", en:"I make my bed.", nota:"—" },
    { tipo:"bad",  texto:"I maked my bed.", nota:"Passado de make é <strong>made</strong> (irregular)." }
  ],

  dica: {
    texto:'Pense em <span class="en" data-say="make">make</span> como “deixar pronto”. Sua manhã é uma sequência de coisas que você deixa prontas:',
    chips:["wake up","brush my teeth","make my bed","make breakfast"],
    nota:"Toque em cada uma. O verbo make vai reaparecer no café da manhã."
  },

  dialogo: [
    { who:"A", en:"Do you make your bed every day?", pt:"Você arruma a cama todo dia?" },
    { who:"B", en:"Yeah, I make my bed right after I get up.", pt:"Sim, arrumo a cama logo depois de levantar." },
    { who:"A", en:"Honestly, I don't always make mine.", pt:"Sinceramente, nem sempre arrumo a minha." }
  ],

  exercicios: [
    { tipo:"completar", q:"Complete:", before:"I", after:"my bed.", resposta:"make" },
    { tipo:"completar", q:"Complete a 3ª pessoa:", before:"He", after:"his bed.", resposta:"makes", wide:true, dica:"lembra do -s." },
    { tipo:"reorganizar", q:"Reorganize as peças:", pecas:["bed","I","my","make"], resposta:"I make my bed." },
    { tipo:"traduzir", q:"Traduza para o inglês:", pt:"Ela arruma a cama todo dia.", resposta:"She makes her bed every day." },
    { tipo:"transformar", q:"Transforme", base:"I make my bed.", formas:[
      { tag:"neg", tagType:"bad", en:"I don't make my bed." },
      { tag:"?",   tagType:"bad", en:"Do you make your bed?" },
      { tag:"passado", en:"I made my bed." },
      { tag:"futuro",  en:"I will make my bed." }
    ]},
    { tipo:"escrever", q:"Crie uma frase sua com o verbo make.", exemplo:"I make coffee every morning." }
  ],

  flashcards: [
    { pt:"Arrumo a cama assim que levanto.", en:"I make my bed as soon as I get up." },
    { pt:"Ele arruma a cama dele.", en:"He makes his bed." }
  ],

  conexao:'Esta lição reforça o possessivo da Lição 2 (<span class="en" data-say="my teeth">my teeth</span> → <span class="en" data-say="my bed">my bed</span>) e apresenta o verbo <span class="en" data-say="make">make</span>.',

  revisao: [
    "<strong>make</strong> = fazer / arrumar / preparar — o sentido vem do objeto.",
    "Passado irregular: <strong>make → made</strong>.",
    "Cama se arruma com <strong>make</strong>, não com <em>do</em>.",
    "3ª pessoa com <strong>-s</strong>: he make<strong>s</strong>."
  ]
});
```

## Quantidades esperadas

`estrutura.linhas` 3–5 · `molde.exemplos` 3 · `conjugacao.linhas` 7 (I, you, we, they, he, she, it) · `formas.linhas` 4 (neg, ?, passado, futuro — nesta ordem) · `speakNaturally.linhas` 4–6 · `expressoes` 4 · `vocabulario.linhas` 3–4 · `erros` 3–5 (alterne bad/good) · `dica.chips` 4 · `dialogo` 2–4 turnos · `exercicios` 6 (um de cada tipo: completar, completar, reorganizar, traduzir, transformar, escrever) · `flashcards` 2 · `revisao` 4–5.

## ✅ Antes de responder, confira você mesmo

1. Acentos corretos e nenhum caractere quebrado (`Ã`, `â€`)?
2. Nenhum IPA em lugar nenhum?
3. `conjugacao.verbo` presente (ou o verbo é `to be`)?
4. HTML **apenas** nos campos permitidos? Nenhuma tag em `pt`/`traducao`/`sentido`/`soa`/`formula`/`q`?
5. Toda palavra em inglês citada nas notas está em `<span class="en" data-say="...">`?
6. `volumeNome:"Present"` e `volume:1`?
7. As 7 pessoas na conjugação, com `<strong>s</strong>` marcando o -s em he/she/it?
8. Flashcards são frases completas?
9. O objeto abre com `window.LIVRO.registrar({` e fecha com `});`?

## Minha lição

- **Frase em português:** `<ESCREVA AQUI A FRASE>`
- **Número da lição:** `<NN>`
- **Capítulo:** `<número e nome — ou "criar novo capítulo: Nome">`

═══════════════ ATÉ AQUI ═══════════════
---

# Depois que a IA responder

## 1. Copie da tela (não baixe o arquivo)

Baixar costuma quebrar os acentos e o nome. **Selecione o bloco de código, copie e cole** num editor.

> ✅ **O caminho mais seguro (testado):** cole o conteúdo direto no **site do GitHub** — *Add file → Create new file* (ou *Upload files*), nomeie `docs/licoes/licao-NN.js` e commite por lá. Os acentos chegam intactos, sem passar pelo encoding do seu PC.

## 2. Salve como UTF-8

No VS Code: canto inferior direito → clique no encoding → *Save with Encoding* → **UTF-8**.

Se você vir qualquer coisa da coluna ❌, o encoding quebrou:

| ❌ quebrado | ✅ correto |
|---|---|
| `LiÃ§Ã£o` | `Lição` |
| `hoje Ã  noite` | `hoje à noite` |
| `inglÃªs` | `inglês` |
| `âuilâ` | `“uil”` |

## 3. Nome e publicação

- Nome exato: **`docs/licoes/licao-NN.js`** — minúsculo, sem acento, com hífen, **dois dígitos** (`licao-48.js`).
- `git add . && git commit -m "lição NN" && git push`
- Recarregue o app: a lição aparece sozinha.

**Se não aparecer:** confira o nome do arquivo, se começa com `window.LIVRO.registrar({` e fecha com `});`, se `meta.licao` bate com o número do arquivo, e se o número é no máximo 2 acima da última lição existente.

# Removendo uma lição

**Apague o arquivo** `docs/licoes/licao-NN.js` e dê `git push`. Só isso.

O app confere as lições a cada abertura: ao ver que o arquivo sumiu do servidor, ele **tira a lição do menu, limpa o cache offline** e, se você estivesse justamente nela, te leva para outra. Vale tanto para as lições do sumário (1–46) quanto para as que você adicionou depois.

> Só remove com resposta **404 confirmada** do servidor. Se você estiver sem internet, nada é apagado — ele mantém tudo que já estava salvo.

# Conferindo antes de publicar

```
python validar-licao.py docs/licoes/licao-48.js --fix   # conserta acentos e valida
python validar-licao.py --all                           # confere o livro inteiro
```

O validador acusa: acentos quebrados, nome de arquivo errado, `meta.licao` trocado, campo obrigatório faltando, IPA e HTML em campo que o app escapa. **Sem `--fix` ele não altera nada.**
