function isSorted(arr) {
    return helper(0, arr);
}

function helper(i, arr) {
    // Base case: If we reach the last element, it's sorted
    if (i == arr.length - 1) return true;

    // Check if the current element is less than the next one
    if (arr[i] <= arr[i + 1]) {
        return helper(i + 1, arr); // use i+1 instead of i++.  The i++ expression increments the value after it is used in the function call, which causes the recursion to skip an index and results in incorrect behavior.
    }
    else return false;
}
let arr = [1, 2, 3, 4, 5, 2];
console.log(isSorted(arr))