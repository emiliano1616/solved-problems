// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
let start = 2520;

let i = 1;
while(!isDivisibleByAll(i*start)) {
    i++;
}

function isDivisibleByAll(n){

    for(let i = 2; i<=20;i++)
        if(n%i != 0) return false;
    
    return true;
}
console.log(i*start);