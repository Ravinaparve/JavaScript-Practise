var reverse = function (arr, start, end) { //helper function
    while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

var leftRotate = function (nums, k) {
    let n = nums.length;
    k = k % n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, n - k - 1);
    reverse(nums, k + 1, n - 1);

    console.log(nums);
}



let arr = [1, 2, 3, 4, 5, 6, 7];
leftRotate(arr, 3);

