// Q1. Flatten an array.  (flattenArray.js)

//Q2: what's the output:
// console.log(a);
// console.log(b);
// var a = b = 5;

//Q3: what's the output:
// let a = 2;
// let a = 5;
// console.log(a);

//Q4: what's the output:
console.log('4' - 6 * 5); // 4 -30 = -26 //the multiplication (*) operator has higher precedence than the subtraction (-) operator.
console.log('4' * 6 + 5); // 24+5 => 29
console.log('4' + 6 * 5); //'4'+30  =>430      

//Q5: what's the output:
console.log(typeof (NaN));

//Q6: what's the output:
console.log('5' - '3' + 6); // + and - has same precedence.. and express is evaluated from left to right


//Q7 : what's the output:

var arr = [1, 2, [3, 4]];
{

    let arr = ["Z", "A", "D", "B", "E"];
}
console.log(arr);


//Q8 : what's the output:

// let arr1 = ["Z", "A", "D", "B", "E"];
// var arr1 = [1, 2, [3, 4]];
// console.log(arr1);



//Q9: Sort without using built-in method.
let charArr = ["Z", "E", "D", "B", "A"];

for (let i = 0; i < charArr.length; i++) {
    for (let j = i + 1; j < charArr.length; j++) {
        if (charArr[i].charCodeAt(0) > charArr[j].charCodeAt(0)) {
            [charArr[i], charArr[j]] = [charArr[j], charArr[i]]
        }
    }
    console.log("result sort", charArr);

}





