// note: inner function should always be returned
// basic example:
function f(a) {
    return function (b) {
        return a + b;
    }

}
let res2 = f(2)(3);
console.log(res2)

//Q1: get the sum of all the parameters passes
// sum(2)(6)(1)

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
let res = sum(2)(6)(1);
console.log(res);


// Q2: Evaluate("sum")(4)(2) ⇒ 4+2 =
// Evaluate("multiply")(4)(2) ⇒ 4*2 = 6
// Evaluate("Divide")(4)(2) ⇒ 4/2 = 6
// Evaluate("Subtract")(4)(2) ⇒ 4-2 = 6 

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation == "sum") return a + b;
            else if (operation == "multiply") return a * b;
            else if (operation == "divide") return a / b;
            else if (operation == "subtract") return a - b;
            else return "invalid operation";
        }
    }
}
console.log(evaluate("sum")(12)(13));

//reusing the inner fns:
const mul = evaluate("multiply");
console.log(mul(2)(3)); //6
console.log(mul(24)(33)); //792


//Q3 : Infinte Currying:
// write a fn such that any parameters added should adapt and return the result
// add(2)(3)() //5
//add(2)(3)(4)(5)() // 14


function add(a) {
    // Return a function that takes the next number
    return function (b) {
        if (b === undefined) {
            // If no argument is passed, return the accumulated sum
            return a;
        } else {
            // If an argument is passed, add it to the accumulated sum and return the new function
            return add(a + b);
        }
    };
}


//Q : Implement a function to handle curried sums such as:
// curriedSum(1,2)(3,4);
// curriedSum(1)(3,4)(2);
// curriedSum(1,2,3)(4);


function curriedSum(...initialArgs) {
    // Inner function to handle further arguments or calculate the sum
    const sum = (...args) => {
        if (args.length === 0) {
            // No arguments means return the accumulated sum
            return initialArgs.reduce((acc, curr) => acc + curr, 0);
        }
        // Otherwise, accumulate the new arguments and return the sum function. accumulate all the args in side initialArgs and sum athem at the end
        initialArgs.push(...args);
        return sum;
    };

    return sum;
}

// Examples of usage:
console.log(curriedSum(1, 2)(3, 4)());    // Output: 10
console.log(curriedSum(1)(3, 4)(2)());    // Output: 10
console.log(curriedSum(1, 2, 3)(4)());    // Output: 10
