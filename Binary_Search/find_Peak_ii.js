let mat = [[1, 4], [3, 2]]; // find peak
// this code is incorrect , identify why
function findMaxInCol(mat, colNo, m) {
    let max = -1; let rowIndex = -1;

    for (let i = 0; i < m; i++) {
        if (mat[i][colNo] > max) {
            max = mat[i][colNo];
            rowIndex = i;
        }
    }
    return rowIndex;
}
function findPeak(mat) {
    let m = mat.length; // row
    let n = mat[0].length; // col

    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2)); // choose one col

        let maxRowIndex = findMaxInCol(mat, mid, m); // find max in that col

        let left = mid - 1 >= 0 ? mat[maxRowIndex][mid - 1] : -1;
        let right = (mid + 1 < n) ? mat[maxRowIndex][mid + 1] : -1;

        if (mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right) {
            return [maxRowIndex, mid];
        }
        else if (mat[maxRowIndex][mid] < left) {
            high = mid - 1;
        } else low = mid + 1;
    }
}
console.log(findPeak(mat));
