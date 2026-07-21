# Como criar uma lição nova (sem programar)

O app **se atualiza sozinho**. Você não precisa mexer em nenhum código, nem no índice, nem no menu.

## O fluxo em 3 passos

1. **Copie o prompt** que está abaixo e cole em qualquer IA (Claude, ChatGPT, Gemini…).
2. **Diga a frase** que você quer estudar (em português) e o número da lição.
3. **Salve o arquivo** que a IA gerar em `docs/licoes/` com o nome `licao-NN.js` e dê um `git push`.

Pronto. Ao abrir o app, ele **procura sozinho** por lições novas, carrega e coloca no menu — inclusive criando um capítulo novo se for o caso.

> **Numeração:** use o próximo número livre. Hoje o livro vai até a **46**, então a próxima é `licao-47.js`. Se pular um número (ex.: criar a 49 sem a 47 e 48), o app ainda acha — ele tolera até 2 buracos seguidos.

---

# 📋 O PROMPT (copie tudo daqui para baixo)

Você vai gerar **um arquivo JavaScript** de uma lição para o app "English Through My Routine" — um curso de inglês para brasileiros, baseado na rotina real do aluno. Siga o formato **exatamente**, porque o arquivo é lido por um motor que já existe.

## Contexto do curso

- O aluno é **brasileiro, iniciante/intermediário**. Todas as explicações são **em português**; as frases de estudo, em inglês.
- Filosofia: ensinar **moldes reutilizáveis**, não frases decoradas. Sempre mostre o padrão que gera outras frases.
- Tom: direto, encorajador, com explicações curtas e exemplos reais. Nada acadêmico.

## Formato do arquivo

O arquivo inteiro é uma chamada única. Nome: `licao-NN.js` (dois dígitos, ex.: `licao-47.js`).

```js
/* Lição NN — <frase em inglês> */
window.LIVRO.registrar({
  ...  // o objeto descrito abaixo
});
```

## Estrutura completa (campos)

```js
{
  meta: { volume:1, volumeNome:"Present", capitulo:7, capituloNome:"Nome do Capítulo",
          licao:47, tituloEn:"...", tituloPt:"..." },

  hero: { time:"VOLUME 1 · CAP. 7 — NOME · LIÇÃO 47", en:"<frase em inglês>", pt:"<frase em português>" },

  naturalLiteral: { natural:"<inglês natural>", literal:"<tradução ao pé da letra>",
                    nota:"<por que a forma natural é diferente / o que observar>" },

  estrutura: {
    linhas: [ { palavra:"I", classe:"pronome", funcao:"sujeito", traducao:"eu" },
              { palavra:"<verbo>", classe:"verbo", funcao:"a ação", traducao:"<...>", hl:true } ],
    nota:"<observação sobre a estrutura>"
  },

  molde: {
    intro:"<frase introduzindo o padrão>",
    formula:"I + verbo + complemento",          // curto, é exibido em destaque
    exemplos: [ { en:"...", pt:"..." }, { en:"...", pt:"..." }, { en:"...", pt:"..." } ],
    nota:"<dica extra sobre o molde>"
  },

  conjugacao: {
    verbo: { base:"wake up", past:"woke up", irregular:true,
             ptPast:"eu acordei", ptFut:"eu vou acordar" },   // OBRIGATÓRIO — gera as abas
    nota:"<nota do presente>",
    linhas: [   // presente, com tradução por pessoa
      { p:"I",    en:"I wake up",                  say:"I wake up at 8.",    pt:"eu acordo" },
      { p:"you",  en:"you wake up",                say:"You wake up at 8.",  pt:"você acorda" },
      { p:"we",   en:"we wake up",                 say:"We wake up at 8.",   pt:"nós acordamos" },
      { p:"they", en:"they wake up",               say:"They wake up at 8.", pt:"eles acordam" },
      { p:"he",   en:"he wake<strong>s</strong> up", say:"He wakes up at 8.", pt:"ele acorda", hl:true },
      { p:"she",  en:"she wake<strong>s</strong> up", say:"She wakes up at 8.", pt:"ela acorda", hl:true },
      { p:"it",   en:"it wake<strong>s</strong> up",  say:"It wakes up at 8.", pt:"(coisa) acorda", hl:true }
    ]
  },

  formas: {   // transformações da frase (sempre nesta ordem)
    intro:"<observação>",
    linhas: [
      { tag:"neg", tagType:"bad", en:"I don't ...", pt:"..." },
      { tag:"?",   tagType:"bad", en:"Do you ...?", pt:"...?" },
      { tag:"passado", en:"I ...ed ...", pt:"... (verbo → passado)" },
      { tag:"futuro",  en:"I will ...",  pt:"..." }
    ],
    nota:"<nota>"
  },

  speakNaturally: {   // 4 a 6 formas naturais de dizer a mesma ideia
    intro:"<frase>",
    linhas: [ { en:"...", pt:"..." } ],
    nota:"<nota sobre gírias/uso>"
  },

  expressoes: [ { en:"...", pt:"..." }, { en:"...", pt:"..." },
                { en:"...", pt:"..." }, { en:"...", pt:"..." } ],   // 4 itens

  vocabulario: {
    linhas: [ { palavra:"wake up", soa:"“uêik âp”", sentido:"acordar" } ],  // 3 a 4 palavras
    fraseSoa:"ai uêik âp ét êit êi-ém",     // a frase inteira em pronúncia aproximada
    notaPron:"<dica de pronúncia em português>",
    cultura:"<curiosidade cultural, opcional>"
  },

  erros: [   // erros típicos de brasileiro
    { tipo:"bad",  texto:"I am wake up.", nota:"<por que está errado>" },
    { tipo:"good", en:"I wake up.",       nota:"—" }
  ],

  dica: { texto:"<dica de memorização>", chips:["...","...","...","..."], nota:"<nota>" },

  dialogo: [ { who:"A", en:"...", pt:"..." }, { who:"B", en:"...", pt:"..." } ],

  exercicios: [   // 6 exercícios, use os tipos abaixo
    { tipo:"completar",    q:"Complete:", before:"I", after:"up at 8.", resposta:"wake", dica:"opcional", wide:false },
    { tipo:"reorganizar",  q:"Reorganize:", pecas:["up","wake","I"], resposta:"I wake up." },
    { tipo:"traduzir",     q:"Traduza para o inglês:", pt:"Eu não acordo tarde.", resposta:"I don't wake up late." },
    { tipo:"transformar",  q:"Transforme", base:"I wake up at 8.",
      formas:[ { tag:"neg", tagType:"bad", en:"I don't wake up at 8." },
               { tag:"?",   tagType:"bad", en:"Do you wake up at 8?" },
               { tag:"passado", en:"I woke up at 8." },
               { tag:"futuro",  en:"I will wake up at 8." } ] },
    { tipo:"escrever",     q:"Crie uma frase sua com o molde.", exemplo:"I have lunch at noon." }
  ],

  flashcards: [ { pt:"...", en:"..." }, { pt:"...", en:"..." } ],   // 2 itens

  conexao:"<como esta lição se liga às anteriores>",

  revisao: [ "<ponto 1>", "<ponto 2>", "<ponto 3>", "<ponto 4>" ]
}
```

