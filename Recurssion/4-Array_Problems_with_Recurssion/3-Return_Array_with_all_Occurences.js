// search if the target is present in array and return the index of all its occurences in an array
function linearSearch(i, arr, target, resultArr) {
    // Base case: If we reach the last element,
    if (i == arr.length) {
        return resultArr;
    }
    if (arr[i] == target) {
        resultArr.push(i);
    }
    return linearSearch(i + 1, arr, target, resultArr);

}
let arr = [1, 2, 3, 8, 4, 5, 2];
console.log(linearSearch(0, arr, 2, []))