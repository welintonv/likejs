# likejs
Simular função like do SQL no javascript

1 - Adicionar ou importar a função dentro do arquivo like.js.

Exemplos:

<code>
  let string = "banana, abacate, melão";
  
  //Contém "banana" </br>
  string.like("*abacate*");
  
  //Começa com "bana" </br>
  string.like("bana*");
  
  //Termina com "lão" </br>
  string.like("lão");
  
  //Começa com "ban", comtém "bac" e termina com "lão" </br>
  string.like("ban*bac*lão");
  
  //Contém "bac" e "te" consecutivamente </br>
  string.like("*bac*te*");
</code>
