//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 7;
let addSpace = -1;
let deleteSpace = n - 3;

for(let numberLines = 0; numberLines < n - 3; numberLines += 1){

    let square = "*";
    let space = " ";

    if(numberLines === 0){
        console.log(space.repeat(deleteSpace -= 1) + square);  
    }else if(numberLines > 0 && numberLines < n - 4){

        console.log(space.repeat(deleteSpace -= 1) + square + space.repeat(addSpace += 1) + square);  

    }else{
        console.log(square.repeat(n));
    }      
    
    addSpace += 1;
}