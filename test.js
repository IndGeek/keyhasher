const key = require('./encrypthashop');

var op = key.hash('Normal Sentence', 3);
console.log(op)

var op2 = key.revHash(op, 3);
console.log(op2)

console.log(key.sha256(op))
