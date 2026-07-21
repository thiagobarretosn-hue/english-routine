# -*- coding: utf-8 -*-
"""
validar-licao.py — verifica (e opcionalmente conserta) um arquivo de lição.

Uso:
    python validar-licao.py docs/licoes/licao-48.js          # só verifica
    python validar-licao.py docs/licoes/licao-48.js --fix    # verifica e conserta
    python validar-licao.py --all                            # verifica todas

POR PADRÃO ELE NÃO ALTERA NADA. Só grava com --fix, e só quando a correção
de acentos é 100% reversível (o arquivo inteiro volta ao UTF-8 original).

Verifica: acentos quebrados, nome do arquivo, meta.licao, campos obrigatórios,
IPA proibido e HTML em campos que o app escapa.
"""
import sys, os, re, glob, io

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

# ---------- Mojibake ----------
# Só sequências INEQUÍVOCAS. Cuidado: "Â" e "â" sozinhos são legítimos na
# pronúncia do curso (SÂM-thing, GÂRL-frend, "âp") — nunca mexer neles.
MARCADORES = ['Ã¡','Ã©','Ã­','Ã³','Ãº','Ã£','Ãµ','Ã§','Ãª','Ã´','Ã¢','Ã ',
              'Ã‰','Ã‡','Ãƒ','Ã•','Ã”','Ã‚','Ãš','Ã“','â€']

def conserta_mojibake(txt):
    """Reversão exata (encode/decode). Se não for exata, NÃO altera nada —
    correção parcial é chute e pode estragar texto bom."""
    if not any(m in txt for m in MARCADORES):
        return txt, False
    for enc in ('cp1252', 'latin-1'):
        try:
            return txt.encode(enc).decode('utf-8'), True
        except (UnicodeEncodeError, UnicodeDecodeError):
            continue
    return txt, False

# ---------- Validações ----------
IPA_SIMBOLOS = 'ɪʌæɜɒʃθðŋʒɑːˈˌʊ'
CAMPOS_SEM_HTML = ['pt', 'traducao', 'classe', 'funcao', 'sentido', 'soa',
                   'literal', 'formula', 'q', 'exemplo']
OBRIGATORIOS = ['window.LIVRO.registrar(', 'meta:', 'hero:', 'conjugacao:', 'revisao:']

def sem_campos_legados(txt):
    """Remove os pares ipa:"..." / fraseIpa:"..." onde quer que estejam
    (dados antigos que o app não exibe mais)."""
    return re.sub(r'\b(ipa|fraseIpa)\s*:\s*"(?:[^"\\]|\\.)*"', '', txt)

def valida(caminho, txt):
    erros, avisos = [], []
    nome = os.path.basename(caminho)

    m = re.match(r'^licao-(\d{2})\.js$', nome)
    if not m:
        erros.append("nome deve ser licao-NN.js (2 dígitos, minúsculo, com hífen) — está '%s'" % nome)
    else:
        mm = re.search(r'licao\s*:\s*(\d+)', txt)
        if not mm:
            erros.append("não achei 'licao: N' dentro de meta")
        elif int(mm.group(1)) != int(m.group(1)):
            erros.append("meta.licao (%s) não bate com o nome do arquivo (%s)" % (mm.group(1), m.group(1)))

    for campo in OBRIGATORIOS:
        if campo not in txt:
            erros.append("faltando: %s" % campo)
    if not txt.rstrip().endswith('});'):
        erros.append("o arquivo deve terminar com '});'")

    achados = sorted(set(m for m in MARCADORES if m in txt))
    if achados:
        erros.append("acentos quebrados: %s — rode com --fix; se não resolver, "
                     "o arquivo veio degradado: pegue o original (copiado da tela da IA)"
                     % ' '.join(achados[:6]))

    # IPA: ignora os campos legados ipa:/fraseIpa: (não são exibidos pelo app)
    visivel = sem_campos_legados(txt)
    ipa = sorted(set(ch for ch in visivel if ch in IPA_SIMBOLOS))
    if ipa:
        erros.append("IPA/fonética é proibido em campo visível — símbolos: %s" % ' '.join(ipa))
    if re.search(r'^\s*(ipa|fraseIpa)\s*:', txt, flags=re.MULTILINE):
        avisos.append("tem campo 'ipa'/'fraseIpa' (legado) — não aparece na tela, mas pode remover")

    for campo in CAMPOS_SEM_HTML:
        for val in re.findall(r'\b' + campo + r'\s*:\s*"((?:[^"\\]|\\.)*)"', txt):
            if '<' in val and '>' in val:
                erros.append("HTML no campo proibido '%s': %s…" % (campo, val[:50]))
                break

    if 'verbo:' not in txt:
        avisos.append("sem 'conjugacao.verbo' — não terá as abas Presente/Passado/Futuro (só ok se o verbo for 'to be')")
    if not re.search(r'volumeNome\s*:\s*"Present"', txt):
        avisos.append('volumeNome deveria ser "Present"')

    return erros, avisos

# ---------- Execução ----------
def processa(caminho, corrigir):
    with io.open(caminho, encoding='utf-8') as f:
        txt = f.read()

    corrigido, deu = conserta_mojibake(txt)
    gravou = False
    if deu and corrigir:
        with io.open(caminho, 'w', encoding='utf-8', newline='\n') as f:
            f.write(corrigido)
        txt, gravou = corrigido, True
    elif deu:
        txt = corrigido      # valida o resultado, mas não grava

    erros, avisos = valida(caminho, txt)

    print("\n=== %s ===" % os.path.basename(caminho))
    if gravou:
        print("  [CORRIGIDO] acentos consertados e regravado em UTF-8")
    elif deu:
        print("  [!] tem acentos quebrados que dá para consertar — rode de novo com --fix")
    for a in avisos:
        print("  [aviso] %s" % a)
    for e in erros:
        print("  [ERRO]  %s" % e)
    if not erros and not deu:
        print("  OK — pronto para commit")
    return len(erros) + (0 if gravou or not deu else 1)

def main():
    args = [a for a in sys.argv[1:]]
    corrigir = '--fix' in args
    args = [a for a in args if a != '--fix']
    if not args:
        print(__doc__); return 1
    if args[0] == '--all':
        base = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'docs', 'licoes')
        alvos = sorted(glob.glob(os.path.join(base, 'licao-*.js')))
    else:
        alvos = args
    total = sum(processa(c, corrigir) for c in alvos)
    print("\n%d arquivo(s) — %d com problema." % (len(alvos), total))
    return 1 if total else 0

if __name__ == '__main__':
    sys.exit(main())
