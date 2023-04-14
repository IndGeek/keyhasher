Simple, effective, easy to implement encryption for JavaScript

![Logo](https://cdn.discordapp.com/attachments/941650096855068752/1009750552088956958/keyhasher.jpg)

## Features

- Encrypts data with multiple processes
- Uses password numbers to Encrypt and Decrypt
- Hashes a string and then later compares with a input

## How to use:

- use 'encrypt()' function with a Passcode number, and convert any sentence to encrypted format.
- use 'decrypt()' function with the same Passcode number, to get back the Real sentence.
- use 'hash()' function to finally hash the encrypted value, and later compare
- use 'hashCompare()' to compare user input password and previously stored hashed password, if match, authenticate

### Example 💡

```javascript
const { encrypt, decrypt, hash, hashCompare } = require('keyhasher');

const passCode = process.env.PASS_CODE || 572; // set a passCode in .env or use directly

var encryptedWord = encrypt('passwordInput', passCode);
console.log(`Encrypted Phrase: ${encryptedWord}`) // Output: "QGFkX1NeEkVXYGZXYFVX"

var rawWord = decrypt(encryptedWord, passCode);
console.log(`Output: ${rawWord}`) // Output: "Normal Sentence"

const hashed = hash(encryptedWord); // encryption + hashing
console.log(`Hashed: ${hashed}`) // Output: "5bf22a00c0df8757f68e700066bd56c5edffc4103f9587666ccbde062a0f52f5"

const isCorrect = hashCompare(hash('user given password'), hashed);
// it hashes user input And compares with the hashed value stored in database

console.log(isCorrect); // returns a boolean 

```

### The hashCompare function -
The hashCompare() function can't be affected with Timing attack. 

Timing attacks are a type of attack that can be used to determine the contents of a secret string by measuring the time it takes to compare two strings character-by-character. To prevent timing attacks, Keyhasher uses a constant-time string comparison algorithm.

The use of Buffer in the implementation of the secure string comparison function is to convert the input strings into a format that can be easily compared byte-by-byte in a constant-time manner. Buffer is a built-in class in Node.js that provides a way to represent binary data in the form of a fixed-size sequence of bytes.

[©IndGeek](https://indgeek.com)

[©Soumya Mondal](https://soumyamondal.com)