const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string: ', typeof numberAsString);

//Retornar número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//Transformar uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

//Transformar uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));
