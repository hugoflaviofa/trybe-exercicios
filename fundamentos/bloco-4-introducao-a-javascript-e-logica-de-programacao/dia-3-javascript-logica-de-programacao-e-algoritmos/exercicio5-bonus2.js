//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;

for(let numberLines = 0; numberLines <= n; numberLines += 1){
    let square = "*"
    if(numberLines < n){
        console.log(square.repeat(numberLines + 1));        
    }
}