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
    return n * fact(n - 1);
}
let res = fact(4);
console.log(res); // 24