//COGNIZANT ASKED INTERVIEW QS:


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// let str1="reverse words from the given string";

// function reverseStr(str){
//     let newStr = str.split(" ");
//     let ans =[];
//     console.log(newStr);
//     for(let word of newStr){
//         word = word.split("").reverse().join("");
//         word = word.slice(0,word.length-1)+word[word.length-1].toUpperCase();
//         ans.push(word);
//     }
//     return ans.join(" ");
// }
// let res =reverseStr(str1);
// console.log(res);


//a[name].toLowerCase()

function reverseFn(str) {
    str = str.split("");
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        [str[i], str[j]] = [str[j], str[i]];
        i++;
        j--;
    }
    str[str.length - 1] = str[str.length - 1].toUpperCase(); // here the str is still array, so we can do this.
    return str.join(""); // Convert the array back to a string
}
let sentence = "reverse words from the given string";
let newSent = sentence.split(" ").map(word => reverseFn(word));

console.log(newSent);



let numsArr = [12, 22, 17, 17, 12, 16];


let result = numsArr.filter((elem, i) => numsArr.indexOf(elem) == i);
console.log(result);


