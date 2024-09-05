var subarraySum = function(nums, k) {
    let maxCount =0, temp=0;
    let sum =0;
    
    for(let i=0 ; i<nums.length; i++){
        for(let j=i ; j<nums.length ; j++){
                sum+=nums[j];
                temp++;
            if(sum == k){
                if(temp > maxCount) {
                    maxCount = temp;
                    temp=0;
                    sum=0;
            }    
        }
        }
    }
    console.log(maxCount);
  
};

let nums = [10,2,3,5,5,1,9]; 
let result = subarraySum(nums,10);

