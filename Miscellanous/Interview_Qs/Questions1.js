// Q1. Flatten an array.  (flattenArray.js)
// .....................................................................................................................................

//Q2: what's the output:
console.log(a);
console.log(b);
var a = b = 5;

//Ans:
// var a; // This is hoisted
// b = 5; // This creates a global variable `b` and assigns it the value 5.
// var a = 5; // This assigns 5 to `a`.
// console.log(a); logs undefined because a is declared but not initialized yet during the first console.log.
// console.log(b); logs 5 because b was already assigned 5 before the console.log
// .....................................................................................................................................

//Q3: what's the output:
let a = 2;
let a = 5;
console.log(a);

//Ans : error =>Since let does not allow redeclaration of a variable within the same block scope, this will result in a syntax error.
// .....................................................................................................................................

//Q4: what's the output:
console.log('4' - 6 * 5); // 4 -30 = -26 //the multiplication (*) operator has higher precedence than the subtraction (-) operator.
console.log('4' * 6 + 5); // 24+5 => 29
console.log('4' + 6 * 5); //'4'+30  =>430      
// .....................................................................................................................................

//Q5: what's the output:
console.log(typeof (NaN));
// .....................................................................................................................................

//Q6: what's the output:
console.log('5' - '3' + 6);

//Ans:  + and - has same precedence.. and express is evaluated from left to right

// .....................................................................................................................................

//Q7(A) : what's the output:

var arr = [1, 2, [3, 4]];
{
    let arr = ["Z", "A", "D", "B", "E"];
}
console.log(arr);

//Ans : [1, 2, [3, 4]];

//Q7(B) : what's the output:
let arr = [1, 2, [3, 4]];
{
    var arr = ["Z", "A", "D", "B", "E"];
}
console.log(arr);

// Ans : error : illegal shadowing : let variable cant be shadowed with var
// .....................................................................................................................................

//Q8 : what's the output:
let arr1 = ["Z", "A", "D", "B", "E"];
var arr1 = [1, 2, [3, 4]];
console.log(arr1);

//Ans :  SyntaxError: Identifier 'arr1' has already been declared

//let has block scope and does not allow redeclaration within the same block. 
//When you attempt to use var to redeclare arr1, which was previously declared with let, JavaScript will throw a SyntaxError 
// because it’s trying to declare a variable with the same name twice in the same scope.


// .....................................................................................................................................
//Q9: Sort without using built-in method.
let charArr = ["Z", "E", "D", "B", "A"];

for (let i = 0; i < charArr.length; i++) {
    for (let j = i + 1; j < charArr.length; j++) {
        if (charArr[i].charCodeAt(0) > charArr[j].charCodeAt(0)) {
            [charArr[i], charArr[j]] = [charArr[j], charArr[i]]
        }
    }
    console.log("result sort", charArr);

}
// .....................................................................................................................................

// Q10: guess the result:
let input1 = 0;
if (input1) {
    console.log("Zero");
} else {
    console.log("One");
}
//Ans : "One": => if (input1) evaluates to if (0). Since 0 is falsy, the else block will be executed.
// .....................................................................................................................................


// Q11:
let result = 0 ? "Zero" : "One";
console.log(result);

// Ans : "One"  => Since 0 is falsy, the ternary operator evaluates to the second expression, which is "One".
// .....................................................................................................................................

// Q12:
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}
// .....................................................................................................................................

// Q13- guess the output here?
var x = 21;
var func = function () {
    console.log(x);
    var x = 20;
}
func();

Ans: undefined
// inside the function x will be hoisted and set to undefined. and when calling, it will check first inside the fn . 
//since undefined is present it will return it.
// when we have variable in current scope then we will not check in global scope

// .....................................................................................................................................

// Q14 : guess the output??

let count = 0;
(function printCount() {
    if (count == 0) {
        let count = 1;
        console.log(count); // 1
    }
    console.log(count); //0
})();


//Q15: what's the ouput?
const func = (function (a) {
    delete a;
    return a;
})(5);
// Ans : 5 (delete wont work )
//delete is only used when we need to delete the property of obj and not for deleting variable inside fns