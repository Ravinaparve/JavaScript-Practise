// let sentence = "This";
// let ans = sentence.split(" ");
// console.log(ans);
// console.log(ans.length - 1);


console.log(isFinite(null)); // true
//The null value is treated as 0 when used in numerical contexts, and since 0 is a finite number, isFinite(null) returns true.

console.log(+" "); //o/p: 0
//An empty string is then converted to 0 when using the unary plus operator. So, +" " evaluates to 0.

console.log(isFinite(" ")); // true


let str = 'As sly as a fox, as strong as an ox';

let target = 'as';

let pos = 0;
let foundPos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log(`found at position:${foundPos}`);

    pos = foundPos + 1;
}
