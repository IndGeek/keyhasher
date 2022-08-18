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
N

## How to use:

- use 'hash()' function with a Passcode number, and convert any sentence to Hashed format.
- use 'revHash()' function with the same Passcode number, to get back the Real sentence.


```javascript
const key = require('keyhasher');

var hashAble = key.hash("Normal Sentence", passcode);
console.log(`Hashed Phrase: ${hashAble}`)

var rawWord = key.revHash("Hashed code", passcode);
console.log(`Output: ${rawWord}`)


```
### Example 💡

```javascript

var hashAble = key.hash("Hi", 572);
console.log(`Hashed Phrase: ${hashAble}`)

// Hashed Phrase: X4A=

var rawWord = key.revHash("X4A=", 572);
console.log(`Output: ${rawWord}`)

// Real Phrase: Hi

```

[©IndGeek](https://indgeek.com)

[©Soumya Mondal](https://soumyamondal.com)