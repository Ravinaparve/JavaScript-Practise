var SubArrays = function(nums) {
    let SubArrays =[];
    
    for(let i=0; i<nums.length;i++){
        let result =[];
        for(let j=i; j<nums.length; j++){
            
            result.push(nums.slice(i,j+1));
        }
        SubArrays.push(result);
    }
    return SubArrays;
    
};

let nums = [1,2,3];
let result = SubArrays(nums)
console.log(result);
