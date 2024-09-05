// brute force approach :
//1. generate all subArrays and subArray sums and return the largest sum

// Kadane's Alogrithm:

//Optimal Approach = O(n) ;  SC: O(1)
// var maxSubArray = function (nums) {
//     let max = -Infinity;
//     let sum = 0;
//     if (nums.length <= 1) return nums[0];

//     for (let i = 0; i < nums.length; i++) {

//         sum += nums[i];

//         if (sum > max) max = sum;

//         if (sum < 0) { // if sum is negative then drop it.. as it will make the sumtotal decrease going forward
//             sum = 0;  // resetting the sum to 0 , if less
//         }

//     }
//     return max;
// };



// ```` Follow up  Qs - Find that subarray``````````````````
var subArraySum = function (nums) {
    let max = -Infinity;
    let sum = 0;
    let start, ansStart, ansEnd;
    for (let i = 0; i < nums.length; i++) {
        if (sum == 0) start = i; //whenever its starting to form a subarray whose sum>0, sum always starts with the zero

        if (sum < 0) sum = 0;

        sum += nums[i];

        if (sum > max) { //to find the subArray
            ansStart = start;
            ansEnd = i;
        }
        max = Math.max(sum, max);
    }
    // return max;
    return nums.slice(ansStart, ansEnd + 1);
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let nums = [-2, -1];
let result = subArraySum(nums);
console.log(result);
// Output: 6