## ⚠️ Regras invioláveis

1. **NUNCA use IPA ou fonética** (`/aɪ weɪk ʌp/`). É proibido no projeto — confunde o aluno brasileiro. Use **só** pronúncia aproximada em português no campo `soa` (ex.: `“uêik âp”`) e em `fraseSoa`.
2. **`conjugacao.verbo` é obrigatório** — é o que gera as abas Presente/Passado/Futuro.
   - `base` = forma base (ex.: `"wake up"`), usada no futuro (`will + base`).
   - `past` = passado (ex.: `"woke up"`), igual para todas as pessoas.
   - `irregular: true/false`.
   - **Exceção:** se o verbo da lição for o **`to be`** (am/is/are), **não inclua** `verbo` — porque `was/were` muda por pessoa e quebraria a regra.
3. **HTML só é permitido em alguns campos.** Pode usar `<strong>`, `<em>` e `<span class="en" data-say="frase">frase</span>` (frase clicável com áudio) em:
   `nota`, `intro`, `texto`, `conexao`, `revisao`, `erros[].nota`, e nos campos **`en`** das conjugações.
   **NUNCA use HTML** em: `pt`, `traducao`, `classe`, `funcao`, `sentido`, `soa`, `literal`, `formula` e `erros[].texto` — ali a tag apareceria como texto na tela.
4. **Todo campo `en` precisa de tradução** no `pt` correspondente.
5. Use **aspas duplas** para as strings e escape apóstrofos quando necessário (`"I don't..."` funciona; dentro de string com aspas simples, use `\'`).
6. Mantenha o **inglês natural** (como um americano fala), não a tradução literal.
7. Escreva as explicações **em português correto e com acentuação**.
8. **Acentuação e encoding (UTF-8).** O texto vai direto para a tela, então os acentos precisam sair corretos: `ç`, `ã`, `é`, `à`, `ê`. **Nunca** entregue o arquivo com caracteres quebrados do tipo `LiÃ§Ã£o`, `inglÃªs`, `hoje Ã  noite`, `â€œ` — isso é UTF-8 lido como Latin-1 e apareceria assim para o aluno. Use aspas tipográficas normais (`“ ”`) e escreva os acentos diretamente (não use entidades HTML como `&ccedil;`).

## O que me entregar

Só o **conteúdo do arquivo `.js`**, pronto para salvar. Sem explicações antes ou depois.

## Minha lição

- **Frase em português:** `<ESCREVA AQUI A FRASE QUE VOCÊ QUER ESTUDAR>`
- **Número da lição:** `<NN>`
- **Capítulo:** `<número e nome — ou diga "criar novo capítulo: Nome">`

---

# Depois de gerar

## ⚠️ Antes de salvar: confira o encoding

Este é **o erro mais comum**. Se a IA (ou o download) entregar o texto assim:

| ❌ quebrado | ✅ correto |
|---|---|
| `LiÃ§Ã£o 47` | `Lição 47` |
| `hoje Ã  noite` | `hoje à noite` |
| `inglÃªs` | `inglês` |
| `âuilâ` | `“uil”` |

…o arquivo está em **encoding errado** e esses símbolos vão aparecer na tela do aluno.

**Como resolver:** copie o texto da tela da IA (em vez de baixar o arquivo) e cole num editor salvando como **UTF-8**. No VS Code: canto inferior direito → clique no encoding → *Save with Encoding* → **UTF-8**.

## Salvando

1. Salve como **`docs/licoes/licao-NN.js`** — exatamente assim: minúsculo, sem acento, com hífen e **dois dígitos** (`licao-47.js`, não `lição 47.js` nem `li_o_47.js`).
2. `git add . && git commit -m "nova lição NN" && git push`
3. Abra o app e recarregue — a lição aparece no menu sozinha.

**Se a lição não aparecer, confira:**
- (a) o **nome do arquivo** com dois dígitos e hífen;
- (b) se começa com `window.LIVRO.registrar({` e termina com `});`;
- (c) se `meta.licao` bate com o número do nome do arquivo;
- (d) se o número é **maior** que o da última lição existente (ou no máximo 2 acima — o app tolera pular até 2 números).
