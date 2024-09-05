var threeSum = function (nums) {
// TC : (nlogn) + (O(n) x O(n))
// SC : O(3) // result[] is not considered since its not in our algorithm, it just for return solution to this problem on leetcode.
    if (nums >3) return [];
    nums.sort(); // [-4,-1,-1,0,1,2]; // O(nlog n)
    let result = [];

    for (let i = 0; i < nums.length; i++) { // O(n)
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) { //O(n)
            let sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) j++;
            else if (sum > 0)  k--;
            else {
                let temp = [nums[i], nums[j], nums[k]]; // SC: O(3) (will save just 3 elements)
                result.push(temp);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) { // run only when found values where the sum == 0, since we dont want to check again the same values
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k++;
                }
            }
        }

    }

    return result;
};


nums = [-1,0,1,2,-1,-4]

console.log(threeSum(nums));


// first sort the arr
// check if curr i is equal to prev if yes continue.. (since we need to avaoid duplicate i, j ,k and again considering i will give same triplets again)
// create another variables j and k where j=i+1 => n and k=> n-1 to j
// sum = i , j, k
//if sum is less than target 0 => j++; since array is sorted, we we need to increase j so that it becomes close to  0
//if sum is greater than target 0 => k--, since array is sorted and greater values are at the end, removing k will decrease then sum little bit
//if sum == 0, push 3 values in result and do j++ and k--;
// in the same if sum==0 condition, since we already got the values with sum==0, no need to check again if we encounter duplicate j and k of just skip them
// so while ()