var prefix = require('./index');

console.log(prefix(1000));
console.log(prefix(1000000));
console.log(prefix(1000000000));
console.log(prefix(10000000000));

console.log(prefix(1234, {
	significantDigits: 3
}));

