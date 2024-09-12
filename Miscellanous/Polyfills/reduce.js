// built in for reduce >>>> JP Morgan Question
let nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);
// console.log(sum);

// built-in syntax = arr.reduce((acc,curr,i,arr)=>{acc+curr},initialValue)
// Polyfill:

Array.prototype.customReduce = function (cb, initialVal) {
    if (initialVal == undefined) {
        result = this[0];
        start = 1; // result already has first value so start from 2nd index
    } else {
        result = initialVal
        start = 0;
    }
    for (let i = start; i < this.length; i++) {
        result = cb(result, this[i], i, this);
    }
    return result;
}

//..........................................................................................

Array.prototype.customReduce = function (cb, initalVal) {
    if (this.length == 0) {
        return this;
    }
    let result = (initalVal == undefined) ? this[0] : initalVal;
    for (let i = (initalVal == undefined) ? 1 : 0; i < this.length; i++) {
        result = cb(result, this[i], i, this);
    }
    return result;

}

let numsInpt = [1, 2, 3, 4];
let output = numsInpt.customReduce((acc, curr, i, arr) => {
    return acc + curr;
});

console.log(output);
