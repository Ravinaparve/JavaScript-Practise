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