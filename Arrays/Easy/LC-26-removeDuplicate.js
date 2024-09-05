//Brute Force
var removeDuplicates = function(nums){

    let set = new Set(nums); // find uniques
    let unique = Array.from(set); // new array with unique elements
    
    for(let i=0 ; i<unique.length; i++){
        nums[i] = unique[i]; //replace initial values with unique
    }
    console.log(nums);
    console.log(unique.length);
}



// Optimized Solution:
var removeDuplicates = function(nums) {
    
    let replace = 1;

    for(let i=1 ; i<nums.length; i++){
        if(nums[i-1]!== nums[i]){
            nums[replace] = nums[i];
            replace++;
        }
    }
    console.log(nums);
    console.log(replace);
};

let nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums);