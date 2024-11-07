let arr = [0, 3, 4, 7, 10, 9], k = 4;

function canWePlaceCows(stalls, dist, cows) {
    let cowsCount = 1;
    let last = arr[0]; // tracks where the last cow was placed

    for (let i = 1; i < stalls.length; i++) {
        if (arr[i] - last >= dist) {
            cowsCount++;
            last = arr[i];

        }
    }
    if (cowsCount >= cows) {
        return false;
    } else return true;

}

function aggressiveCows(stalls, k) {
    stalls.sort((a, b) => a - b);
    let min = 1;
    let max = Math.max(...stalls);

    for (let i = min; i <= max; i++) {
        if (canWePlaceCows(stalls, i, k) == true) {
            continue;
        } else {
            return i - 1; // return previous value where we could place all the cows
        }
    }

}