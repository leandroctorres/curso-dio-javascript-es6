const user = {
	name:'Leandro',
	lastName: 'Cesario Torres'
};

function getUserWithFullName(user) {
	return {
		...user,
		fullName: `${user.name} ${user.lastName}`
	}
}

/**
 * Speed Operator: Cada propriedade do user, será colocada dentro desse objeto.
 * String Literal: É uma forma simplificada de concatenar as variaveis.
 * 								 Equivalente a:  user.name + ' ' + user.lastname
 */


const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName); //Um novo objeto
console.log(user);
