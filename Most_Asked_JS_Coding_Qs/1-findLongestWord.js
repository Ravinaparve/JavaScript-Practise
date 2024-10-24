// find longest word in the string
//

let str = "Hello Worldddd"

let strCount = str.split(" ").map(word => word.length);

let result = Math.max(...strCount);

console.log(result);

//...........................................................

let maxLength = 0;
str = str.split(" ");
for (let word of str) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}
console.log(maxLength);