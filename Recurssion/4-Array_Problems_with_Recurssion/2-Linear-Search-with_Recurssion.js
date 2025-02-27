function linearSearch(arr, target) {
    return helper(0, arr, target);
}

function helper(i, arr, target) {
    // Base case: If we reach the last element,
    if (i == arr.length) {
        return false;
    }
    // Check if the current element is less than the next one
    if (arr[i] == target) return true;
    else return helper(i + 1, arr, target);
}
// let arr =[1,2,3,8,4,5,2];
// console.log(linearSearch(arr,2))


// method 2:
function linearSearch(arr, target) {
    return helper(0, arr, target);
}

function helper(i, arr, target) {
    // Base case: If we reach the last element,
    if (i == arr.length) {
        return false;
    }
    // Check if the current element is equal to target. if not check if next element is equal. if any 1 condition is true return true
    return arr[i] == target || helper(i + 1, arr, target);

}
let arr = [1, 2, 3, 8, 4, 5, 2];
console.log(linearSearch(arr, 12))