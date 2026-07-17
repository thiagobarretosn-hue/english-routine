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
  var rate=store.get('rate',0.85), voices=[], preferred=null;
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
      var rows=cj.linhas.map(function(r){return '<tr'+(r.hl?' class="hl"':'')+'><td>'+esc(r.p)+'</td><td>'+EN(r.en,r.say)+'</td><td>'+esc(r.pt)+'</td></tr>';}).join('');
      p2.push(blk('👥','Conjugação — só uma coisa muda',
        (cj.nota?'<p>'+cj.nota+'</p>':'')+
        '<div class="twrap"><table><thead><tr><th>Pessoa</th><th>Frase</th><th>Tradução</th></tr></thead><tbody>'+rows+'</tbody></table></div>'));
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
        return '<tr><td>'+EN(r.palavra)+(r.ipa?'<div class="ipa-mini">'+esc(r.ipa)+'</div>':'')+'</td>'+
          '<td class="soacol">'+esc(r.soa)+'</td><td>'+esc(r.sentido)+'</td></tr>';
      }).join('');
      var body='<div class="twrap"><table><thead><tr><th>Palavra</th><th>Como se fala</th><th>Sentido</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
      var fraseSay = (L.hero&&L.hero.en)||'';
      if(vo.fraseSoa){
        body+='<div class="pron-frase"><span class="k">A frase inteira soa assim</span>'+
          '<span class="soa-frase" data-say="'+esc(fraseSay)+'">'+esc(vo.fraseSoa)+'</span>'+
          (vo.notaPron?'<p class="note" style="margin:.4rem 0 0">'+vo.notaPron+'</p>':'')+
          (vo.fraseIpa?'<div class="ipa-mini" style="margin-top:.4rem">fonética (IPA, opcional): '+esc(vo.fraseIpa)+'</div>':'')+
          '</div>';
      } else if(vo.fraseIpa){
        body+='<p class="note">Frase inteira: <span class="ipa">'+esc(vo.fraseIpa)+'</span>. '+(vo.notaPron||'')+'</p>';
      }
      body+='<p class="note" style="margin-top:.5rem">💡 Não precisa entender os símbolos entre barras (isso é o <em>IPA</em>, o alfabeto fonético). Use a coluna <strong>“Como se fala”</strong> e toque no 🔊 para ouvir de verdade.</p>';
      if(vo.cultura)body+='<div class="callout note"><strong>⭐ Cultura:</strong> '+vo.cultura+'</div>';
      p3.push(blk('📝','Vocabulário &amp; 🔊 Pronúncia',body));
    }
    if(p3.length)out.push(part('III','Como Americanos Falam','O inglês de verdade, além da frase de livro.',p3));

    // PART IV — Erros & Memória
    var p4=[];
    if(L.erros&&L.erros.length){
      var rows=L.erros.map(function(e){
        if(e.tipo==='bad')return lineRow({tag:'errado',tagType:'bad',en:e.texto,wrong:true,pt:e.nota});
        return lineRow({tag:'certo',tagType:'good',en:e.en,say:e.en,pt:e.nota});
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

  /* ---------- Router ---------- */
  function show(slug){
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
    // rotas
    window.addEventListener('hashchange',function(){show((location.hash||'').replace('#',''));});
    show((location.hash||'').replace('#',''));

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
