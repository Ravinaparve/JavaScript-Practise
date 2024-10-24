// check str palindrome
let str = "olo";

function checkPalindrome(str) {

    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
        if (str[i] == str[j]) {
            i++;
            j--;
        } else return false;
    }
    return true;

}

let result = checkPalindrome(str);
console.log(result)