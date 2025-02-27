// TC : O(2^n)
// SC : O(n)

let arr = [3, 1, 2];
function subSequence(index, ds) { // temp holds the single arr
    if (index >= arr.length) {
        console.log(ds);
        return; // returns only here when ds is logged. ds is data structure to hold all the subsequneces found in the path till the index became equal to n
    }

    //take or pick the particular index into the subsequence
    ds.push(arr[index]);
    subSequence(index + 1, ds); // move to add next index in temp


    // not pick, or not take the condition, this element is not added to the subsequence
    temp.pop(); // remove current (dont take)
    subSequence(index + 1, ds); // move to next index without taking current
};

subSequence(0, []);

//[ 3, 1, 2 ]
// [ 3, 1 ]
// [ 3, 2 ]
// [ 3 ]
// [ 1, 2 ]
// [ 1 ]
// [ 2 ]
// []