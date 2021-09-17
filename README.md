# likejs
Simular função like do SQL no javascript

1 - Adicionar ou importar a função dentro do arquivo like.js.

Exemplos:

<code>
  let string = "banana, abacate, melão";
  string.like("*abacate*"); //Contém "banana"
  string.like("bana*"); //Começa com "bana"
  string.like("lão"); //Termina com "lão"
  string.like("ban*bac*lão"); //Começa com "ban", comtém "bac" e termina com "lão"
  string.like("*bac*te*"); //Contém "bac" e "te" consecutivamente
</code>
