Function.prototype.customBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + "cannot be bound as it is not callable");
    }

    context.fn = this;

    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    };
}
let car1 = {
    color: "red",
    company: "Ferrari"
}
function purchaseCar(currency, price) {
    console.log(this.color + "and" + this.company + "|" + currency + price);
}

const newFunc = purchaseCar.customBind(car1, "Rs"); // we have passed 1 arg here 
console.log(newFunc(5000000)); // passed another one here

// in bind we call pass parameter either when calling bind or into a returned function from bind later.
// so to handle this case we will collect all the args passed and call it inside the function.
