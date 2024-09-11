//built in map()
const nums = [1, 2, 3, 4];
const multiplyByThree = nums.map((num, i, arr) => num * 3 + i);
// console.log(multiplyByThree);
//....................................................................................................................

// Polyfill:
// built in map syntax: Array.map((num, i, arr) => { })
Array.prototype.myMap = function (cb) { // 
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

let input = [1, 2, 5, 7];
let output = input.myMap(x => x * 2)
console.log(output);

//Explanation:
// Array.prototype.myMap defines a new method named myMap on the Array prototype.
// This means all arrays will now have access to this myMap method.
// cb is the parameter for the callback function that will be applied to each element of the array.

//temp is an empty array that will be used to store the results of applying the callback function to each element of the array.
//This loop iterates over each element of the array.
// i is the index variable that starts at 0 and increments up to this.length - 1.

//cb(this[i], i, this) calls the callback function cb with three arguments:
// this[i] is the current element of the array.
// i is the index of the current element.
// this is the array itself (the context on which myMap was called).
// The result of the callback function is pushed into the temp array.

//After the loop completes, temp contains the results of applying the callback function to each element of the original array.
// The temp array is returned as the result of myMap.