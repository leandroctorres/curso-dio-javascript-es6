function Cachorro() {}

Cachorro.prototype.latir = function() {}

const c = new Cachorro()

console.log(c.__proto__);

Cachorro.prototype.test = function() {}

console.log(c.__proto__);

String.prototype.split
'123456'.split('')
console.log('123456'.split(''));

//String.prototype.split = function() { console.log('ixi...')}
console.log('123456'.split(''));
console.log('123456'.split(''));
