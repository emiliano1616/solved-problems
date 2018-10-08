// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

let n = 2;
let pow = 10000;
let digits = [1];

while (pow) {

    let carry = 0
    for (var i = digits.length - 1; i >= 0; i--) {

        digits[i] = n * digits[i] + carry;
        var res = digits[i].toString().split('');
        if (res.length == 1) {
            digits[i] = parseInt(res[0]);
            carry = 0;
        } else {
            carry = parseInt(res[0]);
            digits[i] = parseInt(res[1]);
            if (i == 0) {
                digits.unshift(carry);
                carry = 0;
            }
        }
    }
    pow--;

}

let sum = 0;
for(let i = 0; i<digits.length;i++){
    sum += digits[i];
}
console.log(sum)