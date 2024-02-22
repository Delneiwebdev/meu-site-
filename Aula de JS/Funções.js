//Função Regular
//Em JavaScript, o termo "função regular" geralmente se refere a funções normais ou tradicionais, que são definidas usando a palavra-chave function. Essas funções podem ser chamadas e executadas em qualquer ponto do código, e podem ser atribuídas a variáveis ou passadas como argumentos para outras funções.

// Declaração de uma função chamada 'soma' que aceita dois parâmetros 'a' e 'b'
function soma(a, b) {
// Retorna a soma dos parâmetros 'a' e 'b'
    return a + b;
  }
  
// Declaração de uma variável 'resultado' que armazenará o resultado da chamada da função 'soma' com os argumentos 3 e 5
  let resultado = soma(3, 5);

// Imprime o valor armazenado na variável 'resultado' no console
  console.log(resultado); // Saída: 8
  

//função anonima

//Uma função anônima em JavaScript é uma função que não possui um nome associado a ela. Ela pode ser definida de várias maneiras, sendo a mais comum usando a expressão de função ou a função de seta. Aqui está um exemplo de uma função anônima usando ambas as abordagens:

// Função anônima usando expressão de função
let x = function(a, b) {
    return a + b;
  };
  
  // Chamando a função anônima
  let resultadoExpressao = x(3, 5);
  console.log(resultadoExpressao); // Saída: 8




  // Arrow function para soma
let y = (a, b) => a + b;

// Chamando a arrow function
let resultadoArrow = y(3, 5);
console.log(resultadoArrow); // Saída: 8

//exemplos 
//regular
function multiplicar (x,y){
    return x*y
}
var multi = multiplicar(5,6)
console.log(multi)

//anonima 
function somavalores(a, b, c) {
    var total = a + b + c;
    return total;  
  }
  
  var p = somavalores(2, 4, 7);
  console.log(p);  // Saída: 13
  