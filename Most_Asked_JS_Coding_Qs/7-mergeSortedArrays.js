// given 2 arrays that are sorted. merge and sort them
// using built-in:......................................................................................

function mergeSortedArrs(arr1, arr2) { // (m+n)log(m+n)
    let merged = [...arr1, ...arr2];
    merged.sort((a, b) => a - b);
    return merged;
}

//.........................................................................................................
// using merge sort - better from above
function mergeSortedArrs(ar1, ar2) {
    let left = 0;
    let right = 0;
    let temp = [];

    while (left < ar1.length && right < ar2.length) {
        if (ar1[left] < ar2[right]) {
            temp.push(ar1[left]);
            left++;
        } else {
            temp.push(ar2[right]);
            right++;
        }
    }

    while (left < ar1.length) {
        temp.push(ar1[left]);
        left++;
    }

    while (right < ar2.length) {
        temp.push(ar1[right]);
        right++;
    }
    return temp;
}

let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];
let result = mergeSortedArrs(arr1, arr2);
console.log(result);