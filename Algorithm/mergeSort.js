let arr =[9,3,7,5,6,4,8,2];

let merge =(arr,start,mid,end)=>{
    let temp =[];
    let left = start;
    let right = mid+1;

    while(left <=mid && right <=end){
        if(arr[left] < arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    }
    //remaining elements
    while(left <=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right <=mid){
        temp.push(arr[right]);
        right++;
    }
    return temp;
}

let mergeSort=(arr,start,end)=>{
    if(start >= end) return;

    let mid = Math.floor((start+end)/2);

    mergeSort(arr,start,mid); //left side
    mergeSort(arr,mid+1,end); //right side

    merge(arr,start,mid,end); //merging sorted halves
}

let result = mergeSort(arr,0,arr.length-1);

console.log("result",result);