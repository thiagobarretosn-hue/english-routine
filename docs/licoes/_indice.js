/* Índice do livro — sumário de todas as lições (stubs).
   Cada licao-NN.js chama LIVRO.registrar(...) e substitui seu stub,
   marcando-o como pronto. Assim o menu já mostra o livro inteiro. */
window.LIVRO = (function(){
  var caps = {
    1:'Morning', 2:'Work & Breakfast', 3:'The Gym',
    4:'Lunch & Afternoon', 5:'Class, Sports & Therapy', 6:'Dinner & Night'
  };
  // [ nº da lição, capítulo, frase em inglês ]
  var raw = [
    [1,1,"I wake up at 8 a.m."],
    [2,1,"I brush my teeth after I wake up."],
    [3,1,"I make my bed."],
    [4,1,"I turn on my computer after I make my bed."],
    [5,2,"I start working at 8 a.m."],
    [6,2,"I work from home."],
    [7,2,"I'm a civil engineer and I work with plumbing design."],
    [8,2,"I have breakfast at 10."],
    [9,2,"I make breakfast."],
    [10,2,"I fry eggs — I like scrambled eggs."],
    [11,2,"For breakfast I usually have bread with eggs and a cup of coffee."],
    [12,2,"I take a shower and brush my teeth after breakfast."],
    [13,2,"I stop working at 12."],
    [14,3,"I go to the gym at 1 p.m."],
    [15,3,"I usually ride my motorcycle to the gym."],
    [16,3,"On Mondays I train chest, shoulders, and triceps."],
    [17,3,"On Tuesdays I train back and biceps."],
    [18,3,"On Wednesdays I train legs."],
    [19,3,"On Thursdays I do cardio."],
    [20,3,"I leave the gym at 2 p.m."],
    [21,3,"After my workout, I go back home."],
    [22,4,"When I get home, I take off my clothes and take a shower."],
    [23,4,"I have lunch after I get back from the gym."],
    [24,4,"I usually have rice, beans, and chicken."],
    [25,4,"I go back to work at 2 p.m."],
    [26,4,"I have online meetings with my coworkers."],
    [27,4,"I work until 6 p.m."],
    [28,5,"I have an English class at 7 p.m. with my teacher Átilas."],
    [29,5,"I go to therapy at 11 a.m."],
    [30,5,"On Mondays I play volleyball."],
    [31,5,"I play beach volleyball at Balneário Bica at 8 p.m."],
    [32,5,"I play volleyball from 7 to 10 p.m."],
    [33,5,"After the game, I go back home and take a shower."],
    [34,6,"I have dinner really late every day."],
    [35,6,"I make dinner at home or order food on a delivery app."],
    [36,6,"I cook something different every day."],
    [37,6,"I have dinner with my mom and my sister."],
    [38,6,"After class, I talk to my girlfriend or my mom."],
    [39,6,"I watch soccer games and have dinner in my room."],
    [40,6,"I like watching series and movies."],
    [41,6,"I like playing guitar while I watch something."],
    [42,6,"After dinner, I brush my teeth and take a shower."],
    [43,6,"After dinner, I play on my computer or console."],
    [44,6,"I still watch a movie or series after lying down."],
    [45,6,"I get ready for bed."],
    [46,6,"I usually go to sleep late every day."]
  ];
  var licoes = raw.map(function(r){
    return { meta:{ licao:r[0], capitulo:r[1], capituloNome:caps[r[1]] }, hero:{ en:r[2] }, pronta:false };
  });
  return {
    licoes: licoes,
    registrar: function(L){
      var self=this, i=self.licoes.findIndex(function(x){return x.meta.licao===L.meta.licao;});
      L.pronta = true;
      if(i>=0){
        L.meta.capitulo = L.meta.capitulo || self.licoes[i].meta.capitulo;
        L.meta.capituloNome = L.meta.capituloNome || self.licoes[i].meta.capituloNome;
        self.licoes[i]=L;
      } else { self.licoes.push(L); }
    }
  };
})();
