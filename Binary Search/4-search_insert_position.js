var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] == target) return mid;
        else if (arr[mid] > target) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

searchInsert()