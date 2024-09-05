let arr = [5, 4, 2, 3, 1];
// search minimum and swap
let selectionSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;  // assume current index to be the most minimum first

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) { // compare i with rest other elements in arr
                minIndex = j; // if elem minimum than i , update the minIndex to the elem's index
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap the values
    }

    console.log(arr);
}

selectionSort(arr);


//iterations:
//let arr = [5,4,2,3,1];
// i= 0 to n-1;
// 1st iteration => i= 0 ; j= i+1 ; if(j<i)=> midIndex = j => arr[i] = arr[mindIndex]