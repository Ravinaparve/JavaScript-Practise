var floorCiel = (arr, x) => {
    let left = 0;
    let right = arr.length - 1;

    let floor = 0, ciel = 0;

    while (left <= right) {
        let mid = Math.floor(left + (right - left / 2));
        if (arr[mid] == x) {
            ciel = arr[mid];
            break;
        } else if (arr[mid] > x) {
            ciel = arr[mid];
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    floor =
        console.log(floor);
    console.log(ciel);
}


let nums = [3, 4, 4, 7, 8, 10], x = 8;
floorCiel(nums, x);