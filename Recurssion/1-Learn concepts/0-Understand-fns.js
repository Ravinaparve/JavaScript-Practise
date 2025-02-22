// print numbers from 1 to 5

function mainFn() {
    print1(1); // calls print1 with value 1
}
function print1(n) {
    console.log(n); // logs 1
    print2(2); // and calls print2 with value 2
}
function print2(n) {
    console.log(n);  // logs 2
    print3(3); // and calls print3 with value 3
}
function print3(n) {
    console.log(n);  // logs 3
    print4(4); // and calls print4 with value 4
}
function print4(n) {
    console.log(n);  // logs 4
    print5(5); // and calls print5 with value 5
}
function print5(n) {
    console.log(n);  // logs 5 and print5 moves out of execution stack once completed
}

mainFn(); // 1 2 3 4 5

// mainFn is the last funtion that will be removed from the stack

//......................................................................................................

// above fn can be also written as

function print(n) {
    if (n > 5) {
        return;
    }
    console.log(n);
    print(n + 1);

}
print(1);