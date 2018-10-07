// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const dealEven = (n) => {
    return n / 2;
}

const dealOdd = (n) => {
    return 3 * n + 1;
}

const dealNumber = (n) => {
    return n % 2 == 0 ? dealEven(n) : dealOdd(n);
}

const getChain = (n) => {
    if (n == 1) return [n];
    return [n].concat(getChain(dealNumber(n)));
}

let limit = 1000000;
let lengths = [];
let max = [0,0];
for (let i = 1; i < limit; i++) {
    let chainLength = getChain(i).length;
    if(chainLength > max[1]){
        max = [i,chainLength];
    }
}

console.log(max);