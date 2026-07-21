# 📘 Como criar sua própria aula

Guia para você criar aulas novas no seu app de inglês — **sem programar e sem instalar nada**.
Só precisa do navegador.

> ⏱️ Leva uns 5 minutos. Depois da primeira, leva 2.

---

## Antes de começar

Você precisa de:
- Uma conta no **GitHub** (você já criou ✅)
- Estar **logado** e ter recebido o convite para o repositório
- Qualquer **IA** aberta numa aba (ChatGPT, Claude, Gemini…)

---

## Passo 1 — Pegue o prompt

Abra o arquivo **[PROMPT-NOVA-LICAO.md](PROMPT-NOVA-LICAO.md)** aqui mesmo no GitHub.

Lá dentro tem um texto grande entre as linhas `═══ COPIE DAQUI ═══` e `═══ ATÉ AQUI ═══`.
**Copie tudo o que está entre elas.**

## Passo 2 — Peça a aula para a IA

Cole o prompt na IA. No finalzinho do que você colou tem três linhas para preencher:

```
- Frase em português: <ESCREVA AQUI A FRASE>
- Número da lição: <NN>
- Capítulo: <número e nome>
```

Preencha assim, por exemplo:

```
- Frase em português: Eu vou ao supermercado no sábado
- Número da lição: 47
- Capítulo: 7, "Fim de semana"
```

> 📌 **Qual número usar?** Sempre o próximo livre. Se a última aula do app é a 46, a sua é a **47**.

Envie. A IA vai devolver um bloco de código grandão — **é o arquivo da sua aula**.

## Passo 3 — Copie a resposta

Passe o mouse sobre o bloco de código e clique no botão **Copiar** (ou selecione tudo e Ctrl+C).

> ⚠️ **Não clique em "baixar arquivo"** se a IA oferecer. Baixar costuma **estragar os acentos** (o "ç" e o "ã" viram símbolos esquisitos). Copiar da tela é o certo.

## Passo 4 — Crie o arquivo no GitHub

1. Vá até a pasta **`docs/licoes`** do repositório.
2. Clique no botão **`Add file`** (canto superior direito) → **`Create new file`**.
3. No campo do nome, escreva exatamente:

   ```
   licao-47.js
   ```

   *(troque 47 pelo número da sua aula — sempre com **dois dígitos**: `licao-05.js`, `licao-47.js`)*

4. **Cole** o conteúdo que você copiou da IA na área grande de texto.
5. Desça a página e clique no botão verde **`Commit changes`**.

## Passo 5 — Veja no app 🎉

Abra o app e **recarregue a página**:

### 👉 [Abrir o app](https://thiagobarretosn-hue.github.io/english-routine/)

Sua aula aparece sozinha no menu (☰) — e, se você usou um capítulo novo, ele também é criado sozinho.

---

## Se algo der errado

**A aula não apareceu no menu**
- O nome do arquivo está certo? Tem que ser `licao-` + dois números + `.js` → `licao-47.js`
  (não vale `licão 47.js`, `licao47.js` nem `Licao-47.js`)
- O número que você escreveu no nome do arquivo é o mesmo que está lá dentro, na linha `licao: 47`?
- O número é maior que o da última aula existente?
- Recarregou a página do app? (No celular, feche e abra o app.)

**Aparecem símbolos estranhos no texto** — tipo `LiÃ§Ã£o`, `hoje Ã  noite`, `inglÃªs`
- Foi o encoding. Refaça: **copie da tela da IA** (não baixe o arquivo) e cole de novo no GitHub.
- Se persistir, me avise que eu conserto com um comando.

**Quero apagar uma aula**
- Abra o arquivo `docs/licoes/licao-NN.js` → ícone de **lixeira** 🗑️ → **Commit changes**.
- O app tira ela do menu sozinho.

**Errei alguma coisa e quebrou**
- Relaxa: o GitHub guarda todas as versões. Nada se perde de verdade. É só avisar.

---

## Dicas para aulas boas

- **Uma frase da sua rotina por aula.** Quanto mais real, mais fácil de lembrar.
- **Frases curtas funcionam melhor** que frases enormes.
- Se a frase tiver um verbo novo, ótimo — a aula já monta as abas de Presente, Passado e Futuro sozinha.
- Depois de criar, **use o modo 🎯 Praticar** do app: ele mistura as frases novas com as antigas e traz de volta o que você erra.

Bons estudos! 🚀
