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
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        [str[start], str[end]] = [str[end], str[start]];
        start++;
        end--;
    }
    return str.join("");
}


function reverseSent(sent) {
    let res = [];
    sent = sent.split(" ");
    for (let i = 0; i < sent.length; i++) {
        sent[i] = reverseFn(sent[i]);
    }
    return sent.join(" ");
}

let sentence = "reverse words from the given string";
let res = reverseSent(sentence);
console.log(res);



let numsArr = [12, 22, 17, 17, 12, 16];


let result = numsArr.filter((elem, i) => numsArr.indexOf(elem) == i);
console.log(result);


