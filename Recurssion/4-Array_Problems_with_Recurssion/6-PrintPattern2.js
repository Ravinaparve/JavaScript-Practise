// method 1 
let str = "";
function printPattern(r, c, n) {
    if (r >= n) return;

    if (c <= r) {
        str += "*";
        printPattern(r, c + 1, n);
    }
    else {
        str += "\n";
        printPattern(r + 1, 0, n);
    }
}
printPattern(0, 0, 4);
console.log(str);


// *
// * *
// * * *
// * * * *


// method 2 : same as printPattern1.js. but call all the funtions first and then print
let str1 = "";
function printPattern(r, c) {
    if (r == 0) return;

    if (c < r) {
        printPattern(r, c + 1); // first go it last fn call
        str1 += "*"; // append string when returning
    } else {
        printPattern(r - 1, 0);
        str1 += '\n';
    }
}
printPattern(4, 0);
console.log(str1);