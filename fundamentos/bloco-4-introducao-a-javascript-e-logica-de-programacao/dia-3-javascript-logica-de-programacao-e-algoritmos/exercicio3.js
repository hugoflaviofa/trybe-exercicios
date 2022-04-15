//Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// Passo 1
let words = [];

for(index of array){
    words.push(index.length);
}
// Passo 2
let bigger = Math.max(...words);
let smaller = Math.min(...words);
// Passo 3
let biggerWordIndex = words.findIndex(words => words === bigger);
let smallerWordIndex = words.findIndex(words => words === smaller);
// Passo 4
console.log(`A maior palavra é "${array[biggerWordIndex]}"`);
console.log(`A menor palavra é "${array[smallerWordIndex]}"`);

//1-Criado um novo array com o length de cada index do array inicial
//2-Localizado o maior e menor numero dentro deste array com Math.max/min
//3-localixado o index do maior e menor numero dentro do array com findIndex (https://www.horadecodar.com.br/2021/06/29/encontrar-maior-e-menor-numero-de-array-em-javascript/)
//4-Exibido as respectivas palavras de acordo com o index encontrado anteriormente (https://www.javascripttutorial.net/es6/javascript-array-findindex/)