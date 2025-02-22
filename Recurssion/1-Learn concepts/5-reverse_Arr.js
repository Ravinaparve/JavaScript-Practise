// using parameters
function reverse(i, j, arr) {
    if (i >= j) return arr;

    [arr[i], arr[j]] = [arr[j], arr[i]];

    return reverse(i + 1, j - 1, arr);
}
let arr = [1, 2, 3, 4];
let ans = reverse(0, arr.length - 1, arr);
console.log(ans);



// My Solution:............................................................................
let ar = [1, 2, 3, 4];
let res = [];
function reverse(i) {
    if (i >= ar.length - 1) {
        res.push(ar[i]);
        return;
    }
    reverse(i + 1);
    res.push(ar[i]);
}
reverse(0);
console.log(res);



// Using Single Pointer ............................................................................
let arr1 = [1, 2, 3, 4];
let n = arr.length;

function reverse(i) {
    if (i >= n / 2) return arr1;

    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];

    reverse(i + 1);
}
reverse(0);
console.log(arr1);



// reverse array (wrong code..)
let resultArr = [];
function reverseArr(arr, i) {
    if (i < 0) {
        return;
    }
    let ans = arr[i - 1];
    reverseArr(arr, i - 1);
    if (i >= 0 && ans) {
        resultArr.push(ans);
    }
}
let array = [1, 2, 3, 4];
reverseArr(array, 4);
console.log(resultArr);