// binary search appraoch

var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let colLength = matrix[0].length;

    let low = 0;
    let high = m * colLength;

    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2));

        let row = Math.floor(mid / colLength);
        let col = Math.floor(mid % colLength);

        if (matrix[row][col] > target) {
            high = mid - 1;
        }
        else if (matrix[row][col] < target) {
            low = mid + 1;
        }
        else return true;
    }
    return false;

};