// brute force
let arr = [[0, 1, 1, 1],
[0, 0, 1, 1],
[0, 0, 0, 1],
[1, 1, 1, 1]];

function findMaxRow(arr) {
    let max = -1;
    let rowIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr[i].length; j++) {
            count += arr[i][j];
        }
        if (count > max) {
            max = count;
            rowIndex = i;
        }
    }
    return rowIndex;
}

let result = findMaxRow(arr);
console.log(result);

//...................................................................................................
//binary search:
function CountOnes(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length; // assume ans to be length of arr, so that after subtracting from ans, we get 0 when no 1s are found;

    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2));

        if (arr[mid] >= x) {
            ans = mid;
            high = mid - 1;
        } else if (arr[mid] < x) {
            low = mid + 1;
        }
    }
    let countofOnes = arr.length - ans;
    return countofOnes;
}

function findMaxRow(arr) {
    let max = 0;
    let rowIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        let count = CountOnes(arr[i], 1);
        if (count > max) {
            max = count;
            rowIndex = i;
        }
    }
    return rowIndex;
}

let arr1 = [[0, 1, 1, 1],
[0, 0, 1, 1],
[0, 1, 1, 1],
[1, 1, 1, 1]
];

console.log(findMaxRow(arr1));