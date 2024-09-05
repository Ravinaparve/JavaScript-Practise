//Given two integer arrays nums1 and nums2, return an array of their intersection
// . Each element in the result must be unique and you may return the result in any order.
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

//my brute force:
//solution1:
// var findUnion = function(nums1,nums2){
//     let unique=[];
//     let shorter = nums1;
//     let larger = nums2;
//     if(nums1.length < nums2.length){
//         shorter = nums1;
//         larger = nums2;
//     }
//     // let shorter = nums1.length < nums2.length ? nums1 : nums2; 
//     // let larger = nums1.length > nums2.length ? nums1 : nums2;
    
//     for(let i=0 ; i< shorter.length ; i++){
//        if(larger.includes(shorter[i])){
//             unique.push(shorter[i]);
//        }
//     }
//     console.log(unique);
// }

// my optimal solution:
//solution2
// var findUnion = function(a,b){
//     let commons= [];
//     if (a.length<b.length){
//         commons= a.filter(elem=>b.includes(elem));
//     }else{
//         commons= b.filter(elem=>a.includes(elem));
//     }
//     let result =[];

//     for(let elem in commons){
//         if(!(result.includes(elem))){
//             result.push(elem);
//         }
//     }
//     console.log(result);
// }

//solution3:

var findUnion = function(nums1,nums2){
    let hashset = new Set(nums1);
    console.log(hashset);
    let result =[];
    for(let elem of nums2){
        if(elem in hashset){
            result.push(elem);
        }
    }
    console.log(result);
}



//[1,1,2,3,2,3] //[1,2,3]
let nums1 = [1,2,2,1];
let nums2 = [2,2]; //[2]
//o/p : [2]

findUnion(nums1,nums2);