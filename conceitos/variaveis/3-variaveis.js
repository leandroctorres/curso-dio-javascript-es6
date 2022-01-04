const name= 'Leandro';

// Não podemos alterar o valor
name = 'Leandro';

const user = {
	name: 'Leandro'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
user = {
	name: 'Guilherme'
};

const persons = ['Guilherme', 'Pedro', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('João');
// ['Guilherme', 'Pedro', 'Jenifer', 'João']

// Podemos remover algum item
persons.shift();
// ['Pedro', 'Jennifer', 'João']

// Podemos alterar diretamente
persons[1] = 'James';
// ['Pedro', 'James', 'João']

console.log('\nArray após as alterações: ', persons);
