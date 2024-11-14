function findMedain(nums1, nums2) {
    // sorting logic => using merge sort
    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            newArr.push(nums1[i++]);
            // i++;
        } else {
            newArr.push(nums2[j++]);
            // j++;
        }
    }

    while (i < nums1.length) {
        newArr.push(nums1[i++]);
        // i++;
    }
    while (j < nums2.length) {
        newArr.push(nums2[j++]);
        // j++;
    }
    // return newArr;



    // finding median
    let n = newArr.length;
    if (n % 2 == 1) { // if odd : odd values when divided by 2 will always give decimal no. so floor the value . instead of doing ((n+1)/2)
        return newArr[Math.floor(n / 2)];
    } else {
        return (newArr[n / 2] + newArr[(n / 2) - 1]) / 2;
        // let median = [(n/2) + ((n/2)-1)]/2;
        //  (arr3[n / 2] + arr3[(n / 2) - 1]) / 2.0;
    }
}
let nums1 = [1, 3], nums2 = [2];
console.log(findMedain(nums1, nums2));
// [1,4] [2,3,5]
