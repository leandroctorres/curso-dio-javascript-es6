function Pessoa(){
	if (!Pessoa.instance){
		Pessoa.instance = this;
	}
	return Pessoa.instance;
}


const p = Pessoa.call({ name: 'Leandro'});
const p2 = Pessoa.call({ name: 'Custon name'});

console.log(p);
console.log(p2);
