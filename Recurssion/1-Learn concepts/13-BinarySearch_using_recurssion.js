let arr = [1, 2, 3, 4, 5, 6], target = 5; // return index if found

function bs(arr, target, s, e) {
    if (s > e) return -1;

    let mid = Math.floor(s + ((e - s) / 2));

    if (arr[mid] == target) {
        return mid;
    }
    else if (arr[mid] > target) {
        return bs(arr, target, s, mid - 1);
    }
    else return bs(arr, target, mid + 1, e);
}
let res = bs(arr, target, 0, arr.length - 1);
console.log("target at index", res)