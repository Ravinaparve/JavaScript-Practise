// Brute Force:
var findKthPositive = function (arr, k) {
    let i = 0;
    let num = 1;

    // matched with num => i++;
    // not matched with num => k--;
    while (k > 0) {
        if (num !== arr[i]) {
            k--;
            if (k == 0) return num;
        } else {
            i++;
        }
        num++;
    }
};


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