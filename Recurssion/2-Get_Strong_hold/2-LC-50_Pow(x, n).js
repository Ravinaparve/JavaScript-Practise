//My brute force - solution:
// Time Limit Exceeded - this solution works for smaller problems
var myPow = function (x, n) {
    if (x == 1) return x;

    let result = 1;
    let pow = Math.abs(n);

    while (pow > 0) {
        result *= x;
        pow--;
    }
    result = (n < 0) ? (1 / result) : result;
    return result;
};


// Optimal Approach: // https://www.youtube.com/watch?v=1TtWF2ZLNzk
//TC : O(log n) ;since n (exponent) is getting halved each time.
//intution:
// Square the base 
// Divide the exponent by 2
var myPow = function (x, n) {
    let res = 1;
    let pow = Math.abs(n);

    while (pow > 0) {
        if (pow % 2 == 1) {
            res *= x; // is pow/n is odd, save 1 part x^1 to res
        }
        x = x * x; // keep Squaring the base 
        pow = Math.floor(pow / 2); // and keep dividing the exponent by 2
    }
    return (n < 0) ? 1 / res : res;

};

// Using Recursion:
//TC :O(log n)
//SC :O(log n)
var myPow = function (x, n) {
    // Base condition: If n is 0, x^0 is 1
    if (n == 0) return 1;

    // If n is negative, take the reciprocal of x and make N positive
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }

    // If N is even, recursively compute the square of x^(N/2)
    if (n % 2 == 0) {
        return myPow(x * x, n / 2); // square the base and divide the exponent by 2
    }

    // If N is odd, recursively compute x^(N-1) and multiply it by x
    else {
        return x * myPow(x, n - 1); // pass the even part to myPow() and multiply it with the x
    }
};


//.............................................................................................
// Rough:
var myPow = function (x, n) {
    if (n == 0) return 1;

    let pow = Math.abs(n);
    if (n > 0) {
        return x * myPow(x, pow - 1);
    } else {
        return 1 / (x * myPow(x, pow - 1));
    }

};
let res = myPow(2.00, -200000000);
console.log(res)