// method.apply(context,[Array with args])

Function.prototype.customApply = function (context = {}, args = []) {
    if (typeof this !== "function") {
        throw new Error(this + "not callable");
    }
    if (!Array.isArray(args)) {
        throw new TypeError("CreateListFromArrayLike called on non-array")
    }

    context.fn = this;
    context.fn(...args);
}
let printFullName = function (hometown, state) {
    console.log(`${this.firstname}, ${hometown} ,${state}`);
}
console.log(printFullName.apply(details, ["nerul", "maharashtra"]));


// similar to call polyfill. just need to change ...args from args. that we will take entire array as argument instead of individual values.
// we need to also set it to [] empty array for default if no array is provided.
