var longestConsecutive = function(nums) {
    nums.sort();
    let maxLength =0;
    for(let i=1 ; i<nums.length ;i++){
        let len =1;
        if(nums[i]- nums[i-1] ==1){
            len++;
            maxLength = maxLength(len,maxLength);
        }
    }

    return maxLength;

};

nums = [0,3,7,2,5,8,4,6,0,1];

console.log(longestConsecutive(nums));
