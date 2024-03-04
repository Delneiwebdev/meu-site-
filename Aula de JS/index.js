alert("Erro"); // tipo de saída 1

//document.getElementById("paragrafo").innerHTML = "Olá, <b>Mundo!</b>";  // Mostra a mensagem Olá, Mundo no elemento HTML com o id texto tipo de saída 2
 console.log("Olá, tudo bem?"); // tipo de saída 4

// declarações
let a, b, c;
a = 30;
b = "Olá";
c = 9;
let pessoa = "Delnei"; // JS ignora espaços em branco

// CONCATENAÇÃO

var nome, sobrenome, nomeCompleto;
nome = "Delnei";
sobrenome = "Souza";
idade = "15"
nomeCompleto = " " + nome + " " + sobrenome;
//document.getElementById("paragrafo").innerHTML = nomeCompleto;

/*
Operadores Aritméticos
+ (adição)
- (subtração)
* (multiplicação)
/ (divisão)
% (módulo, retorna o resto da divisão)
++ (incremento)
-- (decremento)

Operadores de Atribuição
= (atribuição)
+= (adiciona e atribui)
-= (subtrai e atribui)
*= (multiplica e atribui)
/= (divide e atribui)
%= (calcula módulo e atribui)

Operadores de Comparação
== (igual a, coerção de tipo)
=== (igual a, sem coerção de tipo)
!= (não igual a, coerção de tipo)
!== (não igual a, sem coerção de tipo)
> (maior que)
< (menor que)
>= (maior ou igual a)
<= (menor ou igual a)

Operadores Lógicos
&& (E lógico)
|| (OU lógico)
! (NÃO lógico)

Operadores Bitwise (Operam a nível de bits)
& (AND)
| (OR)
^ (XOR)
~ (NOT)
<< (Shift left)
>> (Shift right)
>>> (Shift right sem sinal)

Operadores de String
+ (concatenação de string)

Operadores de Tipo
typeof (retorna o tipo de uma variável)
instanceof (verifica se um objeto é uma instância de outro)

Outros Operadores
?: (operador ternário)
, (operador de vírgula, usado para separar expressões)>> 2 é igual a dividido por 4 
*/

//funções

function soma( valor1,valor2){
    return valor1+valor2
}
document.getElementById("paragrafo").innerHTML = soma(5,10);