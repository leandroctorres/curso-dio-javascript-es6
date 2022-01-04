function getName() {
	return 'Leandro Cesario Torres';
}

function logFn(fn) {
	console.log( fn() );
}

const logFnResult = logFn;

logFnResult(getName);
