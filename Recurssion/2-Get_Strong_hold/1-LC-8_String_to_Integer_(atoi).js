//For 32-bit integers, the range is from -(2^31) to (2^31)–1, which equals to… 2,147,483,647.
var myAtoi = function (s) {
    // remove white space, leading zeors until non-digi
    let result = 0;
    let sign = 1;
    let i = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    //check if empty string
    if (s.length == 0) return 0;

    while (s[i] == " ") i++;  // remove all leading white spaces:

    if (s[i] == "-" || s[i] == "+") { // check if + or - sign initially only after removing spaces
        sign = (s[i] == "-") ? -1 : 1; // also handle case if s ="+1"
        i++;
    }

    while (i < s.length) {
        if (s[i] == " ") break; // if there are spaces in between the strings ten stop
        let digit = s[i] - 0; //coverting character into digit  
        if (isNaN(digit) || digit < 0 || digit > 9) break;
        result = result * 10 + digit;
        i++;
    }

    result = result * sign;
    if (result < INT_MIN) return INT_MIN; // if final result in less than min , return the min itself and not the result
    else if (result > INT_MAX) return INT_MAX; // if final result in grater than max , return the max itself and not the result

    return result;
};




