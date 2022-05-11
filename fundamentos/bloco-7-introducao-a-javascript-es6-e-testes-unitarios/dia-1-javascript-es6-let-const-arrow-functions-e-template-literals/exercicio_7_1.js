// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// - Modifique a estrutura da função para que ela seja uma arrow function.
// - Modifique as concatenações para template literals.
// - Copie o código abaixo.


function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

// testingScope(true);

const testingScopeArowFunc = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  if (escopo === true) {
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

// testingScopeArowFunc(false);
//---------------------------------------------------------------------------------------------------------------
// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2, 22, 31, 18, 14];

const arrayNumberSort = array => array.sort(function(a, b){return a - b});
const arrayNumberSorT = array => array.sort(func = (a, b) => b - a);
const arrayNumberSoRT = array => array.sort((a, b) => b - a);
  
// console.log(`Os números ${arrayNumberSort(oddsAndEvens)} se encontram ordenados de forma crescente!`); 
// console.log(`Os números ${arrayNumberSorT(oddsAndEvens)} se encontram ordenados de forma crescente!`); 
//---------------------------------------------------------------------------------------------------------------
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const fatNumber = number => {
  let fatResult = number;
  for(i = number - 1; i > 0; i -= 1) {
    fatResult *= i;
  }
  return fatResult;
}

// const fatNumber2 = number => (i = 0) > 0 ? console.log('primeiro') : console.log('segundo');
const fatNumber2 = number => number > 0 ? number * fatNumber2(number - 1) : 1; //A função chama a si mesmo e aguarda o resultado de cada chamanda até number < 0, retornando 1 e realizando a multiplicação inversa da ordem de cada chamada.

// number/4 > 0 (true) => return 4 * func(number/4 - 1)?          == 4 * 6 === 24
//    number/3 > 0 (true) => return 3 * func(number/3 - 1)?           == 3 * 2 === 6
//        number/2 > 0 (true) => return 2 * func(number/2 - 1)?        == 2 * 1 === 2 
//            number/1 > 0 (true) => return 1 * func(number/1 - 1)?      == 1 * 1 === 1 
//                number/0 > 0 (false) => return 1!

// console.log(fatNumber2(4));
//---------------------------------------------------------------------------------------------------------------
//Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
//      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const bigWord = (word) => {

  const arrayWords = word.split(' ');
  let arrayLength = [];

  for(i of arrayWords){
    arrayLength.push(i.length);
  }
  
  const bigNumber = Math.max(...arrayLength);

  const bigIndex = arrayLength.findIndex((param) => param === bigNumber);
  // const bigIndex = arrayLength.findIndex(
  //   function(param) {
  //     return param === bigNumber;
  //   }
  // );
  return console.log(arrayWords[bigIndex]);
}

// bigWord(frase);