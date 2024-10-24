// find maxcount of consecutive 1s in an array

const arr = [1, 1, 1, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1];
let maxCount = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        count++;
        maxCount = Math.max(maxCount, count);
    } else count = 0;
}
console.log(maxCount);