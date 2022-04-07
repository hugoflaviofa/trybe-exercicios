const custo = 100;
const valorDeRevenda = 150;

const imposto = 20; // Referente a porcentagem > 20%

const custoTotal = custo + ((custo * imposto)/100);
const custoTotalFixed = custoTotal.toFixed(2); // Valor arredondado com duas casas decimais

const lucro = valorDeRevenda - custoTotalFixed;

const lucroLoteMilhar = lucro * 1000;

if (custo <= 0 || valorDeRevenda <= 0){
    console.log("Erro, insirra um valor maior que 0");   
} else {
    console.log(lucroLoteMilhar);
}