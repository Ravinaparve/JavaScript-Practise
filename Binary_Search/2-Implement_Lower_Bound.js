var LowerBound = (arr, x) => {
    let left = 0;
    let right = arr.length - 1;
    let ans = arr.length;

    while (left <= right) {
        let mid = Math.floor(left + ((right - left) / 2));

        if (arr[mid] >= x) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (right == -1) { // to handle edge case if no element is found greater than -1;
        return -1;
    } else {
        return ans;
    }
}

// let nums = [3, 5, 8, 15, 19];

let nums = [1, 2, 8, 10, 11, 12, 19];
let n = 7, x = 5;
let res = LowerBound(nums, x);
console.log(res);

