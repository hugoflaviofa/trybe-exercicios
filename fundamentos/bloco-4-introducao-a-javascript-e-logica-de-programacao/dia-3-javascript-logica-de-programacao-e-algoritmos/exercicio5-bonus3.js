//Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let countSpace = n;

for(let numberLines = 0; numberLines <= n; numberLines += 1){
    let square = "*"
    let space = " "
    if(numberLines < n){
        console.log(space.repeat(countSpace -= 1) + square.repeat(numberLines + 1));        
    }
}