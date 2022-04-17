//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

console.log(`Bem vinda, ${info.personagem}.`);

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim';

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(index in info){
    console.log(index);
}

//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for(index in info){
    console.log(info[index]);
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for(index in info){
    if(info[index] === 'Sim' && info2[index] === 'Sim'){
        console.log('Ambos recorrentes');
    }else{
        console.log(`${info[index]} e ${info2[index]}`);
    }
}