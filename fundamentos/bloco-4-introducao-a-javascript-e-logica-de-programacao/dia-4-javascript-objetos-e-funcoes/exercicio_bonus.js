//1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

//Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

function romanNumeral(numeral){
//Bloco-1: Amazena os valores em um objeto
    let romanDigit = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
//Bloco-2: Converto a string numeral recebida em uma array.split e faço a comparação de cada indice do array com o index do objeto romanDigt, se forem iguais, atribuo o valor do indice do objeto a um novo array. 
    let numeralSplit = numeral.split('');
    let numeralConvert = [];

    for(indexArray of numeralSplit){
        for(internalIndex in romanDigit){          
            if(indexArray === internalIndex){
                numeralConvert.push(romanDigit[indexArray]);
            }
        }
    }
//Bloco-3: Verifico quantos indices tenho no array numeralConvert e, se apenas um, atribuo o valor a uma nova variavel, se não, realizo a soma ou subtração a depender da ordem do indice do maior número (ou se ambos são iguais)
    let numeralInteger = 0;

    switch(numeralConvert.length){
        case 1: 
            numeralInteger = numeralConvert[0];
            break;
        case 2:
            if(numeralConvert[0] > numeralConvert[1] || numeralConvert[0] === numeralConvert[1]){
                numeralInteger = numeralConvert[0] + numeralConvert[1];
            }else{
                numeralInteger = numeralConvert[1] - numeralConvert[0];        
            };
            break;
    }

    return numeralInteger;
}

let test = 'CM';

// console.log(romanNumeral(test));

//2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(array){

    let positiveList = [];

    for(indexArray of array){

        for(let internalIndex = 0; internalIndex < indexArray.length; internalIndex += 1){
         
            if(indexArray[internalIndex] % 2 === 0){
                positiveList.push(indexArray[internalIndex]);
            }
        }
    }
    return positiveList;
}

// console.log(arrayOfNumbers(vector));

//3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

function countFruit(fruitarray){

    let copyFruitArray = fruitarray; //Copiado array para uso em listIndexArray.push

    let count = 1; //Inicia de 1, pois o proprio elemento já é uma repetição de sí mesmo
    let listCount = []; //Array armazena a quantidade de repetições para cada string

    let listIndexInArray = []; //Array armazena o index de cada string, referente a primeira vez que o mesmo aparece em fruitarray

    for(let index1 = 0; index1 < fruitarray.length; index1 += 1){ //***Utilizo o loop para contar quantas vezes o elemento se repete a partir do seu indice. Ou seja, a string 'Melancia' no indice 0 aparece quantas vezes dali em diante; a string 'Abacate' no indice 1 aparece quantas vezes dali em diante; etc.
        
        listIndexInArray.push(fruitarray.findIndex(fruitarray => fruitarray === copyFruitArray[index1])); //Uso o metodo findIndex, que retorna o índice no array do primeiro elemento que satisfizer a função e acrescento a uma nova lista (listIndexArray). Exemplo: 'Melancia' (dentro do array basket) sempre terá indice 0, pois é a primeira vez que a mesma aparece.
                
        for(let index2 = index1 + 1; index2 < fruitarray.length; index2 += 1){ //***
            if(fruitarray[index1] === fruitarray[index2]){
                count += 1;
            }     
        }

        listCount.push(count);
        count = 1;
        index2 = 0;        
    }


    //Reduzir o array listIndexInArray para seus indices sem repetição de valores.
    let listIndexReduced = [listIndexInArray[0]]; // Já inicia com adição de um valor, pois o primeiro indice de cada array sempre será igual

    for(let index4 = 1; index4 < listIndexInArray.length; index4 += 1){
        let confirmIndex = listIndexReduced.findIndex(listIndexReduced => listIndexReduced === listIndexInArray[index4]);//Verifico se o indice já existe em listIndexReduced, se existe, retornara o valor do seu indice que é >= 0, se não existe, retornará -1, logo, acrescento o mesmo a lista.
        if(confirmIndex === -1){
            listIndexReduced.push(listIndexInArray[index4]);         
        }       
    }

    //Crio um objeto vazio e acresncento as propriedades e valors de acordo com os valores contidos em listIndexReduced
    let fruitTotal = {};

    for(index5 of listIndexReduced){
        let fruit = fruitarray[index5];
        let total = listCount[index5];

        fruitTotal[fruit] = total;     
    }
    return fruitTotal;    
}

// console.log(countFruit(basket));

// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

//4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

  let name = moradores.blocoDois[1].nome;
  let lastName = moradores.blocoDois[1].sobrenome;
  let floor = moradores.blocoDois[1].andar;
  let apartment = moradores.blocoDois[1].apartamento;

  let frase = `O morador do bloco 2 de nome ${name} ${lastName} mora no ${floor}° andar, apartamento ${apartment}`;

//   console.log(frase);

//5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

//Usando um for p cada (basta repetir o mesmo p o bloco seguinte):
// for(index in moradores.blocoUm){
//     let name = moradores.blocoUm[index].nome;
//     let lastName = moradores.blocoUm[index].sobrenome;

//     console.log(name + ' ' + lastName);
// }

//Usando um unico for para todos:
let bloco = 1;

for(index in moradores){

    console.log(`---Moradores do bloco ${bloco}---`);
    
    for(index2 in moradores[index]){

        let name = moradores[index][index2].nome;
        let lastName = moradores[index][index2].sobrenome;

        console.log(name + ' ' + lastName);

    }
    
    bloco += 1;
}