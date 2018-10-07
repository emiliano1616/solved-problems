// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
// What is the value of the first triangle number to have over five hundred divisors?

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
}


const getFactors = (n) => {
    let factors = [];

    let i = 2;
    while (n != 1) {
        if (n % i == 0 && isPrime(i)) {
            factors.push(i);
            n /= i;
            i = 1;
        }
        i++;
    }

    return factors;
}


const getDivisors = (n) => {

    var factors = getFactors(n);
    let previousFactor;

    let acum = 1;
    let sum = 0;
    for (let t = 0; t < factors.length; t++) {
        if (t == 0) {
            previousFactor = factors[t];
            sum++;
            continue;
        }
        if (factors[t] != previousFactor) {
            acum *= (sum + 1);
            sum = 1;
            previousFactor = factors[t];
        } else {
            sum++;
        }
    }
    acum *= (sum + 1);
    return acum;
}
// 76576500
// 842161320
// let n  = 842161320;
// console.log(getDivisors(76576500));
// console.log(getFactors(76576500));

let i = 1;
let sum = i;
let div = getDivisors(sum);
while (div <= 500) {
    i++;
    sum += i;
    div = getDivisors(sum);
};

console.log(i);
console.log(sum);