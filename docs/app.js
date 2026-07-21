/* ===================================================================
   English Through My Routine — App engine
   Renderiza uma lição a partir do dado (window.LIVRO.licoes) e cuida de
   áudio, exercícios, navegação, tema e progresso local.
   =================================================================== */
(function(){
  "use strict";

  var LIVRO = window.LIVRO || { licoes: [] };
  var $ = function(s,r){return (r||document).querySelector(s);};
  var el = function(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

  /* ---------- Persistência local (progresso) ---------- */
  var store = {
    get:function(k,d){try{var v=localStorage.getItem('eng:'+k);return v==null?d:JSON.parse(v);}catch(e){return d;}},
    set:function(k,v){try{localStorage.setItem('eng:'+k,JSON.stringify(v));}catch(e){}}
  };

  /* ---------- Tema ---------- */
  var root=document.documentElement;
  (function(){var t=store.get('theme',null); if(t)root.setAttribute('data-theme',t);})();
  function toggleTheme(){
    var cur=root.getAttribute('data-theme');
    if(!cur)cur=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
    var next=cur==='dark'?'light':'dark';
    root.setAttribute('data-theme',next); store.set('theme',next);
  }

  /* ---------- Voz / Áudio ---------- */
  var RATES=[0.5,0.75,1];
  var rate=store.get('rate',0.75); if(RATES.indexOf(rate)<0)rate=0.75;
  var voices=[], preferred=null;
  function loadVoices(){
    voices=(window.speechSynthesis&&speechSynthesis.getVoices())||[];
    preferred=voices.find(function(v){return /en[-_]US/i.test(v.lang)&&/female|samantha|aria|jenny|zira|google/i.test(v.name);})
      || voices.find(function(v){return /en[-_]US/i.test(v.lang);})
      || voices.find(function(v){return /^en/i.test(v.lang);}) || null;
  }
  if(window.speechSynthesis){loadVoices();speechSynthesis.onvoiceschanged=loadVoices;}
  function speak(text,btn){
    if(!window.speechSynthesis)return;
    speechSynthesis.cancel();
    var u=new SpeechSynthesisUtterance(text);
    u.lang='en-US'; u.rate=rate; if(preferred)u.voice=preferred;
    if(btn){u.onstart=function(){btn.classList.add('speaking');};
      u.onend=u.onerror=function(){btn.classList.remove('speaking');};}
    speechSynthesis.speak(u);
  }
  var SPK='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 00-2.5-4v8a4.5 4.5 0 002.5-4zM14 3.2v2.1a7 7 0 010 13.4v2.1a9 9 0 000-17.6z"/></svg>';

  /* ---------- Helpers de conteúdo ---------- */
  // frase em inglês clicável (com botão falar). 'say' opcional = texto a falar.
  // O conteúdo aceita marcação simples (ex.: <strong> no -s da conjugação);
  // o texto falado usa 'say' ou a frase sem as tags.
  function EN(text,say){
    var t=String(text==null?'':text);
    var speakText = say!=null ? say : t.replace(/<[^>]+>/g,'');
    return '<span class="en" data-say="'+esc(speakText)+'">'+t+'</span>';
  }
  function lineRow(o){ // {en, pt, tag, tagType, say}
    var tagHtml='';
    if(o.tag){var c=o.tagType==='bad'?'badpill':o.tagType==='good'?'goodpill':(o.tagType==='nat'?'tag n':'tag');
      tagHtml='<span class="'+c+'">'+esc(o.tag)+'</span>';}
    var enHtml=o.wrong?'<span class="wrong">'+esc(o.en)+'</span>':EN(o.en,o.say);
    return '<div class="line">'+tagHtml+enHtml+(o.pt?'<span class="tr">'+esc(o.pt)+'</span>':'')+'</div>';
  }

  /* ---------- Renderizador de seções ---------- */
  function renderLesson(L){
    var m=L.meta||{}, out=[];

    // HERO
    out.push('<header class="hero"><div class="sun"></div>'+
      '<div class="time">'+esc(L.hero&&L.hero.time||'')+'</div>'+
      '<div class="phrase-en">'+esc(L.hero&&L.hero.en||'')+'</div>'+
      '<div class="phrase-pt">'+esc(L.hero&&L.hero.pt||'')+'</div>'+
      '<button class="play-big" data-hero="'+esc(L.hero&&L.hero.en||'')+'">'+
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Ouvir a frase</button>'+
      '<p class="note" style="margin-top:1rem">Toque em qualquer <span style="color:var(--accent)">🔊</span> para ouvir. Ajuste a velocidade no topo.</p>'+
    '</header>');

    // PART I — A Frase
    var p1=[];
    if(L.naturalLiteral){var nl=L.naturalLiteral;
      p1.push(blk('📚','Natural × Literal',
        '<div class="grid2"><div class="card"><div class="k">Natural 🇺🇸</div>'+EN(nl.natural)+'</div>'+
        '<div class="card"><div class="k">Literal 🇧🇷</div>'+esc(nl.literal)+'</div></div>'+
        (nl.nota?'<p class="note">'+nl.nota+'</p>':'')));
    }
    if(L.estrutura){var es=L.estrutura;
      var rows=es.linhas.map(function(r){return '<tr'+(r.hl?' class="hl"':'')+'><td>'+EN(r.palavra)+'</td><td>'+esc(r.classe)+'</td><td>'+esc(r.funcao)+'</td><td>'+esc(r.traducao)+'</td></tr>';}).join('');
      p1.push(blk('🧩','Estrutura — peça por peça',
        '<div class="twrap"><table><thead><tr><th>Palavra</th><th>Classe</th><th>Função</th><th>Tradução</th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
        (es.nota?'<p class="note">'+es.nota+'</p>':'')));
    }
    if(L.molde){var mo=L.molde;
      var exs=(mo.exemplos||[]).map(function(e){return lineRow({en:e.en,pt:e.pt});}).join('');
      p1.push(blk('🧠','O molde (o mais importante)',
        (mo.intro?'<p>'+mo.intro+'</p>':'')+
        '<div class="callout"><span class="formula">'+esc(mo.formula)+'</span></div>'+exs+
        (mo.nota?'<p class="note">'+mo.nota+'</p>':'')));
    }
    if(p1.length)out.push(part('I','A Frase','O que ela diz, como se monta e o molde que ela te ensina.',p1));

    // PART II — A Mecânica
    var p2=[];
    if(L.conjugacao){var cj=L.conjugacao;
      if(cj.verbo){
        var v=cj.verbo, PRON=['I','you','we','they','he','she','it'];
        // PRESENTE — usa as linhas (com tradução)
        var presRows=cj.linhas.map(function(r){return '<tr'+(r.hl?' class="hl"':'')+'><td>'+esc(r.p)+'</td><td>'+EN(r.en,r.say)+'</td><td>'+esc(r.pt)+'</td></tr>';}).join('');
        var presTab='<div class="twrap"><table><thead><tr><th>Pessoa</th><th>Frase</th><th>Tradução</th></tr></thead><tbody>'+presRows+'</tbody></table></div>';
        var presNote='<p class="note">'+(cj.nota||'Só <strong>he / she / it</strong> ganham <strong>-s</strong>. O resto é igual.')+'</p>';
        // PASSADO — mesma forma para todas as pessoas
        var pastRows=PRON.map(function(p){var f=p+' '+v.past;return '<tr'+(p==='I'?' class="hl"':'')+'><td>'+p+'</td><td>'+EN(f,f)+'</td></tr>';}).join('');
        var pastTab='<div class="twrap"><table><thead><tr><th>Pessoa</th><th>Frase</th></tr></thead><tbody>'+pastRows+'</tbody></table></div>';
        var pastNote='<div class="callout"><strong>A boa notícia:</strong> no passado o verbo é <strong>igual para todas as pessoas</strong> — não tem o -s nem muda com he/she/it. Você decora uma forma só: <strong>'+esc(v.base)+' → '+esc(v.past)+'</strong>'+(v.irregular?' <span class="tag">irregular</span>':' <span class="tag n">regular · +ed</span>')+'.'+(v.ptPast?' <br><span class="note">I '+esc(v.past)+' = '+esc(v.ptPast)+'.</span>':'')+'</div>';
        // FUTURO — will + base, igual para todas
        var futRows=PRON.map(function(p){var f=p+' will '+v.base;return '<tr'+(p==='I'?' class="hl"':'')+'><td>'+p+'</td><td>'+EN(f,f)+'</td></tr>';}).join('');
        var futTab='<div class="twrap"><table><thead><tr><th>Pessoa</th><th>Frase</th></tr></thead><tbody>'+futRows+'</tbody></table></div>';
        var futNote='<div class="callout"><strong>Mais fácil ainda:</strong> no futuro é só <strong>will + '+esc(v.base)+'</strong> — igual para todas as pessoas.'+(v.ptFut?' <br><span class="note">I will '+esc(v.base)+' = '+esc(v.ptFut)+'.</span>':'')+'</div>';
        var tabs='<div class="conjtabs">'+
          '<div class="conjtab-btns">'+
            '<button class="conjtab-btn on" data-tab="pres">Presente</button>'+
            '<button class="conjtab-btn" data-tab="past">Passado</button>'+
            '<button class="conjtab-btn" data-tab="fut">Futuro</button>'+
          '</div>'+
          '<div class="conjtab-panel" data-panel="pres">'+presNote+presTab+'</div>'+
          '<div class="conjtab-panel hidden" data-panel="past">'+pastNote+pastTab+'</div>'+
          '<div class="conjtab-panel hidden" data-panel="fut">'+futNote+futTab+'</div>'+
        '</div>';
        p2.push(blk('👥','Conjugação — presente, passado e futuro',tabs));
      } else {
        var rows=cj.linhas.map(function(r){return '<tr'+(r.hl?' class="hl"':'')+'><td>'+esc(r.p)+'</td><td>'+EN(r.en,r.say)+'</td><td>'+esc(r.pt)+'</td></tr>';}).join('');
        p2.push(blk('👥','Conjugação — só uma coisa muda',
          (cj.nota?'<p>'+cj.nota+'</p>':'')+
          '<div class="twrap"><table><thead><tr><th>Pessoa</th><th>Frase</th><th>Tradução</th></tr></thead><tbody>'+rows+'</tbody></table></div>'));
      }
    }
    if(L.formas){var fo=L.formas;
      var rows=fo.linhas.map(lineRow).join('');
      p2.push(blk('🔀','Negativa, pergunta e os outros tempos',
        (fo.intro?'<p>'+fo.intro+'</p>':'')+rows+(fo.nota?'<p class="note">'+fo.nota+'</p>':'')));
    }
    if(p2.length)out.push(part('II','A Mecânica','Como a frase muda de pessoa e de tempo verbal.',p2));

    // PART III — Como Americanos Falam
    var p3=[];
    if(L.speakNaturally){var sn=L.speakNaturally;
      p3.push(blk('🇺🇸','Speak Naturally',
        (sn.intro?'<p>'+sn.intro+'</p>':'')+sn.linhas.map(lineRow).join('')+
        (sn.nota?'<p class="note">'+sn.nota+'</p>':'')));
    }
    if(L.expressoes&&L.expressoes.length){
      var cards=L.expressoes.map(function(e){return '<div class="card">'+EN(e.en)+'<div class="tr" style="font-style:italic;color:var(--muted);font-size:.88rem">'+esc(e.pt)+'</div></div>';}).join('');
      p3.push(blk('💬','Expressões relacionadas','<div class="grid2">'+cards+'</div>'));
    }
    if(L.vocabulario){var vo=L.vocabulario;
      var rows=vo.linhas.map(function(r){
        return '<tr><td>'+EN(r.palavra)+'</td>'+
          '<td class="soacol">'+esc(r.soa)+'</td><td>'+esc(r.sentido)+'</td></tr>';
      }).join('');
      var body='<div class="twrap"><table><thead><tr><th>Palavra</th><th>Como se fala</th><th>Sentido</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
      var fraseSay = (L.hero&&L.hero.en)||'';
      if(vo.fraseSoa){
        body+='<div class="pron-frase"><span class="k">A frase inteira soa assim</span>'+
          '<span class="soa-frase" data-say="'+esc(fraseSay)+'">'+esc(vo.fraseSoa)+'</span>'+
          (vo.notaPron?'<p class="note" style="margin:.4rem 0 0">'+vo.notaPron+'</p>':'')+
          '</div>';
      }
      body+='<p class="note" style="margin-top:.5rem">💡 A coluna <strong>“Como se fala”</strong> é uma aproximação em português. Para ouvir a pronúncia de verdade, toque no 🔊.</p>';
      if(vo.cultura)body+='<div class="callout note"><strong>⭐ Cultura:</strong> '+vo.cultura+'</div>';
      p3.push(blk('📝','Vocabulário &amp; 🔊 Pronúncia',body));
    }
    if(p3.length)out.push(part('III','Como Americanos Falam','O inglês de verdade, além da frase de livro.',p3));

    // PART IV — Erros & Memória
    var p4=[];
    if(L.erros&&L.erros.length){
      var rows=L.erros.map(function(e){
        var tag,enHtml;
        if(e.tipo==='bad'){tag='<span class="badpill">errado</span>';enHtml='<span class="wrong">'+esc(e.texto)+'</span>';}
        else {tag='<span class="goodpill">certo</span>';enHtml=EN(e.en,e.en);}
        // nota renderiza como HTML (aceita <strong>/<em> e frases <span class="en">…</span>)
        var nota=e.nota?'<span class="tr">'+e.nota+'</span>':'';
        return '<div class="line">'+tag+enHtml+nota+'</div>';
      }).join('');
      p4.push(blk('⚠️','Erros comuns de brasileiros',rows));
    }
    if(L.dica){var di=L.dica;
      var chips=(di.chips||[]).map(function(c){return '<span class="chip" data-say="'+esc(c)+'" role="button" tabindex="0">'+esc(c)+'</span>';}).join('');
      p4.push(blk('🎯','Dica de memorização',
        (di.texto?'<p>'+di.texto+'</p>':'')+(chips?'<div class="chips">'+chips+'</div>':'')+
        (di.nota?'<p class="note">'+di.nota+'</p>':'')));
    }
    if(p4.length)out.push(part('IV','Erros & Memória','O que brasileiro erra aqui — e como nunca mais esquecer.',p4));

    // PART V — Pratique
    var p5=[];
    if(L.dialogo&&L.dialogo.length){
      var turns=L.dialogo.map(function(t){return '<div class="turn"><span class="who">'+esc(t.who)+'</span><div class="bubble">'+EN(t.en)+'<div class="tr">'+esc(t.pt)+'</div></div></div>';}).join('');
      p5.push(blk('🗣️','Mini-diálogo','<div class="dlg">'+turns+'</div>'));
    }
    if(L.exercicios&&L.exercicios.length){
      p5.push(blk('🏋️','Exercícios',L.exercicios.map(renderExercise).join('')));
    }
    if(L.flashcards&&L.flashcards.length){
      var cards=L.flashcards.map(function(f,i){return flashcard(f,i);}).join('');
      p5.push(blk('🔁','Puxando da memória','<p class="note">Leia o português, diga o inglês em voz alta, <em>depois</em> vire o cartão para conferir e ouvir.</p>'+cards));
    }
    if(p5.length)out.push(part('V','Pratique','Agora é você. Ouça, escreva, confira.',p5));

    // FOOTER: conexão + revisão + concluir + pager
    var foot='<footer>';
    if(L.conexao){
      foot+='<section class="blk" style="text-align:left"><h3><span class="ic">🔗</span>Conexão com o que você já sabe</h3><p>'+L.conexao+'</p></section>';
    }
    if(L.revisao&&L.revisao.length){
      foot+='<section class="blk" style="text-align:left"><h3><span class="ic">📚</span>Mini revisão</h3><ul class="review note">'+
        L.revisao.map(function(r){return '<li>'+r+'</li>';}).join('')+'</ul></section>';
    }
    foot+='<button class="done-btn" data-done="'+esc(id(L))+'">Marcar lição como concluída ✓</button>';
    foot+=pager(L);
    foot+='</footer>';
    out.push(foot);

    return out.join('');
  }

  function blk(icon,title,body){return '<section class="blk"><h3><span class="ic">'+icon+'</span>'+title+'</h3>'+body+'</section>';}
  function part(idx,title,sub,blocks){
    return '<div class="part"><div class="part-head"><span class="part-idx">'+idx+'</span><span class="part-title">'+esc(title)+'</span></div>'+
      '<p class="part-sub">'+esc(sub)+'</p>'+blocks.join('')+'</div>';
  }

  /* ---------- Exercícios ---------- */
  function renderExercise(ex,i){
    var n=i+1;
    if(ex.tipo==='completar'){
      return '<div class="ex" data-check="'+esc(ex.resposta)+'"><div class="q">'+n+'. '+esc(ex.q)+'</div>'+
        '<div class="fill"><span>'+esc(ex.before||'')+'</span><input type="text" placeholder="?" aria-label="resposta" style="min-width:'+(ex.wide?'11rem':'8rem')+'">'+
        '<span>'+esc(ex.after||'')+'</span><button class="btn checkbtn">Verificar</button></div>'+
        '<div class="fb"></div>'+(ex.dica?'<div class="note" style="margin-top:.3rem">Dica: '+esc(ex.dica)+'</div>':'')+'</div>';
    }
    if(ex.tipo==='reorganizar'){
      var chips=ex.pecas.map(function(c){return '<span class="chip">'+esc(c)+'</span>';}).join('');
      return '<div class="ex"><div class="q">'+n+'. '+esc(ex.q)+'</div><div class="chips">'+chips+'</div>'+
        '<button class="btn revealbtn" data-label="Ver resposta">Ver resposta</button>'+
        '<div class="answer">'+EN(ex.resposta)+'</div></div>';
    }
    if(ex.tipo==='traduzir'){
      return '<div class="ex"><div class="q">'+n+'. '+esc(ex.q)+'</div>'+
        '<p class="note" style="margin:.2rem 0">“'+esc(ex.pt)+'”</p>'+
        '<button class="btn revealbtn" data-label="Ver resposta">Ver resposta</button>'+
        '<div class="answer">'+EN(ex.resposta)+'</div></div>';
    }
    if(ex.tipo==='transformar'){
      var rows=ex.formas.map(function(f){return lineRow({tag:f.tag,tagType:f.tagType||'',en:f.en});}).join('');
      return '<div class="ex"><div class="q">'+n+'. '+esc(ex.q)+' '+EN(ex.base)+'</div>'+
        '<button class="btn revealbtn" data-label="Ver respostas">Ver respostas</button>'+
        '<div class="answer">'+rows+'</div></div>';
    }
    if(ex.tipo==='escrever'){
      return '<div class="ex"><div class="q">'+n+'. '+esc(ex.q)+'</div>'+
        (ex.exemplo?'<button class="btn revealbtn" data-label="Ver um exemplo">Ver um exemplo</button><div class="answer">'+EN(ex.exemplo)+'</div>':'')+'</div>';
    }
    return '';
  }
  function flashcard(f,i){
    return '<div class="flip" data-flip><div class="inner">'+
      '<div class="face front"><div>'+esc(f.pt)+'</div><div class="note" style="margin-top:.5rem">toque para virar</div></div>'+
      '<div class="face back">'+EN(f.en)+'</div></div></div>';
  }

  /* ---------- Navegação ---------- */
  function id(L){return 'licao-'+String(L.meta.licao).padStart(2,'0');}
  function bySlug(slug){return LIVRO.licoes.find(function(L){return id(L)===slug;});}
  function ordered(){return LIVRO.licoes.slice().sort(function(a,b){return a.meta.licao-b.meta.licao;});}

  function pager(L){
    var list=ordered(), i=list.findIndex(function(x){return x.meta.licao===L.meta.licao;});
    var prev=list[i-1], next=list[i+1];
    var h='<div class="pager">';
    h+= prev&&prev.disponivel ? '<a href="#'+id(prev)+'"><div class="k">← Anterior</div><div class="p">'+esc(prev.hero.en)+'</div></a>'
      : '<span class="disabled"><div class="k">← Anterior</div><div class="p">—</div></span>';
    if(next){
      h+= next.disponivel ? '<a class="next" href="#'+id(next)+'"><div class="k">Próxima →</div><div class="p">'+esc(next.hero.en)+'</div></a>'
        : '<span class="next disabled"><div class="k">Próxima (em breve)</div><div class="p">'+esc(next.hero.en)+'</div></span>';
    } else {
      h+='<span class="next disabled"><div class="k">Próxima →</div><div class="p">—</div></span>';
    }
    h+='</div>';
    return h;
  }

  function buildTOC(){
    var list=ordered(), byChap={}, order=[];
    list.forEach(function(L){var c=L.meta.capitulo; if(!byChap[c]){byChap[c]=[];order.push(c);} byChap[c].push(L);});
    var done=store.get('done',{});
    var cur=(location.hash||'').replace('#','')||id(list[0]);
    var h='';
    order.forEach(function(c){
      var chap=byChap[c][0].meta;
      h+='<div class="chapter">Cap. '+c+' — '+esc(chap.capituloNome||'')+'</div>';
      byChap[c].forEach(function(L){
        var sid=id(L), locked=!L.disponivel;
        h+='<button class="tocitem'+(locked?' locked':'')+'" '+(locked?'disabled':'data-go="'+sid+'"')+
          (sid===cur?' aria-current="true"':'')+'>'+
          '<span class="num">'+String(L.meta.licao).padStart(2,'0')+'</span>'+
          '<span class="en">'+esc(L.hero.en)+'</span>'+
          (done[sid]?'<span class="done">✓</span>':(locked?'<span class="lock">🔒</span>':''))+
          '</button>';
      });
    });
    $('#toclist').innerHTML=h;
  }

  /* ---------- Wire interações após render ---------- */
  function wire(){
    // speakers em [data-say]
    Array.prototype.forEach.call(document.querySelectorAll('[data-say]'),function(elm){
      var txt=elm.getAttribute('data-say');
      if(elm.classList.contains('chip')){
        elm.style.cursor='pointer';
        elm.onclick=function(){speak(txt,elm);};
        elm.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();speak(txt,elm);}};
        return;
      }
      if(elm.nextSibling&&elm.nextSibling.classList&&elm.nextSibling.classList.contains('say'))return;
      var b=document.createElement('button');
      b.className='say';b.type='button';b.setAttribute('aria-label','Ouvir: '+txt);b.innerHTML=SPK;
      b.onclick=function(e){e.stopPropagation();speak(txt,b);};
      elm.insertAdjacentElement('afterend',b);
    });
    // hero play
    var hb=$('.play-big'); if(hb)hb.onclick=function(){speak(hb.getAttribute('data-hero'),hb);};
    // abas de conjugação (presente/passado/futuro)
    Array.prototype.forEach.call(document.querySelectorAll('.conjtab-btn'),function(b){
      b.onclick=function(){
        var tab=b.getAttribute('data-tab'), wrap=b.closest('.conjtabs');
        Array.prototype.forEach.call(wrap.querySelectorAll('.conjtab-btn'),function(x){x.classList.toggle('on',x===b);});
        Array.prototype.forEach.call(wrap.querySelectorAll('.conjtab-panel'),function(p){p.classList.toggle('hidden',p.getAttribute('data-panel')!==tab);});
      };
    });
    // exercícios completar
    Array.prototype.forEach.call(document.querySelectorAll('.ex[data-check]'),function(ex){
      var want=norm(ex.getAttribute('data-check'));
      var input=$('input',ex), fb=$('.fb',ex), btn=$('.checkbtn',ex);
      function check(){
        var got=norm(input.value);
        if(got===want){input.className='ok';fb.className='fb ok';fb.textContent='✓ Perfeito!';speak(input.value.trim());}
        else{input.className='no';fb.className='fb no';fb.textContent='Ainda não — tente de novo. (sem “to be”; cuidado com o -s)';}
      }
      btn.onclick=check;
      input.onkeydown=function(e){if(e.key==='Enter')check();};
    });
    // reveal
    Array.prototype.forEach.call(document.querySelectorAll('.revealbtn'),function(b){
      b.onclick=function(){
        var ans=b.parentElement.querySelector('.answer'), open=ans.classList.toggle('show');
        b.textContent=open?'Esconder':(b.getAttribute('data-label')||'Ver resposta');
      };
    });
    // flashcards
    Array.prototype.forEach.call(document.querySelectorAll('[data-flip]'),function(fc){
      fc.onclick=function(){fc.classList.toggle('on');};
    });
    // concluir
    var db=$('.done-btn');
    if(db){
      var sid=db.getAttribute('data-done'), done=store.get('done',{});
      if(done[sid]){db.classList.add('is-done');db.textContent='Lição concluída ✓ (toque para desmarcar)';}
      db.onclick=function(){
        var d=store.get('done',{});
        if(d[sid]){delete d[sid];db.classList.remove('is-done');db.textContent='Marcar lição como concluída ✓';}
        else{d[sid]=1;db.classList.add('is-done');db.textContent='Lição concluída ✓ (toque para desmarcar)';}
        store.set('done',d); buildTOC();
      };
    }
  }
  function norm(s){return (s||'').toLowerCase().replace(/[.,!?]/g,'').replace(/\s+/g,' ').trim();}

  /* ---------- Carga dinâmica do conteúdo da lição ---------- */
  var loading={};
  function ensureLoaded(L){
    return new Promise(function(resolve){
      if(!L){return resolve(null);}
      if(L.carregada){return resolve(L);}
      if(!L.disponivel){return resolve(null);}
      var sid=id(L);
      if(loading[sid]){loading[sid].push(resolve);return;}
      loading[sid]=[resolve];
      var s=document.createElement('script');
      s.src='licoes/'+sid+'.js';
      s.onload=function(){var full=bySlug(sid);(loading[sid]||[]).forEach(function(fn){fn(full);});loading[sid]=null;};
      s.onerror=function(){(loading[sid]||[]).forEach(function(fn){fn(null);});loading[sid]=null;};
      document.head.appendChild(s);
    });
  }

  /* ---------- Modo Praticar (quiz + revisão espaçada) ---------- */
  var practice={pool:[], sess:null};
  function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
  function loadAllAvailable(){return Promise.all(ordered().filter(function(L){return L.disponivel;}).map(function(L){return ensureLoaded(L);}));}
  function collectPool(){
    var pool=[], seen={};
    ordered().forEach(function(L){
      if(!L.carregada)return;
      function add(en,pt){var k=norm(en); if(!en||!pt||seen[k])return; seen[k]=1; pool.push({en:en,pt:pt,licao:L.meta.licao});}
      if(L.hero) add(L.hero.en, L.hero.pt);
      (L.flashcards||[]).forEach(function(f){add(f.en, f.pt);});
    });
    return pool;
  }
  function srsGet(){return store.get('srs',{});}
  function srsKey(it){return norm(it.en);}
  function srsUpdate(it, ok){var s=srsGet(), k=srsKey(it), cur=(s[k]!=null?s[k]:0); s[k]= ok?Math.min(cur+1,5):0; store.set('srs',s);}
  function buildSession(size){
    var s=srsGet();
    var scored=practice.pool.map(function(it){return {it:it, lvl:(s[srsKey(it)]!=null?s[srsKey(it)]:-1)};});
    shuffle(scored); scored.sort(function(a,b){return a.lvl-b.lvl;});
    return scored.slice(0, Math.min(size, scored.length)).map(function(x){return x.it;});
  }
  function attachSpeakers(root){
    Array.prototype.forEach.call((root||document).querySelectorAll('[data-say]'),function(elm){
      if(elm.classList.contains('chip'))return;
      if(elm.nextSibling&&elm.nextSibling.classList&&elm.nextSibling.classList.contains('say'))return;
      var txt=elm.getAttribute('data-say');
      var b=document.createElement('button'); b.className='say'; b.type='button';
      b.setAttribute('aria-label','Ouvir: '+txt); b.innerHTML=SPK;
      b.onclick=function(e){e.stopPropagation();speak(txt,b);};
      elm.insertAdjacentElement('afterend',b);
    });
  }
  function firstSlug(){var f=ordered().filter(function(x){return x.disponivel;})[0]; return f?id(f):'';}

  function enterPractice(){
    if(speechSynthesis)speechSynthesis.cancel();
    closeDrawer();
    document.title='Praticar · English Through My Routine';
    $('#view').innerHTML='<p style="text-align:center;margin-top:5rem" class="note">Preparando a prática…</p>';
    loadAllAvailable().then(function(){
      practice.pool=collectPool();
      if((location.hash||'').replace('#','')!=='praticar')return;
      renderPracticeHome(); buildTOC(); window.scrollTo(0,0);
    });
  }
  function renderPracticeHome(){
    var s=srsGet(), pool=practice.pool;
    var dominados=pool.filter(function(it){return (s[srsKey(it)]||0)>=5;}).length;
    var vistos=pool.filter(function(it){return s[srsKey(it)]!=null;}).length;
    $('#view').innerHTML='<div class="prac-wrap">'+
      '<div class="eyebrow" style="justify-content:flex-start">🎯 Revisão</div>'+
      '<h2 class="prac-title">Praticar</h2>'+
      '<p class="note">Frases sorteadas de todas as lições que você liberou. O app lembra o que você erra e traz de volta primeiro.</p>'+
      '<div class="prac-stats">'+
        '<div class="pstat"><div class="pnum">'+pool.length+'</div><div class="plbl">frases</div></div>'+
        '<div class="pstat"><div class="pnum">'+vistos+'</div><div class="plbl">praticadas</div></div>'+
        '<div class="pstat"><div class="pnum">'+dominados+'</div><div class="plbl">dominadas</div></div>'+
      '</div>'+
      (pool.length? '<button class="prac-start" id="pracStart">Começar — 10 frases</button>'
                  : '<p class="note">Nenhuma frase disponível ainda.</p>')+
      '<button class="btn" id="pracBack" style="margin-top:.9rem">← Voltar às lições</button>'+
      '</div>';
    if($('#pracStart'))$('#pracStart').onclick=function(){startSession(10);};
    $('#pracBack').onclick=function(){location.hash=firstSlug();};
  }
  function startSession(n){ practice.sess={items:buildSession(n), idx:0, right:0}; renderQuestion(); window.scrollTo(0,0); }
  function renderQuestion(){
    var s=practice.sess; if(!s)return;
    if(s.idx>=s.items.length){return renderResult();}
    var it=s.items[s.idx], mode=(s.idx%2===0)?'choice':'type';
    var header='<div class="prac-topbar"><button class="btn" id="pracQuit">✕ Sair</button>'+
      '<div class="prac-prog"><div class="prac-bar" style="width:'+Math.round(s.idx/s.items.length*100)+'%"></div></div>'+
      '<div class="prac-score">'+s.right+' ✓</div></div>';
    var body;
    if(mode==='choice'){
      var opts=[it.en];
      shuffle(practice.pool.filter(function(x){return norm(x.en)!==norm(it.en);})).slice(0,3).forEach(function(x){opts.push(x.en);});
      opts=shuffle(opts);
      body='<div class="prac-q">Qual é a tradução em inglês?</div><div class="prac-pt">'+esc(it.pt)+'</div>'+
        '<div class="prac-opts">'+opts.map(function(o){return '<button class="prac-opt" data-en="'+esc(o)+'">'+esc(o)+'</button>';}).join('')+'</div>'+
        '<div class="prac-fb" id="pracFb"></div>';
    } else {
      body='<div class="prac-q">Escreva em inglês:</div><div class="prac-pt">'+esc(it.pt)+'</div>'+
        '<div class="fill" style="margin-top:1rem"><input type="text" id="pracInput" placeholder="digite em inglês…" style="flex:1;min-width:11rem" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="btn" id="pracCheck">Verificar</button></div>'+
        '<button class="btn" id="pracDont" style="margin-top:.6rem;border-style:dashed">Não sei — revelar</button>'+
        '<div class="prac-fb" id="pracFb"></div>';
    }
    $('#view').innerHTML='<div class="prac-wrap">'+header+body+'</div>';
    $('#pracQuit').onclick=function(){renderPracticeHome();};
    if(mode==='choice'){
      Array.prototype.forEach.call(document.querySelectorAll('.prac-opt'),function(b){
        b.onclick=function(){answer(it, norm(b.getAttribute('data-en'))===norm(it.en), b, false);};
      });
    } else {
      var inp=$('#pracInput'); if(inp)inp.focus();
      var chk=function(){answer(it, norm(inp.value)===norm(it.en), null, false);};
      $('#pracCheck').onclick=chk;
      inp.onkeydown=function(e){if(e.key==='Enter')chk();};
      $('#pracDont').onclick=function(){answer(it,false,null,true);};
    }
  }
  function answer(it, ok, btn, revealed){
    var s=practice.sess, good=ok&&!revealed;
    srsUpdate(it, good);
    if(good)s.right++;
    speak(it.en);
    Array.prototype.forEach.call(document.querySelectorAll('.prac-opt'),function(b){
      b.disabled=true;
      if(norm(b.getAttribute('data-en'))===norm(it.en))b.classList.add('ok');
      else if(b===btn)b.classList.add('no');
    });
    var inp=$('#pracInput'); if(inp){inp.disabled=true; inp.className=good?'ok':'no';}
    var fb=$('#pracFb');
    fb.innerHTML='<div class="'+(good?'pfb-ok':'pfb-no')+'">'+(good?'✓ Correto!':'Resposta certa:')+'</div>'+
      '<div class="prac-answer"><span class="en" data-say="'+esc(it.en)+'">'+esc(it.en)+'</span></div>'+
      '<button class="prac-start" id="pracNext" style="margin-top:1rem">'+((s.idx+1>=s.items.length)?'Ver resultado':'Próxima →')+'</button>';
    attachSpeakers(fb);
    $('#pracNext').onclick=function(){s.idx++;renderQuestion();window.scrollTo(0,0);};
  }
  function renderResult(){
    var s=practice.sess, total=s.items.length, pct=Math.round(s.right/total*100);
    var msg = pct===100?'Perfeito! 🎉' : pct>=70?'Muito bom!' : 'Bom treino — repetir fixa.';
    $('#view').innerHTML='<div class="prac-wrap" style="text-align:center">'+
      '<div class="eyebrow" style="justify-content:center">Resultado</div>'+
      '<div class="prac-big">'+s.right+'<span style="opacity:.4">/'+total+'</span></div>'+
      '<p class="note">'+msg+' As frases que escaparam voltam primeiro na próxima rodada.</p>'+
      '<button class="prac-start" id="pracAgain">Praticar mais 10</button>'+
      '<button class="btn" id="pracBack2" style="margin-top:.9rem">← Voltar às lições</button>'+
      '</div>';
    $('#pracAgain').onclick=function(){startSession(10);};
    $('#pracBack2').onclick=function(){location.hash=firstSlug();};
    window.scrollTo(0,0);
  }

  /* ---------- Router ---------- */
  function show(slug){
    if(slug==='praticar'){ enterPractice(); return; }
    var L=bySlug(slug)||ordered()[0];
    if(!L){$('#view').innerHTML='<p style="text-align:center;margin-top:4rem" class="note">Nenhuma lição carregada.</p>';return;}
    if(!L.disponivel){ // caiu numa lição ainda não escrita: volta pra primeira disponível
      var first=ordered().filter(function(x){return x.disponivel;})[0];
      if(first){location.hash=id(first);return;}
    }
    if(speechSynthesis)speechSynthesis.cancel();
    closeDrawer();
    if(!L.carregada){
      $('#view').innerHTML='<p style="text-align:center;margin-top:5rem" class="note">Carregando lição…</p>';
    }
    ensureLoaded(L).then(function(full){
      var LL=full||L;
      if((location.hash||'').replace('#','')!==id(LL) && bySlug((location.hash||'').replace('#',''))){return;} // usuário já mudou de lição
      if(!full){
        $('#view').innerHTML='<p style="text-align:center;margin-top:5rem" class="note">Não foi possível carregar esta lição. Verifique a conexão e tente de novo.</p>';
        return;
      }
      document.title='Lição '+LL.meta.licao+' — '+LL.hero.en+' · English Through My Routine';
      $('#view').innerHTML=renderLesson(LL);
      wire(); buildTOC();
      window.scrollTo(0,0);
    });
  }

  /* ---------- Drawer ---------- */
  function openDrawer(){$('#drawer').classList.add('on');$('#scrim').classList.add('on');}
  function closeDrawer(){$('#drawer').classList.remove('on');$('#scrim').classList.remove('on');}

  /* ---------- Auto-descoberta de lições novas ----------
     Basta jogar um arquivo licoes/licao-NN.js na pasta: o app procura
     números acima do último conhecido e registra sozinho (o próprio
     arquivo traz meta/capítulo). Para depois de 3 faltas seguidas. */
  function probeLicao(n){
    return new Promise(function(resolve){
      var sid='licao-'+String(n).padStart(2,'0');
      if(bySlug(sid)&&bySlug(sid).carregada)return resolve(true);
      var s=document.createElement('script');
      s.src='licoes/'+sid+'.js'; s.async=true;
      s.onload=function(){resolve(true);};
      s.onerror=function(){resolve(false);};
      document.head.appendChild(s);
    });
  }
  function descobrirNovas(){
    var maior=0;
    LIVRO.licoes.forEach(function(L){if(L.meta&&L.meta.licao>maior)maior=L.meta.licao;});
    var limite=maior+60, faltas=0, n=maior+1, achou=0;
    (function passo(){
      if(faltas>=3||n>limite){ if(achou)buildTOC(); return; }
      probeLicao(n).then(function(ok){
        if(ok){faltas=0;achou++;buildTOC();} else {faltas++;}
        n++; passo();
      });
    })();
  }

  /* ---------- Boot ---------- */
  function boot(){
    // topbar
    $('#menuBtn').onclick=openDrawer;
    $('#scrim').onclick=closeDrawer;
    $('#drawerClose').onclick=closeDrawer;
    $('#themeBtn').onclick=toggleTheme;
    // velocidade
    Array.prototype.forEach.call(document.querySelectorAll('.seg button'),function(b){
      if(parseFloat(b.getAttribute('data-rate'))===rate){b.setAttribute('aria-pressed','true');}
      b.onclick=function(){
        rate=parseFloat(b.getAttribute('data-rate')); store.set('rate',rate);
        Array.prototype.forEach.call(document.querySelectorAll('.seg button'),function(x){x.setAttribute('aria-pressed','false');});
        b.setAttribute('aria-pressed','true');
      };
    });
    // TOC delegação
    $('#toclist').onclick=function(e){
      var b=e.target.closest('[data-go]'); if(b){location.hash=b.getAttribute('data-go');}
    };
    // entrada da prática
    if($('#pracEntry'))$('#pracEntry').onclick=function(){location.hash='praticar';};
    // rotas
    window.addEventListener('hashchange',function(){show((location.hash||'').replace('#',''));});
    show((location.hash||'').replace('#',''));
    // procura lições novas em segundo plano (não atrasa a lição atual)
    setTimeout(descobrirNovas,1200);

    // PWA install
    var deferred=null;
    window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;$('#install').classList.add('on');});
    $('#installBtn').onclick=function(){if(deferred){deferred.prompt();deferred=null;$('#install').classList.remove('on');}};
    $('#installX').onclick=function(){$('#install').classList.remove('on');};
    // service worker
    if('serviceWorker' in navigator){
      window.addEventListener('load',function(){navigator.serviceWorker.register('service-worker.js').catch(function(){});});
    }
  }

  if(document.readyState!=='loading')boot(); else document.addEventListener('DOMContentLoaded',boot);
})();
