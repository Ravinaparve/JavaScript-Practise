// function search(arr) {
//     let l = 0;
//     let r = arr.length;
//     let min = +Infinity;
//     while (l <= r) {
//         let mid = Math.floor(l + ((r - l) / 2));
//         if (arr[l] <= arr[mid]) {
//             min = Math.min(arr[l], min);
//             l = mid + 1;
//         } else {
//             min = Math.min(arr[mid], min);
//             r = mid - 1;
//         }
//     }
// }
// // since arr is sorted and rotated. one part will always be sorted and other not sorted.
// // the minimum would most probably be on the unsorted part .
// // we need to look in the unsorted part of the array.
// // so find the mid, if l<m, it means this part is sorted. so no need to do anything.. just pick the min and look at the right side which is unsorted part(l = mid + 1)

// // if l>m, the left side is not sorted and the right side is sorted. so take minium from (l & r) and check in left  (r = mid - 1)




