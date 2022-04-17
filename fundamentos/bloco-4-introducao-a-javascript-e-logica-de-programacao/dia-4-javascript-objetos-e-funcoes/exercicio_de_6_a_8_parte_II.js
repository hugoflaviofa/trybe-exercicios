//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(word){
    
    let wordSplit = word.split('');
    let wordJoin = wordSplit.join('');

    let wordReverse = wordSplit.reverse();
    let wordReverseJoin = wordReverse.join('');

    if(wordJoin === wordReverseJoin){
        return true;
    }
    return false;
};

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxIndexInArray(array){

    let maxNumber = Math.max(...array);
    let index = array.findIndex(array => array === maxNumber)

    return index;
}

let arraytest = [-2, 3, 6, 7, 10, 1];

// console.log(maxIndexInArray(arraytest));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minArray(array){

    let minNumber = Math.min(...array);
    let index = array.findIndex(array => array === minNumber)

    return index;
}

let arraytest2 = [2, 4, 6, 7, 10, 0, -3];

// console.log(minArray(arraytest2));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggerNameInArray(arrayNames){

    let listSizeNames = [];

    for(index of arrayNames){
        let numberLetters = index;
        listSizeNames.push(numberLetters.length)
    }

    let indexTheBiggerName = maxIndexInArray(listSizeNames);
    let theBiggerName = arrayNames[indexTheBiggerName];

    return theBiggerName;

}

let arraytest3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// console.log(biggerNameInArray(arraytest3));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeatedNumber(arrayNumber){

    //Funcionamento: Armazenar dentro de um novo Array por quantas vezes o determidado valor em um indice se repete, comparando o mesmo apenas com os números que vem a seguir. O primeiro número que mais se repetir terá o maior valor armazenado no seu indice.
    //Ex: [2, 3, 2, 5, 8, 2, 3] - O número "2" no indice 0 se repete 3 vezes quando comparado com os nímeros seguintes; O número "3" no indice 1 se repete 2 vezes; Número "2" no indice 2 se repete 2 vezes; [...].
    //No novo array fica armazenado as repeticoes de cada indice do primeiro array, logo o indice com maior valor no segundo array é respectivo ao numero que mais se repete do primeiro array. Assim, descubro qual o maior valor do segundo array e retorno o mesmo indice, porem, referente ao primeiro array. 

    let count = 1;

    let arrayCount = [];

    for(let index = 0; index < arrayNumber.length; index += 1){
        for(let index2 = index + 1; index2 < arrayNumber.length; index2 += 1){

            if(arrayNumber[index] === arrayNumber[index2]){
                count += 1;
            }
        }

        arrayCount.push(count);
        count = 1;
    }

    let indexNumber = maxIndexInArray(arrayCount);
    let numberRepeted = arrayNumber[indexNumber];

    return numberRepeted;
}


let arraytest4 = [2, 3, 2, 5, 8, 2, 3];

// console.log(repeatedNumber(arraytest4));