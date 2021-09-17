# likejs
Simular função LIKE do SQL no javascript

1 - Adicionar ou importar a função dentro do arquivo like.js.

Exemplos:
<pre>
<code> 
let string = "banana, abacate, melão";

//Contém "banana"
string.like("*abacate*");

//Começa com "bana";
string.like("bana*");

//Termina com "lão";
string.like("*lão");

//Começa com "ban", comtém "bac" e termina com "lão";
string.like("ban*bac*lão");

//Contém "bac" e "te" consecutivamente;
string.like("*bac*te*");
</code>
</pre>
