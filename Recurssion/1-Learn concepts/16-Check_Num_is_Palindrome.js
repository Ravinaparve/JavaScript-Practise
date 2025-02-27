function checkPalindrome(sum, num, n = num) {
    if (n == 0) {
        if (num == sum) return true;
        return false;
    }
    let lastDigit = n % 10;

    sum = sum * 10 + lastDigit;

    return checkPalindrome(sum, num, Math.floor(n / 10));
}
console.log(checkPalindrome(0, 1201))