function upperBound(arr, x, n) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left / 2));

        if (arr[mid] > x) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}