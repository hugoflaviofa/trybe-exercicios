// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const creatEmail = (name) => {
  const lowerName = name.toLowerCase();
  const nameReplace = lowerName.replace(/ /g, '_');
  
  const nameEmail = `${nameReplace}@trybe.com` 
  return nameEmail;
}

const objectEmploier = (name) => {
  return {
    name: name,
    email: creatEmail(name),
  }
}

const newEmployees = () => {
  const employees = {
    id1: objectEmploier('Pedro Guerra'),
    id2: objectEmploier('Luiza Drumond'), 
    id3: objectEmploier('Carla Paiva'),
  }
  return employees;
};

// console.log(newEmployees());

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const compareNumber = (number1, number2) => number1 === number2;

const resultPrize = (chosenNumber) => {
  const  numrberPrize = Math.floor(Math.random() * 5) + 1;

  return compareNumber(numrberPrize, chosenNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

// console.log(resultPrize(3));

(Exemplo_Reduzido) => {
  const compareNumber = (number) => number === (Math.floor(Math.random() * 5) + 1);
  
  const resultPrize = (chosenNumber) => (compareNumber(chosenNumber) ? 'Parabéns você ganhou' : 'Tente novamente');
  
  // console.log(resultPrize(3));
};

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (listAnswer, studentAnswer) => {
  let points = 0;

  for (i in listAnswer) {
    switch (studentAnswer[i]) {
      case listAnswer[i]:
        points += 1;
        break;
      case 'N.A':
        break;
      default:
        points -= 0.5;
    }
  }

  return points;
};

const result = (listAnswer, studentAnswer, callback) => `Você acertou ${callback(listAnswer, studentAnswer)} questões.`;

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));