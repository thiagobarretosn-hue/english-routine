# English Through My Routine

Um app de inglês construído sobre uma rotina real: cada frase do dia a dia vira uma lição completa.
Feito para brasileiros — todas as explicações em português, o inglês do jeito que um americano fala.

### 👉 [Abrir o app](https://thiagobarretosn-hue.github.io/english-routine/)

Funciona no celular e no computador. Dá para **instalar** (vira ícone na tela) e usar **offline**.

---

## O que tem dentro

- **46 lições** — a rotina inteira, do acordar ao dormir, em 6 capítulos.
- **🔊 Áudio em tudo** — toque em qualquer frase para ouvir, com controle de velocidade (0.5× / 0.75× / 1×).
- **Conjugação em abas** — Presente, Passado e Futuro lado a lado, mostrando o verbo mudar.
- **Pronúncia em português** — “uêik âp”, sem alfabeto fonético.
- **Exercícios que se corrigem** — completar, reorganizar, traduzir, transformar.
- **🎯 Modo Praticar** — quiz que embaralha frases de todas as lições, com **revisão espaçada**: o que você erra volta primeiro.
- **Tema claro/escuro** e impressão em PDF.

Cada lição segue a mesma estrutura: a frase → como ela se monta → o molde que gera outras frases → conjugação → como americanos falam → vocabulário e pronúncia → erros típicos de brasileiro → diálogo → exercícios → revisão.

---

## Criar uma lição nova

O app **se atualiza sozinho**: você não mexe em código, índice nem menu.

1. Abra o **[manual com o prompt pronto](PROMPT-NOVA-LICAO.md)** e copie o prompt.
2. Cole em qualquer IA, diga a frase que quer estudar e o número da lição.
3. Salve o resultado em `docs/licoes/licao-NN.js` e faça o commit.

Ao abrir o app, ele encontra a lição sozinho e a coloca no menu — criando capítulo novo se precisar.

> 💡 **Dica testada:** subir o arquivo direto pelo **site do GitHub** (*Add file → Upload files*) preserva os acentos. Baixar o arquivo da IA e salvar no PC costuma quebrar o encoding.

## Remover uma lição

Apague `docs/licoes/licao-NN.js` e faça o commit. O app percebe que o arquivo sumiu, tira do menu e limpa o cache offline.

## Conferir antes de publicar

```bash
python validar-licao.py docs/licoes/licao-48.js --fix   # conserta acentos e valida
python validar-licao.py --all                           # confere o livro inteiro
```

Acusa acentos quebrados, nome de arquivo errado, campo obrigatório faltando, alfabeto fonético e HTML em lugar indevido. **Sem `--fix` não altera nada.**

---

## Estrutura

```
docs/                 ← o app (publicado pelo GitHub Pages)
  index.html            casca
  app.js                motor: renderiza a lição, áudio, exercícios, prática
  styles.css            visual (tema claro/escuro)
  service-worker.js     offline
  licoes/
    _indice.js          sumário do livro
    licao-01.js …       uma lição = um arquivo de dados
PROMPT-NOVA-LICAO.md  ← manual + prompt para gerar lições
validar-licao.py      ← verificador antes do commit
src/ · livro/         ← plano editorial e material de apoio
```

Sem back-end, sem framework, sem build: HTML, CSS e JavaScript puro servidos pelo GitHub Pages.
Adicionar conteúdo é adicionar **um arquivo de dados** — o motor cuida do resto.
