function findMinimum(arr) {

    let l = 0;
    let r = arr.length - 1;

    let min = +Infinity;

    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (arr[l] <= arr[mid]) {
            min = Math.min(arr[l], min);
            l = mid + 1;
        } else {
            min = Math.min(arr[mid], min);
            r = mid - 1;
        }
    }

    return min;
}