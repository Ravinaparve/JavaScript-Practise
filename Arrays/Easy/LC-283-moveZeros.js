var moveZeroes = function(arr) {
    let replace = 0; // since we need to remove 0s so check from starting

    for(let i=0; i<arr.length ; i++){
        if(arr[i]!==0){
            [arr[replace],arr[i]] = [arr[i],arr[replace]];
            replace++;
        }
    }

    console.log(arr);
};

let nums = [1,0,9,0,3,12];
moveZeroes(nums);