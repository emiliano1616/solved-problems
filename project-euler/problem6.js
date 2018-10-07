// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sum1 = 0, sum2=0;

for(let i = 1; i<=100; i++){
    sum1 += Math.pow(i,2);
    sum2 += i;
}
sum2 = Math.pow(sum2,2);

console.log(sum2 - sum1);