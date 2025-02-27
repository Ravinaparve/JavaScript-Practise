// Brute Force:
let arr = [1, 2, 3, 4, 5], k = 5;

function subSeq(i, ds) {
    if (i >= arr.length) {
        let sum = 0;
        for (let elem of ds) {
            sum += elem;
        }
        if (sum == k) {
            console.log(ds);
            return;

        } else return;
    }

    ds.push(arr[i]);
    subSeq(i + 1, ds);
    ds.pop();
    subSeq(i + 1, ds);
}

subSeq(0, []);


// Better Approach:...................................................................................

function subSeq(ind, ds, sum) {
    if (ind >= arr.length) {
        if (sum == k) {
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