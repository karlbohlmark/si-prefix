var prefix = require('./index');

console.log(prefix(0.000001));
console.log(prefix(0.00001));
console.log(prefix(0.0001));
console.log(prefix(0.001));
console.log(prefix(1000));
console.log(prefix(1000000));
console.log(prefix(1000000000));
console.log(prefix(10000000000));

console.log(prefix(1234));

