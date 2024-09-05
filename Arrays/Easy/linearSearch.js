var findElement = function(arr,val){

    for (let i=0 ; i<arr.length ; i++){
        if(arr[i] == val){
            return i;
        }
        return -1; // if not found
    }
}
let arr =[ 1, 9, 3, 12, 0, 0 ]
let result = findElement(arr,12);

console.log(result);