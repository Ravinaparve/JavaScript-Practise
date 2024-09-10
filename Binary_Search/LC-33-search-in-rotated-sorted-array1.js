// // Brute Force 
// First find the pivot i.e from where the arr is rotated
// break the arr at pivot and apply binary search on 2 portions of the arr.
// TC:  O(n) + O(log n)+ O(log n) : O(n)
//sc: O(1)
// function binarySearch(arr, l, r, x) {
//     let ans = -1;
//     while (l <= r) {
//         let mid = Math.floor(l + ((r - l) / 2));
//         if (arr[mid] > x) {
//             r = mid - 1;
//         } else if (arr[mid] < x) {
//             l = mid + 1;
//         } else {
//             ans = mid;
//             break;
//         }
//     }
//     return ans;

// }
// var rotatedArraySearch = function (nums, x) {
//     let pivot = -1;
//     for (let i = 1; i < nums.length; i++) { //O(n)
//         if (nums[i] < nums[i - 1]) {
//             pivot = i - 1;
//             break;
//         }
//     }
//     console.log(pivot);

//     let result = -1;
//     result = binarySearch(nums, 0, pivot, x); //(log n )
//     if (result == -1) {
//         binarySearch(nums, pivot + 1, nums.length - 1, x); // (log n)
//     }
//     console.log(result);


// };

function search(arr, x) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));
        if (arr[mid] == x) return mid;

        //l side is sorted
        if (arr[l] <= arr[mid]) {
            if (arr[l] <= x && x <= arr[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        // right side is sorted
        else {
            if (arr[mid] <= x && x <= arr[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}

let nums = [2, 5, 6, 0, 1, 2], target = 3
let res = search(nums, target);
console.log(res);


