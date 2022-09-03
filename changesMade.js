var {moreSalting} = require('./algos/somersault')

const hash = function (string, pass) {
    const input = string;
    var salt = parseInt(pass);
        
    var extraSalt = moreSalting(salt);

    if(salt>26){
        salt = salt%26;
    }

    var inpArr = input.split('');

    var output = []

    for (i = 0; i < inpArr.length; i++) {
        var conV = inpArr[i].charCodeAt(0);
        var outSign = parseInt(conV) + parseInt(salt)
        var saltSign = outSign - extraSalt;
        let EncryptText = String.fromCharCode(saltSign);
        output.push(EncryptText);
    }
    outputStr = output.join('')

    const bConvert = Buffer.from(outputStr).toString('base64');

    var outPut = moreEncryption(bConvert, salt, 'encrypt')
    return outPut;
}

const revHash = function (string, pass) {
    const inputRev = string;
    var saltRev = parseInt(pass);
        
    var extraSaltRev = moreSalting(saltRev);

    if(saltRev>26){
        saltRev = saltRev % 26;
    }

    const bReverse = Buffer.from(inputRev, 'base64').toString();

    var revArr = bReverse.split('');
    var revOutput = []

    for (j = 0; j < revArr.length; j++) {
        var revConV = revArr[j].charCodeAt(0);
        var revOutSign = parseInt(revConV) - parseInt(saltRev);
        var saltSign = revOutSign + extraSaltRev;
        let decryptText = String.fromCharCode(saltSign);
        revOutput.push(decryptText)
    }
    revOutputStr = revOutput.join('')

    var outPutRev = moreEncryption(revOutputStr, saltRev,'decrypt') // -------- check if return direct is working or not
    return outPutRev;

}


algoOne()
algoTwo()
algoThree()
algoFour()
algoFive()


function moreEncryption(moreInput, morePass, typeOfCrypt){
    fDigit = morePass.toString()[0];

    if(fDigit == 1 || fDigit == 4){
        algoOne(moreInput, morePass, typeOfCrypt)
    }
    else if(fDigit==2 || fDigit == 7){
        algoTwo(moreInput, morePass, typeOfCrypt)
    }
    else if(fDigit==3 || fDigit == 5){
        algoThree(moreInput, morePass, typeOfCrypt)
    }
    else if(fDigit==6 || fDigit == 9){
        algoFour(moreInput, morePass, typeOfCrypt)
    }
    else if(fDigit==8){
        algoFive(moreInput, morePass, typeOfCrypt)
    }
}


function algoOne(s, n, typeOfCrypt){
    if(typeOfCrypt == 'encrypt'){
        hash(s, parseInt(n-150))
    }
    else{
        hash(s, parseInt(n+150))
    }
    return res;
}
function algoTwo(s, n, typeOfCrypt){
    if(typeOfCrypt == 'encrypt'){
        hash(s, parseInt(n-69))
    }
    else{
        hash(s, parseInt(n+69))
    }
    return res;
}
function algoThree(s, n, typeOfCrypt){
    if(typeOfCrypt == 'encrypt'){
        hash(s, parseInt(n-92))
    }
    else{
        hash(s, parseInt(n+92))
    }
    return res;
}
function algoFour(s, n, typeOfCrypt){
    if(typeOfCrypt == 'encrypt'){
        hash(s, parseInt(n-49))
    }
    else{
        hash(s, parseInt(n+49))
    }
    return res;
}
function algoFive(s, n, typeOfCrypt){
    if(typeOfCrypt == 'encrypt'){
        hash(s, parseInt(n-91))
    }
    else{
        hash(s, parseInt(n+91))
    }
    return res;
}

module.exports = {hash, revHash}


// const key = require('keyhasher');

// var op = key.hash('okay', 3);
// console.log(op)

// var op2 = key.revHash(op, 3);
// console.log(op2)