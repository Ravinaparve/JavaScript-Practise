//Brute force:
function findOccurence(nums, x) {

    let first = -1;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == x) {
            if (first == -1) {
                first = i;
            } else {
                last = i;
            }
        }
    }
    console.log(first);
    console.log(last);
}
//optimal - bs:
function first(arr, x) {
    let l = 0;
    let r = arr.length - 1;

    let firstOccurence = -1;
    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (arr[mid] == x) {
            firstOccurence = mid;
            r = mid - 1;
        } else if (arr[mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return firstOccurence;
}
function last(arr, x) {
    let l = 0;
    let r = arr.length - 1;

    let lastOccurence = -1;
    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (arr[mid] == x) {
            lastOccurence = mid;
            l = mid + 1;
        } else if (arr[mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return lastOccurence;
}

function findOccurence(nums, x) {
    let firstResult = first(nums, x);
    let lastResult = last(nums, x);


    if (lastResult == -1 && firstResult == -1) {
        console.log(0);
        return;
    }
    else if (lastResult == -1) {
        lastResult = firstResult;
    }

    console.log(firstResult);
    console.log(lastResult);
    let count = (lastResult - firstResult) + 1;
    console.log(count);

}

let nums = [5, 7, 7, 8, 8, 10], target = 6
findOccurence(nums, target);