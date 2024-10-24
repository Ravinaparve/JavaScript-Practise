// remove duplicates from an array
// mthd 1
let arr = [12, 22, 14, 12, 12, 14];

let result = arr.filter((item, i, arr) => arr.indexOf(item) == i);
console.log(result) //[ 12, 22, 14 ]

//..............................................................
// mthd2
// using includes

//........................................................
// mthd3
let obj = {};

for (let elem of arr) {
    obj[elem] = (obj[elem] || 0) + 1;
}

let output = [];
for (let val in obj) {
    output.push(val);
}
console.log(output); //[ '12', '14', '22' ]