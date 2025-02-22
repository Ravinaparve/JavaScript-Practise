// brute force: of recursion:
let noSum = 0
function sum(i, n) {
    if (i > n) return;
    noSum += i;
    sum(i + 1, n);
}

sum(1, 3);
console.log(noSum);



// method 2: using parameterised way:
// we are storing the result in parameter itself and logging it at the base case
function sum(n, totalSum) {
    if (n < 1) {
        console.log(totalSum); // return whatever sum is accumulated
        return;
    }
    sum(n - 1, n + totalSum);
}
sum(3, 0); // initially totalsum is passed as 0 . this fn sums till n 


//Functional recurssion- we want function to return the result instead of using parameter
function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}
let res = sum(3);
console.log(res);