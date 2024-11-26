var greet = "Hi";
if (true) {
    var greet = "Welcome";
    console.log(greet); // Welcome
}
console.log(greet); //Welcome


//..............................LET & CONST ..............................................
// same let & const variable defined in different scopes will not be error because both are treated as different variables. the means they are 2 different variables even if the name is same
let greet = "Hi";
if (true) {
    let greet = "Welcome";
    console.log(greet); // Welcome

}
console.log(greet); // Hi

//............................................................................

const greet = "Hi";
if (true) {
    const greet = "Welcome";
    console.log(greet); //Welcome
}
console.log(greet);//Hi

//...................................................................
// variable shadowing:
function test() {
    let a = "Hello";

    if (true) {
        let a = "Hi";
        console.log(a);
    }
    console.log(a);
}
test();

//....................................................................................
// Illegal Shadowing : if try to shadow let variable ( let b = "Bye") with var(var b = "Goodbye"). this will give error
// shadowing var variable with let is correct. 
function test() {
    var a = "Hello";
    let b = "Bye";

    if (true) {
        let a = "Hi";
        var b = "Goodbye"; //error: SyntaxError: Identifier 'b' has already been declared
        console.log(a);
        console.log(b);
    }
}
test();
//Hi
// Hello

// //....................................................................................................................
//Q1: whats the o/p:
function logger() {
    console.log(b);
    var b = 10;
}

//Q2: whats the o/p:
function testLog() {
    console.log(a, b, c);
    const c = 30;
    let a = 20;
    var b = 10;
}
testLog(); //?

//Q3: whats the o/p:
var a = 10;
let a = 10;
console.log(a); // SyntaxError: Identifier 'a' has already been declared
//reason:  in the same scope, you cannot redeclare a variable using "let" if it has already been declared with "var" (or let itself). This results in a SyntaxError because "let" does not allow redeclaration in the same scope.


//Q4: whats the o/p:
let a = 10;
var a = 10;
console.log(a, b); // Error: you cannot redeclare let with var or vice versa in the same scope), this line will throw a SyntaxError.


// Unlike var, which allows redeclaration of the same variable in the same scope,
//  let and const do not allow this. If you try to declare a variable with the same name using let or const within the same scope, JavaScript throws a SyntaxError.




// Q:
let i, j, k = 0;
console.log(i)
console.log(j)
console.log(k)
