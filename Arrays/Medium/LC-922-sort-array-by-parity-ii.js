var sortArrayByParityII = function(nums) {
    let even=[];
    let odd =[];

   
    for(let i=0; i<nums.length;i++){

        if(nums[i] % 2 == 0){
           even.push(nums[i]);
        }else{
           odd.push(nums[i]);
        }

    }

     //in place
    let i=0;
    while(i*2 < nums.length){ // to prevent going out of bound. if just kept as i, it will increment the nums.length as well and loop will become infinite
        nums[i*2] = even[i];
        nums[i*2+1] = odd[i];
        i++;
    }

    return nums;
};

//method 2:
//this will only run if any order is accepted: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
var sortArrayByParityII = function(nums){
    let i=0; 
    let j=1;
    let n = nums.length;
    while(i<n && j < n){ 
        if(nums[i] % 2 == 0) i+=2;  //No need to change(i.e already in even place)
        else if(nums[j]%2 == 1) j+=2; //No need to change(i.e already in odd place)
        else{
        [nums[i],nums[j]] = [nums[j], nums[i]];
        }
    }
    return nums;
}

//Input: nums = [4,2,5,7]
// Output: [4,5,2,7]

let nums =[4,2,5,7];
console.log(sortArrayByParityII(nums));