// var SubArraysSum = function(nums){

//     let subArrays =[];
//     let subArraysResult=[];

//     let sumSubArrays =[];
//     let sumSubArraysResult =[];

//     for(let i=0; i<nums.length;i++){

//         for(let j=i; j<nums.length;j++){

//             let sum = 0;

//             subArraysResult.push(nums.slice(i,j+1));

//             for(let k=i; k<=j; k++){
//                 sum+=nums[k];
//             }
//             sumSubArraysResult.push(sum);
//         }
//         subArrays.push(subArraysResult);
//         sumSubArrays.push(sumSubArraysResult);
//     }
//     console.log(subArrays);
//     console.log(sumSubArrays);
// }

//optimal Approach:

var SubArraysSum = function(nums){
    let sumSubArrays =[];
    let sumSubArraysResult =[];

    for(let i=0; i<nums.length;i++){
        let sum = 0;
        for(let j=i; j<nums.length;j++){

            // for(let k=i; k<=j; k++){ // this for loop can be replaced
            //     sum+=nums[k];
            // }

            sum+=nums[j];
            sumSubArraysResult.push(sum);
        }
        sumSubArrays.push(sumSubArraysResult);
    }
    console.log(sumSubArrays);
}




let nums =[1,2,3];
let result = SubArraysSum(nums);
console.log(result);