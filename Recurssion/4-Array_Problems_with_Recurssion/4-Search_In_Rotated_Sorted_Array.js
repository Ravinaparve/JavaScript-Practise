// using binary search:
function rotatedSearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (arr[mid] == target) return mid;

        else if (arr[l] <= arr[mid]) {
            if (arr[l] <= target && target <= arr[mid]) {
                r = mid - 1;
            } else l = mid + 1;
        }
        else {
            if (arr[mid] <= target && target <= arr[r]) {
                l = mid + 1;
            } else r = mid - 1;
        }
    }
}


// using Recurssion..............................................................................


function search(arr, target, l, r) {
    if (l > r) return -1;

    let mid = Math.floor(l + ((r - l) / 2));
    console.log(mid)

    if (arr[mid] == target) return mid;

    if (arr[l] <= arr[mid]) {
        if (arr[l] <= target && target <= arr[mid]) {
            return search(arr, target, l, mid - 1);

        } else return search(arr, target, mid + 1, r);
    }

    else {
        if (arr[mid] <= target && target <= arr[r]) {
            return search(arr, target, mid + 1, r);
        }
        else return search(arr, target, l, mid - 1);
    }
}

let arr = [5, 6, 7, 8, 9, 1, 2, 3]
console.log(search(arr, 4, 0, arr.length - 1));