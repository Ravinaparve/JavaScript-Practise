var findMedianSortedArrays = function (arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;

    if (m > n) return findMedianSortedArrays(arr2, arr1);

    let size = m + n; // total size of arr1 & arr2  //3
    let leftHalfLength = Math.floor((m + n + 1) / 2); //2

    let low = 0;
    let high = m; // assuming arr1 to be small //1

    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2); //0
        let mid2 = leftHalfLength - mid1; //2

        // calculate l1, l2, r1, and r2
        let l1 = -Infinity, l2 = -Infinity;
        let r1 = +Infinity, r2 = +Infinity;

        if (mid1 - 1 >= 0) l1 = arr1[mid1 - 1]; //-inf
        if (mid1 < m) r1 = arr1[mid1]; //2

        if (mid2 - 1 >= 0) l2 = arr2[mid2 - 1]; // 3
        if (mid2 < n) r2 = arr2[mid2];

        if (l1 <= r2 && l2 <= r1) {
            if (size % 2 == 1) {
                return Math.max(l1, l2);
            } else {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            }
        }

        else if (l1 > r2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }

    }
    return 0; // dummy statement
};