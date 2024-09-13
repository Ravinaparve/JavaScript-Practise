// https://www.youtube.com/watch?v=sZjlEKbaykc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=7

//what's the use of closures?
// 1. makes it possible for function to have private variables
//2. helps to control what is and isnt in the scope of a function. along with which variables can be shared amongst the sibiling function
// sample
function z1() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y(); //  calling the fn and not returning the enitre fn definition
}
//.............................................................................................................

//example 1:
function z() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y; // returning the enitre fn definition and not calling it.
}

// let x = z(); // function y
// console.log(x()); // 10

//.............................................................................................................

// example 2:
function outer() {
    var a = 7;

    function inner() {
        console.log(a);
    }
    var a = 100;
    return inner;
}


var result = outer(); //[Function: inner]
console.log(result()) //100
//.............................................................................................................


// example 3:

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

let counter = createCounter();
console.log(counter);//[Function (anonymous)]
console.log(counter()); //1
console.log(counter()); //2  => The count variable is part of the closure’s environment, and it persists between calls to the inner function. This allows count to increment on each call rather than being reinitialized.Each call to counter() modifies and accesses the same count variable.
//.............................................................................................................


// example 4:
function makeFunc() {
    var name = "Mozilla";

    function displayName(nums) {
        console.log(name, nums);
    }
    return displayName;
}
// makeFunc();
console.log(makeFunc()); // return enitre displayName fn defintion
console.log(makeFunc()(5)); // calling displayName fn with nums =5
//.............................................................................................................


//example 5 (closure scope chains)
// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // 20

//.............................................................................................................
//Question: Write the function that will allow you to do this:


let createBase = function (baseNum) {
    function inner(innerNum) {
        console.log(baseNum + innerNum);
    }
    return inner;
}
var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // returns 27;


//.............................................................................................................
//how can we use closure's to optimize the time of our code?

function find(index) {
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a[i] = i * i;
    }
    console.log(a[index]);

}
find(6);
find(12);

//Soln: using closure.
function findAns() {
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a[i] = i * i;
    }
    return function (index) {
        console.log(a[index]);
    }
}

// in the findAns keep the basic logic that we dont want to recalculate every time. this saves computation time
// and return the fn from findAns that has only the result at particular index
let closure = findAns();
closure(6)
closure(50)


//.............................................................................................................
// closure + setTimeout + block scope
function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}
//vs

function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i * 1000);
    }
}