//Iterar elementos

/**
 * for each
 * Iteração de cada item dentro de um array
 */
 const frutas = ['melancia','acerola','laranja','amora'];


 console.log(frutas)
 frutas.forEach((frutas, index) => console.log(index, frutas));
 frutas.forEach((frutas, index, arr) => console.log(index, frutas, arr));


 /**
	* map
	Retorna um novo array, de mesmo tamanho, iterando cada item
	de um array
  */
 frutas.map((fruta, index) => `${index} - ${fruta}`);
 console.log(frutas.map((fruta, index) => `${index} - ${fruta}`));

 /**
	*flat
	retorna um novo array com todos os elementos de um sub-array
	concatenados de forma recursiva de acordo com a profundidade
	especificada(depth).
  */

	const idades = [20, 34, [33, 60, [70,40]]];
	console.log(idades);
	console.log(idades.flat());
	console.log(idades.flat(2));

	/**
	 * flatMap
	 * Retorna um novo array assim como a função map
	 * e executa um flat de profundidade 1
	 */

	/**
	 * keys
	 * Retorna um Array Iterator que contém as chaves para cada
	 * elemento do array.
	 */

	/**
	 * values
	 * Retorna um Array Iterator que contém os valores para cada
	 * elemento do array.
	 */

	/**
	 * entries
	 * Retorna um Array Iterator que contém os pares chave/valor para
	 * cada elemento do array.
	 */

	const frutasIterator = frutas.entries();
	console.log(frutasIterator);
	console.log(frutasIterator.next());
	console.log(frutasIterator.next());


	// Buscar elementos

	/**
	 * find
	 * Retorna o primeiro item de um array que satisfaz a condição.
	 */

	/**
	 * findIndex
	 * Retorna o índice do primeiro item de um array
	 * que satisfaz a condição
	 */

	/**
	 * filter
	 * Retorna um novo array com todos os elementos que
	 * satisfazem a condição.
	 */

	/**
	 * indexOf
	 * Retorna o primeiro índice em que um elemento pode se encontrado no array
	 */

	/**
	 * lastIndexOf
	 * Retorna o último índice em que um elemento pode ser
	 * encontrado no array.
	 */

	/**
	 * includes
	 * Retorna um booleano verificando se determinado
	 * elemento existe no array
	 */

	/**
	 * some
	 * Retorna um booleano verificando se pelo menos
	 * um item de um array satisfaz a condição

	const arr = [1,2,3,4,3];
	const hasSomeEvenNumber = arr.some(value => value % 2 === 0);

	*/

	const students = [
		{name: 'John', grade: 7},
		{name: 'Jenny', grade: 8},
		{name: 'Peter', grade: 4}
	];
console.log(students);

//some
students.some(student => student.grade >=7);
console.log(students.some(student => student.grade >=7));

//find
students.find(student => student.grade >=7);
console.log(students.find(student => student.grade >=7));

//find
students.findIndex(student => student.grade >=7);
console.log(students.findIndex(student => student.grade >=7));


/**
 * every
 * Retorna um booleano verificando se todos os itens de um
 * array satisfazem a condição.
 */

 students.every(student => student.grade >=7);
 console.log(students.every(student => student.grade >=7));


 // Ordenar elementos
 /**
	* sort
	Ordena os elementos de um array de acordo com a condição.
  */

	//ordena da menor nota para maior
	students.sort((current, next) => current.grade - next.grade);
	console.log(students.sort((current, next) => current.grade - next.grade));

	//ordena da maior nota para a maior
	students.sort((current, next) => next.grade - current.grade );
	console.log(students.sort((current, next) => next.grade - current.grade ));

	/**
	 * reverse
	 * Interve os elementos de um array
	 */


	// Transformar em outro tipo de dados

	/**
	 * join
	 * Junta todos os elementos de um array, separados por um
	 * delimitador e retorna um string
	 *
	 const arr = [1,2,3,4,5];
	 arr.join('-');
	 */

/**
 * reduce
 * Retorna um novo tipo de dado iterando cada posição de um array
 *
  const arr = [1,2,3,4,5];

	arr.reduce((total,value) => total += value,0);
 */
students.reduce((totalGrades, student) => totalGrades += student.grade, 0);
console.log(students.reduce((totalGrades, student) => totalGrades += student.grade, 0));

let media = students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length;
console.log(media);
