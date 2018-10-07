// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1 && num !== 0;
}

let sum = 2
for(let i = 3; i <= 2000000; i+=2){
    if(isPrime(i))
    sum+=i;
}

console.log(sum);