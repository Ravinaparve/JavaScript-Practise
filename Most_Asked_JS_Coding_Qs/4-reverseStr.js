// reverse str and capitalize first letter without using built-in


str = "using";
let updatedStr = str.split("");
let i = 0;
let j = updatedStr.length - 1;

while (i < j) {
    let temp = updatedStr[i];
    updatedStr[i] = updatedStr[j];
    updatedStr[j] = temp;
    i++;
    j--;
}
updatedStr[updatedStr.length - 1] = updatedStr[updatedStr.length - 1].toUpperCase();
console.log(updatedStr.join(""));