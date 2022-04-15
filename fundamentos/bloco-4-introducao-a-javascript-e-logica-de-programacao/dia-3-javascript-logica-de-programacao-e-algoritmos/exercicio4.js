//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let countDiv = 0;

for(let index1 = 50; index1 >= 0; index1 -= 1){
    for(let index2 = 0; index2 <= index1; index2 += 1){
        if(Number.isInteger(index1 / index2)){
            countDiv += 1;
        }
    }    
    if(countDiv === 2){
        console.log(index1);
        break;
    }
    countDiv = 0;
}