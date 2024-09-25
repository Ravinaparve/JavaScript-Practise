// example for call()
let car1 = {
    color: "red",
    company: "Ferrari"
}
function purchaseCar(currency, price) {
    console.log(this.color + "and" + this.company + "|" + this.currency + this.price);
}
purchaseCar.call(car1, "Rs.", "5000000");

// syntax : call(context, args1,args2)

// Polyfill for call()
//..........................................................................................................

Function.prototype.customCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "it's not callable")
    }
    context.fn = this; // take the function which is calling the customCall and add it in context object
    return context.fn(...args);
};

function greet(greeting) {
    return `${greeting}, ${this.name}!`;
}
const person = { name: 'Alice' };
console.log(greet.customCall(person, 'Hello')); // Output: "Hello, Alice!"

//..........................................................................................................
/** steps:

1. create a custom function. first parameter will be context.(ie the object that will be passed. if not provided set the default to {} object)

2.check if the function on which customCall is called is actually a function or not (check if greet is a function)

3. take the function which is calling the customCall and add it in context object by assigning to new function (fn) (person.fn = greet)
here "this" is [Function: greet]

4. now we made greet property of person{}, now call it with arguements (person.fn(...args))


Explanation:
a. The customCall method allows you to call a function with a specified this context and any number of arguments.

b. below line assigns the function that called customCall to a property called fn on the context object. This allows us to call the original function with the desired this context.
    context.fn = this

c. below line calls the function that was assigned to context.fn with the spread operator, passing in the arguments collected in args. This effectively invokes the original function in the context of the provided object.
    context.fn(...args);

**/