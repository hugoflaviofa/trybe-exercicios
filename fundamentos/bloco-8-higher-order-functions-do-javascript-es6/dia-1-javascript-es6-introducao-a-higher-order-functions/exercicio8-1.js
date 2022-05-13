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

console.log(newEmployees());