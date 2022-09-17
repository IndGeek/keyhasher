const key = require('./encrypthashop');

var op = key.hash('okay', 3);
console.log(op)

var op2 = key.revHash(op, 3);
console.log(op2)