const { encrypt, decrypt, hash, hashCompare } = require("./index.js");

// var op = encrypt("Normal Sentence", 572);
// console.log(op);

// var op2 = decrypt(op, 3);
// console.log(op2);

// console.log(hash(op));

// console.log(hashCompare('Normal Sentence', op2));

// const { encrypt, decrypt, hash, hashCompare } = require('keyhasher');

const passCode = process.env.PASS_CODE || 572;
console.log(passCode);
var encryptedWord = encrypt("passwordInput", passCode); // use code directly or use via .env
console.log(`Encrypted Phrase: ${encryptedWord}`) // Output: "QGFkX1NeEkVXYGZXYFVX"

var rawWord = decrypt(encryptedWord, passCode); // or use process.env.PASSCODE
console.log(`Output: ${rawWord}`) // Output: "Normal Sentence"

const hashed = hash(encryptedWord); // encryption + hashing
console.log(`Hashed: ${hashed}`) // Output: "5bf22a00c0df8757f68e700066bd56c5edffc4103f9587666ccbde062a0f52f5"

const isCorrect = hashCompare(hash('user given password'), hashed); // it hashes user input & compares with the hashed value stored in database
console.log(isCorrect); // returns a boolean 
