// TC: O(n) - cant be better than this:
var rearrangeArray = function (nums) {
    let pos = []; //separate array for positives 
    let neg = []; //separate array for negatives 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            pos.push(nums[i]);
        }
        else {
            neg.push(nums[i]);
        }
    }

    let i = 0;
    while (2 * i  < nums.length) {
        nums[2 * i] = pos[i]; //at every even position put values from postive array
        nums[2 * i + 1] = neg[i]; //at every odd position put values from postive array
        i += 1;
    }
    return nums; // in-place modification

};


//method2 : using 2 pointer: O(n) , SC: O(n)
var rearrangeArray = function (nums) {
    let i = 0;
    let j = 1;
    let result = new Array(nums.length).fill(0);

    for (let k = 0; k < nums.length; k++) {
        if (nums[k] > 0) {
            result[i] = nums[k];
            i += 2;
        } else {
            result[j] = nums[k];
            j += 2;
        }
    }
    return result;
}

let nums = [3, 1, -2, -5, 2, -4];  // Output: [3,-2,1,-5,2,-4]
// let nums = [-1,1];  // Output: [1,-1]
console.log(rearrangeArray(nums));
