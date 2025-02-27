// factorial of n nos:
//parameterized way
function fact(i, res) {
    if (i < 1) {
        console.log(res);
        return;
    }
    fact(i - 1, i * res);
}
fact(4, 1); // 24


// functional way:

//TC :O(n) //SC:O(n)=>stack space
function fact(n) {
    if (n == 1) return 1;
    return n * fact(n - 1); // "return" here because we want the every function call to return its prev fctorial result ; eg 5* fact(4) (return result fact of 4)
}
let res = fact(4);
console.log(res); // 24