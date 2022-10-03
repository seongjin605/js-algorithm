/**
 * https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
 * @param {*} n 
 */
function extraLongFactorials(n) {
    let bigInt = BigInt(n);
    let factorial = 1n;
    for (let i = 0n; i < bigInt ; i++) {
        factorial *= bigInt - i;
    }
    console.log(factorial.toString());

}
