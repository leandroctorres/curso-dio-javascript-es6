// Criando e manipulando arrays

const persons = Array.of('John', 'Cris', 'Jenny')
console.log(persons);

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto');
console.log(numbersAndStrings);

const arrayWith3Positions = Array(3) // Cria um array com 3 posições vazias
console.log(arrayWith3Positions);

const personList = Array('John', 'Cris', 'Jenny')
console.log(personList);

/**
 * Testa no console, inspecionando uma pagina html;
 *
const divs = document.querySelector('div') //Seleciona todos os divs de uma pagina. Não é um array, é um node list.

const divArray = Array.from(divs) // Transforma em um array
divArray.pop();
divArray.shift();
 *
 */


// Inserir e remover elementos

/**
 * Push
 * Adiciona um ou mais elementos no final do array e retorna
 *  o tamanho do novo array.
 *  */

const frutas = ['melancia','banana'];
frutas.push('laranja');
console.log(frutas);

/**
 * Pop
 * Remove o último elemento de um array e retorna
 * o elemento removido.
 */
 frutas.pop();
 console.log(frutas);

 /**
	* unshift
	Adiciona um ou mais elementos no início do array
	e retorna o tamanho do novo array.
  */
frutas.unshift('uva');
console.log(frutas);

/**
 * shift
 * Remove o primeiro elemento do array e retorna o elemento removido.
 */
frutas.shift();
console.log(frutas);

/**
 * concat
 * Concatena um ou mais arrays retornando um novo array
 */

const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados);
console.log(alimentos);

/**
 * slice
 * Retorna um novo array "fatiando" o array de acordo com
 * início e fim.
 */

/**
 * splice
 * Altera um array adicionando novos elementos enquanto remove
 * elementos antigos
 */

 frutas.splice(1, 0, "acerola");
 console.log(frutas);

 frutas.splice(2, 1, 'laranja', 'amora'); // A partir da posição 2 ele vai remover um item.
 console.log(frutas);
