// Padrão Factory

function Pessoa(){
	return {
		name: 'Leandro',
		lastName: 'Torres',
	}
}

const p = Pessoa();
console.log(p);

// Exemplo 2
function Pessoa2(name){
	return {
		name,
		lastName: 'Torres',
	}
}

const p2 = Pessoa2('Custon Name');
console.log(p2);

//Exemplo3
function Pessoa3(custonProperties){
	return {
		name: 'Leandro',
		lastName: 'Torres',
		...custonProperties,
	}
}

const p3 = Pessoa3({name: 'Custon', age: 33});
console.log(p3);
