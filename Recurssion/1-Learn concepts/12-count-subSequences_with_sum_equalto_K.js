// print subsequence with sum as k
let arr = [1, 2, 3, 4, 5]; k = 5;

//technique to print only one answer
// print subsequence with sum as k

// whenever there's a problem to count. return 1 or 0 in base condition and sum all the functn calls().
// TC : 2*n
function subSeq(ind, sum) {
    if (sum > k) return 0; // additional base case to optimize the code. only works when array have positive numbers
    if (ind >= arr.length) {
        //condition satisifed
        if (sum == k) return 1;

        //condition doesnt satisfy
        else return 0;
    }

    // ds.push(arr[ind]); // ds is not required. since we only need to return the count
    sum += arr[ind];

    let l = subSeq(ind + 1, sum)

    sum -= arr[ind];
    // ds.pop();

    let r = subSeq(ind + 1, sum)

    return l + r;

}
let res = subSeq(0, 0);
console.log(res)