// reverse str and capitalize first letter without using built-in


// str = "using";
// let updatedStr = str.split("");
// let i = 0;
// let j = updatedStr.length - 1;

// while (i < j) {
//     let temp = updatedStr[i];
//     updatedStr[i] = updatedStr[j];
//     updatedStr[j] = temp;
//     i++;
//     j--;
// }
// updatedStr[updatedStr.length - 1] = updatedStr[updatedStr.length - 1].toUpperCase();
// console.log(updatedStr.join(""));

//..................................................................................................
function reverseStr(str) {
    str = str.split("");
    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
        [str[i], str[j]] = [str[j], str[i]];
        i++;
        j--;
    }

    str = str.join("");
    return str;
}

var reverseWords = function (s) {
    let res = reverseStr(s);
    console.log(res);

    res = res.split("");
    let i = 0, j = i + 1;
    let output = "";

    while (j <= res.length - 1) {
        if (res[i] == " ") i++;

        if (res[j] == " " && res[j - 1] !== " ") {
            let substr = res.slice(i, j);
            output += reverseStr(substr) + " ";
            i = j;
        }
        j++;

    }
    return output[output.length - 1] == " " ? output.slice(0, output.length - 1) : output;
};