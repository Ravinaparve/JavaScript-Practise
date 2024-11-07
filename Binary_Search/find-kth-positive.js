var findKthPositive = function (arr, k) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(min + ((max - min) / 2));
        let len = mid - 0 + 1;

        if (len < arr[mid]) {

        } else {
            left = mid + 1;
        }
    }
}