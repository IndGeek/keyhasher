function moreSalting(n)
{
    var moreSalt = 0;
    while (n != 0) {
        moreSalt = moreSalt + n % 10;
        n = parseInt(n / 10);
    }

    if(moreSalt>26){
        moreSalt = moreSalt%26;
    }

    return moreSalt;
}

module.exports = {moreSalting}