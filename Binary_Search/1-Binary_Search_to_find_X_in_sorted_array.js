//Iterative Approach
var binarySearch = (arr, target) => {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + ((right - left) / 2));

        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return mid; // if target equal mid
        }
    }

    return -1; // if no element found

}


// Recurssive Approach:

var binarySearch = (arr, low, high, x) => {

    if (low > high) return -1;
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == x) return mid

    else if (arr[mid] > target) {
        binarySearch(arr, low, mid - 1, x);
    } else {
        binarySearch(arr, mid + 1, high, x);
    }

}

binarySearch(arr, low + 1, high - 1)

