// Brute force: - by setting a flag
// print subsequence with sum as k
let arr = [1, 2, 3, 4, 5]; k = 5;

let flag = false;
function subSeq(ind, ds, sum) {
    if (ind >= arr.length) {
        if (sum == k && flag == false) {
            flag = true;
            console.log(ds);
        }
        return;
    }

    ds.push(arr[ind]);
    sum += arr[ind];


    subSeq(ind + 1, ds, sum);
    sum -= arr[ind];

    ds.pop();
    subSeq(ind + 1, ds, sum);
}
subSeq(0, [], 0);



// Better approach - to avoid future recurssion calls:

// return true or false and avoid further recurssion calls if we get true

//technique to print only one answer
function subSeq(i, sum, ds) {
    if (i >= arr.length) {
        if (sum == k) {
            console.log(ds);
            return true;
        } else return false;
    }

    ds.push(arr[i]);
    sum += arr[i];

    if (subSeq(i + 1, sum, ds) == true) return true; // if this return true, no need to perform further recurssion calls

    sum -= arr[i];
    ds.pop();

    if (subSeq(i + 1, sum, ds) == true) return true;

    return false; // when non of the above recurssion call return true

}