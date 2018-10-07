// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1 && num !== 0;
}

let primes = 0;
let i = 2;
while(primes != 10001){
    primes = isPrime(i) ? primes+1 : primes;
    i++;
}

console.log(i-1);