// using built in filter
let nums = [1, 2, 3, 4, 5, 6, 7];
const moreThanTwo = nums.filter((num, i, arr) => num > 2);
// console.log(moreThanTwo);


// Polyfill:....................................................................................
// function checkCb(num, i, arr) {
//     return num > 2;
// }
// console.log(check(3)); // true

Array.prototype.customFilter = function (checkCb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if (checkCb(this[i], i, this)) { // the check cb fn will return true or false. if it returns true only push that item
            temp.push(this[i]);
        }
    }
    return temp;
}
let input = [1, 2, 3, 4, 5, 6, 7];
let output = input.customFilter(x => x >= 4);
console.log(output);


