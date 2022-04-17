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

function maxArray(array){

    let maxNumber = Math.max(...array);
    let index = array.findIndex(array => array === maxNumber)

    return index;
}

let arraytest = [-2, 3, 6, 7, 10, 1];

// console.log(maxArray(arraytest));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minArray(array){

    let minNumber = Math.min(...array);
    let index = array.findIndex(array => array === minNumber)

    return index;
}

let arraytest2 = [2, 4, 6, 7, 10, 0, -3];

console.log(minArray(arraytest2));