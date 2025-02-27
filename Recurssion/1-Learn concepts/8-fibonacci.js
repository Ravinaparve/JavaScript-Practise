// Multiple Recurssion Calls:
//TC : didnt understood

// find the nth fibonacci number
function fib(n) {
    if (n <= 1) return n; // fib(0)=0, fib(1)=1

    let last = fib(n - 1); // first all the fn call for this will complete till n becomes 0
    let secondLast = fib(n - 2); // then this line will execute
    return last + secondLast;

}

let res = fib(6);
console.log(res); // 8
