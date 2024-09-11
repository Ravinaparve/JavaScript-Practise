// built in for reduce >>>> JP Morgan Question
let nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);
// console.log(sum);

// built-in syntax = arr.reduce((acc,curr,i,arr)=>{acc+curr},initialValue)
// Polyfill:
// if (initialVal) {
//     result = initialVal
//     startIndex = 0;
// } else {
//     result = this[0];
//     startIndex = 1;
// }
Array.prototype.customReduce = function (cb, initialVal) {
    let result = initialVal ?? this[0];
    let start = initialVal ? 0 : 1;

    for (let i = start; i < this.length; i++) {
        result = cb(result, this[i], i, this);
    }
    return result;
}
let numsInpt = [1, 2, 3, 4];
let output = numsInpt.customReduce((acc, curr, i, arr) => {
    return acc + curr;
});

console.log(output);
