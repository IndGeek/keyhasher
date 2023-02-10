Simple, effective, easy to implement encryption for JavaScript

![Logo](https://cdn.discordapp.com/attachments/941650096855068752/1009750552088956958/keyhasher.jpg)
## Installation

```
npm install keyhasher
```

## Importing
```javascript
const key = require('keyhasher');
```


## Features

- Encrypts data with multiple processes
- Uses password numbers to Encrypt and Decrypt

## How to use:

- use 'hash()' function with a Passcode number, and convert any sentence to encrypted format.
- use 'revHash()' function with the same Passcode number, to get back the Real sentence.
- use 'sha256()' function to finally hash the encrypted value

```javascript
const key = require('keyhasher');

var hashAble = key.hash("Normal Sentence", process.env.passcode); // encryption
console.log(`Hashed Phrase: ${hashAble}`)

var rawWord = key.revHash("Hashed code", process.env.passcode); // decryption
console.log(`Output: ${rawWord}`)

const hashed = key.sha256(hashAble); // encryption + hashing
console.log(`Hashed: ${hashed}`)

```
### Example 💡

```javascript

var hashAble = key.hash("Hi", 572);
console.log(`Hashed Phrase: ${hashAble}`)

// Hashed Phrase: X4A=

var rawWord = key.revHash("X4A=", 572);
console.log(`Output: ${rawWord}`)

// Real Phrase: Hi

const hashed = key.sha256(hashAble);
console.log(`Hashed: ${hashed}`) 

// Hashed: 6ea0e40d8582b04ed49df26051a4359ce015cdddeaad6ddd54dc5540e130e3a7

```

[©IndGeek](https://indgeek.com)

[©Soumya Mondal](https://soumyamondal.com)