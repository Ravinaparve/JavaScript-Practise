function helper(num, count) {
    if (num == 0) {
        if (count !== 0) return count;
        else {
            console.log("not found");
            return;
        }
    }
    let lastDigit = num % 10;
    if (lastDigit == 0) count++;
    return helper(Math.floor(num / 10), count);
}

function countZeros(num) {
    return helper(num, 0);
}
console.log(countZeros(10000));


//.......................................................................................................
// Leetcode: 1342 : sligtly different than above:

function helper(num, steps) {
    if (num == 0) return steps;

    if (num % 2 == 0) return helper((num / 2), ++steps);
    else return helper((num - 1), ++steps);
}
var numberOfSteps = function (num) {
    return helper(num, 0);
};