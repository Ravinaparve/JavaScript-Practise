//method 1:
function reverse(num) {
    if (num == 0) {
        return;
    }
    let digit = num % 10;
    console.log(digit);
    reverse(Math.floor(num / 10));
}
// output : 4 3 2 1 (not correct because it logs each digit seperately. we need to reverse complete number and display single number)


//......................................................................................................................................
// method 2: (not recommended , since using global variable outside of functn to save result).
let sum = 0;
function reverse(num) {
    if (num == 0) return;
    let lastDigit = num % 10;
    sum = sum * 10 + lastDigit;
    reverse(Math.floor(num / 10));
}
reverse(1824);
console.log(sum)


//......................................................................................................................................

// method 3:(using additional parameter). - add additional arg (sum) in the function
function reverseNum(sum, num) {
    if (num == 0) return sum;
    let lastDigit = num % 10;

    sum = sum * 10 + lastDigit;

    return reverseNum(sum, Math.floor(num / 10));
}
console.log(reverseNum(0, 3467))

//......................................................................................................................................

// method 4:(using additional parameter). but if sometimes you need additional function in the arguments,but cant add directly,  in that case make another function
// ... pending