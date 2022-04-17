// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// //n = 5

// *****
// *****
// *****
// *****
// *****

let n = 15;

for(let numberLines = 0; numberLines <= n; numberLines += 1){
    let square = "*"
    console.log(square.repeat(n));
}