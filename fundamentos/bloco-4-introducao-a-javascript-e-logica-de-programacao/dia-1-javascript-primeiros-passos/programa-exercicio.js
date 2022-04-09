const salarioBruto = 3000;

const inss1 = 1556.94;
const inss2 = 2594.92;
const inss3 = 5189.82;
const inssMax = 570.88;

let salarioDescontInss = 0;

const ir1 = 1909.98;
const ir2 = 2826.65;
const ir3 = 3751.05;
const ir4 = 4664.68;

let salarioLiquido = 0;

if (salarioBruto <= inss1){
    salarioDescontInss = salarioBruto - ((salarioBruto * 8) / 100);
} else if (salarioBruto > inss1 && salarioBruto <= inss2) {   
    salarioDescontInss = salarioBruto - ((salarioBruto * 9) / 100); 
}else if (salarioBruto > inss2 && salarioBruto <= inss3) {  
    salarioDescontInss = salarioBruto - ((salarioBruto * 11) / 100); 
}else if (salarioBruto > inss3) {   
    salarioDescontInss = salarioBruto - inssMax; 
}

// console.log(salarioDescontInss.toFixed(2));

if  (salarioDescontInss <= ir1){
    salarioLiquido = salarioDescontInss;
}else if (salarioDescontInss > ir1 && salarioDescontInss <= ir2){
    salarioLiquido = salarioDescontInss - (((salarioDescontInss *  7.5) / 100) - 142.8);
}else if (salarioDescontInss > ir2 && salarioDescontInss <= ir3){
    salarioLiquido = salarioDescontInss - (((salarioDescontInss *  15) / 100) - 354.8);
}else if (salarioDescontInss > ir3 && salarioDescontInss <= ir4){
    salarioLiquido = salarioDescontInss - (((salarioDescontInss *  22.5) / 100) - 636.13);
}else if (salarioDescontInss > ir4){
    salarioLiquido = salarioDescontInss - (((salarioDescontInss *  27.5) / 100) - 869.36);
}

console.log(`Seu salário Bruto é R$${salarioBruto} e o liquido é R$${salarioLiquido.toFixed(2)}`);