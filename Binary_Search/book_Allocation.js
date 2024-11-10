// Brute Force:

function canReadBooks(arr, pages) {
    let studentCount = 1;
    let readPages = 0;
    for (let i = 0; i < arr.length; i++) {
        readPages += arr[i];
        if (readPages > pages) {
            studentCount++;
            readPages = arr[i];
        }
    }
    return studentCount;
}


function allocateBooks(arr, m) {
    if (m > arr.length) return -1;
    let min = Math.max(...arr);
    let max = arr.reduce((acc, elem) => acc + elem, 0);

    for (let i = min; i <= max; i++) {
        // since in the for loo we are starting from the most min we will stop when it matches m, so we get the minimum out of all maximums - remember this for all bs algos
        if (canReadBooks(arr, i) == m) {
            return i;
        }
    }
}

// Optimal Approach:.......................................................................................

function canReadBooks(arr, pages) {
    let studentCount = 1;
    let readPages = 0;
    for (let i = 0; i < arr.length; i++) {
        readPages += arr[i];
        if (readPages > pages) {
            studentCount++;
            readPages = arr[i];
        }
    }
    return studentCount;
}



function allocateBooks(arr, m) {
    let min = Math.max(...arr);
    let max = arr.reduce((acc, elem) => acc + elem, 0);
    let ans = -1;
    while (min <= max) {
        let mid = Math.floor(min + ((max - min) / 2));
        if (canReadBooks(arr, mid) > m) { // if we require more students to read those pages(mid) than the provided students(m). then we need to increase the capacity of pages a single student can read, so need to move right to increase 
            min = mid + 1;
        } else {

            // if students required are less than or equal to  m it means we were able to accomodate the pages to the m students. so this could be possible ans but since we need minimum we need to check further left to find minimum than the ans;
            ans = mid;
            max = mid - 1;
        }
    }
    return ans;
}

let arr = [25, 46, 28, 49, 24];
// let result = canReadBooks(arr, 60);
let result = allocateBooks(arr, 4)
console.log(result);