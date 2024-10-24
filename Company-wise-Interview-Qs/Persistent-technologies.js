const obj = [
    { apple: 2, orange: 1, banana: 3, grapes: 1 },
    { apple: 2, orange: 1, banana: 3 },
    { apple: 2, orange: 1, banana: 3, grapes: 2 },
];

//Expected Result:
//{apple: 6, orange: 3, banana: 9, grapes: 3}
//NOTE: Using reduce() method

const result = obj.reduce((acc, item) => {
    apple = acc.apple + item.apple,
        orange = acc.orange + item.orange,
        banana = acc.banana + item.banana,
        grapes = (acc.grapes || 0) + (item.grapes || 0)
    return {
        apple,
        orange,
        banana,
        grapes
    }

},)
console.log(result);


//Q2:
let objArr = [
    { Sno: 1, score: 20 },
    { Sno: 2, score: 30 },
    { Sno: 1, score: 50 }
];

let newArr = [];

// remove duplicates and consolidate the value.
[{ Sno: 1, score: 70 },
{ Sno: 2, score: 30 },]