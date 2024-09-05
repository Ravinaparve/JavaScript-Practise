//method 1: // brute force = LC error: took too long to execute
// var rotate = function(nums, k) {
//    let i= 0;

//    while(i < k){
//     let last = nums.pop(); // returns last
//     nums.unshift(last); // add in front
//     i++;
//    }
//    console.log(nums);
// };


//method 2:
var rotate = function (nums, k) {

   k = k % nums.length; // to handle the out of bound cases, or when k>=nums.length
   reverse(nums, 0, nums.length - 1);
   reverse(nums, 0, k - 1);
   reverse(nums, k, nums.length - 1);
   return nums;

}

var reverse = function (arr, start, end) {
   while (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++;
      end--;
   }
   return arr;
}


nums = [1, 2, 3, 4, 5], k = 3 // [5,6,7,1,2,3,4]
let result = rotate(nums, k);
console.log("result", result);
// reverse(nums);