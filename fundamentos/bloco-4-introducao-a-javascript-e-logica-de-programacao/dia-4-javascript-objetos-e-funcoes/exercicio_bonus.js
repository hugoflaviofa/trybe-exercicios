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

    for(index1 of numeralSplit){
        for(index2 in romanDigit){          
            if(index1 === index2){
                numeralConvert.push(romanDigit[index1]);
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

console.log(romanNumeral(test));