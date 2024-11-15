"use strict";
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(4));
/// big int number
console.log("Number.MAX_SAFE_INTEGER");
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
const bigNumber = BigInt(Number.MAX_SAFE_INTEGER);
console.log("big number");
console.log(bigNumber);
console.log(bigNumber);
const sum = bigNumber + 9007199254740992n;
console.log("sum................");
console.log(sum);
