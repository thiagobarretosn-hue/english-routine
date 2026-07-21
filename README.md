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

O app **se atualiza sozinho**: ninguém mexe em código, índice nem menu.

### 🎓 [**Como criar sua própria aula**](COMO-CRIAR-SUA-AULA.md) — guia passo a passo, sem programar

Resumo: copie o prompt do **[manual](PROMPT-NOVA-LICAO.md)** → cole numa IA com a frase que quer estudar → crie o arquivo `docs/licoes/licao-NN.js` pelo site do GitHub → pronto, a lição aparece no menu.

> 💡 **Dica testada:** criar/subir o arquivo direto pelo **site do GitHub** (*Add file → Create new file*) preserva os acentos. Baixar o arquivo da IA e salvar no PC costuma quebrar o encoding.

## Remover uma lição

Apague `docs/licoes/licao-NN.js` e faça o commit. O app percebe que o arquivo sumiu, tira do menu e limpa o cache offline.

## Conferir antes de publicar

```bash
python validar-licao.py docs/licoes/licao-47.js --fix   # conserta acentos e valida
python validar-licao.py --all                           # confere o livro inteiro
```

Acusa acentos quebrados, nome de arquivo errado, campo obrigatório faltando, alfabeto fonético e HTML em lugar indevido. **Sem `--fix` não altera nada.**

---

## Estrutura

```
docs/                    ← o app (publicado pelo GitHub Pages)
  index.html               casca
  app.js                   motor: renderiza a lição, áudio, exercícios, prática
  styles.css               visual (tema claro/escuro)
  service-worker.js        offline
  licoes/
    _indice.js             sumário do livro
    licao-01.js …          uma lição = um arquivo de dados   ← é aqui que se cria aula

COMO-CRIAR-SUA-AULA.md   ← guia passo a passo (para quem vai estudar)
PROMPT-NOVA-LICAO.md     ← manual + prompt para gerar as lições
validar-licao.py         ← verificador opcional, antes do commit
_projeto/                ← bastidores: plano editorial, rotina original, scripts
```

Sem back-end, sem framework, sem build: HTML, CSS e JavaScript puro servidos pelo GitHub Pages.
Adicionar conteúdo é adicionar **um arquivo de dados** — o motor cuida do resto.
