//Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 5;
let countSpace = n - 1;
let countAsterisk = 0;

for(let numberLines = 0; numberLines < n - 2; numberLines += 1){
    countAsterisk += 1;

    let square = "*";
    let space = " ";
    
    console.log(space.repeat(countSpace -= 1) + square.repeat(countAsterisk));        
    
    countAsterisk += 1;
}