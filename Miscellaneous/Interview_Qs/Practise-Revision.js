let sentence = "This";
let ans = sentence.split(" ");
console.log(ans);
console.log(ans.length - 1);


console.log(isFinite(null)); // true
console.log(+" ");

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
