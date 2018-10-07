// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function reverse(s) {
    return s.split("").reverse().join("");
}

function isPalindrome(number) {
    let str1 = number.toString();
    let str2 = reverse(str1);
    return str1 == str2;
}

var number1 = 999;
var number2 = 999;

var mult = number1 * number2;
while (!isPalindrome(mult)) {
    if(number1 < 900){
        number2--;
        number1 = number2;
    }
    number1--;
    mult = number1 * number2;
}
console.log("number1", number1);
console.log("number2", number2);
console.log("mult", mult);
