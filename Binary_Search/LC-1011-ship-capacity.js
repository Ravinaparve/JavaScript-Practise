function calcutateDaysTaken(arr, capacity) {
    let daysTaken = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum >= capacity) {
            daysTaken++;
            sum = arr[i];
        }
    }
    return daysTaken;
}

let weights = [3, 2, 2, 4, 1, 4], days = 3;
let ans = calcutateDaysTaken(weights, 4);
console.log(ans);
