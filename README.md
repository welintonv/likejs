# likejs
<b>Objetivo:</b> Simular função LIKE do SQL no javascript.

<b>Primeiro importar o arquivo like.js.</b>

<b>Casos de uso:</b>
<pre>
<code> 
let string = "banana, abacate, melão";

//Contém "abacate"
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
