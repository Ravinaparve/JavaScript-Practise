//Brute Force : (nlogn) -worst case
// var majorityElement = function(nums){
//     let maxLength = nums.length/2;
//     let count= 1;
    
//     nums = nums.sort();
//     let i = 1;

//     while (i < nums.length){
//         if(nums[i]>nums[i-1]){
//             count = 1;
//         }else{
//             count++;
//         }
//         if(count > maxLength) return nums[i];
//         i++;
//     }
// }

// ``````````````````````````````````````````````````````````````````````````````````````````````````

// Better Soln - hash still takes extra space : O(n) - better case
var majorityElement = function(nums) {
    let limit = nums.length/2;
    let hashmap = new Map();

    if(nums.length <=1) return nums[0];

    for(let i=0; i<nums.length;i++){

        hashmap.set(nums[i], hashmap.get(nums[i])+1 || 1);

        if(hashmap.get(nums[i]) > limit){
        
             return nums[i];
            
        }
    }
};


// ``````````````````````````````````````````````````````````````````````````````````````````````````
// Moore's Voting Alogrithm:
// var majorityElement = function(nums){
//     let count =0;
//     let candidate = null;

//     for(let elem of nums){
//         if(count == 0){
//             count=1;
//             candidate = elem;
//         }
//         else if(elem == candidate){
//             count++;
//         }
//         else {
//             count--;
//         }
//     }
//     return candidate;
// }

let nums = [3,2,3];
let result =majorityElement(nums);
console.log(result);