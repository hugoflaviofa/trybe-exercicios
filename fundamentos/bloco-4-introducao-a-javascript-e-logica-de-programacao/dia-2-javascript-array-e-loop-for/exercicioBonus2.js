//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index1 = 1; index1 < numbers.length; index1 += 1){
    for (let index0 = 0; index0 < index1; index0 += 1) {
        if (numbers[index1] > numbers[index0]){
            let position = numbers[index1];

            numbers[index1] = numbers[index0];

            numbers[index0] = position;
        }
    }
}

console.log(numbers);