// method 1:
//TC :O(n) 
//SC :O(n) 
function isPalindrome(i, j) {
    if (i >= j) return true;
    if (str[i] != str[j]) return false;
    return isPalindrome(i + 1, j - 1);
}

let str = "abba";
let res = isPalindrome(0, str.length - 1);
console.log(res);



// method 2: - functional 
// TC : O(n/2)  - traversing only half string
// SC : O(n/2) 
function isPalindrome(i, str) {
    if (i > str.length / 2) return true;
    if (str[i] != str[str.length - i - 1]) return false;
    return isPalindrome(i + 1, str, str.length);
}

let str1 = "abseba";
let res1 = isPalindrome(0, str1);
console.log(res1);