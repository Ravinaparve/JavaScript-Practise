// brute force approach:
function findkthElement(a, b) {
    let m = a.length;
    let n = b.length;

    let i = 0, j = 0;
    let count = 0;
    let kthElement = -1;

    while (i < m && j < n) {
        if (a[i] < b[j]) {
            if (count == k - 1) {
                kthElement = a[i];
            }
            i++;
        } else {
            if (count == k - 1) {
                kthElement = b[j];
            }
            j++;
        }
        count++;
    }

    while (i < m) {
        if (count == k - 1) {
            kthElement = arr[i];
        }
        i++;
        count++;
    }

    while (i < n) {
        if (count == k - 1) {
            kthElement = arr[j];
        }
        j++;
        count++;
    }

    return kthElement;
}


// ````````````````````````````````````````````````````````````````````````````````````````````````````

//Optimal Approach - using Binary Search:

var findKthElement = function (arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;

    if (m > n) return findKthElement(arr2, arr1);

    let size = m + n; // total size of arr1 & arr2  
    let leftHalfLength = k; //since we need k elements on the left. The size of the left half will be k: 

    let low = Math.max(0, k - n); //???;how
    let high = Math.min(k, m); //???; // assuming arr1 to be small, since we need to pick only k elements , no need to traverse entire array 

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
            return Math.max(l1, l2);
        }
        else if (l1 > r2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }

    }
    return 0; // dummy statement
};

let a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 6;
// let merged =[1, 2, 3, 4, 6, 7, 8, 9, 10], ans= 4 

let result = findkthElement(a, b)
console.log(result)



// Note on BS low and high edge cases?
// Let's take an example, m = 3, n = 10, k = 12
// If we keep low = 0, and high = 3
// then mid1 = 1;
// low = 0 means we don't pick any element from the first array, and now the remaining elements need to be picked from the second array.
// mid2 = (k - mid1) = 12 - 1 = 11 ???? but there are only 10 elements in the second array
// Hence we can't start our search when we pick no elements from the first array.
// So our low must be max(k - n, 0) [no of elements  at least need to pick for 1st array]
// Similarly, for high, we have to reduce the search space such that it can handle low K values.

// Note: this issue doesn't occur in the median problem because we guaranteed to split the search space in half every time.