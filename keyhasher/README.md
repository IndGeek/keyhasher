
## Installation

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

var hashAble = key.hash("Hi", passcode);
console.log(`Hashed Phrase: ${hashAble}`)

// Hashed Phrase: X4A=

var rawWord = key.revHash("X4A=", passcode);
console.log(`Output: ${rawWord}`)

// Real Phrase: Hi

```
    