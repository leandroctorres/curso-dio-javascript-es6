var test = 'example';

/**
 * Função de  execução imediata
 * Equivalente a:
 * function teste(){
 *
 * }()
 */

(() => {
	console.log(`Valor dentro da função '${test}'`);

	if(true) {
		var test = 'example';
		console.log(`Valor dentro do if '${test}'`);
	}

	console.log(`Valor após a execução do if '${test}'`);
}) ();

/**
 * OBS: var não respeita escopo de bloco.
 */
