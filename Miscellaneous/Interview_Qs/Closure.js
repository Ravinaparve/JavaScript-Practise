//example 1:
function z() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

let x = z(); // function y
console.log(x()); // 10


// example 2:
function outer() {
    var a = 7;

    function inner() {
        console.log(a);
    }

    var a = 100;
    return inner;
}

// var result = outer(); //[Function: inner]
// console.log(result()) //100


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
console.log(counter()); //2
