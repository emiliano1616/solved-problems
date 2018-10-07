// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let number = 600851475143;
while(number != 1){
    let i = 2;
    while(number % i != 0){
        i++;
    }
    number = number /i;
    console.log(i);
}

