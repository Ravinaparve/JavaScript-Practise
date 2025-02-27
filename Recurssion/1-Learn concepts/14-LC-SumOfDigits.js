// brute force:
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10);
    }
    return sum;

}

//.........................................................................

// using recrursion:
function sumOfDigits(n) {
    if (n == 0) return 0;
    let digit = n % 10;
    return digit + sumOfDigits(Math.floor(n / 10));
}


let res = sumOfDigits(444);
console.log(res)



// recursion tree:
// sum(456)

// digit = 6 + sum(45) (math.floor(456/2))
// digit = 6 + 5 + sum(4) (math.floor(45/2))
// digit = 6 + 5 + 4 + sum(0) (math.floor(4/2))


//.......................product of digits:...................................
function prodOfDigits(n) {
    if (n == 0) return 1;
    let digit = n % 10;
    return digit * prodOfDigits(Math.floor(n / 10));
}

console.log(prodOfDigits(443)); //48