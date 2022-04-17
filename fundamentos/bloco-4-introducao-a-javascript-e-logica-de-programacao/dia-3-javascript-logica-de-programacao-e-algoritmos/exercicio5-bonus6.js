//Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 11;
let count = 0;

for(let index = 1; index <= number; index += 1){
    if(Number.isInteger(number / index)){
        count += 1;
    }
}

if(count === 2){
    console.log("Este número é primo");
}else{
    console.log("Este número não é primo");
}