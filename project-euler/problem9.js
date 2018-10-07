// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let desiredNumber = 1000;

const isTriplet = (a, b, c) => {
    return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2);
}

let a = 3, b = 4, c = 5;

const reachLimit = () => {
    return a + b + c > desiredNumber;
}

let triplets = [];
while (!reachLimit()) {
    while (!reachLimit()) {
        while (!reachLimit()) {
            if (isTriplet(a, b, c)) {
                triplets.push([a,b,c]);
            }
            c++;
        }
        b++;
        c = b;
    }
    a++;
    b = a;
}


console.log(triplets.filter(t=> t[0] + t[1] + t[2] == 1000));