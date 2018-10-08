function isPrime(num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num !== 1 && num !== 0;
}


function getFactors(n){
    var factors = [];

    var i = 2;
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


function getDivisors(n){
    var divisors = [n];
    for (var i = 1, s = Math.floor(n/2); i <= s; i++)
        if (n % i === 0) divisors.push(i);
    return divisors;
}

var arr = [6,12,9];
    // console.log(getDivisors(6));

var divisors = []
for(var i = 0; i<arr.length; i++) {
    divisors.push(getDivisors(arr[i]));
}

var result = divisors.shift().filter(function(v) {
    return divisors.every(function(a) {
        return a.indexOf(v) !== -1;
    });
});

var max = 0;
for(var i = 0; i<result.length; i++) {
    if(result[i] > max)
        max = result[i];
}
console.log(max);